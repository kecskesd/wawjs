const http = require("http");
const fs = require("fs");
const {pipeline} = require("stream")

module.exports = {
    send: function (name) {
        return zip_client(name)
    },
    close: function () {
        return close_server()
    }
};

const url = "http://localhost:9999";

function zip_client(name) {
    let _name = [];

    if (name) {
        _name.push(name)
    } else {
        _name = process.argv.slice(2)
    }
    const fileName = `${__dirname}/clientFiles/${_name[0]}`;
    const fileName2 = `${__dirname}/clientFiles/${_name[0]}.gz`;
    let input = fs.createReadStream(fileName);
    let output = fs.createWriteStream(fileName2);

    let request = http.request(url, {
        method: "POST",
        headers: {
            'file-name': name
        }
    })
        .on("response", (res) => {

            pipeline(
                res,
                output,
                (err) => {
                    if (err) {
                        console.error(err)
                    }
                }
            );

        });

    pipeline(
        input,
        request,
        (err) => {
            if (err) {
                console.error(err)
            }
        }
    );
}

function close_server() {
    let request = http.request(url, {
        method: "POST",
        headers: {
            'close': true
        }
    });
    request.on("error", (err) => {
    });
    request.end();
}