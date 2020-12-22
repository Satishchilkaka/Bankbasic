FROM node:12-alpine

 WORKDIR /

 COPY . .

 RUN yarn install

 COPY . /code

 CMD ["node","yarn parcel app/index.html"]