function openStudocu(){

let link = document.getElementById("link").value

if(link == ""){
alert("Hãy dán link Studocu")
return
}

if(!link.includes("studocu")){
alert("Đây không phải link Studocu")
return
}

window.open(link,"_blank")

}


function openCanva(){

window.open("https://www.canva.com","_blank")

}
