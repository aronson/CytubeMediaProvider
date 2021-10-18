# First stage, build
FROM tarampampam/node:16-alpine AS build

WORKDIR /app

COPY package.json .
COPY tsconfig.json .
COPY yarn.lock .

COPY index.ts .

RUN yarn install

RUN yarn build:prod

# Second stage, copy
FROM mhart/alpine-node:slim-16 AS release

WORKDIR /app

RUN mkdir node_modules

COPY --from=build /app/bin/* .

COPY --from=build /app/node_modules node_modules

ENV PORT=80

EXPOSE 80

CMD ["node", "index.js"]