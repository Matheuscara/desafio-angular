

## Projeto

Crie uma SPA utilizando Angular para uma tela de lista de usuários e um modal para adicionar usuários. O layout e a arquitetura são por sua conta, apenas atente-se aos requisitos propostos.



### Tecnologias Utilizadas

- Angular v16: 
    - Utilizado para desenvolver a aplicação devido à sua robustez e suporte contínuo. A versão 16 traz melhorias de desempenho e novas funcionalidades que ajudam a criar uma SPA moderna e eficiente.
- Tailwind CSS: 
    - Utilizado para a estilização das páginas. Tailwind CSS permite uma maneira rápida e eficiente de criar estilos personalizados sem sair do HTML, resultando em um desenvolvimento mais rápido e um design mais consistente.
- State com Signals: 
    - O estado da aplicação é gerenciado com `Subject Service` utilizando signals para compartilhamento de dados entre os componentes. Isso proporciona um gerenciamento de estado reativo e eficiente.


### Desafios Encontrados
Tive dificuldade em fazer o componente de paginação para a tabela. Tentei encontrar algum modelo pronto que ficasse parecido, mas não achei, e para fazer, fiquei com dificuldade também. Adicionar a inteligência de próximas páginas e os filtros foi interessante de fazer. Tive dificuldade também para fazer a exibição do país ao digitar o telefone.

### Melhorias Futuras
- Implementar o projeto com testes E2E.
- Implementar filtro de status e nome ao mesmo tempo.
- Melhorar o componente de paginação na tabela.
- Melhorar o ícone de país no input de telefone.

---------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Instalar dependencias
Para instalar todas as dependencias, execute:
```
npm install
```

## Iniciar a aplicação
Para iniciar o servidor de desenvolvimento execute: 
```
npm run start
```

## Para rodar os testes unitarios
Para iniciar o servidor de testes (atualmente com 80% de coverage) execute: 
```
npm run test
```