// Options the user could type in
var today = new Date();
var time = today.getHours() + " lewat " + today.getMinutes() + " menit";

const prompts = [
  ["password", "lupa"],
  ["sekarang hari apa?", "hari apa", "hari"],
  ["quote", "motivasi", "alquran", "quran", "ayat", "ngaji"],
  ["hi", "halo", "selamat siang"],
  ["Anis", "anis", "halo anis"],
  ["sudah makan?", "makan"],
  ["jam berapa nih?", "jam", "jam berapa sekrang?"]
]

// Possible responses, in corresponding order

const replies = [
  ["Ulang tahun anis", "ulang tahun tisha", "19 12 94"],
  ["Hari ini hari yang menyenangkan"],
  ["Apa kamu sedang cemas?"],
  ["iya, ada yang dapat kami bantu?"],
  ["Ya ada apa?", "Itu namaku, cantik bukan?", "Kamu jangan terlalu berharap, suamiku asruldev"],
  ["Apa kamu mau traktir?", "aku sudah makan kok", "aku makan yang banyak tadi"],
  [`sekarang jam ${time}`]
]

// Random for any other user input

const alternative = [
  "Hu?",
  "Ya...",
  "Coba lagi",
  "Ku mendengarkanmu..."
]

// Whatever else you want :)

const coronavirus = ["Please stay home", "Wear a mask", "Fortunately, I don't have COVID", "These are uncertain times"]
