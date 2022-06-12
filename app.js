let dishes = [

    {
        name: "Hamburger",
        price: 20.99,
        category: "fast food",
        image: "https://images.unsplash.com/photo-1508736793122-f516e3ba5569?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80",
        ingredients: "meat, cheese, onion, bread"
    },
    {
        name: "Buffalo hot wings",
        price: 22,
        category: "fast food",
        image: "https://images.unsplash.com/photo-1608039755401-742074f0548d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80",
        ingredients: "meat, cheese, onion, bread"
    },
    {
        name: "American Hot Dogs",
        price: 25,
        category: "fast food",
        image: "https://images.unsplash.com/photo-1496905583330-eb54c7e5915a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        ingredients: "meat, cheese, onion, bread"
    },
    {
        name: "Strawberry juice",
        price: 10,
        category: "drinks",
        image: "https://images.unsplash.com/photo-1497534446932-c925b458314e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80",
        ingredients: "meat, cheese, onion, bread"
    }, {
        name: "Kombucha",
        price: 27,
        category: "drinks",
        image: "https://images.unsplash.com/photo-1597403491447-3ab08f8e44dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=675&q=80",
        ingredients: "meat, cheese, onion, bread"
    }, {
        name: "Mango Juice",
        price: 50,
        category: "drinks",
        image: "https://images.unsplash.com/photo-1546173159-315724a31696?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        ingredients: "meat, cheese, onion, bread"
    }, {
        name: "Donut",
        price: 5,
        category: "sweets",
        image: "https://images.unsplash.com/photo-1551106652-a5bcf4b29ab6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80",
        ingredients: "meat, cheese, onion, bread"
    }, {
        name: "Willy Wonka",
        price: 20.99,
        category: "sweets",
        image: "https://images.unsplash.com/photo-1600359756098-8bc52195bbf4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
        ingredients: "meat, cheese, onion, bread"
    }, {
        name: "Strawberry",
        price: 8,
        category: "sweets",
        image: "https://images.unsplash.com/photo-1558234469-50fc184d1cc9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        ingredients: "meat, cheese, onion, bread"
    },
];

const consoleElem = (elem) => {
    console.log(elem);
}
let dish_container = document.getElementById("dish-container");
const render_dishes = (array) => {
    dish_container.innerHTML = "";
    for (let index = 0; index < array.length; index++) {
        let dish = array[index];
        let dish_element = document.createElement("div");
        dish_element.className = "dish";
        dish_element.id = "dish";
        dish_element.innerHTML = `
            <div class="img-dish">
                <img src="${
            dish.image
        }"alt = "${
            dish.name
        }" >
            </div>
            <div class="dish-title" >
            <h2 class = "name" id="dish-name" >${
            dish.name
        }</h2>
             <span class = "price" id="dish-price" >${
            dish.price
        }</span> 
             </div>
             <p class = "ingredients" id="dish-ingredients">${
            dish.ingredients
        }</p> 
             <p class = "category" id="dish-category">${
            dish.category
        } </p>

        `;
        dish_container.appendChild(dish_element);
    }
    if (window.matchMedia("(min-width: 992px)").matches) {
        let countVal = dish_container.children.length;
        console.log(countVal); // equal: 9

        if (countVal === 1) {
            dish_container.style.gridTemplateColumns = "350px 350px 350px";
            dish_container.style.justifyContent = "center";
        }

    }
}
render_dishes(dishes);

// Search Event
let search_form = document.querySelector("#search-form");
search_form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(e.target.elements.search.value);
    render_dishes(dishes.filter((dish) => {
        return dish.name.toLowerCase().includes(e.target.elements.search.value.toLowerCase()) || dish.price == e.target.elements.search.value;
    }));
});

let dish_row = document.querySelectorAll(".dish");
let dish_select = document.querySelector("select");
dish_select.addEventListener("change", (e) => {
    console.log(e.target.value);
    let category = e.target.value.toLowerCase().trim();
    let filtered_dishes = dishes.filter((dish) => {
        return dish.category === category;
    });
    render_dishes(filtered_dishes);
});

// Add Form
// new dish values (n_d)
let add_dish_form = document.querySelector(".add-form-box");

add_dish_form.addEventListener("submit", (e) => {
    e.preventDefault();
    let n_d_name = document.querySelector("#n-d-name").value;
    console.log(n_d_name);
    let n_d_price = document.querySelector("#n-d-price").value;
    let n_d_category = document.querySelector("#n-d-category").value;
    let n_d_ingredients = document.querySelector("#n-d-ingredients").value;
    let n_d_image = document.querySelector("#n-d-image").value;

    new_dish = {
        name: n_d_name,
        price: n_d_price,
        category: n_d_category,
        ingredients: n_d_ingredients,
        image: n_d_image
    }
    dishes.push(new_dish);
    render_dishes(dishes);
});