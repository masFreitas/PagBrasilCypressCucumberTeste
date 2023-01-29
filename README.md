# Teste PagBrasil

Projeto com Cypress + Cucumber.

---
## Necessário:

- [Node](https://nodejs.org/en/)
- IDE ([VSCode](https://code.visualstudio.com/))

Clonar o projeto, e rodar o comando abaixo na pasta clonada, para instalar as dependências

```cmd
npm i
```
---

## Utilização
Para rodar o Cypress, podemos utilizar o comando

```cmd
 npx cypress open
```
---
## Estrutura do projeto:

### Testes funcionais interface gráfica:
> Testes estrutuados page objects (POO)
- Pasta cypress/e2e/features possuem os casos de testes escritos em BDD/Gherkin
- Pasta cypress/e2e/step_definitions possuem os steps criados pelo cucumber para rodar os testes
- Pasta cypress/pages possuem os elementos e métodos abstraídos. Estes métodos são utilizados em step_definitions

### Testes de API:
> Para estes testes não utilizei POO
- Arquivo cypress/e2e/formApi.cy.js possuem os testes de API
- Pasta cypress/e2e/features possuem os casos de testes escritos em BDD/Gherkin
- Arquivo cypress\support\commands.js possui o comando sendRequest, que recebe por parâmetro os campos do formulário, para realizar a requisição para a API.

--- 

## Algumas observações:
> Testes funcionais interface gráfica:
- No documento do teste, o botão "Submit" não possuia nenhum ID, então eu criei um para ele no teste, chamado "submitForm"
- No documento do teste, o botão título do form (provavel h1) não possuia nenhum ID, então eu criei um para ele no teste, chamado "formTitle"
- No documento do teste, a mensagem de sucesso não possuia nenhum ID, então eu criei um para ela no teste, chamado "successMessage"
- No documento do teste não comentava nada sobre uma possível mensagem de sucesso ao enviar o formulário com todos os dados preenchidos, então levei em consideração que existe a mensagem "Formulário enviado com sucesso!"

> BDD:
- Utilizei a escrita declarativa, pois acredito que fica bem melhor para a leitura do usuário, porém quebrei os métodos em trechos pequenos de código (preencheNome(), preencheEmail()...). Porém existem empresas que usam também o imperativo, o que fica bem tranquilo de implementar também, só acaba gerando mais steps.

> Testes de API:
- Acredito que a implementação do teste de API poderia ter ficado muito melhor, porém nunca tinha realizado uma automação de API com Cypress, então acabei investindo bastante tempo para estudar a estrutura.
- Realizei outros projetos, onde acabei usando o próprio axios para fazer as chamadas de API. Neste outro projeto, usei a API principalmente para gerar massa de dados.