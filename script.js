// ===== Typing Animation =====
const roles = [
    "Mechanical Engineer",
    "Design Engineer",
    "CAD Designer",
    "Digital Engineer",
    "Manufacturing Expert",
    "Problem Solver"
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
        typeSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typeSpeed = 500;
    }

    setTimeout(typeEffect, typeSpeed);
}

// ===== Experience Data =====
const experiences = [
    {
        title: "Engineer – Design & Engineering Coordination",
        company: "Tata Consultancy Services",
        period: "Aug 2025 – Present",
        location: "Chennai, India",
        points: [
            "Engineering Coordination & Support for OEM Mechanical Systems",
            "Critical Path Analysis & Timeline Optimization",
            "Engineering Dashboards & Performance Metrics",
            "Cross-functional Collaboration with Design & Manufacturing Teams",
            "Documentation & Technical Reporting",
            "Manufacturing Coordination & Quality Support"
        ]
    },
    {
        title: "Design & Manufacturing Intern",
        company: "Caparo Engineering",
        period: "Oct 2023 – Nov 2023",
        location: "India",
        points: [
            "High-Pressure Die Casting (HPDC) Design & Analysis",
            "GD&T & Geometric Dimensioning & Tolerancing",
            "Precision Machining Design & Optimization",
            "DFMA (Design for Manufacturing & Assembly) Implementation",
            "Manufacturing Process Planning"
        ]
    },
    {
        title: "Engineering Intern",
        company: "Nidec Precision Tools",
        period: "Aug 2023 – Sept 2023",
        location: "India",
        points: [
            "Precision Tooling Design & Development",
            "Tolerance Critical Components Manufacturing",
            "Technical Documentation & CAD Drawings",
            "Quality Assurance & Inspection Procedures"
        ]
    }
];

function populateExperience() {
    const timeline = document.querySelector('.timeline');
    timeline.innerHTML = '';

    experiences.forEach((exp, index) => {
        const item = document.createElement('div');
        item.className = 'timeline-item';
        item.style.animation = `fadeInUp 0.6s ease-out ${index * 0.1}s both`;

        let pointsHTML = '';
        exp.points.forEach(point => {
            pointsHTML += `<li>${point}</li>`;
        });

        item.innerHTML = `
            <div class="timeline-dot"></div>
            <div class="timeline-content glass-card">
                <h3>${exp.title}</h3>
                <p class="company"><i class="fas fa-building"></i> ${exp.company}</p>
                <p class="period"><i class="fas fa-calendar-alt"></i> ${exp.period}</p>
                <p style="font-size: 0.9rem; color: #94A3B8;"><i class="fas fa-map-marker-alt"></i> ${exp.location}</p>
                <ul class="responsibilities">
                    ${pointsHTML}
                </ul>
            </div>
        `;
        timeline.appendChild(item);
    });
}

// ===== Projects Data =====
const projects = [
    {
        title: "Bike Anti-Theft IoT System",
        desc: "Real-time GPS tracking and security system using IoT for motorcycles with mobile app integration.",
        tags: ["NodeMCU", "GPS", "MPU6050", "Blynk", "IoT", "Real-time Tracking"]
    },
    {
        title: "Stack Emission Monitoring System",
        desc: "Industrial IoT solution for real-time monitoring and analysis of industrial emissions and pollutants.",
        tags: ["Industrial IoT", "Digital Engineering", "Sensors", "Environmental Monitoring"]
    },
    {
        title: "Battery Energy Storage System (BESS)",
        desc: "Comprehensive design and simulation of battery storage systems for industrial power optimization.",
        tags: ["Power Systems", "Industrial Automation", "Simulation", "Energy Storage"]
    },
    {
        title: "Smart Factory Digital Twin",
        desc: "Virtual replica of manufacturing processes using IoT sensors and real-time simulation for Industry 4.0.",
        tags: ["Digital Twin", "IoT", "Manufacturing", "Automation", "Industry 4.0"]
    },
    {
        title: "CAD Design Suite",
        desc: "Advanced mechanical component designs using SolidWorks with FEA analysis and optimization.",
        tags: ["SolidWorks", "CAD Design", "FEA", "Engineering Analysis"]
    },
    {
        title: "Manufacturing Process Optimization",
        desc: "DFMA analysis and process optimization for precision components reducing costs by 25%.",
        tags: ["DFMA", "Manufacturing", "Process Optimization", "Cost Reduction"]
    }
];

function populateProjects() {
    const grid = document.querySelector('.projects-grid');
    grid.innerHTML = '';

    projects.forEach((project, index) => {
        const card = document.createElement('div');
        card.className = 'project-card glass-card';
        card.style.animation = `fadeInUp 0.6s ease-out ${index * 0.1}s both`;

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

// ===== Mouse Glow Effect =====
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
    glow.style.display = 'none';
    document.body.appendChild(glow);

    document.addEventListener('mousemove', (e) => {
        glow.style.left = `${e.clientX - 200}px`;
        glow.style.top = `${e.clientY - 200}px`;
        glow.style.opacity = '0.5';
    });

    document.addEventListener('mouseleave', () => {
        glow.style.opacity = '0';
    });
}

// ===== Floating Particles =====
function createParticles() {
    const particlesContainer = document.querySelector('.particles');
    
    if (!particlesContainer) return;

    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';

        const size = Math.random() * 4 + 1;
        const duration = Math.random() * 20 + 10;
        const delay = Math.random() * 5;

        particle.style.cssText = `
            width: ${size}px;
            height: ${size}px;
            background: rgba(0, 207, 255, ${Math.random() * 0.6 + 0.2});
            border-radius: 50%;
            position: absolute;
            left: ${Math.random() * 100}vw;
            top: ${Math.random() * 100}vh;
            pointer-events: none;
            animation: float ${duration}s linear infinite;
            animation-delay: -${delay}s;
        `;

        particlesContainer.appendChild(particle);
    }
}

// ===== Scroll Progress =====
function initScrollProgress() {
    const progressBar = document.querySelector('.scroll-progress');

    if (!progressBar) return;

    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = `${scrollPercent}%`;
    });
}

