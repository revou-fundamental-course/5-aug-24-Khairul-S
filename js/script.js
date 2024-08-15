// Logika untuk button "Hitung BMI" 
function calculateBMI() {
    let inputbb = document.getElementById('input-bb').value
    let inputtb = document.getElementById('input-tb').value
    console.log(inputbb)
    console.log(inputtb)

    // Logika if dan else ketika form kosong atau diisi angka 0 atau angka kurang dari 0 
    if (inputbb == '' || inputtb == '') {
        alert('Jangan ada yang kosong')
        return
    } if (inputbb <= '0' || inputtb <= '0') {
        alert('Bro doesnt exist')
        return
    } 
    // Logika ketika form sudah diisi dengan benar
    else {
        let convertCmToM = inputtb / 100 // Konversi cm ke m
        let powertb = Math.pow(convertCmToM, 2)
        console.log(inputbb / powertb)
        let bmi = (inputbb / powertb).toFixed(2); // Perhitungan BMI
    let hasil = `BMI Anda adalah ${bmi}`;
    if (bmi < 18.5) {
        hasil += " (Kurus)";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        hasil += " (Ideal)";
    } else if (bmi >= 25 && bmi < 29.9) {
        hasil += " (Gemuk)";
    } else {
        hasil += " (Obesitas)";
    }

    // Untuk menampilkan hasil dari perhitungan BMI
    document.getElementById('hasil-bmi').innerHTML = `
    <h2 name="result1">${hasil}</h2>
    <div name="result1">BMI adalah indeks massa tubuh yang dapat digunakan untuk menentukan apakah berat badan Anda berada dalam kisaran sehat. BMI tidak memperhitungkan komposisi tubuh seperti otot dan lemak.</div>`;
    }
}

// Fungsi untuk reset form
function resetForm() {
    document.getElementById("bmi-form").innerHTML = 
    `<form id="bmi-form">
                <div>
                    <h3>Jenis Kelamin</h3>
                    <input type="radio" id="laki-laki" name="jenis-kelamin" value="laki-laki" required>
                    <label for="laki-laki">Laki-laki</label>
                    <input type="radio" id="perempuan" name="jenis-kelamin" value="perempuan" required>
                    <label for="perempuan">Perempuan</label>
                </div>

                <div>
                    <h3>Usia</h3>
                    <input class="container" type="number" placeholder="Masukkan usia Anda" required>
                </div>

                <div>
                    <h3>Berat Badan (kg)</h3>
                    <input class="container" type="number" id="input-bb" placeholder="Masukkan berat badan Anda">
                </div>

                <div>
                    <h3>Tinggi Badan (cm)</h3>
                    <input class="container" type="number" id="input-tb" placeholder="Masukkan tinggi badan Anda">
                </div>

                <div>
                    <button onclick="calculateBMI()" type="button" id="calculate" class="button-calculate">Hitung BMI</button>
                    <button onclick="resetForm()" type="button" id="reset" class="button-reset">Reset</button>
                </div>
    </form>`;    
}