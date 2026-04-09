let selectedPack = "";
let selectedNumbers = [];

/* ========================= */
/* SELECT GAME (HOME) */
/* ========================= */

function selectGame(game){

const home = document.getElementById("home");
if(home) home.style.display = "none";

showTab(game);
}

/* ========================= */
/* TAB */
/* ========================= */

function showTab(tab){

const ff = document.getElementById("ff");
const pubg = document.getElementById("pubg");

if(!ff || !pubg) return;

ff.classList.add("hidden");
pubg.classList.add("hidden");

const activeTab = document.getElementById(tab);
if(activeTab) activeTab.classList.remove("hidden");

/* bouton active */
const btnFF = document.getElementById("btn-ff");
const btnPUBG = document.getElementById("btn-pubg");

if(btnFF) btnFF.classList.remove("active");
if(btnPUBG) btnPUBG.classList.remove("active");

const activeBtn = document.getElementById("btn-" + tab);
if(activeBtn) activeBtn.classList.add("active");
}

/* ========================= */
/* OPEN ORDER */
/* ========================= */

function openOrder(pack){

selectedPack = pack;

const overlay = document.getElementById("overlay");
const formBox = document.getElementById("formBox");

if(!overlay || !formBox) return;

overlay.classList.remove("hidden");
formBox.classList.remove("hidden");

const packText = document.getElementById("selectedPack");
if(packText) packText.innerText = "🎮 Pack: " + pack;

const msg = document.getElementById("msg");
if(msg) msg.innerText = "💳 veuillez choisir votre méthode de paiement";
}

/* ========================= */
/* CLOSE */
/* ========================= */

function closeOrder(){

const overlay = document.getElementById("overlay");
const formBox = document.getElementById("formBox");

if(overlay) overlay.classList.add("hidden");
if(formBox) formBox.classList.add("hidden");
}

/* ========================= */
/* PAYMENT */
/* ========================= */

function updatePaymentInfo(){

let method = document.getElementById("method").value;
let msg = document.getElementById("msg");

if(method === "orange"){

selectedNumbers = [
"0329768376 - JEAN FREDERIC",
"0378138688 - Marthe"
];

msg.innerText =
"📲 ORANGE MONEY:\n\n" +
"1️⃣ 0329768376 - JEAN FREDERIC\n" +
"2️⃣ 0378138688 - Marthe";
}

else if(method === "mvola"){

selectedNumbers = [
"0342981576 - Marthe"
];

msg.innerText =
"📲 MVOLA:\n\n" +
"1️⃣ 0342981576 - Marthe";
}

else{
selectedNumbers = [];
msg.innerText = "";
}

}

/* ========================= */
/* SEND ORDER */
/* ========================= */

function sendOrder(){

let uid = document.getElementById("uid").value.trim();
let method = document.getElementById("method").value;
let ref = document.getElementById("ref").value.trim();
let msg = document.getElementById("msg");

if(uid === "" || ref === "" || selectedNumbers.length === 0){
msg.innerText = "❌ Fenoy tsara + safidio méthode";
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

/* ========================= */
/* BONUS: CLICK OUTSIDE CLOSE */
/* ========================= */

window.onclick = function(e){
const overlay = document.getElementById("overlay");
if(e.target === overlay){
closeOrder();
}
}
