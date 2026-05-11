import { verifiEmail, verifieMotDePasse, afficherErreur, masquerErreur } from './fonctions.js';

// On récupére les éléments du DOM : le bouton, l'email, le mot de passe et le formulaire lui-même
const bouton = document.querySelector('button') as HTMLButtonElement;
const champEmail = document.querySelector('input[name="email"]') as HTMLInputElement;
const champPassword = document.querySelector('input[name="pass"]') as HTMLInputElement;
const formulaire = document.querySelector('.validate-form') as HTMLFormElement;

// On masque l'erreur quand on clique dans les champs
// Pour le champ email
champEmail.addEventListener('focus', function() {
    masquerErreur();
});

// Pour le champ mot de passe
champPassword.addEventListener('focus', function() {
  masquerErreur();
});

// Au clic sur le bouton Se connecter
bouton.addEventListener('click', function(event: Event) {
  event.preventDefault();
  
  // On récupére les valeurs saisies par l'utilisateur
  const emailSaisi = champEmail.value;
  const passwordSaisi = champPassword.value;
  
  // on vérifie si le champ email est vide
  if (emailSaisi === "") {
    afficherErreur("L'adresse e-mail n'a pas été saisie");
    return;
  }
  
  // on vérifie si le champ mot de passe est vide
  if (passwordSaisi === "") {
    afficherErreur("Le mot de passe n'a pas été saisi");
    return;
  } 
  
//   if (passwordSaisi === "" && emailSaisi === "") {
//     afficherErreur("L'adresse e-mail et le mot de passe n'ont pas été saisi");
//     return;
//   }
  
  // on vérifie si l'email est valide
  if (!verifiEmail(emailSaisi)) {
    afficherErreur("L'adresse e-mail est incorrecte");
    return;
  }
  
  // on vérifie si le password est valide (>= 8 caractères)
  if (!verifieMotDePasse(passwordSaisi)) {
    afficherErreur("Le mot de passe doit contenir au moins 8 caractères");
    return;
  }
  
  //Si tout est OK on change la couleur de l'arrière plan du formulaire tout en masquant le message d'erreur
  masquerErreur();
  formulaire.style.backgroundColor = "#a7ff3342";
});
