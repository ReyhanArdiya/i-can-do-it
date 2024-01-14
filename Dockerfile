FROM node:16-alpine

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

ENV NODE_ENV=production

RUN npm run build

CMD ["npm", "start"]
