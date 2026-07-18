// Typing Animation
const roles = [
    "Mechanical Engineer",
    "Design Engineer",
    "CAD Designer",
    "Digital Engineer",
    "Manufacturing Engineer"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingText = document.getElementById('typing-text');

function typeEffect() {
    const currentRole = roles[roleIndex];
    
    if (isDeleting) {
        typingText.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingText.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
    }
    
    let typeSpeed = isDeleting ? 40 : 70;
    
    if (!isDeleting && charIndex === currentRole.length) {
        typeSpeed = 1500;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typeSpeed = 300;
    }
    
    setTimeout(typeEffect, typeSpeed);
}

// Experience Data
const experiences = [
    {
        title: "Engineer – Design & Engineering Coordination",
        company: "Tata Consultancy Services",
        period: "Aug 2025 – Present",
        location: "Chennai, India",
        points: [
            "Engineering Coordination",
            "Design Support",
            "Manufacturing Coordination",
            "Critical Path Analysis",
            "Engineering Dashboards",
            "Cross-functional collaboration"
        ]
    },
    {
        title: "Engineering Intern",
        company: "Nidec Precision Tools",
        period: "Aug 2023 – Sept 2023",
        location: "India",
        points: [
            "Precision tooling",
            "Tolerance critical components",
            "Documentation"
        ]
    },
    {
        title: "Design & Manufacturing Intern",
        company: "Caparo Engineering",
        period: "Oct 2023 – Nov 2023",
        location: "India",
        points: [
            "HPDC",
            "GDC",
            "Precision machining",
            "DFMA"
        ]
    }
];

// Populate Experience
function populateExperience() {
    const timeline = document.querySelector('.timeline');
    experiences.forEach(exp => {
        const item = document.createElement('div');
        item.className = 'timeline-item';
        
        let pointsHTML = '';
        exp.points.forEach(point => {
            pointsHTML += `<li>${point}</li>`;
        });
        
        item.innerHTML = `
            <div class="timeline-dot"></div>
            <div class="timeline-content glass">
                <h3>${exp.title}</h3>
                <p class="company">${exp.company} • ${exp.location}</p>
                <p class="period">${exp.period}</p>
                <ul class="responsibilities">
                    ${pointsHTML}
                </ul>
            </div>
        `;
        timeline.appendChild(item);
    });
}

// Projects Data
const projects = [
    {
        title: "Bike Anti-Theft IoT System",
        desc: "Real-time GPS tracking and security system using IoT for motorcycles.",
        tags: ["NodeMCU", "GPS", "MPU6050", "Blynk", "IoT"]
    },
    {
        title: "Stack Emission Monitoring System",
        desc: "Industrial IoT solution for real-time monitoring of industrial emissions.",
        tags: ["Industrial IoT", "Digital Engineering", "Sensors"]
    },
    {
        title: "Battery Energy Storage System",
        desc: "Design and simulation of BESS for industrial power optimization.",
        tags: ["Power Systems", "Industrial Automation", "Simulation"]
    },
    {
        title: "Smart Factory Digital Twin",
        desc: "Virtual replica of manufacturing processes using IoT and simulation.",
        tags: ["Digital Twin", "IoT", "Manufacturing", "Automation"]
    }
];

// Populate Projects
function populateProjects() {
    const grid = document.querySelector('.projects-grid');
    
    projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card glass';
        
        let tagsHTML = '';
        project.tags.forEach(tag => {
            tagsHTML += `<span class="tag">${tag}</span>`;
        });
        
        card.innerHTML = `
            <div class="card-image"></div>
            <h3>${project.title}</h3>
            <p>${project.desc}</p>
            <div class="project-tags">
                ${tagsHTML}
            </div>
        `;
        grid.appendChild(card);
    });
}

// Skills Data
const skillsList = [
    "SolidWorks", "CATIA", "Fusion 360", "AutoCAD", "ANSYS",
    "MATLAB", "SQL", "Java", "HTML", "CSS", "JavaScript",
    "Manufacturing", "DFMA", "CAD Design", "Product Design",
    "Engineering Coordination"
];

// Populate Skills
function populateSkills() {
    const container = document.querySelector('.skills-container');
    
    skillsList.forEach(skill => {
        const card = document.createElement('div');
        card.className = 'skill-card glass';
        card.innerHTML = `
            <div style="font-size: 2.8rem; margin-bottom: 1rem;">⚙️</div>
            <div class="skill-name">${skill}</div>
        `;
        container.appendChild(card);
    });
}

