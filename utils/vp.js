const request = require('request')
const { v4: uuidv4 } = require('uuid');

function registerEmail() {
    fetch("https://www.linshi-email.com/api/v1/refreshmessage/16c7aa3c293c17fdc5bca3cfec0a2cf9/q123242343@iubridge.com?t=1661646575003", {
        "headers": {
            "accept": "*/*",
            "accept-language": "en,zh-CN;q=0.9,zh-TW;q=0.8,zh;q=0.7",
            "cache-control": "no-cache",
            "pragma": "no-cache",
            "sec-ch-ua": "\"Chromium\";v=\"104\", \" Not A;Brand\";v=\"99\", \"Google Chrome\";v=\"104\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"macOS\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "cookie": "_ga=GA1.1.1610829161.1661646556; __gads=ID=e8abfca774850e0b-22750a2903d60093:T=1661646556:RT=1661646556:S=ALNI_Mb0UO266UWijv5F5mUjVwFqK6A5hA; __gpi=UID=00000924dcaca614:T=1661646556:RT=1661646556:S=ALNI_MZQXy_Xqge5G41roDsGRf8nea6f5g; _ga_Q67JP8PKT3=GS1.1.1661646556.1.1.1661646574.0.0.0",
            "Referer": "https://www.linshi-email.com/",
            "Referrer-Policy": "strict-origin-when-cross-origin"
        },
        "body": null,
        "method": "GET"
    });
}

async function register() {
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
        console.log(body.data)
    });
}