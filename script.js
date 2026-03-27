let selectedPack = "";

/* TAB SWITCH SAFE */
function showTab(tab){

  ["ff", "pubg"].forEach(id => {
    document.getElementById(id).classList.add("hidden");
  });

  document.getElementById(tab).classList.remove("hidden");

  ["btn-ff", "btn-pubg"].forEach(id => {
    document.getElementById(id).classList.remove("active");
  });

  document.getElementById("btn-" + tab).classList.add("active");
}

/* OPEN ORDER */
function openOrder(pack){
  selectedPack = pack;

  document.getElementById("formBox").classList.remove("hidden");
  document.getElementById("selectedPack").innerText = "Pack: " + pack;

  window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
}

/* SEND ORDER */
function sendOrder(){

  let uid = document.getElementById("uid").value.trim();
  let method = document.getElementById("method").value;
  let ref = document.getElementById("ref").value.trim();
  let msgBox = document.getElementById("msg");

  /* VALIDATION PRO */
  if(!uid || !ref){
    msgBox.innerText = "❌ Fenoy UID sy Reference";
    msgBox.style.color = "red";
    return;
  }

  msgBox.innerText = "⏳ Envoi en cours...";
  msgBox.style.color = "orange";

  emailjs.send(
    "service_xxxxx",      // service ID
    "template_2bfwhjn",   // template ID
    {
      uid: uid,
      pack: selectedPack,
      method: method,
      ref: ref
    },
    "vFj-gepCl6oT0gavc"    // public key
  )
  .then(() => {
    msgBox.innerText = "✅ Commande envoyée avec succès!";
    msgBox.style.color = "lightgreen";

    // reset form
    document.getElementById("uid").value = "";
    document.getElementById("ref").value = "";

  })
  .catch(() => {
    msgBox.innerText = "❌ Erreur envoi, réessayer";
    msgBox.style.color = "red";
  });
}
