FROM node:alpine

# Create and change to the app directory.
WORKDIR /usr/src/app

# Run on port 5000
EXPOSE 5000

# Copy package and package/yarn lock files
COPY package.json .
COPY yarn.lock .

# Install all dependencies
RUN npm i yarn && yarn install

# Copy the rest of the application source code
COPY . .

RUN ls -a

# Run the api service on container startup.
CMD [ "yarn", "dev" ]