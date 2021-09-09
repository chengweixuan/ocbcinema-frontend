# Ocbcinema (ocbcinema-frontend)

Frontend component for the OCBCinema seat booking web service.
Developed for OCBC Hack It!
Made with Vue.js using the Quasar framework.

Backend component and more information on the project found at: https://github.com/chengweixuan/OCBCinema

## This project is now deployed live at:  https://ocbcinema.herokuapp.com/

## Important for local set-up
```bash
Edit src/pages/Index.vue at line 185

Change
const BACKEND_URL = cloud
to
const BACKEND_URL = localhost

```

## Install the dependencies
```bash
yarn
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
quasar dev
```

### Lint the files
```bash
yarn run lint
```

### Build the app for production
```bash
quasar build
```

### Customize the configuration
See [Configuring quasar.conf.js](https://v2.quasar.dev/quasar-cli/quasar-conf-js).
