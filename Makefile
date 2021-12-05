install:
	npm ci

build:
	npm run build

start-dev:
	make start-backend-loc & make start-frontend-loc

start-frontend-loc:
	npx env-cmd -f .env.development.loc webpack serve  --mode development

start-backend-loc:
	npx env-cmd -f .env.development.loc nodemon bin/index.js

lint:
	npx eslint . --ext js,jsx --fix
	npx stylelint './src/**/*.{js,jsx}'

test:
	npm test -s

.PHONY: test