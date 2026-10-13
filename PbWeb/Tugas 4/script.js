var nama = "";
var jml = 0;
var daftar = [];
var terpilihCheckbox = [];
var terpilihDropdown = "";
var terpilihRadio = "";

function okJumlah() {
    nama = document.getElementById("nama").value.trim();

    var jumlah = document.getElementById("jml").value;
    var angka = Number(jumlah);

    if (nama == "") {
        document.getElementById("err1").innerHTML =
            "Nama tidak boleh kosong!";
        return;
    }

    if (jumlah == "" || !Number.isInteger(angka) ||
        angka < 1 || angka > 10) {
        document.getElementById("err1").innerHTML =
            "Jumlah pilihan harus angka 1 sampai 10!";
        return;
    }

    jml = angka;

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
            document.getElementById("err2").innerHTML =
                "Pilihan " + i + " tidak boleh kosong!";
            return;
        }

        daftar.push(teks);
    }

    var checkbox = "";
    var radio = "";
    var dropdown = "<option value=''>-- Pilih salah satu --</option>";

    for (var i = 0; i < daftar.length; i++) {
        checkbox += "<label>";
        checkbox += "<input type='checkbox' name='cek' value='" + i + "'>";
        checkbox += daftar[i] + "</label>";

        dropdown += "<option value='" + i + "'>";
        dropdown += daftar[i] + "</option>";

        radio += "<label>";
        radio += "<input type='radio' name='pil' value='" + i + "'>";
        radio += daftar[i] + "</label>";
    }

    document.getElementById("checkboxPilihan").innerHTML = checkbox;
    document.getElementById("dropdownPilihan").innerHTML = dropdown;
    document.getElementById("radioPilihan").innerHTML = radio;

    document.getElementById("bagian3").style.display = "block";
    document.getElementById("err2").innerHTML = "";
    document.getElementById("ok2").disabled = true;
}

function okPilihan() {
    terpilihCheckbox = [];
    terpilihDropdown = "";
    terpilihRadio = "";

    var checkbox = document.getElementsByName("cek");
    var radio = document.getElementsByName("pil");
    var dropdown = document.getElementById("dropdownPilihan");

    for (var i = 0; i < checkbox.length; i++) {
        if (checkbox[i].checked) {
            terpilihCheckbox.push(daftar[checkbox[i].value]);
        }
    }

    if (terpilihCheckbox.length == 0) {
        document.getElementById("err3").innerHTML =
            "Pilih minimal satu checkbox!";
        return;
    }

    if (dropdown.value == "") {
        document.getElementById("err3").innerHTML =
            "Silakan pilih opsi dropdown!";
        return;
    }

    terpilihDropdown = daftar[dropdown.value];

    for (var i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            terpilihRadio = daftar[radio[i].value];
            break;
        }
    }

    if (terpilihRadio == "") {
        document.getElementById("err3").innerHTML =
            "Silakan pilih satu radio button!";
        return;
    }

    document.getElementById("err3").innerHTML = "";
    document.getElementById("bagian4").style.display = "block";
    document.getElementById("ok3").disabled = true;
}

function okEmail() {
    var email = document.getElementById("email").value.trim();
    var polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email == "") {
        alert("Email tidak boleh kosong! Silakan masukkan email.");
        document.getElementById("email").focus();
        return;
    }

    if (!polaEmail.test(email)) {
        alert("Format email salah! Silakan masukkan ulang.");
        document.getElementById("email").value = "";
        document.getElementById("email").focus();
        return;
    }

    var hasil = document.getElementById("hasil");

    hasil.innerHTML =
        "Hallo, nama saya " + nama +
        ", email saya " + email +
        ", saya mempunyai sejumlah " + jml +
        " pilihan yaitu " + daftar.join(", ") +
        ". Pilihan checkbox saya: " + terpilihCheckbox.join(", ") +
        ". Pilihan dropdown saya: " + terpilihDropdown +
        ". Pilihan radio button saya: " + terpilihRadio + ".";

    hasil.style.display = "block";
    document.getElementById("err4").innerHTML = "";
    document.getElementById("ok4").disabled = true;
}