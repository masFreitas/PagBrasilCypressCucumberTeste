/// <reference types="cypress"/>

let inquiryText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ipsum magna, pharetra id dolor in, mattis egestas turpis. Integer porta convallis velit'
let bigString = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in nibh id purus consequat ultricies ut sed sem. Proin et ipsum iaculis, volutpat nibh eu, molestie arcu. Proin eget est quis magna sollicitudin ultrices. Etiam quis gravida quam, a porta cras.'
let bigEmail = 'mateusarthurdasilvadefeitastentandocriarumemailcommaisdesentroecinquentacaracteresetabemlongeaindadechegarnofinaldastringgigantequeestasendocriada@gmail.com'
let bigWebsite = 'https://www.mateusarthurdasilvadefeitastentandocriarumemailcommaisdesentroecinquentacaracteresetabemlongeaindadechegarnofinaldastringgigantequeestasendocriadagmailtestetestetestetestetestetestetestetestetestetesteteste.com.br'
let reallyBigText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget tellus lorem. Curabitur efficitur a neque a varius. Ut sodales aliquet nunc, sit amet mattis augue. Cras accumsan urna sit amet felis aliquam laoreet. In congue erat ex, a tristique mi congue ut. Vivamus lacinia, enim ut sollicitudin consequat, purus libero scelerisque lacus, non imperdiet urna est et erat. Duis venenatis ligula ut arcu vulputate gravida vel ac ipsum. Duis quis dictum mi, nec ornare nisl. Integer pellentesque erat est.'

