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

    // end-point "/bujur_sangkar" dengan method POST
    app.post("/kubus", (req,res) => {
        // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
        let sisi = Number(req.body.sisi) // mengambil nilai sisi dari body

        let Volume = sisi * sisi * sisi
        let luas_permukaan = 6 * (sisi * sisi)

        // membuat objek yang berisi data yang akan dijadikan response
        let response = {
            sisi: sisi,
            luas_permukaan: luas_permukaan,
            Volume: Volume
        }

        // memberikan response dengan format JSON yang berisi objek di atas
        res.json(response)
    })

    // end-point "/balok" dengan method POST
    app.post("/balok", (req,res) => {
        // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
        let panjang = Number(req.body.panjang) // mengambil nilai panjang dari body
        let lebar = Number(req.body.lebar) // mengambil nilai lebar dari body
        let tinggi = Number(req.body.tinggi) // mengambil nilai tinggi dari body

        let Volume = panjang * lebar * tinggi
        let luas_permukaan = 2 * ( (panjang*lebar) + (lebar*tinggi) + (panjang*tinggi))

        // membuat objek yang berisi data yang akan dijadikan response
        let response = {
            panjang: panjang,
            lebar: lebar,
            tinggi: tinggi,
            luas_permukaan: luas_permukaan,
            Volume: Volume
        }
        // memberikan response dengan format JSON yang berisi objek di atas
        res.json(response)
    })

    // end-point "/kerucut" dengan method POST
    app.post("/kerucut", (req,res) => {
        // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
        let r = Number(req.body.jari_jari) // mengambil nilai r dari body
        let sisi = Number(req.body.sisi) // mengambil nilai sisi dari body
        let tinggi = Number(req.body.tinggi) // mengambil nilai tinggi dari body

        const π = 3.14
        let Volume = 1/3 * π * (r**2) * tinggi
        let luas_permukaan =  ( π * (r**2) ) + ( π * r * sisi)
        // membuat objek yang berisi data yang akan dijadikan response
        let response = {
            r: r,
            sisi: sisi,
            tinggi: tinggi,
            luas_permukaan: luas_permukaan,
            Volume: Volume
        }
        // memberikan response dengan format JSON yang berisi objek di atas
        res.json(response)
    })


    // end-point "/bola" dengan method POST
    app.post("/bola", (req,res) => {
        // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
        let r = Number(req.body.jari_jari) // mengambil nilai r dari body
        
        const π = 3.14
        let Volume = 4/3 * π * (r**3)
        let luas_permukaan = 4 * π * (r**2)
        // membuat objek yang berisi data yang akan dijadikan response
        let response = {
            r: r,
            luas_permukaan: luas_permukaan,
            Volume: Volume
        }
        // memberikan response dengan format JSON yang berisi objek di atas
        res.json(response)
    })
// menjalankan server pada port 8000
app.listen(8000, () => {
    console.log("Server run on port 8000");
})