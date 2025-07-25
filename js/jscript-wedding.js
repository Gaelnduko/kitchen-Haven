// Wedding Food Landing Page JavaScript

class WeddingFoodApp {
  constructor() {
    this.recipes = {
      appetizers: [
        {
          name: "Smoked Salmon Canapés",
          image: "/placeholder.svg?height=300&width=400",
          servings: "24 pieces",
          prepTime: "30 minutes",
          ingredients: [
            "24 small blini or crackers",
            "200g smoked salmon, sliced",
            "150g cream cheese, softened",
            "2 tbsp fresh dill, chopped",
            "1 lemon, zested and juiced",
            "24 capers",
            "Fresh dill sprigs for garnish",
          ],
          instructions: [
            "Mix cream cheese with lemon zest, lemon juice, and chopped dill until smooth.",
            "Spread a small amount of cream cheese mixture on each blini or cracker.",
            "Top with a piece of smoked salmon, folding it elegantly.",
            "Garnish with a caper and a small sprig of fresh dill.",
            "Arrange on a serving platter and serve immediately.",
            "Can be prepared 2 hours ahead and refrigerated.",
          ],
        },
        {
          name: "Truffle Mushroom Tartlets",
          image: "/placeholder.svg?height=300&width=400",
          servings: "18 pieces",
          prepTime: "45 minutes",
          ingredients: [
            "18 mini pastry shells",
            "300g mixed mushrooms, finely chopped",
            "2 shallots, minced",
            "3 cloves garlic, minced",
            "100ml heavy cream",
            "2 tbsp truffle oil",
            "50g Parmesan cheese, grated",
            "Fresh thyme leaves",
          ],
          instructions: [
            "Preheat oven to 375°F (190°C).",
            "Sauté shallots and garlic until fragrant.",
            "Add mushrooms and cook until moisture evaporates.",
            "Stir in cream and truffle oil, season with salt and pepper.",
            "Fill pastry shells with mushroom mixture.",
            "Top with Parmesan and bake for 12-15 minutes until golden.",
            "Garnish with fresh thyme before serving.",
          ],
        },
      ],
      main: [
        {
          name: "Herb-Crusted Beef Tenderloin",
          image: "/placeholder.svg?height=300&width=400",
          servings: "8-10 people",
          prepTime: "2 hours",
          ingredients: [
            "3 lb beef tenderloin, trimmed",
            "3 tbsp Dijon mustard",
            "2 cups fresh breadcrumbs",
            "1/4 cup fresh herbs (rosemary, thyme, parsley)",
            "4 cloves garlic, minced",
            "3 tbsp olive oil",
            "Salt and black pepper to taste",
            "2 tbsp butter",
          ],
          instructions: [
            "Let beef come to room temperature for 1 hour.",
            "Preheat oven to 425°F (220°C).",
            "Season beef generously with salt and pepper.",
            "Sear beef in a hot pan with butter until browned on all sides.",
            "Brush with Dijon mustard while still warm.",
            "Mix breadcrumbs, herbs, garlic, and olive oil.",
            "Press herb mixture onto the beef.",
            "Roast for 25-30 minutes for medium-rare (135°F internal temp).",
            "Rest for 10 minutes before slicing.",
          ],
        },
        {
          name: "Lemon Herb Roasted Chicken",
          image: "/placeholder.svg?height=300&width=400",
          servings: "6-8 people",
          prepTime: "1.5 hours",
          ingredients: [
            "2 whole chickens (3-4 lbs each)",
            "2 lemons, sliced",
            "1/4 cup olive oil",
            "4 sprigs fresh rosemary",
            "6 sprigs fresh thyme",
            "6 cloves garlic, smashed",
            "Salt and pepper to taste",
            "1 cup white wine",
          ],
          instructions: [
            "Preheat oven to 400°F (200°C).",
            "Pat chickens dry and season inside and out with salt and pepper.",
            "Stuff cavity with lemon slices, herbs, and garlic.",
            "Rub skin with olive oil and season again.",
            "Place in roasting pan with wine in the bottom.",
            "Roast for 60-75 minutes until internal temp reaches 165°F.",
            "Baste every 20 minutes with pan juices.",
            "Rest for 15 minutes before carving.",
          ],
        },
      ],
      desserts: [
        {
          name: "Classic Wedding Cake",
          image: "/placeholder.svg?height=300&width=400",
          servings: "50 people",
          prepTime: "4 hours",
          ingredients: [
            "6 cups all-purpose flour",
            "6 cups granulated sugar",
            "12 large eggs",
            "1.5 cups unsalted butter, softened",
            "3 cups buttermilk",
            "2 tbsp vanilla extract",
            "3 tsp baking powder",
            "1 tsp salt",
            "Cream cheese frosting",
            "Fresh flowers for decoration",
          ],
          instructions: [
            'Preheat oven to 350°F (175°C). Grease three cake pans (6", 9", 12").',
            "Cream butter and sugar until light and fluffy.",
            "Add eggs one at a time, then vanilla.",
            "Alternate adding dry ingredients and buttermilk.",
            "Divide batter between pans according to size.",
            "Bake 25-45 minutes depending on pan size.",
            "Cool completely before frosting.",
            "Stack layers with frosting between each.",
            "Decorate with piped frosting and fresh flowers.",
          ],
        },
        {
          name: "Chocolate Lava Cakes",
          image: "/placeholder.svg?height=300&width=400",
          servings: "8 individual cakes",
          prepTime: "45 minutes",
          ingredients: [
            "200g dark chocolate, chopped",
            "200g unsalted butter",
            "4 large eggs",
            "4 large egg yolks",
            "100g granulated sugar",
            "60g all-purpose flour",
            "Pinch of salt",
            "Butter and cocoa for ramekins",
            "Vanilla ice cream for serving",
          ],
          instructions: [
            "Preheat oven to 425°F (220°C).",
            "Butter 8 ramekins and dust with cocoa powder.",
            "Melt chocolate and butter in double boiler.",
            "Whisk eggs, egg yolks, and sugar until thick.",
            "Fold in chocolate mixture, then flour and salt.",
            "Divide between ramekins.",
            "Bake 12-14 minutes until edges are firm but centers jiggle.",
            "Let stand 1 minute, then invert onto plates.",
            "Serve immediately with vanilla ice cream.",
          ],
        },
      ],
    }

    this.uploadedImages = []
    this.init()
  }

