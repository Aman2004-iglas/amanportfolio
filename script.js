let menuOpen = false;
const sidebar = document.getElementById('side-menu');
const items = sidebar.querySelectorAll('.menu-item');

function toggleMenu() {
  if (!menuOpen) {
    // Open sidebar with animation
    let tl = gsap.timeline();
    tl.to(sidebar, { x: 250, duration: 0.5, ease: "power3.out" }); // move sidebar in
    tl.fromTo(
      items,
      { x: -50, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.3, stagger: 0.1 , delay: 0.5},
      "-=0.3"
    ); // staggered items
  } else {
    // Close sidebar with reverse animation
    let tl = gsap.timeline();
    tl.to(items, { x: -50, opacity: 0, duration: 0.2, stagger: 0.1 }); // animate items out
    tl.to(sidebar, { x: 0, duration: 0.5, ease: "power3.in" }, "-=0.1"); // move sidebar back
  }
  menuOpen = !menuOpen;
}



// --------------------------------------

let tl2 = gsap.timeline();
tl2.from(".logo", { y: -50, opacity: 0, duration: 0.4, ease: "power3.out", delay: 0.2 });
tl2.from(".nav-items", { y: -50, opacity: 0, duration: 0.5, ease: "power3.out" });
tl2.from(".nav-items ul li ", { y: -30, opacity: 0, duration: 0.5, ease: "power3.out", stagger: 0.3} );
tl2.from(".resume", { x: 50, opacity: 0, duration: 0.4, ease: "power3.out" },);
tl2.from(".left > *", {
  y: -50,
  opacity: 0,
  duration: 0.9,
  ease: "power3.out",
  stagger: 0.3
});             
tl2.from(".right", { x: 50, opacity: 0, duration: 0.6, ease: "power3.out" });
// --------------------------------------
gsap.from(".about-section .about-left", { 
    x: -50,
    opacity: 0,
    duration: 0.6,
    ease: "power3.out",  
    scrollTrigger: {
        trigger: ".about-section",
        start: "top 80%",
        end: "top 20%",
        scrub: true,
        markers: true
    }
});

gsap.from(".about-section .about-right", { 
    x: 50,
    opacity: 0, 
    duration: 0.6, 
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".about-section",
        start: "top 80%",
        end: "top 20%",
        scrub: true,
        markers: true
    }
});
