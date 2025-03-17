FROM node:20-alpine

WORKDIR /prathik/app/

COPY package.json .
COPY marineni.js .

RUN npm install

EXPOSE 5000

ENTRYPOINT ["node", "marineni.js"]
