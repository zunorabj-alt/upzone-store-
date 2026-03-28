let selectedPack = "";

function showTab(tab){
document.getElementById("ff").classList.add("hidden");
document.getElementById("pubg").classList.add("hidden");

document.getElementById(tab).classList.remove("hidden");

document.getElementById("btn-ff").classList.remove("active");
document.getElementById("btn-pubg").classList.remove("active");
document.getElementById("btn-" + tab).classList.add("active");
}

function openOrder(pack){
selectedPack = pack;

document.getElementById("overlay").classList.remove("hidden");
document.getElementById("formBox").classList.remove("hidden");

document.getElementById("selectedPack").innerText = "Pack: " + pack;

document.getElementById("msg").innerText =
"📲 PAIEMENT:\n\n" +
"0329768376 - JEAN FREDERIC\n" +
"0378138688 - Marthe\n" +
"0342981576 - Marthe";
}

function closeOrder(){
document.getElementById("overlay").classList.add("hidden");
document.getElementById("formBox").classList.add("hidden");
}

function sendOrder(){

let uid = document.getElementById("uid").value;
let method = document.getElementById("method").value;
let ref = document.getElementById("ref").value;

if(uid === "" || ref === ""){
document.getElementById("msg").innerText = "❌ Fenoy ny rehetra";
return;
}

let number = "261344723083";

let message =
"🛒 UP ZONE STORE 💳\n\n" +
"Pack: " + selectedPack + "\n" +
"UID: " + uid + "\n" +
"Méthode: " + method + "\n" +
"Réf: " + ref + "\n\n" +
"Paiement:\n" +
"0329768376\n" +
"0378138688\n" +
"0342981576";

window.open("https://wa.me/" + number + "?text=" + encodeURIComponent(message), "_blank");

closeOrder();
}
