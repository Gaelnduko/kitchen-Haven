

const menuData = [
  {
    id: 1,
    name: "French fries",
    description: "Delicious crunchy french fries",
    price:"Ksh600",
    time: "25 mins",
    category: "main",
    image: "https://i.pinimg.com/736x/54/d6/a9/54d6a9e3bae82c5cc7601c602b186b06.jpg",
    ingredients: [
      "potatoes",
      "Neutral oil",
      "Paprika",
      "Black pepper",
      "Salt",
    ],
    instructions: [
      "Peel the potatoes (or leave the skin on if you like).",
      "Slice into even strips, roughly 1cm thick.",
      "Place the cut potatoes in a bowl of cold water.",
      "Rinse them well, then cover with fresh cold water and leave to soak for at least 30 minutes (up to 2 hours).",
      "Pat completely dry—wet fries will spit and go soggy.",
      "Fry the potatoes in batches for 4 to 5 minutes, until they’re just beginning to turn pale gold.",
      "Let the blanched fries cool for 10 to 15 minutes.",
      "Immediately sprinkle with sea salt (and any extra seasonings you fancy).",
      "Serve piping hot—perfect with ketchup, aioli or your favourite dipping sauce.",
    ],
  },
  {
    id: 2,
    name: "Chicken nuggets",
    description: "Classic chicken nuggets with a crispy coating",
    price: "ksh1200",
    time: "18 - 20  mins",
    category: "main",
    image: "https://i.pinimg.com/736x/e9/73/e9/e973e9fd5c50d84d4c776ee7afbae51f.jpg",
    ingredients: [
      "500g of boneless chicken breast",
      " 1 cup breadcrumbs (panko or regular)             ",
      "½ cup plain flour",
      "1 egg (beaten)",
      "½ tsp garlic powder (optional - mild)",
      "½ tsp onion powder (optional)",
      "Salt - just a pinch",
      "1 tbsp grated cheese (like Parmesan or cheddar - optional but kids love it!",
      "Cooking oil spray or a bit of olive oil (for baking or air frying)",
    ],
    instructions: [
      "Cut the chicken into small, bite-sized pieces and pat them dry with paper towel.",
      "Bowl 1: Flour + a pinch of salt",
      "Bowl 2: Beaten egg",
      "Bowl 3: Breadcrumbs + (optional) cheese + garlic/onion powder",
      "Coat the chicken Dip each chicken piece in the flour, shaking off excess then in the egg finally in the breadcrumbs mixed with onion and garlic powder.",
      "Cook nuggets for 3 to 4 minutes per side until golden brown and cooked through",
    ],
  },
  {
    id: 3,
    name: "Margherita Pizza",
     description: "Classic Italian pizza with tomato sauce, mozzarella, and fresh basil",
    price: "ksh800",
    time: "25 mins",
    category: "main",
    image: "https://i.pinimg.com/736x/ec/26/37/ec2637833888707952e550b7135f7433.jpg",
    ingredients: [
    "1 pizza dough base",
    "1/2 cup tomato sauce",
    "1 cup mozzarella cheese (shredded or sliced)",
    "Fresh basil leaves",
    "1 tbsp olive oil",
    "Salt to taste",
    ],
    instructions: [
    "Preheat oven to 220°C (425°F)",
    "Spread tomato sauce over the pizza dough",
    "Add mozzarella cheese evenly on top",
    "Bake for 12 - 15 minutes until crust is golden and cheese is melted",
    "Remove from oven and top with fresh basil and a drizzle of olive oil",
    "Slice and serve hot",
  ],
  },

   {
    id: 4,
    name: "Mini Chicken Sliders",
    description: "Juicy mini chicken burgers with cheese in soft slider buns — perfect for kids!",
    price: "ksh900",
    time: "20 mins",
    category: "main",
    image: "https://i.pinimg.com/736x/af/4b/7e/af4b7e5b8281d8902bdb3c4a81942438.jpg",
    ingredients: [
    "6 mini burger buns",
    "2 chicken breasts (cooked and shredded or grilled and sliced)",
    "6 slices of cheddar cheese",
    "Lettuce leaves",
    "Ketchup or mayo",
    "Salt and pepper to taste",
  ],
  instructions: [
    "Cook and season the chicken (grilled or pan-fried)",
    "Slice the mini buns and lightly toast them",
    "Assemble: bun, lettuce, chicken, cheese, and ketchup/mayo",
    "Top with bun lid and secure with a toothpick if needed",
    "Serve warm with a side of fruit or fries",
  ],
  },
 {
  id: 5,
  name: "Banana Pancakes",
  description: "Fluffy mini pancakes made with ripe bananas — perfect for breakfast or snack time!",
  price: "ksh300",
  time: "15 mins",
  category: "breakfast",
  image: "https://i.pinimg.com/736x/b6/94/29/b69429de09848720fdf869de31779edc.jpg",
  ingredients: [
    "1 ripe banana",
    "1 egg",
    "1/2 cup milk",
    "3/4 cup all-purpose flour",
    "1 tsp baking powder",
    "1/4 tsp cinnamon (optional)",
    "A pinch of salt",
    "Butter or oil for cooking"
  ],
  instructions: [
    "Mash the ripe banana in a bowl until smooth",
    "Whisk in the egg and milk",
    "In a separate bowl, mix flour, baking powder, cinnamon, and salt",
    "Combine wet and dry ingredients into a smooth batter",
    "Heat a non-stick pan over medium heat and lightly grease with butter or oil",
    "Spoon small amounts of batter to form mini pancakes",
    "Cook for 1 - 2 minutes per side until golden brown",
    "Serve warm with honey, syrup, or fresh fruit"
  ]
},
  {
  id: 6,
  name: "Chocolate Banana Pops",
  description: "Frozen banana slices dipped in chocolate and sprinkles — a fun, sweet treat for kids!",
  price: "ksh200",
  time: "10 mins (plus freezing time)",
  category: "dessert",
  image: "https://i.pinimg.com/736x/e4/ff/97/e4ff972386cf16e69d23182c0588dce7.jpg",
  ingredients: [
    "2 ripe bananas",
    "1 cup chocolate chips (milk or dark)",
    "1 tbsp coconut oil or butter",
    "Sprinkles, crushed nuts, or mini marshmallows (optional)",
    "Popsicle sticks or toothpicks"
  ],
  instructions: [
    "Peel and slice bananas into thick rounds or halves",
    "Insert sticks into the banana pieces and place on a tray lined with parchment paper",
    "Freeze for at least 1 hour until firm",
    "Melt chocolate chips with coconut oil in a microwave or over a double boiler",
    "Dip frozen banana pieces into the melted chocolate",
    "Quickly add toppings like sprinkles or nuts before the chocolate hardens",
    "Place back on tray and freeze for another 15–20 minutes",
    "Serve chilled and enjoy!"
  ]
},

  {
  id: 7,
  name: "Rosemary Citrus Spritz",
  description: "A bright and refreshing drink with orange, lemon, and a hint of rosemary — perfect for serving guests in style.",
  price: "ksh600",
  time: "10 mins",
  category: "beverage",
  image: "https://i.pinimg.com/736x/80/a6/b2/80a6b2a6c7252b824e6e9abb9de715fe.jpg",
  ingredients: [
    "1 cup fresh orange juice",
    "1/2 cup fresh lemon juice",
    "2 tbsp rosemary simple syrup (see below)",
    "1 1/2 cups sparkling water or soda water",
    "Ice cubes",
    "Orange slices & rosemary sprigs (for garnish)"
  ],
  instructions: [
    "To make rosemary syrup: simmer 1/2 cup sugar, 1/2 cup water, and 2 rosemary sprigs for 5 minutes. Let cool and strain.",
    "In a jug, combine orange juice, lemon juice, and rosemary syrup.",
    "Fill glasses with ice and pour the juice mixture halfway.",
    "Top with sparkling water and stir gently.",
    "Garnish with a slice of orange and a fresh rosemary sprig. Serve chilled."
  ]
},

  {
  id: 8,
  name: "Mini Fruit & Yoghurt Parfaits",
  description: "Layered fruit, yoghurt, and granola in a cup — colourful, healthy, and fun for kids!",
  price: "ksh900",
  time: "10 mins",
  category: "snack",
  image: "https://i.pinimg.com/736x/d2/f6/6e/d2f66ec2460c49facfcadc99cd6ff788.jpg",
  ingredients: [
    "1 cup vanilla yoghurt",
    "1/2 cup strawberries (chopped)",
    "1/2 cup banana slices",
    "1/4 cup blueberries",
    "1/2 cup granola or crushed biscuits",
    "Honey (optional, for extra sweetness)"
  ],
  instructions: [
    "Prepare the fruits by washing and chopping them",
    "In small cups or jars, start with a spoonful of yoghurt",
    "Add a layer of fruit, then a sprinkle of granola or crushed biscuits",
    "Repeat the layers until the cup is full",
    "Top with a drizzle of honey if desired",
    "Serve immediately or chill for later — fun with a spoon!"
  ]
},

  {
  id: 9,
  name: "Cheesy Veggie Quesadillas",
  description: "Toasty tortilla pockets filled with melted cheese and kid-approved veggies — quick and fun to eat!",
  price: "Ksh750",
  time: "15 mins",
  category: "main",
  image: "https://i.pinimg.com/736x/52/47/4b/52474bc48f93bc39ebb0cc485d5f0048.jpg",
  ingredients: [
    "2 flour tortillas",
    "1/2 cup shredded cheddar cheese",
    "1/4 cup finely chopped bell peppers",
    "1/4 cup sweet corn (cooked)",
    "1 tbsp butter or oil",
    "A pinch of salt"
  ],
  instructions: [
    "Place one tortilla on a flat surface and sprinkle half of the cheese on it",
    "Add chopped bell peppers and corn evenly, then sprinkle the rest of the cheese",
    "Top with the second tortilla to make a sandwich",
    "Heat butter or oil in a pan over medium heat",
    "Cook the quesadilla for 2–3 minutes on each side until golden and the cheese is melted",
    "Slice into wedges and serve warm — great with ketchup or mild salsa!"
  ]
},

  {
  id: 10,
  name: "Berry Lime Sparkler",
  description: "A vibrant sparkling drink with mixed berries, fresh lime, and fizzy water — refreshing and beautiful for any occasion.",
  price: "ksh700",
  time: "8 mins",
  category: "beverage",
  image: "https://i.pinimg.com/736x/73/19/e0/7319e03422da04244727907c0bbdff26.jpg",
  ingredients: [
    "1/2 cup fresh or frozen mixed berries (strawberries, blueberries, raspberries)",
    "Juice of 1 lime",
    "1–2 tbsp honey or sugar (optional)",
    "1 cup cold sparkling water or lemon-lime soda",
    "Ice cubes",
    "Lime slices & mint leaves (for garnish)"
  ],
  instructions: [
    "In a glass or shaker, muddle the berries with lime juice and sweetener (if using).",
    "Fill a glass with ice cubes.",
    "Pour the berry-lime mixture over the ice.",
    "Top up with sparkling water or lemon-lime soda.",
    "Stir gently and garnish with mint and a lime slice. Serve immediately!"
  ]
},

  {
  id: 11,
  name: "No-Bake Cereal Bars",
  description: "Chewy and colourful cereal bars made with marshmallows and fun mix-ins — a perfect kid treat!",
  price: "ksh250",
  time: "10 mins (plus 30 mins chilling)",
  category: "snack",
  image: "https://i.pinimg.com/736x/41/e3/8a/41e38a9820f7cdf4aedc6351cc8c0a0a.jpg",
  ingredients: [
    "3 cups colourful cereal (like Froot Loops or Rice Krispies)",
    "2 cups mini marshmallows",
    "2 tbsp butter",
    "1/4 cup mini chocolate chips (optional)",
    "Sprinkles (optional)"
  ],
  instructions: [
    "In a saucepan, melt the butter over low heat",
    "Add marshmallows and stir until completely melted and smooth",
    "Remove from heat and gently stir in the cereal until evenly coated",
    "Quickly mix in sprinkles or chocolate chips if using",
    "Press mixture into a greased or parchment-lined baking tray",
    "Flatten evenly and let cool in the fridge for about 30 minutes",
    "Cut into small bars or fun shapes and enjoy!"
  ]
},

  {
  id: 12,
  name: "Apple Cinnamon Rolls",
  description: "Soft rolls filled with cinnamon-spiced apples and topped with a light glaze — a delicious twist on a classic dessert.",
  price: "ksh650",
  time: "35 mins",
  category: "dessert",
  image: "https://i.pinimg.com/736x/7b/0e/53/7b0e536ca032173ff61b5b8c78ba53d3.jpg",
  ingredients: [
    "1 sheet store-bought puff pastry or homemade dough",
    "1 large apple (peeled and diced)",
    "2 tbsp brown sugar",
    "1 tsp ground cinnamon",
    "1 tbsp butter",
    "1/2 tsp vanilla extract",
    "1/4 cup powdered sugar",
    "1 tbsp milk (for glaze)"
  ],
  instructions: [
    "Preheat oven to 190°C (375°F) and line a baking tray with parchment paper.",
    "In a pan, melt butter and sauté diced apples with brown sugar, cinnamon, and vanilla until soft (about 5–7 mins). Let cool.",
    "Roll out the dough and spread the apple filling evenly over it.",
    "Roll the dough tightly into a log and cut into 1-inch slices.",
    "Place the rolls on the baking tray and bake for 18–22 minutes until golden brown.",
    "Mix powdered sugar and milk to make a glaze. Drizzle over warm rolls before serving."
  ]
},

   {
  id: 13,
  name: "Mini Caprese Skewers",
  description: "A fresh and simple appetizer with cherry tomatoes, mozzarella, and basil on skewers — perfect for quick bites or guests.",
  price: "ksh350",
  time: "10 mins",
  category: "appetizer",
  image: "https://i.pinimg.com/736x/a4/58/7c/a4587c4bc84280b3ccbc917495352690.jpg",
  ingredients: [
    "1 cup cherry tomatoes",
    "1 cup mini mozzarella balls (bocconcini)",
    "Fresh basil leaves",
    "2 tbsp olive oil",
    "1 tbsp balsamic glaze (optional)",
    "Salt and pepper to taste",
    "Small toothpicks or cocktail skewers"
  ],
  instructions: [
    "Wash and dry the tomatoes and basil leaves.",
    "On each skewer, layer one tomato, one mozzarella ball, and one basil leaf.",
    "Arrange skewers on a platter.",
    "Drizzle with olive oil and balsamic glaze if using.",
    "Sprinkle with a bit of salt and pepper. Serve fresh and chilled."
  ]
},

  {
  id: 14,
  name: "Pineapple Ginger Cooler",
  description: "A zesty tropical drink with fresh pineapple, ginger, and lime — perfect for entertaining guests.",
  price: "ksh550",
  time: "10 mins",
  category: "beverage",
  image: "https://i.pinimg.com/736x/28/7d/27/287d27cd0e1f1879e7879edce7324a56.jpg",
  ingredients: [
    "2 cups fresh pineapple chunks",
    "1 tsp freshly grated ginger",
    "Juice of 1 lime",
    "1 - 2 tbsp honey or sugar (optional)",
    "2 cups cold sparkling water or soda water",
    "Ice cubes",
    "Mint leaves & pineapple wedges (for garnish)"
  ],
  instructions: [
    "In a blender, combine pineapple, ginger, lime juice, and honey or sugar. Blend until smooth.",
    "Strain the mixture if you prefer a smoother drink.",
    "Pour over ice into glasses until 2/3 full.",
    "Top with sparkling water and stir gently.",
    "Garnish with fresh mint and a pineapple wedge. Serve chilled!"
  ]
},

  {
  id: 15,
  name: "Cucumber Mint Lemonade",
  description: "A cool, refreshing drink made with cucumber, mint, and lemon — perfect for guests on a sunny day.",
  price: "ksh400",
  time: "10 mins",
  category: "beverage",
  image: "https://i.pinimg.com/736x/39/10/52/39105253b4b6a2b28552ad13845e7dfb.jpg",
  ingredients: [
    "1 large cucumber (peeled and chopped)",
    "1/2 cup fresh lemon juice (about 3 lemons)",
    "1/4 cup sugar (adjust to taste)",
    "3 cups cold water",
    "Fresh mint leaves",
    "Ice cubes",
    "Lemon slices & cucumber slices (for garnish)"
  ],
  instructions: [
    "In a blender, combine cucumber, lemon juice, sugar, and 1 cup of water. Blend until smooth.",
    "Strain the mixture into a jug to remove pulp (optional).",
    "Add the remaining 2 cups of water and stir well.",
    "Add a handful of fresh mint leaves and chill in the fridge.",
    "Serve over ice with lemon and cucumber slices for garnish."
  ]
},

  
{
  id: 17,
  name: "Rainbow Fruit Skewers",
  description: "A fun and healthy treat for kids — colourful fruit on sticks served with a sweet yoghurt dip.",
  price: "ksh99",
  time: "10 mins",
  category: "snack",
  image: "https://i.pinimg.com/736x/56/43/a4/5643a4a59442c5dfb312d6b712b0f71b.jpg",
  ingredients: [
    "1 cup strawberries (halved)",
    "1 cup pineapple chunks",
    "1 cup green grapes",
    "1 cup blueberries",
    "1 cup watermelon or kiwi (cubed)",
    "Wooden skewers",
    "1 cup vanilla yoghurt",
    "1 tbsp honey (optional)"
  ],
  instructions: [
    "Wash and prepare all the fruit by cutting into bite-sized pieces.",
    "Thread the fruit onto skewers in rainbow order: strawberry, pineapple, grape, kiwi, blueberry.",
    "In a small bowl, mix vanilla yoghurt with honey for dipping (optional).",
    "Serve the skewers with the yoghurt dip on the side.",
    "Keep chilled until ready to serve — perfect for parties or healthy snacks!"
  ]
},

  {
  id: 18,
  name: "Fudgy Chocolate Brownies",
  description: "Rich, chewy, and ultra-chocolaty brownies — the perfect sweet treat for dessert lovers.",
  price: "Ksh550",
  time: "35 mins",
  category: "dessert",
  image: "https://i.pinimg.com/736x/80/6b/8c/806b8cab4f81b7719f51364e38dd7eaf.jpg",
  ingredients: [
    "1/2 cup (115g) unsalted butter",
    "1 cup sugar",
    "2 large eggs",
    "1 tsp vanilla extract",
    "1/3 cup cocoa powder",
    "1/2 cup all-purpose flour",
    "1/4 tsp salt",
    "1/4 tsp baking powder",
    "1/2 cup chocolate chips (optional)"
  ],
  instructions: [
    "Preheat oven to 175°C (350°F) and grease a square baking pan.",
    "Melt the butter in a saucepan or microwave.",
    "Stir in sugar, eggs, and vanilla.",
    "Add cocoa powder, flour, salt, and baking powder. Mix until smooth.",
    "Fold in chocolate chips if using.",
    "Pour batter into the prepared pan and spread evenly.",
    "Bake for 20–25 minutes, or until a toothpick inserted comes out with moist crumbs.",
    "Cool before cutting into squares. Serve and enjoy!"
  ]
},

  {
  id: 19,
  name: "Garlic Butter Breadsticks",
  description: "Soft, warm breadsticks brushed with homemade garlic butter — a perfect starter for any family meal.",
  price: "ksh450",
  time: "25 mins",
  category: "appetizer",
  image: "https://i.pinimg.com/736x/de/06/e1/de06e14d92f63bf6276b382d43b389c2.jpg",
  ingredients: [
    "1 tube of store-bought pizza dough or homemade dough",
    "2 tbsp butter (melted)",
    "2 cloves garlic (minced)",
    "1 tbsp chopped parsley (optional)",
    "1/4 tsp salt",
    "1/4 tsp garlic powder",
    "Grated parmesan (optional)"
  ],
  instructions: [
    "Preheat oven to 200°C (400°F) and line a baking sheet with parchment paper.",
    "Roll out dough and cut into strips about 1 inch wide.",
    "Twist or lay strips straight onto the baking sheet.",
    "In a bowl, mix melted butter, minced garlic, garlic powder, salt, and parsley.",
    "Brush the garlic butter over each breadstick generously.",
    "Bake for 12–15 minutes or until golden brown.",
    "Optional: sprinkle with grated parmesan before serving. Serve warm with marinara or cheese dip!"
  ]
},


  {
    id: 20,
    name: "Chocolate Lava Cake",
    description: "Warm chocolate cake with molten chocolate center",
    price: "ksh700",
    time: "20 mins",
    category: "dessert",
    image: "https://i.pinimg.com/736x/d0/c6/5b/d0c65b004183378c9e15a1dfc6aedec3.jpg",
    ingredients: [
      "100g dark chocolate",
      "100g butter",
      "2 eggs",
      "2 egg yolks",
      "50g sugar",
      "30g flour",
      "Butter for ramekins",
    ],
    instructions: [
      "Preheat oven to 200°C",
      "Melt chocolate and butter",
      "Whisk eggs, yolks, and sugar",
      "Combine with chocolate mixture",
      "Fold in flour",
      "Bake in ramekins for 12 minutes",
    ],
  },
  {
    id: 21,
    name: "Beef Burger",
    description: "Juicy beef patty with lettuce, tomato, and special sauce",
    price: "ksh1200",
    time: "20 mins",
    category: "main",
    image: "https://i.pinimg.com/736x/2a/7b/13/2a7b130698e4904a75d2791ae0a66cad.jpg",
    ingredients: [
      "500g ground beef",
      "4 burger buns",
      "4 lettuce leaves",
      "2 tomatoes",
      "4 cheese slices",
      "Special sauce",
      "Pickles",
    ],
    instructions: [
      "Form beef into 4 patties",
      "Season with salt and pepper",
      "Grill patties for 4-5 minutes each side",
      "Toast burger buns",
      "Assemble with lettuce, tomato, cheese",
      "Add sauce and serve",
    ],
  },
  {
  id: 22,
  name: "Sparkling Peach & Rosemary Fizz",
  description: "A refreshing, elegant drink with peach puree, rosemary syrup, and sparkling fizz — perfect for impressing guests.",
  price: "ksh650",
  time: "10 mins",
  category: "beverage",
  image: "https://i.pinimg.com/736x/17/90/3c/17903c6417bc6476c0402c5971f17d02.jpg",
  ingredients: [
    "2 ripe peaches (peeled and blended)",
    "1 lemon (juiced)",
    "1/2 cup sugar",
    "1/2 cup water",
    "2 sprigs fresh rosemary",
    "500ml sparkling water or Prosecco",
    "Ice cubes",
    "Peach slices and rosemary sprigs (for garnish)"
  ],
  instructions: [
    "In a small pot, combine sugar, water, and rosemary sprigs. Simmer for 5 minutes to make rosemary syrup. Let cool and strain.",
    "Blend peeled peaches with lemon juice until smooth to make the peach puree.",
    "In each glass, add 2 tablespoons peach puree and 1 tablespoon rosemary syrup.",
    "Fill the glass with ice cubes and top with sparkling water or Prosecco.",
    "Garnish with a peach slice and a rosemary sprig. Serve immediately."
  ]
},

  {
    id: 23,
    name: "Chicken Wings",
    description: "Crispy chicken wings with buffalo sauce",
    price: "ksh1000",
    time: "35 mins",
    category: "appetizer",
    image: "https://i.pinimg.com/736x/bf/0a/0a/bf0a0ab2c535d9037365fe60691e8c66.jpg",
    ingredients: ["1kg chicken wings", "Buffalo sauce", "Celery sticks", "Blue cheese dip", "Paprika", "Garlic powder"],
    instructions: [
      "Preheat oven to 220°C",
      "Season wings with spices",
      "Bake for 25-30 minutes",
      "Toss with buffalo sauce",
      "Serve with celery and dip",
    ],
  },
  {
    id: 24,
    name: "Tiramisu",
    description: "Classic Italian dessert with coffee and mascarpone",
    price: "ksh700",
    time: "240 mins",
    category: "dessert",
    image: "https://i.pinimg.com/736x/b7/46/ee/b746ee2653c180da2c34f6cfb3df2570.jpg",
    ingredients: [
      "6 egg yolks",
      "75g sugar",
      "500g mascarpone",
      "300ml strong coffee",
      "Ladyfinger cookies",
      "Cocoa powder",
    ],
    instructions: [
      "Whisk egg yolks and sugar",
      "Fold in mascarpone",
      "Dip ladyfingers in coffee",
      "Layer cookies and cream",
      "Refrigerate for 4 hours",
      "Dust with cocoa before serving",
    ],
  },
]

