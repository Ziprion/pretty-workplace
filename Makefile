install:
	npm ci

build:
	npm run build

start-prod:
	npm run start

start-dev:
	make start-backend-loc & make start-frontend-loc

start-frontend-loc:
	npx env-cmd -f .env.development webpack serve --mode development

start-backend-loc:
	npx env-cmd -f .env.development nodemon bin/index.js

lint:
	npx eslint . --ext js,jsx --fix
	npx stylelint './src/**/*.{js,jsx}'

test:
	npm test -s

.PHONY: test