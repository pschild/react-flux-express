# Description
* Sample app for [React](https://facebook.github.io/react/) + [Flux](https://facebook.github.io/flux/docs/overview.html)
* Using [express](http://expressjs.com/) for a local webserver
* Using [watchify](https://github.com/substack/watchify) to automatically watch for changes and bundle all files to a single bundle.js

# Installation
1. Check out the project.
2. Run `npm install` to install all necessary dependencies.
3. Open a console and run `npm start` to start the local webserver.
4. Open another console and run `npm run watch` to start watching for changes.
5. Run `npm run build` to build a minified version of bundle.js.

# How to Flux

### Flux Flow
![Flux Flow](http://i.stack.imgur.com/sxZYI.png)
[Source: https://github.com/facebook/flux]

Synchronous: View > Action > Dispatcher > Store > View

Asynchronous: View > Action > Web API Utils > Action > Dispatcher > Store > View

### Do's :+1:
* Keep `Stores` synchronous
* Application state and logic is maintained only in the `Stores`
* Create `Actions` from `Views` or `Web API Utils`/`Server`
* Every change of sate should go through the `Dispatcher`

### Dont's :-1:
* Asynchronous operations in `Stores`
* Event Chaining