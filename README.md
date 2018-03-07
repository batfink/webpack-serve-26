# Playground for testing webpack-serve issues

See: https://github.com/webpack-contrib/webpack-serve/issues/26

## Steps to reproduce issue

1. Install deps `yarn install`
2. Start the app via `yarn start`
3. In the app navigate to the `/about` URL
4. While on that URL, make a change to `html/js/index.js` to trigger a hot module reload
5. BUG: Look at the console and note that HMR is trying to load the bundle from the wrong URL

Unfortunately -- this code repo fails to reproduce the issue. So the above steps don't occur.
