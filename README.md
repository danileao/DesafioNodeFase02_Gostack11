<div align="center">
  <img alt="GoStack Rocketseat" src="https://ik.imagekit.io/d4plefqyqv/68747470733a2f2f73746f726167652e676f6f676c65617069732e636f6d2f676f6c64656e2d77696e642f626f6f7463616d702d676f737461636b2f6865616465722d6465736166696f732e706e67_vKPw422oK.png">
</div>

<h1 align="center">

💻 Desafio 05: Primeiro Projeto com Node.js  👨🏼‍💻
</h1>

## 📍 Índice
- [Sobre](#-Sobre)
- [Tecnologias utilizadas](#-Tecnologias-utilizadas)
- [Ferramentas](#-Ferramentas)
- [Como utilizar](#-Como-utilizar)

## 📄 Sobre
  O projeto criado, é uma aplicação do tipo CRUD (Create, Read, Update e Delete), possuindo as 4 funcionalidades básicas para manipulação
 de dados. 
  O propósito da aplicação é poder criar, listar, atualizar e remover transações financeiras, através dos Métodos POST, GET, PUT, DELETE.
  O diferencial desse desafio, é que foi utilizado conceitos de models, repositories e services, que são alguns dos conceitos do 
  SOLID (princípios ou boas práticas da programação orientada a objetos), estudados na 2° fase do Bootcamp GoStack11.

## 📋 Funcionalidades
- **```Criar uma transação:```** Para inserir uma transação via Post, deve-se acessar a rota ```http://localhost:3333/transactions``` e 
passar uma estrutura de dados JSON contendo os parâmetros *title*, *value* e *type*, sendo *type* o tipo da transação, que deve ser 
*income* para entradas (depósitos) e *outcome* para saídas (retiradas). Como retorno, a aplicação deve retornar os dados que foram enviados 
junto com o ID daquela transação, na aplicação foi utilizado a função _uuid()_ da dependência [UUIDV4](https://www.npmjs.com/package/uuidv4) para gerar os ID's.
Na imagem abaixo é possível ver melhor a relação entre os envios dos parâmetros e a resposta obtida:
![POST](https://ik.imagekit.io/d4plefqyqv/Print_k7IhBCzFd.png)

- **```Listar as transações:```** Para listar as transações via GET é simples, basta acessar novamente a rota ```http://localhost:3333/transactions```
e a reposta obtida será dois objetos, o primeiro sendo um array contendo todas as transações cadastradas, e o segundo sendo um balanço com 
a soma dos depósitos e retiradas, e o total sendo a diferença da soma dos depósitos pela soma das retiradas.
Supondo-se que as transações cadastradas sejam iguais a:
```JSON
{
  "id": "uuid",
  "title": "Salário",
  "value": 4000,
  "type": "income"
},
{
  "id": "uuid",
  "title": "Freela",
  "value": 2000,
  "type": "income"
},
{
  "id": "uuid",
  "title": "Pagamento da fatura",
  "value": 4000,
  "type": "outcome"
},
{
  "id": "uuid",
  "title": "Cadeira Gamer",
  "value": 1200,
  "type": "outcome"
}
```
A reposta que deve ser obtida é:
![GET](https://ik.imagekit.io/d4plefqyqv/Print_yjGFLAiaF.png)

- **```Atualizar as transações:```** Para atualizar as transações, adiciona-se o parâmetro _id_ a rota ```http://localhost:3333/transactions```
para que posteriormente, seja localizado a transação que queremos atualizar, sendo assim a rota irá ficar da seguinte forma:```http://localhost:3333/transactions/id```
Além do _id_, é necessário passar os dados que serão alterados, no caso, _title_, _value_ e  _type_ novamente. O retorno deve ser semelhante
ao do método POST, trazendo a transação alterada:
![PUT](https://ik.imagekit.io/d4plefqyqv/Print_2TZhEhGMf.png)

- **```Remover as transações:```** Para remover as transações, utiliza-se a mesma ideia do método PUT, passando o ID na URL para remoção.
O retorno esperado é o HTTP 204 (indicação que a requisição obteve sucesso na execução, e que não há corpo de resposta) como na imagem abaixo:
![DELETE](https://ik.imagekit.io/d4plefqyqv/Print_0FzLyoEv8.png)
## 💻 Tecnologias utilizadas 
  - TypeScript
  - Yarn
  - Jest

## 🛠 Ferramentas
- Visual Studio Code
- Insomnia

## 🔍 Como utilizar
Siga o passo a passo abaixo para executar/testar o projeto:
```bash
 #clone o repositório em sua máquina
  git clone https://github.com/Mateus03Miranda/DesafioNodeFase02_Gostack11
 
 #Entre no diretório do projeto clonado
  cd desafionodefase02_gostack11
 
 #Instale as dependências necessárias para a execução do projeto
  yarn install
 
 #Execute o projeto
  yarn dev:server
 
 #Caso queira testar as funcionalidades do projeto, execute o comando abaixo:
  yarn test
```

---
<h3 align="center">

  Desenvolvido por Mateus Miranda 
  <br/>
  
  <a align="center" href="https://linkedin.com/in/mateus-miranda-9bb0091a6">
      <img alt="Mateus Miranda-LinkedIn" src="https://img.shields.io/badge/LinkedIn-Mateus%20Miranda-informational?style=social&logo=linkedin"/>
  </a>
</h3>
