# Teste LojaEbac

## Objetivo

Este projeto tem como objetivo colocar em prática a automação de adicionar dois carrinhos no produto com a utilização da ferramenta Cypress.

## Divisão do Projeto e Configuração e execução

### Divisão do projeto

* Pasta `e2e`: pasta que contem o cenário de teste.

* Pasta `support/pages`: pasta que contém as classes subdividas por páginas que foram automatizadas. Para a criação dessas classes foi utilizado o conceito de AppActions + PageObjects, sendo que o PageObjects tendo um arquivo contendo os elementos que serão utilizados para a ação do cypress, e a classe que possui os métodos que fazem a ação com esses elementos mapeados. A utilização do PageObjects + AppActions é interessante para a organização do código, sendo que cada método dentro da classe tem uma responsabilidade única. Para esse desafio poderia também ser mapeados por componentes, bem como ter métodos generalistas, contudo com o crescimento do código, ficaria o projeto mais árduo na manutenção.

### Configuração e execução

Para o projeto foi utilizado a ferramenta de testes Cypress que tem como dependência:
 
* Versão mais recente do [Node](https://nodejs.org/en/download/);
* Após a instalação do Node, na raiz do projeto com o terminal aberto execute o comando `npm install` para a instalação das dependências necessárias
* Para executar o cypress execute no terminal o comando `npm run cy:open:e2e`
* Para executar em standless execute no terminal o comando  `npm run cy:run:e2e`

**Observações adicionais:**

* Foi utilizado também a biblioteca [`cypress-testing-library`](https://testing-library.com/docs/cypress-testing-library/intro/), a utilização dessa biblioteca foi para que evitasse a utilização de classes das tags html, por não ser uma boa prática, assim com o `cypress-testing-library`, consegue se mapear o elemento a partir do que é visível do usuário, evitando assim utilizar classes ou atributos de tags html que não são únicas.
* Vale ressaltar que não é uma boa prática utilizar também o parâmetro `{force:true}`, contudo havia algumas tags html sobrescritas dificultando a ação de clicar.
* Outro ponto sobre boas práticas é a utilização do parâmetro da tag class, sendo que essa é muito utilizada e modificável com o tempo a partir de estilização de CSS. 

### Pipelines (Github Actions)

Para a melhor verificação da execução dos testes, foi criado uma pipeline para mostrar o código automatizado sendo executado, bem como mostrar como poderia ser uma pipeline com estágios de testes automatizado com o Cypress. Para visualizar a pipeline basta clicar no link [Github Actions](https://github.com/jfilhoGN/automation-test-lojaebac/actions/runs/4898827443).
