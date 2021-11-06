#!/usr/bin/env node
const fs = require('fs');
const semver = require('semver');
const path = require('path');
const {program} = require('commander');
const {execSync} = require('child_process');
const {version} = require('./package.json');

program
  .version(version)
  .requiredOption('-p, --platform <platform>',                  'Platform: Android, iOS, Windows, MacOS')
  .requiredOption('-d, --deployment-name <deploymentName>',     'Deployment name')
  .option('-m, --message <message>',                            'Release message')
  .option('-c, --config-file <configFile>',                     'Configuration file', 'react-native-code-push.json')
  .option('-t, --target-binary-version <targetBinaryVersion>',  'Target binary version')
  .command('release')
  .action(() => {
    const {username, appName} = JSON.stringify(
      fs.readFileSync(path.resolve(program.configFile), 'utf-8'),
    );
    let codePushCommand = `yarn appcenter codepush release-react -a ${username}/${appName}-${program.platform} -d ${program.deploymentName}`;
    if (program.targetBinaryVersion) {
      codePushCommand += ` -t ${program.targetBinaryVersion}`;
    }
    if (program.message) {
      codePushCommand += ` --description "${program.message}"`;
    }
    // eslint-disable-next-line no-console
    console.info(codePushCommand);
    execSync(codePushCommand, {
      stdio: 'inherit',
    });
  });

program.parse(process.argv);