describe('Teste de Formulário a nivel de API', () => {

    //Name
    it('Envio de requisição de formulário com sucesso', () => {
        cy.sendRequest('Mateus', 'email@email.com', 'Google', 'https://www.google.com', '(51)99664-8775', inquiryText)
            .then(res => {
                expect(res.status).to.be.equal(200)
                expect(res.body).to.have.property('sucesso', true)
            })
    })

    it('Envio de requisição de formulário com dados vazios', () => {
        cy.sendRequest(null, null, null, null, null, null)
            .then(res => {
                expect(res.status).to.be.equal(412)
                expect(res.body).to.have.property('sucesso', false)
                expect(res.body).to.have.property('erro', 'Campo Name inválido')
                expect(res.body).to.have.property('erro', 'Campo Email inválido')
                expect(res.body).to.have.property('erro', 'Campo Company inválido')
                expect(res.body).to.have.property('erro', 'Campo Website inválido')
                expect(res.body).to.have.property('erro', 'Campo Phone inválido')
                expect(res.body).to.have.property('erro', 'Campo Inquiry inválido')
            })
    })

    it('Envio de requisição de formulário com Name não preenchido', () => {
        cy.sendRequest(null, 'email@email.com', 'Google', 'https://www.google.com', '(51)99664-8775', inquiryText)
            .then(res => {
                expect(res.status).to.be.equal(412)
                expect(res.body).to.have.property('sucesso', false)
                expect(res.body).to.have.property('erro', 'Campo Name inválido')
            })
    })

    it('Preenchimento da requisição do formulário com Name maior que 255 caracteres', () => {
        cy.sendRequest(bigString, 'email@email.com', 'Google', 'https://www.google.com', '(51)99664-8775', inquiryText)
            .then(res => {
                expect(res.status).to.be.equal(412)
                expect(res.body).to.have.property('sucesso', false)
                expect(res.body).to.have.property('erro', 'Campo Name inválido')
            })
    })

    it('Preenchimento da requisição do formulário com Name com caracteres especiais', () => {
        cy.sendRequest('@*!@(@&!', 'email@email.com', 'Google', 'https://www.google.com', '(51)99664-8775', inquiryText)
            .then(res => {
                expect(res.status).to.be.equal(412)
                expect(res.body).to.have.property('sucesso', false)
                expect(res.body).to.have.property('erro', 'Campo Name inválido')
            })
    })

    //Email
    it('Envio de requisição de formulário com Email não preenchido', () => {
        cy.sendRequest('Mateus', null, 'Google', 'https://www.google.com', '(51)99664-8775', inquiryText)
            .then(res => {
                expect(res.status).to.be.equal(412)
                expect(res.body).to.have.property('sucesso', false)
                expect(res.body).to.have.property('erro', 'Campo Email inválido')
            })
    })

    it('Preenchimento da requisição do formulário com Email maior que 150 caracteres', () => {
        cy.sendRequest('Mateus', bigEmail, 'Google', 'https://www.google.com', '(51)99664-8775', inquiryText)
            .then(res => {
                expect(res.status).to.be.equal(412)
                expect(res.body).to.have.property('sucesso', false)
                expect(res.body).to.have.property('erro', 'Campo Email inválido')
            })
    })

    it('Envio de requisição de formulário com Email inválido', () => {
        cy.sendRequest('Mateus', '*&* 8&*.com', 'Google', 'https://www.google.com', '(51)99664-8775', inquiryText)
            .then(res => {
                expect(res.status).to.be.equal(412)
                expect(res.body).to.have.property('sucesso', false)
                expect(res.body).to.have.property('erro', 'Campo Email inválido')
            })
    })

    //Company
    it('Envio de requisição de formulário com Company não preenchido', () => {
        cy.sendRequest('Mateus', 'email@email.com', null, 'https://www.google.com', '(51)99664-8775', inquiryText)
            .then(res => {
                expect(res.status).to.be.equal(412)
                expect(res.body).to.have.property('sucesso', false)
                expect(res.body).to.have.property('erro', 'Campo Company inválido')
            })
    })

    it('Preenchimento da requisição do formulário com Company maior que 200 caracteres', () => {
        cy.sendRequest('Mateus', 'email@email.com', bigString, 'https://www.google.com', '(51)99664-8775', inquiryText)
            .then(res => {
                expect(res.status).to.be.equal(412)
                expect(res.body).to.have.property('sucesso', false)
                expect(res.body).to.have.property('erro', 'Campo Company inválido')
            })
    })

    //Website
    it('Envio de requisição de formulário com Website não preenchido', () => {
        cy.sendRequest('Mateus', 'email@email.com', 'Google', null, '(51)99664-8775', inquiryText)
            .then(res => {
                expect(res.status).to.be.equal(412)
                expect(res.body).to.have.property('sucesso', false)
                expect(res.body).to.have.property('erro', 'Campo Website inválido')
            })
    })

    it('Preenchimento da requisição do formulário com Website maior que 200 caracteres', () => {
        cy.sendRequest('Mateus', 'email@email.com', 'Google', bigWebsite, '(51)99664-8775', inquiryText)
            .then(res => {
                expect(res.status).to.be.equal(412)
                expect(res.body).to.have.property('sucesso', false)
                expect(res.body).to.have.property('erro', 'Campo Website inválido')
            })
    })

    it('Envio de requisição de formulário com Website inválido', () => {
        cy.sendRequest('Mateus', 'email@email.com', 'Google', 'https:///www . com', '(51)99664-8775', inquiryText)
            .then(res => {
                expect(res.status).to.be.equal(412)
                expect(res.body).to.have.property('sucesso', false)
                expect(res.body).to.have.property('erro', 'Campo Website inválido')
            })
    })

    //Phone
    it('Envio de requisição de formulário com Phone não preenchido', () => {
        cy.sendRequest('Mateus', 'email@email.com', 'Google', 'https://www.google.com', null, inquiryText)
            .then(res => {
                expect(res.status).to.be.equal(412)
                expect(res.body).to.have.property('sucesso', false)
                expect(res.body).to.have.property('erro', 'Campo Phone inválido')
            })
    })

    it('Preenchimento da requisição do formulário com Phone maior que 15 caracteres', () => {
        cy.sendRequest('Mateus', 'email@email.com', 'Google', 'https://www.google.com', '519966555151315', inquiryText)
            .then(res => {
                expect(res.status).to.be.equal(412)
                expect(res.body).to.have.property('sucesso', false)
                expect(res.body).to.have.property('erro', 'Campo Phone inválido')
            })
    })

    it('Preenchimento da requisição do formulário com Phone com letras e caracteres especiais', () => {
        cy.sendRequest('Mateus', 'email@email.com', 'Google', 'https://www.google.com', 'aasd¨@!*!¨@*', inquiryText)
            .then(res => {
                expect(res.status).to.be.equal(412)
                expect(res.body).to.have.property('sucesso', false)
                expect(res.body).to.have.property('erro', 'Campo Phone inválido')
            })
    })

    //Inquiry
    it('Envio de requisição de formulário com Inquiry não preenchido', () => {
        cy.sendRequest('Mateus', 'email@email.com', 'Google', 'https://www.google.com', '(51)99664-8775', null)
            .then(res => {
                expect(res.status).to.be.equal(412)
                expect(res.body).to.have.property('sucesso', false)
                expect(res.body).to.have.property('erro', 'Campo Inquiry inválido')
            })
    })

    it('Preenchimento da requisição do formulário com Inquiry maior que 500 caracteres', () => {
        cy.sendRequest('Mateus', 'email@email.com', 'Google', 'https://www.google.com', '(51)99664-8775', reallyBigText)
            .then(res => {
                expect(res.status).to.be.equal(412)
                expect(res.body).to.have.property('sucesso', false)
                expect(res.body).to.have.property('erro', 'Campo Inquiry inválido')
            })
    })
})