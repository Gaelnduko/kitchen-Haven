
// Professional Birthday Food Selection JavaScript

// Premium food categories data with images
const birthdayFoodCategories = [
  {
    category: "Signature Cakes",
    title: "Artisan Birthday Cakes",
    description: "Professionally crafted celebration cakes with premium ingredients and elegant presentation.",
    features: ["Custom designs available", "Multiple flavor options", "Serves 8-50 guests", "Professional decoration"],
    popularity: "Most Popular Choice",
    score: "95% Guest Satisfaction",
    image: "https://i.pinimg.com/736x/88/ee/09/88ee09b09203021d43c0c2f7501a54fd.jpg",
  },
  {
    category: "Gourmet Desserts",
    title: "Cupcake Collections",
    description: "Individual portion desserts perfect for elegant celebrations and easy serving.",
    features: ["Variety of flavors", "Beautiful presentation", "Dietary options available", "Easy portion control"],
    popularity: "Elegant Choice",
    score: "92% Guest Satisfaction",
    image: "https://i.pinimg.com/736x/48/a2/03/48a2036165ebffd0da6fdd56d766ed1d.jpg",
  },
  {
    category: "Premium Mains",
    title: "Artisan Pizza Selection",
    description: "Gourmet pizzas with premium toppings, perfect for casual yet sophisticated celebrations.",
    features: ["Wood-fired preparation", "Premium ingredients", "Multiple varieties", "Crowd-pleasing option"],
    popularity: "Versatile Favorite",
    score: "88% Guest Satisfaction",
    image: "https://i.pinimg.com/736x/53/6d/e9/536de9e3632289dd5d7cb8704588015c.jpg",
  },
  {
    category: "Frozen Treats",
    title: "Gelato & Ice Cream Bar",
    description: "Premium frozen desserts with artisanal flavors and professional presentation.",
    features: ["Artisanal flavors", "Toppings station", "All-age appeal", "Perfect complement"],
    popularity: "Refreshing Choice",
    score: "90% Guest Satisfaction",
    image: "https://i.pinimg.com/1200x/29/b0/21/29b02154b3e966de3f21e8b6cfb097f9.jpg",
  },
  {
    category: "Appetizers",
    title: "Gourmet Canapés",
    description: "Sophisticated finger foods and appetizers perfect for mingling and socializing.",
    features: ["Elegant presentation", "Variety of options", "Easy to serve", "Professional quality"],
    popularity: "Sophisticated Option",
    score: "85% Guest Satisfaction",
    image: "https://i.pinimg.com/1200x/18/18/46/1818461cb56bffdad30ee05feca3c37b.jpg",
  },
  {
    category: "Sweet Treats",
    title: "Artisan Cookie Collection",
    description: "Handcrafted cookies with premium ingredients and beautiful decorative designs.",
    features: ["Custom decorations", "Premium ingredients", "Gift-worthy presentation", "Variety of flavors"],
    popularity: "Charming Addition",
    score: "87% Guest Satisfaction",
    image: "https://i.pinimg.com/736x/14/d6/ff/14d6ff8055c25c67826ac8bd44ebf9f1.jpg",
  },
  {
    category: "Beverage Service",
    title: "Signature Drink Station",
    description: "Curated beverage selection including specialty drinks and premium options.",
    features: ["Non-alcoholic specialties", "Premium ingredients", "Professional service", "All-age appropriate"],
    popularity: "Essential Service",
    score: "89% Guest Satisfaction",
    image: "https://i.pinimg.com/1200x/a4/ee/45/a4ee45ad3d5513539d29357237fdb03b.jpg",
  },
  {
    category: "Fresh Options",
    title: "Artisan Fruit Display",
    description: "Beautifully arranged fresh fruit selections with premium seasonal varieties.",
    features: ["Seasonal selections", "Beautiful presentation", "Healthy option", "Color variety"],
    popularity: "Health-Conscious Choice",
    score: "82% Guest Satisfaction",
    image: "https://i.pinimg.com/736x/f5/b7/97/f5b79712c8ac1213fec761653c966d5c.jpg",
  },
  {
    category: "Specialty Items",
    title: "Chocolate Fountain Experience",
    description: "Interactive chocolate fountain with premium Belgian chocolate and dipping options.",
    features: ["Premium Belgian chocolate", "Variety of dippers", "Interactive experience", "Memorable addition"],
    popularity: "Experience Enhancer",
    score: "93% Guest Satisfaction",
    image: "https://i.pinimg.com/1200x/27/70/8c/27708ccb3a54373154d9cd2b51b2a33e.jpg",
  },
]