// Mouse Glow Effect
function createMouseGlow() {
    const glow = document.createElement('div');
    glow.style.position = 'fixed';
    glow.style.width = '400px';
    glow.style.height = '400px';
    glow.style.borderRadius = '50%';
    glow.style.background = 'radial-gradient(circle, rgba(0,207,255,0.12) 0%, transparent 70%)';
    glow.style.pointerEvents = 'none';
    glow.style.zIndex = '1';
    glow.style.opacity = '0';
    glow.style.transition = 'opacity 0.2s';
    document.body.appendChild(glow);
    
    document.addEventListener('mousemove', (e) => {
        glow.style.left = `${e.clientX - 200}px`;
        glow.style.top = `${e.clientY - 200}px`;
        glow.style.opacity = '1';
    });
}

// Floating Particles
function createParticles() {
    const particlesContainer = document.querySelector('.particles');
    
    for (let i = 0; i < 45; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const size = Math.random() * 5 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${Math.random() * 100}vw`;
        particle.style.top = `${Math.random() * 100}vh`;
        particle.style.opacity = Math.random() * 0.6 + 0.2;
        particle.style.background = '#00CFFF';
        particle.style.borderRadius = '50%';
        particle.style.position = 'absolute';
        particle.style.pointerEvents = 'none';
        
        const duration = Math.random() * 25 + 15;
        particle.style.animation = `float ${duration}s linear infinite`;
        particle.style.animationDelay = `-${Math.random() * 30}s`;
        
        particlesContainer.appendChild(particle);
    }
}

// Add CSS for particles animation
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0% { transform: translateY(0) rotate(0deg); }
        100% { transform: translateY(-120vh) rotate(360deg); }
    }
    
    .particle {
        animation: float 20s linear infinite;
    }
    
    .responsibilities {
        margin-top: 1rem;
        padding-left: 1.2rem;
    }
    
    .responsibilities li {
        margin-bottom: 0.4rem;
        position: relative;
    }
    
    .responsibilities li:before {
        content: '▹';
        color: #00CFFF;
        position: absolute;
        left: -1.2rem;
    }
`;
document.head.appendChild(style);

// Scroll Progress
function initScrollProgress() {
    const progressBar = document.querySelector('.scroll-progress');
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = `${scrollPercent}%`;
    });
}

// Scroll Reveal
function revealOnScroll() {
    const sections = document.querySelectorAll('.section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });
    
    sections.forEach(section => {
        section.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        section.style.opacity = '0';
        section.style.transform = 'translateY(40px)';
        observer.observe(section);
    });
}

// Smooth Scroll
function smoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if (this.getAttribute('href') === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                const navHeight = 80;
                const targetPosition = target.getBoundingClientRect().top + window.scrollY;
                
                window.scrollTo({
                    top: targetPosition - navHeight,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Hamburger Menu
function initMobileNav() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
        
        // Animate hamburger
        if (hamburger.classList.contains('active')) {
            hamburger.style.transform = 'rotate(90deg)';
        } else {
            hamburger.style.transform = 'rotate(0)';
        }
    });
    
    // Close menu when link clicked
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
            hamburger.style.transform = 'rotate(0)';
        });
    });
}

// Scroll to Top
function initScrollTop() {
    const scrollBtn = document.getElementById('scrollTop');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            scrollBtn.style.opacity = '1';
            scrollBtn.style.visibility = 'visible';
        } else {
            scrollBtn.style.opacity = '0';
            scrollBtn.style.visibility = 'hidden';
        }
    });
    
    scrollBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Fake form submission
function initContactForm() {
    const form = document.getElementById('contact-form');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const btn = form.querySelector('button');
        const originalText = btn.textContent;
        
        btn.textContent = 'Sending...';
        btn.disabled = true;
        
        setTimeout(() => {
            alert("Thank you! Your message has been received. I'll get back to you soon.");
            form.reset();
            btn.textContent = originalText;
            btn.disabled = false;
        }, 1400);
    });
}

// Initialize everything
function initializePortfolio() {
    // Start typing animation
    setTimeout(() => {
        typeEffect();
    }, 800);
    
    // Populate dynamic sections
    populateExperience();
    populateProjects();
    populateSkills();
    
    // Initialize interactions
    createParticles();
    createMouseGlow();
    initScrollProgress();
    revealOnScroll();
    smoothScroll();
    initMobileNav();
    initScrollTop();
    initContactForm();
    
    // Keyboard accessibility
    document.addEventListener('keydown', (e) => {
        if (e.key === '/' && document.activeElement.tagName !== "INPUT" && document.activeElement.tagName !== "TEXTAREA") {
            e.preventDefault();
            document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
        }
    });
    
    console.log('%cPortfolio by Boopesh A S loaded successfully ✨', 'color: #00CFFF; font-family: monospace');
}

// Load the portfolio
window.addEventListener('load', initializePortfolio);
Boopesh A S Premium Portfolio - Grok

