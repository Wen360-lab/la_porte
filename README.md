🧪 Saison 3 : La porte
🎯 Objectif

Cette saison a pour objectif de vous permettre de :

Interagir avec le DOM
Comprendre et utiliser les événements en JavaScript
Manipuler des formulaires sans bibliothèque externe
⚙️ Instructions générales
Vous n’utiliserez aucune bibliothèque JavaScript externe
La syntaxe attendue est ECMAScript 2015 (ES6)
📁 Mise en place du projet
Faites un fork du dépôt suivant :
👉 https://github.com/dasilva218/la_porte
Clonez votre fork en local :
git clone <votre-lien-du-fork>
📂 Organisation du projet
fonctions.js → toutes vos fonctions
main.js → code principal
style.css → (optionnel) pour ajouter du style
❌ Les autres fichiers ne doivent pas être modifiés (sauf consigne explicite)
🧩 Travail à faire

Un formulaire est fourni mais n’est pas fonctionnel.

👉 Votre mission :

Contrôler les informations saisies par l’utilisateur
Afficher des messages d’erreur si nécessaire
Empêcher l’envoi du formulaire si les données sont incorrectes
📝 Comportement attendu
🔹 Au clic sur "Se connecter"

Vérifier que :

L’adresse e-mail est renseignée
Le mot de passe est renseigné
L’adresse e-mail est valide
Le mot de passe contient au moins 8 caractères
🔹 Validation du formulaire
❌ Ne pas soumettre si les données sont incorrectes
✅ Soumettre uniquement si tout est valide
🔹 En cas de succès

👉 Si toutes les informations sont correctes :

Changer la couleur de fond du formulaire :
#a7ff3342
🔹 Gestion des erreurs
📌 Affichage du message

Utiliser l’élément déjà présent dans le HTML :

<div class="message"></div>

👉 Pour afficher un message :

<div class="message message-visible">Adresse incorrecte</div>

➡️ Ajouter la classe : message-visible

📌 Masquer le message
Supprimer la classe message-visible
🔹 Interaction utilisateur
Au clic dans un champ → masquer le message d’erreur
Lors d’une nouvelle tentative → réévaluer les champs
💡 Conseils
Utilisez :
addEventListener
querySelector
classList.add() / classList.remove()
Structurez votre code (fonctions claires et réutilisables)
Testez chaque cas (vide, incorrect, valide)
⚠️ Contraintes
❌ Pas de bibliothèque externe
✅ Code clair et organisé
✅ Respect des fichiers imposés
🚀 Bonus (optionnel)
Ajouter plusieurs types de messages d’erreur
Améliorer le style du message
Ajouter une validation en temps réel
🧠 Rappel

"Avec ton code, tu construiras ta maison !" 🏠💻