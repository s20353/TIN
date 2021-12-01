const fs = require('fs');
const path = require('path');

const main = () =>
{
  const targetDirectory = process.argv[2];
  console.log(`Watching ${targetDirectory}`);
  let fsWait = false;
  fs.watch(targetDirectory, (eventType, filename) => {
    if (filename)
	{
      if (fsWait) return;
      fsWait = setTimeout(() =>
	  {
        fsWait = false;
      }, 100);

      if (eventType === 'change')
	  {
        console.log(`content changed in ${filename}`);
        const filepath = path.join(targetDirectory, filename);
        fs.readFile(filepath, (err, data) =>
		{
          if (err) throw err;
          console.log(data.toString());
        });
      }
    }
	else
	{
      console.log('filename not provided');
    }
  });
};

if (process.argv.length === 3)
{
  main();
}
else
{
  console.log(`process.argv length =${process.argv.length}`);
  console.log('Please enter directory name.');
}

//uncommented for no console auto-close
process.stdin.resume();