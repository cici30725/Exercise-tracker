FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --production

COPY . .

RUN npx prisma migrate dev --name init
RUN npx prisma generate

RUN npm run build
CMD npm start 
EXPOSE 3000