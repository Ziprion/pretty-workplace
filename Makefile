install:
	npm ci

start-prod:
	npm run build & npm run server

start-dev:
	make start-backend & make start-frontend

start-frontend:
	npx env-cmd -f .env.development webpack serve --mode development

start-backend:
	npx env-cmd -f .env.development nodemon bin/index.js

lint:
	npx eslint . --ext js,jsx --fix
	npx stylelint './src/**/*.{js,jsx}'

test:
	npm test -s

.PHONY: test