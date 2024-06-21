FROM node:20.14.0-alpine
WORKDIR /src

COPY package*.json ./
COPY tsconfig.json ./
RUN npm install
RUN npm install -g typescript 
RUN tsc
COPY . .

EXPOSE 3004
CMD ["node", "dist/index.js"]