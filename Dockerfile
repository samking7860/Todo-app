FROM node:lts-bullseye-slim

# Install dumb-init
RUN apt-get update && apt-get install -y --no-install-recommends dumb-init \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Copy package.json and package-lock.json first to leverage caching
COPY package*.json ./

# Install dependencies as root
RUN npm ci

# Copy the rest of the application code
COPY . .

# Change ownership of the app directory to the node user
RUN chown -R node:node /app

# Use non-root user
USER node

# Start the application with dumb-init
CMD ["dumb-init", "npm", "run", "dev"]
