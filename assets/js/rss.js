// Initialize AOS
AOS.init({
    duration: 1000,
    once: true,
    offset: 100,
    disable: false,
    startEvent: 'DOMContentLoaded',
    initClassName: 'aos-init',
    animatedClassName: 'aos-animate',
    useClassNames: false,
    disableMutationObserver: false,
    throttleDelay: 99,
    debounceDelay: 50
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Character card hover effect
const characterCards = document.querySelectorAll('.character-card');
characterCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.05) translateY(-10px)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1) translateY(0)';
    });
});

// Gallery lightbox
const galleryItems = document.querySelectorAll('.gallery-item');
galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        // Implement lightbox functionality
    });
});

$(document).on('click', '.share', function() {
    const postLink = $(this).data('link');

    if (navigator.share) {
        navigator.share({
            title: 'Check out this post!',
            url: postLink,
        }).then(() => {
            console.log('Post shared successfully!');
        }).catch((error) => {
            console.error('Error sharing the post:', error);
        });
    } else {
        // Fallback for browsers that do not support the share API
        const tempInput = document.createElement('input');
        tempInput.value = postLink;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);
        alert('Link copied to clipboard!');
    }
});

$(document).ready(function() {
    const rssUrl = '/reddit-proxy';

    function extractPostDetails($entry) {
        // Extract additional details from the RSS entry
        const description = $entry.find('content').text();
        const tempDiv = $('<div>').html(description);
        
        // Try to extract additional metadata
        const matches = description.match(/\[link\]\((.*?)\).*?(\d+) comments/);
        
        return {
            title: $entry.find('title').text(),
            link: $entry.find('link').attr('href'),
            imgSrc: tempDiv.find('img').attr('src'),
            // Attempt to extract additional details
            postLink: matches ? matches[1] : null,
            commentCount: matches ? parseInt(matches[2]) : 0,
            author: $entry.find('author name').text(),
            published: $entry.find('published').text()
        };
    }

    $(document).on('click', '.upvote', function() {
    const upvoteCountElement = $(this).find('.rss-upvote-count');
    let currentVotes = parseInt(upvoteCountElement.text());
    currentVotes += 1;
    upvoteCountElement.text(currentVotes);
    $(this).data('votes', currentVotes);
});

$(document).on('click', '.downvote', function() {
    const downvoteCountElement = $(this).find('.rss-downvote-count');
    let currentVotes = parseInt(downvoteCountElement.text());
    currentVotes += 1;
    downvoteCountElement.text(currentVotes);
    $(this).data('votes', currentVotes);
});

$(document).on('click', '.comment-toggle', function() {
    $(this).closest('.rss-post-interactions').find('.comment-section').toggle();
});

$(document).on('click', '.submit-comment', function() {
    const commentInput = $(this).siblings('.comment-input');
    const commentText = commentInput.val();
    if (commentText) {
        const commentsList = $(this).siblings('.comments-list');
        commentsList.append(`<div class="comment">${commentText}</div>`);
        commentInput.val(''); // Clear input after submitting
    }
});

    function formatNumber(num) {
        // Format large numbers with k/m suffixes
        if (num >= 1000000) return (num / 1000000).toFixed(1) + 'm';
        if (num >= 1000) return (num / 1000).toFixed(1) + 'k';
        return num;
    }

    function createPostCard(post) {
    if (!post.imgSrc) return ''; 

    // Convert publish date to relative time
    const publishDate = new Date(post.published);
    const relativeTime = formatRelativeTime(publishDate);

    return `
        <div class="rss-post-container" data-aos="zoom-in" data-aos-delay="50">
            <a href="${post.link}" class="rss-post-link" target="_blank">
                <div class="rss-post-header">
                    <h5 class="rss-post-title">${post.title}</h5>
                    <div class="rss-post-meta">
                        <span class="rss-post-author">
                            <i class="fas fa-user"></i> ${post.author}
                        </span>
                        <span class="rss-post-date">
                            <i class="fas fa-clock"></i> ${relativeTime}
                        </span>
                    </div>
                </div>
                <div class="rss-post-image">
                    <img src="${post.imgSrc}" alt="Post image" loading="lazy">
                </div>
            </a>
            <div class="rss-post-interactions">
                <div class="rss-interaction-container">
                    <div class="rss-interaction-item upvote" data-votes="0">
                        <i class="fas fa-arrow-up"></i> 
                        <span class="rss-upvote-count">0</span>
                    </div>
                    <div class="rss-interaction-item downvote" data-votes="0">
                        <i class="fas fa-arrow-down"></i>
                        <span class="rss-downvote-count">0</span>
                    </div>
                    <div class="rss-interaction-item share" data-link="${post.link}">
                        <i class="fas fa-share-alt"></i> Share
                    </div>
                    <div class="rss-interaction-item comment-toggle">
                        <i class="fas fa-comment"></i> Comment
                    </div>
                </div>
                <div class="comment-section" style="display: none;">
                    <textarea class="comment-input" placeholder="Add a comment..."></textarea>
                    <button class="submit-comment">Submit</button>
                    <div class="comments-list"></div>
                </div>
            </div>
        </div>
    `;
}

    // Relative time formatting function
    function formatRelativeTime(date) {
        const now = new Date();
        const diffInSeconds = Math.floor((now - date) / 1000);
        
        const intervals = [
            { label: 'year', seconds: 31536000 },
            { label: 'month', seconds: 2592000 },
            { label: 'week', seconds: 604800 },
            { label: 'day', seconds: 86400 },
            { label: 'hour', seconds: 3600 },
            { label: 'minute', seconds: 60 },
            { label: 'second', seconds: 1 }
        ];

        for (let interval of intervals) {
            const count = Math.floor(diffInSeconds / interval.seconds);
            if (count >= 1) {
                return count === 1 
                    ? `1 ${interval.label} ago` 
                    : `${count} ${interval.label}s ago`;
            }
        }

        return 'just now';
    }

    $.ajax({
        url: rssUrl,
        dataType: 'xml',
        success: function(data) {
            $('#loading').hide();
            let postsHtml = '';
            const uniquePosts = new Map();

            $(data).find('entry').each(function() {
                const $entry = $(this);
                const post = extractPostDetails($entry);

                if (post.imgSrc && !uniquePosts.has(post.imgSrc)) {
                    uniquePosts.set(post.imgSrc, post);
                }
            });

            // Randomize and limit posts
            const shuffledPosts = Array.from(uniquePosts.values())
                .sort(() => 0.5 - Math.random())
                .slice(0, 12);

            shuffledPosts.forEach(post => {
                postsHtml += createPostCard(post);
            });

            $('#posts-container').html(postsHtml);

            // Post animation
        const postElements = document.querySelectorAll('.rss-post-container');
        postElements.forEach((post, index) => {
            post.style.animationDelay = `${index * 100}ms`;
            post.classList.add('post-enter');
        });
        },
        error: function(jqXHR, textStatus, errorThrown) {
            $('#loading').html(`
                <div class="alert alert-danger" data-aos="fade-in">
                    Error loading content: ${textStatus}
                </div>
            `);
        }
    });
});