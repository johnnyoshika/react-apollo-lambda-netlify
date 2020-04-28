## React + Apollo + Lambda + Netlify

Started with this Lambda starter kit: https://github.com/netlify/create-react-app-lambda

More info on netlify-lambda: https://github.com/netlify/netlify-lambda

## Local Development

```bash
## prep steps for first time users
npm i -g netlify-cli # Make sure you have the [Netlify CLI](https://github.com/netlify/cli) installed
git clone https://github.com/netlify/create-react-app-lambda ## clone this repo
cd create-react-app-lambda ## change into this repo
yarn # install all dependencies

## done every time you start up this project
ntl dev ## nice shortcut for `netlify dev`, starts up create-react-app AND a local Node.js server for your Netlify functions
```

View site: `localhost:8888`.

Each function will be available at the same port as well:

- `http://localhost:8888/.netlify/functions/hello` and 
- `http://localhost:8888/.netlify/functions/async-dadjoke`
- `http://localhost:8888/.netlify/functions/graphql`

Add functions that export with the `handler` name inside `src/lambda` and it will be available at: `http://localhost:8888/.netlify/functions/{function_name}`

## Deployment

Push to master and it will be updated on Netlify: https://react-apollo-lambda-netlify.netlify.app/
Also try:
* https://react-apollo-lambda-netlify.netlify.app/.netlify/functions/hello
* https://react-apollo-lambda-netlify.netlify.app/.netlify/functions/async-dadjoke
* https://react-apollo-lambda-netlify.netlify.app/.netlify/functions/graphql