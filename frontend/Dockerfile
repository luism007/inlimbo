FROM node:18-alpine
WORKDIR /inlimbo-site
COPY package*.json ./
RUN npm install 
COPY . .
CMD ["npm", "start"]