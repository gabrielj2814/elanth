# syntax=docker/dockerfile:1

# ---------- 1. Compilación del sitio estático ----------
FROM node:22-alpine AS build
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund

COPY . .

# Astro escribe estos valores en el HTML al compilar (URLs canónicas, sitemap, formulario)
ARG SITE_URL=https://elanth.com
ARG BASE_PATH=/
ARG PUBLIC_FORM_ENDPOINT=
ENV SITE_URL=$SITE_URL \
    BASE_PATH=$BASE_PATH \
    PUBLIC_FORM_ENDPOINT=$PUBLIC_FORM_ENDPOINT

RUN npm run build

# ---------- 2. Servidor web ----------
FROM nginx:1.27-alpine AS runtime

COPY docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD wget -q --spider http://127.0.0.1/ || exit 1
