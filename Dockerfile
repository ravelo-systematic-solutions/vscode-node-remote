FROM node:9.3.0
LABEL maintainer 'Jesus Rodriguez<arturo@ravelo.ca>'

ENV NODE_ENV development
RUN mkdir /code
WORKDIR /code
ADD . /code/

RUN npm install
EXPOSE 5000 5000 5001 5001

CMD ["npm", "start"]