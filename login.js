require('chromedriver');
describe('测试登录功能',function(){
    let webdriver = require('selenium-webdriver');
    let driver = new webdriver.Builder().forBrowser('chrome').build();
    let By = webdriver.By;
    describe('用例1：正常登陆',function(){
        it('打开登录界面',async function(){
            await driver.get('http://192.168.21.128:3000/signin')
        });
         it('输入用户名',async function(){
            await driver.findElement(By.id('name')).sendKeys('ronnie')
        });
        it('输入密码',async function(){
            await driver.findElement(By.id('pass')).sendKeys('123456')
        });
        it('点击登录按钮',async function(){
            await driver.findElement(By.className('span-primary')).click()
        });
    });
    describe('用例2:输入不存在的用户名登录',function(){
        it('打开登录界面',async function(){
            await driver.get('http://192.168.21.128:3000/signin')
        });
         it('输入用户名',async function(){
            await driver.findElement(By.id('name')).sendKeys('ronnie！')
        });
        it('输入密码',async function(){
            await driver.findElement(By.id('pass')).sendKeys('123456')
        });
        it('点击登录按钮',async function(){
            await driver.findElement(By.className('span-primary')).click()
        });
    });
});