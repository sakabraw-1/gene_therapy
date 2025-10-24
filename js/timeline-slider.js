// Interactive Timeline Slider for About Page
// Usage: Add <script src="js/timeline-slider.js"></script> after js/script.js in about.html

document.addEventListener('DOMContentLoaded', function() {
    var timeline = document.querySelector('.vertical-timeline');
    if (!timeline) return;
    // Only show timeline if JS loads
    timeline.style.display = 'block';
    var items = Array.from(timeline.querySelectorAll('.vtimeline-item'));
    if (!items.length) return;

    // Create slider controls
    var sliderNav = document.createElement('div');
    sliderNav.className = 'timeline-slider-nav';
    sliderNav.style.textAlign = 'center';
    sliderNav.style.margin = '1.5em 0 0 0';
    sliderNav.style.display = 'flex';
    sliderNav.style.justifyContent = 'center';
    sliderNav.style.gap = '0.7em';

    // Add left arrow
    var leftArrow = document.createElement('button');
    leftArrow.innerHTML = '&#8592;';
    leftArrow.className = 'timeline-arrow';
    leftArrow.style.fontSize = '1.5em';
    leftArrow.style.background = '#1976d2';
    leftArrow.style.color = '#fff';
    leftArrow.style.border = 'none';
    leftArrow.style.borderRadius = '50%';
    leftArrow.style.width = '2.2em';
    leftArrow.style.height = '2.2em';
    leftArrow.style.cursor = 'pointer';
    sliderNav.appendChild(leftArrow);

    // Add dots for each milestone
    var dots = [];
    items.forEach(function(item, idx) {
        var dot = document.createElement('button');
        dot.className = 'timeline-dot-nav';
        dot.style.width = '1.2em';
        dot.style.height = '1.2em';
        dot.style.borderRadius = '50%';
        dot.style.border = '2px solid #1976d2';
        dot.style.background = '#fff';
        dot.style.cursor = 'pointer';
        dot.style.outline = 'none';
        dot.setAttribute('aria-label', 'Go to milestone ' + (idx+1));
        sliderNav.appendChild(dot);
        dots.push(dot);
    });

    // Add right arrow
    var rightArrow = document.createElement('button');
    rightArrow.innerHTML = '&#8594;';
    rightArrow.className = 'timeline-arrow';
    rightArrow.style.fontSize = '1.5em';
    rightArrow.style.background = '#1976d2';
    rightArrow.style.color = '#fff';
    rightArrow.style.border = 'none';
    rightArrow.style.borderRadius = '50%';
    rightArrow.style.width = '2.2em';
    rightArrow.style.height = '2.2em';
    rightArrow.style.cursor = 'pointer';
    sliderNav.appendChild(rightArrow);

    timeline.parentNode.insertBefore(sliderNav, timeline.nextSibling);

    // Hide all items except the first
    var currentIdx = 0;
    function showItem(idx) {
        items.forEach(function(item, i) {
            item.style.display = (i === idx) ? 'block' : 'none';
        });
        dots.forEach(function(dot, i) {
            dot.style.background = (i === idx) ? '#1976d2' : '#fff';
            dot.style.borderColor = (i === idx) ? '#1976d2' : '#1976d2';
        });
    }
    showItem(currentIdx);

    // Dot click
    dots.forEach(function(dot, idx) {
        dot.addEventListener('click', function() {
            currentIdx = idx;
            showItem(currentIdx);
        });
    });
    // Arrow click
    leftArrow.addEventListener('click', function() {
        currentIdx = (currentIdx - 1 + items.length) % items.length;
        showItem(currentIdx);
    });
    rightArrow.addEventListener('click', function() {
        currentIdx = (currentIdx + 1) % items.length;
        showItem(currentIdx);
    });

    // Popup on hover/click for details
    items.forEach(function(item) {
        item.addEventListener('mouseenter', function() {
            item.classList.add('timeline-highlight');
        });
        item.addEventListener('mouseleave', function() {
            item.classList.remove('timeline-highlight');
        });
        item.addEventListener('click', function() {
            item.classList.toggle('timeline-highlight');
        });
    });
});

// Add minimal highlight style
var style = document.createElement('style');
style.textContent = '.timeline-highlight { box-shadow: 0 0 0 4px #1976d233; border-radius: 14px; z-index: 10; position: relative; }';
document.head.appendChild(style);
