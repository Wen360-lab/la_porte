//On exporte la fonction qui vérifie la validité d'une adresse email
export function verifiEmail(valide: string): boolean {
  const point = '.';
  const arobase = '@';
  
  // On met les positions exactes du point et de l'arobase dans deux constantes
  const posArobase = valide.indexOf(arobase);
  const posPoint = valide.indexOf(point);
  
  // Vérifications
  if (!valide.includes(" ") && valide.includes(point) && valide.includes(arobase)) {
    
    // Le point doit être après l'arobase
    if (posPoint > posArobase) {
      
      // on s'assure qu'il y a du texte avant le arobase
      if (posArobase > 0) {
        
        // on s'assure qu'il y a du texte après le point
        if (posPoint < valide.length - 1) {
          return true;
        }
      }
    }
  }
  
  return false;
}

// On exporte la fonction qui vérifie la validité d'un mot de passe
export function verifieMotDePasse(motDePasse: string): boolean {
  if (motDePasse.length >= 8) {
    return true;
  } else {
    return false;
  }
}

// On exporte la fonction qui affiche un message d'erreur
export function afficherErreur(texte: string): void {
    const messageDiv = document.querySelector('.message') as HTMLDivElement;
    messageDiv.textContent = texte;
    messageDiv.classList.add('.message');
}

// On exporte la fonction qui masque cette fois-ci le message d'erreur
export function masquerErreur(): void {
  const messageDiv = document.querySelector('.message') as HTMLDivElement;
  messageDiv.classList.remove('.message');
}