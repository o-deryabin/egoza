// burger menu

const burgerBtn = document.querySelector(".header__burger");
const burgerHeadings = document.querySelector(".header-headings");
const body = document.querySelector("body");

burgerBtn.addEventListener("click", () => {
  burgerBtn.classList.toggle("active");
  burgerHeadings.classList.toggle("active");
  body.classList.toggle("lock");
});

$(document).ready(function () {
  // ! Menu
  var menuParentLiIcon =
      '<svg style="width:7px" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-down" class="svg-inline--fa fa-angle-down fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="#969ba2" d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"></path></svg>',
    menuParentLi = $(".item-parent_js"),
    submenuSwitcherClass = "toggle_submenu_js";

  if ($(window).width() > 992) {
    menuParentLi
      .children("a")
      .append('<span class="arrow">' + menuParentLiIcon + "</span>");
  } else {
    menuParentLi.append(
      '<span class="arrow ' +
        submenuSwitcherClass +
        '">' +
        menuParentLiIcon +
        "</span>"
    );

    $("." + submenuSwitcherClass).click(function () {
      let parent = $(this).parent();
      parent.children(".menu").slideToggle().toggleClass("active");
    });
  }
  // ! Menu end

  //catalog cart

  $("body").on("click", ".item__link", function () {
    $(this).parents(".section__item.item").toggleClass("active");

    console.log($(this).html().trim());

    if ($(this).html().trim() === "Развернуть") {
      $(this).html("Свернуть");
    } else {
      $(this).html("Развернуть");
    }
  });
});
