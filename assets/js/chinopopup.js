$(document).ready(function() {
    const messages = [
    "Isn't Chino just adorable? 🐰",
    "Enjoying your coffee? ☕",
    "Did you know Chino loves cute bunnies? 🐇",
    "Have you tried the Rabbit House menu? 🍰",
    "Chino makes the best coffee! ☕",
    "Every day is a good day for a cute bunny! 🐰",
    "Have you seen Chino's new apron? It's so cute! 👗",
    "Let's have a tea party with Chino! 🍵",
    "Chino's smile brightens my day! 😊",
    "Don't forget to pet the bunnies! 🐇",
    "Chino loves her friends so much! ❤️",
    "The Rabbit House is the coziest place! 🏡",
    "Chino's favorite dessert is strawberry shortcake! 🍰",
    "Every cup of coffee tells a story! ☕"
];

    const images = [
        "assets/img/popupChino/c1.png",
        "assets/img/popupChino/c2.png",
        "assets/img/popupChino/c3.png",
        "assets/img/popupChino/c4.png",
        "assets/img/popupChino/c5.png",
        "assets/img/popupChino/c6.png",
        "assets/img/popupChino/c7.png",
        "assets/img/popupChino/c8.png",
        "assets/img/popupChino/c9.png",
        "assets/img/popupChino/c10.png",
        "assets/img/popupChino/c11.png",
        "assets/img/popupChino/c12.png",
        "assets/img/popupChino/c13.png",
        "assets/img/popupChino/c14.png",
        "assets/img/popupChino/c15.png",
        "assets/img/popupChino/c16.png"
    ];

    let popupContainer = $('#popup-container');
    let popupImage = $('#popup-image');
    let popupMessage = $('#popup-message');

    let hasShownPopup = false; // Track if the popup has been shown

    $(window).scroll(function() {
        const quizSection = $('#Others');
        const scrollPosition = $(this).scrollTop() + $(window).height();
        const quizPosition = quizSection.offset().top + quizSection.outerHeight();

        if (scrollPosition > quizPosition && !hasShownPopup) {
            // Load a random image and message
            const randomImage = images[Math.floor(Math.random() * images.length)];
            const randomMessage = messages[Math.floor(Math.random() * messages.length)];

            popupImage.attr('src', randomImage);
            popupMessage.text(randomMessage);
            popupContainer.addClass('show').fadeIn();

            hasShownPopup = true; // Set the flag to true to prevent re-showing
        } else if (scrollPosition < quizPosition && hasShownPopup) {
            // Close the popup when scrolling up
            popupContainer.removeClass('show').fadeOut();
            hasShownPopup = false; // Reset the flag
        }
    });
});