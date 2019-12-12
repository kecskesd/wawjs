const assert = require("assert");
const crypto = require('crypto');
const fs = require('fs');

var chai = require('chai');
var chaiFiles = require('chai-files');

chai.use(chaiFiles);

var expect = chai.expect;
var file = chaiFiles.file;

const files = ["test1.txt", "test2.jpg"];

let getClientFile = function (filename) {
    return fs.readFileSync(`${__dirname}/../src/clientFiles/${filename}`);
};

let getServerFile = function (filename) {
    return fs.readFileSync(`${__dirname}/../src/serverFiles/${filename}`);
};


describe("Zipper Tests", () => {

    it("files are correctly saved by server", () => {

        files.forEach(
            (fileName) => {
                let fileClient = getClientFile(fileName);
                let fileServer = getServerFile(fileName);

                let h1 = crypto.createHash('sha1').update(fileClient).digest().toString();
                let h2 = crypto.createHash('sha1').update(fileServer).digest().toString();

                assert(h1 == h2);
                expect(file(`${__dirname}/../src/clientFiles/${fileName}`)).to.equal(file(`${__dirname}/../src/serverFiles/${fileName}`))
            }
        );
    });

});