const ayat = document.getElementById('ayat')
const ayatname = document.getElementById('ayatname')

function getAyat() {
    axios.get('https://api.banghasan.com/quran/format/json/acak')
        .then(function (response) {
            // handle success
            ayat.innerText = response.data.acak.id.teks;
            ayatname.innerText = response.data.surat.nama + " : " + response.data.surat.ayat 
        })
        .catch(function (error) {
            ayat.innerHTML = "Kamu yang terbaik hari ini..."
        })
}

getAyat()