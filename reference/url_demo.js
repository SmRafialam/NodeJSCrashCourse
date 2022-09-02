const url = require('url');
const myUrl = new URL('http://mywebsite.com:8000/hello.html?id=100&status=active');

//serialized url
console.log(myUrl.href);
console.log(myUrl.toString);

//host
console.log(myUrl.host);

//hostName
console.log(myUrl.hostname);
