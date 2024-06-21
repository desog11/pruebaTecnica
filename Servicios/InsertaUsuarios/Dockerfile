FROM node:20.14.0-alpine
WORKDIR /usr/src/app


COPY package.json /usr/src/app/
RUN npm install\
&& npm install typescript -g

RUN tsc
COPY . .




EXPOSE 3004
CMD ["node", "dist/index.js"]