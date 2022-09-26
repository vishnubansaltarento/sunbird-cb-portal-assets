FROM node:alpine

WORKDIR /usr/src/app

COPY . .
#RUN apt update && apt install -y zip
RUN apk add --update --no-cache \
  make \
  g++ \
  automake \
  autoconf \
  libtool \
  nasm \
  libjpeg-turbo-dev \
  zip
RUN npm install 
RUN npm install jpegtran-bin
RUN npm rebuild jpegtran-bin
RUN npm run build

RUN zip -r dist.zip dist
