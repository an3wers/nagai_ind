# Build Stage
FROM node:18-alpine AS BUILD_IMAGE
WORKDIR /var/www/app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

RUN npm prune --production


# Production Stage
FROM node:18-alpine AS PRODUCTION_STAGE
WORKDIR /var/www/app
COPY --from=BUILD_IMAGE /var/www/app/package*.json ./
COPY --from=BUILD_IMAGE /var/www/app/.next ./.next
COPY --from=BUILD_IMAGE /var/www/app/public ./public
COPY --from=BUILD_IMAGE /var/www/app/node_modules ./node_modules
ENV NODE_ENV=production
EXPOSE 3000
CMD ["npm", "start"]
