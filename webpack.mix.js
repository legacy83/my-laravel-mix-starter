let mix = require( 'laravel-mix' );

/*
 |--------------------------------------------------------------------------
 | Lorem ipsum dolor sit amet
 |--------------------------------------------------------------------------
 |
 | Suspendisse sodales ipsum non justo imperdiet, ut lacinia erat
 | cursus. Vestibulum dictum nisi ligula, in dictum justo pulvinar quis.
 |
 */

mix.styles( [
    'resources/assets/css/screen.css'
], 'dist/screen.css' );

/*
 |--------------------------------------------------------------------------
 | Lorem ipsum dolor sit amet
 |--------------------------------------------------------------------------
 |
 | Suspendisse sodales ipsum non justo imperdiet, ut lacinia erat
 | cursus. Vestibulum dictum nisi ligula, in dictum justo pulvinar quis.
 |
 */

mix.scripts( [
    'resources/assets/js/app.js'
], 'dist/app.js' );
