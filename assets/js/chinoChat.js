window.PICKAXE=window.PICKAXE||{pickaxes:[],style:"kHsjoCQGgI0GWASmgIdIA2CHA0wGQyCwBQBUiEBzQQC+EgGQwgMA3gLICDMAoAnQgvFSCsUIPQYgIHqAEw4NXUgIz6DFQ4OkwghP2AGnoMFJgKAFA8gEA4QAI9gVPBABGqBU3gAggTMBAUQ6ApYkAAgIFMxwLcKgRvlAhyyAIG8DFAoAF1QOTugMODACreB2osAqaIBABQAAGgaINAr0OASwUCiIQGBARk6AUOiAo9GAq6qAZUKAAkOAhKAAoIBDz4AAB4CkT4AR8YCSIYBygIASwoDgAoCTBoCTQIDT04B01oBj1IBDAYD1o4AWNYCmoIC29oBCM4CXl4CBgIDEU4DDN4Cyc4CnsoDReIATdoCiWYCXaoAZlIAVBYAYGoAaYoAntoD68YA3OIAb1ICIBIDZpIDEQIDBQIC3NIAgDIAIToBLxIAkBYDAAoCAFoAPLoC+L4D4GICOR4ACwIAKPIC0TICBUoBBwoAAGUAClKAQDJAIABgEi6QAYBQAoQC6JoAAykAAVGAL0BADEPgF5EQDokYBRYUAwpCACcRAFglgFxiQDPEYBIY8ATSOAAc9AONggAE2wAnioAQGcAxEqAOaFAEaCgBxHQB6RYA8kEAEPIATUAQJWADAZAAOIgDRZwCLxYA2pEABHaASmTANOAgFFPGSAGXTAIuhgEJEwDoBYAl7MACKaAURdAAYygBgmuSAELpAAAZgF8RwDnfYAy00At6CAQUFAC4JgHoSQDr9YAiYMATRqACn9AO3YgHXZQBiMIAy3sAGEiAQKhABk3AEzAADNgAA4QCBEIAyy0AcxmAPUpACi5gBcrwAYCIAE2UADzSAPBLAE2egAy9wApv4AtJMAGL2AHC5AMsZgA8uwBQSIBVWsA2SKABPdAFxJgAA8QCIJIA3SEAgsCADYTAKdGgHjMQAaF4ASyEAJ1OAHLhAF5zgHQEQAlvIBQVEAwAaARU1AGs0gHwfwDUc4AIgYAl4BlsMAkqmAOaJAFvIgAsFQBACsAc9RAF+qQAzY8AEPnAC9qQApAkAEbzABqmQAyY0ABcnAFGbwAABCAA="},window.PICKAXE.pickaxes.push({id:"Kafuu_Chino_8JTND",type:"fab"});const{id:_fid}=window.PICKAXE.pickaxes[0];fetch(`https://embed.pickaxeproject.com/axe/api/script/${_fid}`).then((e=>e.json())).then((({v:e})=>{const t=`https://cdn.jsdelivr.net/gh/pickaxeproject/cdn@${e}/dist`;if(!document.querySelector(`script[src="${t}/bundle.js"]`)){const e=document.createElement("script");e.src=t+"/bundle.js",e.defer=!0,document.head.appendChild(e)}}));

