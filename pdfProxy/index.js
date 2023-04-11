const { PDFDocument } = require("pdf-lib");
const { writeFileSync } = require("fs");

async function createPDF() {
    const PDFdoc = await PDFDocument.create();
    const page = PDFdoc.addPage([300, 400]);
    writeFileSync("blank.pdf", await PDFdoc.save());
}

createPDF().catch((err) => console.log(err));