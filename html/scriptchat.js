

const bakeryItems = [
  {
    name: "Artisan Breads",
    description: "Freshly baked sourdough, baguettes, and rustic loaves, perfect for any meal.",
    image: "/placeholder.svg?height=180&width=300&text=Artisan+Breads",
  },
  {
    name: "Classic Cakes",
    description: "Elegant cakes for all occasions, from rich chocolate to delicate vanilla.",
    image: "/placeholder.svg?height=180&width=300&text=Classic+Cakes",
  },
  {
    name: "Gourmet Pastries",
    description: "Flaky croissants, sweet danishes, and savory turnovers, baked fresh daily.",
    image: "/placeholder.svg?height=180&width=300&text=Gourmet+Pastries",
  },
  {
    name: "Assorted Cookies",
    description: "A delightful selection of soft, chewy, and crispy cookies for every taste.",
    image: "/placeholder.svg?height=180&width=300&text=Assorted+Cookies",
  },
  {
    name: "Delicious Muffins",
    description: "Moist and flavorful muffins, ideal for breakfast or a quick snack.",
    image: "/placeholder.svg?height=180&width=300&text=Delicious+Muffins",
  },
  {
    name: "Sweet Tarts & Pies",
    description: "Individual tarts and full-sized pies with seasonal fruit and creamy fillings.",
    image: "/placeholder.svg?height=180&width=300&text=Sweet+Tarts+Pies",
  },
  {
    name: "Donuts & Fritters",
    description: "Classic glazed donuts, filled delights, and crispy apple fritters.",
    image: "/placeholder.svg?height=180&width=300&text=Donuts+Fritters",
  },
  {
    name: "Cupcakes & Brownies",
    description: "Perfectly portioned cupcakes and rich, fudgy brownies for a sweet treat.",
    image: "/placeholder.svg?height=180&width=300&text=Cupcakes+Brownies",
  },
]

const foodGrid = document.getElementById("food-grid")
const exploreBakeryBtn = document.getElementById("explore-bakery-btn")

// Chatbot DOM elements
const chatbotToggleBtn = document.getElementById("chatbot-toggle-btn")
const chatbotWindow = document.getElementById("chatbot-window")
const chatbotCloseBtn = document.getElementById("chatbot-close-btn")
const chatMessages = document.getElementById("chat-messages")
const chatInput = document.getElementById("chat-input")
const chatSendBtn = document.getElementById("chat-send-btn")

document.addEventListener("DOMContentLoaded", () => {
  renderBakeryCards()
  setupEventListeners()
  setupImageLoading()
  setupChatbot() // Initialize chatbot
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

// --- Chatbot Logic ---
const knowledgeBase = [
  {
    keywords: ["hello", "hi", "hey", "greetings"],
    response: "Hi there! How can I help you today?",
  },
  {
    keywords: ["menu", "items", "products", "what do you sell"],
    response:
      "We offer artisan breads, classic cakes, gourmet pastries, cookies, muffins, tarts, pies, donuts, and brownies. See our 'Bakery' section for details!",
  },
  {
    keywords: ["hours", "open", "close", "when are you open"],
    response: "We're open Monday-Saturday, 8 AM - 6 PM. Closed on Sundays.",
  },
  {
    keywords: ["location", "address", "where are you"],
    response: "We are located at 123 Bakery Lane, Sweetville. Come visit us!",
  },
  {
    keywords: ["contact", "phone", "email"],
    response: "You can reach us at (555) 123-4567 or email info@sweetdelights.com.",
  },
  {
    keywords: ["order", "custom", "special"],
    response: "Yes, we take custom orders! Please contact us directly to discuss your needs.",
  },
  {
    keywords: ["delivery", "ship"],
    response: "Currently, we offer local pickup only. We do not offer delivery or shipping at this time.",
  },
  {
    keywords: ["thank you", "thanks", "bye"],
    response: "You're welcome! Have a sweet day!",
  },
]

function setupChatbot() {
  chatbotToggleBtn.addEventListener("click", () => {
    chatbotWindow.classList.toggle("hidden")
    if (!chatbotWindow.classList.contains("hidden")) {
      chatInput.focus()
      scrollToBottom()
    }
  })

  chatbotCloseBtn.addEventListener("click", () => {
    chatbotWindow.classList.add("hidden")
  })

  chatSendBtn.addEventListener("click", sendMessage)
  chatInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      sendMessage()
    }
  })
}

function sendMessage() {
  const userMessage = chatInput.value.trim()
  if (userMessage === "") return

  appendMessage(userMessage, "user")
  chatInput.value = ""

  // Get bot response after a short delay
  setTimeout(() => {
    const botResponse = getBotResponse(userMessage)
    appendMessage(botResponse, "bot")
  }, 500)
}

function appendMessage(text, sender) {
  const messageDiv = document.createElement("div")
  messageDiv.classList.add("chat-message", sender)
  messageDiv.innerHTML = `<div class="message-bubble">${text}</div>`
  chatMessages.appendChild(messageDiv)
  scrollToBottom()
}

function getBotResponse(message) {
  const lowerCaseMessage = message.toLowerCase()

  for (const entry of knowledgeBase) {
    for (const keyword of entry.keywords) {
      if (lowerCaseMessage.includes(keyword)) {
        return entry.response
      }
    }
  }

  return "I'm sorry, I don't have information on that. Please try rephrasing your question or contact us directly."
}

function scrollToBottom() {
  chatMessages.scrollTop = chatMessages.scrollHeight
}

console.log("🍞 Welcome to Sweet Delights Bakery! 🍰")
