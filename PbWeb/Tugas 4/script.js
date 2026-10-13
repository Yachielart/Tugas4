var nama = "";
var jml = 0;
var daftar = [];
var terpilih = "";
function okJumlah() {

    nama = document.getElementById("nama").value.trim();
    var jumlah = document.getElementById("jml").value.trim();

    if (nama == "") {
        document.getElementById("err1").innerHTML = "Nama tidak boleh kosong!";
        return;

    }

    if (jumlah == "" || isNaN(jumlah) || jumlah % 1 != 0 || jumlah < 1 || jumlah > 10) {
        document.getElementById("err1").innerHTML = "Jumlah pilihan harus angka 1 sampai 10!";
        return;

    }

    jml = parseInt(jumlah);
    var isi = "";

    for (var i = 1; i <= jml; i++) {

        isi += "<tr><td>Pilihan " + i + " :</td>";
        isi += "<td><input type='text' id='pilihan" + i + "'></td></tr>";

    }

    document.getElementById("tabelPilihan").innerHTML = isi;
    document.getElementById("bagian2").style.display = "block";
    document.getElementById("err1").innerHTML = "";
    document.getElementById("ok1").disabled = true;

}

function okTeksPilihan() {

    daftar = [];
    for (var i = 1; i <= jml; i++) {
        var teks = document.getElementById("pilihan" + i).value.trim();

        if (teks == "") {

            document.getElementById("err2").innerHTML = "Pilihan " + i + " tidak boleh kosong!";

            return;

        }

        daftar.push(teks);

    }

    var radio = "";
    for (var i = 0; i < daftar.length; i++) {
        radio += "<input type='radio' name='pil' value='" + i + "' ";

        if (i == 0) {

            radio += "checked";
        }
        radio += ">" + daftar[i] + "<br>";
    }

    document.getElementById("radioPilihan").innerHTML = radio;
    document.getElementById("bagian3").style.display = "block";
    document.getElementById("err2").innerHTML = "";
    document.getElementById("ok2").disabled = true;

}

function okPilihan() {

    var pilihan = document.getElementsByName("pil");
    var ketemu = false;
    for (var i = 0; i < pilihan.length; i++) {

        if (pilihan[i].checked) {
            terpilih = daftar[pilihan[i].value];
            ketemu = true;
            break;

        }

    }

    if (!ketemu) {
        document.getElementById("err3").innerHTML = "Silakan pilih salah satu pilihan!";
        return;

    }

    document.getElementById("err3").innerHTML = "";
    document.getElementById("bagian4").style.display = "block";
    document.getElementById("ok3").disabled = true;

}

function okEmail() {

    var email = document.getElementById("email").value.trim();
    if (email == "") {

        document.getElementById("err4").innerHTML = "Email tidak boleh kosong!";
        return;

    }

    if (!email.includes("@") || !email.includes(".")) {

        document.getElementById("err4").innerHTML = "Format email salah!";
        return;

    }

    var hasil = document.getElementById("hasil");

    hasil.innerHTML = "Hallo, nama saya " + nama +

        ", email " + email +
        " saya mempunyai sejumlah " + jml +
        " pilihan yaitu " + daftar.join(", ") +
        ", dan saya memilih " + terpilih;

    hasil.style.display = "block";
    document.getElementById("err4").innerHTML = "";
    document.getElementById("ok4").disabled = true;

}
