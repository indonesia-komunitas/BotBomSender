const axios = require("axios");

const jumlahPengiriman = 10000;
const teks = "TOBAT NGENTOD";
const url_target =
  "https://api.telegram.org/bot7030635610:AAFV2YvVlHNU0wycKhNEWZcgRC34u7cDag4/sendMessage?parse_mode=markdown&chat_id=6928615755&text=*" +
  teks +
  "*";

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
