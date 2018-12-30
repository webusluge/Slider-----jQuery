$(document).ready(function(){
	
// Globalne varijable za 1. i 2. red - vrijednost varijable određuje koji će se element polja (koji određuje sliku) prikazati na određenom mjestu.
var index1 = 0;
var index2 = 0;

// Polja (array) za 1. i 2. red u koja su smješteni izvori slika 
var slike1 = [];
var slike2 = [];

slike1[0] = "images/slika_a0.jpg";
slike1[1] = "images/slika_a1.jpg";
slike1[2] = "images/slika_a2.jpg";
slike1[3] = "images/slika_a3.jpg";
slike1[4] = "images/slika_a4.jpg";
slike1[5] = "images/slika_a5.jpg";

slike2[0] = "images/slika_b0.jpg";
slike2[1] = "images/slika_b1.jpg";
slike2[2] = "images/slika_b2.jpg";
slike2[3] = "images/slika_b3.jpg";
slike2[4] = "images/slika_b4.jpg";

// Funkcija čiji se kod izvršava kada korisnik klikne na dugme sa strelicom desno.
$("#btn_desno").click(function(){

	if (index1 < slike1.length - 1) {
		index1++;
	} else {
		index1 = 0;
	}

	if (index2 < slike2.length - 1) {
		index2++;
	} else {
		index2 = 0;
	}
	postaviSlike(index1, index2); // Poziva funkciju "postaviSlike" i proslijeđuje joj 2 argumenta.

});

// Funkcija čiji se kod izvršava kada korisnik klikne na dugme sa strelicom lijevo.
$("#btn_lijevo").click(function(){

	if (index1 > 0) {
		index1--;
	} else {
		index1 = slike1.length - 1;
	}

	if (index2 > 0) {
		index2--;
	} else {
		index2 = slike2.length - 1;
	}
	postaviSlike(index1, index2); // Poziva funkciju "postaviSlike" i proslijeđuje joj 2 argumenta.

});


function postaviSlike(n1, n2){

	// prvi red
	if (n1 === 0) {
		$("#mjesto_a0").attr("src", slike1[0]);
		$("#mjesto_a1").attr("src", slike1[1]);
		$("#mjesto_a2").attr("src", slike1[2]);
		$("#mjesto_a3").attr("src", slike1[3]);
		$("#mjesto_a4").attr("src", slike1[4]);
		$("#mjesto_a5").attr("src", slike1[5]);
	} else if (n1 === 1) {
		$("#mjesto_a0").attr("src", slike1[1]);
		$("#mjesto_a1").attr("src", slike1[2]);
		$("#mjesto_a2").attr("src", slike1[3]);
		$("#mjesto_a3").attr("src", slike1[4]);
		$("#mjesto_a4").attr("src", slike1[5]);
		$("#mjesto_a5").attr("src", slike1[0]);
	} else if (n1 === 2) {
		$("#mjesto_a0").attr("src", slike1[2]);
		$("#mjesto_a1").attr("src", slike1[3]);
		$("#mjesto_a2").attr("src", slike1[4]);
		$("#mjesto_a3").attr("src", slike1[5]);
		$("#mjesto_a4").attr("src", slike1[0]);
		$("#mjesto_a5").attr("src", slike1[1]);
	} else if (n1 === 3) {
		$("#mjesto_a0").attr("src", slike1[3]);
		$("#mjesto_a1").attr("src", slike1[4]);
		$("#mjesto_a2").attr("src", slike1[5]);
		$("#mjesto_a3").attr("src", slike1[0]);
		$("#mjesto_a4").attr("src", slike1[1]);
		$("#mjesto_a5").attr("src", slike1[2]);
	} else if (n1 === 4) {
		$("#mjesto_a0").attr("src", slike1[4]);
		$("#mjesto_a1").attr("src", slike1[5]);
		$("#mjesto_a2").attr("src", slike1[0]);
		$("#mjesto_a3").attr("src", slike1[1]);
		$("#mjesto_a4").attr("src", slike1[2]);
		$("#mjesto_a5").attr("src", slike1[3]);
	} else if (n1 === 5) {
		$("#mjesto_a0").attr("src", slike1[5]);
		$("#mjesto_a1").attr("src", slike1[0]);
		$("#mjesto_a2").attr("src", slike1[1]);
		$("#mjesto_a3").attr("src", slike1[2]);
		$("#mjesto_a4").attr("src", slike1[3]);
		$("#mjesto_a5").attr("src", slike1[4]);
	} else {
		var legenda = "Postoji sigurno više puno jednostavnijih načina, te mogućnost korištenja raznih efekata i filtera";
	}

	// drugi red
	if (n2 === 0) {
		$("#mjesto_b0").attr("src", slike2[0]);
		$("#mjesto_b1").attr("src", slike2[1]);
		$("#mjesto_b2").attr("src", slike2[2]);
		$("#mjesto_b3").attr("src", slike2[3]);
		$("#mjesto_b4").attr("src", slike2[4]);
	} else if (n2 === 1) {
		$("#mjesto_b0").attr("src", slike2[1]);
		$("#mjesto_b1").attr("src", slike2[2]);
		$("#mjesto_b2").attr("src", slike2[3]);
		$("#mjesto_b3").attr("src", slike2[4]);
		$("#mjesto_b4").attr("src", slike2[0]);
	} else if (n2 === 2) {
		$("#mjesto_b0").attr("src", slike2[2]);
		$("#mjesto_b1").attr("src", slike2[3]);
		$("#mjesto_b2").attr("src", slike2[4]);
		$("#mjesto_b3").attr("src", slike2[0]);
		$("#mjesto_b4").attr("src", slike2[1]);
	} else if (n2 === 3) {
		$("#mjesto_b0").attr("src", slike2[3]);
		$("#mjesto_b1").attr("src", slike2[4]);
		$("#mjesto_b2").attr("src", slike2[0]);
		$("#mjesto_b3").attr("src", slike2[1]);
		$("#mjesto_b4").attr("src", slike2[2]);
	} else if (n2 === 4) {
		$("#mjesto_b0").attr("src", slike2[4]);
		$("#mjesto_b1").attr("src", slike2[0]);
		$("#mjesto_b2").attr("src", slike2[1]);
		$("#mjesto_b3").attr("src", slike2[2]);
		$("#mjesto_b4").attr("src", slike2[3]);
	} else {
		var legenda = "Ali nisam još expert za array metode i napredniji JavaScript,";
	}
}

});// kraj ready