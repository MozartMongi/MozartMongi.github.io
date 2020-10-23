
let nama = prompt('Kenalan dulu ya, nama mu siapa ? ㋡')
let textOpening = document.getElementsByClassName('opening')
let name = nama.toUpperCase()
let submit = document.getElementById("btn")
let dataSubmit = document.getElementById("list")
let result = document.getElementById('result')
let gambar = document.getElementById('man')
let tempData = []
textOpening[0].innerHTML = `${name}, silahkan kamu masukan nama atau data nya di kolom bawah yaa..`
console.log(textOpening)
submit.addEventListener("click", function() {
    let namaData = document.getElementById("datanya").value;
    dataSubmit.innerHTML += ` <li>${namaData}</li>`;
    tempData.push(namaData);
    document.getElementById("datanya").value = ''
})

function hasil() {
    let num = Math.floor(Math.random()*tempData.length)
    result.innerText = tempData[num]
    gambar.className = 'muncul'
}





