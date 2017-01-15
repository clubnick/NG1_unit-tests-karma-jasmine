# angular1_unit-tests-karma-jasmine

## Test simulation 
Test perform test of angular1 filters using mocks (module MyApp is simulated by mock)


## Angular Documentation Readme
Upgraders: for a fresh start, consider running these commands 
* `git clean -xdf` 
* `npm install` or `npm i`

<a name="Based on"></a>
# Based on:
* https://code.ciphertrick.com/2015/08/03/angularjs-unit-testing-tutorial-karma-jasmine/
* AngularJS - Angular1 unit testing tutorial with karma-jasmine

Install and run:
------------------------
"npm install"
"karma start" / or "npm test"

 There are tests.js - all right
 Uncomment line 26 in tests.js
 //expect(reverse('jam')).toBe('oops'); // this test should fail

Install from scratch:
------------------------

npm init // to create package.json

npm i angular -S          // (npm install angular2 --save)

npm i karma@* -D          //(npm install -g karma --save-dev)
npm i karma@* -g          // also install globally 

npm i karma-jasmine jasmine-core -D  // (npm install karma-jasmine jasmine-core --save-dev)

npm install angular-mocks --save-dev

npm install karma-phantomjs-launcher --save-dev
npm install karma-chrome-launcher --save-dev
npm install karma-firefox-launcher --save-dev

...
Important Update:
FOR NPM > 3.x
If you are using npm v 3.x you might face some problems while running karma start.
The reason is the way in which npm 3.x installs dependencies.
The solution we found was to install phantomjs-prebuilt@2.1.4 globally and as well as locally.

 npm i phantomjs-prebuilt@2.1.4 -g

Also, jasmine-core is required to be installed globally. eg: 

 npm i jasmine-core -g
...

Hint:
-----------------
Module "MyApp" is simulated by Mock 
tests/tests.js:
  beforeEach(module('MyApp')); //load module

node_modules/angular-mocks/angular-mocks.js
  .. here is defined controller for MyApp 
