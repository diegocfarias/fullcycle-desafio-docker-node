FROM node:current-alpine

ENV DOCKERIZE_VERSION v0.6.1

WORKDIR /usr/src/app

RUN npm install express --save && \
    npm install mysql --save && \
    npm install node-random-name --save

COPY . .

RUN apk add --no-cache openssl

RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz

EXPOSE 3000

CMD ["node", "--watch", "index.js"]
