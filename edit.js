require('chromedriver')
let webdriver = require('selenium-webdriver')
let driver = new webdriver.Builder().forBrowser('chrome').build()
let By = webdriver.By;
describe('话题编辑',function(){
    this.timeout(60000)
    before(async function () {
        await driver.get('http://192.168.21.128:3000/signin');
        await driver.findElement(By.id('name')).sendKeys('ronnie');
        await driver.findElement(By.id('pass')).sendKeys('123456');
        await driver.findElement(By.className('span-primary')).click();
        await driver.findElement(By.id('create_topic_btn')).click();
        await driver.findElement(By.id('tab-value')).click();
        driver.sleep(3000);
        await driver.findElement(By.xpath('//*[@id="tab-value"]/option[2]')).click();
        await driver.findElement(By.id('title')).sendKeys('黑泽明不是我')
        await driver.findElement(By.className('CodeMirror-scroll')).click();
        await driver.actions().mouseMove(driver.findElement(By.className('CodeMirror-scroll'))).sendKeys('他不姓黑，不怕黑，选了光').perform();
        await driver.findElement(By.className('span-primary submit_btn')).click()
    });   
    describe('编辑',async function(){
        it('点击编辑按钮',async function(){
            await driver.findElement(By.className('fa fa-lg fa-pencil-square-o')).click();
        });
        it('提交',async function(){
            await driver.findElement(By.className('span-primary submit_btn')).click()
        });
    });
});