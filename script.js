// script.js — données des services de Pus Toure Tech
const services = [
  {
    id: 1,
    titre: "Développement Web",
    description: "Conception de sites et d'applications web ultra-rapides, responsifs et optimisés pour le référencement.",
   icone: "./assets/code-solid.png", 
},
  {
    id: 2,
    titre: "Branding & Identité",
    description: "Création de logos, chartes graphiques et supports visuels percutants pour imposer votre marque.",
    icone: "./assets/at-icons--palette.svg",
  },
  {
    id: 3,
    titre: "Stratégie Digitale",
    description: "Conseil et accompagnement pour maximiser votre impact et captiver votre audience cible.",
  icone: "./assets/fa--handshake-o.svg",  
},
  {
    id: 4,
    titre: "Formation Tech",
    description: "Via Pus Toure Academy, développez vos compétences sur les technologies du numérique de demain.",
 icone: "./assets/famicons--school-sharp.svg", 
},
  {
    id: 5,
    titre: "Maintenance Web",
    description: "Mises à jour, sécurité et optimisation continue pour garder vos plateformes toujours performantes.",
    icone: "./assets/ant-design--setting-outlined.svg",
  },
  {
    id: 6,
    titre: "Accompagnement IT",
    description: "Suivi personnalisé pour la concrétisation et l'évolution constante de vos projets informatiques.",
  icone: "./assets/ion--trending-up-sharp.svg",  
},

  
];

// 2. L'affichage, qui utilise les données ci-dessus
document.querySelector("#services-liste").innerHTML = services
  .map((service) => `
    <div class="p-8 rounded-2xl bg-slate-800/60 border border-slate-700/60 hover:border-blue-500/50 hover:bg-slate-800 transition duration-300 group">
      <div class="flex w-fit p-3 mb-5 rounded-xl bg-blue-600/20 group-hover:bg-blue-600 group-hover:scale-110 transition duration-300">
        <img src="${service.icone}" alt="" class="w-6 h-6 invert font-bold font-size-lg">
      </div>
      <h3 class="text-xl font-bold mb-3 text-white">${service.titre}</h3>
      <p class="text-slate-400 text-sm leading-relaxed">${service.description}</p>
    </div>
  `)
  .join("");


  async function chargerClients() {

    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const clients = await response.json();
      document.querySelector("#clients-liste").innerHTML = clients.map((client) =>
        `<div class="p-8 rounded-2xl bg-slate-800/60 border border-slate-700/60 hover:border-blue-500/50 hover:bg-slate-800 transition duration-300 group">
      
      <h3 class="text-xl font-bold mb-3 text-white">${client.name}</h3>
      <p class="text-slate-400 text-sm leading-relaxed">${client.address.city}</p>
            <p class="text-slate-400 text-sm leading-relaxed">${client.company.name}</p>

    </div>`

    ).join("");

    }catch(error){
        console.error("Erreur lors du chargement des clients :", error);
        document.querySelector("#clients-liste").innerHTML = `<p class="text-center text-red">Erreur lors du chargement des clients. Veuillez réessayer plus tard.</p>`;

    }
   



  }

  // Appel de la fonction pour charger les clients
  chargerClients();