# 🏥 Dashboard CH Abas Ndao

Une plateforme web moderne de gestion hospitalière développée avec Angular et Bootstrap pour l'hôpital CH Abas Ndao.

![Dashboard Preview](src/assets/images/dashboard-preview.png)

## 📋 Table des Matières

- [À Propos](#-à-propos)
- [Fonctionnalités](#-fonctionnalités)
- [Technologies](#-technologies)
- [Installation](#-installation)
- [Utilisation](#-utilisation)
- [Structure du Projet](#-structure-du-projet)
- [API et Services](#-api-et-services)
- [Contribution](#-contribution)
- [Licence](#-licence)

## 🎯 À Propos

Le Dashboard CH Abas Ndao est une solution web complète pour la gestion des activités hospitalières. Cette plateforme permet aux professionnels de santé de suivre efficacement les patients, gérer les rendez-vous et consulter les statistiques en temps réel.

### 🌟 Points Forts
- Interface utilisateur moderne et intuitive
- Dashboard en temps réel avec statistiques
- Gestion complète des patients
- Système de rendez-vous intégré
- Design responsive et accessible
- Architecture Angular modulaire

## ✨ Fonctionnalités

### 📊 Dashboard Principal
- **Statistiques en temps réel**
  - 100 Patients (52% consultés)
  - 20 Rendez-vous (40% confirmés)
  - 14 Rendez-vous annulés (60% non confirmés)
- **Cartes d'information interactives**
- **Graphiques et métriques visuelles**

### 👥 Gestion des Patients
- **Liste complète des patients** avec informations détaillées
- **Recherche et filtrage** avancés
- **Actions rapides** (Consulter/Annuler)
- **Profils patients** avec historique médical

### 📅 Système de Rendez-vous
- **Calendrier interactif** pour la planification
- **Gestion des créneaux** horaires
- **Notifications** et rappels automatiques
- **Statuts des rendez-vous** en temps réel

### 🔐 Sécurité et Authentification
- **Système d'authentification** sécurisé
- **Gestion des rôles** utilisateurs
- **Protection des routes** avec guards
- **Sessions sécurisées**

## 🛠 Technologies

### Frontend
- **Angular 17** - Framework principal
- **TypeScript** - Langage de programmation
- **Bootstrap 5** - Framework CSS
- **FontAwesome** - Icônes
- **SCSS** - Préprocesseur CSS
- **RxJS** - Programmation réactive

### Architecture
- **Composants modulaires** Angular
- **Services avec injection** de dépendances
- **Routing avancé** avec guards
- **Formulaires réactifs** avec validation
- **Observables** pour la gestion d'état

### Outils de Développement
- **Angular CLI** - Outils de développement
- **TypeScript Compiler** - Compilation
- **Git** - Contrôle de version
- **NPM** - Gestionnaire de paquets

## 🚀 Installation

### Prérequis
- Node.js (version 18 ou plus récente)
- npm (fourni avec Node.js)
- Angular CLI (`npm install -g @angular/cli`)
- Git

### Installation Rapide

```bash
# Cloner le repository
git clone https://github.com/Zoubeir23/Projet_Angular.git
cd ch-abas-ndao

# Installer les dépendances
npm install

# Démarrer le serveur de développement
ng serve

# Accéder à l'application
# http://localhost:4200
```

### Installation Détaillée

1. **Cloner le projet**
   ```bash
   git clone [URL_DU_REPOSITORY]
   cd ch-abas-ndao
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Configuration (optionnel)**
   ```bash
   # Copier le fichier de configuration
   cp src/environments/environment.example.ts src/environments/environment.ts
   ```

4. **Démarrer l'application**
   ```bash
   ng serve
   ```

5. **Accéder au dashboard**
   - Ouvrir votre navigateur
   - Aller à `http://localhost:4200`
   - Se connecter avec les identifiants de test

## 📖 Utilisation

### Accès au Dashboard

1. **Page d'accueil** : `http://localhost:4200`
2. **Dashboard principal** : `http://localhost:4200/dashboard`
3. **Authentification** : `http://localhost:4200/login`

### Identifiants de Test

```
Email: doctor@hospital.com
Mot de passe: password
```

### Navigation

- **Dashboard** : Vue d'ensemble avec statistiques
- **Mes Patients** : Gestion complète des patients
- **Rendez-Vous** : Planning et calendrier des rendez-vous

### Actions Disponibles

- ✅ **Consulter un patient** - Bouton vert
- ❌ **Annuler un rendez-vous** - Bouton rouge
- 📊 **Voir les statistiques** - Cartes du dashboard
- 📅 **Gérer le planning** - Calendrier interactif

## 📁 Structure du Projet

```
ch-abas-ndao/
├── src/
│   ├── app/
│   │   ├── components/          # Composants réutilisables
│   │   │   ├── header/         # En-tête de l'application
│   │   │   ├── sidebar/        # Navigation latérale
│   │   │   ├── calendar/       # Calendrier des RDV
│   │   │   └── stats-card/     # Cartes statistiques
│   │   ├── pages/              # Pages principales
│   │   │   ├── dashboard/      # Dashboard principal
│   │   │   ├── auth/          # Authentification
│   │   │   │   ├── login/     # Connexion
│   │   │   │   └── register/  # Inscription
│   │   │   ├── appointment-list/    # Liste RDV
│   │   │   └── appointment-booking/ # Prise de RDV
│   │   ├── services/           # Services Angular
│   │   │   ├── auth.service.ts      # Authentification
│   │   │   ├── hospital.service.ts  # Données hôpital
│   │   │   └── appointment.service.ts # Gestion RDV
│   │   ├── models/             # Modèles TypeScript
│   │   │   ├── user.model.ts        # Utilisateur
│   │   │   ├── appointment.model.ts # Rendez-vous
│   │   │   └── service.model.ts     # Services médicaux
│   │   ├── guards/             # Guards de sécurité
│   │   │   └── auth.guard.ts        # Protection routes
│   │   ├── app-routing.module.ts    # Configuration routes
│   │   ├── app.module.ts           # Module principal
│   │   └── app.component.ts        # Composant racine
│   ├── assets/                 # Ressources statiques
│   │   └── images/            # Images et icônes
│   ├── environments/          # Configuration environnements
│   ├── styles.scss           # Styles globaux
│   └── index.html           # Page HTML principale
├── angular.json             # Configuration Angular
├── package.json            # Dépendances npm
├── tsconfig.json          # Configuration TypeScript
└── README.md             # Documentation (ce fichier)
```

## 🔧 API et Services

### AuthService
- `login(credentials)` - Connexion utilisateur
- `logout()` - Déconnexion
- `isAuthenticated()` - Vérification authentification

### HospitalService
- `getPatients()` - Liste des patients
- `getStatistics()` - Statistiques du dashboard
- `updatePatientStatus()` - Mise à jour statut patient

### AppointmentService
- `getAppointments()` - Liste des rendez-vous
- `createAppointment()` - Créer un RDV
- `cancelAppointment()` - Annuler un RDV
- `getCalendarData()` - Données du calendrier

## 🎨 Personnalisation

### Thème et Couleurs

Modifiez `src/styles.scss` pour personnaliser :

```scss
:root {
  --primary-color: #0d6efd;      // Bleu principal
  --success-color: #198754;       // Vert succès
  --danger-color: #dc3545;        // Rouge danger
  --background-color: #f8f9fa;    // Arrière-plan
}
```

### Composants

Chaque composant peut être personnalisé dans son fichier `.scss` respectif.

## 🚦 Scripts Disponibles

```bash
# Développement
npm start                    # Démarrer le serveur dev
ng serve                     # Équivalent à npm start
ng serve --open             # Démarrer et ouvrir le navigateur

# Build
ng build                     # Build de production
ng build --configuration development  # Build de dev

# Tests
ng test                      # Tests unitaires
ng e2e                       # Tests end-to-end

# Génération
ng generate component <name>  # Nouveau composant
ng generate service <name>    # Nouveau service
ng generate module <name>     # Nouveau module

# Linting et Formatage
ng lint                      # Vérification du code
```

## 🐛 Résolution de Problèmes

### Erreurs Communes

1. **Module non trouvé**
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

2. **Port déjà utilisé**
   ```bash
   ng serve --port 4201
   ```

3. **Erreurs TypeScript**
   ```bash
   ng build --verbose
   ```

### Support

- **Issues GitHub** : [Lien vers les issues]
- **Documentation Angular** : https://angular.io/docs
- **Bootstrap** : https://getbootstrap.com/docs/5.0/

## 🤝 Contribution

Nous accueillons les contributions ! Voici comment participer :

1. **Fork** le projet
2. **Créer** une branche (`git checkout -b feature/AmazingFeature`)
3. **Commit** vos changements (`git commit -m 'Add AmazingFeature'`)
4. **Push** vers la branche (`git push origin feature/AmazingFeature`)
5. **Ouvrir** une Pull Request

### Guidelines de Contribution

- Suivre les conventions de nommage Angular
- Écrire des tests pour les nouvelles fonctionnalités
- Documenter les changements importants
- Respecter le style de code existant

## 📈 Roadmap

### Version 2.0 (À venir)
- [ ] Module de facturation
- [ ] Notifications push
- [ ] Export PDF des rapports
- [ ] API REST complète
- [ ] Application mobile

### Version 1.1 (En cours)
- [x] Dashboard principal
- [x] Gestion des patients
- [x] Système de rendez-vous
- [ ] Rapports avancés
- [ ] Intégration email

## 📊 Statistiques du Projet

- **Lignes de code** : ~18,000+
- **Composants** : 15+
- **Services** : 8+
- **Pages** : 10+
- **Temps de développement** : 2 semaines

## 👨‍⚕️ Équipe

- **Développeur Principal** : Votre Nom
- **Designer UI/UX** : Équipe Design
- **Médecin Consultant** : Dr Bara DIOP
- **Hôpital Partenaire** : CH Abas Ndao

## 📞 Contact

- **Email** : contact@ch-abas-ndao.sn
- **Téléphone** : +221 XX XXX XX XX
- **Adresse** : CH Abas Ndao, Dakar, Sénégal

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

---

**Made with ❤️ for CH Abas Ndao Hospital**

![Angular](https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Bootstrap](https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)

> **Note** : Ce README est un document vivant qui évolue avec le projet. N'hésitez pas à le mettre à jour selon vos besoins !