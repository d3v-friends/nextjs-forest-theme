#!/bin/bash
set -e

source .env
pnpm next build
cp -r public .next/standalone/public
cp -r .next/static .next/standalone/.next/static
PORT=$PORT NODE_ENV=$NODE_ENV NODE_OPTIONS='--trace-warnings --inspect' node .next/standalone/server.js