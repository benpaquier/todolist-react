- App.js
   - Gere le state des tasks
       - Ajouter une tache
       - Supprimer une tache
       - Modifier
   - Gere le state filter

- Form.js
   - Gere l'affichage du form
   - Gere un state description de tache
   - La remontée de données
       - A la soumission du form,
         on passe la valeur de l'input vers App.js qui va créer une nouvelle tache

- List.js
   - Gere l'affichage des taches
   - Remontée de données
       - Suppression d'une tache
       - Modification d'une tache
   - Gere son state a lui
       - Condition pour afficher la tache ou le formulaire de modif

- Filters.js
   - Gere l'affichage de 4 boutons pour filtrer
   - Remontée de données
        - Appliquer le filtre