FROM node:16-alpine3.11 as builder

WORKDIR /app

ADD . .

ADD example.env.development env.development

ENV NEXT_PUBLIC_API_URL=https://picaso.id

RUN yarn install
RUN yarn run build
