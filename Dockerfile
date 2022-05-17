FROM node:14.19.2-buster-slim as base

WORKDIR /usr/src/app

COPY package*.json ./
COPY *.*js ./

RUN npm ci

COPY . .

RUN npm run build

FROM node:14.19.2-buster-slim

WORKDIR /usr/src/app

COPY --from=base /usr/src/app .
COPY . .

EXPOSE 3000

ENV HOST=0.0.0.0

CMD ["node", "build"]