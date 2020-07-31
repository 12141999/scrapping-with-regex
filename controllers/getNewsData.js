const request = require("request");

// api for scrapping data
exports.getNewsData = async (req, res) => {


    let prefix = "https://time.com/";
    let pattern1 = /<section.*class=.homepage-module latest.*[^*]+.*?<\/section>/g;
    let pattern2 = /<h2.*class=.title(.*)[\\n|\r\n]+.*?<\/h2>/g;
    let reqe = request({
        uri: prefix,
    }, function (error, response, body) {
        if (error) {
            console.error(error)
            return
        }

        let result = body.match(pattern1);
        result = '`' + result + '`';
        result = result.trim();

        let matc = result.match(pattern2)

        let arr = [];

        for (let i = 0; i < 5; i++) {
            let splitMatc = matc[i].split(">");
            let obj = {
                url: prefix + splitMatc[1].slice(9),
                title: splitMatc[2].split("<")[0]
            }
            arr.push(obj);
        }

        console.log(arr);
        res.json(arr);


    });

}



