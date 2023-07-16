FROM node:18-alpine
WORKDIR /inlimbo-site
COPY package*.json ./
RUN npm install 
COPY . .
EXPOSE 3000
CMD ["npm", "start"]