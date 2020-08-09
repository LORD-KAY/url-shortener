FROM node:lts-alpine

WORKDIR /usr/src

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run jest

EXPOSE 8090

CMD ["npm", "run","start"]
