FROM node:lts-slim

COPY yarn.lock package.json ./

RUN npm_config_build_from_source=true yarn install --prod

COPY . .

RUN yarn build

EXPOSE 3000

ENTRYPOINT ["yarn", "start"]
