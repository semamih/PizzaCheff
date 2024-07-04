

new WOW(
    {
        animateClass: 'animate__animated',
    }
).init();

$(".footer__rights span").text(new Date().getFullYear());

$("#choose-pizza").click(function(){
    $(".products")[0].scrollIntoView({behavior: "smooth"});
});

let productInput = $("#product-input");
$(".btn-add-to-cart").click((e) => {
    productInput.val($(e.target).parents(".product").children(".product__title").text());
    $(".order")[0].scrollIntoView({behavior: "smooth"});

});

let phoneInput = $("#phone-input");
phoneInput.inputmask({"mask": "(999) 999-9999"});

$("#create-order").click(function(){
    let addressInput = $("#address-input");
    if (!productInput.val()){
        alert("Заполните пиццу");
        return;
    }
    if(!addressInput.val()){
        alert("Заполните адрес");
        return;
    }
    if(!phoneInput.val()){
        alert("Заполните телефон");
        return;
    }
    [addressInput,phoneInput,productInput].forEach((item) => {
        item.val("");
    });
    alert("Спасибо за заказ!");

});
