let selectedPack = "";
let selectedNumbers = [];

/* HOME → choix jeu */
function selectGame(game){
    document.getElementById("home").style.display = "none";  // afeno home
    document.getElementById("backBtn").classList.remove("hidden"); // asehoy bouton retour
    showTab(game); // asehoy tarifs
}

/* RETOUR HOME */
function goHome(){
    document.getElementById("home").style.display = "flex";  // asehoy home
    document.getElementById("backBtn").classList.add("hidden"); // afeno bouton retour

    // afeno contenus
    document.getElementById("ff").classList.add("hidden");
    document.getElementById("pubg").classList.add("hidden");

    // deactivate tabs
    document.getElementById("btn-ff").classList.remove("active");
    document.getElementById("btn-pubg").classList.remove("active");
}

/* TAB classique */
function showTab(tab){
    document.getElementById("ff").classList.add("hidden");
    document.getElementById("pubg").classList.add("hidden");
    document.getElementById(tab).classList.remove("hidden");

    document.getElementById("btn-ff").classList.remove("active");
    document.getElementById("btn-pubg").classList.remove("active");
    document.getElementById("btn-" + tab).classList.add("active");
}

/* OPEN */
function openOrder(pack){
    selectedPack = pack;
    document.getElementById("overlay").classList.remove("hidden");
    document.getElementById("formBox").classList.remove("hidden");
    document.getElementById("selectedPack").innerText = "🎮 Pack: " + pack;
    document.getElementById("msg").innerText = "💳 veuillez choisir votre méthode de paiement";
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
        selectedNumbers = ["0329768376 - JEAN FREDERIC","0378138688 - Marthe"];
        document.getElementById("msg").innerText = "📲 ORANGE MONEY:\n1️⃣ 0329768376 - JEAN FREDERIC\n2️⃣ 0378138688 - Marthe";
    }
    else if(method === "mvola"){
        selectedNumbers = ["0342981576 - Marthe"];
        document.getElementById("msg").innerText = "📲 MVOLA:\n1️⃣ 0342981576 - Marthe";
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
