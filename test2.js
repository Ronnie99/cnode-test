require('chromedriver');
let webdriver = require('selenium-webdriver');
let chrome = require("selenium-webdriver/chrome")
let driver = new webdriver.Builder().forBrowser('chrome').build(); 
let By = webdriver.By;
const assert = require('assert')

describe('1、登录功能',function(){
    it('step1:将浏览器最大化',async function(){
        this.timeout(90000)
        await driver.manage().window().maximize();
    });
    it('step1：打开登录页面',async function(){
        this.timeout(90000)
        await driver.get('http://192.168.21.128:3000')
    });
    it('step2：点击登录按钮',async function(){
        await driver.findElement(By.xpath('/html/body/div[1]/div/div/ul/li[6]/a')).click();
        this.timeout(90000)
    });
    it('step3:输入用户名',async function(){
        await driver.findElement(By.xpath('//*[@id="name"]')).sendKeys('ronnie');
        this.timeout(90000)
    });
    it('step4:输入密码',async function(){
        await driver.findElement(By.xpath('//*[@id="pass"]')).sendKeys('123456');
        this.timeout(90000)
    });
    it('step5：点击登录按钮',async function(){
        await driver.findElement(By.xpath('//*[@id="signin_form"]/div[3]/input')).click();
        this.timeout(90000)
    });
    it('step6:验证姓名等于xiaoqin',async function(){
        await driver.findElement(By.xpath('//*[@id="sidebar"]/div[1]/div[2]/div/div/span[1]/a')).getText('xiaoqin') 
    });
});
describe('2、发布话题',function(){
   it('step1:点击发布话题按钮',async function(){
        await driver.findElement(By.xpath('//*[@id="create_topic_btn"]/span')).click();
        this.timeout(90000)
    });
    it('step2:选择模块',async function(){
        await driver.findElement(By.xpath('//*[@id="tab-value"]')).click();
    });
    it('step3:选择分享',async function(){
        await driver.findElement(By.xpath('//*[@id="tab-value"]/option[2]')).click();
        this.timeout(90000)
    });
    it('step4:输入标题',async function(){
        await driver.findElement(By.xpath('//*[@id="title"]')).sendKeys('沉迷学习，日渐消瘦哈哈哈')
    });
    it('step5:编辑内容',async function(){
        await driver.findElement(By.className('CodeMirror-scroll')).click();
        await driver.actions().mouseMove(driver.findElement(By.className('CodeMirror-scroll'))).sendKeys('沉迷学习').perform();
    });
    it('step6:点击提交按钮',async function(){
        await driver.findElement(By.xpath('//*[@id="create_topic_form"]/fieldset/div/div/div[4]/input')).click();
    });
});
describe('3、回复话题',async function(){
    it('输入回复内容',async function(){
        await driver.findElement(By.className('CodeMirror-scroll')).click();
        await driver.actions().mouseMove(driver.findElement(By.className('CodeMirror-scroll'))).sendKeys('我回复过了').perform();
    });
    it('点击回复按钮',async function(){
        await driver.findElement(By.xpath('//*[@id="reply_form"]/div/div/div[3]/input')).click()
    });
});
describe('3、删除话题',async function(){
     it('step7:点击删除按钮',async function(){
        await driver.findElement(By.xpath('//*[@id="manage_topic"]/a[2]/i')).click();
    });
    it('step8:确定删除', async function () {
        await driver.switchTo().alert().then(function (alert) {
           return alert.accept();
                 driver.sleep(5000) 
        });
    });
});
describe('删除',async function(){
    it('删除已存在的话题',async function(){
        this.timeout(6000)
        await driver.sleep(3000);
        await driver.findElement(By.xpath('//*[@id="topic_list"]/div[1]/div/a')).click()
        await driver.findElement(By.className('fa fa-lg fa-trash')).click(); 
    });    
   it('确定删除', async function () {
       await driver.switchTo().alert().then(function (alert) {
           return alert.accept();
                driver.sleep(5000)
       });
   });
});
