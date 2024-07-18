gsap.to("#boxGreen", {
    rotation: 90,
    repeat: -1,
})

var granimInstance = new Granim({
    element: '#canvas-image',
    direction: 'radial',
    isPausedWhenNotInView: true,
    states : {
        "default-state": {
            gradients: [
                ['#13162e', '#132e15'],
                ['#132e26', '#13252e'],
            ],
            transitionSpeed: 7000
        }
    }
});

// Wrap every letter in a span
var textWrapper = document.querySelector('.ml6 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml6 .letter',
    translateY: ["1.1em", 0],
    translateZ: 0,
    duration: 750,
    delay: (el, i) => 50 * i
  }).add({
    targets: '.ml6',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });