/**
 * =====================================================
 * UNITY APPLIANCES - Main JavaScript
 * Complete E-commerce Functionality with localStorage
 * =====================================================
 */

// =====================================================
// PRODUCT DATA (Mock Database)
// =====================================================
const productsData = [
    // Fridges - Single Door
    {
        id: 1,
        name: "Whirlpool Single Door 190L Glass Finish",
        category: "Fridges",
        badge: "sale",
        condition: "Company Second",
        brand: "Whirlpool",
        capacity: "190 Liters",
        rating: 5,
        image: "assets/images/prd images/IMG-20251212-WA0011.jpg",
        description: "Whirlpool single door refrigerator with elegant glass door finish. 10 year warranty on compressor."
    },
    {
        id: 2,
        name: "LG Single Door 190L Blue Floral",
        category: "Fridges",
        badge: "sale",
        condition: "Damaged Box",
        brand: "LG",
        capacity: "190 Liters",
        rating: 5,
        image: "assets/images/prd images/IMG-20251212-WA0020.jpg",
        description: "LG single door refrigerator with beautiful blue floral design. Smart Inverter Compressor with 10 year warranty."
    },
    {
        id: 3,
        name: "Whirlpool Single Door 200L Blue Floral",
        category: "Fridges",
        badge: "sale",
        condition: "Company Second",
        brand: "Whirlpool",
        capacity: "200 Liters",
        rating: 5,
        image: "assets/images/prd images/IMG-20251212-WA0050.jpg",
        description: "Whirlpool single door with vibrant blue floral design. 5 Star energy rating."
    },
    {
        id: 4,
        name: "Whirlpool Single Door 215L Blue Hibiscus",
        category: "Fridges",
        badge: "sale",
        condition: "Company Second",
        brand: "Whirlpool",
        capacity: "215 Liters",
        rating: 5,
        image: "assets/images/prd images/IMG-20251212-WA0051.jpg",
        description: "Whirlpool single door with stunning blue hibiscus floral design. 10 year warranty."
    },
    {
        id: 5,
        name: "LG Single Door 190L Red Rose",
        category: "Fridges",
        badge: "sale",
        condition: "Company Second",
        brand: "LG",
        capacity: "190 Liters",
        rating: 5,
        image: "assets/images/prd images/IMG-20251212-WA0055.jpg",
        description: "LG single door refrigerator with beautiful red rose design. Smart Inverter Compressor."
    },
    {
        id: 6,
        name: "Haier Single Door 195L Silver",
        category: "Fridges",
        badge: "sale",
        condition: "Damaged Box",
        brand: "Haier",
        capacity: "195 Liters",
        rating: 4,
        image: "assets/images/prd images/IMG-20251212-WA0016.jpg",
        description: "Haier single door refrigerator in elegant silver finish. Direct Cool technology."
    },
    {
        id: 7,
        name: "Whirlpool Single Door 215L Floral",
        category: "Fridges",
        badge: "sale",
        condition: "Company Second",
        brand: "Whirlpool",
        capacity: "215 Liters",
        rating: 5,
        image: "assets/images/prd images/IMG-20251212-WA0018.jpg",
        description: "Whirlpool single door with blue floral design. VitaMagic Pro technology for freshness."
    },
    {
        id: 8,
        name: "Samsung Single Door 192L Pink Floral",
        category: "Fridges",
        badge: "sale",
        condition: "Company Second",
        brand: "Samsung",
        capacity: "192 Liters",
        rating: 5,
        image: "assets/images/prd images/IMG-20251212-WA0052.jpg",
        description: "Samsung single door with beautiful pink floral design. 20 year warranty on Digital Inverter Compressor."
    },
    {
        id: 9,
        name: "Samsung Single Door 192L Blue Floral",
        category: "Fridges",
        badge: "sale",
        condition: "Company Second",
        brand: "Samsung",
        capacity: "192 Liters",
        rating: 5,
        image: "assets/images/prd images/IMG-20251212-WA0053.jpg",
        description: "Samsung single door with stunning blue floral pattern. Digital Inverter Technology with 20 year warranty."
    },
    {
        id: 10,
        name: "Whirlpool 215 VITAMAGIC PRO ROY 3S Alpha Steel",
        category: "Fridges",
        badge: "sale",
        condition: "Company Second",
        brand: "Whirlpool",
        capacity: "200 Liters",
        rating: 5,
        image: "assets/images/prd images/IMG-20251212-WA0054.jpg",
        description: "Whirlpool VitaMagic Pro 200L 3 Star Single Door Refrigerator with 6th Sense IntelliSense Technology, Auto-Defrost & 10 Year Compressor Warranty."
    },
    {
        id: 11,
        name: "Whirlpool Single Door 215L Gold Floral",
        category: "Fridges",
        badge: "sale",
        condition: "Company Second",
        brand: "Whirlpool",
        capacity: "215 Liters",
        rating: 5,
        image: "assets/images/prd images/IMG-20251212-WA0039.jpg",
        description: "Whirlpool single door with elegant gold floral glass door design. 10 year warranty."
    },
    {
        id: 12,
        name: "LG Single Door 190L Dark Floral",
        category: "Fridges",
        badge: "sale",
        condition: "Company Second",
        brand: "LG",
        capacity: "190 Liters",
        rating: 5,
        image: "assets/images/prd images/IMG-20251212-WA0022.jpg",
        description: "LG single door with elegant dark floral design. Smart Inverter Compressor."
    },
    // Fridges - Double Door
    {
        id: 13,
        name: "Whirlpool Double Door 265L Steel",
        category: "Fridges",
        badge: "sale",
        condition: "Company Second",
        brand: "Whirlpool",
        capacity: "265 Liters",
        rating: 5,
        image: "assets/images/prd images/IMG-20251212-WA0015.jpg",
        description: "Whirlpool double door refrigerator in steel finish. 6th Sense technology with 10 year warranty."
    },
    {
        id: 14,
        name: "Whirlpool Double Door 292L IntelliFresh",
        category: "Fridges",
        badge: "sale",
        condition: "Company Second",
        brand: "Whirlpool",
        capacity: "292 Liters",
        rating: 5,
        image: "assets/images/prd images/IMG-20251212-WA0014.jpg",
        description: "Whirlpool IntelliFresh double door with Adaptive Intelligence. 25 years reliability."
    },
    {
        id: 15,
        name: "Whirlpool Double Door 265L Steel Pro",
        category: "Fridges",
        badge: "sale",
        condition: "Company Second",
        brand: "Whirlpool",
        capacity: "265 Liters",
        rating: 5,
        image: "assets/images/prd images/IMG-20251212-WA0043.jpg",
        description: "Whirlpool double door pro series in premium steel finish. 10 year warranty."
    },
    {
        id: 16,
        name: "Whirlpool Double Door 340L IntelliFresh Pro",
        category: "Fridges",
        badge: "sale",
        condition: "Company Second",
        brand: "Whirlpool",
        capacity: "340 Liters",
        rating: 5,
        image: "assets/images/prd images/IMG-20251212-WA0044.jpg",
        description: "Whirlpool IntelliFresh Pro double door with 6th Sense ActiveFresh. Large capacity."
    },
    {
        id: 17,
        name: "Whirlpool Double Door 265L NeoFresh",
        category: "Fridges",
        badge: "sale",
        condition: "Company Second",
        brand: "Whirlpool",
        capacity: "265 Liters",
        rating: 5,
        image: "assets/images/prd images/IMG-20251212-WA0038.jpg",
        description: "Whirlpool NeoFresh double door with advanced freshness technology. Steel finish."
    },
    {
        id: 18,
        name: "Whirlpool Double Door 245L Steel",
        category: "Fridges",
        badge: "sale",
        condition: "Company Second",
        brand: "Whirlpool",
        capacity: "245 Liters",
        rating: 5,
        image: "assets/images/prd images/IMG-20251212-WA0041.jpg",
        description: "Whirlpool double door in elegant steel finish. 6th Sense technology."
    },
    {
        id: 19,
        name: "Samsung Double Door 253L Steel",
        category: "Fridges",
        badge: "sale",
        condition: "Company Second",
        brand: "Samsung",
        capacity: "253 Liters",
        rating: 5,
        image: "assets/images/prd images/IMG-20251212-WA0035.jpg",
        description: "Samsung double door with Digital Inverter. 20 year warranty on compressor."
    },
    {
        id: 20,
        name: "Samsung Double Door 236L Convertible",
        category: "Fridges",
        badge: "sale",
        condition: "Company Second",
        brand: "Samsung",
        capacity: "236 Liters",
        rating: 5,
        image: "assets/images/prd images/IMG-20251212-WA0040.jpg",
        description: "Samsung convertible freezer double door. 5-in-1 Convertible modes for flexibility."
    },
    {
        id: 21,
        name: "Samsung Double Door 253L Interior View",
        category: "Fridges",
        badge: "sale",
        condition: "Company Second",
        brand: "Samsung",
        capacity: "253 Liters",
        rating: 5,
        image: "assets/images/prd images/IMG-20251212-WA0033.jpg",
        description: "Samsung double door with 2X BigBox storage. Spacious interior with multiple shelves."
    },
    {
        id: 22,
        name: "Samsung Double Door 236L Steel",
        category: "Fridges",
        badge: "sale",
        condition: "Company Second",
        brand: "Samsung",
        capacity: "236 Liters",
        rating: 5,
        image: "assets/images/prd images/IMG-20251212-WA0046.jpg",
        description: "Samsung double door with 20 year compressor warranty. Digital Inverter technology."
    },
    {
        id: 23,
        name: "Haier Double Door 258L Bottom Freezer",
        category: "Fridges",
        badge: "sale",
        condition: "Company Second",
        brand: "Haier",
        capacity: "258 Liters",
        rating: 5,
        image: "assets/images/prd images/IMG-20251212-WA0034.jpg",
        description: "Haier bottom mount freezer refrigerator. Triple Inverter technology."
    },
    {
        id: 24,
        name: "Haier Double Door 276L Bottom Freezer Black",
        category: "Fridges",
        badge: "sale",
        condition: "Company Second",
        brand: "Haier",
        capacity: "276 Liters",
        rating: 5,
        image: "assets/images/prd images/IMG-20251212-WA0036.jpg",
        description: "Haier bottom freezer in black glass finish. MagicConvertible technology."
    },
    {
        id: 25,
        name: "Haier Double Door 256L Glass Door",
        category: "Fridges",
        badge: "sale",
        condition: "Company Second",
        brand: "Haier",
        capacity: "256 Liters",
        rating: 5,
        image: "assets/images/prd images/IMG-20251212-WA0047.jpg",
        description: "Haier double door with premium glass finish. Global No.1 brand."
    },
    {
        id: 26,
        name: "Haier Double Door 276L MagicConvertible",
        category: "Fridges",
        badge: "sale",
        condition: "Company Second",
        brand: "Haier",
        capacity: "276 Liters",
        rating: 5,
        image: "assets/images/prd images/IMG-20251212-WA0048.jpg",
        description: "Haier MagicConvertible double door. Triple Inverter with 10 year warranty."
    },
    {
        id: 27,
        name: "Haier Double Door 258L Steel",
        category: "Fridges",
        badge: "sale",
        condition: "Company Second",
        brand: "Haier",
        capacity: "258 Liters",
        rating: 5,
        image: "assets/images/prd images/IMG-20251212-WA0042.jpg",
        description: "Haier double door in brushed steel finish. Energy efficient inverter technology."
    },
    {
        id: 28,
        name: "Haier Double Door 320L MagicConvertible Grey",
        category: "Fridges",
        badge: "sale",
        condition: "Company Second",
        brand: "Haier",
        capacity: "320 Liters",
        rating: 5,
        image: "assets/images/prd images/IMG-20251212-WA0049.jpg",
        description: "Haier large capacity double door in grey. MagicConvertible with digital display."
    },
    // Washing Machines
    {
        id: 29,
        name: "IFB Front Load 8kg Senator",
        category: "Washing Machines",
        badge: "sale",
        condition: "Company Second",
        brand: "IFB",
        capacity: "8 kg",
        rating: 5,
        image: "assets/images/prd images/IMG-20251212-WA0023.jpg",
        description: "IFB Senator front load washing machine with Power Steam. 4 year comprehensive warranty."
    },
    {
        id: 30,
        name: "IFB Front Load 6.5kg Elena",
        category: "Washing Machines",
        badge: "sale",
        condition: "Company Second",
        brand: "IFB",
        capacity: "6.5 kg",
        rating: 5,
        image: "assets/images/prd images/IMG-20251212-WA0024.jpg",
        description: "IFB Elena front load with Aqua Energie and Swirl Wash. DeepClean powered by AI."
    },
    {
        id: 31,
        name: "LG Front Load 7kg Direct Drive",
        category: "Washing Machines",
        badge: "sale",
        condition: "Company Second",
        brand: "LG",
        capacity: "7 kg",
        rating: 5,
        image: "assets/images/prd images/IMG-20251212-WA0025.jpg",
        description: "LG front load with Inverter Direct Drive. 6 Motion DD technology for better wash."
    },
    {
        id: 32,
        name: "IFB Front Load 6kg Diva Plus",
        category: "Washing Machines",
        badge: "sale",
        condition: "Company Second",
        brand: "IFB",
        capacity: "6 kg",
        rating: 5,
        image: "assets/images/prd images/IMG-20251212-WA0026.jpg",
        description: "IFB Diva Plus front load with Aqua Energie. 4 year comprehensive warranty."
    },
    {
        id: 33,
        name: "Bush Semi-Automatic 8kg",
        category: "Washing Machines",
        badge: "sale",
        condition: "Company Second",
        brand: "Bush",
        capacity: "8 kg",
        rating: 4,
        image: "assets/images/prd images/IMG-20251212-WA0017.jpg",
        description: "Bush semi-automatic washing machine with Strong Wash feature. Budget friendly option."
    },
    {
        id: 34,
        name: "AKAI Semi-Automatic 7.5kg",
        category: "Washing Machines",
        badge: "sale",
        condition: "Company Second",
        brand: "AKAI",
        capacity: "7.5 kg",
        rating: 4,
        image: "assets/images/prd images/IMG-20251212-WA0019.jpg",
        description: "AKAI semi-automatic twin tub washing machine. Perfect for daily laundry needs."
    },
    {
        id: 35,
        name: "LG Top Load 8kg ThinQ",
        category: "Washing Machines",
        badge: "sale",
        condition: "Company Second",
        brand: "LG",
        capacity: "8 kg",
        rating: 5,
        image: "assets/images/prd images/IMG-20251212-WA0037.jpg",
        description: "LG fully automatic top load with ThinQ Wi-Fi. Smart Diagnosis feature."
    },
    // ACs
    {
        id: 36,
        name: "Panasonic CS/CU-SU18ZKYWT 1.5 Ton 3 Star Split AC",
        category: "ACs",
        badge: "sale",
        condition: "Company Second",
        brand: "Panasonic",
        capacity: "1.5 Ton",
        rating: 5,
        image: "assets/images/prd images/IMG-20251212-WA0056.jpg",
        description: "Panasonic 1.5 Ton 3 Star Wi-Fi Inverter Split AC with 7in1 Convertible, True AI Mode, Crystal Clean & 5 Year Comprehensive Warranty."
    },
    // Ovens (keeping placeholder images)
    {
        id: 37,
        name: "Microwave Oven 20L",
        category: "Ovens",
        badge: "sale",
        condition: "Company Second",
        brand: "Samsung",
        capacity: "20 Liters",
        rating: 4,
        image: "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=400&h=500&fit=crop",
        description: "Solo microwave oven perfect for reheating and basic cooking needs."
    },
    {
        id: 38,
        name: "Convection Microwave 28L",
        category: "Ovens",
        badge: "used",
        condition: "Damaged Box",
        brand: "LG",
        capacity: "28 Liters",
        rating: 4,
        image: "https://images.unsplash.com/photo-1585659722983-3a675dabf23d?w=400&h=500&fit=crop",
        description: "Convection microwave with grill function. Ideal for baking and grilling."
    },
    {
        id: 39,
        name: "OTG Oven 30L",
        category: "Ovens",
        badge: "sale",
        condition: "Company Second",
        brand: "Bajaj",
        capacity: "30 Liters",
        rating: 5,
        image: "https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?w=400&h=500&fit=crop",
        description: "Oven Toaster Griller with rotisserie function. Perfect for home baking enthusiasts."
    },
    // Spare Parts
    {
        id: 40,
        name: "Fridge Compressor Universal",
        category: "Spare Parts",
        badge: "new",
        condition: "New",
        brand: "Universal",
        capacity: "Universal",
        rating: 5,
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=500&fit=crop",
        description: "High quality universal compressor compatible with most refrigerator brands."
    },
    {
        id: 41,
        name: "AC Gas Refill Service",
        category: "Spare Parts",
        badge: "sale",
        condition: "Service",
        brand: "Unity Service",
        capacity: "R22/R32/R410",
        rating: 5,
        image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&h=500&fit=crop",
        description: "Professional AC gas refill service with leak testing and performance check."
    },
    {
        id: 42,
        name: "Washing Machine Motor",
        category: "Spare Parts",
        badge: "new",
        condition: "New",
        brand: "Universal",
        capacity: "Universal",
        rating: 4,
        image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=500&fit=crop",
        description: "Replacement motor for semi-automatic washing machines. Easy installation."
    }
];

