// Lấy các phần tử cần thao tác
const computerScreen = document.getElementById('computer');
const phoneScreen = document.getElementById('phone');
const computerScreen1 = document.getElementById('computer1');
const phoneScreen1 = document.getElementById('phone1');

// Hàm kiểm tra và ẩn/hiện phần tử dựa trên kích thước màn hình
function checkScreenSize() {
    const width = window.innerWidth;
    if (width <= 700) {
        computerScreen.style.display = 'none';
        phoneScreen.style.display = 'block';
        computerScreen1.style.display = 'none';
        phoneScreen1.style.display = 'block';
    } else {
        computerScreen.style.display = 'block';
        phoneScreen.style.display = 'none';
        computerScreen1.style.display = 'block';
        phoneScreen1.style.display = 'none';
    }
}

// Gọi hàm kiểm tra màn hình khi trang được tải và khi cửa sổ thay đổi kích thước
window.addEventListener('load', checkScreenSize);
window.addEventListener('resize', checkScreenSize);

const formComputer = document.getElementById('form-computer');
const halfComputer = document.getElementById('half-computer');

function checkScreenSize1() {
    const doDai = window.innerWidth;
    if (doDai < 975) {
        formComputer.style.display = 'none';
        halfComputer.style.display = 'block';
    } else {
        formComputer.style.display = 'block';
        halfComputer.style.display = 'none';
    }
}

let resizeTimer;
window.addEventListener('load', checkScreenSize1);
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(checkScreenSize1, 0); // Gọi hàm sau 250ms khi resize kết thúc
});

// phone

const showOp = document.getElementById('show');
const showOp1 = document.getElementById('show-1');
const showOp2 = document.getElementById('show-2');
const showOp3 = document.getElementById('show-3');


showOp.addEventListener('click', () => {
    var list = document.getElementById("list");
    list.classList.toggle("d-none");
});

showOp1.addEventListener('click', () => {
    var list1 = document.getElementById("list1");
    list1.classList.toggle("d-none");
});

showOp2.addEventListener('click', () => {
    var list2 = document.getElementById("list2");
    list2.classList.toggle("d-none");
});

showOp3.addEventListener('click', () => {
    var list3 = document.getElementById("list3");
    list3.classList.toggle("d-none");
});



// phone

const showOp_0 = document.getElementById('show0');
const showOp_1 = document.getElementById('show1');
const showOp_2 = document.getElementById('show2');
const showOp_3 = document.getElementById('show3');
const showOp_4 = document.getElementById('show4');


showOp_0.addEventListener('click', () => {
    var list = document.getElementById("list-0");
    list.classList.toggle("d-none");
});

showOp_1.addEventListener('click', () => {
    var list1 = document.getElementById("list-1");
    list1.classList.toggle("d-none");
});

showOp_2.addEventListener('click', () => {
    var list2 = document.getElementById("list-2");
    list2.classList.toggle("d-none");
});

showOp_3.addEventListener('click', () => {
    var list3 = document.getElementById("list-3");
    list3.classList.toggle("d-none");
});
showOp_4.addEventListener('click', () => {
    var list3 = document.getElementById("list-4");
    list3.classList.toggle("d-none");
});

const links = document.querySelectorAll('.myLink');

links.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.classList.remove('text-error');
        link.classList.add('text-dark', 'text-decoration-underline');
    });

    link.addEventListener('mouseout', () => {
        link.classList.remove('text-dark', 'text-decoration-underline');
        link.classList.add('');
    });
});

// form js
function showForm(formNumber) {
    var forms = document.getElementsByClassName("form-group1");
    for (var i = 0; i < forms.length; i++) {
        forms[i].style.display = "none";
    }
    document.getElementById("form" + formNumber).style.display = "block";
}


