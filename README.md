# Press Hub Web - API

Press Hub é um projeto idealizado e concebido por Mariana 'Mari' Amaro, é uma plataforma dedicada a
centralizar e otimizar as parcerias da empresa com seus influenciadores digitais e imprensa.

E este Software tem o objetivo de gerenciar a logistica entre o negócio, os dados e a comunicação com
a empresa e os terceiros, com uma plataforma dedicada puramente a um banco de dados robusto.

**Front-End do projeto:** Click [AQUI](https://github.com/Themeuz/press-hub-frontend).

## 🚀 Sobre o Projeto

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

## 🛠️ Tecnologias Utilizadas
Este projeto teve uma arvore de stack moderno e robusto, utilizando JavaScript/TypeScript:

- **Node.JS:** Como ambiente de execução para o JavaScript roterizar e gerir todo o motor do servidor.
- **Express:** Framework escolhido cuidadosamente para a construção da API RESTful, gerenciado rotas, requisições,
apropriado para CRUD e Software de alta tensidades.
- **PostgreSQL**  Banco de Dados escolhido foi o mais recomendado pelo mercado, algo robusto e confiável.
- **Prisma** ORM de última geração para a comunicação segura e intuitiva para com o Banco de Dados de maneira interna.
- **CORS** Middleware para habilitar compartilhamento de recursos entre o back-end e o front-end, dois repositórios.

## ✨ Roadmap do Projeto
Atualmente, a API possui as seguintes funcionalidades 100% implementadas:

- [x] **CRUD completo de Usuários** (/users): Sistema completo para criar, ler, atualizar e deletar usuários (parceiros).
- [x] **CRUD completo de Jogos** (/games): Sistema completo para criar, ler, atualizar e deletar jogos na plataforma.
- [ ] **Sistema de Solicitação de Chaves:** Ferramenta para parceiros solicitarem chaves de jogos para análise e promoção, 
com um "Medidor de Hype" para indicar títulos em alta.
- [ ] **Gerenciamento de Campanhas:** Módulo para criar e gerenciar campanhas de marketing com os parceiros, incluindo 
agendamento e atribuição de tarefas.
- [ ] **Envio de Evidências:** Sistema para os parceiros subirem links e materiais dos conteúdos criados (vídeos, artigos, etc.)
 como prova de campanha.
- [ ] **Programa de Incentivos:** Gamificação com recompensas (Drops, cupons exclusivos) baseadas em performance e engajamento
  contínuo.
- [ ] **Comunicação Integrada:** Hub de releases e atualizações importantes para a imprensa e influenciadores, com distribuição
 personalizada.
- [ ] **Dashboard de Performance:** Painel com relatórios dinâmicos sobre receita gerada, cobertura de mídia e engajamento das campanhas. 
- [ ] **Relatórios Automatizados:** Geração automática de relatórios de performance mensais para análise e tomada de decisão.

## ⚙️ Como Rodar o Projeto Localmente

**1. Clone o repositório:**
```
git clone https://github.com/Themeuz/Press-Hub-Web.git

```

**2. Navegue até a pasta do prijeto:**

```
cd Press-Hub-Web

```

**3. Instale as dependências:**

```
npm install

```

**4. Configure as variáveis**
* Renomeie o arquivo ``` .env.exemplo``` para ```.env```(se houver) ou crie um novo
* Adicione uma string de conexão com o seu banco de dados!
```
DATABASE_URL="postgresql://USUARIO:SENHA@localhost:5432/NOME_DO_BANCO?schema=public"
```

**5. Aplique as migrações de banco de dados**
```
npx prisma migrate dev
```

**6. Iinicie o servidor de desenvolvimento**
```
node server.js
```
Agora seja FELIZ :D com o servidor rodando no endereço: http://localhost:3000/
