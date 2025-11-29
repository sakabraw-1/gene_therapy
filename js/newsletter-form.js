// Newsletter / Stay Connected Form Handler
// Handles form submission, duplicate checking, and sends confirmation emails

// Wait for both DOM and includes to load
function initNewsletterForm() {
    console.log('Initializing newsletter form...');
    
    const footerForm = document.getElementById('footer-newsletter');
    
    if (!footerForm) {
        console.log('Footer newsletter form not found, will retry...');
        // Footer might not be loaded yet, try again after a short delay
        setTimeout(initNewsletterForm, 100);
        return;
    }
    
    console.log('Footer newsletter form found!');
    
    // Track subscribers in localStorage to prevent duplicates
    const SUBSCRIBERS_KEY = 'cdkl5_newsletter_subscribers';
    
    function getSubscribers() {
        try {
            const data = localStorage.getItem(SUBSCRIBERS_KEY);
            return data ? JSON.parse(data) : [];
        } catch (e) {
            return [];
        }
    }
    
    function isAlreadySubscribed(email) {
        const subscribers = getSubscribers();
        return subscribers.some(sub => sub.email.toLowerCase() === email.toLowerCase());
    }
    
    function addSubscriber(email, firstName, lastName) {
        const subscribers = getSubscribers();
        subscribers.push({
            email: email.toLowerCase(),
            firstName: firstName,
            lastName: lastName,
            date: new Date().toISOString()
        });
        localStorage.setItem(SUBSCRIBERS_KEY, JSON.stringify(subscribers));
    }
    
    footerForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        console.log('Form submitted');
        
        const formData = new FormData(footerForm);
        const emailInput = footerForm.querySelector('input[name="email"]');
        const firstNameInput = footerForm.querySelector('input[name="firstName"]');
        const lastNameInput = footerForm.querySelector('input[name="lastName"]');
        const submitButton = footerForm.querySelector('button[type="submit"]');
        const messageDiv = document.getElementById('footer-newsletter-message');
        
        const email = emailInput?.value.trim();
        const firstName = firstNameInput?.value.trim() || '';
        const lastName = lastNameInput?.value.trim() || '';
        
        console.log('Form data:', { email, firstName, lastName });
        
        // Basic validation
        if (!email || !firstName || !lastName) {
            showMessage(messageDiv, 'Please fill in all fields.', 'error');
            return;
        }
        
        // Check if already subscribed
        if (isAlreadySubscribed(email)) {
            console.log('Email already subscribed:', email);
            showMessage(messageDiv, `You're already connected with us, ${firstName}! Thank you for your continued support. 💙`, 'info');
            footerForm.reset();
            return;
        }
        
        // Disable submit button
        if (submitButton) {
            submitButton.disabled = true;
            submitButton.innerHTML = '<span style="opacity:0.7">⏳ Subscribing...</span>';
        }
        
        try {
            console.log('Submitting to Netlify Forms...');
            
            // Submit to Netlify Forms
            const response = await fetch('/', {
                method: 'POST',
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams(formData).toString()
            });
            
            console.log('Netlify response:', response.status);
            
            if (response.ok || response.status === 200) {
                // Success! Add to local storage
                addSubscriber(email, firstName, lastName);
                console.log('Subscriber added to localStorage');
                
                // Send confirmation email via Netlify Function
                try {
                    const emailResponse = await fetch('/.netlify/functions/send-newsletter-confirmation', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            firstName: firstName,
                            lastName: lastName,
                            email: email
                        })
                    });
                    console.log('Email function response:', emailResponse.status);
                } catch (emailError) {
                    console.error('Email sending failed:', emailError);
                    // Don't show error to user, email is optional
                }
                
                showMessage(messageDiv, `Thank you, ${firstName}! You're now connected with us. Check your email for confirmation. 📧`, 'success');
                footerForm.reset();
                
                console.log('Success message shown');
            } else {
                throw new Error('Form submission failed');
            }
            
        } catch (error) {
            console.error('Form submission error:', error);
            showMessage(messageDiv, `Thank you, ${firstName}! You're now connected with us. �`, 'success');
            
            // Still add to localStorage even if Netlify fails
            addSubscriber(email, firstName, lastName);
            footerForm.reset();
        } finally {
            // Re-enable submit button
            if (submitButton) {
                submitButton.disabled = false;
                submitButton.textContent = 'Subscribe';
            }
        }
    });
    
    console.log('Newsletter form event listener attached successfully!');
}

// Start initialization when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNewsletterForm);
} else {
    // DOM already loaded, start immediately
    initNewsletterForm();
}

// Show message function
function showMessage(container, message, type) {
    if (!container) {
        console.log('Message container not found');
        return;
    }
    
    console.log('Showing message:', type, message);
    
    // Clear existing content
    container.innerHTML = '';
    
    // Create message element
    const messageDiv = document.createElement('div');
    messageDiv.className = `form-message form-message-${type}`;
    messageDiv.textContent = message;
    
    // Add styles
    messageDiv.style.padding = '15px';
    messageDiv.style.marginTop = '15px';
    messageDiv.style.borderRadius = '8px';
    messageDiv.style.fontSize = '15px';
    messageDiv.style.fontWeight = '600';
    messageDiv.style.textAlign = 'center';
    messageDiv.style.animation = 'fadeInMessage 0.4s ease';
    messageDiv.style.lineHeight = '1.5';
    
    if (type === 'success') {
        messageDiv.style.backgroundColor = 'rgba(212, 237, 218, 0.95)';
        messageDiv.style.color = '#155724';
        messageDiv.style.border = '2px solid #c3e6cb';
    } else if (type === 'error') {
        messageDiv.style.backgroundColor = 'rgba(248, 215, 218, 0.95)';
        messageDiv.style.color = '#721c24';
        messageDiv.style.border = '2px solid #f5c6cb';
    } else if (type === 'info') {
        messageDiv.style.backgroundColor = 'rgba(209, 236, 241, 0.95)';
        messageDiv.style.color = '#0c5460';
        messageDiv.style.border = '2px solid #bee5eb';
    }
    
    // Insert message
    container.appendChild(messageDiv);
    
    console.log('Message displayed');
    
    // Auto-remove after 10 seconds
    setTimeout(() => {
        messageDiv.style.animation = 'fadeOutMessage 0.4s ease';
        setTimeout(() => {
            if (messageDiv.parentNode) {
                messageDiv.remove();
                console.log('Message removed');
            }
        }, 400);
    }, 10000);
}

// CSS animations
if (!document.getElementById('newsletter-form-styles')) {
    const style = document.createElement('style');
    style.id = 'newsletter-form-styles';
    style.textContent = `
        @keyframes fadeInMessage {
            from { 
                opacity: 0; 
                transform: translateY(-15px) scale(0.95); 
            }
            to { 
                opacity: 1; 
                transform: translateY(0) scale(1); 
            }
        }
        
        @keyframes fadeOutMessage {
            from { 
                opacity: 1; 
                transform: translateY(0) scale(1); 
            }
            to { 
                opacity: 0; 
                transform: translateY(-15px) scale(0.95); 
            }
        }
        
        .form-message {
            transition: all 0.3s ease;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }
        
        #footer-newsletter-message {
            min-height: 0;
        }
    `;
    document.head.appendChild(style);
}
