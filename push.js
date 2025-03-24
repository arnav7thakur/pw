//server

// var push = require('web-push');
// let vapidKeys = push.generateVAPIDKeys();
//once you do this then you can do node push.js and it will generate the keys for you

var push = require('web-push');

let vapidKeys = {   
 publicKey: 'BA9W0Y6_0zPUQWo-adS1tKtHC3BGqtdMYI-I09PhPisQ-F8DXf2DT3b4qFwdGrqg43yOrTnNTuQcHhAe1qfQr4w',
 privateKey: 'ps8o8D5Zdu4ceVNVQmqtdMPwFTZqk3IHccWlb5DOIEM'
}


push.setVapidDetails('mailto:test@code.com', vapidKeys.publicKey, vapidKeys.privateKey)

let sub ={"endpoint":"https://fcm.googleapis.com/fcm/send/caFZpMdq4Hs:APA91bFBAT5u-mUl43emItsbK1JHiRLpwc18CoIJQHog4Z7nYMIYPEdhjfnsJHMknTgbNMd_py4zl8Yyoa4-ACwskvaAuxdBTpsNTG9d4_WX1kcKsetXsU-Th1wBQyUApKxUYa-IFdCB","expirationTime":null,"keys":{"p256dh":"BBJsphKBcuO-xW8HK4dYR1sWCw7PjQS-C13Dyszbl3jNMBTeBXPQt1KeY2r-_Nh6ZUE_vmR16X2G9GnRsO4Dxrs","auth":"UR4pz_6Ujtcq-gvINl-sDw"}}
push.sendNotification(sub, 'test message')