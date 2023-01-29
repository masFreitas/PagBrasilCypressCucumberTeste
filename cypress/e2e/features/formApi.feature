Feature: Validação do formulário de dúvidas através da API
    Eu como usuário da API
    Quero enviar o formulário de dúvidas via requisição
    Para sanar minhas dúvidas com a empresa

    Scenario: Envio de requisição de formulário com sucesso
        Given envio requisição todos os dados corretamente
        Then recebo a response com o status code 200
        And recebo um body com o atributo sucesso true

    Scenario: Envio de requisição de formulário com dados vazios
        Given não preencho os dados da requisição
        Then recebo a response com o status code 412
        And o sistema exibe a mensagem de erro "Campo Name inválido"
        And o sistema exibe a mensagem de erro "Campo Email inválido"
        And o sistema exibe a mensagem de erro "Campo Company inválido"
        And o sistema exibe a mensagem de erro "Campo Website inválido"
        And o sistema exibe a mensagem de erro "Campo Phone inválido"
        And o sistema exibe a mensagem de erro "Campo Inquiry inválido"

    #Validações Name

    Scenario: Envio de requisição de formulário com Name não preenchido
        Given envio a requisição sem preencher o Name
        Then recebo a response com o status code 412
        And recebo um body com o atributo sucesso false
        And recebo um body com o atributo erro "Campo Name inválido"

    Scenario: Preenchimento da requisição do formulário com Name maior que 255 caracteres
        Given envio a requisição com campo Name com mais de 255 caracteres
        Then recebo a response com o status code 412
        And recebo um body com o atributo sucesso false
        And recebo um body com o atributo erro "Campo Name inválido"

    Scenario: Preenchimento da requisição do formulário com Name com caracteres especiais
        Given envio a requisição com campo Name com caracteres especiais
        Then recebo a response com o status code 412
        And recebo um body com o atributo sucesso false
        And recebo um body com o atributo erro "Campo Name inválido"

    #Validações Email

    Scenario: Envio de requisição de formulário com Email não preenchido
        Given envio a requisição sem preencher o Email
        Then recebo a response com o status code 412
        And recebo um body com o atributo sucesso false
        And recebo um body com o atributo erro "Campo Email inválido"

    Scenario: Preenchimento da requisição do formulário com Email maior que 150 caracteres
        Given envio a requisição com campo Email com mais de 150 caracteres
        Then recebo a response com o status code 412
        And recebo um body com o atributo sucesso false
        And recebo um body com o atributo erro "Campo Email inválido"

    Scenario: Envio de requisição de formulário com Email inválido
        Given envio a requisição com campo email com dados inválidos
        Then recebo a response com o status code 412
        And recebo um body com o atributo sucesso false
        And recebo um body com o atributo erro "Campo Email inválido"

    #Validações Company

    Scenario: Envio de requisição de formulário com Company não preenchido
        Given envio a requisição sem preencher Company
        Then recebo a response com o status code 412
        And recebo um body com o atributo sucesso false
        And recebo um body com o atributo erro "Campo Company inválido"

    Scenario: Preenchimento da requisição do formulário com Company maior que 200 caracteres
        Given envio a requisição com campo Company com mais de 200 caracteres
        Then recebo a response com o status code 412
        And recebo um body com o atributo sucesso false
        And recebo um body com o atributo erro "Campo Company inválido"

    #Validações Website

    Scenario: Envio de requisição de formulário com Website não preenchido
        Given envio a requisição sem preencher Website
        Then recebo a response com o status code 412
        And recebo um body com o atributo sucesso false
        And recebo um body com o atributo erro "Campo Website inválido"

    Scenario: Preenchimento da requisição do formulário com Website maior que 200 caracteres
        Given envio a requisição com campo Website com mais de 200 caracteres
        Then recebo a response com o status code 412
        And recebo um body com o atributo sucesso false
        And recebo um body com o atributo erro "Campo Website inválido"

    Scenario: Envio de requisição de formulário com Website inválido
        Given envio a requisição com campo Website com dados inválidos
        Then recebo a response com o status code 412
        And recebo um body com o atributo sucesso false
        And recebo um body com o atributo erro "Campo Website inválido"

    #Validações Phone

    Scenario: Envio de requisição de formulário com Phone não preenchido
        Given envio a requisição sem preencher Phone
        Then recebo a response com o status code 412
        And recebo um body com o atributo sucesso false
        And recebo um body com o atributo erro "Campo Phone inválido"

    Scenario: Preenchimento da requisição do formulário com Phone maior que 15 caracteres
        Given envio a requisição com campo Phone com mais de 15 caracteres
        Then recebo a response com o status code 412
        And recebo um body com o atributo sucesso false
        And recebo um body com o atributo erro "Campo Phone inválido"

    Scenario: Preenchimento da requisição do formulário com Phone com letras e caracteres especiais
        Given envio a requisição com campo Phone com letras e caracteres especiais
        Then recebo a response com o status code 412
        And recebo um body com o atributo sucesso false
        And recebo um body com o atributo erro "Campo Phone inválido"

    #Validações Inquiry

    Scenario: Envio de requisição de formulário com Inquiry não preenchido
        Given não preencho o campo Inquiry
        Then recebo a response com o status code 412
        And recebo um body com o atributo sucesso false
        And recebo um body com o atributo erro "Campo Inquiry inválido"

    Scenario: Preenchimento da requisição do formulário com Inquiry maior que 500 caracteres
        Given envio a requisição com campo Inquiry com mais de 500 caracteres
        Then recebo a response com o status code 412
        And recebo um body com o atributo sucesso false
        And recebo um body com o atributo erro "Campo Inquiry inválido"
