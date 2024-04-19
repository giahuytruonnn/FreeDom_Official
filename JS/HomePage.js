function showSlide(slideNumber) {
    $('.slide').hide();
    $('#slide' + slideNumber).show();
}

function thongBao() {
    alert("FreeDom Airlines Yêu Cầu Khách Hàng Đăng Ký Tài Khoản Club Để Nhận Ưu Đãi");
}
$(document).ready(function() {
    $(".slider").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
        draggable: false,
        prevArrow: `<button type='button' class='slick-prev slick-arrow'></button>`,
        nextArrow: `<button type='button' class='slick-next slick-arrow'></button>`,
        dots: true,
        responsive: [{
                breakpoint: 1140,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 750,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                },
            },
        ],
        autoplay: true,
        autoplaySpeed: 1500,
    });

    $('#hue').hover(
        function() {
            $(this).css({
                "height": "100%",
                "border-radius": "20px",
                "display": "flex",
                "flex-direction": "column",
                "justify-content": "end",
                "padding-bottom": "40px"

            });
            $(this).find("button").css({
                "display": "block"
            });
        },
        function() {
            $(this).css({
                "height": "100px",
                "border-top-left-radius": "0px",
                "border-top-right-radius": "0px",
                "padding": "0"
            });
            $(this).find("button").css({
                "display": "none"
            });
        }
    );

    $('#hue1').hover(
        function() {
            $("#hue").css({
                "height": "100%",
                "border-radius": "20px",
                "display": "flex",
                "flex-direction": "column",
                "justify-content": "end",
                "padding-bottom": "40px"

            });
            $("#hue").find("button").css({
                "display": "block"
            });
        },
        function() {
            $("#hue").css({
                "height": "100px",
                "border-top-left-radius": "0px",
                "border-top-right-radius": "0px",
                "padding": "0"
            });
            $("#hue").find("button").css({
                "display": "none"
            });
        }
    );

    $('#daNang').hover(
        function() {
            $(this).css({
                "height": "100%",
                "border-radius": "20px",
                "display": "flex",
                "flex-direction": "column",
                "justify-content": "end",
                "padding-bottom": "40px"

            });
            $(this).find("button").css({
                "display": "block"
            });
        },
        function() {
            $(this).css({
                "height": "100px",
                "border-top-left-radius": "0px",
                "border-top-right-radius": "0px",
                "padding": "0"
            });
            $(this).find("button").css({
                "display": "none"
            });
        }
    );
    $('#daNang1').hover(
        function() {
            $('#daNang').css({
                "height": "100%",
                "border-radius": "20px",
                "display": "flex",
                "flex-direction": "column",
                "justify-content": "end",
                "padding-bottom": "40px"

            });
            $('#daNang').find("button").css({
                "display": "block"
            });
        },
        function() {
            $('#daNang').css({
                "height": "100px",
                "border-top-left-radius": "0px",
                "border-top-right-radius": "0px",
                "padding": "0"
            });
            $('#daNang').find("button").css({
                "display": "none"
            });
        }
    );

    $('#daLat').hover(
        function() {
            $(this).css({
                "height": "100%",
                "border-radius": "20px",
                "display": "flex",
                "flex-direction": "column",
                "justify-content": "end",
                "padding-bottom": "40px"

            });
            $(this).find("button").css({
                "display": "block"
            });
        },
        function() {
            $(this).css({
                "height": "100px",
                "border-top-left-radius": "0px",
                "border-top-right-radius": "0px",
                "padding": "0"
            });
            $(this).find("button").css({
                "display": "none"
            });
        }
    );

    $('#daLat1').hover(
        function() {
            $('#daLat').css({
                "height": "100%",
                "border-radius": "20px",
                "display": "flex",
                "flex-direction": "column",
                "justify-content": "end",
                "padding-bottom": "40px"

            });
            $('#daLat').find("button").css({
                "display": "block"
            });
        },
        function() {
            $('#daLat').css({
                "height": "100px",
                "border-top-left-radius": "0px",
                "border-top-right-radius": "0px",
                "padding": "0"
            });
            $('#daLat').find("button").css({
                "display": "none"
            });
        }
    );

    $('#quyNhon').hover(
        function() {
            $(this).css({
                "height": "100%",
                "border-radius": "20px",
                "display": "flex",
                "flex-direction": "column",
                "justify-content": "end",
                "padding-bottom": "40px"

            });
            $(this).find("button").css({
                "display": "block"
            });
        },
        function() {
            $(this).css({
                "height": "100px",
                "border-top-left-radius": "0px",
                "border-top-right-radius": "0px",
                "padding": "0"
            });
            $(this).find("button").css({
                "display": "none"
            });
        }
    );

    $('#quyNhon1').hover(
        function() {
            $('#quyNhon').css({
                "height": "100%",
                "border-radius": "20px",
                "display": "flex",
                "flex-direction": "column",
                "justify-content": "end",
                "padding-bottom": "40px"

            });
            $('#quyNhon').find("button").css({
                "display": "block"
            });
        },
        function() {
            $('#quyNhon').css({
                "height": "100px",
                "border-top-left-radius": "0px",
                "border-top-right-radius": "0px",
                "padding": "0"
            });
            $('#quyNhon').find("button").css({
                "display": "none"
            });
        }
    );

    $('#saiGon').hover(
        function() {
            $(this).css({
                "height": "100%",
                "border-radius": "20px",
                "display": "flex",
                "flex-direction": "column",
                "justify-content": "end",
                "padding-bottom": "40px"

            });
            $(this).find("button").css({
                "display": "block"
            });
        },
        function() {
            $(this).css({
                "height": "100px",
                "border-top-left-radius": "0px",
                "border-top-right-radius": "0px",
                "padding": "0"
            });
            $(this).find("button").css({
                "display": "none"
            });
        }
    );

    $('#saiGon1').hover(
        function() {
            $('#saiGon').css({
                "height": "100%",
                "border-radius": "20px",
                "display": "flex",
                "flex-direction": "column",
                "justify-content": "end",
                "padding-bottom": "40px"

            });
            $('#saiGon').find("button").css({
                "display": "block"
            });
        },
        function() {
            $('#saiGon').css({
                "height": "100px",
                "border-top-left-radius": "0px",
                "border-top-right-radius": "0px",
                "padding": "0"
            });
            $('#saiGon').find("button").css({
                "display": "none"
            });
        }
    );

    $('#paris').hover(
        function() {
            $(this).css({
                "height": "100%",
                "border-radius": "20px",
                "display": "flex",
                "flex-direction": "column",
                "justify-content": "end",
                "padding-bottom": "40px"

            });
            $(this).find("button").css({
                "display": "block"
            });
        },
        function() {
            $(this).css({
                "height": "100px",
                "border-top-left-radius": "0px",
                "border-top-right-radius": "0px",
                "padding": "0"
            });
            $(this).find("button").css({
                "display": "none"
            });
        }
    );

    $('#paris1').hover(
        function() {
            $('#paris').css({
                "height": "100%",
                "border-radius": "20px",
                "display": "flex",
                "flex-direction": "column",
                "justify-content": "end",
                "padding-bottom": "40px"

            });
            $('#paris').find("button").css({
                "display": "block"
            });
        },
        function() {
            $('#paris').css({
                "height": "100px",
                "border-top-left-radius": "0px",
                "border-top-right-radius": "0px",
                "padding": "0"
            });
            $('#paris').find("button").css({
                "display": "none"
            });
        }
    );

    $('#copenhagen1').hover(
        function() {
            $('#copenhagen').css({
                "height": "100%",
                "border-radius": "20px",
                "display": "flex",
                "flex-direction": "column",
                "justify-content": "end",
                "padding-bottom": "40px"

            });
            $('#copenhagen').find("button").css({
                "display": "block"
            });
        },
        function() {
            $('#copenhagen').css({
                "height": "100px",
                "border-top-left-radius": "0px",
                "border-top-right-radius": "0px",
                "padding": "0"
            });
            $('#copenhagen').find("button").css({
                "display": "none"
            });
        }
    );

    $('#copenhagen').hover(
        function() {
            $(this).css({
                "height": "100%",
                "border-radius": "20px",
                "display": "flex",
                "flex-direction": "column",
                "justify-content": "end",
                "padding-bottom": "40px"

            });
            $(this).find("button").css({
                "display": "block"
            });
        },
        function() {
            $(this).css({
                "height": "100px",
                "border-top-left-radius": "0px",
                "border-top-right-radius": "0px",
                "padding": "0"
            });
            $(this).find("button").css({
                "display": "none"
            });
        }
    );

    $('#london').hover(
        function() {
            $(this).css({
                "height": "100%",
                "border-radius": "20px",
                "display": "flex",
                "flex-direction": "column",
                "justify-content": "end",
                "padding-bottom": "40px"

            });
            $(this).find("button").css({
                "display": "block"
            });
        },
        function() {
            $(this).css({
                "height": "100px",
                "border-top-left-radius": "0px",
                "border-top-right-radius": "0px",
                "padding": "0"
            });
            $(this).find("button").css({
                "display": "none"
            });
        }
    );

    $('#london1').hover(
        function() {
            $('#london').css({
                "height": "100%",
                "border-radius": "20px",
                "display": "flex",
                "flex-direction": "column",
                "justify-content": "end",
                "padding-bottom": "40px"

            });
            $('#london').find("button").css({
                "display": "block"
            });
        },
        function() {
            $('#london').css({
                "height": "100px",
                "border-top-left-radius": "0px",
                "border-top-right-radius": "0px",
                "padding": "0"
            });
            $('#london').find("button").css({
                "display": "none"
            });
        }
    );

    $('#milan').hover(
        function() {
            $(this).css({
                "height": "100%",
                "border-radius": "20px",
                "display": "flex",
                "flex-direction": "column",
                "justify-content": "end",
                "padding-bottom": "40px"

            });
            $(this).find("button").css({
                "display": "block"
            });
        },
        function() {
            $(this).css({
                "height": "100px",
                "border-top-left-radius": "0px",
                "border-top-right-radius": "0px",
                "padding": "0"
            });
            $(this).find("button").css({
                "display": "none"
            });
        }
    );

    $('#milan1').hover(
        function() {
            $('#milan').css({
                "height": "100%",
                "border-radius": "20px",
                "display": "flex",
                "flex-direction": "column",
                "justify-content": "end",
                "padding-bottom": "40px"

            });
            $('#milan').find("button").css({
                "display": "block"
            });
        },
        function() {
            $('#milan').css({
                "height": "100px",
                "border-top-left-radius": "0px",
                "border-top-right-radius": "0px",
                "padding": "0"
            });
            $('#milan').find("button").css({
                "display": "none"
            });
        }
    );
});