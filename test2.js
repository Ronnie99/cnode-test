require('chromedriver')
describe('测试用户注册登录', function () {
    this.timeout(60*1000)
    let webdriver = require('selenium-webdriver')
    let driver = new webdriver.Builder().forBrowser('chrome').build();
    let By = webdriver.By;
    let fs = require('fs');
    after(function () {      
        driver.close();
    });
    describe('yongli1', function () {
        it('导航到登录页面', async function () {
            await driver.get("http://www.qq.com")
        });
        it('等待5秒钟',async function(){
            driver.sleep(5000);
        });
        it('点击登录按钮',async function(){
            await driver.findElement(By.id('loginGrayLayout')).click();
        });
        it('切换到头像点击界面',async function(){
             await driver.switchTo().frame('login_frame').then(function(){
                 driver.findElement(By.id('img_out_327821859')).click();
             });
        });
        it('截屏',async function(){
            await driver.takeScreenshot().then(function(imagedata){
                fs.writeFileSync('tengxun.png',imagedata,'base64')
            });
        });
    });
});