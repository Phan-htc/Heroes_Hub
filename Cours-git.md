# Cours Git 

voici un petit cours rapide sur l'utilisation de git lors d'un projet de groupe

# Creation de branche

git branch Ton prenom

# Changement de branche

git checkout nom/id de la branche

# Capture de la modification 

pour la sauvegarde de tout les fichiers
git add -A 

sinon
git add nom_du_fichier

# Envoie sur le repo distant

git commit -m "Description des modifs"

# Fusion des branches

Attention: la fusion d'une branche se fait uniquement lorsque le développement des fonctionnalité sont terminé, testé et corrigé.

- git status (s'assurer que HEAD est sur la branche recevant le merge)
- git fetch ( pull les derniers commits distants)
- git merge nom_de_la_branche

Attention: Si plusieurs personnes modifie la meme fonctionnalité et effectue un merge, il y aura un conflit et il faudra choisir les morceaux de code qui doivent figurer sur la version final.