document.addEventListener('DOMContentLoaded', function() {
    const showMoreBtn = document.getElementById('show-more-btn');
    const showLessBtn = document.getElementById('show-less-btn');
    const timelineItems = document.querySelectorAll('.timeline .timeline-item');
    const itemsToShowInitially = 2;

    // Initially hide the extra items
    timelineItems.forEach((item, index) => {
        if (index >= itemsToShowInitially) {
            item.classList.add('hidden');
        }
    });

    // Hide the "show more" button if there are not enough items
    if (timelineItems.length <= itemsToShowInitially) {
        if(showMoreBtn) showMoreBtn.style.display = 'none';
    }

    if (showMoreBtn && showLessBtn) {
        showMoreBtn.addEventListener('click', function() {
            timelineItems.forEach((item, index) => {
                if (index >= itemsToShowInitially) {
                    item.classList.remove('hidden');
                }
            });
            showMoreBtn.style.display = 'none';
            showLessBtn.style.display = 'inline-block';
        });

        showLessBtn.addEventListener('click', function() {
            timelineItems.forEach((item, index) => {
                if (index >= itemsToShowInitially) {
                    item.classList.add('hidden');
                }
            });
            showLessBtn.style.display = 'none';
            showMoreBtn.style.display = 'inline-block';
        });
    }
});