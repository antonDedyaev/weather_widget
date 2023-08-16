# Weather Widget

This is a Vue-based SPA.
Upon initial start the app detects your geolocation (via ipinfo.io) and displays local weather. 
Go to settings to add new locations. You can add as many locations as you want, while the widget displays the first two locations in the list. Swap location cards to set the order or delete locations, if required.
The settings are cached via localStorage, so your locations are saved between app sessions.

Add this snippet to your project to use the widget.
```
<iframe
  	allowfullscreen
	width="340"
	height="880"
  	frameborder="0"
	src="https://antondedyaev.github.io/weather_widget/"
	name="Simple weather widget"
></iframe>

```

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

---

Данный виджет написан на Vue 3.
При первом запуске приложение определит вашу геолокацию (через сервис ipinfo.io) и отобразит прогноз погоды в вашем городе.
Для добавления новых локаций перейдите в настройки. Можно добавлять сколько угодно локаций, но виджет будет отображать только первые две из списка. Меняйте местами карточки локаций в настройках, чтобы изменить порядок отображения или удаляйте локации, если нужно.
Настройки кэшируются с помощью localStorage, поэтому они хранятся даже после закрытия приложения.

Добавьте данный сниппет в ваш проект для использования в нем виджета.

```
<iframe
  	allowfullscreen
	width="340"
	height="880"
  	frameborder="0"
	src="https://antondedyaev.github.io/weather_widget/"
	name="Simple weather widget"
></iframe>

```

## Установка:

```
make install
```

### Сборка и запуск в режиме разработки

```
make start
```

### Сборка и сжатие для продакшена

```
make build
```

### Запуск линтера и исправление ошибок

```
make lint
```

### Настройка конфигурации

See [Configuration Reference](https://cli.vuejs.org/config/).

---






