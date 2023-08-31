# 04-pokemon-game

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### Cap 105 
Si se ven errores en renderizado en VUE3 

1-utilizar wrapper.html() para los test con Jest


2-Ademas hay q hacer estos cambios de config

Entonces, hagan esta configuración en el Jest.config.js

module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  transform: {
    '^.+\\.vue$': 'vue3-jest',
    '^.+\\js$': 'babel-jest',
  },
}
Y también instalen la dependencia:

yarn add vue3-jest --dev 