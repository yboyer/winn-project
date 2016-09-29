FROM alpine
RUN apk add --update nodejs

MAINTAINER Yoann BOYER

ENV NODE_ENV=production

# DIRECTORY
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# SERVER DEPENDENCIES
COPY package.json /usr/src/app/
RUN npm i

# SOURCE
COPY . /usr/src/app

EXPOSE 3000
CMD [ "npm", "start" ]
