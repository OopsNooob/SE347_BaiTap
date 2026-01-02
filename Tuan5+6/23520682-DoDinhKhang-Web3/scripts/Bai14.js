document.addEventListener('DOMContentLoaded', function() {
    const navButtons = document.querySelectorAll('.nav-button');
    const contentSections = document.querySelectorAll('.content-section');

    navButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const targetSection = this.getAttribute('data-section');
            navButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            contentSections.forEach(section => section.classList.remove('active'));
            const targetElement = document.getElementById(targetSection + '-content');
            if (targetElement) targetElement.classList.add('active');
        });
    });

    const ourStoryBtn = document.getElementById('ourStoryBtn');
    const productsBtn = document.getElementById('productsBtn');
    const thisWeekBtn = document.getElementById('thisWeekBtn');
    const welcomeContent = document.getElementById('welcomeContent');
    const ourStoryContent = document.getElementById('ourStoryContent');
    const productsContent = document.getElementById('productsContent');
    const thisWeekContent = document.getElementById('thisWeekContent');

    if (!ourStoryBtn || !productsBtn || !thisWeekBtn || !welcomeContent || !ourStoryContent || !productsContent || !thisWeekContent) return;

    let ourStoryExpanded = false;
    let productsExpanded = false;
    let thisWeekExpanded = false;

    function hideAllContent() {
        welcomeContent.classList.add('hidden');
        welcomeContent.style.display = 'none';
        ourStoryContent.classList.add('hidden');
        ourStoryContent.style.display = 'none';
        productsContent.classList.add('hidden');
        productsContent.style.display = 'none';
        thisWeekContent.classList.add('hidden');
        thisWeekContent.style.display = 'none';
    }

    function collapseAllButtons() {
        ourStoryBtn.classList.remove('expanded');
        productsBtn.classList.remove('expanded');
        thisWeekBtn.classList.remove('expanded');
        ourStoryExpanded = false;
        productsExpanded = false;
        thisWeekExpanded = false;
    }

    ourStoryBtn.addEventListener('click', function() {
        if (ourStoryExpanded) {
            ourStoryBtn.classList.remove('expanded');
            hideAllContent();
            welcomeContent.classList.remove('hidden');
            welcomeContent.style.display = 'flex';
            ourStoryExpanded = false;
        } else {
            collapseAllButtons();
            
            ourStoryBtn.classList.add('expanded');
            ourStoryExpanded = true;

            hideAllContent();
            ourStoryContent.classList.remove('hidden');
            ourStoryContent.style.display = 'flex';
            setTimeout(() => { ourStoryContent.style.opacity = '1'; }, 10);
        }
    });

    productsBtn.addEventListener('click', function() {
        if (productsExpanded) {
            productsBtn.classList.remove('expanded');
            hideAllContent();
            welcomeContent.classList.remove('hidden');
            welcomeContent.style.display = 'flex';
            productsExpanded = false;
        } else {
            collapseAllButtons();
            
            productsBtn.classList.add('expanded');
            productsExpanded = true;

            hideAllContent();
            productsContent.classList.remove('hidden');
            productsContent.style.display = 'flex';
            setTimeout(() => { productsContent.style.opacity = '1'; }, 10);
        }
    });

    thisWeekBtn.addEventListener('click', function() {
        if (thisWeekExpanded) {
            thisWeekBtn.classList.remove('expanded');
            hideAllContent();
            welcomeContent.classList.remove('hidden');
            welcomeContent.style.display = 'flex';
            thisWeekExpanded = false;
        } else {
            collapseAllButtons();
            
            thisWeekBtn.classList.add('expanded');
            thisWeekExpanded = true;

            hideAllContent();
            thisWeekContent.classList.remove('hidden');
            thisWeekContent.style.display = 'flex';
            setTimeout(() => { thisWeekContent.style.opacity = '1'; }, 10);
        }
    });
});