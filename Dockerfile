# Usa a imagem oficial do Node.js
FROM node:18-alpine

# Define o diretório de trabalho dentro do container
WORKDIR /app 

# Copia apenas arquivos essenciais primeiro para otimizar cache
COPY package*.json ./

# Instala apenas dependências de produção (caso necessário)
RUN npm install

# Instala o NestJS CLI globalmente
RUN npm install -g @nestjs/cli

# Agora copia o restante do projeto
COPY . .

# Comando para rodar a aplicação
CMD ["npm", "run", "start"]
