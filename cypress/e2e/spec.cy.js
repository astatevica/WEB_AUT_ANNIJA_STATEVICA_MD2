const { AppValidPage } = require("../pageObjects/AppValidPage");
const { BasePage } = require("../pageObjects/BasePage");
const { HomePage } = require("../pageObjects/HomePage");
const { LogInPage } = require("../pageObjects/LogInPage");

describe("Elements", () => {
  context("Scenarios", () => {
    beforeEach(() => {
      BasePage.visit();
    })


    it('Make an Appointment', () => {
      //Click - Make Appointment
      HomePage.clickOnMenu.click();
      //Click - Login
      HomePage.clickLogin.contains("Login").click();
      //Set username and password fields with the demo account credentials   
      LogInPage.setUsername.type('John Doe');
      LogInPage.setPassword.type('ThisIsNotAPassword');
      LogInPage.loginButton.click();
      //Set the following values:
      //Facility - Seoul CURA Healthcare Center
      LogInPage.setSeoul();
      //Check - Apply for hospital readmission
      LogInPage.hospitalRead.click();
      //Select - Medicaid
      LogInPage.medicaid.click();
      //Set Date value by using the widget - 30
      let dateSelected = LogInPage.selectDate(); 
      //Set comment - CURA Healthcare Service
      LogInPage.comment("CURA Healthcare Service");
      //Click - Book Appointment
      LogInPage.bookAppointment.click();
      //Validate that previously set values are correct
      AppValidPage.facility.should('contain','Seoul CURA Healthcare Center');
      AppValidPage.readmission.should('contain','Yes');
      AppValidPage.program.should('contain','Medicaid');
      //AppValidPage.visitDate.should('contain',dateSelected);
      if (dateSelected) {
        AppValidPage.visitDate.should('contain', let);
      } else {
        cy.log("Date selection failed or returned undefined." + dateSelected);
      }
      AppValidPage.comment.should('contain','CURA Healthcare Service');
    })

  

  })
})