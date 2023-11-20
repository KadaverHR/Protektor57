$(document).ready(function () {
  // new AirDatepicker('#date')

  const Svg = () => {
    let x = [".svg"];
    x.forEach((item) => {
      $(item).each(function () {
        let $img = $(this);
        let imgClass = $img.attr("class");
        let imgURL = $img.attr("src");
        $.get(
          imgURL,
          function (data) {
            let $svg = $(data).find("svg");
            if (typeof imgClass !== "undefined") {
              $svg = $svg.attr("class", imgClass + " replaced-svg");
            }
            $svg = $svg.removeAttr("xmlns:a");
            if (
              !$svg.attr("viewBox") &&
              $svg.attr("height") &&
              $svg.attr("width")
            ) {
              $svg.attr(
                "viewBox",
                "0 0 " + $svg.attr("height") + " " + $svg.attr("width")
              );
            }
            $img.replaceWith($svg);
          },
          ""
        );
      });
    });
  };
  Svg();

  const selectElement = (element) => document.querySelector(element);

  try {
    class Price {
      constructor() {
        this.buttonsFullPrice = selectElement("#buttons-price");
        this.buttonFullPrice = selectElement("#button-full-price");
        this.formPrice = selectElement(".cost-calculation__info");
      }

      openPriceBlock() {
        this.buttonFullPrice.addEventListener("click", () => {
          this.formPrice.classList.toggle("cost-calculation__info--visible");
          this.buttonsFullPrice.remove();
        });
      }
    }
    let x = new Price();
    x.openPriceBlock();
  } catch (e) { }

  try {
    const headerButtonCall = selectElement("#header-top__button-call");
    const orderCallArea = selectElement("#order-call-area");
    const orderCallClose = selectElement("#order-call-close");
    headerButtonCall.addEventListener("click", () => {
      orderCallArea.classList.toggle("order-call-area--open");
    });
    orderCallClose.addEventListener("click", () => {
      orderCallArea.classList.remove("order-call-area--open");
    });
  } catch (e) { }



  // try {
  //   const headerButtonCall = selectElement("#footer__button-call");
  //   const orderCallArea = selectElement("#order-call-area-footer");
  //   const orderCallClose = selectElement("#order-call-close-footer");
  //   headerButtonCall.addEventListener("click", () => {
  //     orderCallArea.classList.toggle("order-call-area--open");
  //   });
  //   orderCallClose.addEventListener("click", () => {
  //     orderCallArea.classList.remove("order-call-area--open");
  //   });
  // } catch (e) {}



  //////

  const Swipers = () => {
    const selectElement = (element) => document.querySelector(element);

    new Swiper(".swiper-brand", {
      loop: false,
      scrollbar: {
        el: ".swiper-scrollbar-brand",
        draggable: true,
        // observeParents: true,
      },

      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        0: {
          slidesPerView: 2,
          slidesPerGroup: 1,
          // spaceBetweenSlides: 10
        },
        567: {
          slidesPerView: 3,
          slidesPerGroup: 1,
          // spaceBetweenSlides: 10
        },
        767: {
          slidesPerView: 4,
          slidesPerGroup: 1,
          // spaceBetweenSlides: 10
        },
        1023: {
          slidesPerView: 5,
          slidesPerGroup: 1,
          // spaceBetweenSlides: 50
        },
        1139: {
          slidesPerView: 5,
          slidesPerGroup: 1,
          // spaceBetweenSlides: 60
        },
      },
    });

    new Swiper(".swiper-company", {
      loop: false,
      pagination: {
        el: ".swiper-company__swiper-pagination",
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          // spaceBetweenSlides: 10
        },
        567: {
          slidesPerView: 2,
          slidesPerGroup: 1,
          // spaceBetweenSlides: 10
        },
      },
    });



    new Swiper(".swiper-company-sale", {
      loop: false,
      pagination: {
        el: ".swiper-company-sale__swiper-pagination",
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          // spaceBetweenSlides: 10
        },
        567: {
          slidesPerView: 2,
          slidesPerGroup: 1,
          spaceBetweenSlides: 10
        },
      },
    });


    new Swiper(".company-main-swiper", {
      loop: false,
      pagination: {
        el: ".company-main__swiper-pagination",
      },
      allowSlideNext: true,
      autoplay: {
        delay: 3000,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          // spaceBetweenSlides: 10
        },
        567: {
          slidesPerView: 2,
          slidesPerGroup: 1,
          spaceBetweenSlides: 20
        },

        767: {
          slidesPerView: 2,
          slidesPerGroup: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 20,
        },
      },
    });

    new Swiper(".swiper-stocks", {
      loop: false,
      navigation: {
        nextEl: "swiper-stocks__swiper-button-next",
        prevEl: "swiper-stocks__swiper-button-prev",
      },
      pagination: {
        el: ".swiper-stocks__swiper-pagination",
      },
      spaceBetween: 20,
      breakpoints: {
        0: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          // spaceBetweenSlides: 10
        },
        567: {
          slidesPerView: 2,
          slidesPerGroup: 1,
          spaceBetween: 20,
        },
        767: {
          slidesPerView: 3,
          slidesPerGroup: 1,
          spaceBetween: 20,
        },
        992: {
          slidesPerView: 3,
          slidesPerGroup: 1,
          spaceBetween: 20,
        },
        1023: {
          slidesPerView: 4,
          slidesPerGroup: 1,
          spaceBetween: 20,
        },
        1139: {
          slidesPerView: 4,
          slidesPerGroup: 1,
          spaceBetween: 30,
        },
      },
    });

    new Swiper(".swiper-discounts", {
      loop: false,
      navigation: {
        nextEl: ".swiper-discounts__swiper-button-next",
        prevEl: ".swiper-discounts__swiper-button-prev",
      },
      autoHeight: true,
      pagination: {
        el: ".swiper-discounts__swiper-pagination",
      },
      spaceBetween: 20,
      breakpoints: {
        0: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          // spaceBetweenSlides: 10
        },
        567: {
          slidesPerView: 2,
          slidesPerGroup: 1,
          spaceBetween: 20,
        },
        767: {
          slidesPerView: 2,
          slidesPerGroup: 1,
          spaceBetween: 20,
        },
        992: {
          slidesPerView: 3,
          slidesPerGroup: 1,
          spaceBetween: 20,
        },
        1023: {
          slidesPerView: 4,
          slidesPerGroup: 1,
          spaceBetween: 20,
        },
        1139: {
          slidesPerView: 4,
          slidesPerGroup: 1,
          spaceBetween: 30,
        },
      },
    });

    new Swiper(".swiper-service", {
      loop: false,
      pagination: {
        el: ".swiper-service__swiper-pagination",
      },
      spaceBetween: 20,
      breakpoints: {
        0: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          // spaceBetweenSlides: 10
        },
        450: {
          slidesPerView: 2,
          slidesPerGroup: 1,
          spaceBetween: 10,
        },
        567: {
          slidesPerView: 2,
          slidesPerGroup: 1,
          spaceBetween: 20,
        },
        767: {
          slidesPerView: 3,
          slidesPerGroup: 1,
          spaceBetween: 20,
        },
        1023: {
          slidesPerView: 4,
          slidesPerGroup: 1,
          spaceBetween: 25,
        },
        1139: {
          slidesPerView: 4,
          slidesPerGroup: 1,
          spaceBetween: 30,
        },
      },
    });

    new Swiper(".swiper-catalog", {
      loop: false,
      pagination: {
        el: ".swiper-catalog__swiper-pagination",
      },
      // spaceBetween: 20,
      breakpoints: {
        0: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          // spaceBetweenSlides: 10
        },
        450: {
          slidesPerView: 2,
          slidesPerGroup: 1,
          spaceBetween: 10,
        },
        567: {
          slidesPerView: 2,
          slidesPerGroup: 1,
          spaceBetween: 20,
        },
        767: {
          slidesPerView: 3,
          slidesPerGroup: 1,
          spaceBetween: 20,
        },
        1023: {
          slidesPerView: 4,
          slidesPerGroup: 1,
          spaceBetween: 20,
        },
        1139: {
          slidesPerView: 5,
          slidesPerGroup: 1,
          spaceBetween: 20,
        },
      },
    });

    new Swiper(".swiper-filter-banner", {
      loop: true,
      autoplay: {
        delay: 3000,
      },
      pagination: {
        el: ".swiper-filter__swiper-pagination",
      },
      spaceBetween: 0,
      breakpoints: {
        0: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          // spaceBetweenSlides: 10
        },
        450: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 0,
        },
        567: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 0,
        },
        767: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 0,
        },
        1023: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 0,
        },
        1139: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 0,
        },
      },
    });

    // Баннер

    new Swiper(".swiper-banner", {
      loop: true,
      allowSlideNext: true,
      autoplay: {
        delay: 3000,
      },
      // scrollbar: {
      //   el: ".swiper-scrollbar",
      //   draggable: true,
      // },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          // spaceBetweenSlides: 10
        },
        567: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          // spaceBetweenSlides: 10
        },
        767: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetweenSlides: 30,
        },
        1023: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          // spaceBetweenSlides: 50
        },
        1139: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          // spaceBetweenSlides: 60
        },
      },
    });


    new Swiper(".swiper-card", {
      loop: true,
      allowSlideNext: true,
      autoplay: {
        delay: 3000,
      },
      pagination: {
        el: ".card-tyre__swiper-pagination",
        type: "bullets",
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetweenSlides: 20
        },
        567: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetweenSlides: 20
        },
        767: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetweenSlides: 20
        },
        1023: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetweenSlides: 20
        },
        1139: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetweenSlides: 20
        },
      },
    });

    // class initialSwiperCatalog{
    //   constructor(element) {
    //     this.element = element
    //   }
    //   render(){
    //     if (window.innerWidth > 1140 && this.element) {
    //       this.element.classList.add("disabled");
    //     }
    //     window.addEventListener('resize', () => {
    //       if (window.innerWidth > 1140) {
    //         this.element.classList.add("disabled");
    //       } else {
    //         this.element.classList.remove("disabled");
    //       }
    //     })
    //   }
    // }

    // let swiperCatalogElement = selectElement('.swiper-catalog > .swiper-wrapper')

    // let swiperCatalog = new initialSwiperCatalog(swiperCatalogElement)

    // swiperCatalog.render()

    // try {

    // } catch (error) {

    // }
    class initialSwiperCompany {
      constructor(element) {
        this.element = element;
      }
      render() {
        if (window.innerWidth > 767 && this.element) {
          this.element.classList.add("disabled");
        }
        window.addEventListener("resize", () => {
          if (window.innerWidth > 767) {
            this.element.classList.add("disabled");
          } else {
            this.element.classList.remove("disabled");
          }
        });
      }
    }

    let swiperCompanyElement = selectElement(
      ".swiper-company > .swiper-wrapper"
    );
    let swiperCompanySaleElement = selectElement(
      ".swiper-company-sale > .swiper-wrapper"
    );

    let swiperCompany = new initialSwiperCompany(swiperCompanyElement);
    let swiperCompanySale = new initialSwiperCompany(swiperCompanySaleElement);

    swiperCompany.render();
    swiperCompanySale.render()
  };

  Swipers();

  class Select {
    constructor(el, placeholder) {
      this.el = el;
      this.placeholder = placeholder;
    }
    init() {
      $(this.el)
        .select2({
          theme: "select-filter__theme",
          dropdownCssClass: "select-filter__drop",
          selectionCssClass: "select-filter__selection",
          allowClear: false,
          closeOnSelect: true,
          dropdownAutoWidth: false,
          placeholder: this.placeholder,
          language: {
            noResults: function (params) {
              return "Нет результатов";
            },
          },
        })
        .on("select2:open", function (e) {
          $(".select2-search__field").attr("placeholder", "Поиск");
        });
    }
  }
  let select = new Select();

  let popoverTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="popover"]')
  );

  popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl);
  });

  let dropdowns = document.querySelectorAll(".drop");
  let dropdown_menu = document.querySelectorAll(".dropdown-menu");
  let body = document.querySelector("body");

  //скрипт для библиотеки bootstrap, показывает выпадаюший список вне, блока overflow
  dropdowns.forEach((dropdown) => {
    dropdown.addEventListener("click", () => {
      let dropdownId = dropdown.id;
      dropdown_menu.forEach((menu) => {
        if (dropdownId === menu.getAttribute("aria-labelledby")) {
          let { left, top, height, width } = dropdown.getBoundingClientRect();
          menu.style = `
              transform: translate(${left}px, ${top + window.scrollY + height
            }px);
              top: 0;
              right: auto;
              bottom: 0;
              left: auto;
              width: ${width}px
            `;
          body.appendChild(menu);
        }
      });
    });
  });

  const selectType = new Select($(".select-type"), "Ширина");
  const selectHeight = new Select($(".select-height"), "Высота");
  const selectCount = new Select($(".select-count"), "Количество колес");
  const selectDiameter = new Select($(".select-diameter"), "Диаметр");
  const selectBrand = new Select($(".select-brand"), "Марка авто");
  const selectModel = new Select($(".select-model"), "Модель авто");
  const selectYear = new Select($(".select-year"), "Год авто");
  const selectModification = new Select(
    $(".select-modification"),
    "Модификация авто"
  );

  selectType.init();
  selectHeight.init();
  selectCount.init();
  selectDiameter.init();
  selectBrand.init();
  selectModel.init();
  selectYear.init();
  selectModification.init();



  $('.search__select').select2({
    theme: "select-filter__theme",
    dropdownCssClass: "select-search__drop select-filter__drop",
    selectionCssClass: "select-search__selection select-filter__selection",
    allowClear: false,
    closeOnSelect: true,
    dropdownAutoWidth: false,
    placeholder: this.placeholder,
    language: {
      noResults: function (params) {
        return "Нет результатов";
      },
    },
    dropdownParent: $(document.querySelector(".search-area")),

  });




  let search = document.getElementById("search").getElementsByClassName("selection")[0]

  console.log(search)

  search.addEventListener('click', () => {
    let searchBox = document.getElementById("search").getElementsByClassName("select-filter__drop")[0]
    searchBox.setAttribute("style", "width: max-content")
  })




  // Фильтр мобильная версия

  let filter = $(".filter-mobile");
  let filterNextStep = $(".filter-mobile-step-next");

  $(".js-button-filter-mobile").click(function () {
    filter.addClass("filter-mobile--active");
    $("html").css("overflow-y", "hidden");
  });

  $(".js-filter-mobile-block__button-all").click(function () {
    filterNextStep.toggleClass("filter-mobile-step-next--active");
  });

  $(".js-filter-mobile-header-back").click(function () {
    filterNextStep.removeClass("filter-mobile-step-next--active");
  });

  $(".js-filter-mobile-close").click(function () {
    filter.removeClass("filter-mobile--active");
    filterNextStep.removeClass("filter-mobile-step-next--active");
    $("html").css("overflow-y", "auto");
  });

  $(".js-catalog-select").click(function () {
    $(".catalog-select__options").toggleClass(
      "catalog-select__options--active"
    );
  });

  // Info()

  ////////////

  const scrollNavigation = (selector) => {
    const slider = document.querySelector(selector);
    let isDown = false;
    let startX;
    let scrollLeft;
    slider.addEventListener("mousedown", (e) => {
      console.log("mousedown");
      e.preventDefault();
      e.stopPropagation();
      isDown = true;
      slider.classList.add("active");
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });
    slider.addEventListener("mouseleave", (e) => {
      e.preventDefault();
      e.stopPropagation();
      console.log("mouseleave");
      isDown = false;
      slider.classList.remove("active");
    });
    slider.addEventListener("mouseup", (e) => {
      e.preventDefault();
      e.stopPropagation();
      console.log("mouseup");
      isDown = false;
      slider.classList.remove("active");
    });
    slider.addEventListener("mousemove", (e) => {
      e.preventDefault();
      e.stopPropagation();
      slider.classList.add("active");
      console.log("mousemove");
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 3; //scroll-fast
      slider.scrollLeft = scrollLeft - walk;
    });
  };

  scrollNavigation(".header-body__navigation");

  let catalogButton = document.querySelector("#hamburger-menu");
  let catalogDrop = document.querySelector("#catalog-drop");
  let openMenu = false;

  catalogButton.addEventListener("click", (e) => {
    changeCatalogDrop(e);
  });

  const changeCatalogDrop = (e) => {
    e.stopPropagation();
    changeCatalogDropType(openMenu);
  };
  const changeCatalogDropType = (open_menu) => {
    if (open_menu) {
      catalogButton.classList.remove("catalog-button--active");
      catalogDrop.classList.remove("d-block");
      openMenu = false;
    } else {
      catalogButton.classList.add("catalog-button--active");
      catalogDrop.classList.add("d-block");
      openMenu = true;
    }
  };
  let tireSelectionItems = document.querySelectorAll(".tire-selection-item");

  const changeTireSelectionBlock = (e) => {
    tireSelectionItems.forEach((item) => {
      let tireSelectionItemHeader = item.querySelector(
        ".tire-selection-item__header"
      );
      tireSelectionItemHeader.addEventListener("click", () => {
        tireSelectionItemHeader.parentNode.classList.toggle(
          "tire-selection-item--active"
        );
      });
    });
  };

  changeTireSelectionBlock();

  $(window).click(function (e) {
    if ($(e.target).closest("[data-drop]").length === 0) {
      changeCatalogDropType(true);
    }
  });
  try {
    tippy("#tire-service", {
      trigger: "click",
      content:
        '<span class="info-stock__tooltip"> Узнать </span><a class="info-stock__tooltip info-stock__tooltip--link" href="#">ориетировочную стоимость</a>',
      allowHTML: true,
      interactive: true,
      placement: "bottom-end",
    });
  } catch (error) { }

  try {
    let btnGoSubmitForm = document.querySelector(".shopping-cart-making__btn");
    let shoppingCartContacts = document.querySelector(
      ".shopping-cart-contacts"
    );
    let shoppingCartDelivery = document.querySelector(
      ".shopping-cart-delivery"
    );
    let open = JSON.parse(localStorage.getItem("open"));
    const handlerChangeCardBlock = () => {
      shoppingCartContacts.classList.add("shopping-cart-contacts--open");
      shoppingCartDelivery.classList.add("shopping-cart-delivery--open");
      btnGoSubmitForm.classList.add("d-none");
    };

    if (open) {
      handlerChangeCardBlock();
    }
    btnGoSubmitForm.addEventListener("click", () => {
      handlerChangeCardBlock();
      localStorage.setItem("open", JSON.stringify("true"));
    });
  } catch (error) { }

  // $("#cheaper").click(function () {
  //   $.fancybox.open({
  //     src: "#hidden",
  //     type: "inline",
  //   });
  // });

  // МОЯ ЧУШЬ

  document.addEventListener("DOMContentLoaded", hiddenCloseclick());
  document
    .getElementById("click-to-hide")
    .addEventListener("click", hiddenCloseclick);
  function hiddenCloseclick() {
    let x = document.getElementById("hidden-element");
    if (x.style.display == "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  ///

  var acc = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }

  ////

  $(".range-price").slider({
    animate: "slow",
    range: true,
    values: [10, 1000],
    slide: function (event, ui) {
      $(".result-range-price > .from > input").val(ui.values[0]);
      $(".result-range-price > .to > input").val(ui.values[1]);
    },
  });
  $(".result-range-price > .from > input").val(
    $(".range-price").slider("values", 0)
  );
  $(".result-range-price > .to  > input").val(
    $(".range-price").slider("values", 1)
  );

  console.log("hty");




  /////табы в карточке
  var jsTriggers = document.querySelectorAll('.js-tab-trigger'),
    jsContents = document.querySelectorAll('.js-tab-content');

  jsTriggers.forEach(function (trigger) {
    trigger.addEventListener('click', function () {
      var id = this.getAttribute('data-tab'),
        content = document.querySelector('.js-tab-content[data-tab="' + id + '"]'),
        activeTrigger = document.querySelector('.js-tab-trigger.active'),
        activeContent = document.querySelector('.js-tab-content.active');

      activeTrigger.classList.remove('active');
      trigger.classList.add('active');

      activeContent.classList.remove('active');
      content.classList.add('active');
    });
  });





  ///////////// Multiselect field

  let multiselect_block = document.querySelectorAll(".multiselect_block");
  multiselect_block.forEach(parent => {
    let label = parent.querySelector(".field_multiselect");
    let select = parent.querySelector(".field_select");
    let text = label.innerHTML;
    select.addEventListener("change", function (element) {
      let selectedOptions = this.selectedOptions;
      label.innerHTML = "";
      for (let option of selectedOptions) {
        let button = document.createElement("button");
        button.type = "button";
        button.className = "btn_multiselect";
        button.textContent = option.value;
        button.onclick = _ => {
          option.selected = false;
          button.remove();
          if (!select.selectedOptions.length) label.innerHTML = text
        };
        label.append(button);
      }
    })
  })


  ///////////


  // document.querySelector('.main-banner-cart-mobile__link--search').addEventListener('click', () => {
  //   document.querySelector('.main-banner-navigation__search').classList.toggle('active');
  //   document.querySelector('.main-banner-cart-mobile__link--search').classList.toggle('d-n')
  // })

  const btnMenu = document.querySelector(".main-banner-cart-mobile__link--search");
  const menu = document.querySelector(".main-banner-navigation__search");
  const toggleMenu = function () {
    menu.classList.toggle("active");
    btnMenu.classList.toggle("d-n");
  }

  btnMenu.addEventListener("click", function (e) {
    e.stopPropagation();
    toggleMenu();
  });

  document.addEventListener("click", function (e) {
    const target = e.target;
    const its_menu = target == menu || menu.contains(target);
    const its_btnMenu = target == btnMenu;
    const menu_is_active = menu.classList.contains("active");

    if (!its_menu && !its_btnMenu && menu_is_active) {
      toggleMenu();
    }
  });

})
