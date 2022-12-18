module.exports = (printable) => {
    return `
    <html lang="en">
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1.0">
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossorigin="anonymous">
            <style>
            .report,
            .report-content {
                width: 100%;
                height: max-content;
            }

            .bold {
                font-weight: bold;
            }

            .summary-content {
                width: min(100% - 20px, 1100px);
                margin: 0 auto;
            }
            
            .meta {
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                margin-bottom: 80px;
            }
            
            .report .school,
            .report .subject {
                font-size: 40px;
            }
            
            .meta-txt {
                font-size: 18px;
            }
            
            .date .fas {
                margin-right: 6px;
            }
            
            .max-min {
                width: 100%;
                height: max-content;
                margin-block: 30px;
            }
            
            .min-max-flex {
                display: flex;
                align-items: center;
                justify-content: space-between;
                width: min(100%, 1100px);
                margin-inline: auto;
            }
            
            .minmax-blk {
                display: flex;
                justify-content: space-between;
                padding: 20px;
                width: min(100%, 550px);
                align-items: center;
                border-radius: 5px;
                box-shadow: 5px 5px 15px rgba(0,0,0,.1);
            }
            
            .max {
                background: #385F73;
                margin-bottom: 0;
                margin-right: 30px;
            }
            
            .min {
                background: #ff3f5f;
            }
            
            .minmax-txt {
                margin-right: 25px;
            }
            
            .minmax-txt h4 {
                color: #fff;
                font-size: 18px;
            }
            
            .minmax-txt p {
                color: hsla(0,0%,100%,.7);
            }
            
            .score {
                font-weight: bold;
                font-size: 50px;
                color: #fff;
            }
            
            .sect-title {
                width: 100%;
                height: max-content;
                margin-block: 50px;
            }
            
            .sect-title h1 {
                font-weight: bold;
                font-size: 22px;
                margin-bottom: 15px;
                text-align: center;
            }
            
            .missed-ques {
                padding: 10px;
                display: flex;
                justify-content: space-between;
                color: #fff;
                background: #ff3f5f;
                border-radius: 5px;
                box-shadow: 5px 5px 15px rgba(0,0,0,.1);
                margin-bottom: 15px;
                margin-inline: auto;
                max-width: 800px;
            }
            
            .pct {
                font-size: 18px;
                align-self: flex-end;
                white-space: nowrap;
            }
            
            .foot-note {
                width: 100%;
                height: max-content;
                padding: 15px 0;
                background: #e2e2e2;
            }
            
            .foot-content {
                width: min(100% - 20px, 1000px);
                margin-inline: auto;
                font-size: 15px;
                text-align: center;
            }
            
            .info {
                width: min(80%, 500px);
                margin-inline: auto;
                text-align: left;
                display: flex;
                align-items: center;
                font-size: 12px;
                margin-bottom: 25px;
                padding: 10px 15px;
                border-radius: 8px;
                background-color: rgb(229, 246, 253);
                color: rgb(1, 67, 97);
            }
            
            .info .fas {
                margin-right: 10px;
                font-size: 16px;
            }
            
            .banner {
                width: min(100% - 20px, 1100px);
                margin: 0 auto 150px;
                border: 1px solid rgba(0,0,0,.2);
            }
            
            .banner-content {
                padding: 15px;
                display: flex;
                justify-content: space-between;
            }
            
            .banner .img-wrapper {
                width: min(100%, 100px);
                height: 100px;
                align-self: center;
            }
            
            .banner .img-wrapper img {
                width: 100%;
                height: 100%;
            }
            
            .banner-text {
                text-align: right;
                font-weight: bold;
            }
            
            .banner-text h1,
            .banner-text h3 {
                text-transform: uppercase;
            }

            .banner-text h1 {
                font-size: 38px;
            }
        
            .banner-text h3 {
                font-size: 24px;
            }

            .main-tb-container {
                width: 100%;
                height: max-content;
                margin-inline: auto;
                padding: 0px 5px 0px;
                border-radius: 8px;
                box-shadow: 5px 5px 25px rgba(0,0,0,.1);
            }
            
            .table-wrapper {
                height: 100%;
                width: 100%;
                overflow-x: auto;
                margin-bottom: 8px;
            }
            
            .table {
                height: max-content;
                width: 100%;
            }
            
            th {
                color: #3c3c3c;
                text-align: left;
                white-space: nowrap;
                cursor: pointer;
            }
            
            th, td {
                padding: 10px;
                font-size: 14px;
            }
            
            tr {
                border-bottom: 1px solid rgba(0,0,0,.1);
                white-space: nowrap;
            }
            
            .sort-ctrls {
                display: none;
            }
            
            .tb-controls {
                display: none;
            }
            </style>
        </head>
        <body>
            <div class="report">
                <div class="report-content">
                    <div id="printableDoc">
                        ${printable}
                    </div>
                </div>
            </div>
        </body>
    </html>
    `
}