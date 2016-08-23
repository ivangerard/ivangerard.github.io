var DaftarKontak = [{

	}];

var Program = {};

Program.tambahKontak = function(nama, email, telepon){
	DaftarKontak.push({
		nama:nama,
		email:email,
		telepon:telepon
	})
	console.log("---Kontak baru ditambahkan---");
}


Program.lihatSemua = function(){
	console.log("---List Kontak---");
	DaftarKontak.forEach(function(isi,i){
		console.log(i + ". nama: " + isi.nama + "\n email: " + isi.email + "\n telepon: " + isi.telepon);
	}
)
	};

Program.lihatKontak = function(nama){
	console.log("---Lihat Kontak---");
	DaftarKontak.forEach(function(isi, i){
		if(isi.nama === nama){
		console.log("nama: " + isi.nama + "\n email: " + isi.email + "\n telepon: " + isi.telepon );
		}
	});

}
Program.tambahKontak("Ivan", "ivanz2020@mail.com", "085615014512");
Program.lihatSemua();
Program.lihatKontak("Ivan");
