let selectedPack = "";

/* =========================
   TAB SWITCH
========================= */
function showTab(tab){
  document.getElementById("ff").classList.add("hidden");
  document.getElementById("pubg").classList.add("hidden");
  document.getElementById("formBox").classList.add("hidden");

  document.getElementById(tab).classList.remove("hidden");

  document.getElementById("btn-ff").classList.remove("active");
  document.getElementById("btn-pubg").classList.remove("active");
  document.getElementById("btn-" + tab).classList.add("active");
}

/* =========================
   OPEN ORDER FORM
========================= */
function openOrder(pack){
  selectedPack = pack;

  document.getElementById("formBox").classList.remove("hidden");
  document.getElementById("selectedPack").innerText = pack;

  // scroll smooth (pro touch)
  document.getElementById("formBox").scrollIntoView({
    behavior: "smooth"
  });
}

/* =========================
   SEND ORDER (EMAILJS FIXED)
========================= */
function sendOrder(){

  let uid = document.getElementById("uid").value;
  let method = document.getElementById("method").value;
  let ref = document.getElementById("ref").value;

  if(uid === "" || ref === ""){
    document.getElementById("msg").innerText = "❌ Fenoy UID sy Reference";
    return;
  }

  document.getElementById("msg").innerText = "⏳ Envoi en cours...";

  emailjs.send(
    "service_rqbn4tj",
    "template_2bfwhjn",
    {
      uid: uid,
      pack: selectedPack,
      method: method,
      ref: ref
    }
  )
  .then(() => {
    document.getElementById("msg").innerText = "✅ Commande envoyée!";
    
    // clear form
    document.getElementById("uid").value = "";
    document.getElementById("ref").value = "";
  })
  .catch((error) => {
    console.log("EMAILJS ERROR:", error);
    document.getElementById("msg").innerText = "❌ Erreur envoi";
  });

}
