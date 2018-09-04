FROM docker.io/node:8.9.4-alpine

RUN mkdir /app/koa_joi_swagger
WORKDIR /app/koa_joi_swagger
ADD . /app/koa_joi_swagger

RUN cd /app/koa_joi_swagger && npm install

EXPOSE 4000

CMD npm start
