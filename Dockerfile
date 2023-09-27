# Use the official Node.js runtime as the base image
FROM node:16

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port your Nest.js app will run on
EXPOSE 8000

# Command to run your Nest.js application
CMD ["npm", "run", "start:dev"]
