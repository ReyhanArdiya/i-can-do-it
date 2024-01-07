FROM node:16-alpine

ENV NODE_ENV=production

WORKDIR /app

COPY package.json ./

RUN npm install --force

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