// DOM elements
const menuGrid = document.getElementById("menuGrid")
const filterButtons = document.querySelectorAll(".filter-btn")
const modal = document.getElementById("recipeModal")
const closeModal = document.querySelector(".close")
const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")

// Initialize the page
document.addEventListener("DOMContentLoaded", () => {
  displayMenuItems(menuData)
  setupEventListeners()
})

// Display menu items
function displayMenuItems(items) {
  menuGrid.innerHTML = ""

  items.forEach((item) => {
    const menuItem = document.createElement("div")
    menuItem.className = "menu-item"
    menuItem.dataset.category = item.category

    menuItem.innerHTML = `
            <div class="category-tag">${item.category}</div>
            <img src="${item.image}" alt="${item.name}">
            <div class="menu-item-content">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <div class="menu-item-details">
                    <span class="price">${item.price}</span>
                    <span class="time">⏱️ ${item.time}</span>
                </div>
            </div>
        `

    menuItem.addEventListener("click", () => openRecipeModal(item))
    menuGrid.appendChild(menuItem)
  })
}

// Filter functionality
function setupEventListeners() {
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove("active"))
      // Add active class to clicked button
      button.classList.add("active")

      const filter = button.dataset.filter
      filterMenuItems(filter)
    })
  })

  // Mobile menu toggle
  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active")
  })

  // Close modal events
  closeModal.addEventListener("click", closeRecipeModal)
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeRecipeModal()
    }
  })

  // Close mobile menu when clicking on links
  document.querySelectorAll(".nav-menu a").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active")
    })
  })
}

