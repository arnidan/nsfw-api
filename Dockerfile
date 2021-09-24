FROM node:lts-slim

RUN apt-get update && apt-get install -y python3 build-essential wget unzip \
    && rm -rf /var/lib/apt/lists/*

COPY yarn.lock package.json ./

RUN yarn install --prod

COPY . .

RUN yarn build

RUN wget -q https://s3.amazonaws.com/nsfwdetector/nsfwjs.zip  \
    && unzip -j nsfwjs.zip -d ./model \
    && rm nsfwjs.zip

EXPOSE 3000

ENTRYPOINT ["yarn", "start"]
