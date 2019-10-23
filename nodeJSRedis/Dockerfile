FROM node:alpine
WORKDIR /usr/app/visits
COPY package.json .
RUN npm install
COPY . .
CMD ["npm","start"]