  init() {
    this.setupEventListeners()
    this.loadDefaultGallery()
    this.setupIntersectionObserver()
  }

  setupEventListeners() {
    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById("mobile-menu-btn")
    if (mobileMenuBtn) {
      mobileMenuBtn.addEventListener("click", this.toggleMobileMenu.bind(this))
    }

    // Upload modal
    const uploadBtn = document.getElementById("upload-btn")
    const uploadModal = document.getElementById("upload-modal")
    const closeModal = document.getElementById("close-modal")
    const submitUpload = document.getElementById("submit-upload")

    if (uploadBtn) uploadBtn.addEventListener("click", () => this.showModal())
    if (closeModal) closeModal.addEventListener("click", () => this.hideModal())
    if (uploadModal) {
      uploadModal.addEventListener("click", (e) => {
        if (e.target === uploadModal) this.hideModal()
      })
    }
    if (submitUpload) submitUpload.addEventListener("click", () => this.handleUpload())

    // Recipe buttons
    const recipeButtons = document.querySelectorAll(".recipe-btn")
    recipeButtons.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const category = e.target.getAttribute("data-recipe")
        this.showRecipes(category)
      })
    })

    // Smooth scrolling for navigation
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

    // File input change
    const fileInput = document.getElementById("food-image")
    if (fileInput) {
      fileInput.addEventListener("change", this.handleFileSelect.bind(this))
    }
  }

  toggleMobileMenu() {
    // Mobile menu implementation
    console.log("Mobile menu toggled")
  }

  showModal() {
    const modal = document.getElementById("upload-modal")
    if (modal) {
      modal.classList.remove("hidden")
      document.body.style.overflow = "hidden"
    }
  }

  hideModal() {
    const modal = document.getElementById("upload-modal")
    if (modal) {
      modal.classList.add("hidden")
      document.body.style.overflow = "auto"
      this.resetForm()
    }
  }

  resetForm() {
    const foodName = document.getElementById("food-name")
    const foodImage = document.getElementById("food-image")
    if (foodName) foodName.value = ""
    if (foodImage) foodImage.value = ""
  }

  handleFileSelect(event) {
    const file = event.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        // Preview the image (you can add preview functionality here)
        console.log("File selected:", file.name)
      }
      reader.readAsDataURL(file)
    }
  }

  handleUpload() {
    const foodName = document.getElementById("food-name")
    const foodImage = document.getElementById("food-image")

    if (!foodName || !foodImage || !foodName.value.trim() || !foodImage.files[0]) {
      alert("Please fill in all fields and select an image.")
      return
    }

    const file = foodImage.files[0]
    const reader = new FileReader()

    reader.onload = (e) => {
      const imageData = {
        name: foodName.value.trim(),
        src: e.target.result,
        uploadDate: new Date().toLocaleDateString(),
      }

      this.uploadedImages.push(imageData)
      this.addToGallery(imageData)
      this.hideModal()

      
      this.showNotification("Image uploaded successfully!", "success")
    }

    reader.readAsDataURL(file)
  }

  addToGallery(imageData) {
    const gallery = document.getElementById("gallery-grid")
    if (!gallery) return

    const galleryItem = document.createElement("div")
    galleryItem.className = "gallery-item bg-white rounded-2xl shadow-lg overflow-hidden animate-fade-in-up"

    galleryItem.innerHTML = `
            <div class="relative h-64">
                <img src="${imageData.src}" alt="${imageData.name}" class="w-full h-full object-cover">
                <div class="gallery-overlay">
                    <div class="text-white">
                        <h4 class="font-semibold text-lg">${imageData.name}</h4>
                        <p class="text-sm opacity-75">Uploaded ${imageData.uploadDate}</p>
                    </div>
                </div>
            </div>
        `

    gallery.insertBefore(galleryItem, gallery.firstChild)
  }

  loadDefaultGallery() {
    const gallery = document.getElementById("gallery-grid")
    if (!gallery) return

    const defaultImages = [
      { name: "Wedding Cake", src: "/placeholder.svg?height=300&width=400", date: "Featured" },
      { name: "Beef Tenderloin", src: "/placeholder.svg?height=300&width=400", date: "Featured" },
      { name: "Salmon Canapés", src: "/placeholder.svg?height=300&width=400", date: "Featured" },
      { name: "Chocolate Dessert", src: "/placeholder.svg?height=300&width=400", date: "Featured" },
      { name: "Appetizer Platter", src: "/placeholder.svg?height=300&width=400", date: "Featured" },
      { name: "Roasted Chicken", src: "/placeholder.svg?height=300&width=400", date: "Featured" },
    ]

    defaultImages.forEach((image) => {
      const galleryItem = document.createElement("div")
      galleryItem.className = "gallery-item bg-white rounded-2xl shadow-lg overflow-hidden"

      galleryItem.innerHTML = `
                <div class="relative h-64">
                    <img src="${image.src}" alt="${image.name}" class="w-full h-full object-cover">
                    <div class="gallery-overlay">
                        <div class="text-white">
                            <h4 class="font-semibold text-lg">${image.name}</h4>
                            <p class="text-sm opacity-75">${image.date}</p>
                        </div>
                    </div>
                </div>
            `

      gallery.appendChild(galleryItem)
    })
  }

  showRecipes(category) {
    const container = document.getElementById("recipe-container")
    if (!container || !this.recipes[category]) return

    container.innerHTML = ""

    this.recipes[category].forEach((recipe, index) => {
      const recipeCard = document.createElement("div")
      recipeCard.className = "recipe-card rounded-2xl p-8 shadow-lg animate-fade-in-up"
      recipeCard.style.animationDelay = `${index * 0.1}s`

      recipeCard.innerHTML = `
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                        <img src="${recipe.image}" alt="${recipe.name}" class="w-full h-64 object-cover rounded-xl">
                    </div>
                    <div>
                        <h3 class="text-3xl font-playfair font-bold text-gray-800 mb-4">${recipe.name}</h3>
                        <div class="flex flex-wrap gap-4 mb-6 text-sm text-gray-600">
                            <span class="bg-rose-100 text-rose-700 px-3 py-1 rounded-full">👥 ${recipe.servings}</span>
                            <span class="bg-amber-100 text-amber-700 px-3 py-1 rounded-full">⏱️ ${recipe.prepTime}</span>
                        </div>
                        
                        <div class="mb-6">
                            <h4 class="text-xl font-semibold text-gray-800 mb-3">Ingredients</h4>
                            <div class="ingredient-list p-4 rounded-lg">
                                <ul class="space-y-2">
                                    ${recipe.ingredients
                                      .map(
                                        (ingredient) => `
                                        <li class="flex items-start">
                                            <span class="text-amber-500 mr-2">•</span>
                                            <span class="text-gray-700">${ingredient}</span>
                                        </li>
                                    `,
                                      )
                                      .join("")}
                                </ul>
                            </div>
                        </div>
                        
                        <div>
                            <h4 class="text-xl font-semibold text-gray-800 mb-3">Instructions</h4>
                            <div class="instruction-list p-4 rounded-lg">
                                <ol class="space-y-3">
                                    ${recipe.instructions
                                      .map(
                                        (instruction, i) => `
                                        <li class="flex items-start">
                                            <span class="bg-rose-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-3 mt-0.5 flex-shrink-0">${i + 1}</span>
                                            <span class="text-gray-700">${instruction}</span>
                                        </li>
                                    `,
                                      )
                                      .join("")}
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            `

      container.appendChild(recipeCard)
    })

    
    document.getElementById("recipes").scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }

  setupIntersectionObserver() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in-up")
        }
      })
    }, observerOptions)

    // Observe menu cards
    document.querySelectorAll(".menu-card").forEach((card) => {
      observer.observe(card)
    })
  }

  showNotification(message, type = "info") {
    const notification = document.createElement("div")
    notification.className = `fixed top-4 right-4 z-50 px-6 py-4 rounded-lg shadow-lg text-white transform translate-x-full transition-transform duration-300 ${
      type === "success" ? "bg-green-500" : type === "error" ? "bg-red-500" : "bg-blue-500"
    }`
    notification.textContent = message

    document.body.appendChild(notification)

    // Slide in
    setTimeout(() => {
      notification.style.transform = "translateX(0)"
    }, 100)

    // Slide out and remove
    setTimeout(() => {
      notification.style.transform = "translateX(100%)"
      setTimeout(() => {
        document.body.removeChild(notification)
      }, 300)
    }, 3000)
  }
}

// Initialize the app when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  new WeddingFoodApp()
})

// Add some additional utility functions
function formatDate(date) {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date)
}

function debounce(func, wait) {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}


document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    const modal = document.getElementById("upload-modal")
    if (modal && !modal.classList.contains("hidden")) {
      modal.classList.add("hidden")
      document.body.style.overflow = "auto"
    }
  }
})
