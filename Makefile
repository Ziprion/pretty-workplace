install:
	npm ci

build:
	npm run build

start-prod:
	make frontend-prod && make backend-prod

frontend-prod:
	npx env-cmd -f .env.production.loc webpack --mode production

backend-prod:
	npx env-cmd -f .env.production.loc node bin/index.js

start-dev:
	make frontend-dev & make backend-dev

frontend-dev:
	npx env-cmd -f .env.development.loc webpack serve  --mode development

backend-dev:
	npx env-cmd -f .env.development.loc nodemon bin/index.js --trace-warnings

lint:
	npx eslint . --ext js,jsx --fix
	npx stylelint './src/**/*.{js,jsx}'

test:
	npm test -s

.PHONY: test