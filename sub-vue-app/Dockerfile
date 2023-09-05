# Fetching the latest node image on apline linux
FROM node:alpine AS builder

# Setting up the work directory
WORKDIR /app

RUN echo ${API_URL}
# Installing dependencies
COPY ./package.json ./
RUN npm install

# Copying all the files in our project
COPY . .
#ENV API_URL=\${API_URL}
# Building our application
RUN npm run build

# Fetching the latest nginx image
FROM nginx:alpine

# Copying built assets from builder
COPY --from=builder /app/dist /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
