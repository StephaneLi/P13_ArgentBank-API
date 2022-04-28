FROM node:17-alpine as run

WORKDIR /app

COPY . /app/

RUN npm i

CMD [ "npm", "run", "server" ]