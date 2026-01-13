SHELL:=/bin/bash
include .env

tag:
	sh ./script/tag.sh $(shell cat ./version)
export:
	sh ./script/build.sh
prod:
	sh ./script/prod.sh
server:
	PORT=${PORT} NODE_OPTIONS='--inspect' next dev --turbopack