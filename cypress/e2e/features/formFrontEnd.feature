Feature: Formulário de dúvidas
    Eu como usuário
    Quero enviar o formulário de dúvidas
    Para sanar minhas dúvidas com a empresa

    Background: Acesso formulário
        Given que acesso a tela do formulário

    Scenario: Envio de formulário com sucesso
        Given preencho todos os campos corretamente
        When clico no botão de enviar
        Then o formulário é enviado com sucesso

    #Validações Name

    Scenario: Envio de formulário com Name não preenchido
        Given não preencho o campo Name
        When clico no botão de enviar
        Then o sistema exibe a mensagem de erro "Campo Name inválido"

    Scenario: Preenchimento do formulário com Name maior que 255 caracteres
        Given preencho o campo Name com mais de 255 caracteres
        When clico no botão de enviar
        Then o sistema exibe a mensagem de erro "Campo Name inválido"

    Scenario: Preenchimento do formulário com Name com caracteres especiais
        Given preencho o campo Name com caracteres especiais
        When clico no botão de enviar
        Then o sistema exibe a mensagem de erro "Campo Name inválido"

    #Validações Email

    Scenario: Envio de formulário com Email não preenchido
        Given não preencho o campo Email
        When clico no botão de enviar
        Then o sistema exibe a mensagem de erro "Campo Email inválido"

    Scenario: Preenchimento do formulário com Email maior que 150 caracteres
        Given preencho o campo Email com mais de 150 caracteres
        When clico no botão de enviar
        Then o sistema exibe a mensagem de erro "Campo Email inválido"

    Scenario: Envio de formulário com Email inválido
        Given preencho o campo email com dados inválidos
        When clico no botão de enviar
        Then o sistema exibe a mensagem de erro "Campo Email inválido"

    #Validações Company

    Scenario: Envio de formulário com Company não preenchido
        Given não preencho o campo Company
        When clico no botão de enviar
        Then o sistema exibe a mensagem de erro "Campo Company inválido"

    Scenario: Preenchimento do formulário com Company maior que 200 caracteres
        Given preencho o campo Company com mais de 200 caracteres
        When clico no botão de enviar
        Then o sistema exibe a mensagem de erro "Campo Company inválido"

    #Validações Website

    Scenario: Envio de formulário com Website não preenchido
        Given não preencho o campo Website
        When clico no botão de enviar
        Then o sistema exibe a mensagem de erro "Campo Website inválido"

    Scenario: Preenchimento do formulário com Website maior que 200 caracteres
        Given preencho o campo Website com mais de 200 caracteres
        When clico no botão de enviar
        Then o sistema exibe a mensagem de erro "Campo Website inválido"

    Scenario: Envio de formulário com Website inválido
        Given preencho o campo Website com dados inválidos
        When clico no botão de enviar
        Then o sistema exibe a mensagem de erro "Campo Website inválido"

    #Validações Phone

    Scenario: Envio de formulário com Phone não preenchido
        Given não preencho o campo Phone
        When clico no botão de enviar
        Then o sistema exibe a mensagem de erro "Campo Phone inválido"

    Scenario: Preenchimento do formulário com Phone maior que 15 caracteres
        Given preencho o campo Phone com mais de 15 caracteres
        When clico no botão de enviar
        Then o sistema exibe a mensagem de erro "Campo Phone inválido"

    Scenario: Preenchimento do formulário com Phone com letras e caracteres especiais
        Given preencho o campo Phone com letras e caracteres especiais
        When clico no botão de enviar
        Then o sistema exibe a mensagem de erro "Campo Phone inválido"

    #Validações Inquiry

    Scenario: Envio de formulário com Inquiry não preenchido
        Given não preencho o campo Inquiry
        When clico no botão de enviar
        Then o sistema exibe a mensagem de erro "Campo Inquiry inválido"

    Scenario: Preenchimento do formulário com Inquiry maior que 500 caracteres
        Given preencho o campo Inquiry com mais de 500 caracteres
        When clico no botão de enviar
        Then o sistema exibe a mensagem de erro "Campo Inquiry inválido"
