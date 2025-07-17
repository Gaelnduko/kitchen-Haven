
const menuCategories = [
  {
    title: "Appetizers",
    emoji: "🥟",
    description: "Delightful starters to begin your celebration",
    items: ["Mini samosas", "Chicken skewers", "Canapés", "Cheese platters"],
  },
  {
    title: "Main Courses",
    emoji: "🍛",
    description: "Hearty and flavorful main dishes",
    items: ["Pilau with goat", "Roast chicken or lamb", "Grilled tilapia", "Vegetarian stew"],
  },
  {
    title: "Sides & Salads",
    emoji: "🥗",
    description: "Perfect accompaniments to complement your meal",
    items: ["Coleslaw", "Kachumbari", "Chapati", "Ugali"],
  },
  {
    title: "Desserts",
    emoji: "🍰",
    description: "Sweet endings to your perfect day",
    items: ["Wedding cake", "Cupcakes", "Fruit salad", "Ice cream"],
  },
  {
    title: "Drinks",
    emoji: "🥂",
    description: "Refreshing beverages for all tastes",
    items: ["Fresh juices", "Sodas", "Tea & coffee", "Optional cocktails"],
    
  },
]

const testimonials = [
  {
    name: "Tracy & Landry",
    text: "The food was absolutely incredible! Our guests are still talking about how delicious everything was. The team made our wedding day perfect.",
    rating: 5,
  },
  {
    name: "Emmanuel & Shamma",
    text: "From the appetizers to the desserts, every dish was a masterpiece. The presentation was beautiful and the taste was even better!",
    rating: 5,
  },
  {
    name: "Trevor & Noah",
    text: "Professional service and amazing food. They accommodated all our dietary requirements and made sure everyone was happy. Highly recommend!",
    rating: 5,
  },
]

const galleryImages = [
  { src: "https://i.pinimg.com/736x/0e/be/08/0ebe0829721836aded04bf7d99e7438e.jpg", alt: "Wedding appetizers display" },
  { src: "https://i.pinimg.com/736x/81/76/c3/8176c34f8afd6f2b8848fb24f0b4a3a1.jpg", alt: "Main course presentation" },
  { src: "https://i.pinimg.com/736x/d6/53/5c/d6535c08779bb7ea491751ea6ef1b571.jpg", alt: "Wedding cake cutting" },
  { src: "https://i.pinimg.com/1200x/69/d0/6d/69d06dd2a68cde3a8955cd0af3872049.jpg", alt: "Elegant table setting" },
  { src: "https://i.pinimg.com/1200x/d0/c5/d8/d0c5d8a8de405d5dc5e6396185de394f.jpg", alt: "Catering service in action" },
  { src: "https://i.pinimg.com/1200x/29/c8/b6/29c8b6a5e8108362026d93cb487eca38.jpg", alt: "Dessert table setup" },
  { src: "https://i.pinimg.com/736x/b9/84/a3/b984a39b4f7f5d78243cb5b12cf45751.jpg", alt: "Dessert table setup" },
   { src: "https://i.pinimg.com/1200x/6c/1c/97/6c1c97fd54c4bd0c6a286cd830c63505.jpg", alt: "Dessert table setup" },
]


function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: "smooth" })
  }
}

function createStars(rating) {
  let starsHtml = ""
  for (let i = 0; i < rating; i++) {
    starsHtml += '<i data-lucide="star" class="w-5 h-5 text-yellow-400 fill-current"></i>'
  }
  return starsHtml
}

// Render Functions
function renderMenuCategories() {
  const menuGrid = document.getElementById("menu-grid")
  if (!menuGrid) return

  menuGrid.innerHTML = menuCategories
    .map(
      (category) => `
        <div class="menu-card bg-white rounded-lg shadow-lg border-0 hover-lift">
            <div class="text-center p-6 pb-4">
                <div class="menu-emoji text-4xl mb-3 transition-transform duration-300">${category.emoji}</div>
                <h3 class="menu-title text-xl font-bold text-gray-800 mb-2 transition-colors duration-300">${category.title}</h3>
                <p class="text-gray-600">${category.description}</p>
            </div>
            <div class="p-6 pt-0">
                <ul class="space-y-2">
                    ${category.items
                      .map(
                        (item) => `
                        <li class="flex items-center text-gray-700 hover:text-rose-600 transition-colors">
                            <span class="w-2 h-2 bg-rose-400 rounded-full mr-3 flex-shrink-0"></span>
                            ${item}
                        </li>
                    `,
                      )
                      .join("")}
                </ul>
            </div>
        </div>
    `,
    )
    .join("")
}

function renderTestimonials() {
  const testimonialsGrid = document.getElementById("testimonials-grid")
  if (!testimonialsGrid) return

  testimonialsGrid.innerHTML = testimonials
    .map(
      (testimonial) => `
        <div class="testimonial-card bg-white rounded-lg shadow-lg border-0 p-6">
            <div class="flex mb-4">
                ${createStars(testimonial.rating)}
            </div>
            <p class="text-gray-700 mb-4 italic">"${testimonial.text}"</p>
            <p class="font-semibold text-gray-800">- ${testimonial.name}</p>
        </div>
    `,
    )
    .join("")
}

function renderGallery() {
  const galleryGrid = document.getElementById("gallery-grid")
  if (!galleryGrid) return

  galleryGrid.innerHTML = galleryImages
    .map(
      (image, index) => `
        <div class="gallery-item relative">
            <img 
                src="${image.src}" 
                alt="${image.alt}" 
                class="w-full h-64 object-cover"
                data-loaded="false"
                onload="this.setAttribute('data-loaded', 'true')"
            />
            <div class="gallery-overlay"></div>
        </div>
    `,
    )
    .join("")
}

// Intersection Observer for animations
function setupScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-fade-in")
      }
    })
  }, observerOptions)

  // Observe sections for scroll animations
  const sections = document.querySelectorAll("section")
  sections.forEach((section) => {
    observer.observe(section)
  })
}

// Smooth scroll for navigation
function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })
}

// Lazy loading for images
function setupLazyLoading() {
  const images = document.querySelectorAll('img[data-loaded="false"]')

  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target
        img.src = img.src // Trigger load
        imageObserver.unobserve(img)
      }
    })
  })

  images.forEach((img) => imageObserver.observe(img))
}

// Form handling
function setupFormHandling() {
  // Add form submission handlers here if needed
  const buttons = document.querySelectorAll("button")
  buttons.forEach((button) => {
    if (
      button.textContent.includes("Schedule") ||
      button.textContent.includes("Quote") ||
      button.textContent.includes("Download")
    ) {
      button.addEventListener("click", (e) => {
        e.preventDefault()
        // Add your form handling logic here
        alert("Thank you for your interest! We will contact you soon.")
      })
    }
  })
}

// Initialize everything when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  // Render dynamic content
  renderMenuCategories()
  renderTestimonials()
  renderGallery()

  // Setup interactions
  setupScrollAnimations()
  setupSmoothScroll()
  setupLazyLoading()
  setupFormHandling()

  // Add loading class removal after a short delay
  setTimeout(() => {
    document.body.classList.add("loaded")
  }, 100)
})

// Handle window resize
window.addEventListener("resize", () => {
  // Add any resize handling logic here
})

// Handle scroll events
let lastScrollTop = 0
window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop

  // Add scroll-based animations or effects here

  lastScrollTop = scrollTop
})

// Export functions for global access
window.scrollToSection = scrollToSection

// Declare lucide variable to fix lint error
const lucide = window.lucide || {}
