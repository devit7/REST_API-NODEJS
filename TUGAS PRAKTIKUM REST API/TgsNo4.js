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

    // end-point "/bmi" dengan method POST
    app.post("/bmi", (req,res) => {
        // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
        let berat_badan = Number(req.body.berat_badan) // mengambil nilai berat_badan dari body
        let tinggi_badan = Number(req.body.tinggi_badan) // mengambil nilai tinggi_badan dari body

        tinggi_badan=tinggi_badan/100
        let bmi = berat_badan / tinggi_badan**2
        var kategori
        if(bmi < 18.5){
            kategori="kekurangan berat badan"
        }else if(bmi >= 18.5 && bmi <=24.9){
            kategori="normal"
        }else if(bmi >= 25.0 && bmi <= 29.9){
            kategori="kelebihan berat badan"
        }else if(bmi >= 30.0){
            kategori="kegemukan"
        }else{
            kategori="eror"
        }          
        // membuat objek yang berisi data yang akan dijadikan response
        let response = {
            berat_badan: berat_badan,
            tinggi_badan: tinggi_badan,
            bmi:bmi,
            kategori:kategori
        }


        // memberikan response dengan format JSON yang berisi objek di atas
        res.json(response)
    })

// menjalankan server pada port 8000
app.listen(8000, () => {
    console.log("Server run on port 8000");
})