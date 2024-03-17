import { BasePage } from "./BasePage";

export class HomePage extends BasePage {
    
    static get clickOnMenu(){
        return cy.get("#menu-toggle");
    }

    static get clickLogin(){
        return cy.get("#sidebar-wrapper");
    }
    
  
  }