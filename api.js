
// Entrainement sur l'utilisation de fetch pour récupérer des données depuis une API

async function chargerUtilisateurs() {
  // 1. On envoie la demande et on attend la réponse du serveur
  const reponse = await fetch("https://jsonplaceholder.typicode.com/users");

  // 2. On convertit cette réponse en données JavaScript utilisables
  const utilisateurs = await reponse.json();

  // 3. On affiche pour vérifier
  console.log(utilisateurs.length);
  console.log(utilisateurs[0].name);
}

chargerUtilisateurs();