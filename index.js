const Mustache = require('mustache');
const fs = require('fs');
const MUSTACHE_MAIN_DIR = './index.mustache';

/**
  * DATA is the object that contains all
  * the data to be provided to Mustache
  * Notice the "full_name" property.
*/
let DATA = {
  full_name: 'TOMBI'
};

/**
  * A - We open 'index.mustache'
  * B - We ask Mustache to render our file with the data
  * C - We create a README.md file with the generated output
  */
function generateReadMe() {
  fs.readFile(MUSTACHE_MAIN_DIR, (err, data) =>  {
    if (err) throw err;
    const output = Mustache.render(data.toString(), DATA);
    fs.writeFileSync('README.md', output);
  });
}
generateReadMe();