// =====================================================
// CART MANAGEMENT (localStorage)
// =====================================================
const Cart = {
    // Get cart from localStorage
    getCart() {
        const cart = localStorage.getItem('unityCart');
        return cart ? JSON.parse(cart) : [];
    },

    // Save cart to localStorage
    saveCart(cart) {
        localStorage.setItem('unityCart', JSON.stringify(cart));
        this.updateCartCount();
    },

    // Add item to cart
    addItem(productId, quantity = 1) {
        const cart = this.getCart();
        const product = productsData.find(p => p.id === productId);

        if (!product) return false;

        const existingItem = cart.find(item => item.id === productId);

        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            cart.push({
                id: product.id,
                name: product.name,
                price: product.price,
                oldPrice: product.oldPrice,
                category: product.category,
                quantity: quantity
            });
        }

        this.saveCart(cart);
        this.showNotification(`${product.name} added to cart!`);
        return true;
    },

    // Remove item from cart
    removeItem(productId) {
        let cart = this.getCart();
        cart = cart.filter(item => item.id !== productId);
        this.saveCart(cart);
    },

    // Update item quantity
    updateQuantity(productId, quantity) {
        const cart = this.getCart();
        const item = cart.find(item => item.id === productId);

        if (item) {
            item.quantity = Math.max(1, quantity);
            this.saveCart(cart);
        }
    },

    // Get cart total
    getTotal() {
        const cart = this.getCart();
        return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    },

    // Get cart item count
    getItemCount() {
        const cart = this.getCart();
        return cart.reduce((count, item) => count + item.quantity, 0);
    },

    // Update cart count display
    updateCartCount() {
        const cartCounts = document.querySelectorAll('.cart-count');
        const count = this.getItemCount();
        cartCounts.forEach(el => {
            el.textContent = count;
        });
    },

    // Clear cart
    clearCart() {
        localStorage.removeItem('unityCart');
        this.updateCartCount();
    },

    // Show notification
    showNotification(message, type = 'success') {
        // Remove existing notification
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }

        // Create new notification
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            <span>${message}</span>
        `;
        document.body.appendChild(notification);

        // Show notification
        setTimeout(() => notification.classList.add('show'), 100);

        // Cart icon bounce animation
        const cartIcons = document.querySelectorAll('.cart-icon');
        cartIcons.forEach(icon => {
            icon.classList.add('bounce');
            setTimeout(() => icon.classList.remove('bounce'), 500);
        });

        // Hide notification after 3 seconds
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
};

// =====================================================
// DOM READY - Initialize everything
// =====================================================
document.addEventListener('DOMContentLoaded', function() {
    // Initialize cart count
    Cart.updateCartCount();

    // Initialize all features
    initStickyHeader();
    initMobileMenu();
    initSearchOverlay();
    initShopPage();
    initProductPage();
    initCartPage();
    initCheckoutPage();
    initAccountPage();
    initProductCards();
    initTopRatedProducts();
    initScrollAnimations();
    initSmoothScroll();
    initPageLoader();

    // New smooth animations
    initScrollIndicator();
    initLightbox();
    initRippleEffect();
    initTiltEffect();
    initLazyLoad();

    // Condition Explainer Popup
    initConditionExplainer();
});

// =====================================================
// STICKY HEADER
// =====================================================
function initStickyHeader() {
    const header = document.querySelector('.main-header');
    if (!header) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// =====================================================
// MOBILE MENU
// =====================================================
function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
    const mobileMenuClose = document.querySelector('.mobile-menu-close');

    if (!menuToggle || !mobileMenu) return;

    function openMenu() {
        mobileMenu.classList.add('active');
        mobileMenuOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
        mobileMenu.classList.remove('active');
        mobileMenuOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    menuToggle.addEventListener('click', openMenu);
    mobileMenuClose?.addEventListener('click', closeMenu);
    mobileMenuOverlay?.addEventListener('click', closeMenu);
}

// =====================================================
// SEARCH OVERLAY
// =====================================================
function initSearchOverlay() {
    const searchIcon = document.querySelector('.search-icon');
    const searchOverlay = document.querySelector('.search-overlay');
    const searchClose = document.querySelector('.search-close');

    if (!searchIcon || !searchOverlay) return;

    searchIcon.addEventListener('click', () => {
        searchOverlay.classList.add('active');
        const input = searchOverlay.querySelector('input');
        if (input) input.focus();
    });

    searchClose?.addEventListener('click', () => {
        searchOverlay.classList.remove('active');
    });

    // Close on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && searchOverlay.classList.contains('active')) {
            searchOverlay.classList.remove('active');
        }
    });
}

// =====================================================
// SHOP PAGE FUNCTIONALITY
// =====================================================
function initShopPage() {
    const shopGrid = document.getElementById('shopProductsGrid');
    if (!shopGrid) return;

    // State management
    let currentCategory = 'all';
    let currentSort = 'default';
    let minPrice = 0;
    let maxPrice = 50000;
    let searchQuery = '';

    // Get URL params for category filter
    const urlParams = new URLSearchParams(window.location.search);
    const catParam = urlParams.get('cat');
    if (catParam) {
        currentCategory = catParam;
    }

    // Initialize category filter
    initCategoryFilter();

    // Initialize price slider
    initPriceSlider();

    // Initialize search
    initSidebarSearch();

    // Initialize sort
    initShopSort();

    // Render products
    renderProducts();

    // Category filter
    function initCategoryFilter() {
        const categoryLinks = document.querySelectorAll('.sidebar-category');
        categoryLinks.forEach(link => {
            // Set active state based on current category
            if (link.dataset.category === currentCategory) {
                link.classList.add('active');
            }

            link.addEventListener('click', (e) => {
                e.preventDefault();
                categoryLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
                currentCategory = link.dataset.category;
                renderProducts();
            });
        });
    }

    // Price slider
    function initPriceSlider() {
        const sliderMin = document.getElementById('priceSliderMin');
        const sliderMax = document.getElementById('priceSliderMax');
        const priceDisplay = document.getElementById('priceRangeDisplay');
        const sliderTrack = document.getElementById('priceSliderTrack');
        const applyBtn = document.getElementById('applyPriceFilter');

        if (!sliderMin || !sliderMax) return;

        function updateSlider() {
            const min = parseInt(sliderMin.value);
            const max = parseInt(sliderMax.value);

            if (min > max) {
                sliderMin.value = max;
            }

            minPrice = parseInt(sliderMin.value);
            maxPrice = parseInt(sliderMax.value);

            // Update display
            if (priceDisplay) {
                priceDisplay.textContent = `Rs ${minPrice.toLocaleString()} - Rs ${maxPrice.toLocaleString()}`;
            }

            // Update track
            if (sliderTrack) {
                const percent1 = (minPrice / 50000) * 100;
                const percent2 = (maxPrice / 50000) * 100;
                sliderTrack.style.left = percent1 + '%';
                sliderTrack.style.width = (percent2 - percent1) + '%';
            }
        }

        sliderMin.addEventListener('input', updateSlider);
        sliderMax.addEventListener('input', updateSlider);

        applyBtn?.addEventListener('click', () => {
            renderProducts();
        });

        // Initialize
        updateSlider();
    }

    // Sidebar search
    function initSidebarSearch() {
        const searchInput = document.getElementById('sidebarSearchInput');
        const searchBtn = document.getElementById('sidebarSearchBtn');

        if (!searchInput) return;

        function doSearch() {
            searchQuery = searchInput.value.trim().toLowerCase();
            renderProducts();
        }

        searchBtn?.addEventListener('click', doSearch);
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') doSearch();
        });
    }

    // Sort functionality
    function initShopSort() {
        const sortSelect = document.getElementById('shopSort');
        if (!sortSelect) return;

        sortSelect.addEventListener('change', (e) => {
            currentSort = e.target.value;
            renderProducts();
        });
    }

    // Render products with filters
    function renderProducts() {
        let filtered = [...productsData];

        // Category filter
        if (currentCategory !== 'all') {
            filtered = filtered.filter(p => p.category === currentCategory);
        }

        // Price filter
        filtered = filtered.filter(p => p.price >= minPrice && p.price <= maxPrice);

        // Search filter
        if (searchQuery) {
            filtered = filtered.filter(p =>
                p.name.toLowerCase().includes(searchQuery) ||
                p.category.toLowerCase().includes(searchQuery)
            );
        }

        // Sort
        switch (currentSort) {
            case 'price-low':
                filtered.sort((a, b) => a.price - b.price);
                break;
            case 'price-high':
                filtered.sort((a, b) => b.price - a.price);
                break;
            case 'name':
                filtered.sort((a, b) => a.name.localeCompare(b.name));
                break;
        }

        // Update result count
        const resultCount = document.getElementById('resultCount');
        if (resultCount) {
            resultCount.textContent = `Showing all ${filtered.length} products`;
        }

        // Render products
        shopGrid.innerHTML = filtered.map(product => createProductCard(product)).join('');

        // Re-initialize product card events
        initProductCardEvents();
    }
}

// =====================================================
// CREATE PRODUCT CARD HTML
// =====================================================
function createProductCard(product) {
    const badgeClass = {
        'sale': 'badge-sale',
        'used': 'badge-used',
        'refurbished': 'badge-refurbished',
        'new': 'badge-new'
    }[product.badge] || 'badge-sale';

    const badgeText = product.badge.charAt(0).toUpperCase() + product.badge.slice(1);

    // Check if product has an image
    const imageContent = product.image
        ? `<img src="${product.image}" alt="${product.name}" loading="lazy">`
        : `<div class="product-placeholder">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <circle cx="8.5" cy="8.5" r="1.5"></circle>
                    <polyline points="21 15 16 10 5 21"></polyline>
                </svg>
            </div>`;

    const whatsappMessage = encodeURIComponent(`Hi, I'm interested in ${product.name} (${product.condition}). Is it available?`);
    const whatsappLink = `https://wa.me/919979541418?text=${whatsappMessage}`;

    return `
        <div class="product-card" data-product-id="${product.id}" data-product-url="product.html?id=${product.id}">
            <span class="product-badge ${badgeClass}">${badgeText}</span>
            <div class="product-image">
                ${imageContent}
            </div>
            <div class="product-info">
                <p class="product-category">${product.category}</p>
                <h3 class="product-title">${product.name}</h3>
                <div class="product-price">
                    <span class="price-discount">45% off on MRP</span>
                </div>
                <div class="product-buttons">
                    <a href="${whatsappLink}" class="btn-whatsapp-inquiry" target="_blank" rel="noopener" onclick="event.stopPropagation();">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                        </svg>
                        Inquire Now
                    </a>
                </div>
            </div>
        </div>
    `;
}

