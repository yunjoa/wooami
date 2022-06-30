$(function () {
  $(".main_slider").slick({
    arrows: false,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000,
  });

  $(".sub_slider").slick({
    arrows: true,
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000,
  });

  $(".review_box").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  });

  let myPopup = document.querySelector(".popup"),
    checkbox = document.querySelector(".popupCheck"),
    popupClose = document.querySelector(".btn_close");

  // 쿠키 셋팅
  function setCookie(name, value, sec) {
    let date = new Date(); //현재날짜지정
    date.setSeconds(date.getSeconds() + sec);

    let mycookie = "";
    mycookie += name + "=" + value + ";";
    mycookie += "Expires=" + date.toUTCString();

    document.cookie = mycookie;
  }
  // setCookie('stranger','Main',30)

  //쿠키 확인
  console.log(document.cookie);

  function checkCookie(name) {
    let cookies = document.cookie.split(";");

    let visited = false; //방문 거짓

    for (var i in cookies) {
      if (cookies[i].indexOf(name) > -1) {
        visited = true;
      }
    }
    if (visited) {
      //재방문
      myPopup.style.display = "none";
    } else {
      //신규방문
      myPopup.style.display = "block";
    }
  }
  checkCookie("stranger");

  popupClose.addEventListener("click", function () {
    //a.checked true / flase
    if (checkbox.checked) {
      //팝업을 다시 안보겠다 팝업 닫고 쿠키 생성
      setCookie("stranger", "Main", 10);
      myPopup.style.display = "none";
    } else {
      //팝업을 계속 본다. 팝업 닫고, 쿠키제거.
      myPopup.style.display = "none";
      delCookie("stranger");
    }
  });

  //쿠키삭제

  function delCookie(name) {
    let date = new Date();

    date.setDate(date.getDate() - 1);

    let setCookie = "";
    setCookie += name + "=Main;";
    setCookie += "Expires=" + date.toUTCString();

    document.cookie = setCookie;
  }
});
