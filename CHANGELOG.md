# Changelog

Toutes les modifications notables de ce projet seront documentées dans ce fichier.

Le format est basé sur [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
et ce projet adhère au [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2025-10-02

### Ajouté
- Dashboard principal avec statistiques en temps réel
- Interface utilisateur moderne avec Bootstrap 5
- Gestion complète des patients avec tableau interactif
- Système de navigation avec sidebar responsive
- En-tête avec profil utilisateur et notifications
- Architecture Angular modulaire avec composants réutilisables
- Services pour la gestion des données
- Models TypeScript pour la structure des données
- Guard d'authentification pour la sécurité des routes
- Styles SCSS personnalisés
- Configuration Git avec .gitignore approprié

### Fonctionnalités Dashboard
- **Statistiques** : 100 Patients (52% consultés), 20 Rendez-vous (40% confirmés), 14 Rendez-vous annulés
- **Liste des patients** : Ndiaye Abdou Fatah, Gueye Aminata, Ly Abdoulaye, Diaw Khadim
- **Actions patients** : Boutons de validation et d'annulation
- **Navigation** : Dashboard, Mes Patients, Rendez-Vous

### Technique
- Angular 17 avec TypeScript
- Bootstrap 5 pour le design responsive
- FontAwesome pour les icônes
- SCSS pour les styles avancés
- Architecture component-based
- Services avec injection de dépendances
- Routing configuré
- Build optimisé pour la production

### Fichiers Créés
- Composants : dashboard, header, sidebar, calendar, stats-card
- Pages : auth (login/register), appointment-list, appointment-booking
- Services : auth, hospital, appointment
- Models : user, appointment, service
- Guards : auth guard pour la protection des routes

## [0.1.0] - 2025-10-02

### Ajouté
- Configuration initiale du projet Angular
- Structure de base des dossiers
- Configuration TypeScript et Angular CLI
- Dépendances Bootstrap et FontAwesome

---

## Types de Changements
- `Ajouté` pour les nouvelles fonctionnalités
- `Modifié` pour les changements dans les fonctionnalités existantes  
- `Déprécié` pour les fonctionnalités qui seront supprimées
- `Supprimé` pour les fonctionnalités supprimées
- `Corrigé` pour les corrections de bugs
- `Sécurité` pour les vulnérabilités corrigées