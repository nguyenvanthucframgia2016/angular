const elixir = require('laravel-elixir');

require('laravel-elixir-vue-2');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(mix => {
    mix.sass('app.scss')
        .webpack('app.js')
        .copy('node_modules/@angular', 'public/@angular')
        .copy('node_modules/anular2-in-memory-web-api', 'public/anular2-in-memory-web-api')
        .copy('node_modules/core-js', 'public/core-js')
        .copy('node_modules/reflect-metadata', 'public/reflect-metadata')
        .copy('node_modules/systemjs', 'public/systemjs')
        .copy('node_modules/rxjs', 'public/rxjs')
        .copy('node_modules/zone.js', 'public/zone.js')
        .sass('common/common.scss', 'public/css/common')
        .sass('footer/footer.scss', 'public/css/footer')
        .sass('header/header.scss', 'public/css/header');
});
