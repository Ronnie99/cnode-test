let nodemailer = require('nodemailer');
let userinfo = {
    host:   "smtp.163.com"
    port:465,
    secure:true,
    auth:{
        user:'ronnie6330@163.com'
        pass:'RENGANG327821'

    }
}
let sendmailinfo = {
    from:'327821859@qq.com',
    to:'1324641287@qq.com'
    subject:'HELLO',
    text:'春天花会开，鸟儿自由自在'
}
let authemai = nodemailer.createTransport(userinfo)
authemai.sendMail(sendmailinfo,function(err,info){
    if(err){
        console.log(err)
    }
    console.log('send..')
}) 