/**
 * Only build libkraken.dylib for macOS
 */
const { series } = require('gulp');
const chalk = require('chalk');

require('./tasks');

// Run tasks
series(
  'git-submodule',
  'macos-dylib-clean',
  'compile-polyfill',
  'generate-bindings-code',
  'build-darwin-mercury-lib',
)((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(chalk.green('Success.'));
  }
});
