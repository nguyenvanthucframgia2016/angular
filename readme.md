#Config Angularjs 2 in Laravel 5.3

##*. Install npm and nodejs

```php
sudo apt-get install npm
sudo npm install -g n
sudo n stable
sudo apt-get install nodejs
sudo ln -s /usr/bin/nodejs /usr/bin/node
```

##1. Open package.json file and paste

```php
{
  "private": true,
  "scripts": {
    "prod": "gulp --production",
    "dev": "gulp watch",
    "start": "concurrently \"npm run tsc:w\" \"npm run lite\" ",
    "lite": "lite-server",
    "postinstall": "typings install",
    "tsc": "tsc",
    "tsc:w": "tsc -w",
    "typings": "typings"
  },
  "dependencies": {
    "@angular/common": "2.0.0",
    "@angular/compiler": "2.0.0",
    "@angular/core": "2.0.0",
    "@angular/forms": "2.0.0",
    "@angular/http": "2.0.0",
    "@angular/platform-browser": "2.0.0",
    "@angular/platform-browser-dynamic": "2.0.0",
    "@angular/router": "3.0.0",
    "@angular/upgrade": "2.0.0",
    "core-js": "^2.4.1",
    "reflect-metadata": "^0.1.3",
    "rxjs": "5.0.0-beta.12",
    "systemjs": "0.19.27",
    "zone.js": "^0.6.23",
    "angular2-in-memory-web-api": "0.0.20",
    "bootstrap": "^3.3.6"
  },
  "devDependencies": {
    "bootstrap-sass": "^3.3.7",
    "gulp": "^3.9.1",
    "jquery": "^3.1.0",
    "laravel-elixir": "^6.0.0-9",
    "laravel-elixir-vue-2": "^0.2.0",
    "laravel-elixir-webpack-official": "^1.0.2",
    "lodash": "^4.16.2",
    "vue": "^2.0.1",
    "vue-resource": "^1.0.3",
    "elixir-typescript": "2.0.0",

    "concurrently": "^2.0.0",
    "lite-server": "^2.2.2",
    "typescript": "^2.0.2",
    "typings":"^1.3.2"
  }
}
```

##2. Create a file tsconfig.json in your root directory

```php
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "moduleResolution": "node",
    "sourceMap": true,
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "removeComments": false,
    "noImplicitAny": false
  }
}
```

##3. Create a file typings.json in your root directory

```php
{
  "globalDependencies": {
    "core-js": "registry:dt/core-js#0.0.0+20160725163759",
    "jasmine": "registry:dt/jasmine#2.2.0+20160621224255",
    "node": "registry:dt/node#6.0.0+20160909174046"
  }
}
```

##4. Write command in your terminal

```php
npm install
sudo chmod-R 777 project
```

##5. create a app folder in public folder and add three file below.
###5.1 create file main.ts

```php
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);
```

###5.2 create file app.module.ts

```php
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
```

###5.2 create file app.component.ts

```php
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: '<h1>My First Angular App</h1>'
})

export class AppComponent { }
```

##7. edit file gulpfile.js

```php

const elixir = require('laravel-elixir');

require('laravel-elixir-vue-2');

elixir(mix => {
    mix.sass('app.scss')
        .webpack('app.js')
        .copy('node_modules/@angular', 'public/@angular')
        .copy('node_modules/anular2-in-memory-web-api', 'public/anular2-in-memory-web-api')
        .copy('node_modules/core-js', 'public/core-js')
        .copy('node_modules/reflect-metadata', 'public/reflect-metadata')
        .copy('node_modules/systemjs', 'public/systemjs')
        .copy('node_modules/rxjs', 'public/rxjs')
        .copy('node_modules/zone.js', 'public/zone.js');
});
```

##8. create file systemjs.config.js

```php
(function (global) {
    System.config({

        // map tells the System loader where to look for things
        map: {
            // our app is within the app folder
            app: 'angular/app',
            // angular bundles
            '@angular/core': '@angular/core/bundles/core.umd.js',
            '@angular/common': '@angular/common/bundles/common.umd.js',
            '@angular/compiler': '@angular/compiler/bundles/compiler.umd.js',
            '@angular/platform-browser': '@angular/platform-browser/bundles/platform-browser.umd.js',
            '@angular/platform-browser-dynamic': '@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
            '@angular/http': '@angular/http/bundles/http.umd.js',
            '@angular/router': '@angular/router/bundles/router.umd.js',
            '@angular/forms': '@angular/forms/bundles/forms.umd.js',
            // other libraries
            'rxjs':                       'rxjs',
            'angular2-in-memory-web-api': 'angular2-in-memory-web-api',
        },
        // packages tells the System loader how to load when no filename and/or no extension
        packages: {
            app: {
                main: './main.js',
                defaultExtension: 'js'
            },
            rxjs: {
                defaultExtension: 'js'
            },
            'angular2-in-memory-web-api': {
                main: './index.js',
                defaultExtension: 'js'
            }
        }
    });
})(this);
```

##9. edit file blade

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">

        <!-- 1. Load libraries -->
            <!-- Polyfill(s) for older browsers -->
        {{ Html::script('core-js/client/shim.min.js') }}
        {{ Html::script('zone.js/dist/zone.js') }}
        {{ Html::script('reflect-metadata/Reflect.js') }}
        {{ Html::script('systemjs/dist/system.src.js') }}
        {{ Html::script('angular/systemjs.config.js') }}

        <script>
            System.import('app').catch(function(err){ console.error(err); });
        </script>
    </head>
    <body>
        <my-app>Loading...</my-app>
    </body>
</html>
```

##10. Run this commandline to complier typescript

```php
npm run tsc:w
```