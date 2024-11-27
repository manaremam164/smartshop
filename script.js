document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menu-icon');
    const navMenu = document.querySelector('.navmenu');

    menuIcon.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });

    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message. We will get back to you soon!');
        contactForm.reset();
    });

    const navLinks = document.querySelectorAll('.navmenu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            navMenu.classList.remove('active');
        });
    });

    // Product data
    const products = {
        'personal-computers': [
            { name: 'Macbook Pro', specs: '15" 4K Display, Intel i7, 16GB RAM, 512GB SSD', price: 1299.99, image: 'photos/computers/lapappel.png' },
            { name: 'Dell Laptop', specs: 'AMD Ryzen 9, 32GB RAM,1TB NVMe SSD, RTX 3080', price: 2499.99, image: 'photos/computers/lapdell.png' },
            { name: 'Hp Laptop', specs: '13" Retina Display, M1 Chip, 8GB RAM, 256GB SSD', price: 999.99, image: 'photos/computers/laphp.png' }
        ],
        'smart-phones': [
            { name: 'Iphone', specs: '6.7" AMOLED, 12GB RAM, 256GB Storage, 108MP Camera', price: 1099.99, image: 'photos/phones/phoneiphon.jfif' },
            { name: 'Samsung', specs: '6.1" Super Retina XDR, A15 Bionic, 128GB Storage', price: 999.99, image: 'photos/phones/phonesamsung.jfif' },
            { name: 'Samsung Galaxy', specs: '6.4" OLED, Google Tensor, 8GB RAM, 128GB Storage', price: 899.99, image: 'photos/phones/phonesamsung 2.jfif' }
        ],
        'hardware-accessories': [
            { name: 'Mechanical Keyboard', specs: 'Mechanical Keyboard, RGB Backlit, Cherry MX Switches ', price: 299.99, image: 'photos/hardware/2hardware.jfif' },
            { name: 'Earphones', specs: 'Bose QuietComfort SC Wireless Noise Cancelling Headphones, Bluetooth Over Ear Headphones with Up To 24 Hours of Battery Life, Black', price: 79.99, image: 'photos/hardware/3hardware.jfif' },
            { name: 'Ear pods', specs: '40Gbps, 4K@60Hz, 100W Power Delivery', price: 149.99, image: 'photos/hardware/4haredware.jfif' }
        ],
        'application-software': [
            { name: 'Powerpoint', specs: 'Powerpoint Templates and Google slides for Technical Specification. Save Your Time and attract your audience with our fully editable PPT Templates and Slides.', price: 19.99, image: 'photos/apps/power.png' },
            { name: 'Spotify', specs: 'Explore Spotify is ad specs and requirements to ensure you have everything you need to create your ad campaigns.', price: 99.99, image: 'photos/apps/2app.png' },
            { name: 'Adobe Photoshop', specs:'Could you clarify what you mean by "Specifications to adobe to one lien"? Are you referring to creating a specification for an Adobe product.', price: 39.99, image: 'photos/apps/adobe.png' }
        ],
        'system-software': [
            { name: 'Wiindows', specs: 'Windows is a series of operating systems developed by Microsoft, designed to provide a graphical user interface, multitasking capabilities, security features, and software applications.', price: 199.99, image: 'photos/brand/4windowsos.jfif' },
            { name: 'Linux', specs: 'Linux is an open-source, Unix-like operating system kernel that serves as the foundation for various distributions, offering high performance, , and flexibility for  systems.', price: 499.99, image: 'photos/brand/linux os1.jfif' },
            { name: 'Android', specs: 'Android is an open-source mobile operating system developed by Google, based on the Linux kernal', price: 299.99, image: 'photos/brand/os3android.png' }
        ]
    };

    const productsGrid = document.querySelector('.products-grid');
    const categoryTabs = document.querySelectorAll('.category-tab');

    function displayProducts(category) {
        productsGrid.innerHTML = '';
        products[category].forEach(product => {
            const productCard = `
                <div class="product-card">
                    <img src="${product.image}" alt="${product.name}" class="product-image">
                    <div class="product-info">
                        <h3 class="product-title">${product.name}</h3>
                        <p class="product-specs">${product.specs}</p>
                        <p class="product-price">$${product.price.toFixed(2)}</p>
                    </div>
                </div>
            `;
            productsGrid.innerHTML += productCard;
        });
    }

    categoryTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const category = this.dataset.category;
            categoryTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            displayProducts(category);
        });
    });

    // Display initial category
    displayProducts('personal-computers');
});

