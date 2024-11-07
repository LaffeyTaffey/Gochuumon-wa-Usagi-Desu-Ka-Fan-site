// Initialize AOS
AOS.init({
    duration: 1000,
    once: true
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

$(document).ready(function() {
            const corsProxy = 'https://cors-anywhere.herokuapp.com/';
            const rssUrl = corsProxy + 'https://www.happyou.info/fs/gen.php?u=1965150567&p=292715482';
            
            function createPostCard(title, imgSrc) {
                if (!imgSrc) return ''; // Skip if no image

                return `
                    <div class="_b8m2p">
                        <div class="_c4n3q">
                            <h5 class="_i3k7l">${title}</h5>
                        </div>
                        <div class="_d5r7s">
                            <img src="${imgSrc}" alt="Post image">
                        </div>
                        <div class="_e6t1u">
                            <div class="_f2w8v">
                                <div class="_g9x4h">
                                    <i class="fas fa-heart"></i> Like
                                </div>
                                <div class="_g9x4h">
                                    <i class="fas fa-retweet"></i> Share
                                </div>
                                <div class="_g9x4h">
                                    <i class="fas fa-bookmark"></i> Save
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            }

            $.ajax({
                url: rssUrl,
                dataType: 'xml',
                success: function(data) {
                    $('#loading').hide();
                    let postsHtml = '';
                    
                    // Create a map to store unique posts
                    const uniquePosts = new Map();

                    $(data).find('item').each(function() {
                        const $item = $(this);
                        const description = $item.find('description').text();
                        const tempDiv = $('<div>').html(description);
                        const imgSrc = tempDiv.find('img').attr('src');
                        
                        if (imgSrc && !uniquePosts.has(imgSrc)) {
                            const title = $item.find('title').text() || 'Image Post';
                            uniquePosts.set(imgSrc, {
                                title: title,
                                imgSrc: imgSrc
                            });
                        }
                    });

                    // Convert unique posts to HTML
                    uniquePosts.forEach(post => {
                        postsHtml += createPostCard(post.title, post.imgSrc);
                    });

                    $('#posts-container').html(postsHtml);
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    $('#loading').html(`
                        <div class="alert alert-danger">
                            Error loading content: ${textStatus}
                        </div>
                    `);
                }
            });
        });