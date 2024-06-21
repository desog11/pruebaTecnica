FROM node:20.14.0-alpine
WORKDIR /usr/src/app

COPY package*.json ./
COPY tsconfig.json ./
RUN npm install
RUN npm install -g typescript 

COPY . .
RUN tsc



EXPOSE 3001
CMD ["node", "dist/index.js"]