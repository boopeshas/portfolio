// ===== Skill filter (layer toggles) =====
const filterBtns = document.querySelectorAll('.filter-btn');
const chips = document.querySelectorAll('.chip');
 
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const target = btn.dataset.filter;
 
    chips.forEach(chip => {
      const show = target === 'all' || chip.dataset.cat === target;
      chip.classList.toggle('hidden', !show);
    });
  });
});
 
// ===== Side index — highlight active section on scroll =====
const sections = document.querySelectorAll('main .sheet, header.hero');
const navLinks = document.querySelectorAll('.side-index a');
 
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
      });
    }
  });
}, { rootMargin: '-45% 0px -45% 0px', threshold: 0 });
 
sections.forEach(sec => observer.observe(sec));
 
