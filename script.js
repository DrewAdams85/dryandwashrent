// Form validation and submission handling
(function() {
    'use strict';

    // FAQ Accordion functionality
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            // Close all FAQ items
            faqItems.forEach(faq => faq.classList.remove('active'));

            // If this item wasn't active, open it
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

    // Get form elements
    const form = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const phoneInput = document.getElementById('phone');
    const emailInput = document.getElementById('email');
    const successMessage = document.getElementById('successMessage');

    // Error message elements
    const nameError = document.getElementById('nameError');
    const phoneError = document.getElementById('phoneError');
    const emailError = document.getElementById('emailError');

    // Validation functions
    function validateName(name) {
        if (!name || name.trim().length === 0) {
            return 'Name is required';
        }
        if (name.trim().length < 2) {
            return 'Name must be at least 2 characters';
        }
        if (!/^[a-zA-Z\s'-]+$/.test(name)) {
            return 'Name can only contain letters, spaces, hyphens, and apostrophes';
        }
        return '';
    }

    function validatePhone(phone) {
        if (!phone || phone.trim().length === 0) {
            return 'Phone number is required';
        }
        // Remove all non-digit characters for validation
        const digitsOnly = phone.replace(/\D/g, '');
        if (digitsOnly.length < 10) {
            return 'Phone number must be at least 10 digits';
        }
        if (digitsOnly.length > 15) {
            return 'Phone number is too long';
        }
        return '';
    }

    function validateEmail(email) {
        // Email is optional, so empty is valid
        if (!email || email.trim().length === 0) {
            return '';
        }
        // Basic email validation regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return 'Please enter a valid email address';
        }
        return '';
    }

    // Display error message
    function showError(input, errorElement, message) {
        errorElement.textContent = message;
        input.classList.add('error');
    }

    // Clear error message
    function clearError(input, errorElement) {
        errorElement.textContent = '';
        input.classList.remove('error');
    }

    // Real-time validation on input
    nameInput.addEventListener('input', function() {
        const error = validateName(this.value);
        if (error) {
            showError(nameInput, nameError, error);
        } else {
            clearError(nameInput, nameError);
        }
    });

    phoneInput.addEventListener('input', function() {
        // Format phone number as user types (optional enhancement)
        let value = this.value.replace(/\D/g, '');
        if (value.length > 0) {
            if (value.length <= 3) {
                this.value = value;
            } else if (value.length <= 6) {
                this.value = `(${value.slice(0, 3)}) ${value.slice(3)}`;
            } else if (value.length <= 10) {
                this.value = `(${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6)}`;
            } else {
                this.value = `(${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6, 10)}`;
            }
        }

        const error = validatePhone(this.value);
        if (error) {
            showError(phoneInput, phoneError, error);
        } else {
            clearError(phoneInput, phoneError);
        }
    });

    emailInput.addEventListener('input', function() {
        const error = validateEmail(this.value);
        if (error) {
            showError(emailInput, emailError, error);
        } else {
            clearError(emailInput, emailError);
        }
    });

    // Handle form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form values
        const name = nameInput.value.trim();
        const phone = phoneInput.value.trim();
        const email = emailInput.value.trim();

        // Validate all fields
        const nameErrorMsg = validateName(name);
        const phoneErrorMsg = validatePhone(phone);
        const emailErrorMsg = validateEmail(email);

        // Clear all previous errors
        clearError(nameInput, nameError);
        clearError(phoneInput, phoneError);
        clearError(emailInput, emailError);

        // Show errors if any
        let hasErrors = false;
        if (nameErrorMsg) {
            showError(nameInput, nameError, nameErrorMsg);
            hasErrors = true;
        }
        if (phoneErrorMsg) {
            showError(phoneInput, phoneError, phoneErrorMsg);
            hasErrors = true;
        }
        if (emailErrorMsg) {
            showError(emailInput, emailError, emailErrorMsg);
            hasErrors = true;
        }

        // If there are errors, focus on first error field
        if (hasErrors) {
            if (nameErrorMsg) {
                nameInput.focus();
            } else if (phoneErrorMsg) {
                phoneInput.focus();
            } else if (emailErrorMsg) {
                emailInput.focus();
            }
            return;
        }

        // Form is valid, process submission
        submitForm(name, phone, email);
    });

    function submitForm(name, phone, email) {
        // Disable submit button to prevent double submission
        const submitButton = form.querySelector('button[type="submit"]');
        const originalButtonText = submitButton.querySelector('.btn-text').textContent;
        submitButton.disabled = true;
        submitButton.querySelector('.btn-text').textContent = 'Submitting...';

        // Prepare form data for Formspree
        const formData = new FormData();
        formData.append('name', name);
        formData.append('phone', phone);
        if (email) {
            formData.append('email', email);
        }

        // Submit to Formspree
        fetch('https://formspree.io/f/xyzrjqbl', {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                // Success! Hide form and show success message
                form.style.display = 'none';
                successMessage.style.display = 'block';
                successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });

                // Trigger celebration!
                playCelebrationSound();
                launchConfetti();

                console.log('Form submitted successfully to Formspree');
            } else {
                // Formspree returned an error
                return response.json().then(data => {
                    throw new Error(data.error || 'Form submission failed');
                });
            }
        })
        .catch(error => {
            console.error('Error submitting form:', error);
            alert('There was an error submitting your form. Please try again or contact us directly.');

            // Re-enable the submit button
            submitButton.disabled = false;
            submitButton.querySelector('.btn-text').textContent = originalButtonText;
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add animation on scroll (optional enhancement)
    function observeElements() {
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

        // Observe service cards and pricing card
        document.querySelectorAll('.service-card, .pricing-card').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    }

    // Initialize animations when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', observeElements);
    } else {
        observeElements();
    }

    // Celebration sound using Web Audio API
    function playCelebrationSound() {
        try {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();

            // Create a fun "success" sound with multiple tones
            const playTone = (frequency, startTime, duration) => {
                const oscillator = audioContext.createOscillator();
                const gainNode = audioContext.createGain();

                oscillator.connect(gainNode);
                gainNode.connect(audioContext.destination);

                oscillator.frequency.value = frequency;
                oscillator.type = 'sine';

                gainNode.gain.setValueAtTime(0.3, startTime);
                gainNode.gain.exponentialRampToValueAtTime(0.01, startTime + duration);

                oscillator.start(startTime);
                oscillator.stop(startTime + duration);
            };

            // Play a cheerful melody
            const now = audioContext.currentTime;
            playTone(523.25, now, 0.15);        // C5
            playTone(659.25, now + 0.1, 0.15);  // E5
            playTone(783.99, now + 0.2, 0.25);  // G5
            playTone(1046.5, now + 0.35, 0.3);  // C6
        } catch (error) {
            console.log('Audio not supported or blocked');
        }
    }

    // Confetti animation
    function launchConfetti() {
        const duration = 3000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 10000 };

        function randomInRange(min, max) {
            return Math.random() * (max - min) + min;
        }

        // Create canvas for confetti
        const canvas = document.createElement('canvas');
        canvas.style.position = 'fixed';
        canvas.style.top = '0';
        canvas.style.left = '0';
        canvas.style.width = '100%';
        canvas.style.height = '100%';
        canvas.style.pointerEvents = 'none';
        canvas.style.zIndex = '9999';
        document.body.appendChild(canvas);

        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const confettiPieces = [];
        const confettiCount = 150;
        const colors = ['#14b8a6', '#0d9488', '#2dd4bf', '#5eead4', '#99f6e4', '#f59e0b', '#f97316', '#ef4444'];

        // Create confetti pieces
        for (let i = 0; i < confettiCount; i++) {
            confettiPieces.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height - canvas.height,
                rotation: Math.random() * 360,
                rotationSpeed: randomInRange(-5, 5),
                velocity: {
                    x: randomInRange(-5, 5),
                    y: randomInRange(3, 8)
                },
                size: randomInRange(5, 15),
                color: colors[Math.floor(Math.random() * colors.length)],
                opacity: 1
            });
        }

        function updateConfetti() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            confettiPieces.forEach((piece, index) => {
                // Update position
                piece.x += piece.velocity.x;
                piece.y += piece.velocity.y;
                piece.rotation += piece.rotationSpeed;
                piece.velocity.y += 0.2; // gravity

                // Fade out near the end
                const timeLeft = animationEnd - Date.now();
                if (timeLeft < 500) {
                    piece.opacity = timeLeft / 500;
                }

                // Draw confetti piece
                ctx.save();
                ctx.translate(piece.x, piece.y);
                ctx.rotate((piece.rotation * Math.PI) / 180);
                ctx.globalAlpha = piece.opacity;
                ctx.fillStyle = piece.color;

                // Draw as a rectangle
                ctx.fillRect(-piece.size / 2, -piece.size / 2, piece.size, piece.size);

                ctx.restore();

                // Remove if off screen
                if (piece.y > canvas.height) {
                    confettiPieces.splice(index, 1);
                }
            });

            if (Date.now() < animationEnd && confettiPieces.length > 0) {
                requestAnimationFrame(updateConfetti);
            } else {
                // Clean up
                document.body.removeChild(canvas);
            }
        }

        updateConfetti();

        // Launch fireworks bursts from multiple points
        const interval = setInterval(() => {
            if (Date.now() > animationEnd) {
                clearInterval(interval);
                return;
            }

            // Add more confetti bursts
            for (let i = 0; i < 30; i++) {
                confettiPieces.push({
                    x: randomInRange(canvas.width * 0.2, canvas.width * 0.8),
                    y: randomInRange(canvas.height * 0.1, canvas.height * 0.5),
                    rotation: Math.random() * 360,
                    rotationSpeed: randomInRange(-10, 10),
                    velocity: {
                        x: randomInRange(-8, 8),
                        y: randomInRange(-10, -5)
                    },
                    size: randomInRange(5, 15),
                    color: colors[Math.floor(Math.random() * colors.length)],
                    opacity: 1
                });
            }
        }, 200);
    }

})();
