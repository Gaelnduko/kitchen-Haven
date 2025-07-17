const bakeryItems = [
  {
    name: "Artisan Breads",
    description: "Freshly baked sourdough, baguettes, and rustic loaves, perfect for any meal.",
    image: "https://i.pinimg.com/736x/8d/82/a4/8d82a4a6c66dbb29c7ca18bce551e794.jpg",
    ingredients: ["Flour", "Water", "Salt", "Yeast"]
  },
  {
    name: "Classic Cakes",
    description: "Elegant cakes for all occasions, from rich chocolate to delicate vanilla.",
    image: "https://i.pinimg.com/1200x/9d/c4/eb/9dc4eb9823ed0c5c64cf131c8380b611.jpg",
    ingredients: ["Flour", "Sugar", "Butter", "Eggs", "Vanilla"]
  },
  {
    name: "Gourmet Pastries",
    description: "Flaky croissants, sweet danishes, and savory turnovers, baked fresh daily.",
    image: "https://i.pinimg.com/736x/a2/b6/58/a2b658fa6c7a26966ae59dfe7bb03b9d.jpg",
    ingredients: ["Butter", "Flour", "Milk", "Eggs", "Sugar"]
  },
  {
    name: "Assorted Cookies",
    description: "A delightful selection of soft, chewy, and crispy cookies for every taste.",
    image: "https://i.pinimg.com/1200x/de/5a/dc/de5adcfd4b269b5745d97562cffd1836.jpg",
    ingredients: ["Flour", "Sugar", "Butter", "Chocolate Chips", "Nuts"]
  },
  {
    name: "Delicious Muffins",
    description: "Moist and flavorful muffins, ideal for breakfast or a quick snack.",
    image: "https://i.pinimg.com/1200x/34/94/c2/3494c2b1572fe41c357aa5672609574e.jpg",
    ingredients: ["Flour", "Sugar", "Eggs", "Milk", "Baking Powder"]
  },
  {
    name: "Sweet Tarts & Pies",
    description: "Individual tarts and full-sized pies with seasonal fruit and creamy fillings.",
    image: "https://i.pinimg.com/1200x/17/77/2f/17772f25f4de207c091612329933f724.jpg",
    ingredients: ["Flour", "Butter", "Sugar", "Fruit Filling", "Eggs"]
  },
  {
    name: "Donuts & Fritters",
    description: "Classic glazed donuts, filled delights, and crispy apple fritters.",
    image: "https://i.pinimg.com/1200x/ec/49/12/ec4912ef81a0bdb215c35ed872c3ed62.jpg",
    ingredients: ["Flour", "Sugar", "Yeast", "Milk", "Eggs"]
  },
  {
    name: "Cupcakes & Brownies",
    description: "Perfectly portioned cupcakes and rich, fudgy brownies for a sweet treat.",
    image: "https://i.pinimg.com/1200x/be/3f/d3/be3fd3ef4227720a586c0b60b449a538.jpg",
    ingredients: ["Flour", "Sugar", "Butter", "Eggs", "Cocoa Powder"]
  },
]

const foodGrid = document.getElementById("food-grid")
const exploreBakeryBtn = document.getElementById("explore-bakery-btn")

document.addEventListener("DOMContentLoaded", () => {
  renderBakeryCards()
  setupEventListeners()
  setupImageLoading()
})

function renderBakeryCards() {
  foodGrid.innerHTML = ""
  bakeryItems.forEach((item) => {
    const foodCard = document.createElement("div")
    foodCard.className = "food-card"
    foodCard.innerHTML = `
            <div class="image-container">
                <img src="${item.image}" alt="${item.name}" class="food-image" loading="lazy">
            </div>
            <h3>${item.name}</h3>
            <p>${item.description}</p>
        `
    foodGrid.appendChild(foodCard)
  })
}

function setupEventListeners() {
  exploreBakeryBtn.addEventListener("click", () => {
    document.getElementById("bakery").scrollIntoView({
      behavior: "smooth",
    })
  })

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

function setupImageLoading() {
  const images = document.querySelectorAll(".food-image")
  images.forEach((img) => {
    img.addEventListener("load", function () {
      this.classList.add("loaded")
    })
    if (img.complete) {
      img.classList.add("loaded")
    }
  })
}

console.log("🍞 Welcome to Sweet Delights Bakery! 🍰")
