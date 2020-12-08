FROM node:lts-alpine as build-stage

RUN mkdir -p /app/node_modules
# RUN npm install -g http-server

WORKDIR /app
COPY package*.json ./

RUN npm install
COPY . .

RUN npm build

# use nginx instead of http-server
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
