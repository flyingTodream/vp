var express = require('express');
var router = express.Router();
const request = require('request')
const { v4: uuidv4 } = require('uuid');


/* GET home page. */
router.get('/', function (req, res, next) {
  const id = uuidv4();
  request({
    url: 'https://www.v2board.cc/api/v1/passport/auth/register',
    method: 'post',
    headers: {
      "accept": "application/json, text/plain, */*",
      "accept-language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
      "cache-control": "no-cache",
      "content-type": "application/x-www-form-urlencoded",
      "pragma": "no-cache",
      "sec-ch-ua": "\"Chromium\";v=\"104\", \" Not A;Brand\";v=\"99\", \"Microsoft Edge\";v=\"104\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"macOS\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "x-xsrf-token": "eyJpdiI6IlYxSkhSWlpFRzVvdmRIVlFJamgzVFE9PSIsInZhbHVlIjoia3pubXROdXdRTGozVVltM21xdklOd2x1OUJPTDBudFlNbVBUdzZDVU81ZXNRNVZqenRzbU9ocFp3QTc2ZE1qRlE4S0xROWdBcVZ6WkZaclYzUk14bWovNUMzUHlKSWVXa3E5YTdGWlc5Q0FCR3paeE9tQkJKdVc4RXZTYi9lZm8iLCJtYWMiOiI0ODQwZjA4MjY1YjgyODdmMzg4Nzg3ZWE3MTZkZmZlYjRiZDBjMDU3NTVhZmRkMmUyN2RkNmVkNzQ2MmQ4YmRmIiwidGFnIjoiIn0=",
      "cookie": "XSRF-TOKEN=eyJpdiI6IlYxSkhSWlpFRzVvdmRIVlFJamgzVFE9PSIsInZhbHVlIjoia3pubXROdXdRTGozVVltM21xdklOd2x1OUJPTDBudFlNbVBUdzZDVU81ZXNRNVZqenRzbU9ocFp3QTc2ZE1qRlE4S0xROWdBcVZ6WkZaclYzUk14bWovNUMzUHlKSWVXa3E5YTdGWlc5Q0FCR3paeE9tQkJKdVc4RXZTYi9lZm8iLCJtYWMiOiI0ODQwZjA4MjY1YjgyODdmMzg4Nzg3ZWE3MTZkZmZlYjRiZDBjMDU3NTVhZmRkMmUyN2RkNmVkNzQ2MmQ4YmRmIiwidGFnIjoiIn0%3D; v2board_session=eyJpdiI6IjkwdHVmMWZZZ1pqdndGcHZMK1FOeFE9PSIsInZhbHVlIjoiRE5DS3RPZVhjT3VtQlJobDZWbDVjQ21hazE2ZTJwYXVmVllvVWU1OW1VK0FaWEhMa1lmNlgxU1NMNGcyU2JURjRyWXdydHYwY0pQQnM4WFk1KytIZzZsUURMejArckVnYmZTR2hJdG4yTXB2TjYrZzI4ZWN2cDdzRk5Pa3NMOUgiLCJtYWMiOiI1YzFiNzQwODkyZDQyMGIwOTc4ZDA2N2ZlMmRiZDUwNDU2MjRhNDNhZWIxMTY4ZGYyMTBmNTY2ODkwNmZiNjgyIiwidGFnIjoiIn0%3D",
      "Referer": "https://www.v2board.cc/",
      "Referrer-Policy": "strict-origin-when-cross-origin"
    },
    "body": `invite_code=&email_code=&email=${id}%40qq.com&password=12345678&auth_password=12345678&recaptcha_data=`,
  }, function (error, response) {
    if (error) console.log('error');
    const body = JSON.parse(response.body)
    res.send(body.data)
  });
});

module.exports = router;
