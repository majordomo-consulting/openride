# openride

## status

this application is no longer under development.  though it served its purpose as a proof-of-concept, airtable should not be used in production as a back-end

[FRONT END DEMO](https://openride-io.firebaseapp.com)

[ADMIN DASHBOARD DEMO](https://openride-io.firebaseapp.com/admin)

## Installation
[Install Node.js & NPM on your machine.](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

[Install Firebase CLI Tools](https://firebase.google.com/docs/cli)

[Create a new Firebase project.](https://firebase.google.com/)

[Create Airtable](https://airtable.com/invite/r/8zPT6nN2)

[Copy Base](https://airtable.com/shr1RU5wp0Hl290gt)

#### Clone repository and cd into it.
```
git clone https://github.com/majordomo-consulting/openride.git
cd openride
```

#### Gather Firebase credentials then copy into config file.
```
firebase login
firebase apps:sdkconfig web
nano /src/services/firebase.js
```

#### Install dependencies
```
npm install
```

#### Compiles and hot-reloads for development
```
npm run serve
```

## Customize

## Deployment
Airtable 

Firebase Setup

## Usage

Your admin panel is available at https://your.url/admin

Update your Airtable as needed - changes are immediately reflected within your application

Changing authentication from false to true in `/src/router/index.js` will add Firebase authentication to those pages

## Technologies & Attributions

Vue.js, Leaflet.js, OpenStreetMap, Vuetify, Firebase, Airtable

## License

This software is released under the GPL 3.
