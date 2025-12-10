/**
 * Unity Appliances - Main JavaScript
 * Complete E-commerce functionality with cart system
 */

(function() {
    'use strict';

    // ========================================
    // Product Data (Mock Database)
    // ========================================
    const productsData = [
        {
            id: 1,
            name: 'Samsung Double Door Refrigerator',
            category: 'Fridges',
            price: 18999,
            oldPrice: 24999,
            badge: 'sale',
            condition: 'Refurbished',
            description: 'Excellent condition Samsung 253L Double Door Refrigerator with Digital Inverter Technology. Fully serviced with 6-month warranty.'
        },
        {
            id: 2,
            name: 'LG 1.5 Ton Split AC',
            category: 'ACs',
            price: 22999,
            oldPrice: 32000,
            badge: 'sale',
            condition: 'Used',
            description: 'LG 1.5 Ton 3 Star Split AC in good working condition. Copper condenser with R32 refrigerant. Includes installation support.'
        },
        {
            id: 3,
            name: 'Whirlpool Front Load Washing Machine',
            category: 'Washing Machines',
            price: 14999,
            oldPrice: 19999,
            badge: 'refurbished',
            condition: 'Refurbished',
            description: 'Whirlpool 7kg Front Load Washing Machine with 6th Sense Technology. Professionally refurbished with new drum bearings.'
        },
        {
            id: 4,
            name: 'IFB Microwave Oven 25L',
            category: 'Ovens',
            price: 6999,
            oldPrice: 9999,
            badge: 'used',
            condition: 'Used',
            description: 'IFB 25L Convection Microwave Oven with multi-stage cooking. Perfect working condition with all accessories included.'
        },
        {
            id: 5,
            name: 'Godrej Deep Freezer 300L',
            category: 'Fridges',
            price: 12999,
            oldPrice: 18000,
            badge: 'sale',
            condition: 'Used',
            description: 'Godrej 300L Hard Top Deep Freezer ideal for shops and commercial use. Energy efficient with fast freezing technology.'
        },
        {
            id: 6,
            name: 'Voltas 1 Ton Window AC',
            category: 'ACs',
            price: 9999,
            oldPrice: 14999,
            badge: 'used',
            condition: 'Used',
            description: 'Voltas 1 Ton 3 Star Window AC. Great cooling performance, ideal for small rooms. Includes free installation.'
        },
        {
            id: 7,
            name: 'Bosch Semi-Automatic Washing Machine',
            category: 'Washing Machines',
            price: 8999,
            oldPrice: 12999,
            badge: 'refurbished',
            condition: 'Refurbished',
            description: 'Bosch 7.5kg Semi-Automatic Top Load Washing Machine. Dual wash technology with powerful motor.'
        },
        {
            id: 8,
            name: 'Samsung Convection Microwave 28L',
            category: 'Ovens',
            price: 8499,
            oldPrice: 12000,
            badge: 'sale',
            condition: 'Refurbished',
            description: 'Samsung 28L Convection Microwave with ceramic cavity. Slim fry technology for healthy cooking.'
        },
        {
            id: 9,
            name: 'Haier Single Door Refrigerator',
            category: 'Fridges',
            price: 7999,
            oldPrice: 11999,
            badge: 'used',
            condition: 'Used',
            description: 'Haier 195L Direct Cool Single Door Refrigerator. Diamond edge freezing for faster ice making.'
        },
        {
            id: 10,
            name: 'Blue Star 2 Ton Split AC',
            category: 'ACs',
            price: 28999,
            oldPrice: 42000,
            badge: 'sale',
            condition: 'Refurbished',
            description: 'Blue Star 2 Ton Inverter Split AC. Precision cooling with 5 in 1 convertible mode. Like new condition.'
        },
        {
            id: 11,
            name: 'LG Top Load Washing Machine 8kg',
            category: 'Washing Machines',
            price: 11999,
            oldPrice: 16999,
            badge: 'sale',
            condition: 'Used',
            description: 'LG 8kg Top Load Washing Machine with TurboDrum technology. Smart inverter for energy savings.'
        },
        {
            id: 12,
            name: 'Morphy Richards OTG 40L',
            category: 'Ovens',
            price: 4999,
            oldPrice: 7999,
            badge: 'used',
            condition: 'Used',
            description: 'Morphy Richards 40L OTG with convection and rotisserie. Perfect for baking, grilling and toasting.'
        },
        {
            id: 13,
            name: 'Compressor for Refrigerator',
            category: 'Spare Parts',
            price: 2999,
            oldPrice: 4500,
            badge: 'new',
            condition: 'New',
            description: 'Brand new replacement compressor compatible with most single and double door refrigerators.'
        },
        {
            id: 14,
            name: 'AC Outdoor Unit Fan Motor',
            category: 'Spare Parts',
            price: 1499,
            oldPrice: 2500,
            badge: 'new',
            condition: 'New',
            description: 'Universal outdoor unit fan motor for split ACs. Easy to install with 1 year warranty.'
        },
        {
            id: 15,
            name: 'Washing Machine Drain Pump',
            category: 'Spare Parts',
            price: 899,
            oldPrice: 1500,
            badge: 'new',
            condition: 'New',
            description: 'High quality drain pump compatible with front load washing machines. Fast drainage guaranteed.'
        },
        {
            id: 16,
            name: 'Microwave Magnetron',
            category: 'Spare Parts',
            price: 1999,
            oldPrice: 3000,
            badge: 'new',
            condition: 'New',
            description: 'Replacement magnetron for microwave ovens. Universal fit for most brands.'
        }
    ];

    // ========================================
    // Cart Management (LocalStorage)
    // ========================================
    const Cart = {
        getCart: function() {
            const cart = localStorage.getItem('unityCart');
            return cart ? JSON.parse(cart) : [];
        },

        saveCart: function(cart) {
            localStorage.setItem('unityCart', JSON.stringify(cart));
            this.updateCartCount();
        },

        addItem: function(productId, quantity = 1) {
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

        removeItem: function(productId) {
            let cart = this.getCart();
            cart = cart.filter(item => item.id !== productId);
            this.saveCart(cart);
        },

        updateQuantity: function(productId, quantity) {
            const cart = this.getCart();
            const item = cart.find(item => item.id === productId);

            if (item) {
                if (quantity <= 0) {
                    this.removeItem(productId);
                } else {
                    item.quantity = quantity;
                    this.saveCart(cart);
                }
            }
        },

        getTotal: function() {
            const cart = this.getCart();
            return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
        },

        getItemCount: function() {
            const cart = this.getCart();
            return cart.reduce((count, item) => count + item.quantity, 0);
        },

        clearCart: function() {
            localStorage.removeItem('unityCart');
            this.updateCartCount();
        },

        updateCartCount: function() {
            const count = this.getItemCount();
            const cartCountElements = document.querySelectorAll('.cart-count');
            cartCountElements.forEach(el => {
                el.textContent = count;
                el.style.display = count > 0 ? 'flex' : 'none';
            });
        },

        showNotification: function(message, type = 'success') {
            // Remove existing notification
            const existing = document.querySelector('.notification');
            if (existing) existing.remove();

            // Create notification
            const notification = document.createElement('div');
            notification.className = `notification ${type}`;
            notification.innerHTML = `
                <span>${message}</span>
            `;
            document.body.appendChild(notification);

            // Show notification
            setTimeout(() => notification.classList.add('show'), 10);

            // Hide after 3 seconds
            setTimeout(() => {
                notification.classList.remove('show');
                setTimeout(() => notification.remove(), 300);
            }, 3000);
        }
    };

    // ========================================
    // DOM Elements
    // ========================================
    const header = document.querySelector('.main-header');
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
    const mobileMenuClose = document.querySelector('.mobile-menu-close');
    const searchIcon = document.querySelector('.search-icon');
    const searchOverlay = document.querySelector('.search-overlay');
    const searchClose = document.querySelector('.search-close');

    // ========================================
    // Mobile Navigation
    // ========================================
    function initMobileNav() {
        if (!menuToggle) return;

        menuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            if (mobileMenu) mobileMenu.classList.toggle('active');
            if (mobileMenuOverlay) mobileMenuOverlay.classList.toggle('active');
            document.body.style.overflow = mobileMenu?.classList.contains('active') ? 'hidden' : '';
        });

        if (mobileMenuClose) {
            mobileMenuClose.addEventListener('click', closeMobileMenu);
        }

        if (mobileMenuOverlay) {
            mobileMenuOverlay.addEventListener('click', closeMobileMenu);
        }
    }

    function closeMobileMenu() {
        if (menuToggle) menuToggle.classList.remove('active');
        if (mobileMenu) mobileMenu.classList.remove('active');
        if (mobileMenuOverlay) mobileMenuOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    // ========================================
    // Sticky Header
    // ========================================
    function initStickyHeader() {
        if (!header) return;

        let lastScrollY = window.scrollY;
        let ticking = false;

        function updateHeader() {
            const scrollY = window.scrollY;

            if (scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }

            lastScrollY = scrollY;
            ticking = false;
        }

        window.addEventListener('scroll', function() {
            if (!ticking) {
                window.requestAnimationFrame(updateHeader);
                ticking = true;
            }
        });
    }

    // ========================================
    // Search Overlay
    // ========================================
    function initSearchOverlay() {
        if (searchIcon && searchOverlay) {
            searchIcon.addEventListener('click', function() {
                searchOverlay.classList.add('active');
                document.body.style.overflow = 'hidden';
                searchOverlay.querySelector('input')?.focus();
            });
        }

        if (searchClose && searchOverlay) {
            searchClose.addEventListener('click', function() {
                searchOverlay.classList.remove('active');
                document.body.style.overflow = '';
            });
        }

        // Close on escape
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && searchOverlay?.classList.contains('active')) {
                searchOverlay.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

    // ========================================
    // Product Grid Rendering
    // ========================================
    function renderProducts(containerId, products, limit = null) {
        const container = document.getElementById(containerId);
        if (!container) return;

        const displayProducts = limit ? products.slice(0, limit) : products;

        container.innerHTML = displayProducts.map(product => `
            <div class="product-card" data-id="${product.id}">
                <span class="product-badge badge-${product.badge}">${product.badge}</span>
                <div class="product-image">
                    <div class="product-placeholder">
                        ${getCategoryIcon(product.category)}
                    </div>
                    <div class="product-actions">
                        <button class="product-action-btn quick-view-btn" data-id="${product.id}" title="Quick View">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                <circle cx="12" cy="12" r="3"></circle>
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="product-info">
                    <p class="product-category">${product.category}</p>
                    <h3 class="product-title">
                        <a href="shop.html">${product.name}</a>
                    </h3>
                    <div class="product-price">
                        ${product.oldPrice ? `<span class="price-old">₹${product.oldPrice.toLocaleString()}</span>` : ''}
                        <span class="price-current">₹${product.price.toLocaleString()}</span>
                    </div>
                    <button class="btn-add-cart" data-id="${product.id}">Add to Cart</button>
                </div>
            </div>
        `).join('');

        // Add event listeners
        container.querySelectorAll('.btn-add-cart').forEach(btn => {
            btn.addEventListener('click', function() {
                const productId = parseInt(this.dataset.id);
                Cart.addItem(productId);
            });
        });

        container.querySelectorAll('.quick-view-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const productId = parseInt(this.dataset.id);
                openQuickView(productId);
            });
        });
    }

    function getCategoryIcon(category) {
        const icons = {
            'Fridges': `<svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <rect x="4" y="2" width="16" height="20" rx="2"></rect>
                <line x1="4" y1="10" x2="20" y2="10"></line>
                <line x1="8" y1="6" x2="8" y2="6.01"></line>
                <line x1="8" y1="14" x2="8" y2="14.01"></line>
            </svg>`,
            'ACs': `<svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <rect x="2" y="4" width="20" height="10" rx="2"></rect>
                <path d="M6 18v-4"></path>
                <path d="M10 18v-4"></path>
                <path d="M14 18v-4"></path>
                <path d="M18 18v-4"></path>
            </svg>`,
            'Washing Machines': `<svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <rect x="4" y="2" width="16" height="20" rx="2"></rect>
                <circle cx="12" cy="14" r="4"></circle>
                <circle cx="8" cy="6" r="1"></circle>
                <circle cx="12" cy="6" r="1"></circle>
            </svg>`,
            'Ovens': `<svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                <rect x="6" y="8" width="12" height="8" rx="1"></rect>
                <line x1="6" y1="4" x2="6" y2="4.01"></line>
                <line x1="10" y1="4" x2="10" y2="4.01"></line>
            </svg>`,
            'Spare Parts': `<svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <circle cx="12" cy="12" r="3"></circle>
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
            </svg>`
        };
        return icons[category] || icons['Spare Parts'];
    }

    // ========================================
    // Quick View Modal
    // ========================================
    function openQuickView(productId) {
        const product = productsData.find(p => p.id === productId);
        if (!product) return;

        // Remove existing modal
        const existingModal = document.querySelector('.modal-overlay');
        if (existingModal) existingModal.remove();

        // Create modal
        const modal = document.createElement('div');
        modal.className = 'modal-overlay';
        modal.innerHTML = `
            <div class="modal-content">
                <button class="modal-close">&times;</button>
                <div class="modal-body">
                    <div class="modal-image">
                        ${getCategoryIcon(product.category)}
                    </div>
                    <div class="modal-info">
                        <p class="product-category">${product.category}</p>
                        <h3>${product.name}</h3>
                        <div class="product-price">
                            ${product.oldPrice ? `<span class="price-old">₹${product.oldPrice.toLocaleString()}</span>` : ''}
                            <span class="price-current">₹${product.price.toLocaleString()}</span>
                        </div>
                        <p>${product.description}</p>
                        <p><strong>Condition:</strong> ${product.condition}</p>
                        <div class="modal-quantity">
                            <label>Quantity:</label>
                            <div class="cart-quantity">
                                <button class="qty-minus">-</button>
                                <input type="number" value="1" min="1" max="10" class="qty-input">
                                <button class="qty-plus">+</button>
                            </div>
                        </div>
                        <button class="btn btn-primary modal-add-cart" data-id="${product.id}">Add to Cart</button>
                    </div>
                </div>
            </div>
        `;

        document.body.appendChild(modal);
        document.body.style.overflow = 'hidden';

        // Show modal
        setTimeout(() => modal.classList.add('active'), 10);

        // Event listeners
        const closeBtn = modal.querySelector('.modal-close');
        const qtyMinus = modal.querySelector('.qty-minus');
        const qtyPlus = modal.querySelector('.qty-plus');
        const qtyInput = modal.querySelector('.qty-input');
        const addCartBtn = modal.querySelector('.modal-add-cart');

        closeBtn.addEventListener('click', () => closeModal(modal));
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal(modal);
        });

        qtyMinus.addEventListener('click', () => {
            const current = parseInt(qtyInput.value);
            if (current > 1) qtyInput.value = current - 1;
        });

        qtyPlus.addEventListener('click', () => {
            const current = parseInt(qtyInput.value);
            if (current < 10) qtyInput.value = current + 1;
        });

        addCartBtn.addEventListener('click', () => {
            const quantity = parseInt(qtyInput.value);
            Cart.addItem(productId, quantity);
            closeModal(modal);
        });
    }

    function closeModal(modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
        setTimeout(() => modal.remove(), 300);
    }

    // ========================================
    // Cart Page Rendering
    // ========================================
    function renderCartPage() {
        const cartTableBody = document.getElementById('cartTableBody');
        const cartEmptyMessage = document.getElementById('cartEmpty');
        const cartContent = document.getElementById('cartContent');
        const cartSubtotal = document.getElementById('cartSubtotal');
        const cartTotal = document.getElementById('cartTotal');

        if (!cartTableBody) return;

        const cart = Cart.getCart();

        if (cart.length === 0) {
            if (cartEmptyMessage) cartEmptyMessage.style.display = 'block';
            if (cartContent) cartContent.style.display = 'none';
            return;
        }

        if (cartEmptyMessage) cartEmptyMessage.style.display = 'none';
        if (cartContent) cartContent.style.display = 'block';

        cartTableBody.innerHTML = cart.map(item => `
            <tr data-id="${item.id}">
                <td>
                    <div class="cart-product">
                        <div class="cart-product-image">
                            ${getCategoryIcon(item.category)}
                        </div>
                        <span class="cart-product-title">${item.name}</span>
                    </div>
                </td>
                <td>₹${item.price.toLocaleString()}</td>
                <td>
                    <div class="cart-quantity">
                        <button class="qty-minus" data-id="${item.id}">-</button>
                        <input type="number" value="${item.quantity}" min="1" max="10" data-id="${item.id}" class="qty-input">
                        <button class="qty-plus" data-id="${item.id}">+</button>
                    </div>
                </td>
                <td>₹${(item.price * item.quantity).toLocaleString()}</td>
                <td>
                    <button class="cart-remove" data-id="${item.id}">&times;</button>
                </td>
            </tr>
        `).join('');

        // Update totals
        const total = Cart.getTotal();
        if (cartSubtotal) cartSubtotal.textContent = `₹${total.toLocaleString()}`;
        if (cartTotal) cartTotal.textContent = `₹${total.toLocaleString()}`;

        // Add event listeners
        cartTableBody.querySelectorAll('.qty-minus').forEach(btn => {
            btn.addEventListener('click', function() {
                const id = parseInt(this.dataset.id);
                const item = cart.find(i => i.id === id);
                if (item && item.quantity > 1) {
                    Cart.updateQuantity(id, item.quantity - 1);
                    renderCartPage();
                }
            });
        });

        cartTableBody.querySelectorAll('.qty-plus').forEach(btn => {
            btn.addEventListener('click', function() {
                const id = parseInt(this.dataset.id);
                const item = cart.find(i => i.id === id);
                if (item && item.quantity < 10) {
                    Cart.updateQuantity(id, item.quantity + 1);
                    renderCartPage();
                }
            });
        });

        cartTableBody.querySelectorAll('.qty-input').forEach(input => {
            input.addEventListener('change', function() {
                const id = parseInt(this.dataset.id);
                const qty = Math.max(1, Math.min(10, parseInt(this.value) || 1));
                Cart.updateQuantity(id, qty);
                renderCartPage();
            });
        });

        cartTableBody.querySelectorAll('.cart-remove').forEach(btn => {
            btn.addEventListener('click', function() {
                const id = parseInt(this.dataset.id);
                Cart.removeItem(id);
                renderCartPage();
            });
        });
    }

    // ========================================
    // Checkout Page Rendering
    // ========================================
    function renderCheckoutPage() {
        const orderItems = document.getElementById('orderItems');
        const orderSubtotal = document.getElementById('orderSubtotal');
        const orderTotal = document.getElementById('orderTotal');

        if (!orderItems) return;

        const cart = Cart.getCart();

        if (cart.length === 0) {
            window.location.href = 'cart.html';
            return;
        }

        orderItems.innerHTML = cart.map(item => `
            <div class="order-item">
                <div class="order-item-name">
                    <span class="order-item-qty">${item.quantity}</span>
                    <span>${item.name}</span>
                </div>
                <span>₹${(item.price * item.quantity).toLocaleString()}</span>
            </div>
        `).join('');

        const total = Cart.getTotal();
        if (orderSubtotal) orderSubtotal.textContent = `₹${total.toLocaleString()}`;
        if (orderTotal) orderTotal.textContent = `₹${total.toLocaleString()}`;

        // Payment method selection
        const paymentMethods = document.querySelectorAll('.payment-method');
        paymentMethods.forEach(method => {
            method.addEventListener('click', function() {
                paymentMethods.forEach(m => m.classList.remove('active'));
                this.classList.add('active');
                this.querySelector('input[type="radio"]').checked = true;
            });
        });

        // Checkout form submission
        const checkoutForm = document.getElementById('checkoutForm');
        if (checkoutForm) {
            checkoutForm.addEventListener('submit', function(e) {
                e.preventDefault();

                // Simulate order placement
                Cart.showNotification('Order placed successfully! We will contact you shortly.', 'success');
                Cart.clearCart();

                setTimeout(() => {
                    window.location.href = 'index.html';
                }, 2000);
            });
        }
    }

    // ========================================
    // Shop Page Filtering
    // ========================================
    function initShopFilters() {
        const categoryFilters = document.querySelectorAll('.category-filter');
        const sortSelect = document.getElementById('shopSort');

        if (!categoryFilters.length && !sortSelect) return;

        let filteredProducts = [...productsData];
        let activeCategory = 'all';

        categoryFilters.forEach(filter => {
            filter.addEventListener('click', function(e) {
                e.preventDefault();
                activeCategory = this.dataset.category;

                categoryFilters.forEach(f => f.classList.remove('active'));
                this.classList.add('active');

                applyFilters();
            });
        });

        if (sortSelect) {
            sortSelect.addEventListener('change', applyFilters);
        }

        function applyFilters() {
            let result = [...productsData];

            // Category filter
            if (activeCategory !== 'all') {
                result = result.filter(p => p.category === activeCategory);
            }

            // Sort
            if (sortSelect) {
                const sortValue = sortSelect.value;
                switch (sortValue) {
                    case 'price-low':
                        result.sort((a, b) => a.price - b.price);
                        break;
                    case 'price-high':
                        result.sort((a, b) => b.price - a.price);
                        break;
                    case 'name':
                        result.sort((a, b) => a.name.localeCompare(b.name));
                        break;
                }
            }

            renderProducts('shopProductsGrid', result);

            // Update result count
            const resultCount = document.getElementById('resultCount');
            if (resultCount) {
                resultCount.textContent = `Showing ${result.length} products`;
            }
        }
    }

    // ========================================
    // Contact Form
    // ========================================
    function initContactForm() {
        const contactForm = document.getElementById('contactForm');
        if (!contactForm) return;

        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form data
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);

            // Simple validation
            if (!data.name || !data.phone || !data.message) {
                Cart.showNotification('Please fill in all required fields.', 'error');
                return;
            }

            // Simulate form submission
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;

            setTimeout(() => {
                Cart.showNotification('Message sent successfully! We will contact you soon.', 'success');
                contactForm.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 1500);
        });
    }

    // ========================================
    // Scroll Animations
    // ========================================
    function initScrollAnimations() {
        const revealElements = document.querySelectorAll('.reveal');
        if (!revealElements.length) return;

        if ('IntersectionObserver' in window) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        observer.unobserve(entry.target);
                    }
                });
            }, {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            });

            revealElements.forEach(el => observer.observe(el));
        } else {
            revealElements.forEach(el => el.classList.add('active'));
        }
    }

    // ========================================
    // Active Navigation
    // ========================================
    function setActiveNavLink() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const navLinks = document.querySelectorAll('.nav-menu a, .mobile-menu-nav a');

        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === currentPage || (currentPage === '' && href === 'index.html')) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    // ========================================
    // Product Detail Page - Tab Switching
    // ========================================
    function initProductTabs() {
        const tabBtns = document.querySelectorAll('.tab-btn');
        const tabPanes = document.querySelectorAll('.tab-pane');

        if (!tabBtns.length) return;

        tabBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                const targetTab = this.dataset.tab;

                // Remove active from all buttons and panes
                tabBtns.forEach(b => b.classList.remove('active'));
                tabPanes.forEach(p => p.classList.remove('active'));

                // Add active to clicked button and corresponding pane
                this.classList.add('active');
                const targetPane = document.getElementById(targetTab);
                if (targetPane) {
                    targetPane.classList.add('active');
                }
            });
        });
    }

    // ========================================
    // Product Detail Page - Quantity Selector
    // ========================================
    function initProductQuantity() {
        const qtyMinus = document.querySelector('.product-add-to-cart .qty-minus');
        const qtyPlus = document.querySelector('.product-add-to-cart .qty-plus');
        const qtyInput = document.getElementById('productQty');

        if (!qtyMinus || !qtyPlus || !qtyInput) return;

        qtyMinus.addEventListener('click', function() {
            const current = parseInt(qtyInput.value) || 1;
            if (current > 1) {
                qtyInput.value = current - 1;
            }
        });

        qtyPlus.addEventListener('click', function() {
            const current = parseInt(qtyInput.value) || 1;
            if (current < 10) {
                qtyInput.value = current + 1;
            }
        });

        qtyInput.addEventListener('change', function() {
            let value = parseInt(this.value) || 1;
            if (value < 1) value = 1;
            if (value > 10) value = 10;
            this.value = value;
        });
    }

    // ========================================
    // Product Detail Page - Add to Cart
    // ========================================
    function initProductAddToCart() {
        const addToCartBtn = document.getElementById('addToCartBtn');
        const qtyInput = document.getElementById('productQty');

        if (!addToCartBtn) return;

        addToCartBtn.addEventListener('click', function() {
            const productId = parseInt(this.dataset.productId);
            const quantity = parseInt(qtyInput?.value) || 1;

            // Check if product exists in productsData
            const product = productsData.find(p => p.id === productId);

            if (product) {
                // Use existing product from data
                Cart.addItem(productId, quantity);
            } else {
                // For custom product pages, create item from page data
                const productName = document.querySelector('.product-detail-title')?.textContent || 'Product';
                const priceText = document.querySelector('.product-detail-price .price-current')?.textContent || '0';
                const price = parseInt(priceText.replace(/[^0-9]/g, '')) || 0;
                const category = document.querySelector('.product-meta a')?.textContent || 'Appliances';

                // Add custom product to cart
                const cart = Cart.getCart();
                const customId = 'custom-' + Date.now();

                cart.push({
                    id: customId,
                    name: productName,
                    price: price,
                    category: category,
                    quantity: quantity
                });

                Cart.saveCart(cart);
                Cart.showNotification(`${productName} added to cart!`);
            }
        });
    }

    // ========================================
    // Product Detail Page - Related Products
    // ========================================
    function initRelatedProducts() {
        const relatedGrid = document.getElementById('relatedProductsGrid');
        if (!relatedGrid) return;

        // Add click handlers for related product add to cart buttons
        relatedGrid.querySelectorAll('.btn-add-cart').forEach(btn => {
            btn.addEventListener('click', function() {
                const productId = parseInt(this.dataset.id);
                if (productId) {
                    Cart.addItem(productId);
                }
            });
        });
    }

    // ========================================
    // Product Detail Page - Review Form
    // ========================================
    function initReviewForm() {
        const reviewForm = document.getElementById('reviewForm');
        if (!reviewForm) return;

        reviewForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const name = document.getElementById('reviewName')?.value;
            const rating = document.getElementById('reviewRating')?.value;
            const comment = document.getElementById('reviewComment')?.value;

            if (!name || !rating || !comment) {
                Cart.showNotification('Please fill in all fields.', 'error');
                return;
            }

            // Simulate review submission
            const submitBtn = reviewForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Submitting...';
            submitBtn.disabled = true;

            setTimeout(() => {
                Cart.showNotification('Thank you for your review! It will be published after moderation.', 'success');
                reviewForm.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 1500);
        });
    }

    // ========================================
    // Initialize
    // ========================================
    function init() {
        // Core functionality
        initMobileNav();
        initStickyHeader();
        initSearchOverlay();
        initScrollAnimations();
        setActiveNavLink();
        Cart.updateCartCount();

        // Page-specific
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';

        if (currentPage === 'index.html' || currentPage === '') {
            renderProducts('newArrivalsGrid', productsData, 8);
            renderProducts('featuredProductsGrid', productsData.slice(4), 8);
        }

        if (currentPage === 'shop.html') {
            renderProducts('shopProductsGrid', productsData);
            initShopFilters();
        }

        if (currentPage === 'cart.html') {
            renderCartPage();
        }

        if (currentPage === 'checkout.html') {
            renderCheckoutPage();
        }

        if (currentPage === 'contact.html') {
            initContactForm();
        }

        // Product Detail Page
        if (currentPage === 'product.html' || currentPage.startsWith('product-')) {
            initProductTabs();
            initProductQuantity();
            initProductAddToCart();
            initRelatedProducts();
            initReviewForm();
        }

        console.log('Unity Appliances - E-commerce Website Initialized');
    }

    // Run on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Expose Cart globally
    window.UnityCart = Cart;
    window.productsData = productsData;

})();
