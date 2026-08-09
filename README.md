# 🚀 Catálogo de Starter Kits

## 💡 Sobre este repositório

Este repositório é um verdadeiro "berço" de boilerplates e ambientes de desenvolvimento pré-configurados. O objetivo central é acelerar o setup inicial de novos projetos, eliminando as horas gastas configurando infraestrutura, integrando bancos de dados e ajustando ferramentas. 

Aqui, você encontra bases sólidas e arquiteturas padronizadas. É só clonar o kit que melhor atende à sua necessidade e começar imediatamente a focar no que realmente importa: escrever as regras de negócio e desenvolver o seu produto.

---

## 🛠️ Como usar (Clonando um Kit)

Como este repositório hospeda **vários** kits diferentes em subpastas, não recomendamos o uso do `git clone` tradicional (pois ele baixaria todos os kits de uma vez com todo o histórico de commits).

A abordagem ideal é utilizar o **degit**. Essa ferramenta do ecossistema Node baixa **apenas a pasta específica** do template que você quer utilizar, entregando um ambiente totalmente limpo para você iniciar o seu versionamento do zero.

Para iniciar um projeto novo baseado em um dos nossos kits, execute o comando abaixo no seu terminal:

```bash
npx degit Vinny1313/starter-kit/NOME_DA_PASTA nome-do-seu-novo-projeto

> **💡 Dica:** Este projeto também está configurado como um **Template Repository**. Se preferir, você pode clicar no botão verde **"Use this template"** no topo da página do GitHub para gerar uma cópia completa dessa estrutura diretamente na sua conta.

---

## 📦 Kits Disponíveis & Release Notes

### 🟢 v1.0.0 | Kit: `fullstack-next-nest-postgres`

**Status:** Lançado e Estável

O primeiro boilerplate do catálogo traz um ambiente de desenvolvimento de nível empresarial, altamente escalável e focado em produtividade. Todo o ecossistema é conteinerizado, garantindo que o famoso problema de *"na minha máquina funciona"* deixe de existir.

**✨ O que vem configurado neste pacote:**

* **🐳 Orquestração Zero-Config com Docker:** O arquivo `docker-compose.yml` gerencia a subida simultânea do Banco de Dados, Backend e Frontend. Os contêineres se comunicam de forma segura através de uma rede interna.
* **🧱 Backend Robusto (NestJS):** API estruturada com injeção de dependências, modularidade e TypeScript estrito, rodando na porta 3333 e exposta corretamente via `0.0.0.0`.
* **🛡️ CORS Liberado:** Segurança de acesso pré-configurada no `main.ts` (`app.enableCors()`), permitindo que o frontend consuma a API imediatamente sem bloqueios do navegador.
* **🩺 Endpoint de Health Check:** Módulo dedicado na rota `GET /health` criado para testar instantaneamente a integridade do sistema. Ele valida e retorna o status em tempo real tanto da API quanto da comunicação com o banco de dados.
* **🗄️ Banco de Dados (PostgreSQL):** Instância relacional isolada rodando na porta nativa 5432, pronta para receber conexões.
* **🔗 Comunicação Inteligente (Prisma ORM):** Prisma configurado com módulo `PrismaService` global no NestJS. Permite consultas ao banco de dados com tipagem forte e autocompletar, sem necessidade de instanciar conexões repetidas vezes.
* **🖥️ Frontend (Next.js):** Base em React preparada na porta 3000, pronta para consumir as rotas do backend.