// =====================================================
// INITIALIZE PRODUCT CARD EVENTS
// =====================================================
function initProductCardEvents() {
    // Add to cart buttons
    document.querySelectorAll('.btn-add-cart').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation(); // Prevent card click when clicking Add to Cart
            const productId = parseInt(btn.dataset.productId);
            Cart.addItem(productId, 1);
        });
    });

    // Make entire product card clickable
    document.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('click', (e) => {
            // Don't navigate if clicking the Add to Cart button
            if (e.target.closest('.btn-add-cart')) {
                return;
            }
            const productUrl = card.dataset.productUrl;
            if (productUrl) {
                window.location.href = productUrl;
            }
        });
    });
}

// =====================================================
// INITIALIZE ALL PRODUCT CARDS ON PAGE
// =====================================================
function initProductCards() {
    // Initialize add to cart for all product cards
    initProductCardEvents();

    // Check if we're on the home page with category grids
    const fridgesGrid = document.getElementById('fridgesGrid');
    const acsGrid = document.getElementById('acsGrid');
    const washingMachinesGrid = document.getElementById('washingMachinesGrid');
    const ovensGrid = document.getElementById('ovensGrid');

    // Render products by category on home page
    if (fridgesGrid) {
        const fridges = productsData.filter(p => p.category === 'Fridges');
        fridgesGrid.innerHTML = fridges.map(product => createProductCard(product)).join('');
    }

    if (acsGrid) {
        const acs = productsData.filter(p => p.category === 'ACs');
        acsGrid.innerHTML = acs.map(product => createProductCard(product)).join('');
    }

    if (washingMachinesGrid) {
        const washingMachines = productsData.filter(p => p.category === 'Washing Machines');
        washingMachinesGrid.innerHTML = washingMachines.map(product => createProductCard(product)).join('');
    }

    if (ovensGrid) {
        const ovens = productsData.filter(p => p.category === 'Ovens');
        ovensGrid.innerHTML = ovens.map(product => createProductCard(product)).join('');
    }

    // Re-initialize events after rendering
    if (fridgesGrid || acsGrid || washingMachinesGrid || ovensGrid) {
        initProductCardEvents();
    }
}

