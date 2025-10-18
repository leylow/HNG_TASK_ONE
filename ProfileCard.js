function updateTime() {
            const timeElement = document.getElementById('current-time');
            if (timeElement) {
                timeElement.textContent = Date.now();
            }
        }

        // Initial update on page load
        updateTime();

        // Update time every 100ms for real-time display
        setInterval(updateTime, 100);

        /**
         * Accessibility: Ensure all interactive elements are keyboard accessible
         * This is handled by semantic HTML (links, buttons) and CSS focus styles
         */
        document.addEventListener('DOMContentLoaded', () => {
            // Log that the profile card is ready
            console.log('[Profile Card] Component loaded and ready for testing');
            
            // Verify all required data-testid attributes exist
            const requiredTestIds = [
                'test-profile-card',
                'test-user-name',
                'test-user-bio',
                'test-user-time',
                'test-user-avatar',
                'test-user-social-links',
                'test-user-hobbies',
                'test-user-dislikes'
            ];

            requiredTestIds.forEach(testId => {
                const element = document.querySelector(`[data-testid="${testId}"]`);
                if (!element) {
                    console.warn(`[Profile Card] Missing element with data-testid="${testId}"`);
                } else {
                    console.log(`[Profile Card] ✓ Found element with data-testid="${testId}"`);
                }
            });
        });