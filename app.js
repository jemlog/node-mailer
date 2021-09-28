const nodemailer = require('nodemailer')

const email = {

  "host" : "smtp.mailtrap.io",
  "port" : 2525,
  "secure" : false,
  "auth" : {
    "user" : "a503dadf026d02",
    "pass" : "38e28105b3ac85"
  }
}



const send = async (data) => {

  nodemailer.createTransport(email).sendMail(data, function(error, info){
    if(error)
    {
      console.log(error);
    }
    else
    {
      console.log(info);
      return info.response;
    }
  })
}


const content = {
  from : "jemin03120111@gmail.com",
  to : "00f853227b-833d5f@inbox.mailtrap.io",
  subject : '이메일 테스트',
  text: 'nodemailer를 통한 이메일 시험'
}

send(content);