window.addEventListener('load', () => {
    const chatCircle = document.querySelector('.chat-bot-circle');
    const chatWidget = document.getElementById('pickaxe-inline-Kafuu_Chino_8JTND');
    const chatBubble = document.querySelector('.chat-bubble');
    let isPopupOpen = false;

    // Expanded Kafuu Chino messages
    const chinoMessages = [
        "Welcome to Rabbit House Coffee! I'm Kafuu Chino...",
        "Would you like to try our special blend today?",
        "Tippy recommends the Kilimanjaro coffee...",
        "We take pride in our carefully selected beans...",
        "Our cakes are freshly baked every morning...",
        "Cocoa-san helped me improve my latte art...",
        "Rize-san taught me about different coffee beans...",
        "Chiya-san sometimes brings Japanese sweets...",
        "Syaro-san often visits us for coffee...",
        "Would you like to hear about our daily specials?",
        "The aroma of fresh coffee is always wonderful...",
        "Tippy helps me greet customers...",
        "We also serve special seasonal blends...",
        "Our café has a relaxing atmosphere...",
        "Feel free to stay as long as you like...",
        "Did you know? Rabbit House has been here for generations...",
        "I'm learning to be a barista like my grandfather...",
        "Tippy says our espresso is the best in town...",
        "We have a loyalty program if you're interested...",
        "Our Mocha is perfect for chocolate lovers...",
        "Have you tried our Rabbit House Special Cake?",
        "Rize-san's latte art is really impressive...",
        "We source our beans from all over the world...",
        "Chiya-san taught me about tea ceremonies...",
        "Cocoa-san always brings energy to the café...",
        "We have a quiet corner perfect for reading...",
        "Our iced coffee is refreshing on hot days...",
        "Tippy loves when customers pet him...",
        "We're open late for night owls...",
        "Our cappuccino foam is always perfectly creamy...",
        "Have you seen our seasonal menu?",
        "We offer free Wi-Fi for our customers...",
        "Our cold brew takes 12 hours to prepare...",
        "Syaro-san recommends our green tea latte...",
        "We have a variety of non-coffee drinks too...",
        "Our Rabbit House blend is a secret family recipe...",
        "We host coffee tasting events monthly...",
        "Tippy's favorite treat is our carrot cake...",
        "Our café au lait is perfect for mornings...",
        "We use a special technique for our pour-over coffee...",
        "Have you tried pairing our coffee with our pastries?",
        "Rize-san's coffee knowledge is impressive...",
        "We offer coffee beans for home brewing too...",
        "Our café has a lovely view of the town...",
        "Cocoa-san always cheers up our customers...",
        "We have a book exchange corner by the window...",
        "Our affogato is a delightful treat...",
        "Tippy sometimes wears a little barista apron...",
        "We're passionate about coffee education...",
        "Our hot chocolate is made with real cocoa..."
    ];

    let currentMessageIndex = 0;

    // Function to show next message
    function showNextMessage() {
        if (!isPopupOpen) {
            chatBubble.textContent = chinoMessages[currentMessageIndex];
            chatBubble.classList.add('show');
            currentMessageIndex = (currentMessageIndex + 1) % chinoMessages.length;
        }
    }

    // Initial message
    showNextMessage();

    // Function to toggle steam visibility
    function toggleSteam(show) {
        const steam = document.querySelector('.coffee-steam');
        steam.style.opacity = show ? '1' : '0';
    }

    // Change message every 15 seconds
    const messageInterval = setInterval(showNextMessage, 15000);

    // Update click handler
    chatCircle.addEventListener('click', () => {
        if (!isPopupOpen) {
            chatWidget.classList.add('show');
            chatBubble.classList.remove('show');
            toggleSteam(true);
            isPopupOpen = true;
        } else {
            chatWidget.classList.remove('show');
            toggleSteam(false);
            setTimeout(showNextMessage, 1000);
            isPopupOpen = false;
        }
    });

    // Close popup when clicking outside
    document.addEventListener('click', (e) => {
        if (!chatWidget.contains(e.target) && !chatCircle.contains(e.target) && isPopupOpen) {
            chatWidget.classList.remove('show');
            setTimeout(showNextMessage, 1000);
            isPopupOpen = false;
        }
    });

    // Add Tippy interaction
document.querySelector('.tippy-companion').addEventListener('click', (e) => {
    e.stopPropagation();
    const menu = document.querySelector('.coffee-menu');
    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'block';
        // Add wiggle animation to Tippy when menu opens
        e.target.style.animation = 'none';
        e.target.offsetHeight; // Trigger reflow
        e.target.style.animation = 'tippyFloat 3s ease-in-out infinite';
    } else {
        menu.style.display = 'none';
    }
});

document.querySelector('.tippy-companion').addEventListener('click', (e) => {
    e.stopPropagation();
    const menu = document.querySelector('.coffee-menu');
    menu.classList.toggle('show');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    const menu = document.querySelector('.coffee-menu');
    const tippy = document.querySelector('.tippy-companion');
    if (!menu.contains(e.target) && !tippy.contains(e.target)) {
        menu.style.display = 'none';
    }
});

document.querySelectorAll('.coffee-menu li').forEach(item => {
    item.addEventListener('click', () => {
        item.style.animation = 'menuItemPop 0.5s ease';
        setTimeout(() => {
            item.style.animation = '';
        }, 500);
        
        // Show a cute ordering message in the chat bubble
        const itemName = item.textContent.split('¥')[0].trim();
        chatBubble.textContent = `Would you like to order ${itemName}? It's one of our favorites!`;
        chatBubble.classList.add('show');
    });
});

// Add steam effect when chat is opened
chatCircle.addEventListener('click', () => {
    if (!isPopupOpen) {
        document.querySelector('.coffee-steam').style.opacity = '1';
    } else {
        document.querySelector('.coffee-steam').style.opacity = '0';
    }
    });

    // Cleanup on page unload
    window.addEventListener('unload', () => {
        clearInterval(messageInterval);
    });
    
    // Ensure initial visibility
    document.querySelector('.chat-environment').style.display = 'block';
    document.querySelector('.coffee-steam').style.display = 'block';
    document.querySelector('.coffee-beans').style.display = 'block';
});

document.addEventListener('DOMContentLoaded', function() {
    let rabbitCoins = 500; // Starting balance
    const rabbitCoinDisplay = document.getElementById('rabbit-coin-amount');
    const buyButtons = document.querySelectorAll('.buy-button');
    const chatBubble = document.querySelector('.chat-bubble');

    function updateRabbitCoins() {
        rabbitCoinDisplay.textContent = rabbitCoins;
        localStorage.setItem('rabbitCoins', rabbitCoins); // Store balance in local storage
    }

    // Load saved balance from local storage
    if (localStorage.getItem('rabbitCoins')) {
        rabbitCoins = parseInt(localStorage.getItem('rabbitCoins'));
        updateRabbitCoins();
    }

    buyButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent triggering parent li click event
            const item = this.closest('li');
            const price = parseInt(item.dataset.price);
            const itemName = item.textContent.split('🐰')[0].trim();

            if (rabbitCoins >= price) {
                rabbitCoins -= price;
                updateRabbitCoins();
                chatBubble.textContent = `Enjoy your ${itemName}! That'll be ${price} Rabbit Coins.`;
                chatBubble.classList.add('show');
                
                // Animate the button
                this.classList.add('buying');
                setTimeout(() => this.classList.remove('buying'), 500);
            } else {
                chatBubble.textContent = "I'm sorry, you don't have enough Rabbit Coins for that.";
                chatBubble.classList.add('show');
            }

            // Hide chat bubble after 3 seconds
            setTimeout(() => chatBubble.classList.remove('show'), 3000);
        });
    });

    // Add hover effect for menu items
    document.querySelectorAll('.coffee-menu li').forEach(item => {
        item.addEventListener('mouseenter', () => {
            const itemName = item.textContent.split('🐰')[0].trim();
            chatBubble.textContent = `Would you like to try our ${itemName}?`;
            chatBubble.classList.add('show');
        });

        item.addEventListener('mouseleave', () => {
            chatBubble.classList.remove('show');
        });
    });
});