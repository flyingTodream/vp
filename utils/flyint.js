const request = require('request')
function regAcc(email, code) {
    return new Promise((reslove, reject) => {
        request({
            url: 'https://flyint.win/api/v1/passport/auth/register',
            "headers": {
                "accept": "application/json, text/plain, */*",
                "accept-language": "en,zh-CN;q=0.9,zh-TW;q=0.8,zh;q=0.7",
                "cache-control": "no-cache",
                "content-language": "zh-CN",
                "content-type": "application/x-www-form-urlencoded",
                "pragma": "no-cache",
                "sec-ch-ua": "\"Chromium\";v=\"104\", \" Not A;Brand\";v=\"99\", \"Google Chrome\";v=\"104\"",
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": "\"macOS\"",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "cookie": "_ga=GA1.1.877213930.1660179831; _ga_WL4NBHVGYC=GS1.1.1661647184.8.1.1661647184.0.0.0; crisp-client%2Fsocket%2Fcce3fc08-9ff5-4a4d-9d7b-811cddfae102=1; crisp-client%2Fsession%2Fcce3fc08-9ff5-4a4d-9d7b-811cddfae102=session_251be856-13c5-4af5-b0f4-869bc9c75a15",
                "Referer": "https://flyint.win/",
                "Referrer-Policy": "strict-origin-when-cross-origin"
            },
            "body": `email=${email}%40163.com&password=12345678&email_code=${code}`,
            "method": "POST"
        }, function (error, response) {
            if (error) reject('error');
            if (response && response.body) {
                const body = JSON.parse(response.body)
                console.log(body)
                if (body && body.list && body.list[0]) {
                    reslove(body.list[0].eid)
                }
            }
            reslove(null)
        });
    })
}

module.exports = { regAcc };