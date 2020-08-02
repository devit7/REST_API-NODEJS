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

    // end-point "/celcius" dengan method POST
    app.post("/celcius", (req,res) => {
        // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
        let celcius = Number(req.body.celcius) // mengambil nilai celcius dari body

        let R = (4/5) * celcius
        let K = celcius + 273
        let F = (9/5) * celcius + 32

        // membuat objek yang berisi data yang akan dijadikan response
        let response = {
            celcius: celcius,
            result: {
                Reamur: R,
                Kelvin: K,
                Fahrenheit: F
            }
        }

        // memberikan response dengan format JSON yang berisi objek di atas
        res.json(response)
    })

        // end-point "/reamur" dengan method POST
        app.post("/reamur", (req,res) => {
            // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
            let reamur = Number(req.body.reamur) // mengambil nilai reamur dari body
    
            let C = (5/4) * reamur
            let K = (5/4) * reamur + 273
            let F = (9/4) * reamur + 32
    
            // membuat objek yang berisi data yang akan dijadikan response
            let response = {
                reamur: reamur,
                result: {
                    Celcius: C,
                    Kelvin: K,
                    Fahrenheit: F
                }
            }
    
            // memberikan response dengan format JSON yang berisi objek di atas
            res.json(response)
        })

        // end-point "/fahrenheit" dengan method POST
        app.post("/fahrenheit", (req,res) => {
            // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
            let fahrenheit = Number(req.body.fahrenheit) // mengambil nilai fahrenheit dari body
    
            let C = 5/9 * (fahrenheit - 32) 
            let R = 4/9 * (fahrenheit - 32)
            let K = 5/9 * (fahrenheit-32) + 273
    
            // membuat objek yang berisi data yang akan dijadikan response
            let response = {
                fahrenheit: fahrenheit,
                result: {
                    Celcius: C,
                    Reamur: R,
                    Kelvin: K
                }
            }
    
            // memberikan response dengan format JSON yang berisi objek di atas
            res.json(response)
        })

        // end-point "/kelvin" dengan method POST
        app.post("/kelvin", (req,res) => {
            // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
            let kelvin = Number(req.body.kelvin) // mengambil nilai kelvin dari body
    
            let C = kelvin - 273
            let R = 4/5 * (kelvin - 273)
            let F = 9/5 * (kelvin - 273) + 32
    
            // membuat objek yang berisi data yang akan dijadikan response
            let response = {
                kelvin: kelvin,
                result: {
                    Celcius: C,
                    Reamur: R,
                    Fahrenheit: F
                }
            }
            // memberikan response dengan format JSON yang berisi objek di atas
            res.json(response)
        })

// menjalankan server pada port 8000
app.listen(8000, () => {
    console.log("Server run on port 8000");
})