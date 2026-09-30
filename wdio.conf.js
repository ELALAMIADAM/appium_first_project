const { exec } = require('child_process');
exports.config = {
    
    runner: 'local',
    hostname: 'localhost',
    port: 4723,
    path:'/',
   
    specs: [
        './test/specs/**/*.js'
    ],
   
    
    
    exclude: [
       
    ],
  
    maxInstances: 1,
    
    capabilities: [{
        // capabilities for local Appium web tests on an Android Emulator
        platformName: 'Android',
        'appium:deviceName': 'MyEmulator',
        'appium:automationName': 'UiAutomator2',
        'appium:appPackage': 'com.appiumpro.the_app',
        'appium:appActivity': '.MainActivity',
        'appium:chromdriverAutodownload': true,
        'appium:adbExecTimeout':120000,
        'appium:newCommandTimeout':600,
        //"appium:chromedriverExecutable": "C:\\chromedriver\\chromedriver.exe"
    }],

    
    logLevel: 'info',
 
    bail: 0,
  
    waitforTimeout: 10000,
    
    connectionRetryTimeout: 120000,
    
    connectionRetryCount: 3,
   
    services: [],


    framework: 'mocha',
    
    
    reporters: ['spec',
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: false,
          }]

    ],

    // Options to be passed to Mocha.
    // See the full list at http://mochajs.org/
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
}