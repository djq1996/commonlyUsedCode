const nodemailer = require('nodemailer');
// 开启一个 SMTP 连接池
const mail_opts = {
  host: 'smtp.163.com',
  //   port: 587, // 587
  port: 465, // 587
  auth: {
    user: '16619779673@163.com',
    pass: '123qaz'
  },
  ignoreTLS: true
};
let transporter = nodemailer.createTransport({
  host: mail_opts.host,
  port: mail_opts.port,
  secure: true, // secure:true for port 465, secure:false for port 587
  auth: {
    user: mail_opts.auth.user,
    pass: mail_opts.auth.pass
  }
});

// 设置邮件内容（谁发送什么给谁）
let mailOptions = {
  from: '"starry" <16619779673@163.com>', // 发件人
  to: '1259505412@qq.com', // 收件人
  subject: 'Hello, I from 163', // 主题
  text: '这是一封来自 Node.js 的测试邮件', // plain text body
  html: '<b>这是一封来自 Node.js 的测试邮件</b>', // html body
  // 下面是发送附件，不需要就注释掉
  attachments: [
    // {
    //   filename: 'test.md',
    //   path: './test.md'
    // },
    {
      filename: 'content.txt',
      content: '发送内容'
    }
  ]
};

// 使用先前创建的传输器的 sendMail 方法传递消息对象
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error);
  }
  console.log(`Message: ${info.messageId}`);
  console.log(`sent: ${info.response}`);
});



//---------------------------------------


const nodemailer = require('nodemailer');
// 开启一个 SMTP 连接池
const mail_opts = {
  host: 'smtp.qq.com',
  // port: 587, // 587
  port: 465, // 587
  auth: {
    user: '1259505412@qq.com',
    pass: 'hhuvyloyqdrohcje'
  },
  ignoreTLS: true
};
let transporter = nodemailer.createTransport({
  host: mail_opts.host,
  port: mail_opts.port,
  secure: true, // secure:true for port 465, secure:false for port 587
  auth: {
    user: mail_opts.auth.user,
    pass: mail_opts.auth.pass
  }
});

// 设置邮件内容（谁发送什么给谁）
let mailOptions = {
  from: '"starry" <1259505412@qq.com>', // 发件人
  to: '16619779673@163.com', // 收件人
  subject: 'Hello, I from QQ', // 主题
  text: '这是一封来自 Node.js 的测试邮件', // plain text body
  html: '<b>这是一封来自 Node.js 的测试邮件</b>', // html body
  // 下面是发送附件，不需要就注释掉
  attachments: [
    // {
    //   filename: 'test.md',
    //   path: './test.md'
    // },
    {
      filename: 'content.txt',
      content: '发送内容'
    }
  ]
};

// 使用先前创建的传输器的 sendMail 方法传递消息对象
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error);
  }
  console.log(`Message: ${info.messageId}`);
  console.log(`sent: ${info.response}`);
});
