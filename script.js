let selectedPack = "";
let selectedNumbers = [];

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

document.getElementById("selectedPack").innerText = "🎮 Pack: " + pack;

// reset message
document.getElementById("msg").innerText = "💳 Safidio ny méthode paiement";
}

function closeOrder(){
document.getElementById("overlay").classList.add("hidden");
document.getElementById("formBox").classList.add("hidden");
}

/* 🔥 UPDATE PAYMENT SELON CHOIX */
function updatePaymentInfo(){

let method = document.getElementById("method").value;

if(method === "orange"){
selectedNumbers = [
"0329768376 - JEAN FREDERIC",
"0378138688 - Marthe"
];

document.getElementById("msg").innerText =
"📲 ORANGE MONEY:\n\n" +
"1️⃣ 0329768376 - JEAN FREDERIC\n" +
"2️⃣ 0378138688 - Marthe";
}

else if(method === "mvola"){
selectedNumbers = [
"0342981576 - Marthe"
];

document.getElementById("msg").innerText =
"📲 MVOLA:\n\n" +
"1️⃣ 0342981576 - Marthe";
}

else{
selectedNumbers = [];
document.getElementById("msg").innerText = "";
}

}

function sendOrder(){

let uid = document.getElementById("uid").value;
let method = document.getElementById("method").value;
let ref = document.getElementById("ref").value;

if(uid === "" || ref === "" || selectedNumbers.length === 0){
document.getElementById("msg").innerText = "❌ Fenoy tsara + safidio méthode";
return;
}

let number = "261344723083";

/* 🔥 ataovy string ny numéro voafidy */
let numbersText = selectedNumbers.join("\n");

let message =
"🛒 💯 UP ZONE STORE 💳\n\n" +
"🎮 Pack: " + selectedPack + "\n" +
"🆔 UID: " + uid + "\n" +
"💳 Méthode: " + method + "\n" +
"📄 Référence: " + ref + "\n\n" +
"💸 💳 PAYMENT NUMBERS:\n" +
numbersText;

window.open("https://wa.me/" + number + "?text=" + encodeURIComponent(message), "_blank");

closeOrder();
}
