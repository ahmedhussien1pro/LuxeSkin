        // Extended Product Data
        const products = [
            {
                id: 1, name: 'Hydra Glow Serum', price: 48, category: 'serums', concerns: ['hydration'],
                img: 'https://www.herhynessbeauty.com/cdn/shop/files/HydraGlowSerum30ml-PDP_1.jpg?v=1740666101?w=800&q=80&auto=format&fit=crop',
                badge: 'Bestseller', rating: 4.8,
                desc: 'A lightweight, fast-absorbing serum with hyaluronic acid to boost hydration and create a plump, dewy complexion.',
                benefits: ['Intense hydration', '24-hour moisture lock', 'Plumps fine lines', 'Suitable for all skin types']
            },
            {
                id: 2, name: 'Nourish Night Cream', price: 72, category: 'moisturizers', concerns: ['anti-aging'],
                img: 'https://images.unsplash.com/photo-1585232350744-974fc9804d65?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                badge: 'New', rating: 4.6,
                desc: 'Rich night cream that supports skin renewal with peptides and botanical extracts for overnight repair.',
                benefits: ['Overnight repair', 'Reduces fine lines', 'Firms and lifts', 'Rich, luxurious texture']
            },
            {
                id: 3, name: 'Gentle Cleanse Foam', price: 28, category: 'cleansers', concerns: ['sensitive'],
                img: 'https://images.unsplash.com/photo-1685052388326-b6383ec2d524?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                badge: '', rating: 4.4,
                desc: 'Gentle foaming cleanser that removes impurities while maintaining the skin barrier with prebiotics.',
                benefits: ['Gentle cleansing', 'Maintains skin barrier', 'Suitable for sensitive skin', 'Non-stripping formula']
            },
            {
                id: 4, name: 'Revive Clay Mask', price: 34, category: 'masks', concerns: ['brightening'],
                img: 'https://reviveskincare.com/cdn/shop/products/ReVive_MaskingImages_2000x2000_Masquedeglaise.jpg?v=1710272722&width=1800?w=800&q=60&auto=format&fit=crop',
                badge: 'Limited', rating: 4.5,
                desc: 'Detoxifying clay mask with botanical extracts to refine texture and brighten the complexion.',
                benefits: ['Deep pore cleansing', 'Brightens complexion', 'Refines skin texture', 'Weekly treatment']
            },
            {
                id: 5, name: 'Vitamin C Booster', price: 55, category: 'serums', concerns: ['brightening'],
                img: 'https://www.dermstore.com/images?url=https://static.thcdn.com/productimg/original/15815087-1245201236676310.jpg&format=webp&auto=avif&width=985&height=985&fit=cover&dpr=2?w=800&q=60&auto=format&fit=crop',
                badge: 'Bestseller', rating: 4.7,
                desc: 'Stabilized vitamin C serum for radiant, even-toned skin with antioxidant protection.',
                benefits: ['Brightens skin tone', 'Antioxidant protection', 'Reduces dark spots', 'Morning use recommended']
            },
            {
                id: 6, name: 'Daily Defense SPF 50', price: 38, category: 'moisturizers', concerns: ['protection'],
                img: 'https://imageskincare.com/cdn/shop/files/DAILY_PREVENTION_ultra_defense_moisturizer_SPF_50_PDP_R03.jpg?v=1746561897&width=700?w=800&q=60&auto=format&fit=crop',
                badge: 'New', rating: 4.6,
                desc: 'Lightweight sunscreen with mineral filters and antioxidants for daily protection.',
                benefits: ['SPF 50 protection', 'Mineral filters', 'Lightweight formula', 'No white cast']
            },
            {
                id: 7, name: 'Calm Balancing Toner', price: 26, category: 'toners', concerns: ['sensitive'],
                img: 'https://thumbs.dreamstime.com/z/bottle-skin-balancing-rose-water-toner-clean-design-formulated-to-refresh-hydrate-367533610.jpg?ct=jpeg?w=800&q=60&auto=format&fit=crop',
                badge: '', rating: 4.3,
                desc: 'Alcohol-free toner with niacinamide to soothe and balance skin pH.',
                benefits: ['Balances skin pH', 'Soothes irritation', 'Prepares skin for treatment', 'Alcohol-free formula']
            },
            {
                id: 8, name: 'Overnight Lip Repair', price: 18, category: 'treatments', concerns: ['hydration'],
                img: 'https://hips.hearstapps.com/hmg-prod/images/kissulipmask-3-clinicals-67c9f4a9a7da9.jpg?crop=1.00xw:1.00xh;0,0&resize=1120:*?w=800&q=60&auto=format&fit=crop',
                badge: '', rating: 4.9,
                desc: 'Intensive lip treatment with ceramides for soft, replenished lips by morning.',
                benefits: ['Overnight repair', 'Intense hydration', 'Smooths fine lines', 'Non-sticky formula']
            },
            {
                id: 9, name: 'Glow Refresh Mist', price: 22, category: 'mists', concerns: ['hydration'],
                img: 'https://www.sephora.com/productimages/sku/s2534485-main-zoom.jpg?imwidth=1224?w=800&q=60&auto=format&fit=crop',
                badge: '', rating: 4.2,
                desc: 'Refreshing facial mist with botanical extracts and hyaluronic acid.',
                benefits: ['Instant hydration', 'Refreshes makeup', 'Travel-friendly', 'All-day comfort']
            },
            {
                id: 10, name: 'Detox Scalp Scrub', price: 30, category: 'treatments', concerns: ['clarity'],
                img: 'https://imageskincare.com/cdn/shop/files/DAILY_PREVENTION_ultra_defense_moisturizer_SPF_50_PDP_R03.jpg?v=1746561897&width=700?q=800&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                badge: 'Limited', rating: 4.1,
                desc: 'Purifying scalp scrub with sea salt to remove buildup and soothe scalp.',
                benefits: ['Deep scalp cleansing', 'Removes buildup', 'Soothes irritation', 'Weekly treatment']
            },
            {
                id: 11, name: 'Renew Eye Serum', price: 42, category: 'serums', concerns: ['anti-aging'],
                img: 'https://images.unsplash.com/photo-1575509018683-3bdd9abe3959?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                badge: 'Bestseller', rating: 4.8,
                desc: 'Targeted eye serum with caffeine and peptides to reduce puffiness and fine lines.',
                benefits: ['Reduces puffiness', 'Smooths fine lines', 'Brightens under eyes', 'Gentle formula']
            },
            {
                id: 12, name: 'Ritual Kit — Glow', price: 120, category: 'kits', concerns: ['radiance'],
                img: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&q=60&auto=format&fit=crop',
                badge: 'Exclusive', rating: 4.9,
                desc: 'Complete 7-day glow ritual kit with travel sizes of our bestselling products.',
                benefits: ['Complete routine', 'Travel-friendly sizes', '7-day transformation', 'Perfect for gifting']
            }
        ];
        

        const grid = document.getElementById('productsGrid');
        const noResults = document.getElementById('noResults');

        // Generate star rating display
        function ratingStars(rating) {
            const full = Math.floor(rating);
            const hasHalf = rating - full >= 0.5;
            let stars = '';
            
            for (let i = 0; i < full; i++) {
                stars += '★';
            }
            if (hasHalf) {
                stars += '☆';
            }
            return stars;
        }

        // Render products to grid
        function renderProducts(productList) {
            grid.innerHTML = '';
            
            if (productList.length === 0) {
                noResults.classList.remove('hidden');
                return;
            } else {
                noResults.classList.add('hidden');
            }

            productList.forEach(product => {
                const card = document.createElement('div');
                card.className = 'product-card relative rounded-3xl bg-white p-4 subtle-shadow card-hover overflow-hidden';
                
                card.innerHTML = `
                    ${product.badge ? `<div class="float-badge"><span class="px-3 py-1 rounded-full text-xs font-semibold text-white gold-gradient">${product.badge}</span></div>` : ''}
                    
                    <div class="h-56 rounded-xl overflow-hidden mb-4">
                        <img src="${product.img}" alt="${product.name}" class="w-full h-full object-cover">
                    </div>
                    
                    <div class="space-y-3">
                        <div>
                            <h4 class="font-semibold text-lg brand-font">${product.name}</h4>
                            <div class="text-sm text-gray-500 capitalize">${product.category} • ${product.concerns.join(', ')}</div>
                        </div>
                        
                        <div class="flex items-center justify-between">
                            <div class="text-xs text-yellow-600 rating-star">
                                ${ratingStars(product.rating)} <span class="text-gray-400">(${product.rating})</span>
                            </div>
                            <div class="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sage to-gold">
                                ${product.price}
                            </div>
                        </div>
                        
                        <div class="flex gap-2">
                            <button class="flex-1 px-3 py-2 text-sm rounded-lg sage-gradient text-white hover:shadow-lg transition duration-300 quick-add" data-id="${product.id}">
                                <i class="fas fa-shopping-cart mr-1"></i> Add to Cart
                            </button>
                            <button class="px-3 py-2 text-sm rounded-lg border border-sage text-sage hover:bg-sage hover:text-white transition duration-300" onclick="openQuickView(${product.id})">
                                <i class="fas fa-eye"></i>
                            </button>
                            <button class="px-3 py-2 text-sm rounded-lg border border-gray-200 text-gray-600 hover:text-red-500 hover:border-red-500 transition duration-300 favorite-btn">
                                <i class="far fa-heart"></i>
                            </button>
                        </div>
                    </div>
                `;
                
                grid.appendChild(card);
            });
        }
        // Initial render
        renderProducts(products);

        // Filter functionality
        document.querySelectorAll('.category-filter, .concern-filter').forEach(el => {
            el.addEventListener('change', applyFilters);
        });
        
        document.getElementById('priceFilterBtn').addEventListener('click', applyFilters);
        document.getElementById('searchInput').addEventListener('input', applyFilters);
        document.getElementById('sortSelect').addEventListener('change', applyFilters);

        function applyFilters() {
            const selectedCategories = Array.from(document.querySelectorAll('.category-filter:checked')).map(i => i.value);
            const selectedConcerns = Array.from(document.querySelectorAll('.concern-filter:checked')).map(i => i.value);
            const minPrice = Number(document.getElementById('priceMin').value) || 0;
            const maxPrice = Number(document.getElementById('priceMax').value) || Infinity;
            const searchQuery = document.getElementById('searchInput').value.trim().toLowerCase();
            const sortBy = document.getElementById('sortSelect').value;

            let filtered = products.filter(product => {
                // Category filter
                if (selectedCategories.length && !selectedCategories.includes(product.category)) return false;
                
                // Concerns filter
                if (selectedConcerns.length && !selectedConcerns.some(concern => product.concerns.includes(concern))) return false;
                
                // Price filter
                if (product.price < minPrice || product.price > maxPrice) return false;
                
                // Search filter
                if (searchQuery && !(product.name.toLowerCase().includes(searchQuery) || product.category.toLowerCase().includes(searchQuery))) return false;
                
                return true;
            });

            // Sorting
            if (sortBy === 'price-asc') filtered.sort((a, b) => a.price - b.price);
            if (sortBy === 'price-desc') filtered.sort((a, b) => b.price - a.price);
            if (sortBy === 'rating') filtered.sort((a, b) => b.rating - a.rating);

            renderProducts(filtered);
        }

        // Mobile navigation toggle
        document.getElementById('mobileToggle').addEventListener('click', () => {
            const nav = document.getElementById('mobileNav');
            nav.classList.toggle('hidden');
        });

        // Quick View Modal functionality
        const modal = document.getElementById('modal');
        const modalImg = document.getElementById('modalImg');
        const modalTitle = document.getElementById('modalTitle');
        const modalPrice = document.getElementById('modalPrice');
        const modalDesc = document.getElementById('modalDesc');
        const modalBadge = document.getElementById('modalBadge');
        const modalCategory = document.getElementById('modalCategory');
        const modalRating = document.getElementById('modalRating');
        const modalBenefits = document.getElementById('modalBenefits');

        function openQuickView(productId) {
            const product = products.find(p => p.id === productId);
            if (!product) return;

            modalImg.src = product.img;
            modalTitle.textContent = product.name;
            modalPrice.textContent = `${product.price}`;
            modalDesc.textContent = product.desc;
            modalCategory.textContent = `${product.category.charAt(0).toUpperCase() + product.category.slice(1)} • ${product.concerns.join(', ')}`;
            modalRating.innerHTML = `${ratingStars(product.rating)} <span class="text-gray-400">(${product.rating})</span>`;

            // Handle badge
            if (product.badge) {
                modalBadge.classList.remove('hidden');
                modalBadge.querySelector('span').textContent = product.badge;
            } else {
                modalBadge.classList.add('hidden');
            }

            // Render benefits
            modalBenefits.innerHTML = '';
            product.benefits.forEach(benefit => {
                const li = document.createElement('li');
                li.innerHTML = `<i class="fas fa-check text-sage mr-2"></i>${benefit}`;
                modalBenefits.appendChild(li);
            });

            modal.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        }

        // Close modal functionality
        document.getElementById('modalClose').addEventListener('click', closeModal);
        document.getElementById('modal').addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });

        function closeModal() {
            modal.classList.add('hidden');
            document.body.style.overflow = 'auto';
        }

        // Contact form submission
        document.getElementById('contactForm').addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Simple success message
            alert('Thank you for your message! We\'ll get back to you within 24 hours.');
            e.target.reset();
        });

        // WhatsApp button functionality
        document.getElementById('whatsBtn').addEventListener('click', () => {
            window.open('https://wa.me/201098909476?text=Hi! I\'d like to know more about your skincare products.', '_blank');
        });

        document.getElementById('modalWhats').addEventListener('click', () => {
            window.open('https://wa.me/201098909476?text=Hi! I\'m interested in learning more about this product.', '_blank');
        });

        // Add to cart functionality
        document.addEventListener('click', (e) => {
            if (e.target.closest('.quick-add')) {
                e.preventDefault();
                const button = e.target.closest('.quick-add');
                const productId = button.getAttribute('data-id');
                const product = products.find(p => p.id == productId);
                
                // Visual feedback
                button.innerHTML = '<i class="fas fa-check mr-1"></i> Added!';
                button.classList.remove('sage-gradient');
                button.classList.add('bg-green-500');
                
                // Show success message
                showToast(`${product.name} added to cart!`);
                
                setTimeout(() => {
                    button.innerHTML = '<i class="fas fa-shopping-cart mr-1"></i> Add to Cart';
                    button.classList.add('sage-gradient');
                    button.classList.remove('bg-green-500');
                }, 2000);
            }
        });

        // Modal add to cart
        document.getElementById('modalAdd').addEventListener('click', () => {
            showToast('Product added to cart!');
            closeModal();
        });

        // Favorite button functionality
        document.addEventListener('click', (e) => {
            if (e.target.closest('.favorite-btn')) {
                e.preventDefault();
                const button = e.target.closest('.favorite-btn');
                const icon = button.querySelector('i');
                
                if (icon.classList.contains('far')) {
                    icon.classList.remove('far');
                    icon.classList.add('fas');
                    button.classList.add('text-red-500', 'border-red-500');
                    showToast('Added to favorites!');
                } else {
                    icon.classList.remove('fas');
                    icon.classList.add('far');
                    button.classList.remove('text-red-500', 'border-red-500');
                    showToast('Removed from favorites');
                }
            }
        });

        // Toast notification system
        function showToast(message) {
            const toast = document.createElement('div');
            toast.className = 'fixed top-20 right-6 glass-card text-gray-800 px-6 py-3 rounded-xl shadow-lg z-50 transform translate-x-full opacity-0 transition-all duration-300';
            toast.innerHTML = `
                <div class="flex items-center gap-3">
                    <i class="fas fa-check-circle text-green-500"></i>
                    <span>${message}</span>
                </div>
            `;
            
            document.body.appendChild(toast);
            
            setTimeout(() => {
                toast.classList.remove('translate-x-full', 'opacity-0');
            }, 100);
            
            setTimeout(() => {
                toast.classList.add('translate-x-full', 'opacity-0');
                setTimeout(() => {
                    document.body.removeChild(toast);
                }, 300);
            }, 3000);
        }

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    
                    // Close mobile menu if open
                    document.getElementById('mobileNav').classList.add('hidden');
                }
            });
        });

        // Navbar background on scroll
        window.addEventListener('scroll', () => {
            const navbar = document.querySelector('header');
            if (window.scrollY > 50) {
                navbar.classList.add('shadow-lg');
            } else {
                navbar.classList.remove('shadow-lg');
            }
        });

        // Intersection Observer for scroll animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('slide-in');
                    entry.target.style.animationDelay = Math.random() * 0.3 + 's';
                }
            });
        }, observerOptions);

        // Observe elements for animation
        document.querySelectorAll('.card-hover, .glass-card').forEach(el => {
            observer.observe(el);
        });

        // Newsletter subscription
        // document.querySelector('footer form').addEventListener('submit', (e) => {
        //     e.preventDefault();
        //     const email = e.target.querySelector('input[type="email"]').value;
        //     showToast('Thank you for subscribing to our newsletter!');
        //     e.target.reset();
        // });

        // Set current year in footer
        document.getElementById('year').textContent = new Date().getFullYear();

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            const mobileNav = document.getElementById('mobileNav');
            const mobileToggle = document.getElementById('mobileToggle');
            
            if (!mobileNav.contains(e.target) && !mobileToggle.contains(e.target)) {
                mobileNav.classList.add('hidden');
            }
        });

        // Keyboard accessibility for modal
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
                closeModal();
            }
        });

        // Page loading animation
        window.addEventListener('load', () => {
            document.body.classList.add('loaded');
            
            // Stagger animation for hero elements
            const heroElements = document.querySelectorAll('.slide-in');
            heroElements.forEach((el, index) => {
                setTimeout(() => {
                    el.style.opacity = '1';
                    el.style.transform = 'translateY(0)';
                }, index * 200);
            });
        });

        // Add loading styles
        const loadingStyles = document.createElement('style');
        loadingStyles.textContent = `
            body:not(.loaded) .slide-in {
                opacity: 0;
                transform: translateY(30px);
                transition: all 0.8s ease-out;
            }
            
            .loaded .slide-in {
                transition: all 0.8s ease-out;
            }
            
            @media (prefers-reduced-motion: reduce) {
                *, *::before, *::after {
                    animation-duration: 0.01ms !important;
                    animation-iteration-count: 1 !important;
                    transition-duration: 0.01ms !important;
                }
            }
        `;
        document.head.appendChild(loadingStyles);

        // Performance optimization: Lazy load images
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src || img.src;
                        img.classList.remove('lazy');
                        observer.unobserve(img);
                    }
                });
            });

            document.querySelectorAll('img[data-src]').forEach(img => {
                imageObserver.observe(img);
            });
        }

        console.log('✨ LuxeSkin website loaded successfully!');
    