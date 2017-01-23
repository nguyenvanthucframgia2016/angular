<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">
        {!! Html::style('css/app.css') !!}
        {!! Html::style('css/common/common.css') !!}

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
        <div class="container">
            <h4>Welcome to Angularjs 2</h4>
            <my-app>Loading...</my-app>
        </div>
    </body>
</html>
