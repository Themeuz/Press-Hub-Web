# Press Hub Web - API

Press Hub é um projeto idealizado e concebido por Mariana 'Mari' Amaro, é uma plataforma dedicada a
centralizar e otimizar as parcerias da empresa com seus influenciadores digitais e imprensa.

E este Software tem o objetivo de gerenciar a logistica entre o negócio, os dados e a comunicação com
a empresa e os terceiros, com uma plataforma dedicada puramente a um banco de dados robusto.

**Front-End do projeto:** Click [AQUI](https://github.com/Themeuz/press-hub-frontend).

##  Sobre o Projeto

Falando um pouco mais sobre o Press Hub, ele é uma plataforma integrada e intuitiva projetada com um único objetivo,
permitir um gerenciamento ágil, barato e simples de campanhas, engajamento eficaz de parceiros e um acompanhamento 
detalhado de resultados. Esta API é o foco para ser a espinha dorsal que alimenta todas essas funcionalidades.
Originalmente pensada em automatizar o relacionamento entre funcionário x cliente, a proposta ofertada pela equipe de
desenvolvimento, acaba por trabalhar mais na plataforma a ponto de fazer deste Software uma ferramente 110% funcional para
toda a equipe de Marketing, capacitando os usuários de gerência (colaboradores) a terem acesso a dados que possibilitam 
storytelling interna, relatórios e documentos referentes a influenciadores, chaves, negócios, imprensa, e muito mais.

Estudada para ser simples e completa, com uma arquitetura baseada na lógica de grandes desenvolvimentos web, a interface
de usuário ficou capacitada para atender multiplos usuários, tais como clientes x colaboradores, dos mais experientes em 
tecnologia até os menos envolvidos, com todas as rotas voltadas a terem menos complexidade.

##  Tecnologias Utilizadas
Este projeto teve uma arvore de stack moderno e robusto, utilizando JavaScript/TypeScript:

- **Node.JS:** Como ambiente de execução para o JavaScript roterizar e gerir todo o motor do servidor.
- **Express:** Framework escolhido cuidadosamente para a construção da API RESTful, gerenciado rotas, requisições,
apropriado para CRUD e Software de alta tensidades.
- **PostgreSQL**  Banco de Dados escolhido foi o mais recomendado pelo mercado, algo robusto e confiável.
- **Prisma** ORM de última geração para a comunicação segura e intuitiva para com o Banco de Dados de maneira interna.
- **CORS** Middleware para habilitar compartilhamento de recursos entre o back-end e o front-end, dois repositórios.

##  Roadmap do Projeto
Atualmente, a API possui as seguintes funcionalidades 100% implementadas:

- [x] **CRUD completo de Usuários** (/users): Sistema completo para criar, ler, atualizar e deletar usuários (parceiros).
- [x] **CRUD completo de Jogos** (/games): Sistema completo para criar, ler, atualizar e deletar jogos na plataforma.
- [x] **Rastreador de Hashtag** (/hashtag): Utilizado para rastrear via web-scrapping temas com maior aproveitamento de público.
- [ ] **Sistema de Solicitação de Chaves:** Ferramenta para parceiros solicitarem chaves de jogos para análise e promoção, 
com um "Medidor de Hype" para indicar títulos em alta. (em progresso...)
