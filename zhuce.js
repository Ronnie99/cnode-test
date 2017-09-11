require('chromedriver');
describe('cnode注册登录测试', function(){
    this.timeout(60*1000);
    let webdriver = require('selenium-webdriver');
    let driver = new webdriver.Builder().forBrowser('chrome').build();
    let By = webdriver.By;
    let fs = require('fs')
    let user = new Date().valueOf();
    after( function(){
        driver.takeScreenshot().then(function(imagedata){
            fs.writeFileSync('jietu/'+ user + '.png',imagedata,'base64')
        });
        driver.quit();
    });
    describe('用例1：正常注册',function(){
        it('打开注册界面',async function(){
            await driver.get('http://192.168.21.128:3000/signup')
        });
        it('输入用户名',async function(){
            await driver.findElement(By.id('loginname')).sendKeys('nihao')
        });
        it('输入密码',async function(){
            await driver.findElement(By.id('pass')).sendKeys('123456')
        });
        it('确认密码',async function(){
            await driver.findElement(By.id('re_pass')).sendKeys('123456')
        });
        it('输入注册邮箱',async function(){
            await driver.findElement(By.id('email')).sendKeys('327821859@qq.com')
        });
        it('点击注册按钮',async function(){
            await driver.findElement(By.className('span-primary')).click()
        });
    });
    describe('用例2：两次密码不一致',function(){
        it('打开注册界面',async function(){
            await driver.get('http://192.168.21.128:3000/signup')
        });
        it('输入用户名',async function(){
            await driver.findElement(By.id('loginname')).sendKeys('nihao1')
        });
        it('输入密码',async function(){
            await driver.findElement(By.id('pass')).sendKeys('123456')
        });
        it('确认密码',async function(){
            await driver.findElement(By.id('re_pass')).sendKeys('12345')
        });
        it('输入注册邮箱',async function(){
            await driver.findElement(By.id('email')).sendKeys('327821859@qq.com')
        });
        it('点击注册按钮',async function(){
            await driver.findElement(By.className('span-primary')).click()
        });
    });
    describe('用例3：用户名为空注册',function(){
        it('打开注册界面',async function(){
            await driver.get('http://192.168.21.128:3000/signup')
        });
        it('输入密码',async function(){
            await driver.findElement(By.id('pass')).sendKeys('123456')
        });
        it('确认密码',async function(){
            await driver.findElement(By.id('re_pass')).sendKeys('123456')
        });
        it('输入注册邮箱',async function(){
            await driver.findElement(By.id('email')).sendKeys('327821859@qq.com')
        });
        it('点击注册按钮',async function(){
            await driver.findElement(By.className('span-primary')).click()
        });
    });
    describe('用例4：用户名含有特殊字符',function(){
        it('打开注册界面',async function(){
            await driver.get('http://192.168.21.128:3000/signup')
        });
        it('输入用户名',async function(){
            await driver.findElement(By.id('loginname')).sendKeys('nihao~！@')
        });
        it('输入密码',async function(){
            await driver.findElement(By.id('pass')).sendKeys('123456')
        });
        it('确认密码',async function(){
            await driver.findElement(By.id('re_pass')).sendKeys('123456')
        });
          it('输入注册邮箱',async function(){
            await driver.findElement(By.id('email')).sendKeys('327821859@qq.com')
        });
        it('点击注册按钮',async function(){
            await driver.findElement(By.className('span-primary')).click()
        });
    });
    describe('用例5：密码为空',function(){
        it('打开注册界面',async function(){
            await driver.get('http://192.168.21.128:3000/signup')
        });
        it('输入用户名',async function(){
            await driver.findElement(By.id('loginname')).sendKeys('nihao2')
        });
        it('确认密码',async function(){
            await driver.findElement(By.id('re_pass')).sendKeys('123456')
        });
          it('输入注册邮箱',async function(){
            await driver.findElement(By.id('email')).sendKeys('327821859@qq.com')
        });
        it('点击注册按钮',async function(){
            await driver.findElement(By.className('span-primary')).click()
        });
    });
    describe('用例5：密码不足6位',function(){
        it('打开注册界面',async function(){
            await driver.get('http://192.168.21.128:3000/signup')
        });
        it('输入用户名',async function(){
            await driver.findElement(By.id('loginname')).sendKeys('nihao3')
        });
         it('输入密码',async function(){
            await driver.findElement(By.id('pass')).sendKeys('1234')
        });
        it('确认密码',async function(){
            await driver.findElement(By.id('re_pass')).sendKeys('1234')
        });
          it('输入注册邮箱',async function(){
            await driver.findElement(By.id('email')).sendKeys('327821859@qq.com')
        });
        it('点击注册按钮',async function(){
            await driver.findElement(By.className('span-primary')).click()
        });
    });
});