document.addEventListener('DOMContentLoaded', () => {
    const parallaxContainer = document.querySelector('.parallax-container');
    const parallaxLayers = document.querySelectorAll('.parallax-layer');
    
    const isElementInViewport = (el) => {
        const rect = el.getBoundingClientRect();
        return (
            rect.top < (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom >= 0
        );
    };

    let rafId = null;

    const handleMouseMove = (e) => {
        // Cancel the previous animation frame
        if (rafId) {
            cancelAnimationFrame(rafId);
        }

        // Schedule a new animation frame
        rafId = requestAnimationFrame(() => {
            if (!isElementInViewport(parallaxContainer)) return;

            parallaxLayers.forEach(layer => {
                const speed = parseFloat(layer.dataset.speed);
                const x = (e.pageX * speed) / 50 + (layer.classList.contains('layer-2') ? window.innerWidth * 0.1 : 0);
                const y = (e.pageY * speed) / 50;
                
                layer.style.transform = `translate(${x}px, ${y}px)`;
            });
        });
    };

    window.addEventListener('mousemove', handleMouseMove);
});