// DOM Elements
const foodGrid = document.getElementById("food-grid")
const viewMenuBtn = document.getElementById("view-menu-btn")

// Initialize the page
document.addEventListener("DOMContentLoaded", () => {
  renderFoodCards()
  setupEventListeners()
  setupScrollAnimations()
  animateStats()
  setupImageLoading() // Add this line
})

// Update the renderFoodCards function to include images
function renderFoodCards() {
  foodGrid.innerHTML = ""

  birthdayFoodCategories.forEach((food, index) => {
    const foodCard = document.createElement("div")
    foodCard.className = "food-card loading"

    const featuresHTML = food.features.map((feature) => `<li>${feature}</li>`).join("")

    foodCard.innerHTML = `
      <div class="image-container">
        <img src="${food.image}" alt="${food.title}" class="food-image" loading="lazy">
      </div>
      <div class="category-badge">${food.category}</div>
      <h3>${food.title}</h3>
      <p class="description">${food.description}</p>
      <ul class="features">
        ${featuresHTML}
      </ul>
      <div class="popularity-score">${food.score}</div>
    `

    // Add click event for interaction
    foodCard.addEventListener("click", () => {
      showFoodDetails(food)
    })

    foodGrid.appendChild(foodCard)

    // Animate cards with delay
    setTimeout(() => {
      foodCard.classList.add("loaded")
    }, index * 100)
  })
}

// Show food details
function showFoodDetails(food) {
  const features = food.features.join("\n• ")
  alert(`${food.title}\n\n${food.description}\n\nFeatures:\n• ${features}\n\n${food.score}`)
}

// Setup event listeners
function setupEventListeners() {
  // View menu button smooth scroll
  viewMenuBtn.addEventListener("click", () => {
    document.getElementById("menu").scrollIntoView({
      behavior: "smooth",
    })
  })

  // Smooth scroll for navigation links
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

// Setup scroll animations
function setupScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate")
      }
    })
  }, observerOptions)

  // Observe stat items
  document.querySelectorAll(".stat-item").forEach((item) => {
    observer.observe(item)
  })
}

// Animate statistics counters
function animateStats() {
  const statItems = document.querySelectorAll(".stat-item")

  const animateCounter = (element, target) => {
    let current = 0
    const increment = target / 50
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        current = target
        clearInterval(timer)
      }
      element.textContent = Math.floor(current) + (target <= 100 ? "%" : "")
    }, 30)
  }

  // Use Intersection Observer to trigger animation when visible
  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const counter = entry.target.querySelector("[data-count]")
        const target = Number.parseInt(counter.getAttribute("data-count"))
        animateCounter(counter, target)
        statsObserver.unobserve(entry.target)
      }
    })
  })

  statItems.forEach((item) => {
    statsObserver.observe(item)
  })
}

// Navigation scroll effect
window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav")
  if (window.scrollY > 100) {
    nav.classList.add("scrolled")
  } else {
    nav.classList.remove("scrolled")
  }
})

// Add loading animation for the page
window.addEventListener("load", () => {
  document.body.classList.add("loaded")
})

// Professional console message
console.log("🎂 Birthday Celebrations - Premium Food Selection")
console.log("Professional catering services for memorable birthday celebrations")

// Add this function after the existing functions
function setupImageLoading() {
  const images = document.querySelectorAll(".food-image, .featured-image, .gallery-image")

  images.forEach((img) => {
    img.addEventListener("load", function () {
      this.classList.add("loaded")
    })

    // If image is already loaded (cached)
    if (img.complete) {
      img.classList.add("loaded")
    }
  })
}
