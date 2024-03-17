import { BasePage } from "./BasePage";

export class LogInPage extends BasePage {

    static get setUsername(){
        return cy.get("input#txt-username");
    }

    static get setPassword(){
        return cy.get("input#txt-password");
    }

    static get loginButton(){
        return cy.get("button#btn-login");
    }

    static get setFacility(){
        return cy.get("[class='form-control']");
    }

    static get setSeoul(){
        return cy.get("[value='Seoul CURA Healthcare Center']");
    }

    static get hospitalRead(){
        return cy.get("#chk_hospotal_readmission");
    }

    static get medicaid(){
        return cy.get("input#radio_program_medicaid");
    }

    static get inputDate(){
        return cy.get("#txt_visit_date");
    }

    static get comment(){
        return cy.get("input[id='txt_comment']");
    }
}