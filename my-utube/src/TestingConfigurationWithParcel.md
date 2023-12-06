            npm install --save -dev @testing-library/react
			npm i -D jest
			npm install --save-dev babel-jest @babel/core @babel/preset-env
			
			create babel.config.js with below content in it.
			-----------------------
			module.exports = {
			  presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
			};
			----------------------
			
			Create parcel.rc and add below configurations to disable default babel transpilation:
			---------------------------
			{
			  "extends": "@parcel/config-default",
			  "transformers": {
				"*.{js,mjs,jsx,cjs,ts,tsx}": [
				  "@parcel/transformer-js",
				  "@parcel/transformer-react-refresh-wrap"
				]
			  }
			}
			-------------------------
			
			npx jest --init 
			
			que1: typescript? no
			que2: use test env : JSDOM
			que3: add coverage: yes
			que4: provider: babel
			que5: cleanup/ garbage: yes
			-------------------------------
			Install below if using jest 28 or above:
			
			npm install --save-dev jest-environment-jsdom
			
			-------------
			
			npm install -D @testing-library/jest-dom

			----------------
			