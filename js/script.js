
// Timeline Accordion Interactivity
document.addEventListener('DOMContentLoaded', function () {
    var panels = document.querySelectorAll('.timeline-panel');
    panels.forEach(function(panel) {
        var header = panel.querySelector('.timeline-header');
        header.addEventListener('click', function() {
            var isActive = panel.classList.contains('active');
            // Collapse all
            panels.forEach(function(p) { p.classList.remove('active'); });
            // Expand clicked if not already active
            if (!isActive) panel.classList.add('active');
        });
    });
    // Optionally, open the first panel by default
    if (panels.length > 0) panels[0].classList.add('active');
});
// Shared JavaScript for CDKL5 Gene Therapy site
(function () {
    const GOAL_AMOUNT = 3500000;
    const INITIAL_RAISED_AMOUNT = 200000;
    const TRIAL_DATE = new Date('2026-06-30T23:59:59Z');
    const CAROUSEL_INTERVAL_MS = 5000;

    // Ensure FAQ nav always goes to faq.html, even after includes-loader runs
    function fixFaqNavLink() {
        var faqLink = document.getElementById('nav-faq-link');
        if (faqLink) {
            faqLink.addEventListener('click', function(e) {
                e.preventDefault();
                window.location.href = 'faq.html';
            });
        }
    }
    document.addEventListener('includes:loaded', fixFaqNavLink);
    // Also run on DOMContentLoaded in case header is present from the start
    document.addEventListener('DOMContentLoaded', fixFaqNavLink);

    // Get current raised amount from localStorage or use initial value
    function getCurrentRaisedAmount() {
        const stored = localStorage.getItem('cdkl5_raised_amount');
        return stored ? parseFloat(stored) : INITIAL_RAISED_AMOUNT;
    }

    // Update raised amount in localStorage
    function updateRaisedAmount(newAmount) {
        localStorage.setItem('cdkl5_raised_amount', newAmount.toString());
        localStorage.setItem('cdkl5_last_update', new Date().toISOString());
    }

    // Add a donation to the total
    function addDonation(amount) {
        const current = getCurrentRaisedAmount();
        const newTotal = current + amount;
        updateRaisedAmount(newTotal);
        // Refresh all progress bars on the page
        initProgressBars();
        return newTotal;
    }

    function formatCurrency(amount) {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            maximumFractionDigits: 0
        }).format(amount);
    }

    function initProgressBars() {
        const bars = document.querySelectorAll('[data-progress-bar]');
        const currentRaised = getCurrentRaisedAmount();
        
        bars.forEach((bar) => {
            const track = bar.querySelector('.progress-bar');
            let goalEl = bar.querySelector('[data-goal]') || bar.querySelector('.hero-progress-copy strong[data-goal]');

            // hero progress wrapper uses a different structure; allow it through
            if (!track || !goalEl) {
                // still attempt to update a hero-style progress wrapper
                const heroGoal = bar.querySelector('.hero-progress-copy strong[data-goal]') || bar.querySelector('.hero-progress-copy strong:last-of-type');
                if (!track || !heroGoal) return;
                // Use hero elements as fallbacks if the normal elements aren't present
                if (!goalEl) goalEl = heroGoal;
            }
            // Always use the current raised amount from localStorage for progress calculation
            const raisedAmount = currentRaised;
            // If the goal element carries a data-goal attribute use it, otherwise fall back to the constant
            const goalAmount = Number((goalEl && goalEl.dataset && goalEl.dataset.goal) ? goalEl.dataset.goal : GOAL_AMOUNT);
            const percentage = Math.min(100, Math.max(0, (raisedAmount / goalAmount) * 100));
            
            // Animate the progress bar
            track.style.transition = 'width 1s ease-out';
            track.style.width = `${percentage.toFixed(2)}%`;
            
            // Update the goal text only (no raised amount display)
            try {
                goalEl.textContent = formatCurrency(goalAmount);
            } catch (e) {
                // ignore
            }
            
            // Update data attributes for consistency
            // If the wrapper contains a hero progress copy paragraph, update it as well
            const heroCopy = bar.querySelector('.hero-progress-copy');
            if (heroCopy) {
                const hg = heroCopy.querySelector('strong[data-goal]');
                if (hg) hg.textContent = formatCurrency(goalAmount);
            }
        });
    }

    function initCountdown() {
    // Countdown removed as per user request

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

    // Initialize fundraising panel inside the shared footer if present
    function initFooterFundraising() {
        try {
            const footer = document.querySelector('footer');
            if (!footer) return;

            // Find our fundraising panel elements
            const fundPanel = footer.querySelector('.fundraising-panel');
            const fundAmountEl = footer.querySelector('.fundraising-amount');
            const fundBar = footer.querySelector('.fundraising-bar');
            // Countdown logic removed as per user request
            if (!fundPanel || !fundAmountEl || !fundBar) return;

            const current = getCurrentRaisedAmount();
            const goal = GOAL_AMOUNT;
            const pct = Math.min(100, Math.max(0, (current / goal) * 100));

            // Format and set text - only show goal, no raised amount
            fundAmountEl.innerHTML = `Goal: <strong>${formatCurrency(goal)}</strong>`;
            fundBar.style.transition = 'width 1s ease-out';
            fundBar.style.width = `${pct.toFixed(2)}%`;
        } catch (e) {
            // non-fatal
            console.warn('initFooterFundraising error', e);
        }
    }

    function buildCarouselSlides(container) {
        const track = container.querySelector('.carousel-track');
        const dotsContainer = container.querySelector('.carousel-dots');
        console.log('buildCarouselSlides called', { track, dotsContainer });
        if (!track || !dotsContainer) {
            console.error('Carousel track or dots container not found!');
            return;
        }

        // Array of actual image filenames in the images folder (all lowercase)
        const imageFiles = [
            'image 1.jpg', 'image 2.jpg', 'image 3.jpg', 'image 4.jpg', 'image 5.jpg',
            'image 6.jpg', 'image 7.jpg', 'image 8.jpg', 'image 9.jpg', 'image 10.jpg',
            'image 11.jpg', 'image 12.jpg', 'image 13.jpg', 'image 14.jpg', 'image 15.jpg',
            'image 16.jpg', 'image 17.jpg', 'image 18.jpg', 'image 19.jpg', 'image 20.jpg',
            'image 21.jpg', 'image 22.jpg', 'image 23.jpg', 'image 24.jpg', 'image 26.jpg',
            'image 27.jpg', 'image 29.jpg', 'image 31.jpg', 'image 32.jpg', 'image 33.jpg',
            'image 34.jpg', 'image 35.jpg', 'image 36.jpg', 'image 37.jpg', 'image 38.jpg',
            'image 39.jpg', 'image 40.jpg', 'image 41.jpg', 'image 42.jpg', 'image 43.jpg',
            'image 44.jpg', 'image 45.jpg', 'image 46.jpg', 'image 47.jpg', 'image 48.jpg',
            'image 49.jpg', 'image 50.jpg', 'image 51.jpg', 'image 52.jpg', 'image 53.jpg'
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
        console.log('initCarousel called', { carousel });
        if (!carousel) {
            console.error('Carousel element not found!');
            return;
        }

        const { slides, dots, track } = buildCarouselSlides(carousel) || {};
        console.log('Carousel built', { slidesCount: slides?.length });
        if (!slides || slides.length === 0) {
            console.error('No slides created!');
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

    // Mobile hamburger removed; bottom nav used instead

    function initDonationPage() {
        // Only run on donate page
        if (!document.querySelector('.donate-page')) {
            return;
        }

        let selectedAmount = 0;
        let isMonthly = false;

        // Toggle between One Time and Monthly
        const toggleButtons = document.querySelectorAll('.toggle-btn');
        toggleButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active from all
                toggleButtons.forEach(btn => btn.classList.remove('active'));
                // Add active to clicked button
                button.classList.add('active');
                // Track if monthly is selected
                isMonthly = button.dataset.giftType === 'monthly';
                updatePaymentButtons();
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
                // Get selected amount
                selectedAmount = parseInt(button.dataset.amount) || 0;
                console.log('Amount button clicked:', selectedAmount);
                updatePaymentButtons();
                // sync hidden field for form
                const hiddenAmt = document.getElementById('donation-amount-hidden');
                if (hiddenAmt) hiddenAmt.value = selectedAmount;
            });
        });

        // Custom amount input
        if (customAmountInput) {
            customAmountInput.addEventListener('input', () => {
                // Remove active from all amount buttons when typing custom amount
                if (customAmountInput.value) {
                    amountButtons.forEach(btn => btn.classList.remove('active'));
                    selectedAmount = parseInt(customAmountInput.value) || 0;
                    updatePaymentButtons();
                    const hiddenAmt = document.getElementById('donation-amount-hidden');
                    if (hiddenAmt) hiddenAmt.value = selectedAmount;
                }
            });
        }

        // Frequency toggle sync to hidden field
        const toggleButtonsAll = document.querySelectorAll('.toggle-btn');
        toggleButtonsAll.forEach(btn => {
            btn.addEventListener('click', () => {
                const hiddenFreq = document.getElementById('donation-frequency-hidden');
                if (hiddenFreq) hiddenFreq.value = btn.dataset.giftType || 'one-time';
            });
        });

        // Update payment button URLs with selected amount
        function updatePaymentButtons() {
            console.log('updatePaymentButtons called, selectedAmount:', selectedAmount, 'isMonthly:', isMonthly);
            const paymentButtons = document.querySelectorAll('.btn-give');
            console.log('Found payment buttons:', paymentButtons.length);
            
            paymentButtons.forEach(button => {
                // Store original URL if not already stored
                if (!button.dataset.baseUrl) {
                    button.dataset.baseUrl = button.href;
                }
                
                // Identify button type by href if not already set
                if (!button.dataset.paymentType) {
                    if (button.href.includes('square')) {
                        button.dataset.paymentType = 'square';
                    } else if (button.href.includes('paypal')) {
                        button.dataset.paymentType = 'paypal';
                    } else if (button.href.includes('venmo')) {
                        button.dataset.paymentType = 'venmo';
                    }
                }

                // Update button text to show amount
                if (selectedAmount > 0) {
                    const amountText = `$${selectedAmount.toLocaleString()}`;
                    const frequency = isMonthly ? '/month' : '';
                    
                    if (button.dataset.paymentType === 'square') {
                        button.innerHTML = `
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <rect x="3" y="3" width="18" height="18" rx="2"/>
                                <path d="M9 12l2 2 4-4"/>
                            </svg>
                            Give ${amountText}${frequency} via Credit Card
                        `;
                    } else if (button.dataset.paymentType === 'paypal') {
                        button.innerHTML = `
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M20.067 8.478c.492.88.556 2.014.3 3.327-.74 3.806-3.276 5.12-6.514 5.12h-.5a.805.805 0 00-.794.68l-.04.22-.63 3.993-.029.17a.804.804 0 01-.794.68H7.72a.483.483 0 01-.477-.558L7.418 21h1.518l.95-6.02h1.385c4.678 0 7.75-2.203 8.796-6.502z"/>
                            </svg>
                            Give ${amountText}${frequency} via PayPal
                        `;
                    } else if (button.dataset.paymentType === 'venmo') {
                        button.innerHTML = `
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M16.9 3.3c.4.8.6 1.6.6 2.6 0 3.3-2.8 7.6-5.1 10.6H7.7L5.5 3.6l4.4-.4 1.5 10.8c1.1-1.8 2.6-4.6 2.6-6.8 0-.9-.2-1.6-.4-2.2l3.3-.7z"/>
                            </svg>
                            Give ${amountText}${frequency} via Venmo
                        `;
                    }

                    // Add amount to Square URL (Square supports amount parameter)
                    if (button.dataset.paymentType === 'square') {
                        // Square URLs can accept amount in cents via checkout API
                        // For now, we'll just update the display text
                        // You can customize the URL here if Square provides amount parameters
                    }
                    
                } else {
                    // Reset to original text if no amount selected
                    if (button.dataset.paymentType === 'square') {
                        button.innerHTML = `
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <rect x="3" y="3" width="18" height="18" rx="2"/>
                                <path d="M9 12l2 2 4-4"/>
                            </svg>
                            Give via Credit Card
                        `;
                    } else if (button.dataset.paymentType === 'paypal') {
                        button.innerHTML = `
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M20.067 8.478c.492.88.556 2.014.3 3.327-.74 3.806-3.276 5.12-6.514 5.12h-.5a.805.805 0 00-.794.68l-.04.22-.63 3.993-.029.17a.804.804 0 01-.794.68H7.72a.483.483 0 01-.477-.558L7.418 21h1.518l.95-6.02h1.385c4.678 0 7.75-2.203 8.796-6.502z"/>
                            </svg>
                            Give via PayPal
                        `;
                    } else if (button.dataset.paymentType === 'venmo') {
                        button.innerHTML = `
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M16.9 3.3c.4.8.6 1.6.6 2.6 0 3.3-2.8 7.6-5.1 10.6H7.7L5.5 3.6l4.4-.4 1.5 10.8c1.1-1.8 2.6-4.6 2.6-6.8 0-.9-.2-1.6-.4-2.2l3.3-.7z"/>
                            </svg>
                            Give via Venmo
                        `;
                    }
                }
            });
        }

        // Store donation info in localStorage when payment button is clicked
        const paymentButtons = document.querySelectorAll('.btn-give');
        paymentButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                if (selectedAmount > 0) {
                    // Store donation details
                    localStorage.setItem('pendingDonation', JSON.stringify({
                        amount: selectedAmount,
                        isMonthly: isMonthly,
                        timestamp: Date.now()
                    }));
                } else {
                    // Show alert if no amount selected
                    e.preventDefault();
                    alert('Please select or enter a donation amount before proceeding.');
                }
            });
        });

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

        // Initialize button states
        updatePaymentButtons();
    }

    // --- Multi-step donate form controller ---
    function initDonateStepper() {
        // For single-page donate layout we don't use a stepper. Keep this function as a no-op
        // so older initialization calls won't cause errors.
        if (document.querySelector('.donate-steps')) {
            // If someone still has the old step markup, we won't interfere — the original logic
            // is intentionally conservative and will not run if missing parts are present.
            console.log('initDonateStepper: donate-steps present but single-page layout expected.');
        } else {
            console.log('initDonateStepper: single-page donate layout - stepper disabled');
        }
        return;
    }

    // Check for completed donation (when user returns from payment gateway)
    function checkForCompletedDonation() {
        const pendingDonation = localStorage.getItem('pendingDonation');
        
        if (pendingDonation) {
            try {
                const donation = JSON.parse(pendingDonation);
                const timeSince = Date.now() - donation.timestamp;
                
                // If donation was initiated in last 10 minutes, consider it completed
                if (timeSince < 600000) { // 10 minutes
                    // Add donation to total raised amount
                    const newTotal = addDonation(donation.amount);
                    console.log(`Donation of $${donation.amount} added! New total: $${newTotal}`);
                    
                    // Show thank you modal
                    setTimeout(() => {
                        if (typeof showThankYouModal === 'function') {
                            showThankYouModal();
                        }
                        // Clear the pending donation
                        localStorage.removeItem('pendingDonation');
                    }, 1000);
                } else {
                    // Too old, clear it
                    localStorage.removeItem('pendingDonation');
                }
            } catch (e) {
                localStorage.removeItem('pendingDonation');
            }
        }
    }

    // Expose functions globally for manual updates and testing
    window.CDKL5 = {
        addDonation: addDonation,
        getCurrentRaisedAmount: getCurrentRaisedAmount,
        updateRaisedAmount: updateRaisedAmount,
        refreshProgress: initProgressBars
    };

    document.addEventListener('DOMContentLoaded', () => {
        initProgressBars();
        initCountdown();
        initFadeIns();
        initCarousel();
        highlightActiveNav();
        initDonationPage();
    initDonateStepper();
        checkForCompletedDonation();
        initGallery();
        // Initialize footer fundraising if the include is already present
        initFooterFundraising();

        // Enforce validation on payment buttons
        enforceDonationValidation();

        // Footer Awareness Image Auto-Rotate (every 24 hours)
        const footerImg = document.getElementById('footer-awareness-img');
        if (footerImg && window.galleryImages && Array.isArray(window.galleryImages)) {
            // Use UTC midnight as the change point
            const now = new Date();
            const utcMidnight = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate());
            // Pick image index based on days since epoch
            const daysSinceEpoch = Math.floor(utcMidnight / (1000 * 60 * 60 * 24));
            const imgIndex = daysSinceEpoch % window.galleryImages.length;
            const imgData = window.galleryImages[imgIndex];
            if (imgData && imgData.file) {
                footerImg.src = `images/${imgData.file}`;
                footerImg.alt = imgData.quote || 'CDKL5 Awareness Child';
            }
        }
    });

    // Runtime: ensure images have keyword-rich alt/title attributes (non-destructive)
    document.addEventListener('DOMContentLoaded', () => {
        try {
            const siteKeywords = [
                'India', 'US', 'Gene Therapy', 'Rare Disease', 'CDKL5', 'CDD', 'International', 'Foundation', 'CDKL5 Research', 'Rare Disease Research', 'LouLou'
            ];

            const keywordString = siteKeywords.join(', ');
            const imgs = Array.from(document.querySelectorAll('img'));
            imgs.forEach((img, idx) => {
                // Do not overwrite good existing alts
                const hasAlt = img.hasAttribute('alt') && img.getAttribute('alt').trim() !== '';
                if (!hasAlt) {
                    // Build a friendly name from filename
                    const src = img.getAttribute('src') || '';
                    let name = src.split('/').pop() || 'image';
                    name = name.replace(/[-_\.\d]+/g, ' ').replace(/\s+/g, ' ').trim();
                    // For the first image (index 0), force LouLou keyword
                    const prefix = (idx === 0) ? 'LouLou — ' : '';
                    const alt = `${prefix}${name} — ${keywordString}`;
                    img.setAttribute('alt', alt);
                }
                // Ensure a title exists (helps some crawlers)
                if (!img.hasAttribute('title') || img.getAttribute('title').trim() === '') {
                    const t = img.getAttribute('alt') || img.getAttribute('src');
                    img.setAttribute('title', t);
                }
            });
            console.log('Image alt/title enrichment applied');
        } catch (e) {
            console.warn('Image enrichment error', e);
        }
    });

    // Also initialize footer fundraising after includes are loaded (includes-loader dispatches this event)
    document.addEventListener('includes:loaded', () => {
        initProgressBars();
        initFooterFundraising();
        initCountdown();
        initDonateStepper();
        highlightActiveNav();
    });

