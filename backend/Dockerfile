FROM node:alpine

# setup working directory
WORKDIR /app
# copy and install dependencies
COPY ./package*.json ./
RUN npm i

# copy all items into working directory
COPY . .
# expose this images port
EXPOSE 3001

# start backend server
CMD ["npm", "start"]