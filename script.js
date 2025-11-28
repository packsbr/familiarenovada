// Initialize Icons
lucide.createIcons();

// Scroll Animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Social Proof Toast
const toast = document.getElementById('toast');
const toastName = document.getElementById('toast-name');
const toastTime = document.getElementById('toast-time');
const names = ["Ana P.", "Carla M.", "Fernanda S.", "Juliana C.", "Beatriz L.", "Patricia R."];

function showToast() {
    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomTime = Math.floor(Math.random() * 10) + 1;
    
    toastName.innerText = randomName;
    toastTime.innerText = randomTime + " min";
    
    toast.classList.remove('opacity-0', 'translate-y-10');
    
    setTimeout(() => {
        toast.classList.add('opacity-0', 'translate-y-10');
    }, 4000);
}

setTimeout(showToast, 3000);
setInterval(showToast, 15000);
