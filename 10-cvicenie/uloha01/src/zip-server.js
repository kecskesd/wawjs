const http = require("http");
const fs = require("fs");
const {pipeline} = require("stream");

const zlib = require("zlib");
const {
    createGzip
} = require("zlib");

module.exports = {
    start: function () {
        return zip_server()
    }
};

function zip_server() {
    let server = http.createServer();
    server.setTimeout(1000);
    server.listen(9999, "localhost")
        .on("request", (req, res) => {

            const name = req.headers["file-name"];
            const closeFlag = req.headers["close"];


            const fileName = `${__dirname}/serverFiles/${name}`;

            if (closeFlag) {
                server.close();
                console.log("closing server");
            } else {

                let output = fs.createWriteStream(fileName);

                //Je tu toto treba inak sa neskopci vacsi file
                output.on("finish", () => {
                    pipeline(
                        fs.createReadStream(fileName),
                        createGzip(),
                        res,
                        (err) => {
                            if (err) {
                                console.error(err);
                            }
                        }
                    );
                });

                pipeline(
                    req,
                    output,
                    (err) => {
                        if (err) {
                            console.error(err)
                        }
                    });
            }

        });
}