.PHONY: lint pretty clean

clean:
	rm -rf node_modules dist .sass-cache .tmp

node_modules:
	npm install

lint: node_modules
	npx eslint app

pretty: node_modules
	npx prettier --write .
