import { Details } from "./details.module.js";
import { UI } from "./ui.module.js";

export class Home {
    constructor() {
        this.ui = new UI();
        this.details = new Details();
        this.navSideBar();
        this.displayNavItems();


    };
    navSideBar() {
        const closeBtn = document.getElementById('option');
        let menuWidth = $('#menu').outerWidth();
        const $menu = $('aside');
        const $closeBtn = $('#option');

        // Initially hide the menu
        $menu.css({ left: `-${menuWidth}px` });

        closeBtn.addEventListener('click', () => {
            if (menuWidth > 0) {
                // If the menu is visible, hide it
                console.log('first if');
                $menu.animate({ left: `-${menuWidth}px` });
                menuWidth = -menuWidth;
                console.log($menu.outerWidth());
            } else {
                // If the menu is hidden, show it
                console.log('else con');
                $menu.show().animate({ left: '0px' });
                $closeBtn.show(); // Show the close button
                menuWidth = Math.abs(menuWidth);
            }
        });
    }



    async getMeal() {
        const api = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s`);
        let response = await api.json();
        console.log(response);
        this.ui.mealCard(response);

    }
    async displayNavItems() {
        this.name = '';
        this.getMeal();
        document.querySelectorAll('.links a').forEach((link) => {
            link.addEventListener('click', async (e) => {
                this.name = e.target.innerHTML.trim().toLowerCase();
                if (this.name === 'search') {
                    this.ui.clearDisplay();
                    this.ui.searchSection();
                } else if (this.name === 'categories') {
                    this.ui.clearDisplay();
                    this.response = await this.details.listAll(this.name);
                    this.ui.categoryCard(this.response);
                } else if (this.name === 'area') {
                    this.ui.clearDisplay();
                    this.response = await this.details.listAll(this.name);
                    this.ui.areaCard(this.response);
                } else if (this.name === 'ingredients') {
                    this.ui.clearDisplay();
                    this.response = await this.details.listAll(this.name);
                    this.ui.ingridientCard(this.response);
                } else if (this.name === 'contact us') {
                    this.ui.clearDisplay();
                    this.ui.formCard();
                    // Call the function for Contact Us section if available in UI class
                }
            })
        })

    }
}