// Diagnostic helper removed: previously inspected #navToggle. Hamburger was removed; keep diagnostics lean.

// Mobile bottom nav: mark active link and ensure focusable
(function() {
    function initMobileBottomNav() {
        try {
            const nav = document.querySelector('.mobile-bottom-nav');
            if (!nav) return;
            const items = Array.from(nav.querySelectorAll('.mbn-item'));
            const path = window.location.pathname.split('/').pop() || 'index.html';
            items.forEach((a) => {
                const p = a.dataset.path || a.getAttribute('href').split('/').pop();
                a.classList.toggle('active', p === path);
            });
        } catch (e) {
            console.warn('initMobileBottomNav error', e);
        }
    }

    document.addEventListener('DOMContentLoaded', initMobileBottomNav);
    document.addEventListener('includes:loaded', initMobileBottomNav);
})();

// ========================================
// Gallery Modal & Lightbox Functions
// ========================================

// Array of images with inspirational quotes (using actual image filenames)
window.galleryImages = [
    { file: 'image 1.jpg', quote: 'Every smile is a victory' },
    { file: 'image 2.jpg', quote: 'Hope grows stronger every day' },
    { file: 'image 3.jpg', quote: 'Fighting with love and courage' },
    { file: 'image 4.jpg', quote: 'Small steps, giant leaps' },
    { file: 'image 5.jpg', quote: 'Stronger than CDKL5' },
    { file: 'image 6.jpg', quote: 'Love knows no limits' },
    { file: 'image 7.jpg', quote: 'Warriors in tiny bodies' },
    { file: 'image 8.jpg', quote: 'Never giving up' },
    { file: 'image 9.jpg', quote: 'Every moment is precious' },
    { file: 'image 10.jpg', quote: 'Brave hearts, bright futures' },
    { file: 'image 11.jpg', quote: 'Defying all odds' },
    { file: 'image 12.jpg', quote: 'Spreading joy despite challenges' },
    { file: 'image 13.jpg', quote: 'Together we are stronger' },
    { file: 'image 14.jpg', quote: 'Miracle in progress' },
    { file: 'image 15.jpg', quote: 'Unstoppable spirit' },
    { file: 'image 16.jpg', quote: 'Hope is our superpower' },
    { file: 'image 17.jpg', quote: 'Living life to the fullest' },
    { file: 'image 18.jpg', quote: 'Powered by love' },
    { file: 'image 19.jpg', quote: 'Breaking barriers daily' },
    { file: 'image 20.jpg', quote: 'Our hero, our inspiration' },
    { file: 'image 21.jpg', quote: 'Fierce determination' },
    { file: 'image 22.jpg', quote: 'Spreading awareness, sharing hope' },
    { file: 'image 23.jpg', quote: 'Celebrating every milestone' },
    { file: 'image 24.jpg', quote: 'Warrior with a beautiful soul' },
    { file: 'image 26.jpg', quote: 'Fighting for tomorrow' },
    { file: 'image 27.jpg', quote: 'Family united by love' },
    { file: 'image 29.jpg', quote: 'Stronger together' },
    { file: 'image 31.jpg', quote: 'Progress over perfection' },
    { file: 'image 32.jpg', quote: 'Never stop believing' },
    { file: 'image 33.jpg', quote: 'Creating new possibilities' },
    { file: 'image 34.jpg', quote: 'Turning hope into action' },
    { file: 'image 35.jpg', quote: 'Brave beyond measure' },
    { file: 'image 36.jpg', quote: 'Love conquers all' },
    { file: 'image 37.jpg', quote: 'Our little fighter' },
    { file: 'image 38.jpg', quote: 'Rewriting the story' },
    { file: 'image 39.jpg', quote: 'Stronger than yesterday' },
    { file: 'image 40.jpg', quote: 'Hope in every heartbeat' },
    { file: 'image 41.jpg', quote: 'Courage runs in the family' },
    { file: 'image 42.jpg', quote: 'Making every day count' },
    { file: 'image 43.jpg', quote: 'Defying expectations' },
    { file: 'image 44.jpg', quote: 'Powered by determination' },
    { file: 'image 45.jpg', quote: 'Our journey, our hope' },
    { file: 'image 46.jpg', quote: 'Fighting for a cure' },
    { file: 'image 47.jpg', quote: 'Believing in miracles' },
    { file: 'image 48.jpg', quote: 'Together toward a cure' },
    { file: 'image 49.jpg', quote: 'Our greatest blessing' },
    { file: 'image 50.jpg', quote: 'Hope never fades' },
    { file: 'image 51.jpg', quote: 'Shining bright through challenges' },
    { file: 'image 52.jpg', quote: 'A heart full of courage' }
];

