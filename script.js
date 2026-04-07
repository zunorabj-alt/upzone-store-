let selectedPack = "";
let selectedNumbers = [];

/* TAB */
function showTab(tab){
const ff = document.getElementById("ff");
const pubg = document.getElementById("pubg");

if(!ff || !pubg) return;

ff.classList.add("hidden");
pubg.classList.add("hidden");

document.getElementById(tab).classList.remove("hidden");

document.getElementById("btn-ff").classList.remove("active");
document.getElementById("btn-pubg").classList.remove("active");

document.getElementById("btn-" + tab).classList.add("active");
}

/* OPEN */
function openOrder(pack){
selectedPack = pack;

const overlay = document.getElementById("overlay");
const formBox = document.getElementById("formBox");

if(!overlay || !formBox) return;

overlay.classList.remove("hidden");
formBox.classList.remove("hidden");

document.getElementById("selectedPack").innerText = "🎮 Pack: " + pack;

document.getElementById("msg").innerText =
"💳 veuillez choisir votre méthode de paiement";
}

/* CLOSE */
function closeOrder(){
document.getElementById("overlay").classList.add("hidden");
document.getElementById("formBox").classList.add("hidden");
}

/* PAYMENT */
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

/* SEND */
function sendOrder(){

let uid = document.getElementById("uid").value;
let method = document.getElementById("method").value;
let ref = document.getElementById("ref").value;

if(uid === "" || ref === "" || selectedNumbers.length === 0){
document.getElementById("msg").innerText = "❌ Fenoy tsara + safidio méthode";
return;
}

let number = "261344723083";

let numbersText = selectedNumbers.join("\n");

let message =
"🛒 💯 UP ZONE STORE 💳\n\n" +
"🎮 Pack: " + selectedPack + "\n" +
"🆔 UID: " + uid + "\n" +
"💳 Méthode: " + method + "\n" +
"📄 Référence: " + ref + "\n\n" +
"💸 PAYMENT NUMBERS:\n" +
numbersText;

window.open("https://wa.me/" + number + "?text=" + encodeURIComponent(message), "_blank");

closeOrder();
}
