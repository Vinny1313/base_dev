# 🚀 Base Full-Stack Dockerizada

Este repositório contém a infraestrutura base e o ambiente de desenvolvimento inicial para o **Sistema Residuum**. A arquitetura foi desenhada para ser moderna, escalável e 100% conteinerizada, eliminando o problema de "na minha máquina funciona" e acelerando o fluxo de trabalho.

---

## 🛠️ Tecnologias Utilizadas

A stack foi escolhida para garantir alta performance e produtividade durante o desenvolvimento do MVP:

* **Frontend:** Next.js (React) 
* **Backend:** Node.js com Express
* **Banco de Dados:** PostgreSQL (Relacional)
* **Infraestrutura:** Docker e Docker Compose

---

## ⚙️ Pré-requisitos

Para rodar este projeto localmente, você não precisa instalar o Node.js ou o PostgreSQL nativamente. É necessário ter apenas as seguintes ferramentas instaladas:

* [Git](https://git-scm.com/)
* [Docker Desktop](https://www.docker.com/products/docker-desktop/) (com WSL2 ativado, caso esteja no Windows)

---

## 🚀 Como executar o projeto

Com o Docker rodando na sua máquina, abra o seu terminal e siga os passos abaixo:

**1. Clone este repositório**
bash
git clone [https://github.com/Vinny1313/base_dev.git](https://github.com/Vinny1313/base_dev.git)

2. Acesse a pasta do projeto

cd base_dev

3. Inicie os contêineres em segundo plano
docker compose up -d --build

O Docker fará o download da imagem do PostgreSQL, construirá os ambientes do Node.js e do Next.js de forma isolada, instalará todas as dependências e iniciará os servidores.

🌐 Acessando a Aplicação
Após o terminal confirmar que os serviços subiram com sucesso, abra o seu navegador e acesse as seguintes URLs:

Frontend (Interface do Usuário): http://localhost:3000

Backend (API RESTful): http://localhost:3333

Teste de Banco de Dados: http://localhost:3333/teste-db

📁 Estrutura do Repositório
/frontend: Contém o código-fonte da aplicação Next.js (Interface, componentes, consumo de API).

/backend: Contém a API em Node.js/Express, responsável pela regra de negócio e comunicação com o banco.

docker-compose.yml: Orquestra os três contêineres (frontend, backend e db), configurando redes internas, variáveis de ambiente e volumes.

🔄 Hot-Reload
O ambiente foi configurado com volumes no Docker. Isso significa que qualquer alteração feita e salva nos arquivos .js, .ts ou .tsx refletirá instantaneamente no navegador ou na API, sem a necessidade de reiniciar os contêineres.

Feito com dedicação por Vinícius Lima.