// =====================================================
// PRODUCT DETAIL PAGE
// =====================================================
function initProductPage() {
    const productTitle = document.getElementById('productTitle');
    if (!productTitle) return;

    // Get product ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));

    if (!productId) {
        productTitle.textContent = 'Product Not Found';
        return;
    }

    const product = productsData.find(p => p.id === productId);
    if (!product) {
        productTitle.textContent = 'Product Not Found';
        return;
    }

    // Populate product details
    document.title = `${product.name} | Unity Appliances`;
    productTitle.textContent = product.name;

    const breadcrumb = document.getElementById('breadcrumbProductName');
    if (breadcrumb) breadcrumb.textContent = product.name;

    const oldPrice = document.getElementById('productOldPrice');
    if (oldPrice) oldPrice.textContent = '';

    const currentPrice = document.getElementById('productCurrentPrice');
    if (currentPrice) currentPrice.textContent = '45% off on MRP';

    const brand = document.getElementById('productBrand');
    if (brand) brand.textContent = product.brand;

    const capacity = document.getElementById('productCapacity');
    if (capacity) capacity.textContent = product.capacity;

    const condition = document.getElementById('productCondition');
    if (condition) condition.textContent = product.condition;

    const categoryLink = document.getElementById('productCategoryLink');
    if (categoryLink) {
        categoryLink.textContent = product.category;
        categoryLink.href = `shop.html?cat=${encodeURIComponent(product.category)}`;
    }

    const badge = document.getElementById('productBadge');
    if (badge) {
        badge.textContent = product.badge.charAt(0).toUpperCase() + product.badge.slice(1);
        badge.className = `product-badge badge-${product.badge}`;
    }

    // Product image
    const mainImage = document.getElementById('productMainImage');
    if (mainImage) {
        mainImage.innerHTML = `
            <img src="${product.image}" alt="${product.name}" onerror="this.onerror=null; this.parentElement.innerHTML='<div class=\\'product-image-placeholder\\'><svg width=\\'100\\' height=\\'100\\' viewBox=\\'0 0 24 24\\' fill=\\'none\\' stroke=\\'currentColor\\' stroke-width=\\'1\\'><rect x=\\'3\\' y=\\'3\\' width=\\'18\\' height=\\'18\\' rx=\\'2\\' ry=\\'2\\'></rect><circle cx=\\'8.5\\' cy=\\'8.5\\' r=\\'1.5\\'></circle><polyline points=\\'21 15 16 10 5 21\\'></polyline></svg><span>${product.category}</span></div>';">
        `;
    }

    // Quantity selector
    initQuantitySelector();

    // Add to cart button
    const addToCartBtn = document.getElementById('addToCartBtn');
    if (addToCartBtn) {
        addToCartBtn.dataset.productId = productId;
        addToCartBtn.addEventListener('click', () => {
            const qty = parseInt(document.getElementById('productQty')?.value || 1);
            Cart.addItem(productId, qty);
        });
    }

    // Initialize tabs
    initProductTabs();

    // Load related products
    loadRelatedProducts(product.category, productId);

    // Load sidebar top rated
    loadSidebarTopRated();
}

