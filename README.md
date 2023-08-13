# Rent Car API - API de Aluguel


A Rent Car API é uma API de aluguel de carros construída com base nos princípios de Domain-Driven Design (DDD). Ela oferece uma estrutura robusta e flexível para gerenciar operações de aluguel de carros, permitindo uma modelagem rica do domínio e facilitando a implementação de regras de negócios complexas.

## Características Principais

- **Modelagem de Domínio Rica:** A Rent Car API utiliza conceitos de DDD para criar uma representação fiel do domínio de aluguel de carros, incluindo agregados, entidades, objetos de valor e serviços de domínio.

- **Separação de Responsabilidades:** A arquitetura DDD promove a separação clara de responsabilidades entre as diferentes camadas da aplicação, como Domínio, Aplicação e Infraestrutura.

- **Regras de Negócios Flexíveis:** Com base em DDD, é possível expressar regras de negócios complexas de forma mais natural e implementá-las de maneira isolada.

- **Testabilidade:** O design orientado a domínio facilita a criação de testes unitários e de integração, permitindo uma cobertura abrangente das funcionalidades da API.

## Estrutura do Projeto

O projeto Rent Car API é organizado em torno dos seguintes componentes principais:

- `src/modules`: Contém as entidades, agregados, objetos de valor e serviços de domínio que representam o núcleo do domínio de aluguel de carros.

- `src/UseCases`: Inclui os casos de uso da aplicação, que orquestram a interação entre os elementos do domínio e gerenciam as operações de aluguel de carros.

- `src/Infrastructure`: Responsável por implementar os detalhes técnicos, como persistência em banco de dados, serviços externos e outros recursos de infraestrutura.

## Instalação e Execução

1. Clone este repositório: `git clone https://github.com/brunovivaldodev/rentcar-api`
2. Acesse o diretório: `cd rent-car-api`
3. Instale as dependências: `npm install`
4. Configure as variáveis de ambiente necessárias (ex: banco de dados, chaves de API).
5. Inicie a API: `npm start`

Certifique-se de ter o Node.js instalado em sua máquina antes de executar os comandos acima.

## Contribuição

Contribuições são bem-vindas! Se você deseja contribuir para o desenvolvimento da Rent Car API, siga estas etapas:

1. Faça um fork deste repositório.
2. Crie um branch para suas alterações: `git checkout -b feature/nova-funcionalidade`.
3. Faça suas alterações e commit: `git commit -m 'Adiciona nova funcionalidade'`.
4. Envie para o seu fork: `git push origin feature/nova-funcionalidade`.
5. Crie um Pull Request neste repositório.

## Suporte

Se você encontrar problemas ou tiver dúvidas, abra um problema [aqui](https://github.com/brunovivaldodev/rentcar-api/issues).

## Licença

Este projeto é licenciado sob a [Licença MIT](LICENSE).