// ===== Scroll Reveal Animation =====
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
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    sections.forEach(section => {
        section.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        section.style.opacity = '0';
        section.style.transform = 'translateY(40px)';
        observer.observe(section);
    });
}

// ===== Smooth Scroll =====
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

// ===== Hamburger Menu =====
function initMobileNav() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (!hamburger || !navLinks) return;

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.nav-container')) {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
}

// ===== Scroll to Top =====
function initScrollTop() {
    const scrollBtn = document.getElementById('scrollTop');

    if (!scrollBtn) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            scrollBtn.classList.add('visible');
        } else {
            scrollBtn.classList.remove('visible');
        }
    });

    scrollBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ===== Contact Form =====
function initContactForm() {
    const form = document.getElementById('contact-form');

    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const btn = form.querySelector('button');
        const originalText = btn.innerHTML;
        const name = form.querySelector('#name').value;
        const email = form.querySelector('#email').value;
        const subject = form.querySelector('#subject').value;
        const message = form.querySelector('#message').value;

        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        btn.disabled = true;

        setTimeout(() => {
            const formData = {
                name,
                email,
                subject,
                message,
                timestamp: new Date().toISOString()
            };

            console.log('Form submitted:', formData);

            form.reset();
            btn.innerHTML = originalText;
            btn.disabled = false;

            showNotification(
                'Thank you for reaching out!',
                'I\'ll get back to you as soon as possible.',
                'success'
            );
        }, 1500);
    });
}

// ===== Notification Function =====
function showNotification(title, message, type = 'success') {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        padding: 20px 30px;
        background: ${type === 'success' ? 'linear-gradient(135deg, #00CFFF, #22D3EE)' : 'linear-gradient(135deg, #FF6B6B, #FF8E8E)'};
        color: ${type === 'success' ? '#0F172A' : 'white'};
        border-radius: 12px;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
        z-index: 10000;
        animation: slideIn 0.4s ease-out;
        max-width: 400px;
    `;

    notification.innerHTML = `
        <div style="font-weight: 600; margin-bottom: 5px;">${title}</div>
        <div style="font-size: 0.9rem; opacity: 0.9;">${message}</div>
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOut 0.4s ease-out';
        setTimeout(() => notification.remove(), 400);
    }, 4000);
}

// ===== Add CSS Animations =====
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0%, 100% { transform: translateY(0) rotate(0deg); }
        100% { transform: translateY(-120vh) rotate(360deg); }
    }

    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }

    .particle {
        animation: float 20s linear infinite;
    }

    .responsibilities {
        margin-top: 1rem;
        padding-left: 0;
        list-style: none;
    }

    .responsibilities li {
        margin-bottom: 0.6rem;
        position: relative;
        padding-left: 1.5rem;
    }

    .responsibilities li::before {
        content: '▹';
        color: #00CFFF;
        position: absolute;
        left: 0;
        font-size: 1.2rem;
    }

    .nav-link:focus-visible,
    .btn:focus-visible,
    .social-link:focus-visible,
    input:focus-visible,
    textarea:focus-visible {
        outline: 2px solid #00CFFF;
        outline-offset: 2px;
    }

    @media (prefers-reduced-motion: reduce) {
        *,
        *::before,
        *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
        }
    }

    @media (max-width: 768px) {
        @keyframes slideIn,
        @keyframes slideOut {
            from { transform: translateX(100vw); }
            to { transform: translateX(0); }
        }
    }
`;
document.head.appendChild(style);

// ===== Initialize Portfolio =====
function initializePortfolio() {
    setTimeout(() => {
        typeEffect();
    }, 1000);

    populateExperience();
    populateProjects();

    createParticles();
    createMouseGlow();
    initScrollProgress();
    revealOnScroll();
    smoothScroll();
    initMobileNav();
    initScrollTop();
    initContactForm();

    document.addEventListener('keydown', (e) => {
        if (e.key === '/' && 
            document.activeElement.tagName !== 'INPUT' && 
            document.activeElement.tagName !== 'TEXTAREA') {
            e.preventDefault();
            document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
        }
    });

    console.log('%c✨ Portfolio by Boopesh A S loaded successfully!', 
        'color: #00CFFF; font-family: "Space Grotesk"; font-size: 14px; font-weight: bold;');
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializePortfolio);
} else {
    initializePortfolio();
}

const imageElements = document.querySelectorAll('img');
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                imageObserver.unobserve(img);
            }
        });
    });

    imageElements.forEach(img => imageObserver.observe(img));
}
