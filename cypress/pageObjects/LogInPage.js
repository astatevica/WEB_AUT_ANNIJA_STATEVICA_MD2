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

    static setSeoul(){
        return cy.get("select").select("Seoul CURA Healthcare Center");
    }

    static get hospitalRead(){
        return cy.get("#chk_hospotal_readmission");
    }

    static get medicaid(){
        return cy.get("input#radio_program_medicaid");
    }
 
    static selectDate() {
        let selectedDate;
        cy.get("#txt_visit_date").click();
        cy.get(".datepicker").contains("30").click();
        cy.get("#txt_visit_date").invoke("val").then(date => {
            selectedDate = date;
        });
        return selectedDate;
    }

    static comment(text){
        cy.get("textarea[id='txt_comment']").clear({force: true}).type(text, {force: true});
    }

    static get bookAppointment(){
        return cy.get("button#btn-book-appointment");
    }
}