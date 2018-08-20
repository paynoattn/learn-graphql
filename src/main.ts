import * as http from 'http';

import { APP_PORT } from './app.constants';
import { init } from './app';

init()
  .then(app => {
    const server = http.createServer(app);
    server.on('err', err => console.error(`ERROR - ${err}`));
    server.listen(APP_PORT);
    console.log('Server listening on port ' + APP_PORT);
  })
  .catch(err => console.error('Errror initializing application', err));
