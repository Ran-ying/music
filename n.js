require('fs').readdir('music',(err, file)=>{
    for(let i in file){
        console.log(
`{ 
    name: '${file[i].split('.')[0]}', 
    artist: '',
    url: './music/${file[i]}',
    cover: './music/${file[i].split('.')[0]}.webp',
    lrc: './music/${file[i].split('.')[0]}.lrc',
},`)
    }
})