console.log("Linked Succes")

function formValidate() {
    let inputbb = document.getElementById('input-bb').value
    let inputtb = document.getElementById('input-tb').value
    console.log(inputbb)
    console.log(inputtb)
    if (inputbb == '' || inputtb == '') {
        alert('Jangan ada yang kosong')
    } if (inputbb == '0' || inputtb == '0') {
        alert('Bro doesnt exist')
    } else {
        let convertCmToM = inputtb / 100
        let powertb = Math.pow(convertCmToM, 2)
        console.log(inputbb / powertb)
    }

    console.log('Form Submitted')
}