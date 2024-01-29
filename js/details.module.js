import { UI } from "./ui.module.js";

export class Details {
    constructor() {
        this.ui = new UI();
        this.getLinkName();
        this.getAllMeals();
    };

    //all meals cards
    async getAllMeals() {
        this.showLoader();
        const api = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s`);
        let response = await api.json();
        this.hideLoader();

        ;
    }
    //search with name
    async searchByName(name) {
        this.showLoader();
        const api = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`);
        let response = await api.json();
        this.hideLoader();
        console.log(response);
        this.ui.mealCard(response);
    }
    async searchByLetter(letter) {
        const api = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${letter}`);
        let response = await api.json();
        console.log(response);
        this.hideLoader();
    }
    async listAll(listType) {
        let response;
        if (listType.trim().toLowerCase() === 'area') {
            this.showLoader();
            const api = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`);
            response = await api.json();
            this.hideLoader();
            console.log(response);
        } else if (listType.trim().toLowerCase() === 'ingredients') {
            this.showLoader();
            const api = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`);
            response = await api.json();
            this.hideLoader();
            console.log(response);
        } else if (listType.trim().toLowerCase() === 'categories') {
            this.showLoader();
            const api = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`);
            response = await api.json();
            this.hideLoader();
            console.log(response);
        } else {
            console.error("Invalid list type:", listType);
        }

        return response;
    }
    getLinkName() {
        document.querySelectorAll(".links a").forEach((link) => {
            link.addEventListener("click", () => {
                this.linkName = link.innerHTML;
                this.listAll(this.linkName);

            })
        })
    }
    showLoader() {
        const loader = document.querySelector('.loade');
        if (loader) {
            loader.classList.remove('d-none');
        }
    }

    hideLoader() {
        const loader = document.querySelector('.loade');
        if (loader) {
            loader.classList.add('d-none');
        }
    }

}