FROM node:18.18.0-bullseye-slim as base

WORKDIR /usr/src/app
COPY . .

#RUN npm install -g pnpm && pnpm install && npm ci && pnpm run build
#RUN npm install && npm ci --omit=dev && npm run build
RUN yarn && yarn build
FROM base as build

WORKDIR /usr/src/app

COPY --from=base /usr/src/app/yarn.lock ./

# RUN npm ci --production --ignore-scripts

COPY --from=base /usr/src/app/build ./

EXPOSE 3000

ENV HOST=0.0.0.0
RUN yarn --prod
CMD ["node", "./index.js"]
