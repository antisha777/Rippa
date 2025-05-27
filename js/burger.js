// $(".mobile__burger").click(function () {
//     $(this).toggleClass("mobile__burger-active");
//     $('.mobile__holder').toggleClass('mobile__holder-active');
// });


// Клик по бургеру
$(".mobile__burger").click(function () {
    $(this).toggleClass("mobile__burger-active");
    $('.mobile__holder').toggleClass('mobile__holder-active');
});

// Клик на пустую область
$(document).click(function (e) {
    const $burger = $(".mobile__burger");
    const $holder = $(".mobile__holder");

    // Проверяем, был ли клик за пределами мобильного меню и бургера
    if (
        !$burger.is(e.target) && // не на сам бургер
        !$burger.has(e.target).length && // не на дочерние элементы бургера
        !$holder.is(e.target) && // не на само меню
        !$holder.has(e.target).length // не на дочерние элементы меню
    ) {
        $burger.removeClass("mobile__burger-active");
        $holder.removeClass("mobile__holder-active");
    }
});

// Клик по ссылке в меню
$(".mobile__holder a").click(function () {
    $(".mobile__burger").removeClass("mobile__burger-active");
    $(".mobile__holder").removeClass("mobile__holder-active");
});
