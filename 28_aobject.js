let motor1 = {
    model : 'honda',
    model : 'vario',
    tipe : '160',
    kondisi : '80'
}

console.log('merk :' +motor1.merk);
console.log('model :' +motor1.model);
console.log('tipe :' +motor1.tipe);

if(motor1.kondisi<75){
    console.log('maaf, kondisi motor anda tidak bisa kami terima ');
}

else if (motor1.kondisi >75){
    console.log('selamat, kondisi motor anda bisa kami terima')
}
