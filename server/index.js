// Import nextjs and express frameworks
const next = require('next');
const express = require('express');

// check if in dev or prod env localhost or cloud servers
const dev = process.env.NODE_ENV !== 'production'
// create express app
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {

  // create express server  
  const server = express();
  // Handle all request coming to the server
  server.get('*', (req, res) => {
    // Parse req and serve component page
    // next.js is handling this and providing pages where we are navigating to
    return handle(req, res)
    
  })

  // get port from env variable or assign port at 3000
  const PORT = process.env.PORT || 3000;

  server.listen(PORT, (err) => {
    if (err) throw err
    console.log('> Ready on port ' + PORT)
  })
})
