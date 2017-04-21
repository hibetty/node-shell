//output a prompt
process.stdout.write('prompt > ');

//The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function(data){
  var cmd = data.toString().trim(); //remove the newline

  if(cmd === 'date'){
    const now = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '') ;

    process.stdout.write(now);
  }
})
