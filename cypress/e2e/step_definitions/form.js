import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { formPage } from '@pages/FormPage'

let inquiryText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ipsum magna, pharetra id dolor in, mattis egestas turpis. Integer porta convallis velit'
let bigString = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in nibh id purus consequat ultricies ut sed sem. Proin et ipsum iaculis, volutpat nibh eu, molestie arcu. Proin eget est quis magna sollicitudin ultrices. Etiam quis gravida quam, a porta cras.'
let bigEmail = 'mateusarthurdasilvadefeitastentandocriarumemailcommaisdesentroecinquentacaracteresetabemlongeaindadechegarnofinaldastringgigantequeestasendocriada@gmail.com'
let bigWebsite = 'https://www.mateusarthurdasilvadefeitastentandocriarumemailcommaisdesentroecinquentacaracteresetabemlongeaindadechegarnofinaldastringgigantequeestasendocriadagmailtestetestetestetestetestetestetestetestetestetesteteste.com.br'
let reallyBigText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget tellus lorem. Curabitur efficitur a neque a varius. Ut sodales aliquet nunc, sit amet mattis augue. Cras accumsan urna sit amet felis aliquam laoreet. In congue erat ex, a tristique mi congue ut. Vivamus lacinia, enim ut sollicitudin consequat, purus libero scelerisque lacus, non imperdiet urna est et erat. Duis venenatis ligula ut arcu vulputate gravida vel ac ipsum. Duis quis dictum mi, nec ornare nisl. Integer pellentesque erat est.'

Given("que acesso a tela do formulário", () => {
    cy.visit('/');
    formPage.verifyPageLoad()
});

Given("preencho todos os campos corretamente", () => {
    formPage.fillNameField('Mateus')
    formPage.fillEmailField('mateus@gmail.com')
    formPage.fillCompanyField('Google')
    formPage.fillWebsiteField('https://www.google.com/')
    formPage.fillPhoneField('(51)91234-9999')
    formPage.fillInquiryField(inquiryText)
});

When("clico no botão de enviar", () => {
    formPage.clickSendButton()
});

Then("o formulário é enviado com sucesso", () => {
    formPage.checkSuccessMessage()
})

Given("não preencho o campo Name", () => {
    formPage.fillEmailField('mateus@gmail.com')
    formPage.fillCompanyField('Google')
    formPage.fillWebsiteField('https://www.google.com/')
    formPage.fillPhoneField('(51)91234-9999')
    formPage.fillInquiryField(inquiryText)
});

Then("o sistema exibe a mensagem de erro {string}", (message) => {
    formPage.checkErrorMessage(message)
});


Given("preencho o campo Name com mais de 255 caracteres", () => {
    formPage.fillNameField(bigString)
    formPage.fillEmailField('mateus@gmail.com')
    formPage.fillCompanyField('Google')
    formPage.fillWebsiteField('https://www.google.com/')
    formPage.fillPhoneField('(51)91234-9999')
    formPage.fillInquiryField(inquiryText)
});

Given("preencho o campo Name com caracteres especiais", () => {
    formPage.fillNameField('#@&*#(&!@&*(&')
    formPage.fillEmailField('mateus@gmail.com')
    formPage.fillCompanyField('Google')
    formPage.fillWebsiteField('https://www.google.com/')
    formPage.fillPhoneField('(51)91234-9999')
    formPage.fillInquiryField(inquiryText)
});

Given("não preencho o campo Email", () => {
    formPage.fillNameField('Mateus')
    formPage.fillCompanyField('Google')
    formPage.fillWebsiteField('https://www.google.com/')
    formPage.fillPhoneField('(51)91234-9999')
    formPage.fillInquiryField(inquiryText)
});

Given("preencho o campo Email com mais de 150 caracteres", () => {
    formPage.fillNameField('Mateus')
    formPage.fillEmailField(bigEmail)
    formPage.fillCompanyField('Google')
    formPage.fillWebsiteField('https://www.google.com/')
    formPage.fillPhoneField('(51)91234-9999')
    formPage.fillInquiryField(inquiryText)
});

