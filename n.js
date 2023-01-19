let art = require('./musicList.json')

require("fs").readdir("music",(err, file)=>{
    let url = "https://music.yir.moe/music/"
    console.log("[")
    let count = 0
    for(let i in file){
        if(file[i] != ".DS_Store" && file[i].split(".")[1] != "webp")
        console.log(
`{
    "id": ${count++},
    "name": "${file[i].split(".")[0]}", 
    "artist": "${art[file[i].split(".")[0]]}",
    "url": "${encodeURI(url+file[i])}",
    "cover": "${encodeURI(url+file[i].split(".")[0])}.webp",
    "lrc": "${encodeURI(url+file[i].split(".")[0])}.lrc"
},`)
    }
    console.log("]")
})