document.addEventListener('DOMContentLoaded', function () {
    // Accordion Functionality
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            accordionHeaders.forEach(item => {
                if (item !== header) {
                    item.classList.remove('active');
                    item.nextElementSibling.style.maxHeight = 0;
                }
            });

            header.classList.toggle('active');
            const accordionContent = header.nextElementSibling;
            if (header.classList.contains('active')) {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
            } else {
                accordionContent.style.maxHeight = 0;
            }
        });
    });

    // Carousel Functionality
    const carousel = document.querySelector('.carousel');
    const track = carousel.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    const prevButton = carousel.querySelector('.prev-btn');
    const nextButton = carousel.querySelector('.next-btn');
  
    let currentSlideIndex = 0;

    function updateSlidePosition() {
        track.style.transform = 'translateX(-' + currentSlideIndex * 100 + '%)';
    }

    nextButton.addEventListener('click', () => {
        if (currentSlideIndex < slides.length - 1) {
            currentSlideIndex++;
        } else {
            currentSlideIndex = 0;
        }
        updateSlidePosition();
    });

    prevButton.addEventListener('click', () => {
        if (currentSlideIndex > 0) {
            currentSlideIndex--;
        } else {
            currentSlideIndex = slides.length - 1;
        }
        updateSlidePosition();
    });

    // Modal Functionality
    const viewButtons = document.querySelectorAll('.view-btn');
    const closeButtons = document.querySelectorAll('.close-btn');

    viewButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modalId = button.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            modal.style.display = 'block';
        });
    });

    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = button.closest('.modal');
            modal.style.display = 'none';
        });
    });

    window.addEventListener('click', event => {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = 'none';
        }
    
    });

    const resources = [
        {
            title: "Summer 2025 Internships",
            description: "Explore this GitHub repository for Summer 2025 internship opportunities.",
            link: "https://github.com/SimplifyJobs/Summer2025-Internships",
        },
        {
            title: "Crack Coding Interviews",
            description: "Enjoy Algorithms provides guidance on cracking coding interviews with ease.",
            link: "https://www.enjoyalgorithms.com/crack-coding-interviews/",
        },
        {
            title: "Tech Interview Handbook",
            description: "A comprehensive guide for software engineering interviews.",
            link: "https://www.techinterviewhandbook.org/software-engineering-interview-guide/#try-out-mock-coding-interviews-with-google-and-facebook-engineers",
        }
    ];

    // Resources Page Carousel
    const resourcesCarousel = document.getElementById('resources-carousel');

    if (resourcesCarousel) {
        const track = resourcesCarousel.querySelector('.carousel-track');
        const slides = track.querySelectorAll('.carousel-slide');
        const prevButton = resourcesCarousel.querySelector('.prev-btn');
        const nextButton = resourcesCarousel.querySelector('.next-btn');
        let currentIndex = 0;

        slides.forEach((slide, index) => {
            if (resources[index]) {
                const resource = resources[index];
                slide.querySelector('.image-placeholder').innerHTML = `<img src="https://via.placeholder.com/150" alt="${resource.title}">`;
                slide.querySelector('h3').textContent = resource.title;
                slide.querySelector('p').textContent = resource.description;
                const button = slide.querySelector('button');
                button.textContent = "View Resource";
                button.addEventListener('click', () => {
                    window.open(resource.link, '_blank');
                });
            } else {
                slide.style.display = 'none';
            }
        });

        // Update carousel position
        function updateCarouselPosition() {
            const slideWidth = slides[0].getBoundingClientRect().width;
            track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
        }

        nextButton.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % slides.length;
            updateCarouselPosition();
        });

        prevButton.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            updateCarouselPosition();
        });
        updateCarouselPosition();
    }

});