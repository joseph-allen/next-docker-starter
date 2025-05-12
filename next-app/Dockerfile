FROM node:18

WORKDIR /app

# Copy package.json and package-lock.json from the build context
COPY package.json package-lock.json ./

RUN pwd

RUN npm install

# Copy the rest of the application files
COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]
