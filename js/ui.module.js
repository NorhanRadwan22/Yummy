export class UI {
    constructor() {

    };
    searchSection() {
        const displayElement = document.getElementById('display');
        let displayBox =
            `
            <div class="col-md-10 text-center d-flex justify-content-center align-items-center">
                        <input type="text" class="form-control m-3 " placeholder="Search by name">
                        <input type="text" class="form-control" placeholder="Search with letter">
                    </div>
        `;

        displayElement.innerHTML = displayBox;
    }
    mealCard(data) {
        const displayElement = document.getElementById('display');

        if (!displayElement) {
            console.error("Could not find display element in the HTML.");
            return;
        }

        let displayBox = '';

        if (data && data.meals) {
            for (let i = 0; i < data.meals.length; i++) {
                displayBox += `
                    <div class="col-md-3 p-2" id="home-card">
                                    <div onclick="getMealDetails(${data.meals[i].idMeal})" class="meal position-relative overflow-hidden rounded-2 cursor-pointer">
                                        <img class="w-100" src=${data.meals[i].strMealThumb} alt="" srcset="">
                                        <div class="meal-layer position-absolute d-flex align-items-center text-black p-2">
                                            <h3>${data.meals[i].strMeal}</h3>
                                        </div>
                                    </div>
                            </div>
                    `;
            }
        } else {
            console.error("Invalid data structure from the API:", data);
        }

        displayElement.innerHTML = displayBox;
    }

    categoryCard(data) {
        console.log("Category Data:", data);
        const displayElement = document.getElementById('display');
        if (!displayElement) {
            console.error("Could not find display element in the HTML.");
            return;
        }

        let displayBox = '';
        if (data && data.categories) {
            for (let i = 0; i < data.categories.length; i++) {
                displayBox +=
                    `
                <div class="col-md-3 p-2 100-vh">
                    <div class="row text-center d-flex justify-content-center align-items-center category-item">
                        <div onclick="getCategoryMeals('${data.categories[i].strCategory}')" class="meal position-relative overflow-hidden rounded-2 cursor-pointer">
                            <img class="w-100" src=${data.categories[i].strCategoryThumb} alt="" srcset="">
                            <div class="meal-layer position-absolute text-center text-black p-2">
                                <h3>${data.categories[i].strCategory}</h3>
                                <p>${data.categories[i].strCategoryDescription}</p>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            }
        }

        // Use innerHTML to update the content
        displayElement.innerHTML = displayBox;
    }

    clearDisplay() {
        this.displayElement = document.getElementById('display');
        if (this.displayElement) {
            this.displayElement.innerHTML = '';
        } else {
            console.error("Could not find display element in the HTML.");
        }
    }
    areaCard(data) {
        console.log(data)
        const displayElement = document.getElementById('display');
        if (!displayElement) {
            console.error("Could not find display element in the HTML.");
            return;
        }

        let displayBox = '';

        if (data && data.meals) {
            
            for (let i = 0; i < data.meals.length ; i++) {
                
                displayBox +=
                    `<div class="col-md-3 ps-3 100-vh">
            <div onclick="getAreaMeals('American')" class="rounded-2 text-center cursor-pointer">
                        <i class="fa-solid fa-house-laptop fa-5x"></i>
                        <h3>${data.meals[i].strArea}</h3>
                </div>
                </div>
        `;
            }
        }
        this.displayElement.innerHTML=displayBox;
    }
    ingridientCard(data) {
        const displayElement = document.getElementById('display');
        if (!displayElement) {
            console.error("Could not find display element in the HTML.");
            return;
        }

        let displayBox = '';
        if (data && data.meals) {
            this.counter = 0;
            for (let i = 0; i < data.meals.length && this.counter < 25; i++) {
                this.counter++;
                displayBox +=
                    `<div class="col-md-4 ps-5  p-4">
                <div onclick="getIngredientsMeals('Chicken')" class="rounded-2 text-center cursor-pointer">
                        <i class="fa-solid fa-drumstick-bite fa-4x"></i>
                        <h3>${data.meals[i].strIngredient}</h3>
                        <p class="ingredientDescription card-text">${data.meals[i].strDescription}</p>
                </div>
        </div>
        `;
            }
        }
        this.displayElement.innerHTML = displayBox;
    }
    formCard() {
        const displayElement = document.getElementById('display');
        let displayBox = `
        <div class="contact min-vh-100 d-flex justify-content-center align-items-center">
    <div class="container w-75 text-center">
        <div class="row g-4">
            <div class="col-md-6">
                <input id="nameInput" onkeyup="inputsValidation()" type="text" class="form-control" placeholder="Enter Your Name">
                <div id="nameAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Special characters and numbers not allowed
                </div>
            </div>
            <div class="col-md-6">
                <input id="emailInput" onkeyup="inputsValidation()" type="email" class="form-control " placeholder="Enter Your Email">
                <div id="emailAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Email not valid *exemple@yyy.zzz
                </div>
            </div>
            <div class="col-md-6">
                <input id="phoneInput" onkeyup="inputsValidation()" type="text" class="form-control " placeholder="Enter Your Phone">
                <div id="phoneAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Enter valid Phone Number
                </div>
            </div>
            <div class="col-md-6">
                <input id="ageInput" onkeyup="inputsValidation()" type="number" class="form-control " placeholder="Enter Your Age">
                <div id="ageAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Enter valid age
                </div>
            </div>
            <div class="col-md-6">
                <input id="passwordInput" onkeyup="inputsValidation()" type="password" class="form-control " placeholder="Enter Your Password">
                <div id="passwordAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Enter valid password *Minimum eight characters, at least one letter and one number:*
                </div>
            </div>
            <div class="col-md-6">
                <input id="repasswordInput" onkeyup="inputsValidation()" type="password" class="form-control " placeholder="Repassword">
                <div id="repasswordAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Enter valid repassword
                </div>
            </div>
        </div>
        <button id="submitBtn" disabled="" class="btn btn-outline-danger px-2 mt-3">Submit</button>
    </div>
</div>
        `
        displayElement.innerHTML = displayBox;
    }
}
