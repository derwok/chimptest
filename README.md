# ChimpTest

Demonstrates the `TypeError: Cannot read property 'trim' of undefined` when using chimp with webDriver.io

```
$ sw_vers
ProductName:	Mac OS X
ProductVersion:	10.11.6
BuildVersion:	15G1217

$ node --version
v7.5.0

$ npm --version
4.1.2

$ meteor --version
Meteor 1.4.3.1

$ chimp --version
0.45.1

$ cd /usr/local/lib/node_modules/chimp/node_modules/webdriverio/bin/
$ wdio --version
v4.6.2
```

## Prerequisites
```
sudo curl https://install.meteor.com/ | sh
sudo npm install -g chimp@0.45.1
```

## Steps to reproduce
```
git clone https://github.com/derwok/chimptest.git

cd chimptest
npm run server &
npm run tests
```

## Results
Running this line in a test: `browser.click("#DOES_NOT_EXIST");` (see /tests/ChimpTest.js)

results in:
```
  1) Chimp can not click on non-existing selector:
     TypeError: Cannot read property 'trim' of undefined
      at sanitizeErrorMessage (/usr/local/lib/node_modules/chimp/node_modules/wdio-sync/build/index.js:190:34)
      at Object.<anonymous> (/usr/local/lib/node_modules/chimp/node_modules/wdio-sync/build/index.js:467:23)
      at Context.<anonymous> (tests/ChimpTest.js:13:17)
      at /usr/local/lib/node_modules/chimp/dist/lib/utils/fiberize.js:25:14

```
