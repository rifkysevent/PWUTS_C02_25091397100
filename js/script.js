$(document).ready(function () {
  function muatHalaman(namaHalaman) {
    $("#konten-utama").load("pages/" + namaHalaman);
  }

  muatHalaman("home.html");

  $(".nav-item").on("click", function (event) {
    event.preventDefault();

    const halaman = $(this).data("page");

    muatHalaman(halaman);

    if (halaman === "home.html") {
      $("#judul-header").text("Kafe-in");
    } else if (halaman === "history.html") {
      $("#judul-header").text("Riwayat Pesanan");
    } else if (halaman === "riview.html") {
      $("#judul-header").text("Ulasan");
    }

    $(".nav-item").removeClass("active");
    $(this).addClass("active");
  });

// kategori

  $("#konten-utama").on("click", ".kategori-item", function () {
    const kategori = $(this).data("kategori");

    $(".kategori-item").removeClass("active");
    $(this).addClass("active");

    $(".kartu-produk").each(function () {
      const kategoriProduk = $(this).data("kategori");

      if (kategori === "semua" || kategoriProduk === kategori) {
        $(this).show();
      } else {
        $(this).hide();
      }
    });
  });

// pencarian menu

  $("#konten-utama").on("input", "#cari-menu", function () {
    const kataKunci = $(this).val().toLowerCase().trim();

    $(".kartu-produk").each(function () {
      const namaProduk = $(this).find("h3").text().toLowerCase();

      if (namaProduk.includes(kataKunci)) {
        $(this).show();
      } else {
        $(this).hide();
      }
    });
  });

// keranjang

  let keranjang = [];

  $("#konten-utama").on("click", ".btn-tambah", function () {
    const kartu = $(this).closest(".kartu-produk");
    const nama = kartu.find("h3").text();
    const harga = Number(kartu.data("harga"));

    const produkAda = keranjang.find((produk) => produk.nama === nama);

    if (produkAda) {
      produkAda.jumlah++;
    } else {
      keranjang.push({
        nama: nama,
        harga: harga,
        jumlah: 1,
      });
    }

    tampilkanJumlahKeranjang();
  });

  function tampilkanJumlahKeranjang() {
    const jumlah = keranjang.reduce(
      (total, produk) => total + produk.jumlah,
      0,
    );

    $("#jumlah-keranjang").text(jumlah);
  }

  function formatRupiah(angka) {
    return "Rp" + angka.toLocaleString("id-ID");
  }

  function tampilkanKeranjang() {
    const wadah = $("#isi-keranjang");
    wadah.empty();

    if (keranjang.length === 0) {
      wadah.html("<p>Keranjang kamu masih kosong.</p>");
      $("#total-harga").text("Rp0");
      $("#btn-checkout").prop("disabled", true);
      return;
    }

    let total = 0;

    keranjang.forEach((produk, index) => {
      const subtotal = produk.harga * produk.jumlah;
      total += subtotal;

      wadah.append(`
                <div class="item-keranjang">
                    <div>
                        <h3>${produk.nama}</h3>
                        <p>${formatRupiah(subtotal)}</p>
                    </div>

                    <div class="kontrol-jumlah">
                        <button class="btn-kurang" data-index="${index}">−</button>
                        <span>${produk.jumlah}</span>
                        <button class="btn-tambah-jumlah" data-index="${index}">+</button>
                    </div>
                </div>
            `);
    });

    $("#total-harga").text(formatRupiah(total));
    $("#btn-checkout").prop("disabled", false);
  }

  $(document).on("click", "#btn-keranjang", function () {
    $("#judul-header").text("Keranjang");

    $("#konten-utama").load("pages/keranjang.html", function () {
      tampilkanKeranjang();
      $(".nav-item").removeClass("active");
    });
  });

  $("#konten-utama").on("click", ".btn-tambah-jumlah", function () {
    const index = Number($(this).data("index"));
    keranjang[index].jumlah++;
    tampilkanKeranjang();
    tampilkanJumlahKeranjang();
  });

  $("#konten-utama").on("click", ".btn-kurang", function () {
    const index = Number($(this).data("index"));

    keranjang[index].jumlah--;

    if (keranjang[index].jumlah <= 0) {
      keranjang.splice(index, 1);
    }

    tampilkanKeranjang();
    tampilkanJumlahKeranjang();
  });

  $("#konten-utama").on("click", "#btn-checkout", function () {
    if (keranjang.length === 0) {
      return;
    }

    $("#judul-header").text("Checkout");

    $("#konten-utama").load("pages/checkout.html", function () {
      let total = 0;

      keranjang.forEach(function (produk) {
        total += produk.harga * produk.jumlah;
      });

      $("#ringkasan-checkout").html(
        "<h3>Total pembayaran: " + formatRupiah(total) + "</h3>",
      );

      $(".nav-item").removeClass("active");
    });
  });

// Checkout

  $("#konten-utama").on("submit", "#form-checkout", function (event) {
    event.preventDefault();

    const nama = $("#nama-pelanggan").val().trim();
    const nomorMeja = $("#nomor-meja").val();
    const nomorTelepon = $("#nomor-telepon").val().trim();

    if (keranjang.length === 0) {
      alert("Keranjang masih kosong.");
      return;
    }

    if (nama === "") {
      alert("Nama pelanggan wajib diisi.");
      $("#nama-pelanggan").focus();
      return;
    }

    if (!/^08[0-9]{8,11}$/.test(nomorTelepon)) {
      alert("Nomor telepon harus diawali 08 dan terdiri dari 10–13 digit.");
      $("#telepon-pelanggan").focus();
      return;
    }

    if (
      nomorMeja === "" ||
      !Number.isInteger(Number(nomorMeja)) ||
      Number(nomorMeja) < 1
    ) {
      alert("Nomor meja harus berupa bilangan bulat minimal 1.");
      $("#nomor-meja").focus();
      return;
    }

    alert("Pesanan Diproses!");
  });
});
