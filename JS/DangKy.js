$(document).ready(function() {
  var luaChon = $("#luaChon");
  var soHoiVien = $("#soHoiVien");
  var maToken = $("#maToken");
  var danhXung = $("#danhXung");
  var ho = $("#ho");
  var ten = $("#ten");
  var ngaySinh = $("#ngaySinh");
  var gioiTinh = $("#gioiTinh");
  var email = $("#email");
  var soDienThoai = $("#soDienThoai");
  var quocTich = $("#quocTich");
  var hoChieu = $("#hoChieu");
  var soHoChieu = $("#soHoChieu");
  var dieuKhoan = $("#dieuKhoan");
  var khuyenMai = $("#khuyenMai");
  var dauSoDienThoai = $("#dauSoDienThoai");
  var nguoiGioiThieu = $("#nguoiGioiThieu");

  var tbSoHoiVien = $("#tbSoHoiVien");
  var tbMaToken = $("#tbMaToken");
  var tbDanhXung = $("#tbDanhXung");
  var tbHo = $("#tbHo");
  var tbTen = $("#tbTen");
  var tbNgaySinh = $("#tbNgaySinh");
  var tbGioiTinh = $("#tbGioiTinh");
  var tbEmail = $("#tbEmail");
  var tbSoDienThoai = $("#tbSoDienThoai");
  var tbQuocTich = $("#tbQuocTich");
  var tbHoChieu = $("#tbHoChieu");
  var tbSoHoChieu = $("#tbSoHoChieu");
  var tbDieuKhoan = $("#tbDieuKhoan");
  var tbKhuyenMai = $("#tbKhuyenMai");

  var btnDangKy = $("#btnDangKy");

  var check1 = false,
      check2 = false,
      check3 = false,
      check4 = false,
      check5 = false,
      check6 = false,
      check7 = false,
      check8 = false,
      check9 = false,
      check10 = false,
      check11 = false,
      check12 = false,
      check13 = false;

  $("#dangKiHoiVien").on("hidden.bs.collapse", function() {
      soHoiVien.val("");
      maToken.val("");
      tbSoHoiVien.text("(*)");
      tbMaToken.text("(*)");
  });

  soHoiVien.on("blur", function() {
      var regex = /^[0-9]{8,}$/;
      if (soHoiVien.val() == "") {
          tbSoHoiVien.text("(*) Số hội viên không được để trống");
          check1 = false;
      } else if (regex.test(soHoiVien.val())) {
          tbSoHoiVien.text("(*)");
          check1 = true;
      } else if (isNaN(soHoiVien.val())) {
          tbSoHoiVien.text("(*) Số hội viên phải số");
          check1 = false;
      } else {
          tbSoHoiVien.text("(*) Số hội viên phải 8 số trở lên");
          check1 = false;
      }
  });

  maToken.on("blur", function() {
      var regex = /^\w{4,}$/;
      if (maToken.val() == "") {
          tbMaToken.text("(*) Mã Token không được để trống");
          check2 = false;
      } else if (regex.test(maToken.val())) {
          tbMaToken.text("(*)");
          check2 = true;
      } else {
          tbMaToken.text("(*) Mã Token phải có 4 kí tự trở lên");
          check2 = false;
      }
  });

  danhXung.on("blur", function() {
      if (danhXung.val() === null) {
          tbDanhXung.text("(*) Danh xưng không được để trống");
          check3 = false;
      } else {
          tbDanhXung.text("(*)");
          gioiTinh.val(danhXung.val());
          check3 = true;
      }
  });

  ho.on("blur", function() {
      var regex = /^[A-ZĐÀ-Ỹa-zđà-ỹ]*$/;
      if (ho.val() === "") {
          tbHo.text("(*) Họ không được để trống");
          check4 = false;
      } else if (regex.test(ho.val())) {
          tbHo.text("(*)");
          check4 = true;
      } else {
          tbHo.text("(*) Họ chỉ chứa các chữ cái");
          check4 = false;
      }
  });

  ten.on("blur", function() {
      var regex = /^[A-ZĐÀ-Ỹa-zđà-ỹ]*[A-ZĐÀ-Ỹa-zđà-ỹ ]*$/;
      if (ten.val() === "") {
          tbTen.text("(*) Tên và tên đệm không được để trống");
          check5 = false;
      } else if (regex.test(ho.val())) {
          tbTen.text("(*)");
          check5 = true;
      } else {
          tbTen.text("(*) Tên và tên đệm chỉ chứa các chữ cái và khoảng trắng");
          check5 = false;
      }
  });

  ngaySinh.on("blur", function() {
      var value = new Date($(this).val()).getFullYear();
      var tuoi = new Date().getFullYear() - value;

      if (isNaN(value)) {
          tbNgaySinh.text("(*) Ngày sinh không được để trống");
          check6 = false;
      } else if (tuoi < 18) {
          tbNgaySinh.text("(*) Độ tuổi phải từ 18 trở lên");
          check6 = false;
      } else {
          tbNgaySinh.text("(*)");
          check6 = true;
      }
  });

  email.on("blur", function() {
      var regex = /^\w+@gmail.com$/;
      if (email.val() == "") {
          tbEmail.text("(*) Email không được để trống");
          check7 = false;
      } else if (regex.test(email.val())) {
          tbEmail.text("(*)");
          check7 = true;
      } else {
          tbEmail.text("(*) Email phải có định dạng @gmail.com");
          check7 = false;
      }
  });

  soDienThoai.on("blur", function() {
      var value = dauSoDienThoai.val() + soDienThoai.val();
      if (soDienThoai.val() == "") {
          tbSoDienThoai.text("(*) Số điện thoại không được để trống");
          check8 = false;
      } else if (isNaN(value)) {
          tbSoDienThoai.text("(*) Số điện thoại phải là số");
          check8 = false;
      } else if (soDienThoai.val().length < 9 || soDienThoai.val().length > 10) {
          tbSoDienThoai.text("(*) Số điện thoại phải đủ 10 số hoặc 11 số");
          check8 = false;
      } else {
          tbSoDienThoai.text("(*)");
          check8 = true;
      }
  });

  quocTich.on("blur", function() {
      var regex = /^[A-ZĐÀ-Ỹa-zđà-ỹ]*[A-ZĐÀ-Ỹa-zđà-ỹ ]*$/;
      if (quocTich.val() == "") {
          tbQuocTich.text("(*) Quốc tịch không được để trống");
          check9 = false;
      } else if (regex.test(quocTich.val())) {
          tbQuocTich.text("(*)");
          check9 = true;
      } else {
          tbQuocTich.text("(*) Quốc tịch chứa các chữ cái và khoảng trắng");
          check9 = false;
      }
  });

  hoChieu.on("blur", function() {
      if (hoChieu.val() == null) {
          tbHoChieu.text("(*) Hộ chiếu/CCCD không được để trống");
          check10 = false;
      } else {
          tbHoChieu.text("(*)");
          check10 = true;
      }
  });

  soHoChieu.on("blur", function() {
      if (soHoChieu.val() == "") {
          tbSoHoChieu.text("(*) Số hộ chiếu không được để trống");
          check11 = false;
      } else if (hoChieu.val() == "Hộ Chiếu") {
          var regex = /^[0-9]{8}$/;
          if (regex.test(soHoChieu.val())) {
              tbSoHoChieu.text("(*)");
              check11 = true;
          } else {
              tbSoHoChieu.text("(*) Số hộ chiếu phải đủ 8 số");
              check11 = false;
          }
      } else if (hoChieu.val() == "CCCD") {
          var regex = /^[0-9]{12}$/;
          if (regex.test(soHoChieu.val())) {
              tbSoHoChieu.text("(*)");
              check11 = true;
          } else {
              tbSoHoChieu.text("(*) Số CCCD phải đủ 12 số");
              check11 = false;
          }
      } else if (hoChieu.val() == null) {
          tbSoHoChieu.text("(*) Chưa chọn loại Hộ chiếu/CCCD");
          check11 = false;
      }
  });

  dieuKhoan.on("change", function() {
      if (dieuKhoan.is(":checked")) {
          tbDieuKhoan.text("(*)");
          check12 = true;
      } else {
          tbDieuKhoan.text("(*) Hãy chọn đồng ý");
          check12 = false;
      }
  });

  khuyenMai.on("change", function() {
      if (khuyenMai.is(":checked")) {
          tbKhuyenMai.text("(*)");
          check13 = true;
      } else {
          tbKhuyenMai.text("(*) Hãy chọn đồng ý");
          check13 = false;
      }
  });

  btnDangKy.on("click", function() {
      if (luaChon.is(":checked")) {
          if (check1 && check2 && check3 && check4 && check5 && check6 && check7 && check8 && check9 && check10 && check11 && check12 && check13) {
              var row;
              row = "<tr>" +
                  "<td>" + soHoiVien.val() + "</td>" +
                  "<td>" + maToken.val() + "</td>" +
                  "<td>" + danhXung.val() + "</td>" +
                  "<td>" + ho.val() + "</td>" +
                  "<td>" + ten.val() + "</td>" +
                  "<td>" + gioiTinh.val() + "</td>" +
                  "<td>" + ngaySinh.val() + "</td>" +
                  "<td>" + email.val() + "</td>" +
                  "<td>" + $('#dauSoDienThoai').val() + soDienThoai.val() + "</td>" +
                  "<td>" + quocTich.val() + "</td>" +
                  "<td>" + hoChieu.val() + "</td>" +
                  "<td>" + soHoChieu.val() + "</td>" +
                  +"</tr>";
              $("#myTable").append(row);
              $("#dangKy").modal('show');
          } else {
              $("#baoLoi").modal('show');
              soHoiVien.blur();
              maToken.blur();
              danhXung.blur();
              ho.blur();
              ten.blur();
              ngaySinh.blur();
              email.blur();
              soDienThoai.blur();
              quocTich.blur();
              hoChieu.blur();
              soHoChieu.blur();
              dieuKhoan.change();
              khuyenMai.change();
          }
      } else {
          if (
              check3 && check4 &&
              check5 &&
              check6 &&
              check7 &&
              check8 &&
              check9 &&
              check10 &&
              check11 &&
              check12 &&
              check13
          ) {
              function randomSoHoiVien() {
                  var soHoiVien = "";
                  for (var i = 0; i < 8; i++) {
                      soHoiVien += Math.floor(Math.random() * 10);
                  }
                  return soHoiVien;
              }

              function randomMaToken() {
                  var characters =
                      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
                  var maToken = "";
                  for (var i = 0; i < 5; i++) {
                      maToken += characters.charAt(
                          Math.floor(Math.random() * characters.length)
                      );
                  }
                  return maToken;
              }

              maToken.val(randomMaToken());
              soHoiVien.val(randomSoHoiVien());
              var row;
              row = "<tr>" +
                  "<td>" + soHoiVien.val() + "</td>" +
                  "<td>" + maToken.val() + "</td>" +
                  "<td>" + danhXung.val() + "</td>" +
                  "<td>" + ho.val() + "</td>" +
                  "<td>" + ten.val() + "</td>" +
                  "<td>" + gioiTinh.val() + "</td>" +
                  "<td>" + ngaySinh.val() + "</td>" +
                  "<td>" + email.val() + "</td>" +
                  "<td>" + $('#dauSoDienThoai').val() + soDienThoai.val() + "</td>" +
                  "<td>" + quocTich.val() + "</td>" +
                  "<td>" + hoChieu.val() + "</td>" +
                  "<td>" + soHoChieu.val() + "</td>" +
                  +"</tr>";
              $("#myTable").append(row);
              $("#dangKy").modal('show');
          } else {
              $("#baoLoi").modal('show');
              danhXung.blur();
              ho.blur();
              ten.blur();
              ngaySinh.blur();
              email.blur();
              soDienThoai.blur();
              quocTich.blur();
              hoChieu.blur();
              soHoChieu.blur();
              dieuKhoan.change();
              khuyenMai.change();
          }
      }
  });

  $('#btnDaDangKy').on('click', function() {
      $("#dangKy").modal('show');
  })
});