FROM node:20-alpine

WORKDIR /usr/src/app

# Copia apenas os arquivos de dependência primeiro (melhora o cache do Docker)
COPY package*.json ./

RUN npm install

# O código fonte não precisa ser copiado aqui no dev, 
# pois os volumes do docker-compose farão o espelhamento,
# mas é boa prática manter para quando for gerar imagem de produção.
COPY . .

EXPOSE 3333