FROM node:alpine

#setup args for env vars
ARG MONGO_USERNAME
ARG MONGO_PASSWORD
ARG MONGO_DB_NAME

ENV MONGO_USERNAME ${MONGO_USERNAME}
ENV MONGO_PASSWORD ${MONGO_PASSWORD}
ENV MONGO_DB_NAME ${MONGO_DB_NAME}

# setup working directory
WORKDIR /app
# copy and install dependencies
COPY ./package*.json ./
RUN npm i

# copy all items into working directory
COPY . .
# expose this images port
EXPOSE 8080
# start backend server
CMD ["npm", "start"]