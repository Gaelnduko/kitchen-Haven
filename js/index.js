
        const signinForm = document.getElementById('signinForm');
        const messageDiv = document.getElementById('message');
        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');
        const forgotPasswordLink = document.getElementById('forgotPassword');
        const signupButton = document.getElementById('signupButton');
        const signinButton = document.querySelector('.signin-button');

        
        function showMessage(text, type) {
            messageDiv.textContent = text;
            messageDiv.className = `message ${type}`;
            messageDiv.style.display = 'block';
            messageDiv.style.animation = 'slideIn 0.3s ease-out';
            
            setTimeout(() => {
                messageDiv.style.animation = 'fadeOut 0.3s ease-out';
                setTimeout(() => {
                    messageDiv.style.display = 'none';
                }, 300);
            }, 5000);
        }

       
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideIn {
                from { opacity: 0; transform: translateY(-10px); }
                to { opacity: 1; transform: translateY(0); }
            }
            @keyframes fadeOut {
                from { opacity: 1; transform: translateY(0); }
                to { opacity: 0; transform: translateY(-10px); }
            }
        `;
        document.head.appendChild(style);

        
        function validateEmail(email) {
            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            return emailRegex.test(email);
        }

        function validatePassword(password) {
            return password.length >= 6;
        }

        
        signinForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const email = emailInput.value.trim();
            const password = passwordInput.value;
            
            messageDiv.style.display = 'none';
            
            if (!email || !password) {
                showMessage('🚫 Complete all fields to unlock your premium access!', 'error');
                return;
            }
            
            if (!validateEmail(email)) {
                showMessage('📧 Please enter a valid email to access your account.', 'error');
                return;
            }
            
            if (!validatePassword(password)) {
                showMessage('🔐 Password must be at least 6 characters for security.', 'error');
                return;
            }
            
           
            const originalText = signinButton.textContent;
            signinButton.innerHTML = '🔓 Unlocking Premium Access...';
            signinButton.disabled = true;
            
            try {
                await new Promise(resolve => setTimeout(resolve, 2500));
                
                
                if (email === 'chef@kitchenhaven.com' && password === 'premium123') {
                    showMessage('🎉 Welcome back! Accessing your premium dashboard with 5,000+ exclusive recipes...', 'success');
                    
                    setTimeout(() => {
                        showMessage('✨ Premium features unlocked! Enjoy your culinary journey!', 'success');
                    }, 3000);
                } else {
                    showMessage('🔑 Demo Access: Use chef@kitchenhaven.com / premium123 to unlock premium features!', 'error');
                }
            } catch (error) {
                showMessage('⚠️ Connection issue. Your premium access is waiting - please try again!', 'error');
            } finally {
                signinButton.innerHTML = originalText;
                signinButton.disabled = false;
            }
        });

       
        forgotPasswordLink.addEventListener('click', function(e) {
            e.preventDefault();
            showMessage('📬 Password reset link sent! Check your email to regain access to premium content.', 'success');
        });

        signupButton.addEventListener('click', function(e) {
            e.preventDefault();
            showMessage('🚀 Redirecting to your free premium trial signup...', 'success');
        });

    
        const inputs = document.querySelectorAll('.form-input');
        inputs.forEach(input => {
            input.addEventListener('focus', function() {
                this.style.transform = 'translateY(-2px)';
                this.style.boxShadow = '0 8px 25px rgba(255, 107, 53, 0.2)';
            });
            
            input.addEventListener('blur', function() {
                this.style.transform = 'translateY(0)';
                this.style.boxShadow = 'none';
            });
        });

       
        console.log('🔥 PREMIUM DEMO ACCESS:');
        console.log('📧 Email: chef@kitchenhaven.com');
        console.log('🔐 Password: premium123');
        console.log('🎯 Unlock 5,000+ premium recipes and exclusive content!');

      
        const previewItems = document.querySelectorAll('.preview-item');
        previewItems.forEach(item => {
            item.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.02)';
                this.style.boxShadow = '0 4px 12px rgba(255, 107, 53, 0.2)';
            });
            
            item.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1)';
                this.style.boxShadow = 'none';
            });
        });
