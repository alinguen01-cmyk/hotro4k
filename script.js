async function sendRequest(){

let name = document.getElementById("name").value
let facebook = document.getElementById("facebook").value
let service = document.getElementById("service").value

if(name === "" || facebook === ""){
alert("Vui lòng nhập đầy đủ thông tin")
return
}

let { data, error } = await supabaseClient
.from("downloads")
.insert([
{
name: name,
facebook: facebook,
service: service
}
])

if(error){
alert("Gửi thất bại")
console.log(error)
}else{
alert("Yêu cầu đã được gửi")
}

}

function openMessenger(){

window.open(
"https://m.me/61582234003016",
"_blank"
)

}
