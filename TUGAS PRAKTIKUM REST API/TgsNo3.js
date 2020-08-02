const express = require("express") // memanggil library express js
const bodyParser = require("body-parser") // memanggil library body-parser
const cors = require("cors") // memanggil library cors
const app = express()

// penggunaan body-parser untuk ekstrak data request berformat JSON
app.use(bodyParser.json())

// penggunaan body-parser untuk ekstrak data request dari body
app.use(bodyParser.urlencoded({extended: true}))

// penggunaan cors agar end point dapat diakses oleh cross platform
app.use(cors())

// end-point "/decimal" dengan method POST
app.post("/desimal", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let x = Number(req.body.desimal) // mengambil nilai desimal dari body

    let bin = x.toString(2);
    let hex = x.toString(16).toUpperCase();
    let okt = x.toString(8);

    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        desimal : x,
        result: {
            biner: bin,
            hexsadesimal: hex,
            oktal: okt
        }
    }
    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})
// end-point "/biner" dengan method POST
app.post("/biner", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let x = Number(req.body.biner) // mengambil nilai biner dari body

    let dec = parseInt(x, 2)
    let hex = (dec).toString(16).toUpperCase()
    let okt = (dec).toString(8)   

    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        biner : x,
        result: {
            desimal: dec,
            hexsadesimal: hex,
            oktal: okt
        }
    }
    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})
// end-point "/hexsadesimal" dengan method POST
app.post("/hexsadesimal", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let x = Number(req.body.hexsadesimal) // mengambil nilai hexsadesimal dari body

    let dec = parseInt(x, 16)
    let okt = (dec).toString(8).toUpperCase()
    let bin = (dec).toString(2)     

    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        hexsadesimal : x,
        result: {
            desimal: dec,
            biner: bin,
            oktal: okt
        }
    }
    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})
// end-point "/oktal" dengan method POST
app.post("/oktal", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let x = Number(req.body.oktal) // mengambil nilai oktal dari body

    let dec = parseInt(x, 8)
    let hex = (dec).toString(16).toUpperCase()
    let bin = (dec).toString(2)   

    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        oktal : x,
        result: {
            desimal: dec,
            biner: bin,
            hexsadesimal: hex
        }
    }
    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})
// menjalankan server pada port 8000
app.listen(8000, () => {
    console.log("Server run on port 8000");
})