// =====================================================
// QUANTITY SELECTOR
// =====================================================
function initQuantitySelector() {
    const qtyContainers = document.querySelectorAll('.quantity-selector');

    qtyContainers.forEach(container => {
        const minusBtn = container.querySelector('.qty-minus');
        const plusBtn = container.querySelector('.qty-plus');
        const input = container.querySelector('.qty-input');

        if (!minusBtn || !plusBtn || !input) return;

        minusBtn.addEventListener('click', () => {
            const currentVal = parseInt(input.value) || 1;
            if (currentVal > 1) {
                input.value = currentVal - 1;
                input.dispatchEvent(new Event('change'));
            }
        });

        plusBtn.addEventListener('click', () => {
            const currentVal = parseInt(input.value) || 1;
            const maxVal = parseInt(input.max) || 10;
            if (currentVal < maxVal) {
                input.value = currentVal + 1;
                input.dispatchEvent(new Event('change'));
            }
        });
    });
}

// =====================================================
// PRODUCT TABS
// =====================================================
function initProductTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabId = btn.dataset.tab;

            // Update buttons
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Update panes
            tabPanes.forEach(pane => {
                pane.classList.remove('active');
                if (pane.id === tabId) {
                    pane.classList.add('active');
                }
            });
        });
    });

    // Review form submission
    const reviewForm = document.getElementById('reviewForm');
    if (reviewForm) {
        reviewForm.addEventListener('submit', (e) => {
            e.preventDefault();
            Cart.showNotification('Thank you for your review! (Demo only - not saved)');
            reviewForm.reset();
        });
    }
}

