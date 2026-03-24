const setupPopover = (btnId, popoverId) => {
    const btn = document.getElementById(btnId);
    const popover = document.getElementById(popoverId);

    if (!btn || !popover) return;

    // Toggle popover when button is clicked
    btn.addEventListener("click", (e) => {
        popover.classList.toggle("active");
        e.stopPropagation(); // Stop click from reaching the document (which would close it)
    });

    // Clicks inside the popover shouldn't close it
    popover.addEventListener("click", (e) => {
        e.stopPropagation(); 
    });
};


// A much simpler document listener: if a click makes it this far, close all popovers
document.addEventListener("click", () => {
    document.getElementById("share-popover")?.classList.remove("active");
    document.getElementById("share-popover-footer")?.classList.remove("active");
});
setupPopover("share-trigger-btn", "share-popover");
setupPopover("share-trigger-btn-footer", "share-popover-footer");

function toggleDubMute() {
    const video = document.getElementById("dub-video");
    const btn = document.querySelector(".unmute-btn");
    const icon = document.getElementById("mute-icon");
    const text = document.getElementById("mute-text");

    if (video.muted) {
        video.muted = false;
        btn.classList.add("is-unmuted");
        icon.className = "fas fa-volume-high";
        text.innerText = "Mute";
    } else {
        video.muted = true;
        btn.classList.remove("is-unmuted");
        icon.className = "fas fa-volume-xmark";
        text.innerText = "Unmute";
    }
}

// Video Presentation Toggle
const vidDetails = document.querySelector(".video-presentation-details");
const vidSummary = document.querySelector(".video-presentation-summary");
if (vidDetails && vidSummary) {
    vidDetails.addEventListener("click", (e) => {
        if (e.target === vidDetails || e.target === vidSummary) {
            vidDetails.classList.toggle("open");
        }
    });
}

// GSAP Scroll Animations
gsap.registerPlugin(ScrollTrigger);

// Remove initial hiding for GSAP
gsap.set(".fade-up, .blur-up, .blur-up-dark, .scale-up, .finding-card", { autoAlpha: 1 });

// Autonomous Gaze Animation in Hero
const gazeOrb = document.getElementById("gaze-cursor");
const subtitleContainer = document.getElementById("simulated-subtitle");
const heroSection = document.getElementById("hero");

let isHeroAnimPaused = false;
let masterHeroTimeline;

function playSubtitleCycle() {
    subtitleContainer.innerHTML = "";
    const wordCount = gsap.utils.random(4, 9, 1);
    for (let i = 0; i < wordCount; i++) {
        const w = document.createElement("div");
        w.className = "simulated-word";
        w.style.width = gsap.utils.random(30, 80) + "px";
        subtitleContainer.appendChild(w);
    }

    // Ensure container is in its final position to measure accurately
    gsap.set(subtitleContainer, { opacity: 0, y: 0, x: 0 });

    const words = subtitleContainer.children;
    const heroRect = heroSection.getBoundingClientRect();

    // Pre-calculate target coordinates horizontally
    const coords = [];
    for (let i = 0; i < words.length; i++) {
        const rect = words[i].getBoundingClientRect();
        coords.push({
            x: rect.left - heroRect.left + rect.width / 2,
            y: rect.top - heroRect.top + rect.height / 2
        });
    }

    // Master timeline to chain the entire loop cycle seamlessly
    masterHeroTimeline = gsap.timeline({
        onComplete: playSubtitleCycle
    });

    // 1. Bring the subtitle into view
    masterHeroTimeline.fromTo(subtitleContainer,
        { opacity: 0, y: 20, x: 0 },
        { opacity: 1, y: 0, x: 0, duration: 0.6, ease: "power2.out" }
    );

    // 2. Wait a moment, then move orb to start of subtitle
    masterHeroTimeline.to(gazeOrb, {
        x: coords[0].x,
        y: coords[0].y,
        duration: 0.4,
        ease: "power2.out"
    }, "+=0.2");

    // 3. Read across words
    let currentX = coords[0].x;
    for (let i = 1; i < coords.length; i++) {
        const targetX = coords[i].x;
        const targetY = coords[i].y;
        const isSkip = Math.random() < 0.15;
        const dist = Math.abs(targetX - currentX);
        const duration = isSkip ? 0.3 : (dist / 500); // Constant reading speed

        masterHeroTimeline.to(gazeOrb, {
            x: targetX,
            y: targetY,
            duration: duration,
            ease: "none"
        });
        currentX = targetX;
    }

    // 4. Wander off temporarily and fade out subtitle
    masterHeroTimeline.to(gazeOrb, {
        x: heroRect.width * gsap.utils.random(0.3, 0.7),
        y: heroRect.height * gsap.utils.random(0.3, 0.7),
        duration: 0.6,
        ease: "power2.inOut"
    }, "+=0");

    masterHeroTimeline.to(subtitleContainer, {
        opacity: 0,
        y: -10,
        duration: 0.5
    }, "+=0.2");
}

