const keys = `activeVRDisplays
appCodeName
appName
appVersion
battery
buildID
clipboard
connection
cookieEnabled
credentials
deviceMemory
doNotTrack
geolocation
keyboard
language
languages
locks
maxTouchPoints
mediaDevices
mozBluetooth
mozTime
onLine
oscpu
permissions
platform
product
productSub
serviceWorker
userAgent
vendor
vendorSub
webdriver`.split('\n');
keys.forEach(k => {
  document.body.append(`${k}: ${JSON.stringify(navigator[k])}`);
  document.body.append(document.createElement('br'))
})
