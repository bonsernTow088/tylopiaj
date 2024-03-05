// tylopiaj.js

const Strimanga = require('strimanga');

const scheduler = new Strimanga();

function task() {
  console.log('Tylopiaj task executed');
}

scheduler.scheduleTask(task, 2000); // Task will run every 2 seconds

// Stop the scheduler after some time
setTimeout(() => {
  scheduler.stop();
  console.log('Tylopiaj scheduler stopped');
}, 10000); // Stop the scheduler after 10 seconds
