FROM node:lts-slim

RUN apt-get update && apt-get install -y python3 build-essential \
    && rm -rf /var/lib/apt/lists/*

COPY yarn.lock package.json ./

RUN npm_config_build_from_source=true yarn install --prod

COPY src ./src
COPY tsconfig.json ./

ARG modelType=default

COPY ./models/$modelType ./model

RUN yarn build

EXPOSE 3000

ENTRYPOINT ["yarn", "start"]
