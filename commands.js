var fs = require('fs');
var chalk = require('chalk');
var output;

module.exports = {
  pwd: function(param, done){
  output = chalk.magenta.bold(__dirname);
  done(output);
  },
  date: function(param, done){
    const now = new Date().toISOString().replace(/T/, ' ')
      .replace(/\..+/, '');
    output = chalk.red.underline(now);
    done(output);
  },
  ls: function(param, done){
    var files = fs.readdir(__dirname, function(err, files){
    if (err) throw err;
    output = chalk.green(files.join('     '));
    done(output);
    });
  },
  echo: function(param, done){
    output = chalk.cyan.italic(String(param));
    done(output);
  },
  cat: function(param, done){
    var path = __dirname + '/' + param;
    fs.readFile(path, 'utf8', function(err, data){
      if (err) throw err;
      output = data;
      done(output);
    });
  },
  head: function(param, done) {
    var path = __dirname + '/' + param;
    var theHead = '';

    fs.readFile(path, 'utf8', function(err, data){
      if (err) throw err;
      var arr = data.split('\n');
      for (var i = 0; i < 5; i++){
        theHead += arr[i] + '\n';
      }
      done(theHead);
    });
  },
  tail: function(param, done) {
    var path = __dirname + '/' + param;
    var theTail = '';

    fs.readFile(path, 'utf8', function(err, data){
      if (err) throw err;
      var arr = data.split('\n');
      var len = arr.length;
      for (var i = len - 5; i < len; i++){
        theTail += arr[i] + '\n';
      }
      done(theTail);
    });
  }
};
