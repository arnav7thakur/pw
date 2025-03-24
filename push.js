//server

// var push = require('web-push');
// let vapidKeys = push.generateVAPIDKeys();
//once you do this then you can do node push.js and it will generate the keys for you

const webpush = require('web-push');

const vapidKeys = {   
 publicKey: 'BA9W0Y6_0zPUQWo-adS1tKtHC3BGqtdMYI-I09PhPisQ-F8DXf2DT3b4qFwdGrqg43yOrTnNTuQcHhAe1qfQr4w',
 privateKey: 'ps8o8D5Zdu4ceVNVQmqtdMPwFTZqk3IHccWlb5DOIEM'
}


webpush.setVapidDetails('mailto:test@code.com', vapidKeys.publicKey, vapidKeys.privateKey)

let pushSubscription ={"endpoint":"https://fcm.googleapis.com/fcm/send/caFZpMdq4Hs:APA91bFBAT5u-mUl43emItsbK1JHiRLpwc18CoIJQHog4Z7nYMIYPEdhjfnsJHMknTgbNMd_py4zl8Yyoa4-ACwskvaAuxdBTpsNTG9d4_WX1kcKsetXsU-Th1wBQyUApKxUYa-IFdCB","expirationTime":null,"keys":{"p256dh":"BBJsphKBcuO-xW8HK4dYR1sWCw7PjQS-C13Dyszbl3jNMBTeBXPQt1KeY2r-_Nh6ZUE_vmR16X2G9GnRsO4Dxrs","auth":"UR4pz_6Ujtcq-gvINl-sDw"}}
webpush.sendNotification(pushSubscription, 'Push Payload Text')