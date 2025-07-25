const recipes = {
  appetizers: {
    title: "Elegant Appetizers",
    description: "Delicate canapés and hors d'oeuvres to start your celebration.",
    image: "https://i.pinimg.com/736x/0a/a8/43/0aa843ac016ae09a4cb75b8d841373a8.jpg",
    alt: "Elegant plated appetizers",
    ingredients: [
      "1 baguette, sliced thinly",
      "100g smoked salmon",
      "120g cream cheese",
      "1 tbsp capers",
      "Fresh dill for garnish",
      "Crackers or mini tart shells",
      "Goat cheese",
      "Sun-dried tomatoes, chopped",
      "Basil leaves"
    ],
    instructions: [
      "Toast baguette slices lightly and let cool.",
      "Spread cream cheese on the toasted slices, top with smoked salmon and a few capers.",
      "Garnish with fresh dill.",
      "For tartlets: fill shells with goat cheese, top with sun-dried tomato and a basil leaf.",
      "Chill until ready to serve. Serve on a wooden board or elegant tray."
    ]
  },

  main: {
    title: "Premium Main Course",
    description: "Exquisite beef tenderloin and gourmet chicken dishes.",
    image: "https://i.pinimg.com/1200x/fd/39/12/fd3912434013cb780d9bd8b3518091e4.jpg",
    alt: "Plate with sliced beef tenderloin and creamy Tuscan chicken",
    ingredients: [
      "1.5 lbs beef tenderloin",
      "4 garlic cloves, minced",
      "2 tbsp olive oil",
      "1 tbsp chopped rosemary",
      "Salt and pepper to taste",
      "2 chicken breasts",
      "1 tbsp butter",
      "1 cup heavy cream",
      "1/3 cup sun-dried tomatoes",
      "2 cups baby spinach",
      "1/4 cup grated parmesan"
    ],
    instructions: [
      "Preheat oven to 220°C (425°F).",
      "Rub beef with olive oil, garlic, rosemary, salt, and pepper.",
      "Sear beef in a skillet, then roast for 25 minutes (medium-rare).",
      "Season chicken and sear until golden and cooked through.",
      "In same pan, add tomatoes, cream, and spinach. Simmer for 3 minutes.",
      "Stir in parmesan and return chicken to sauce.",
      "Slice beef and plate with creamy chicken. Garnish with herbs."
    ]
  },

  desserts: {
    title: "Divine Desserts",
    description: "Wedding cakes and sweet treats to end on a perfect note.",
    image: "https://i.pinimg.com/1200x/d6/b4/bb/d6b4bb2af5f03c7999e023746bfe9f88.jpg",
    alt: "Dessert platter with mini cakes and sweets",
    ingredients: [
      "1 vanilla sponge cake",
      "2 cups whipped cream",
      "Strawberries, sliced",
      "1 cup white chocolate, melted",
      "Macarons (assorted)",
      "Mini cheesecake bites",
      "Fresh mint for garnish"
    ],
    instructions: [
      "Slice sponge cake into layers and spread whipped cream and strawberries in between.",
      "Cover top with whipped cream and drizzle melted white chocolate.",
      "Place macarons and mini cheesecakes on a dessert tray.",
      "Decorate everything with fresh mint leaves and edible flowers.",
      "Chill cakes until ready to serve for best texture."
    ]
  }
};
button.dataset.recipe = "appetizers" | "main" | "desserts"