// Initial setup for orb position
const initHeroRect = document.getElementById("hero").getBoundingClientRect();
gsap.set(gazeOrb, {
    x: initHeroRect.width / 2,
    y: initHeroRect.height / 3
});

// Start subtitle reading animation loop
setTimeout(() => {
    playSubtitleCycle();
}, 1000);

// Pause Button Logic
const pauseHeroBtn = document.getElementById("pause-hero-btn");
if (pauseHeroBtn) {
    pauseHeroBtn.addEventListener("click", () => {
        isHeroAnimPaused = !isHeroAnimPaused;
        
        if (isHeroAnimPaused) {
            pauseHeroBtn.innerHTML = '<i class="fas fa-play"></i>';
            if (masterHeroTimeline) masterHeroTimeline.pause();
        } else {
            pauseHeroBtn.innerHTML = '<i class="fas fa-pause"></i>';
            if (masterHeroTimeline) masterHeroTimeline.play();
        }
    });
}

// Hero Init Animations
const heroTl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1.2 } });
heroTl.fromTo(".blur-up",
    { y: 40, opacity: 0, filter: "blur(12px)" },
    { y: 0, opacity: 1, filter: "blur(0px)", stagger: 0.15 }
);

// Teaser Image Reveal Parallax
gsap.fromTo("#teaser-image",
    { scale: 0.9, y: 50, filter: "blur(10px)", opacity: 0 },
    {
        scale: 1, y: 0, filter: "blur(0px)", opacity: 1,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
            trigger: "#teaser-image",
            start: "top 85%",
        }
    }
);

// Interventions Title
gsap.fromTo(".blur-up-dark",
    { y: 40, opacity: 0, filter: "blur(10px)" },
    {
        y: 0, opacity: 1, filter: "blur(0px)", duration: 1, stagger: 0.1,
        scrollTrigger: { trigger: "#interventions", start: "top 70%" }
    }
);

// Staggered Intervention Rows
gsap.utils.toArray(".intervention-row").forEach((row, i) => {
    gsap.fromTo(row,
        { opacity: 0, y: 60 },
        {
            opacity: 1, y: 0, duration: 1.2, ease: "power2.out",
            scrollTrigger: {
                trigger: row,
                start: "top 80%",
            }
        }
    );
});

// Findings Cards
gsap.utils.toArray(".finding-card").forEach(card => {
    gsap.fromTo(card,
        { opacity: 0, y: 40, filter: "blur(5px)" },
        {
            opacity: 1, y: 0, filter: "blur(0px)", duration: 1.2, ease: "power3.out",
            scrollTrigger: {
                trigger: card,
                start: "top 85%"
            }
        }
    );
});

// Generic Fade-Up Animations for Discussion, Future Works, Team, and Citations
gsap.utils.toArray(".fade-up").forEach(el => {
    gsap.fromTo(el,
        { opacity: 0, y: 30, filter: "blur(4px)" },
        {
            opacity: 1, y: 0, filter: "blur(0px)", duration: 1, ease: "power3.out",
            scrollTrigger: {
                trigger: el,
                start: "top 85%"
            }
        }
    );
});

// Video Progress Bar Logic
document.addEventListener("DOMContentLoaded", () => {
    const wrappers = document.querySelectorAll(".video-wrapper");
    wrappers.forEach(wrapper => {
        const video = wrapper.querySelector("video");
        const progressBar = wrapper.querySelector(".video-progress-bar");
        const progressContainer = wrapper.querySelector(".video-progress-container");

        if (video && progressBar && progressContainer) {
            // Update progress bar smoothly per frame
            const updateProgress = () => {
                if (video.duration) {
                    const percent = (video.currentTime / video.duration) * 100;
                    if (!isNaN(percent)) {
                        progressBar.style.width = percent + "%";
                    }
                }
                requestAnimationFrame(updateProgress);
            };

            // Start the smooth animation loop
            requestAnimationFrame(updateProgress);

            // Allow clicking on progress bar to seek
            progressContainer.addEventListener("click", (e) => {
                const rect = progressContainer.getBoundingClientRect();
                const pos = (e.clientX - rect.left) / rect.width;
                video.currentTime = pos * video.duration;
            });
        }
    });
});

