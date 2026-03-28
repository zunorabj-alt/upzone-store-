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

document.getElementById("selectedPack").innerText = "🎮 Pack: " + pack;

/* 💳 PAYMENT INFO + EMOJIS */
document.getElementById("msg").innerText =
"📲 💳 PAIEMENT INFOS:\n\n" +
"1️⃣ 0329768376\n   👤 JEAN FREDERIC RABENJANIRINA\n\n" +
"2️⃣ 0378138688\n   👤 Marthe\n\n" +
"3️⃣ 0342981576\n   👤 Marthe\n\n" +
"⚠️ Alefaso amin’ny iray amin’ireo numéro ireo ny vola";
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
document.getElementById("msg").innerText = "❌ Fenoy daholo azafady";
return;
}

let number = "261344723083";

let message =
"🛒 💯 UP ZONE STORE 💳\n\n" +
"🎮 Pack: " + selectedPack + "\n" +
"🆔 UID: " + uid + "\n" +
"💳 Méthode: " + method + "\n" +
"📄 Référence: " + ref + "\n\n" +
"💸 💳 PAYMENT NUMBERS:\n" +
"1️⃣ 0329768376 - JEAN FREDERIC\n" +
"2️⃣ 0378138688 - Marthe\n" +
"3️⃣ 0342981576 - Marthe";

window.open("https://wa.me/" + number + "?text=" + encodeURIComponent(message), "_blank");

closeOrder();
}