let currentLightboxIndex = 0;

// Initialize gallery
function initGallery() {
    const galleryGrid = document.getElementById('galleryGrid');
    if (!galleryGrid) return;

    // Populate gallery grid with all images. We'll pre-check images to avoid broken tiles.
    const PLACEHOLDER_SVG = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400"%3E%3Crect fill="%23ddd" width="400" height="400"/%3E%3Ctext fill="%23999" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3EImage not found%3C/text%3E%3C/svg%3E';

    // Helper: verifies an image URL is loadable (returns a promise)
    function checkImage(url) {
        return new Promise((resolve) => {
            const img = new Image();
            img.onload = () => resolve({ ok: true });
            img.onerror = () => resolve({ ok: false });
            // Start load
            img.src = url;
        });
    }

    // Build DOM entries in sequence to keep indices stable
    (async function buildGallery() {
        for (let index = 0; index < galleryImages.length; index++) {
            const imageData = galleryImages[index];
            const item = document.createElement('div');
            item.className = 'gallery-item';
            item.onclick = () => openLightbox(index);

            const img = document.createElement('img');
            img.alt = imageData.quote || '';
            img.loading = 'lazy';

            const url = `images/${imageData.file}`;
            try {
                const res = await checkImage(url);
                if (res.ok) {
                    img.src = url;
                } else {
                    console.warn(`gallery preload failed for: ${imageData.file}`);
                    img.src = PLACEHOLDER_SVG;
                }
            } catch (e) {
                console.warn('error checking image', imageData.file, e);
                img.src = PLACEHOLDER_SVG;
            }

            const overlay = document.createElement('div');
            overlay.className = 'gallery-item-overlay';

            const quoteText = document.createElement('p');
            quoteText.className = 'gallery-quote';
            quoteText.textContent = `"${imageData.quote}"`;

            overlay.appendChild(quoteText);
            item.appendChild(img);
            item.appendChild(overlay);
            galleryGrid.appendChild(item);
        }
    })();
}

