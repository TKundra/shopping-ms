# Base image
FROM node:16.16.0-alpine

# Set build argument for environment
ARG NODE_ENV

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install production dependencies if NODE_ENV is 'production', otherwise install dev dependencies
RUN if [ "$NODE_ENV" = "production" ]; \
    then npm ci --only=production; \
    else npm ci; \
    fi

# Copy application code
COPY . .

# Expose the PORT number
EXPOSE 8001

# Start the application
CMD ["npm", "start"]