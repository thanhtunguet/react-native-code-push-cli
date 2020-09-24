react-native-code-push-cli
==========================

## Command:
```
Usage: rn-code-push [options] [command]

Options:
  -V, --version                                      output the version number
  -p, --platform <platform>                          Platform: Android, iOS, Windows, MacOS
  -d, --deployment-name <deploymentName>             Deployment name (default: "Production")
  -m, --message <message>                            Release message
  -c, --config-file <configFile>                     Configuration file (default: "react-native-code-push.json")
  -t, --target-binary-version <targetBinaryVersion>  Target binary version (default: "\\<0.0.0")
  -h, --help                                         display help for command

Commands:
  release
  help [command]                                     display help for command
```

## Config file template
```json
{
  "username": "<username>",
  "appName": "<appName>"
}
```
