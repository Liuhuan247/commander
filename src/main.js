const Commander = require('commander');
const { version, name } = require('./utils/constants');

const { program } = Commander;

// program.version(version).parse(process.argv);

// const program = new Commander.Command();
program
  .name(name)
  .usage('<命令> [选项]')
  .version(version, '-V, --version', '输出h-cli版本号')
  .helpOption('-h, --help', '显示帮助命令')
  .option('-d, --debug', '是否开启调试模式', 'false')
  .option('-e, --envName <envName>', '获取环境变量')
  .parse(process.argv);

program.outputHelp();

console.log(program.opts());
