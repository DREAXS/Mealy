function toggleTheme() {
  // Tema değişimini tetikler
  document.body.classList.toggle("dark-theme");
}

function simulate() {
  // Kullanıcıdan alınan girdileri al
  const durumlarGirdisi = document
    .getElementById("states")
    .value.split(",")
    .map((s) => s.trim()); // Durumları virgülle ayırarak diziye dönüştür

  const alfabeGirdisi = document
    .getElementById("alphabet")
    .value.split(",")
    .map((s) => s.trim()); // Alfabe sembollerini virgülle ayırarak diziye dönüştür

  const gecislerGirdisi = document.getElementById("transitions").value.trim(); // Geçişler ve çıkışları al
  const baslangicDurumu = document.getElementById("startState").value.trim(); // Başlangıç durumunu al
  const girdiDizisi = document.getElementById("inputString").value.trim(); // Girdi dizisini al

  // Girdilerin doğruluğunu kontrol et
  if (durumlarGirdisi.length === 0 || alfabeGirdisi.length === 0) {
    alert("Durumlar ve Alfabe alanları boş olamaz.");
    return;
  }

  if (!baslangicDurumu || !durumlarGirdisi.includes(baslangicDurumu)) {
    alert("Geçerli bir başlangıç durumu girin.");
    return;
  }

  // Dinamik geçiş tablosunu oluştur
  let gecisler = {};

  // Kullanıcı tarafından girilen geçişleri ayrıştır
  // Örnek format: 'q0,a=q2,0; q1,b=q0,1'
  gecislerGirdisi.split(";").forEach((gecis) => {
    // Geçişi mevcut durum, girdi ve çıkış şeklinde ayır
    let [durumVeGirdi, hedefVeCikis] = gecis.trim().split("=");
    if (!durumVeGirdi || !hedefVeCikis) {
      alert(
        "Geçiş formatı hatalı. Lütfen 'mevcutDurum,giriş=sonrakiDurum,çıkış' formatını kullanın."
      );
      return;
    }

    let [mevcutDurum, girdi] = durumVeGirdi.split(",");
    let [hedefDurum, cikis] = hedefVeCikis.split(",");

    // Mevcut duruma göre geçiş nesnesini oluştur
    if (!gecisler[mevcutDurum]) {
      gecisler[mevcutDurum] = {};
    }

    // Her girdi sembolü için hedef durum ve çıkış değerini ekle
    gecisler[mevcutDurum][girdi] = { sonrakiDurum: hedefDurum, cikis: cikis };
  });

  // Simülasyonu başlat
  let mevcutDurum = baslangicDurumu;
  let cikisDizisi = "";

  // Girdi dizisindeki her sembolü işle
  for (let girdiSembol of girdiDizisi.split("")) {
    if (gecisler[mevcutDurum] && gecisler[mevcutDurum][girdiSembol]) {
      const { sonrakiDurum, cikis } = gecisler[mevcutDurum][girdiSembol];
      cikisDizisi += cikis; // Çıkışı ekle
      mevcutDurum = sonrakiDurum; // Mevcut durumu güncelle
    } else {
      alert(`Geçiş bulunamadı: Durum = ${mevcutDurum}, Girdi = ${girdiSembol}`);
      return;
    }
  }

  // Sonuçları ekrana yazdır
  document.getElementById("output").textContent = `Çıkış: ${cikisDizisi}`;
}
