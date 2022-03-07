FROM node:15

RUN mkdir /code
WORKDIR /code

ADD package.json package-lock.json /code/

RUN npm install

CMD npm run prod