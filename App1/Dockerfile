FROM node:20-alpine

WORKDIR /prathik/app/

COPY package.json .
COPY helloworld.js .

RUN npm install

EXPOSE 3000

ENTRYPOINT ["node", "prathik.js"]
