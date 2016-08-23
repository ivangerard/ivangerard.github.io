var pilihPemain = prompt("Pilih : Jempol / Telunjuk / Kelingking?");

var pilihLawan = Math.random();
if (pilihLawan <= 0.33){
	pilihLawan = "Jempol";
}
	else if (pilihLawan >= 0.67){
		pilihLawan = "Telunjuk";
} else {
	pilihLawan = "Kelingking";
};

var bermain = function (Pemain1, Pemain2){
	if (Pemain1 === Pemain2){
		return "Nilai Seri"
	}

	if (Pemain1 === "Jempol"){
		if(Pemain2 === "Telunjuk"){
			return " Pemenangnya adalah Pemain 1"
		}
		else {
			return "Pemenangnya adalah Pemain 2"
		}
	}

	if (Pemain1 === "Kelingking"){
		if (Pemain2 === "Jempol"){
		return "Pemenangnya adalah Pemain 1"
		}
		else {
		return "Pemenangnya adalah Pemain2";
		}
	}

	if (Pemain1 === "Telunjuk"){
		if (Pemain2 === "Kelingking"){
		return "Pemenangnya adalah Pemain 1"
		}
		else {
		return "Pemenangnya adalah Pemain2";
		}
	}
};


console.log(bermain(pilihPemain, pilihLawan));
