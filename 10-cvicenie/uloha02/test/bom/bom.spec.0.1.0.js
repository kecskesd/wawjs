const bom = require("../../src/bom/");
const assert = require("assert");
const fs = require("fs");

describe("bom.js tests", function() {

    const bomBuffer = Buffer.from([0xEF, 0xBB, 0xBF])

    it("remove bom - shall remove nothing from file without bom", function(done) {

        var chunks = [];

        let file = `${__dirname}/data/without-bom.txt`;
        fs.createReadStream(file)
            .pipe(bom.remove())
            .on("error", done)
            .on("data", (chunk) => chunks.push(chunk))
            .on("finish", () => {

                let chunk = Buffer.concat(chunks);

                assert(Buffer.isBuffer(chunk));
                assert.equal(chunk.indexOf(bomBuffer), -1);
                assert.equal(chunk[0], 0x2f);
                assert.equal(chunk.length, 10); //bom and data
                done();
            })
    });

    it("remove bom - shall remove nothing from empty file", function(done) {

        var chunks = [];

        let file = `${__dirname}/data/without-bom-empty.txt`;
        fs.createReadStream(file)
            .pipe(bom.remove())
            .on("error", done)
            .on("data", (chunk) => chunks.push(chunk))
            .on("finish", () => {

                let chunk = Buffer.concat(chunks);

                assert.equal(chunk.indexOf(bomBuffer), -1);
                assert.equal(chunk.length, 0);

                done();
            });
    });

    it("remove bom - bom is removed", (done) => {

        var chunks = [];

        let file = `${__dirname}/data/with-bom.txt`;
        fs.createReadStream(file)
            .pipe(bom.remove())
            .on("error", done)
            .on("data", (chunk) => chunks.push(chunk))
            .on("finish", () => {

                let chunk = Buffer.concat(chunks);

                assert(Buffer.isBuffer(chunk));
                assert.equal(chunk.indexOf(bomBuffer), -1);
                assert.equal(chunk[0], 0x2f);
                assert.equal(chunk.length, 7); //bom and data

                done();
            });
    });

    it("remove bom - shall work with arbitrary chunks sizes", (done) => {

        var chunks = [];

        let file = `${__dirname}/data/with-bom.txt`;
        fs.createReadStream(file, { highWaterMark: 2 })
            .pipe(bom.remove())
            .on("error", done)
            .on("data", (chunk) => chunks.push(chunk))
            .on("finish", () => {

                let chunk = Buffer.concat(chunks);

                assert(Buffer.isBuffer(chunk));
                assert.equal(chunk.indexOf(bomBuffer), -1);
                assert.equal(chunk[0], 0x2f);
                assert.equal(chunk.length, 7); //bom and data

                done();
            });
    });

});