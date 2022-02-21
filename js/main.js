import QrScanner from "../plugins/qrScanner/qrScanner.min.js";

document.getElementById("timestamp").textContent = Date().toString();
let srNumber = 1;

function setQRDetail(qrData)
{
    const rowData = "<tr><td>" + ++srNumber + "</td><td>" + qrData + "</td><td>" + Date().toString() + "</td></tr>";
    document.getElementsByTagName("tbody")[0].innerHTML += rowData;
}

function qrAlert()
{
    new Audio("./sounds/BarcodeScannerBeepSound.mp3").play();
    navigator.vibrate(200);
}
    
const qrScanner = new QrScanner
(
    document.getElementById("qrVideoInput"),
    (result) =>
    {
        setQRDetail(result.data);
        qrAlert();
    },
    {
        highlightScanRegion: true,
        highlightCodeOutline: true,
        maxScansPerSecond: 1
    }
);

qrScanner.setInversionMode("both");
qrScanner.start();