// =====================================================
// RELATED PRODUCTS
// =====================================================
function loadRelatedProducts(category, excludeId) {
    const container = document.getElementById('relatedProductsGrid');
    if (!container) return;

    const related = productsData
        .filter(p => p.category === category && p.id !== excludeId)
        .slice(0, 4);

    if (related.length === 0) {
        // Show products from other categories if no related found
        const others = productsData.filter(p => p.id !== excludeId).slice(0, 4);
        container.innerHTML = others.map(product => createProductCard(product)).join('');
    } else {
        container.innerHTML = related.map(product => createProductCard(product)).join('');
    }

    initProductCardEvents();
}

// =====================================================
// TOP RATED PRODUCTS (Sidebar)
// =====================================================
function initTopRatedProducts() {
    const containers = document.querySelectorAll('#topRatedList, #sidebarTopRated');

    containers.forEach(container => {
        if (!container) return;
        loadTopRatedIntoContainer(container);
    });
}

function loadTopRatedIntoContainer(container) {
    const topRated = productsData
        .filter(p => p.rating >= 4)
        .slice(0, 3);

    container.innerHTML = topRated.map(product => `
        <a href="product.html?id=${product.id}" class="top-rated-item">
            <div class="top-rated-thumb">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <circle cx="8.5" cy="8.5" r="1.5"></circle>
                    <polyline points="21 15 16 10 5 21"></polyline>
                </svg>
            </div>
            <div class="top-rated-info">
                <h5>${product.name}</h5>
                <span class="top-rated-price">Rs ${product.price.toLocaleString()}</span>
            </div>
        </a>
    `).join('');
}

function loadSidebarTopRated() {
    const container = document.getElementById('sidebarTopRated');
    if (container) {
        loadTopRatedIntoContainer(container);
    }
}

// =====================================================
// CART PAGE
// =====================================================
function initCartPage() {
    const cartTableBody = document.getElementById('cartTableBody');
    if (!cartTableBody) return;

    renderCartPage();

    // Update cart button
    const updateBtn = document.getElementById('updateCartBtn');
    if (updateBtn) {
        updateBtn.addEventListener('click', () => {
            Cart.showNotification('Cart updated!');
            renderCartPage();
        });
    }

    // Apply coupon button (demo)
    const couponBtn = document.getElementById('applyCouponBtn');
    if (couponBtn) {
        couponBtn.addEventListener('click', () => {
            const code = document.getElementById('couponCode')?.value;
            if (code) {
                Cart.showNotification('Coupon feature coming soon! (Demo)');
            } else {
                Cart.showNotification('Please enter a coupon code', 'error');
            }
        });
    }
}

function renderCartPage() {
    const cartTableBody = document.getElementById('cartTableBody');
    const cartEmpty = document.getElementById('cartEmpty');
    const cartContent = document.getElementById('cartContent');

    if (!cartTableBody) return;

    const cart = Cart.getCart();

    if (cart.length === 0) {
        if (cartEmpty) cartEmpty.style.display = 'block';
        if (cartContent) cartContent.style.display = 'none';
        return;
    }

    if (cartEmpty) cartEmpty.style.display = 'none';
    if (cartContent) cartContent.style.display = 'block';

    cartTableBody.innerHTML = cart.map(item => `
        <tr data-product-id="${item.id}">
            <td class="product-remove">
                <button class="cart-remove" data-product-id="${item.id}">&times;</button>
            </td>
            <td class="product-thumbnail">
                <div class="cart-product-image">
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                        <circle cx="8.5" cy="8.5" r="1.5"></circle>
                        <polyline points="21 15 16 10 5 21"></polyline>
                    </svg>
                </div>
            </td>
            <td class="product-name">
                <a href="product.html?id=${item.id}" class="cart-product-title">${item.name}</a>
            </td>
            <td class="product-price">Rs ${item.price.toLocaleString()}</td>
            <td class="product-quantity">
                <div class="cart-quantity">
                    <button class="qty-minus" data-product-id="${item.id}">-</button>
                    <input type="number" value="${item.quantity}" min="1" max="10" class="cart-qty-input" data-product-id="${item.id}">
                    <button class="qty-plus" data-product-id="${item.id}">+</button>
                </div>
            </td>
            <td class="product-subtotal">Rs ${(item.price * item.quantity).toLocaleString()}</td>
        </tr>
    `).join('');

    // Update totals
    const subtotal = Cart.getTotal();
    const subtotalEl = document.getElementById('cartSubtotal');
    const totalEl = document.getElementById('cartTotal');

    if (subtotalEl) subtotalEl.textContent = `Rs ${subtotal.toLocaleString()}`;
    if (totalEl) totalEl.textContent = `Rs ${subtotal.toLocaleString()}`;

    // Add event listeners
    initCartPageEvents();
}

