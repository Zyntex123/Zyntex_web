// Smooth scroll for navigation links
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Contact form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Message sent successfully!');
});

// Image carousel functionality
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImage');
const closeModal = document.querySelector('.close');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentCategory = '';
let currentImageIndex = 0;
const imageSets = {
    shirts: ['images/shirt.png', 'images/shirt.png', 'images/shirt.png', 'images/shirt.png', 'images/shirt.png'],
    tshirts: ['images/tshirt.png', 'images/tshirt.png', 'images/tshirt.png', 'images/tshirt.png', 'images/tshirt.png'],
    hoodies: ['images/hoodie.png', 'images/hoodie.png', 'images/hoodie.png', 'images/hoodie.png', 'images/hoodie.png'],
    pants: ['images/pants.png', 'images/pants.png', 'images/pants.png', 'images/pants.png', 'images/pants.png'],
    jeans: ['images/jeans.png', 'images/jeans.png', 'images/jeans.png', 'images/jeans.png', 'images/jeans.png'],
    cargos: ['images/cargo.png', 'images/cargo.png', 'images/cargo.png', 'images/cargo.png', 'images/cargo.png']
};

document.querySelectorAll('.item').forEach(item => {
    item.addEventListener('click', function() {
        currentCategory = this.querySelector('h3').innerText.toLowerCase();
        currentImageIndex = 0;
        showImage(currentCategory, currentImageIndex);
        modal.style.display = 'flex';
    });
});

closeModal.addEventListener('click', function() {
    modal.style.display = 'none';
});

prevButton.addEventListener('click', function() {
    currentImageIndex = (currentImageIndex > 0) ? currentImageIndex - 1 : imageSets[currentCategory].length - 1;
    showImage(currentCategory, currentImageIndex);
});

nextButton.addEventListener('click', function() {
    currentImageIndex = (currentImageIndex < imageSets[currentCategory].length - 1) ? currentImageIndex + 1 : 0;
    showImage(currentCategory, currentImageIndex);
});

function showImage(category, index) {
    modalImg.src = imageSets[category][index];
}
document.getElementById('send-email').addEventListener('click', function() {
    // Get form values
    const name = document.getElementById('name').value.trim();
    const company = document.getElementById('company').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validate the form fields
    if (!name) {
        alert('Please enter your name.');
        return;
    }
    if (!company) {
        alert('Please enter your company name.');
        return;
    }
    if (!email) {
        alert('Please enter your email.');
        return;
    }
    if (!message) {
        alert('Please enter your message.');
        return;
    }

    // Construct the mailto link
    const subject = encodeURIComponent(`New Message from ${name}`);
    const body = encodeURIComponent(
        `Name: ${name}\nCompany: ${company}\nEmail: ${email}\n\nMessage:\n${message}`
    );
    const mailtoLink = `mailto:zyntex78@gmail.com?subject=${subject}&body=${body}`;

    // Open the mailto link
    window.location.href = mailtoLink;
});
