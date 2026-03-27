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

  // Affiche infos paiement
  document.getElementById("msg").innerText =
  "📲 Alefaso vola amin’ity numéro ity:\n" +
  "0329768376\n" +
  "Nom: JEAN FREDERIC RABENJANIRINA";
}

function sendOrder(){

  let uid = document.getElementById("uid").value;
  let method = document.getElementById("method").value;
  let ref = document.getElementById("ref").value;

  if(uid === "" || ref === ""){
    document.getElementById("msg").innerText = "❌ Fenoy tsara";
    return;
  }

  let number = "261344723083"; // numéro WhatsApp-nao (0344723083)

  let message = "🛒 UP ZONE STORE 💯\n\n"
    + "🎮 Pack: " + selectedPack + "\n"
    + "🆔 UID: " + uid + "\n"
    + "💳 Méthode: " + method + "\n"
    + "📄 Référence: " + ref + "\n\n"
    + "💸 Paiement envoyé amin’ny:\n"
    + "0329768376\n"
    + "Nom: JEAN FREDERIC RABENJANIRINA";

  let url = "https://wa.me/" + number + "?text=" + encodeURIComponent(message);

  window.open(url, "_blank");
    }