function initCartPageEvents() {
    // Remove buttons
    document.querySelectorAll('.cart-remove').forEach(btn => {
        btn.addEventListener('click', () => {
            const productId = parseInt(btn.dataset.productId);
            Cart.removeItem(productId);
            renderCartPage();
        });
    });

    // Quantity buttons
    document.querySelectorAll('.cart-quantity .qty-minus').forEach(btn => {
        btn.addEventListener('click', () => {
            const productId = parseInt(btn.dataset.productId);
            const input = btn.parentElement.querySelector('input');
            const newQty = Math.max(1, parseInt(input.value) - 1);
            input.value = newQty;
            Cart.updateQuantity(productId, newQty);
            renderCartPage();
        });
    });

    document.querySelectorAll('.cart-quantity .qty-plus').forEach(btn => {
        btn.addEventListener('click', () => {
            const productId = parseInt(btn.dataset.productId);
            const input = btn.parentElement.querySelector('input');
            const newQty = Math.min(10, parseInt(input.value) + 1);
            input.value = newQty;
            Cart.updateQuantity(productId, newQty);
            renderCartPage();
        });
    });

    // Quantity input change
    document.querySelectorAll('.cart-qty-input').forEach(input => {
        input.addEventListener('change', () => {
            const productId = parseInt(input.dataset.productId);
            const newQty = Math.max(1, Math.min(10, parseInt(input.value) || 1));
            input.value = newQty;
            Cart.updateQuantity(productId, newQty);
            renderCartPage();
        });
    });
}

// =====================================================
// CHECKOUT PAGE
// =====================================================
function initCheckoutPage() {
    const checkoutForm = document.getElementById('checkoutForm');
    if (!checkoutForm) return;

    // Load order summary
    loadOrderSummary();

    // Payment method selection
    initPaymentMethods();

    // Form submission
    checkoutForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Validate form
        if (!checkoutForm.checkValidity()) {
            checkoutForm.reportValidity();
            return;
        }

        // Show success modal
        const modal = document.getElementById('orderSuccessModal');
        if (modal) {
            modal.classList.add('active');

            // Clear cart
            Cart.clearCart();
        }
    });
}

function loadOrderSummary() {
    const orderItems = document.getElementById('orderItems');
    const orderSubtotal = document.getElementById('orderSubtotal');
    const orderTotal = document.getElementById('orderTotal');

    if (!orderItems) return;

    const cart = Cart.getCart();

    if (cart.length === 0) {
        orderItems.innerHTML = '<p style="text-align: center; color: #999;">Your cart is empty</p>';
        return;
    }

    orderItems.innerHTML = cart.map(item => `
        <div class="order-item">
            <div class="order-item-name">
                <span class="order-item-qty">${item.quantity}</span>
                <span>${item.name}</span>
            </div>
            <span>Rs ${(item.price * item.quantity).toLocaleString()}</span>
        </div>
    `).join('');

    const total = Cart.getTotal();
    if (orderSubtotal) orderSubtotal.textContent = `Rs ${total.toLocaleString()}`;
    if (orderTotal) orderTotal.textContent = `Rs ${total.toLocaleString()}`;
}

function initPaymentMethods() {
    const paymentMethods = document.querySelectorAll('.payment-method');

    paymentMethods.forEach(method => {
        method.addEventListener('click', () => {
            paymentMethods.forEach(m => m.classList.remove('active'));
            method.classList.add('active');
            const radio = method.querySelector('input[type="radio"]');
            if (radio) radio.checked = true;
        });
    });
}

// =====================================================
// ACCOUNT PAGE
// =====================================================
function initAccountPage() {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            Cart.showNotification('Login feature coming soon! (Demo only)');
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const password = document.getElementById('registerPassword')?.value;
            const confirmPassword = document.getElementById('registerConfirmPassword')?.value;

            if (password !== confirmPassword) {
                Cart.showNotification('Passwords do not match!', 'error');
                return;
            }

            Cart.showNotification('Account created! (Demo only - not saved)');
            registerForm.reset();
        });
    }
}

// =====================================================
// SCROLL ANIMATIONS & DYNAMIC EFFECTS
// =====================================================
function initScrollAnimations() {
    // Elements to animate on scroll
    const animatedElements = document.querySelectorAll(
        '.fade-in-up, .fade-in-left, .fade-in-right, .scale-in, .stat-item, .feature-item, .section-header'
    );

    // Intersection Observer for scroll animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Add staggered delay for multiple items
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 100);
                animationObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animatedElements.forEach(el => {
        animationObserver.observe(el);
    });

    // Image lazy loading with fade effect
    const images = document.querySelectorAll('.product-image img');
    images.forEach(img => {
        if (img.complete) {
            img.classList.add('loaded');
        } else {
            img.addEventListener('load', () => {
                img.classList.add('loaded');
            });
        }
    });

    // Stats counter animation
    initCounterAnimation();

    // Parallax effect for hero
    initParallax();
}

// =====================================================
// COUNTER ANIMATION FOR STATS
// =====================================================
function initCounterAnimation() {
    const counters = document.querySelectorAll('.stat-number');

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = counter.textContent;

                // Extract number and suffix (like +, %)
                const match = target.match(/^([\d,]+)(.*)$/);
                if (match) {
                    const targetNum = parseInt(match[1].replace(/,/g, ''));
                    const suffix = match[2];
                    animateCounter(counter, targetNum, suffix);
                }

                counterObserver.unobserve(counter);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
}

function animateCounter(element, target, suffix) {
    const duration = 2000;
    const start = 0;
    const startTime = performance.now();

    function updateCounter(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const current = Math.floor(start + (target - start) * easeOutQuart);

        element.textContent = current.toLocaleString() + suffix;

        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        }
    }

    requestAnimationFrame(updateCounter);
}

