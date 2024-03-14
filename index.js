const axios = require("axios");

const jumlahPengiriman = 100000;
const teks = "PESAN_UNTUK_TARGET";
const url_target = "SERVER_TARGET";

async function kirimTeks() {
  try {
    const response = await axios.get(url_target);
    //console.log("Pesan terkirim:", response.data);

    if (response.data.ok) {
      console.log("Pesan berhasil dikirim ke Telegram");
    } else {
      console.error(
        "Gagal mengirim pesan ke Telegram:",
        response.data.description
      );
    }
  } catch (error) {
    console.error("Error dalam pengiriman pesan:", error);
  }
}

async function start(jumlahPengiriman) {
  for (let i = 0; i < jumlahPengiriman; i++) {
    console.log(`Mengirim pesan ke-${i + 1}`);
    await kirimTeks();
  }
}

start(jumlahPengiriman, teks);
