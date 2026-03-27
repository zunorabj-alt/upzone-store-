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
  document.getElementById("formBox").classList.remove("hidden");
  document.getElementById("selectedPack").innerText = pack;

  // 💳 Payment info affiché
  document.getElementById("msg").innerText =
  "📲 ALEFASO AMIN'NY IRAY AMIN'IRETO NUMÉRO IRETO NY VOLANAO:\n\n" +
  "1️⃣ 0329768376\n" +
  "   Nom: JEAN FREDERIC RABENJANIRINA\n\n" +
  "2️⃣ 0378138688\n" +
  "   Nom: Marthe\n\n" +
  "3️⃣ 0342981576\n" +
  "   Nom: Marthe";
}

function sendOrder(){

  let uid = document.getElementById("uid").value;
  let method = document.getElementById("method").value;
  let ref = document.getElementById("ref").value;

  if(uid === "" || ref === ""){
    document.getElementById("msg").innerText = "❌ Fenoy tsara ny information";
    return;
  }

  let number = "261344723083"; // WhatsApp admin

  let message =
    "🛒 S.K SHOP 💳\n\n" +
    "🎮 Pack: " + selectedPack + "\n" +
    "🆔 UID: " + uid + "\n" +
    "💳 Méthode: " + method + "\n" +
    "📄 Référence: " + ref + "\n\n" +
    "💸 PAIEMENT NUMÉRO:\n" +
    "• 0329768376 - JEAN FREDERIC RABENJANIRINA\n" +
    "• 0378138688 - Marthe\n" +
    "• 0342981576 - Marthe\n\n" +
    "⚠️ Alefaso screenshot rehefa vita.";

  let url = "https://wa.me/" + number + "?text=" + encodeURIComponent(message);

  window.open(url, "_blank");
}
