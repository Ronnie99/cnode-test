require('chromedriver');
let webdriver = require('selenium-webdriver');
let driver = new webdriver.Builder().forBrowser('chrome').build()
let By  = webdriver.By;
driver = new webdriver.Builder().forBrowser('chrome').build();
driver.get('http://192.168.21.128:3000/signin');
driver.sleep(8000)
driver.findElement(By.id('name')).sendKeys('ronnie');
driver.findElement(By.id('pass')).sendKeys('123456');
driver.findElement(By.className('span-primary')).click();
driver.findElement(By.id('create_topic_btn')).click();
driver.findElement(By.id('tab-value')).click();
driver.findElement(By.xpath('//*[@id="tab-value"]/option[2]')).click();
driver.findElement(By.id('title')).sendKeys('黑泽明')
driver.findElement(By.className('eicon-link')).click()
driver.sleep(5000)
driver.findElement(By.xpath('/html/body/div[4]/div[2]/form/div[1]/div/input')).sendKeys('hello,world')
driver.findElement(By.xpath('/html/body/div[4]/div[2]/form/div[2]/div/input')).clear()
driver.findElement(By.xpath('/html/body/div[4]/div[2]/form/div[2]/div/input')).sendKeys('http://192.168.21.128:3000/signin')