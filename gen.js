let art = {
    "千里邀月": "泠鸢yousa & hanser & 三无Marblue & 茶理理",
    "ふたりのきもちのほんとのひみつ": "やすなとソーニャ",
    "キルミーのベイベー!": "やすなとソーニャ",
    "一命矣": "银临",
    "九万字": "黄诗扶",
    "你是": "银临",
    "夜曲": "周杰伦",
    "大喜": "泠鸢yousa",
    "山上雪": "黄诗扶",
    "无与伦比的美丽": "苏打绿",
    "眉南边": "银临",
    "笑纳": "花僮",
    "花月成双": "三无Marblue",
    "赐我": "一只白羊",
    "起风了": "吴青峰",
    "野子": "苏运莹",
    "青白": "银临 & 黄诗扶",
    "长安幻世绘": "银临",
    "秘宝":"litterzy & 洛天依",
    "告辞":"泠鸢yousa",
    "月光":"黄诗扶",
    "寻找":"龙牙酱,洛天依",
    "城南雨歇处":"萤失Hinano & shen576299 & 洛天依",
    "闻妖":"银临",
    "平安奇妙物语":"千月兔 & 泠鸢yousa & KBShinya"
}

require("fs").readdir("music",(err, file)=>{
    let url = "https://music.yir.moe/music/"
    console.log("[")
    let count = 0
    for(let i in file){
        if(file[i] != ".DS_Store" && file[i].split(".")[1] != "webp")
        console.log(
`{
    "name": "${file[i].split(".")[0]}", 
    "artist": "${art[file[i].split(".")[0]]}",
    "url": "${encodeURI(url+file[i])}",
},`)
    }
    console.log("]")
})