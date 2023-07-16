FROM node:alpine
WORKDIR /inlimbo-site
COPY package*.json ./
RUN npm install 
COPY . .
CMD ["npm", "start"]