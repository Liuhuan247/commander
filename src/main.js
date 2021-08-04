const { program } = require('commander');
const { version } = require('./utils/constants');

program.version(version).parse(process.argv);

const actionsMap = {
  create: {
    // 创建模板
    description: '创建一个项目',
    alias: 'cr',
    examples: ['h create <template-name>'],
  },
  config: {
    // 配置配置文件
    description: '配置文件',
    alias: 'c',
    examples: ['h config get <k>', 'h config set <k> <v>'],
  },
  //   '*': {
  //     description: 'command not found',
  //     alias: '',
  //   },
};
// 循环创建命令
Object.keys(actionsMap).forEach((action) => {
  program
    .command(action) // 命令的名称
    .alias(actionsMap[action].alias) // 命令的别名
    .description(actionsMap[action].description) // 命令的描述
    .action(() => {
      // 动作
      console.log(action);
    })
    .on('--help', () => {
      console.log('Examples');
      Object.keys(actionsMap).forEach((action) => {
        (actionsMap[action].examples || []).forEach((example) => {
          console.log(` ${example}`);
        });
      });
    });
});

program.version(version).parse(process.argv);
