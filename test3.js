require('chromedriver');
var webdriver = require('selenium-webdriver')
var driver = new webdriver.Builder().forBrowser('chrome').build();
var By = webdriver.By;
driver.get('https://www.baidu.com')