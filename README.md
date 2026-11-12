# Good Truck — Good Pack · Opérations Logistiques Bi-Sites

Application de gestion opérationnelle et de traçabilité logistique pour **Good Pack**, conçue pour piloter en temps réel les flux entre les ports, dépôts et clients finaux sur les sites d'**Abidjan (Vridi)** et de **San Pedro**.

---

## 🚀 Fonctionnalités Clés

- **Bi-Sites Abidjan & San Pedro** : Bascule instantanée entre les hubs d'Abidjan (Vridi / Port autonome) et de San Pedro (Dépôt / Port de San-Pedro) avec thèmes visuels dédiés.
- **Tableau de bord Opérationnel** : Indicateurs synthétiques en temps réel (Dossiers ouverts, Retard Transit, Palettes propres disponibles, Livraisons en cours, Stock Quarantaine).
- **Transit & Règle de la Franchise (21 Jours)** :
  - Suivi séquentiel des étapes : ETA Navire, Arrivée navire, Traction, Réception, Dépotage, Mail récupération, Retour conteneur.
  - Calcul séquentiel des écarts entre étapes successives.
  - Indicateur visuel circulaire des délais observés et classement automatique des dossiers clôturés en fin de liste.
- **Entrepôt & Gestion des Stocks Bi-Sites** :
  - **Stock SKCI** : dédié aux sites du client SKCI.
  - **Stock Global** : destiné à tous les autres clients (SAPH, SOGB, CHCI, ITCA, TRCI, SCC, etc.).
  - Validation des réceptions de dépotage, traçabilité des lavages, gestion de la quarantaine, soudures et transferts inter-sites.
- **Transport & Destinations Clients Répertoriées** :
  - Répertoire des destinations et adresses de livraison enregistrées.
  - Planification des expéditions avec vérification et réservation immédiate de stock propre disponible.
  - Suivi d'expédition étape par étape (Planifié, En cours, Livré, Clôturé, Incident).
- **Opérateurs Unifiés** : Référentiel des Armateurs (fret maritime et franchises) et Transporteurs (traction routière).
- **Messagerie Interne** : Canaux d'équipe, discussions rattachées aux dossiers de transit et messages directs.
- **Autonomie & Performance** : Single-Page Application autonome sans dépendance lourde, compatible mode hors ligne et mobile.

---

## 💻 Démarrage Local

Vous pouvez ouvrir directement le fichier `index.html` dans n'importe quel navigateur moderne, ou lancer un serveur local :

```bash
# Avec npx serve
npx serve -l 3000 .

# Ou avec Python
python -m http.server 3000
```

Accédez ensuite à l'application via [http://localhost:3000](http://localhost:3000).

---

## 📦 Structure du Projet

```text
├── index.html        # Point d'entrée principal de l'application
├── good-truck.html   # Source de référence autonome
├── .gitignore        # Fichiers ignorés par Git
└── README.md         # Documentation du projet
```

---
*Good Truck — Conçu pour Good Pack & les opérations logistiques en Côte d'Ivoire.*
