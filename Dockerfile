# Usa a imagem oficial do Node.js
FROM node:20-alpine 

# Define o diretório de trabalho dentro do container
WORKDIR /app 

# Copia os arquivos do projeto para o container
COPY package.json package-lock.json ./
RUN npm install

# Copia o restante do projeto
COPY . .

# Expõe a porta que o NestJS vai rodar
EXPOSE 3000 

# Comando para rodar a aplicação
CMD ["npm", "run", "start"]
