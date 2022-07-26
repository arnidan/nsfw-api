FROM node:lts-slim

RUN apt-get update && apt-get install -y python3 build-essential wget unzip \
    && rm -rf /var/lib/apt/lists/*

COPY yarn.lock package.json ./

RUN npm_config_build_from_source=true yarn install --prod

RUN wget -q https://s3.amazonaws.com/nsfwdetector/nsfwjs.zip  \
    && unzip -j nsfwjs.zip -d ./model \
    && rm nsfwjs.zip

COPY . .

RUN yarn build

EXPOSE 3000

ENTRYPOINT ["yarn", "start"]
