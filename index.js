
const os = require('os');

const userInfo = os.userInfo();
console.log('User Information:');
console.log('- Username:', userInfo.username);
console.log('- User ID:', userInfo.uid);
console.log('- Home Directory:', userInfo.homedir);
