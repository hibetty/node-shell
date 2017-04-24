var command = require('./commands');
var chalk = require('chalk');

var done = function(output){
  process.stdout.write(output);
  process.stdout.write(chalk.yellow('\nprompt > '));
};

//output a prompt
process.stdout.write(chalk.yellow('prompt > '));

//The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function(){
  var args = String(...arguments);
  var cmd = args.slice(0, args.indexOf(' '));
  var body = args.slice(args.indexOf(' ')).trim();

  command[cmd](body, done);
});
