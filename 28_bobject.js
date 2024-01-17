let totalBelanja=150000
let uangBayar=120000




let kembalian= uangBayar-totalBelanja;
console.log("Totalbelanja:"+totalBelanja)
console.log("uangBayar:"+uangBayar)
console.log("kembalian:"+kembalian)

 
switch(true){
    case kembalian<0:
        console.log("maaf,uang anda tidak cukup");
        break;


        case kembalian===0:
            console.log("terimakasih uang anda pas");
            break;

            default:
                console.log("kembalian sebesar " +kembalian+ " sudah kami berikan");
                break;


}
