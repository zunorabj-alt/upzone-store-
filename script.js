function sendOrder(){

  let uid = document.getElementById("uid").value;
  let method = document.getElementById("method").value;
  let ref = document.getElementById("ref").value;

  if(uid === "" || ref === ""){
    document.getElementById("msg").innerText = "❌ Fenoy tsara";
    return;
  }

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
  })
  .catch((error) => {
    console.log("ERROR EMAILJS:", error);
    document.getElementById("msg").innerText = "❌ Erreur envoi";
  });

        }
