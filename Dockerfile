
# -------------------- builder stage --------------------
FROM node:18 AS builder
WORKDIR /app

# copy lockfile first for better layer caching
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

COPY . .
RUN yarn build

# -------------------- production stage --------------------
FROM node:18-alpine AS runner
WORKDIR /app

# copy built app from builder
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/package.json ./package.json
COPY --from=builder --chown=nextjs:nodejs /app/yarn.lock ./yarn.lock

ENV NODE_ENV=production

EXPOSE 3000
CMD ["yarn", "start"]
