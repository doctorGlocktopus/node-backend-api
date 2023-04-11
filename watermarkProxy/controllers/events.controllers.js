const { degrees, PDFDocument, rgb, StandardFonts } = require('pdf-lib');
const http = require("http");
const { writeFileSync, createWriteStream } = require("fs");
const fetch = require('node-fetch');

const getRoutes = (ctx) => {
    // ctx.body = "geile GET Anfragen in Ihrer Nähe";
    // ctx.body = ctx.params.path;
    // ctx.status = 200;

    // const url = 'http://127.0.0.1:8000/src/' + ctx.params.path;
    // draw(url).then(function(req) {
    //     ctx.body = req;
    // });

    draw();

};

const wrongRoute = (ctx) => {
    ctx.body = "POST anfragen sind gesperrt";
    return false
};

module.exports = {
    getRoutes,
    wrongRoute
};

async function draw()  {
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([300, 400]);

    // hier foreach zum iterrieren über alle Pages
    const pages = pdfDoc.getPages()
    const firstPage = pages[0]




    const file = writeFileSync("watermark.pdf", await pdfDoc.save());

    // const url = 'https://pdf-lib.js.org/assets/with_update_sections.pdf'
    // const existingPdfBytes = await fetch(url).then(res => res.arrayBuffer())
    //
    // const pdfDoc = await PDFDocument.load(existingPdfBytes)
    // const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica)
    //
    // const pages = pdfDoc.getPages()
    // const firstPage = pages[0]
    // const { width, height } = firstPage.getSize()
    //
    // firstPage.drawText('This text was added with JavaScript!', {
    //     x: 5,
    //     y: height / 2 + 300,
    //     size: 50,
    //     font: helveticaFont,
    //     color: rgb(0.95, 0.1, 0.1),
    //     rotate: degrees(-45),
    // })
    // const pdfBytes = await pdfDoc.save()
    // await console.log(`events.controllers.js:30 draw`, pdfBytes);

    // writeFileSync("jane-doe.pdf", await document.save());




    // await download(file);
}

// async function download(file)  {
//     const url = "http://127.0.0.1:8000/watermark.pdf"
//     http.get(url, (res) => {
//         const path = "downloaded-image.png";
//         const writeStream = createWriteStream(path);
//
//         res.pipe(writeStream);
//
//         writeStream.on("finish", () => {
//             writeStream.close();
//             console.log("Download Completed");
//         });
//     });
// }
