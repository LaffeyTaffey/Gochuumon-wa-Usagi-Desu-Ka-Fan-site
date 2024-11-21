particlesJS("particles-js", {
   "particles": {
       "number": {
           "value": 30, // Increase particle count for a fuller effect
           "density": {
               "enable": true,
               "value_area": 800
           }
       },
       "color": {
           "value": ["#FFB6C1", "#D8BFD8", "#ADD8E6"] // Pastel pink, lavender, light blue
       },
       "shape": {
           "type": ["circle", "star"], // Mix of soft circles and stars
           "stroke": {
               "width": 0,
               "color": "#ffffff"
           },
           "polygon": {
               "nb_sides": 5
           },
           "image": {
               "src": "heart.svg", // Optional: add heart-shaped particles if desired
               "width": 100,
               "height": 100
           }
       },
       "opacity": {
           "value": 0.7,
           "random": true,
           "anim": {
               "enable": true,
               "speed": 1,
               "opacity_min": 0.3,
               "sync": false
           }
       },
       "size": {
           "value": 8,
           "random": true,
           "anim": {
               "enable": true,
               "speed": 4,
               "size_min": 0.5,
               "sync": false
           }
       },
       "line_linked": {
           "enable": false // Disable lines to keep the effect soft and clean
       },
       "move": {
           "enable": true,
           "speed": 1.5,
           "direction": "none", // Smooth floating effect without a set direction
           "random": true,
           "straight": false,
           "out_mode": "out", // Particles float in and out naturally
           "bounce": false
       }
   },
   "interactivity": {
       "detect_on": "canvas",
       "events": {
           "onhover": {
               "enable": false // Disable hover interaction
           },
           "onclick": {
               "enable": false // Disable click interaction
           }
       }
   },
   "retina_detect": true
});
