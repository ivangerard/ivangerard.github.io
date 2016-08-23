var pilihJenis = prompt("Silahkan Pilih Penggunaan Kalkulator: Pangkat, Akar");
var pangkatAngka = function(x,y) {

  return Math.pow(x,y);
}

if (pilihJenis == "Pangkat") {
  var angka = prompt ("Tulis angka yang mau di pangkatin");
  var pangkat = prompt ("Tulis angka yang mau di pangkatin");
  console.log(Math.pow(angka,pangkat));

}
else  {
var angka = prompt ("Tulis angka yang mau di Akarin");
    console.log(Math.sqrt(angka));
}
