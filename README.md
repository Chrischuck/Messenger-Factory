# React Chat Messenger Boilerplate

Make your chat messengers for any website, anywhere.

# Usage

1. run `npm install && npm run dev`
2. Go to `localhost:3000` in your browser

# Build process (prod)

1. Configuration (styles) is passed to a function that returns a webpack config
2. Webpack injects these styles into the React app at compile time
3. React app picks up style configuration and adjust accordingly
4. React app is compiled by Webpack
5. Client scripts are compiled by Webpack
6. Output to `dist` folder

# Production flow

1. Client inserts `client.js` script into their website (must be wrapped in script tag w/ app ID appended)
2. `client.js` calls second script that adds event listeners and injects iframe
3. New iframe gets populated w/ React messenger


# Todos

* [ ] Create build scripts that output client scripts + src code
* [ ] Ensure all browser compatibility
* [ ] Code splitting
* [ ] Decrease package size
* [ ] Fix file structure