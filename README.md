# React Chat Messenger Boilerplate

Make your own chatbot for any website, anywhere.

# Usage

1. run `npm install && npm run dev`
2. Go to `localhost:3000` in your browser

# Production flow

1. Client inserts `client.js` script into their website (must be wrapped in script tag w/ app ID appended)
2. `client.js` calls second script that adds event listeners and injects iframe
3. New iframe gets populated w/ React messenger


# Todos

* [ ] Create build scripts that output client scripts + src code
* [ ] Code Splitting