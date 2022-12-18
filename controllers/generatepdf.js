const fs  = require('fs');
const path = require('path');
const pdf  = require('html-pdf');
const report = require('../pdfTemplates/report');

function genID() {
    const idStr = Math.random().toString(16).substring(2) + Math.random().toString(16).substring(2) + new Date().toISOString();
    return idStr.replace(/[:\-\.]/ig, '_');
}

module.exports.generatepdf =  (req, res) => {
    const { reportContent } = req.body;
    const content = report(reportContent);
    const pdfId = `Preptime-Report_${genID()}.pdf`;
    const htmlFile = path.join(process.cwd(), 'Preptime-Report.html');
    pdf.create(content, {}).toFile(pdfId, err => {
        if (err) {
            res.status(500).send('Something went wrong!!!')
        }
        fs.writeFile(htmlFile, content, (err) => {
            if (err) {
                res.status(500).send('Something went wrong!!!')
            }
            res.status(200).send(pdfId)
        })
    })
}

module.exports.downloadpdf =  (req, res) => {
    const { filename } =  req.params;
    const filePath = path.join(process.cwd(), `/${filename}`);
    // console.log(filePath)
    let stream = fs.createReadStream(filePath);
    stream.pipe(res);
    stream.on('error', err => {
        res.status(500).send(`Error fetching file with the name ${filename}: ${err}`)
    })
    stream.on('close', _ => {
        fs.rmSync(filePath)
    })
}