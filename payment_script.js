var amount500 = false;
var amount1000 = false;
var amount1500 = false;
var amount2000 = false;
var amountcustom = false;

function payment_option() {
    $('.btn500').click(function () {
        $('.button500').css({'display': 'block'});
        $('.button1000,.button1500,.button2000,.buttoncustom').css({'display': 'none'});

    });
    $('.btn1000').click(function () {
        $('.button1000').css({'display': 'block'});
        $('.button500,.button1500,.button2000,.buttoncustom').css({'display': 'none'});
    });

    $('.btn1500').click(function () {
        $('.button1500').css({'display': 'block'});
        $('.button500,.button1000,.button2000,.buttoncustom').css({'display': 'none'});
    });
    $('.btn2000').click(function () {
        $('.button2000').css({'display': 'block'});
        $('.button500,.button1000,.button1500,.buttoncustom').css({'display': 'none'});
    });
    $('.btncustom').click(function () {
        $('.buttoncustom').css({'display': 'block'});
        $('.button500,.button1000,.button2000,.button1500').css({'display': 'none'});
    });
}



// function payment_option(){
//     if(amount500 === true){
//         var link500 = $('<img>').attr('src','https://www.payumoney.com/paybypayumoney/#/9CFCCC3C5DAF2EEFA471602C24C85CBA');
//         $('#500-button').append(link500);
//         // amount1000 = false;
//         // amount1500 = false;
//         // amount2000 = false;
//         // amountcustom = false;
//     }
//     else if(amount1000 = true){
//         var link1000 = $('<img>').attr('src','https://www.payumoney.com/paybypayumoney/#/9BCACDE9334D7B821F261981913EB303');
//         $('#1000-button').append(link1000);
//         // amount500 = false;
//         // amount1500 = false;
//         // amount2000 = false;
//         // amountcustom = false;
//     }
// }