// Shared JavaScript for CDKL5 Gene Therapy site
(function () {
    const GOAL_AMOUNT = 3500000;
    const RAISED_AMOUNT = 200000;
    const TRIAL_DATE = new Date('2026-06-30T23:59:59Z');
    const CAROUSEL_INTERVAL_MS = 5000;

    function formatCurrency(amount) {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            maximumFractionDigits: 0
        }).format(amount);
    }

    function initProgressBars() {
        const bars = document.querySelectorAll('[data-progress-bar]');
        bars.forEach((bar) => {
            const track = bar.querySelector('.progress-bar');
            const raisedEl = bar.querySelector('[data-raised]');
            const goalEl = bar.querySelector('[data-goal]');
            if (!track || !raisedEl || !goalEl) {
                return;
            }
            const raisedAmount = Number(raisedEl.dataset.raised || RAISED_AMOUNT);
            const goalAmount = Number(goalEl.dataset.goal || GOAL_AMOUNT);
            const percentage = Math.min(100, Math.max(0, (raisedAmount / goalAmount) * 100));
            track.style.width = `${percentage.toFixed(2)}%`;
            raisedEl.textContent = formatCurrency(raisedAmount);
            goalEl.textContent = formatCurrency(goalAmount);
        });
    }

    function initCountdown() {
        const countdownEls = document.querySelectorAll('[data-countdown]');
        if (!countdownEls.length) {
            return;
        }

        function updateCountdown() {
            const now = new Date();
            const diff = TRIAL_DATE.getTime() - now.getTime();
            countdownEls.forEach((el) => {
                if (diff <= 0) {
                    el.textContent = 'Clinical trial window is now opening.';
                    return;
                }
                const days = Math.floor(diff / (1000 * 60 * 60 * 24));
                const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
                const minutes = Math.floor((diff / (1000 * 60)) % 60);
                el.textContent = `${days} days, ${hours} hours, ${minutes} minutes`;
            });
        }

        updateCountdown();
        setInterval(updateCountdown, 60000);
    }

    function initNavToggle() {
        const toggle = document.querySelector('[data-nav-toggle]');
        const links = document.querySelector('[data-nav-links]');
        if (!toggle || !links) {
            return;
        }
        toggle.addEventListener('click', () => {
            const isOpen = links.classList.toggle('is-open');
            toggle.setAttribute('aria-expanded', String(isOpen));
        });
    }

    function initFadeIns() {
        const fadeEls = document.querySelectorAll('.fade-in');
        if (!('IntersectionObserver' in window)) {
            fadeEls.forEach((el) => {
                el.style.opacity = '1';
            });
            return;
        }
        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    obs.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });
        fadeEls.forEach((el) => observer.observe(el));
    }

    function buildCarouselSlides(container) {
        const track = container.querySelector('.carousel-track');
        const dotsContainer = container.querySelector('.carousel-dots');
        if (!track || !dotsContainer) {
            return;
        }

        // Array of actual image filenames in the images folder - starting with image 41
        const imageFiles = [
            'image 41.jpg', 'image 42.jpg', 'image 43.jpg', 'image 44.jpg', 'image 45.jpg',
            'image 46.jpg', 'image 47.jpg', 'image 48.jpg', 'image 49.jpg', 'image 50.jpg',
            'IMAGE 1.jpg', 'IMAGE 2.jpg', 'IMAGE 3.jpg', 'IMAGE 4.jpg', 'IMAGE 5.jpg',
            'IMAGE 6.jpg', 'IMAGE 7.jpg', 'IMAGE 8.jpg', 'IMAGE 9.jpg', 'IMAGE 10.jpg',
            'IMAGE 11.jpg', 'IMAGE 12.jpg', 'IMAGE 13.jpg', 'IMAGE 14.jpg', 'IMAGE 15.jpg',
            'IMAGE 16.jpg', 'IMAGE 17.jpg', 'IMAGE 18.jpg', 'IMAGE 19.jpg', 'IMAGE 20.jpg',
            'IMAGE 21.jpg', 'IMAGE 22.jpg', 'IMAGE 23.jpg', 'IMAGE 24.jpg', 'IMAGE 26.jpg',
            'IMAGE 27.jpg', 'IMAGE 29.jpg', 'IMAGE 31.jpg', 'IMAGE 32.jpg', 'IMAGE 33.jpg',
            'IMAGE 34.jpg', 'IMAGE 35.jpg', 'IMAGE 36.jpg', 'image 37.jpg', 'image 38.jpg',
            'image 39.jpg', 'image 40.jpg'
        ];

        const slides = [];
        imageFiles.forEach((filename, index) => {
            const slideNum = index + 1;
            const slide = document.createElement('div');
            slide.className = 'carousel-slide';
            slide.setAttribute('role', 'group');
            slide.setAttribute('aria-roledescription', 'slide');
            slide.setAttribute('aria-label', `Child photo ${slideNum} of ${imageFiles.length}`);

            const img = document.createElement('img');
            img.src = `images/${filename}`;
            img.alt = `Child ${slideNum} impacted by CDKL5 Disorder`;

            img.addEventListener('error', () => {
                img.alt = 'Joyful child placeholder image';
                img.src = 'https://via.placeholder.com/1200x800/FFE5E5/303F9F?text=CDKL5+Community';
            }, { once: true });

            slide.appendChild(img);
            track.appendChild(slide);
            slides.push(slide);

            const dot = document.createElement('button');
            dot.className = 'carousel-dot';
            dot.type = 'button';
            dot.setAttribute('aria-label', `Go to slide ${slideNum}`);
            dotsContainer.appendChild(dot);
        });
        return { slides, dots: Array.from(dotsContainer.children), track };
    }

    function initCarousel() {
        const carousel = document.querySelector('[data-carousel]');
        if (!carousel) {
            return;
        }

        const { slides, dots, track } = buildCarouselSlides(carousel) || {};
        if (!slides || slides.length === 0) {
            return;
        }

        let currentIndex = 0;
        let timerId;

        const prevBtn = carousel.querySelector('[data-carousel-prev]');
        const nextBtn = carousel.querySelector('[data-carousel-next]');

        function updateCarousel(index) {
            currentIndex = (index + slides.length) % slides.length;
            const offset = -currentIndex * 100;
            track.style.transform = `translateX(${offset}%)`;
            dots.forEach((dot, idx) => {
                dot.classList.toggle('active', idx === currentIndex);
            });
        }

        function startAutoRotate() {
            stopAutoRotate();
            timerId = setInterval(() => {
                updateCarousel(currentIndex + 1);
            }, CAROUSEL_INTERVAL_MS);
        }

        function stopAutoRotate() {
            if (timerId) {
                clearInterval(timerId);
            }
        }

        dots.forEach((dot, idx) => {
            dot.addEventListener('click', () => {
                updateCarousel(idx);
                startAutoRotate();
            });
        });

        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                updateCarousel(currentIndex - 1);
                startAutoRotate();
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                updateCarousel(currentIndex + 1);
                startAutoRotate();
            });
        }

        carousel.addEventListener('mouseenter', stopAutoRotate);
        carousel.addEventListener('mouseleave', startAutoRotate);
        carousel.addEventListener('focusin', stopAutoRotate);
        carousel.addEventListener('focusout', startAutoRotate);

        updateCarousel(0);
        startAutoRotate();
    }

    function highlightActiveNav() {
        const path = window.location.pathname.split('/').pop() || 'index.html';
        const links = document.querySelectorAll('[data-nav-links] a');
        links.forEach((link) => {
            const href = link.getAttribute('href');
            if (!href) {
                return;
            }
            const target = href.split('/').pop();
            link.classList.toggle('active', target === path);
        });
    }

    function initDonationPage() {
        // Only run on donate page
        if (!document.querySelector('.donate-page')) {
            return;
        }

        // Toggle between One Time and Monthly
        const toggleButtons = document.querySelectorAll('.toggle-btn');
        toggleButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active from all
                toggleButtons.forEach(btn => btn.classList.remove('active'));
                // Add active to clicked button
                button.classList.add('active');
            });
        });

        // Amount button selection
        const amountButtons = document.querySelectorAll('.amount-btn');
        const customAmountInput = document.getElementById('custom-amount');
        
        amountButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active from all amount buttons
                amountButtons.forEach(btn => btn.classList.remove('active'));
                // Add active to clicked button
                button.classList.add('active');
                // Clear custom amount input
                if (customAmountInput) {
                    customAmountInput.value = '';
                }
            });
        });

        // Custom amount input
        if (customAmountInput) {
            customAmountInput.addEventListener('input', () => {
                // Remove active from all amount buttons when typing custom amount
                if (customAmountInput.value) {
                    amountButtons.forEach(btn => btn.classList.remove('active'));
                }
            });
        }

        // Checkbox interactions
        const checkboxOptions = document.querySelectorAll('.checkbox-option');
        checkboxOptions.forEach(option => {
            const checkbox = option.querySelector('input[type="checkbox"]');
            if (checkbox) {
                checkbox.addEventListener('change', () => {
                    if (checkbox.checked) {
                        option.classList.add('checked');
                    } else {
                        option.classList.remove('checked');
                    }
                });
            }
        });
    }

    document.addEventListener('DOMContentLoaded', () => {
        initProgressBars();
        initCountdown();
        initNavToggle();
        initFadeIns();
        initCarousel();
        highlightActiveNav();
        initDonationPage();
    });
}());
