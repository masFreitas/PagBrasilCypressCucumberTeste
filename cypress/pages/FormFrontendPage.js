class FormPage {
  input = {
    nameInput: () => cy.get("#Name"),
    emailInput: () => cy.get("#Email"),
    companyInput: () => cy.get("#Company"),
    websiteInput: () => cy.get("#Website"),
    phoneInput: () => cy.get("#Phone"),
  }
  textarea = {
    inquiryTextArea: () => cy.get("#Inquiry")
  }
  button = {
    submitButton: () => cy.get("#submitForm")
  }
  text = {
    formTitle: () => cy.get("#formTitle")
  }
  message = {
    errorMessage: () => cy.get("#Error"),
    successMessage: () => cy.get("#successMessage")
  }

  verifyPageLoad() {
    let formTitleText = "I'm already using PagBrasil and have questions"
    this.text.formTitle().should('contain', formTitleText)
  }

  fillNameField(name) {
    this.input.nameInput().type(name)
  }

  fillEmailField(email) {
    this.input.emailInput().type(email)
  }

  fillCompanyField(company) {
    this.input.companyInput().type(company)
  }

  fillWebsiteField(website) {
    this.input.websiteInput().type(website)
  }

  fillPhoneField(phone) {
    this.input.phoneInput().type(phone)
  }

  fillInquiryField(inquiryText) {
    this.textarea.inquiryTextArea().type(inquiryText)
  }

  clickSendButton() {
    this.button.submitButton().click()
  }

  checkErrorMessage(message) {
    this.message.errorMessage().should('contain', message)
  }

  checkSuccessMessage() {
    this.message.successMessage().should('contain', 'Formulário enviado com sucesso!')
  }

}

export const formPage = new FormPage();