// Open gallery modal
function openGalleryModal() {
    const modal = document.getElementById('galleryModal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
}

// Expose globally for HTML onclick
window.openGalleryModal = openGalleryModal;

// Close gallery modal
function closeGalleryModal() {
    const modal = document.getElementById('galleryModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
    }
}

// Open lightbox with specific image
function openLightbox(index) {
    currentLightboxIndex = index;
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    const counter = document.getElementById('lightboxCounter');
    
    if (lightbox && lightboxImage) {
        const imageData = galleryImages[index];
        lightboxImage.src = `images/${imageData.file}`;
        lightboxImage.alt = imageData.quote;
        counter.textContent = `${index + 1} / ${galleryImages.length} - "${imageData.quote}"`;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

// Close lightbox
function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Previous image in lightbox
function prevLightboxImage() {
    currentLightboxIndex = (currentLightboxIndex - 1 + galleryImages.length) % galleryImages.length;
    openLightbox(currentLightboxIndex);
}

// Next image in lightbox
function nextLightboxImage() {
    currentLightboxIndex = (currentLightboxIndex + 1) % galleryImages.length;
    openLightbox(currentLightboxIndex);
}

// Keyboard navigation for lightbox
document.addEventListener('keydown', (e) => {
    const lightbox = document.getElementById('lightbox');
    if (lightbox && lightbox.classList.contains('active')) {
        if (e.key === 'ArrowLeft') {
            prevLightboxImage();
        } else if (e.key === 'ArrowRight') {
            nextLightboxImage();
        } else if (e.key === 'Escape') {
            closeLightbox();
        }
    }
    
    const modal = document.getElementById('galleryModal');
    if (modal && modal.classList.contains('active') && e.key === 'Escape') {
        closeGalleryModal();
    }
});

// Close modal when clicking outside
document.addEventListener('click', (e) => {
    const galleryModal = document.getElementById('galleryModal');
    if (e.target === galleryModal) {
        closeGalleryModal();
    }
    
    const lightbox = document.getElementById('lightbox');
    if (e.target === lightbox) {
        closeLightbox();
    }
});

})();
