FROM node:lts-alpine

RUN mkdir -p /home/node/api/node_modules
RUN chown -R node:node /home
WORKDIR /home/node/api

COPY package.json .
COPY --chown=node:node . .

USER node
RUN rm -rf node_modules
RUN npm ci

EXPOSE 6969

ENTRYPOINT ["npm", "start"]
