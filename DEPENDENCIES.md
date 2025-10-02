# Dépendances du Projet - Dashboard CH Abas Ndao

## 📦 Dépendances de Production

### Framework Principal
- **@angular/core**: ^17.0.0 - Framework Angular principal
- **@angular/common**: ^17.0.0 - Modules Angular communs
- **@angular/platform-browser**: ^17.0.0 - Support navigateur
- **@angular/platform-browser-dynamic**: ^17.0.0 - Compilation dynamique
- **@angular/router**: ^17.0.0 - Système de routing
- **@angular/forms**: ^17.0.0 - Gestion des formulaires

### UI et Styles
- **bootstrap**: ^5.3.0 - Framework CSS responsive
- **@fortawesome/fontawesome-free**: ^6.4.0 - Icônes FontAwesome

### Utilitaires
- **rxjs**: ~7.8.0 - Programmation réactive
- **tslib**: ^2.3.0 - Helpers TypeScript
- **zone.js**: ~0.14.0 - Détection de changements Angular

## 🛠 Dépendances de Développement

### Angular CLI et Build
- **@angular/cli**: ^17.0.0 - Interface en ligne de commande
- **@angular-devkit/build-angular**: ^17.0.0 - Build système
- **@angular/compiler-cli**: ^17.0.0 - Compilateur Angular

### TypeScript
- **typescript**: ~5.2.0 - Langage TypeScript
- **@types/node**: ^18.0.0 - Types Node.js

### Tests
- **jasmine-core**: ~4.6.0 - Framework de tests
- **karma**: ~6.4.0 - Test runner
- **karma-chrome-launcher**: ~3.2.0 - Launcher Chrome pour tests
- **karma-coverage**: ~2.2.0 - Couverture de tests
- **karma-jasmine**: ~5.1.0 - Adapter Jasmine pour Karma
- **karma-jasmine-html-reporter**: ~2.1.0 - Reporter HTML

## 🔧 Configuration des Versions

### Node.js
- **Version recommandée**: 18.x ou 20.x LTS
- **Version minimale**: 16.x

### npm
- **Version recommandée**: 9.x ou plus récente
- **Version minimale**: 8.x

### Navigateurs Supportés
- **Chrome**: Version 90+
- **Firefox**: Version 88+
- **Safari**: Version 14+
- **Edge**: Version 90+

## 🚀 Scripts Package.json

```json
{
  "scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build",
    "watch": "ng build --watch --configuration development",
    "test": "ng test",
    "serve:ssr": "node dist/ch-abas-ndao/server/server.mjs"
  }
}
```

## 📊 Tailles des Bundles (Production)

- **vendor.js**: ~6.25 MB (bibliothèques tierces)
- **main.js**: ~214 KB (code application)
- **styles.css**: ~432 KB (Bootstrap + styles personnalisés)
- **polyfills.js**: ~240 KB (compatibilité navigateurs)
- **scripts.js**: ~80 KB (scripts Bootstrap)
- **runtime.js**: ~6.66 KB (runtime Angular)

**Total Initial**: ~7.23 MB

## 🔄 Mises à Jour Recommandées

### Fréquence
- **Angular**: Suivre les versions LTS (tous les 6 mois)
- **Bootstrap**: Versions mineures (mensuellement)
- **Dépendances sécurité**: Immédiatement

### Commandes de Mise à Jour
```bash
# Vérifier les versions obsolètes
npm outdated

# Mettre à jour Angular
ng update @angular/cli @angular/core

# Mettre à jour les autres dépendances
npm update

# Audit de sécurité
npm audit
npm audit fix
```

## 🛡 Sécurité

### Audit Régulier
```bash
npm audit                    # Vérifier les vulnérabilités
npm audit fix               # Corriger automatiquement
npm audit fix --force       # Corrections forcées (attention)
```

### Dépendances Sensibles
- Éviter les dépendances avec vulnérabilités critiques
- Maintenir les versions à jour
- Utiliser `npm ci` en production

## 📈 Performance

### Bundle Analyzer
```bash
npm install -g webpack-bundle-analyzer
ng build --stats-json
npx webpack-bundle-analyzer dist/ch-abas-ndao/stats.json
```

### Optimisations
- **Tree Shaking**: Activé par défaut
- **Lazy Loading**: Implémenté pour les modules
- **OnPush**: Utilisé dans les composants critiques
- **TrackBy**: Implémenté dans les listes

## 🔗 Liens Utiles

- [Angular Update Guide](https://update.angular.io/)
- [Bootstrap Documentation](https://getbootstrap.com/docs/5.3/)
- [FontAwesome Icons](https://fontawesome.com/icons)
- [RxJS Documentation](https://rxjs.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

*Dernière mise à jour: 2 octobre 2025*