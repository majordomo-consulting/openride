# openride

[FRONT END DEMO](https://openride-io.firebaseapp.com)

[ADMIN DASHBOARD DEMO](https://openride-io.firebaseapp.com/admin)

## Installation
[Install Node.js & NPM on your machine.](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

[Install Firebase CLI Tools](https://firebase.google.com/docs/cli)

[Create a new Firebase project.](https://firebase.google.com/)

#### Clone repository and cd into it.
```
git clone https://github.com/majordomo-systems/openride.git
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

## Technologies & Attributions

Vue.js, Leaflet.js, OpenStreetMap, Vuetify, Firebase, Airtable

## License

This software is released under the GPL 3.