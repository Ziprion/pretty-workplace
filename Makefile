install:
	npm ci

build:
	npm run build

start-prod:
	make frontend-prod-loc && make backend-prod-loc

frontend-prod-loc:
	npx env-cmd -f .env.production.loc webpack --mode production

backend-prod-loc:
	npx env-cmd -f .env.production.loc node bin/index.js

start-dev:
	make frontend-dev-loc & make backend-dev-loc

frontend-dev-loc:
	npx env-cmd -f .env.development.loc webpack serve  --mode development

backend-dev-loc:
	npx env-cmd -f .env.development.loc nodemon bin/index.js

lint:
	npx eslint . --ext js,jsx --fix
	npx stylelint './src/**/*.{js,jsx}'

test:
	npm test -s

.PHONY: test