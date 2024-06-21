FROM node:20.14.0-alpine
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
RUN npm install\
&& npm install typescript -g

COPY . /usr/src/app

RUN tsc

EXPOSE 3003
CMD ["node", "dist/index.js"]