$(document).ready(function() {
    const welcomeScreen = $('#welcome-screen');
    const japaneseSubtitle = $('.japanese-subtitle');
    const englishSubtitle = $('.english-subtitle');
    const startButton = $('#start-button');
    const subtitleContainer = $('.subtitle-container');
    const audio = new Audio('assets/audio/voicebank/01-1.mp3');

    const phrases = [
        { text: "いらっしゃいませあなたが新人さんです", subtitle: "Welcome... you must be the newcomer.", start: 0, end: 4.4 },
        { text: "ね私は知乃です分から", subtitle: "I'm Chino.", start: 4.4, end: 6.3 },
        { text: "ないことがあれば何で", subtitle: "If you have any questions,", start: 6.3, end: 7.9 },
        { text: "も聞いてください", subtitle: "please feel free to ask me.", start: 7.9, end: 8.8 }
    ];

    function updateSubtitles(time) {
        const currentPhrase = phrases.find(phrase => time >= phrase.start && time < phrase.end);
        if (currentPhrase) {
            japaneseSubtitle.text(currentPhrase.text);
            englishSubtitle.text(currentPhrase.subtitle);
            subtitleContainer.addClass('show');
        } else {
            japaneseSubtitle.text('');
            englishSubtitle.text('');
            subtitleContainer.removeClass('show');
        }
    }

    startButton.on('click', function() {
        $(this).prop('disabled', true).css('opacity', '0.5');
        subtitleContainer.fadeIn();
        audio.play();
    });

    audio.addEventListener('timeupdate', function() {
        updateSubtitles(audio.currentTime);
    });

    audio.addEventListener('ended', function() {
        // Add the fade-out class
        welcomeScreen.addClass('fade-out');
        
        // Remove the element after the transition
        setTimeout(() => {
            welcomeScreen.remove();
        }, 500); // This should match the transition duration in CSS
    });
});
