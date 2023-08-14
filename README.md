# Weather Widget

This is a Vue-based SPA.
Upon initial start the app detects your geolocation and displays local weather (using ipinfo.io). 
Go to settings to add new locations. You can add as many locations as you want, while the widget displays the first two locations in the list. Swap location cards to set the order or delete locations, if required.
The settings are cached via localStorage, so your locations are saved between app sessions.

## Install:

```
make install
```

### Compile and hot-reload for development
```
make start
```

### Compile and minify for production
```
make build
```

### Lint and fix files
```
make lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