Given("preencho o campo email com dados inválidos", () => {
    formPage.fillNameField('Mateus')
    formPage.fillEmailField('mateus freitas$.com')
    formPage.fillCompanyField('Google')
    formPage.fillWebsiteField('https://www.google.com/')
    formPage.fillPhoneField('(51)91234-9999')
    formPage.fillInquiryField(inquiryText)
});

Given("não preencho o campo Company", () => {
    formPage.fillEmailField('mateus@gmail.com')
    formPage.fillCompanyField('Google')
    formPage.fillWebsiteField('https://www.google.com/')
    formPage.fillPhoneField('(51)91234-9999')
    formPage.fillInquiryField(inquiryText)
});

Given("preencho o campo Company com mais de 200 caracteres", () => {
    formPage.fillEmailField('mateus@gmail.com')
    formPage.fillCompanyField('Google')
    formPage.fillWebsiteField('https://www.google.com/')
    formPage.fillPhoneField('(51)91234-9999')
    formPage.fillCompanyField(bigString)
    formPage.fillInquiryField(inquiryText)
});

Given("não preencho o campo Website", () => {
    formPage.fillEmailField('mateus@gmail.com')
    formPage.fillCompanyField('Google')
    formPage.fillPhoneField('(51)91234-9999')
    formPage.fillInquiryField(inquiryText)
});

Given("preencho o campo Website com mais de 200 caracteres", () => {
    formPage.fillEmailField('mateus@gmail.com')
    formPage.fillCompanyField('Google')
    formPage.fillWebsiteField(bigWebsite)
    formPage.fillPhoneField('(51)91234-9999')
    formPage.fillInquiryField(inquiryText)
});

Given("preencho o campo Website com dados inválidos", () => {
    formPage.fillEmailField('mateus@gmail.com')
    formPage.fillCompanyField('Google')
    formPage.fillWebsiteField('https://www. google')
    formPage.fillPhoneField('(51)91234-9999')
    formPage.fillInquiryField(inquiryText)
});

Given("não preencho o campo Phone", () => {
    formPage.fillNameField('Mateus')
    formPage.fillEmailField('mateus@gmail.com')
    formPage.fillCompanyField('Google')
    formPage.fillWebsiteField('https://www.google.com/')
    formPage.fillInquiryField(inquiryText)
});

Given("preencho o campo Phone com mais de 15 caracteres", () => {
    formPage.fillNameField('Mateus')
    formPage.fillEmailField('mateus@gmail.com')
    formPage.fillCompanyField('Google')
    formPage.fillWebsiteField('https://www.google.com/')
    formPage.fillPhoneField('(51)91234-9999651651')
    formPage.fillInquiryField(inquiryText)
});

Given("preencho o campo Phone com letras e caracteres especiais", () => {
    formPage.fillNameField('Mateus')
    formPage.fillEmailField('mateus@gmail.com')
    formPage.fillCompanyField('Google')
    formPage.fillWebsiteField('https://www.google.com/')
    formPage.fillPhoneField('a1&#$* 7123')
    formPage.fillInquiryField(inquiryText)
});

Given("não preencho o campo Inquiry", () => {
    formPage.fillNameField('Mateus')
    formPage.fillEmailField('mateus@gmail.com')
    formPage.fillCompanyField('Google')
    formPage.fillWebsiteField('https://www.google.com/')
    formPage.fillPhoneField('(51)91234-9999')
});

Given("preencho o campo Inquiry com mais de 500 caracteres", () => {
    formPage.fillNameField('Mateus')
    formPage.fillEmailField('mateus@gmail.com')
    formPage.fillCompanyField('Google')
    formPage.fillWebsiteField('https://www.google.com/')
    formPage.fillPhoneField('(51)91234-9999')
    formPage.fillInquiryField(reallyBigText)
});
