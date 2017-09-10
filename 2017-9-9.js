require('chromedriver');
describe('打开腾讯网页',function(){
    let webdriver = require('selenium-webdriver');
    let driver = new webdriver.Builder().forBrowser('chrome').build();
    let By = webdriver.By;
    describe('打开chrome浏览器',function(){
        it('打开浏览器',async function(){
            await driver.get('http://www.qq.com');
        });
        it('点击登录按钮',async function(){
            await driver.findElement(By.id('loginGrayLayout').click());
        });
        it('点击头像登录',async function(){
            await driver.findElement(By.id('img_out_327821859').click());
        });
    });
});