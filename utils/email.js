const request = require('request')
const cheerio = require('cheerio');

function registerEmail(emil, uuid) {
    return new Promise((reslove, reject) => {
        request({
            url: `https://www.linshi-email.com/api/v1/refreshmessage/16c7aa3c293c17fdc5bca3cfec0a2cf9/${emil}@iubridge.com?t=${Date.now()}`,
            "method": "GET",
            headers: {
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
        }, function (error, response) {
            if (error) reject('error');
            console.log(response)
            if (response && response.body) {
                const body = JSON.parse(response.body)
                if (body && body.list && body.list[0]) {
                    reslove(body.list[0].eid)
                }
            }
            reslove(null)
        });
    })
}

function getCode(eid) {
    return new Promise((reslove, reject) => {
        request({
            url: `https://www.linshi-email.com/api/v1/getemailContent/${eid}`,
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
                "sec-fetch-site": "same-origin"
            },
            "referrer": "https://www.linshi-email.com/",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": null,
            "method": "GET",
            "mode": "cors",
            "credentials": "include"
        }, function (error, response) {
            if (error) reject('error');
            const body = JSON.parse(response.body)
            const $ = cheerio.load(body.data.html);
            const textArr = JSON.stringify($('tbody', 'table').text()).replace(/\s+/g, "").split('\\n').filter(item => item)
            reslove(textArr[4])
        });
    })
}

function sendCode(email) {
    return new Promise((reslove, reject) => {
        request({
            url: 'https://flyint.win/api/v1/passport/comm/sendEmailVerify',
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
                "x-xsrf-token": "eyJpdiI6InNOSHpQY2w1NDBWTVBBUzZFVi9MVEE9PSIsInZhbHVlIjoiS1NCZWgzQUxFY0FTelNkWTJhYzc5Rjgxa01ERTc2cm9jZjJ4Q244enVIY1M0YmFURWlzejJJdFNaRWpsNEx6djBpaFdxelE4U2JEdFEzbmdZeGpyYVQxRlY3ODFncG5uWWlxRmVSK2IzWWNCa21hZnAvaU1FUVlETi9YemJrSFkiLCJtYWMiOiI0OWVmYmVhM2JjNGU3NDljNzllNzVkYjRhMmE0YjAzYThlN2UzNjEwNmYyODRiMDhmNzE4ODM5ZGY0OWIyNmFhIiwidGFnIjoiIn0=",
                "cookie": "_ga=GA1.1.877213930.1660179831; XSRF-TOKEN=eyJpdiI6InNOSHpQY2w1NDBWTVBBUzZFVi9MVEE9PSIsInZhbHVlIjoiS1NCZWgzQUxFY0FTelNkWTJhYzc5Rjgxa01ERTc2cm9jZjJ4Q244enVIY1M0YmFURWlzejJJdFNaRWpsNEx6djBpaFdxelE4U2JEdFEzbmdZeGpyYVQxRlY3ODFncG5uWWlxRmVSK2IzWWNCa21hZnAvaU1FUVlETi9YemJrSFkiLCJtYWMiOiI0OWVmYmVhM2JjNGU3NDljNzllNzVkYjRhMmE0YjAzYThlN2UzNjEwNmYyODRiMDhmNzE4ODM5ZGY0OWIyNmFhIiwidGFnIjoiIn0%3D; _ga_WL4NBHVGYC=GS1.1.1661647184.8.1.1661647184.0.0.0; crisp-client%2Fsession%2Fcce3fc08-9ff5-4a4d-9d7b-811cddfae102=session_a91e1aea-ab34-435c-a36b-a02ee3423a32; crisp-client%2Fsocket%2Fcce3fc08-9ff5-4a4d-9d7b-811cddfae102=1; v2board_session=eyJpdiI6IkVUaS9DeUJaeWk5dFN1bVhDRVNQZHc9PSIsInZhbHVlIjoiaEJjbmh2U0N1UVcrQ2x4WEVvUEhBSlViUkUxd0Q5dHdMd1VIUnFab0phemlnT25GZmxKRU9DVzMvUWlZdmhvbkRqNjRiVDJTK2gxV3BoTTVnZlhhSXJtaFFQSk0wMTQyRUxRU0kzOGllNzNVaWJnQ0xsSG5nUVloYjlBcXhSTUkiLCJtYWMiOiI1YTRiZjIwNmQyN2EwNTZlNzM2Y2YwNGNhOGYyYTY3ZDZlZDc1N2YxYThkMDJmNjkzYmM3MGMwZDNiNDU3ZWRmIiwidGFnIjoiIn0%3D",
                "Referer": "https://flyint.win/",
                "Referrer-Policy": "strict-origin-when-cross-origin"
            },
            "body": `email=${email}%40iubridge.com`,
            "method": "POST"
        }, function (error, response) {
            if (error) reject('error');
            const body = JSON.parse(response.body)
            reslove(body && body.data || null)
        });
    })
}
sendCode()

// registerEmail()
module.exports = { registerEmail, sendCode, getCode };