function setarr(obj) {
    let arr = []
    for (var key of Object.keys(obj)) {
        let obj1 = { id: key, name: obj[key] }
        arr.push(obj1)
    }
    console.log(arr);
}
let obj = {
    810301: '北区',
    810302: '大埔区',
    810303: '沙田区',
    810304: '西贡区',
    810305: '元朗区',
    810306: '屯门区',
    810307: '荃湾区',
    810308: '葵青区',
    810309: '离岛区',
}

setarr(obj)