// =====================================================
// PARALLAX EFFECT
// =====================================================
function initParallax() {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    let ticking = false;

    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                const scrolled = window.pageYOffset;
                const heroHeight = hero.offsetHeight;

                if (scrolled < heroHeight) {
                    const speed = 0.5;
                    hero.style.backgroundPositionY = `${scrolled * speed}px`;
                }
                ticking = false;
            });
            ticking = true;
        }
    });
}

// =====================================================
// PAGE LOADER
// =====================================================
function initPageLoader() {
    const loader = document.querySelector('.page-loader');
    if (!loader) return;

    window.addEventListener('load', () => {
        setTimeout(() => {
            loader.classList.add('hidden');
        }, 500);
    });
}

// =====================================================
// SMOOTH SCROLL TO SECTIONS
// =====================================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);

            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// =====================================================
// SCROLL PROGRESS INDICATOR
// =====================================================
function initScrollIndicator() {
    // Create scroll indicator element
    const indicator = document.createElement('div');
    indicator.className = 'scroll-indicator';
    document.body.appendChild(indicator);

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        indicator.style.width = scrollPercent + '%';
    });
}

// =====================================================
// IMAGE LIGHTBOX
// =====================================================
function initLightbox() {
    // Create lightbox element
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
        <span class="lightbox-close">&times;</span>
        <img src="" alt="Lightbox Image">
    `;
    document.body.appendChild(lightbox);

    const lightboxImg = lightbox.querySelector('img');
    const lightboxClose = lightbox.querySelector('.lightbox-close');

    // Open lightbox on product image click
    document.addEventListener('click', (e) => {
        const productImage = e.target.closest('.product-detail-image img, .product-main-image img');
        if (productImage) {
            lightboxImg.src = productImage.src;
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    });

    // Close lightbox
    lightboxClose.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeLightbox();
    });

    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// =====================================================
// TYPING EFFECT
// =====================================================
function initTypingEffect() {
    const typingElements = document.querySelectorAll('.typing-text');

    typingElements.forEach(el => {
        const text = el.textContent;
        el.textContent = '';
        el.style.width = 'auto';

        let i = 0;
        const typeInterval = setInterval(() => {
            if (i < text.length) {
                el.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(typeInterval);
            }
        }, 50);
    });
}

// =====================================================
// BUTTON CLICK RIPPLE EFFECT
// =====================================================
function initRippleEffect() {
    document.addEventListener('click', (e) => {
        const btn = e.target.closest('.btn, .btn-add-cart, .btn-add-to-cart');
        if (!btn) return;

        const ripple = document.createElement('span');
        ripple.className = 'ripple-effect';

        const rect = btn.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = e.clientX - rect.left - size / 2 + 'px';
        ripple.style.top = e.clientY - rect.top - size / 2 + 'px';

        btn.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
    });
}

// =====================================================
// CURSOR FOLLOWER (Desktop only)
// =====================================================
function initCursorFollower() {
    if (window.innerWidth < 1024) return;

    const cursor = document.createElement('div');
    cursor.className = 'cursor-follower';
    cursor.innerHTML = '<div class="cursor-dot"></div>';
    document.body.appendChild(cursor);

    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animateCursor() {
        cursorX += (mouseX - cursorX) * 0.1;
        cursorY += (mouseY - cursorY) * 0.1;
        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';
        requestAnimationFrame(animateCursor);
    }
    animateCursor();

    // Scale cursor on hoverable elements
    document.querySelectorAll('a, button, .product-card').forEach(el => {
        el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
    });
}

// =====================================================
// ADD SUCCESS ANIMATION TO CART
// =====================================================
function showAddToCartSuccess(button) {
    const originalText = button.innerHTML;
    button.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
            <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        Added!
    `;
    button.classList.add('success');

    setTimeout(() => {
        button.innerHTML = originalText;
        button.classList.remove('success');
    }, 1500);
}

// =====================================================
// HOVER TILT EFFECT FOR CARDS
// =====================================================
function initTiltEffect() {
    const cards = document.querySelectorAll('.product-card');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });
}

// =====================================================
// LAZY LOAD IMAGES WITH ANIMATION
// =====================================================
function initLazyLoad() {
    const images = document.querySelectorAll('img[data-src]');

    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('fade-in');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// =====================================================
// PRODUCT CONDITION EXPLAINER POPUP
// =====================================================
function initConditionExplainer() {
    const banner = document.getElementById('conditionBanner');
    const popup = document.getElementById('conditionPopupOverlay');
    const openBtn = document.getElementById('openConditionPopup');
    const closeBannerBtn = document.getElementById('closeConditionBanner');
    const closePopupBtn = document.getElementById('closeConditionPopup');

    if (!banner || !popup) return;

    // Check if user has already dismissed the banner
    const bannerDismissed = localStorage.getItem('conditionBannerDismissed');
    if (bannerDismissed) {
        banner.classList.add('hidden');
    }

    // Open popup when clicking "Learn More"
    if (openBtn) {
        openBtn.addEventListener('click', () => {
            popup.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }

    // Close banner
    if (closeBannerBtn) {
        closeBannerBtn.addEventListener('click', () => {
            banner.classList.add('hidden');
            localStorage.setItem('conditionBannerDismissed', 'true');
        });
    }

    // Close popup
    if (closePopupBtn) {
        closePopupBtn.addEventListener('click', () => {
            popup.classList.remove('active');
            document.body.style.overflow = '';
        });
    }

    // Close popup when clicking overlay
    popup.addEventListener('click', (e) => {
        if (e.target === popup) {
            popup.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // Close popup with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && popup.classList.contains('active')) {
            popup.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// =====================================================
// NUMBER COUNTER WITH ANIMATION
// =====================================================
function animateValue(element, start, end, duration) {
    const range = end - start;
    const startTime = performance.now();

    function updateValue(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Easing function
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const current = Math.floor(start + range * easeOutQuart);

        element.textContent = current.toLocaleString();

        if (progress < 1) {
            requestAnimationFrame(updateValue);
        }
    }

    requestAnimationFrame(updateValue);
}

// =====================================================
// UTILITY FUNCTIONS
// =====================================================

// Format price
function formatPrice(price) {
    return `Rs ${price.toLocaleString()}`;
}

// Debounce function
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// =====================================================
// GLOBAL SEARCH (Header)
// =====================================================
const globalSearchInput = document.getElementById('globalSearchInput');
if (globalSearchInput) {
    globalSearchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const query = globalSearchInput.value.trim();
            if (query) {
                window.location.href = `shop.html?search=${encodeURIComponent(query)}`;
            }
        }
    });
}
