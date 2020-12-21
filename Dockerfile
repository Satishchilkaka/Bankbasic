FROM node:12.16.3
 WORKDIR /
 ENV PORT 80
 COPY . .
 RUN yarn install

 CMD ["node", "yarn start"]