$(document).ready(function() {




    $('input[name="checkViTri"]').change(function() {
        if ($(this).val() == 'Một chiều') {
            $('#ngay_ve').prop('disabled', true);
            $('#ngay_ve1').prop('disabled', true);
        } else {
            $('#ngay_ve').prop('disabled', false);
            $('#ngay_ve1').prop('disabled', false);
        }
    });









    function checkTu1() {
        var tu = $("#tu1").val();
        if (tu == "") {
            $("#errTu1").text('Không bỏ trống Từ');
            return false;
        } else {
            $("#errTu1").text('');
            return true;
        }
    }




    function checkToi1() {
        var toi = $("#toi1").val();
        if (toi == "") {
            $("#errToi1").text('Không bỏ trống Tới');
            return false;
        } else {
            $("#errToi1").text('');
            return true;
        }
    }



    function ngayDi1() {
        var datedi = $("#ngayDi1").val();
        var dateve = $("#ngay_ve1").val();
        if (!datedi) {
            $("#errNgayDi1").text("Không rỗng");
            return false;
        }
        var di = new Date(datedi);
        var ve = new Date(dateve);
        var now = new Date(); // Lấy ngày hiện tại

        // Kiểm tra xem ngày đi có hợp lệ không
        if (di > ve) {
            $("#errNgayDi1").text("Ngày đi không được lớn hơn ngày về");
            return false;
        } else if (di < now.setHours(0, 0, 0, 0)) {
            $("#errNgayDi1").text("Ngày đi phải sau hoặc bằng ngày hiện tại");
            return false;
        } else {
            $("#errNgayDi1").text("");
            return true;
        }
    }

    function ngayVe1() {
        var datedi = $("#ngayDi1").val();
        var dateve = $("#ngay_ve1").val();

        if (!dateve) {
            $("#errNgayVe1").text("Không rỗng");
            return false;
        }
        var di = new Date(datedi);
        var ve = new Date(dateve);
        var now = new Date();

        if (di > ve) {
            $("#errNgayVe1").text("Ngày đi không được lớn hơn ngày về");
            return false;
        } else if (ve < now.setHours(0, 0, 0, 0) || ve < di) {
            $("#errNgayVe1").text("Ngày về phải hơn ngày đi, sau hiện tại");
            return false;
        } else {
            $("#errNgayVe1").text("");
            return true;
        }
    }

    function checkKhach1() {
        var cus = $("#email1").val();
        if (cus <= 0) {
            $("#errHanhKhach1").text('Chuyến bay phải có hành khách');
            return false;
        } else if (cus > 10) {
            $("#errHanhKhach1").text('Chuyến bay tối đa 10 người');
            return false;
        } else {
            $("#errHanhKhach1").text("");
            return true;
        }

    }

    function checkMaGiam1() {
        var ma = $("#maGiam1").val();
        var regex = /[A-Z]{2}[0-9]{3}/;

        if (ma == "") {
            $("#errMaGiam1").text("Không được để rỗng");
            return false;
        } else if (!regex.test(ma)) {
            $("#errMaGiam1").text("Theo dịnh dạng 2 chữ hoa và 3 số");
            return false;
        } else {
            $("#errMaGiam1").text("");
            return true;
        }
    }
    $("#tu1").blur(function() {
        checkTu1();
    });

    $("#toi1").blur(function() {
        checkToi1();
    });

    $("#ngayDi1").blur(function() {
        ngayDi1();
    });

    $("#ngay_ve1").blur(function() {
        ngayVe1();
    });

    $("#email1").blur(function() {
        checkKhach1();
    });

    $("#maGiam1").blur(function() {
        checkMaGiam1();
    });

    function checkRadio1() {
        if ($("input[name='checkViTri']").is(":checked")) {
            $("#errRadio1").text("");
            return true;
        } else {
            $("#errRadio1").text("Vui lòng chọn");
            return false;
        }
    }


    $("#timChuyenBtn1").click(function() {
        if (checkToi1() && checkTu1() && ngayDi1() && ngayVe1() && checkKhach1() && checkMaGiam1() && checkRadio1()) {
            var radioCheck = $("input[name='checkViTri']:checked").val();
            var tu = $("#tu1").val();
            var toi = $("#toi1").val();
            var ngayGo = $("#ngayDi1").val();
            var ngayBack = $("#ngay_ve1").val();
            var hanhKhach = $("#email1").val();
            var thanhVien = $("#checkThanhVien1").prop("checked") ? "Có" : "Không";
            var maGiam = $("#maGiam1").val();
            if (radioCheck == "Một chiều") {
                ngayBack = "Không";
            }
            var table = "<tr><td>" + radioCheck + "</td><td>" + tu + "</td><td>" + toi + "</td><td>" + ngayGo + "</td><td>" + ngayBack + "</td><td>" + hanhKhach + "</td><td>" + thanhVien + "</td><td>" + maGiam + "</td></tr>"; // Thêm ngày về vào bảng
            $("#myTable").append(table);
        } else {
            alert("Vui lòng kiểm tra lại dữ liệu");
        }

    });


    function checkTu() {
        var tu = $("#tu").val();
        if (tu == "") {
            $("#errTu").text('Không bỏ trống Từ');
            return false;
        } else {
            $("#errTu").text('');
            return true;
        }
    }




    function checkToi() {
        var toi = $("#toi").val();
        if (toi == "") {
            $("#errToi").text('Không bỏ trống Tới');
            return false;
        } else {
            $("#errToi").text('');
            return true;
        }
    }

    function ngayDi() {
        var datedi = $("#ngayDi").val();
        var dateve = $("#ngay_ve").val();
        if (!datedi) {
            $("#errNgayDi").text("Không rỗng");
            return false;
        }
        var di = new Date(datedi);
        var ve = new Date(dateve);
        var now = new Date(); // Lấy ngày hiện tại

        // Kiểm tra xem ngày đi có hợp lệ không
        if (di > ve) {
            $("#errNgayDi").text("Ngày đi không được lớn hơn ngày về");
            return false;
        } else if (di < now.setHours(0, 0, 0, 0)) {
            $("#errNgayDi").text("Ngày đi phải sau hoặc bằng ngày hiện tại");
            return false;
        } else {
            $("#errNgayDi").text("");
            return true;
        }
    }

    function ngayVe() {
        var datedi = $("#ngayDi").val();
        var dateve = $("#ngay_ve").val();

        if (!dateve) {
            $("#errNgayVe").text("Không rỗng");
            return false;
        }
        var di = new Date(datedi);
        var ve = new Date(dateve);
        var now = new Date();

        if (di > ve) {
            $("#errNgayVe").text("Ngày đi không được lớn hơn ngày về");
            return false;
        } else if (ve < now.setHours(0, 0, 0, 0) || ve < di) {
            $("#errNgayVe").text("Ngày về phải hơn ngày đi, sau hiện tại");
            return false;
        } else {
            $("#errNgayVe").text("");
            return true;
        }
    }

    function checkKhach() {
        var cus = $("#email").val();
        if (cus <= 0) {
            $("#errHanhKhach").text('Chuyến bay phải có hành khách');
            return false;
        } else if (cus > 10) {
            $("#errHanhKhach").text('Chuyến bay tối đa 10 người');
            return false;
        } else {
            $("#errHanhKhach").text("");
            return true;
        }

    }

    function checkMaGiam() {
        var ma = $("#maGiam").val();
        var regex = /[A-Z]{2}[0-9]{3}/;

        if (ma == "") {
            $("#errMaGiam").text("Không được để rỗng");
            return false;
        } else if (!regex.test(ma)) {
            $("#errMaGiam").text("Theo dịnh dạng 2 chữ hoa và 3 số");
            return false;
        } else {
            $("#errMaGiam").text("");
            return true;
        }
    }
    $("#tu").blur(function() {
        checkTu();
    });

    $("#toi").blur(function() {
        checkToi();
    });

    $("#ngayDi").blur(function() {
        ngayDi();
    });

    $("#ngay_ve").blur(function() {
        ngayVe();
    });

    $("#email").blur(function() {
        checkKhach();
    });

    $("#maGiam").blur(function() {
        checkMaGiam();
    });

    function checkRadio() {
        if ($("input[name='checkViTri']").is(":checked")) {
            $("#errRadio").text("");
            return true;
        } else {
            $("#errRadio").text("Vui lòng chọn");
            return false;
        }
    }

    $("#timChuyenBtn").click(function() {
        if (checkToi() && checkTu() && ngayDi() && ngayVe() && checkKhach() && checkMaGiam() && checkRadio()) {
            var radioCheck = $("input[name='checkViTri']:checked").val();
            var tu = $("#tu").val();
            var toi = $("#toi").val();
            var ngayGo = $("#ngayDi").val();
            var ngayBack = $("#ngay_ve").val();
            var hanhKhach = $("#email").val();
            var thanhVien = $("#checkThanhVien").prop("checked") ? "Có" : "Không";
            var maGiam = $("#maGiam").val();
            if (radioCheck == "Một chiều") {
                ngayBack = "Không";
            }
            var table = "<tr><td>" + radioCheck + "</td><td>" + tu + "</td><td>" + toi + "</td><td>" + ngayGo + "</td><td>" + ngayBack + "</td><td>" + hanhKhach + "</td><td>" + thanhVien + "</td><td>" + maGiam + "</td></tr>";
            $("#myTable").append(table);
        } else {
            alert("Vui lòng kiểm tra lại dữ liệu");
        }
    });



    function checkMa() {
        var ma = $("#inputlg").val();
        var maRegex = /^123[\w]*$/;

        if (ma == "") {
            $('#errMa').text('Không được rỗng mã');
            return false;
        } else if (!maRegex.test(ma)) {
            $('#errMa').text('Số 123 đứng đầu và kí tự');
            return false;
        } else {
            $('#errMa').text('');
            return true;
        }
    }

    function checkHo() {
        var ten = $('#inputlg1').val();
        var tenRegex = /^([A-Z][a-z]+\s+)*[A-Z][a-z]+$/;

        if (ten == "") {
            $('#errHo').text('Không được rỗng họ');
            return false;
        } else if (!tenRegex.test(ten)) {
            $('#errHo').text('Tên bắt đầu bằng chữ hoa');
            return false;
        } else {
            $('#errHo').text('');
            return true;
        }
    }


    $("#inputlg").blur(function() {
        checkMa();
    });

    $("#inputlg1").blur(function() {
        checkHo();
    });


    $("#checkLamThuTuc").click(function() {
        if (checkMa() && checkHo()) {
            var tu = $("#inputlg").val();
            var toi = $("#inputlg1").val();

            var table = "<tr><td>" + tu + "</td><td>" + toi + "</td></tr>";
            $("#myTable1").append(table);
        } else {
            alert("Vui lòng kiểm tra lại dữ liệu");
        }
    });




    function checkMa1() {
        var ma = $("#inputlg3").val();
        var maRegex = /^123[\w]*$/;

        if (ma == "") {
            $('#errMa1').text('Không được rỗng mã');
            return false;
        } else if (!maRegex.test(ma)) {
            $('#errMa1').text('Số 123 đứng đầu và kí tự');
            return false;
        } else {
            $('#errMa1').text('');
            return true;
        }
    }

    function checkHo1() {
        var ten = $('#inputlg4').val();
        var tenRegex = /^([A-Z][a-z]+\s+)*[A-Z][a-z]+$/;

        if (ten == "") {
            $('#errHo1').text('Không được rỗng họ');
            return false;
        } else if (!tenRegex.test(ten)) {
            $('#errHo1').text('Tên bắt đầu bằng chữ hoa');
            return false;
        } else {
            $('#errHo1').text('');
            return true;
        }
    }


    $("#inputlg3").blur(function() {
        checkMa1();
    });

    $("#inputlg4").blur(function() {
        checkHo1();
    });





    $("#checkTimKiem").click(function() {
        if (checkHo1() && checkHo1()) {
            var tu = $("#inputlg3").val();
            var toi = $("#inputlg4").val();

            var table = "<tr><td>" + tu + "</td><td>" + toi + "</td></tr>";
            $("#myTable2").append(table);
        } else {
            alert("Vui lòng kiểm tra lại dữ liệu");
        }
    });



});

function showSlide(slideNumber) {
    $('.slide').hide();
    $('#slide' + slideNumber).show();
}

const myModal = new bootstrap.Modal(
    document.getElementById("modalId"),
    options,
);


$(document).ready(function() {

});