// Filter menu items
function filterMenuItems(category) {
  const menuItems = document.querySelectorAll(".menu-item")

  menuItems.forEach((item) => {
    if (category === "all" || item.dataset.category === category) {
      item.classList.remove("hidden")
    } else {
      item.classList.add("hidden")
    }
  })
}

// Open recipe modal
function openRecipeModal(item) {
  document.getElementById("modalImage").src = item.image
  document.getElementById("modalTitle").textContent = item.name
  document.getElementById("modalPrice").textContent = item.price
  document.getElementById("modalTime").textContent = `⏱️ ${item.time}`

  // Populate ingredients
  const ingredientsList = document.getElementById("modalIngredients")
  ingredientsList.innerHTML = ""
  item.ingredients.forEach((ingredient) => {
    const li = document.createElement("li")
    li.textContent = ingredient
    ingredientsList.appendChild(li)
  })

  // Populate instructions
  const instructionsList = document.getElementById("modalInstructions")
  instructionsList.innerHTML = ""
  item.instructions.forEach((instruction) => {
    const li = document.createElement("li")
    li.textContent = instruction
    instructionsList.appendChild(li)
  })

  modal.style.display = "block"
  document.body.style.overflow = "hidden"
}

// Close recipe modal
function closeRecipeModal() {
  modal.style.display = "none"
  document.body.style.overflow = "auto"
}

// Smooth scroll to menu
function scrollToMenu() {
  document.getElementById("menu").scrollIntoView({
    behavior: "smooth",
  })
}

// Smooth scrolling for navigation links
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
