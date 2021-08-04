const Commander = require('commander');
const { version } = require('./utils/constants');

// const { program } = Commander;

// program.version(version).parse(process.argv);

const program2 = new Commander.Command();
program2.version(version).parse(process.argv);
