<?php

require('../vendor/autoload.php');

$app = new Silex\Application();
$app['debug'] = true;

// Register the monolog logging service
$app->register(new Silex\Provider\MonologServiceProvider(), array(
  'monolog.logfile' => 'php://stderr',
));

// Our web handlers

$app->get('/', function() use($app) {
  $app['monolog']->addDebug('logging output.');
  return
      '<html>
         <head>
             <title>test</title>
         </head>
         <body>
              <div>
        		Hi world!
              </div>
          </body>
      </html>'

});

$app->run();

?>
