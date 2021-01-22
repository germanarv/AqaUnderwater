const mongoose = require('mongoose');

// Make sure we are running node 7.6+
const [major, minor] = process.versions.node.split('.').map(parseFloat);
if (major < 7 || (major === 7 && minor <= 5)) {
  console.log('ðŸ›‘ ðŸŒ® ðŸ¶ ðŸ’ª ðŸ’©\nHey You! \n\t ya you! \n\t\tBuster! \n\tYou\'re on an older version of node that doesn\'t support the latest and greatest things we are learning (Async + Await)! Please go to nodejs.org and download version 7.6 or greater. ðŸ‘Œ\n ');
  process.exit();
}

// Import environmental variables from our variables.env file
require('dotenv').config({ path: 'variables.env' });

// Connect to our Database and handle any bad connections
mongoose.connect(process.env.DATABASE);
mongoose.Promise = global.Promise;
mongoose.connection.on('error', (err) => {
  console.error(`ðŸ™… ðŸš« ðŸ™… ðŸš« ðŸ™… ðŸš« ðŸ™… ðŸš« at ${err.message}`);
});

// READY? Let's go!

// import all of our models
require('./models/product');
require('./models/account');


// Start our app!
const app = require('./app');
app.set('port', process.env.PORT || 8000);
const server = app.listen(app.get('port'), () => {
  console.log(`Express running at PORT ${server.address().port}`);
});