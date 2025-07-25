import { db } from './firebase.js';
import { collection, getDocs, onSnapshot } from 'firebase/firestore';

const recipeFeed = document.getElementById('recipe-feed');

function renderRecipe(recipe) {
  const card = document.createElement('div');
  card.className = 'recipe-card';

  card.innerHTML = `
    <img src="${recipe.mediaUrl || 'placeholder.jpg'}" alt="Recipe Image">
    <div class="content">
      <h3>${recipe.title}</h3>
      <p><strong>Category:</strong> ${recipe.category}</p>
      <p>${recipe.description}</p>
    </div>
  `;

  recipeFeed.appendChild(card);
}

function fetchRecipes() {
  const recipesRef = collection(db, 'recipes');

  // Real-time updates (optional)
  onSnapshot(recipesRef, (snapshot) => {
    recipeFeed.innerHTML = '';
    if (snapshot.empty) {
      recipeFeed.innerHTML = '<p id="no-recipes-message">No recipes shared yet!</p>';
    } else {
      snapshot.forEach(doc => renderRecipe(doc.data()));
    }
  });
}

fetchRecipes();

document.addEventListener("DOMContentLoaded", () => {
  const recipeForm = document.getElementById("recipe-form")
  const recipeFeed = document.getElementById("recipe-feed")
  const noRecipesMessage = document.getElementById("no-recipes-message")

  const recipes = [] // Stores recipe data

 
  function generateUniqueId() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
      var r = (Math.random() * 16) | 0,
        v = c == "x" ? r : (r & 0x3) | 0x8
      return v.toString(16)
    })
  }

  // Function to render all recipes in the feed
  function renderRecipes() {
    recipeFeed.innerHTML = "" // Clear existing recipes
    if (recipes.length === 0) {
      noRecipesMessage.classList.remove("hidden")
      return
    } else {
      noRecipesMessage.classList.add("hidden")
    }

    recipes.forEach((recipe) => {
      const shortDescription = recipe.instructions.split(". ")[0] + (recipe.instructions.includes(".") ? "." : "")
      const imageUrl = recipe.imageUrl || "/placeholder.svg?height=400&width=600&text=Recipe+Image"
      const videoHtml = recipe.videoUrl
        ? `<video controls src="${recipe.videoUrl}" class="w-full h-48 object-cover rounded-t-lg"></video>`
        : ""

      const recipeCard = document.createElement("div")
      recipeCard.className =
        "bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col"
      recipeCard.innerHTML = `
                <div class="relative w-full h-48">
                    ${videoHtml || `<img src="${imageUrl}" alt="${recipe.title}" class="w-full h-full object-cover rounded-t-lg">`}
                </div>
                <div class="p-6 flex-grow">
                    <h3 class="text-xl font-bold mb-2 text-gray-800">${recipe.title}</h3>
                    <p class="text-sm text-gray-600 mb-4 line-clamp-2">${shortDescription}</p>
                    <div class="flex items-center justify-between text-sm text-gray-500 mb-3">
                        <div class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star text-yellow-500 mr-1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                            <span>${(Math.floor(Math.random() * 5) + 1).toFixed(1)}</span>
                        </div>
                        <div class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart text-red-500 mr-1"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
                            <span>${Math.floor(Math.random() * 100)}</span>
                        </div>
                        <div class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-circle text-blue-500 mr-1"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>
                            <span>${Math.floor(Math.random() * 20)}</span>
                        </div>
                    </div>
                    <div class="flex flex-wrap gap-2 mb-3">
                        <span class="inline-flex items-center rounded-full bg-blue-100 px-3 py-0.5 text-xs font-medium text-blue-800">${recipe.category}</span>
                        <span class="inline-flex items-center rounded-full bg-gray-100 px-3 py-0.5 text-xs font-medium text-gray-800">${recipe.difficulty}</span>
                    </div>
                    <div class="text-sm text-gray-700">
                        <p><strong>Prep:</strong> ${recipe.prepTime}</p>
                        <p><strong>Cook:</strong> ${recipe.cookTime}</p>
                    </div>
                </div>
                <div class="p-6 pt-0">
                    <button class="w-full bg-gray-50 text-gray-700 py-2 px-4 rounded-lg font-semibold hover:bg-gray-100 transition duration-200">View Recipe</button>
                </div>
            `
      recipeFeed.appendChild(recipeCard)
    })
  }

  // Handle form submission
  recipeForm.addEventListener("submit", (e) => {
    e.preventDefault() // Prevent default form submission

    const formData = new FormData(recipeForm)
    const title = formData.get("title")
    const ingredients = formData.get("ingredients")
    const instructions = formData.get("instructions")
    const category = formData.get("category")
    const imageFile = formData.get("imageUpload")
    const videoFile = formData.get("videoUpload")
    const prepTime = formData.get("prepTime")
    const cookTime = formData.get("cookTime")
    const difficulty = formData.get("difficulty")

    // Basic validation
    if (!title || !ingredients || !instructions || !category || !prepTime || !cookTime || !difficulty) {
      alert("Please fill in all required fields.")
      return
    }

    const newRecipe = {
      id: generateUniqueId(),
      title: title,
      ingredients: ingredients,
      instructions: instructions,
      category: category,
      imageUrl: imageFile && imageFile.size > 0 ? URL.createObjectURL(imageFile) : "",
      videoUrl: videoFile && videoFile.size > 0 ? URL.createObjectURL(videoFile) : "",
      prepTime: prepTime,
      cookTime: cookTime,
      difficulty: difficulty,
    }

    recipes.unshift(newRecipe) // Add new recipe to the beginning of the array
    renderRecipes() // Re-render the feed

    recipeForm.reset() // Clear the form
  })

  const newRecipe = {
  // your existing data...
  createdAt: new Date(),
  author: "Anonymous" // or pull from logged-in user
}

 renderRecipes()
})
