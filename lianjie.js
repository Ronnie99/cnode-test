require('chromedriver');
let webdriver = require('selenium-webdriver');
let driver = new webdriver.Builder().forBrowser('chrome').build()
let By  = webdriver.By;
let fs = require('fs')

describe('链接测试',function(){
    this.timeout(60000)
    describe('用例:链接测试', function () {
        before(async function () {
            driver = new webdriver.Builder().forBrowser('chrome').build();
            await driver.get('http://192.168.21.128:3000/signin');
            await driver.findElement(By.id('name')).sendKeys('ronnie');
            await driver.findElement
            await driver.findElement(By.id('pass')).sendKeys('123456');
            await driver.findElement(By.className('span-primary')).click();
        });
        after(async function () {
            await driver.quit();
        });
        it('点击发布话题按钮', async function () {
            await driver.findElement(By.id('create_topic_btn')).click();
        });
        it('选择板块', async function () {
            await driver.findElement(By.id('tab-value')).click();
        });
        it('选择分享', async function () {
            await driver.findElement(By.xpath('//*[@id="tab-value"]/option[2]')).click();
        });
        it('输入标题', async function () {
            await driver.findElement(By.id('title')).sendKeys('黑泽明')
        });
        it('点击链接按钮',async function(){
            await driver.findElement(By.className('eicon-link')).click()
        });
        it('输入标题',async function(){
            await driver.sleep(5000);
            await driver.findElement(By.xpath('/html/body/div[4]/div[2]/form/div[1]/div/input')).sendKeys('hello,world')
        })    
        it('清除链接内容',async function(){
            await driver.findElement(By.xpath('/html/body/div[4]/div[2]/form/div[2]/div/input')).clear();
            await driver.findElement(By.xpath('/html/body/div[4]/div[2]/form/div[2]/div/input')).sendKeys('http://192.168.21.128:3000/signin')
            await driver.findElement(By.className('btn btn-primary')).click()
        });
        it('点击发表话题',async function(){
            await driver.sleep(3000)
            await driver.findElement(By.className('span-primary submit_btn')).click()
        });   
    });    
});