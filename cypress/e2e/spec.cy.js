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
      //TODO jāpabeidz šis
      //LogInPage.setFacility.click({ multiple: true });
      LogInPage.setSeoul.click({force: true});
      //Check - Apply for hospital readmission
      LogInPage.hospitalRead.click();
      //Select - Medicaid
      LogInPage.medicaid.click();
      //Set Date value by using the widget - 30
      //TODO pabeigt datumu
      LogInPage.inputDate.type('28-04-2000');
      //Set comment - CURA Healthcare Service
      LogInPage.comment.type("CURA Healthcare Service");
      //Click - Book Appointment
      //Validate that previously set values are correct

    })

  

  })
})