# Guide de Contribution - Dashboard CH Abas Ndao

Merci de votre intérêt pour contribuer au projet Dashboard CH Abas Ndao ! Ce guide vous aidera à contribuer efficacement.

## 🚀 Démarrage Rapide

1. **Fork** le repository
2. **Clone** votre fork
3. **Installez** les dépendances : `npm install`
4. **Créez** une branche : `git checkout -b feature/ma-fonctionnalite`
5. **Développez** votre fonctionnalité
6. **Testez** : `npm run test`
7. **Committez** : `git commit -m "feat: ma nouvelle fonctionnalité"`
8. **Push** : `git push origin feature/ma-fonctionnalite`
9. **Créez** une Pull Request

## 📝 Conventions de Code

### Nommage
- **Composants** : PascalCase (`DashboardComponent`)
- **Services** : PascalCase avec suffixe Service (`HospitalService`)
- **Variables** : camelCase (`patientList`)
- **Constantes** : UPPER_SNAKE_CASE (`API_BASE_URL`)
- **Fichiers** : kebab-case (`dashboard.component.ts`)

### Structure des Commits
Utilisez la convention [Conventional Commits](https://www.conventionalcommits.org/) :

```
type(scope): description

feat: nouvelle fonctionnalité
fix: correction de bug
docs: documentation
style: formatage, point-virgules manquants, etc.
refactor: refactorisation du code
test: ajout de tests
chore: tâches de maintenance
```

### Exemples de Commits
```bash
feat(dashboard): ajout des statistiques en temps réel
fix(patients): correction du tri par nom
docs(readme): mise à jour des instructions d'installation
style(dashboard): amélioration du CSS des cartes
refactor(services): optimisation des appels API
test(components): ajout des tests unitaires
chore(deps): mise à jour d'Angular vers v17
```

## 🧪 Tests

### Tests Unitaires
```bash
npm run test           # Tous les tests
npm run test -- --watch  # Mode watch
ng test -- --code-coverage  # Avec couverture
```

### Tests E2E
```bash
npm run e2e           # Tests end-to-end
```

### Couverture Minimale
- **Composants** : 80%
- **Services** : 90%
- **Utils** : 95%

## 🎨 Standards de Code

### TypeScript
- Utilisez `strict: true` dans tsconfig.json
- Typez toutes les variables et fonctions
- Évitez `any`, préférez `unknown`
- Utilisez les interfaces pour les objets complexes

### Angular
- Utilisez OnPush change detection quand possible
- Implémentez OnDestroy pour les subscriptions
- Préférez les Observables aux Promises
- Utilisez les pipes purs pour les transformations

### CSS/SCSS
- Utilisez BEM pour le nommage des classes
- Variables CSS pour les couleurs et espacements
- Mobile-first pour le responsive
- Évitez les styles globaux

## 📂 Structure des Composants

```typescript
@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExampleComponent implements OnInit, OnDestroy {
  // Propriétés publiques en premier
  public data$: Observable<Data[]>;
  
  // Propriétés privées
  private destroy$ = new Subject<void>();
  
  constructor(
    private service: ExampleService,
    private cdr: ChangeDetectorRef
  ) {}
  
  ngOnInit(): void {
    this.initializeData();
  }
  
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
  
  // Méthodes publiques
  public onAction(): void {
    // Implementation
  }
  
  // Méthodes privées
  private initializeData(): void {
    // Implementation
  }
}
```

## 🔧 Configuration des Outils

### ESLint Configuration
Le projet utilise Angular ESLint avec des règles strictes :
- `@typescript-eslint/no-explicit-any`: error
- `@typescript-eslint/prefer-readonly`: error
- `@angular-eslint/component-class-suffix`: error

### Prettier Configuration
```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 80,
  "tabWidth": 2
}
```

## 🐛 Rapport de Bugs

Utilisez le template d'issue pour reporter un bug :

1. **Environnement** (OS, navigateur, version Angular)
2. **Étapes pour reproduire**
3. **Comportement attendu**
4. **Comportement actuel**
5. **Captures d'écran** (si applicable)
6. **Code minimal** pour reproduire

## ✨ Demande de Fonctionnalité

Pour proposer une nouvelle fonctionnalité :

1. **Description** claire de la fonctionnalité
2. **Cas d'usage** détaillés
3. **Mockups** ou wireframes (si applicable)
4. **Impact** sur l'architecture existante
5. **Alternatives** envisagées

## 📋 Checklist Pull Request

Avant de soumettre votre PR, vérifiez :

- [ ] Code testé localement
- [ ] Tests unitaires ajoutés/mis à jour
- [ ] Documentation mise à jour
- [ ] Pas de console.log oubliés
- [ ] Code formaté avec Prettier
- [ ] ESLint passe sans erreurs
- [ ] Build de production réussit
- [ ] Description PR claire et détaillée

## 🚦 Processus de Review

1. **Review automatique** : Tests, linting, build
2. **Review technique** : Architecture, performance
3. **Review fonctionnelle** : UX, logique métier
4. **Validation finale** : Tests manuels

## 📞 Questions et Support

- **Issues GitHub** : Pour les bugs et fonctionnalités
- **Discussions** : Pour les questions générales
- **Discord** : [Lien vers le serveur] (chat en temps réel)
- **Email** : dev@ch-abas-ndao.sn

## 🏆 Contributeurs

Voir [CONTRIBUTORS.md](CONTRIBUTORS.md) pour la liste des contributeurs.

---

**Merci pour votre contribution au projet Dashboard CH Abas Ndao ! 🏥**