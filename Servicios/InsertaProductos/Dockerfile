FROM node:20.14.0-alpine
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install\
&& npm install typescript -g

COPY . .

RUN tsc

EXPOSE 3003
CMD ["node", "dist/index.js"]