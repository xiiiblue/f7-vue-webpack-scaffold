#!/usr/bin/env bash

# 参数定义
appName=your-app-name
remoteHost=username@xx.xx.xx.xx
remotePath=/path/to/deploy

# 参数拼接
packageName=${appName}.tar.gz
archiveName=${appName}.`date +"%Y%m%d%H%M%S"`.tar.gz

# 参数打印
echo "appName: ${appName}"
echo "packageName: ${packageName}"
echo "archiveName: ${archiveName}"
echo "remoteHost: ${remoteHost}"
echo "remotePath: ${remotePath}"

echo '工程构建'
npm install
npm run build

echo '打包'
rm -rf ${appName}
mv dist ${appName}
tar -zcvf ${packageName} ${appName}

echo '上传代码'
scp ${packageName} ${remoteHost}:${remotePath}

echo '备份目录'
ssh ${remoteHost} "tar -zcvf ${remotePath}/bak/${archiveName} ${remotePath}/${appName}"

echo '删除目录'
ssh ${remoteHost} "rm -rf ${remotePath}/${appName}"

echo '解压缩'
ssh ${remoteHost} "cd ${remotePath} && tar -zxvf ${packageName}"
