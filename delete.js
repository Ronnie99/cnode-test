require('chromedriver');
let webdriver = require('selenium-webdriver');
let driver = new webdriver.Builder().forBrowser('chrome').build()
let By  = webdriver.By;
let fs = require('fs')
describe('链接测试',function(){
    this.timeout(60000)
    before(async function () {//打开两个界面？
            await driver.sleep(3000)          
            await driver.get('http://192.168.21.128:3000/signin');
            await driver.sleep(3000)
            await driver.findElement(By.id('name')).sendKeys('ronnie');
            await driver.findElement(By.id('pass')).sendKeys('123456');
            await driver.findElement(By.className('span-primary')).click();
        });
        after(async function () {
            await driver.sleep(5000)
        });
    describe('用例:链接测试', function () {     
        it('发布话题',async function(){
            await driver.findElement(By.id('create_topic_btn')).click();
            await driver.findElement(By.id('tab-value')).click();
            await driver.findElement(By.xpath('//*[@id="tab-value"]/option[3]')).click();
            await driver.findElement(By.id('title')).sendKeys('你我皆bus人')
            await driver.findElement(By.className('CodeMirror-scroll')).click();
            await driver.actions().mouseMove(driver.findElement(By.className('CodeMirror-scroll'))).sendKeys('你可以放心，我不会为了留你而假装可怜兮兮').perform();
            await driver.findElement(By.className('span-primary submit_btn')).click()
        });
        it('点击删除按钮',async function(){
            await driver.findElement(By.className('fa fa-lg fa-trash')).click()
        })
        it('切换到删除界面',async function(){
            driver.sleep(5000)
            let Alert = driver.switchTo().alert()         
            Alert.accept()
        }) 
    });
});    