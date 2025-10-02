export interface User {
  idUtilisateur: string;
  nom: string;
  prenom: string;
  dateNaiss: Date;
  adresse: string;
  telephone: string;
  email: string;
  matricule: string;
  motDePasse: string;
  photo?: string;
  sexe: 'M' | 'F';
  statut: 'actif' | 'inactif';
}

export interface Patient extends User {
  codePatient: string;
  consulterPlanningMedecin(): void;
  listerSesRendezVous(): void;
  annulerRendezVous(): void;
  recevoirNotification(): void;
}

export interface Medecin extends User {
  experience: number;
  languesParles: string[];
  consulterSesRendezVous(): void;
}

export interface Secretaire extends User {
  gestionPlanningMedecin(): void;
  gestionRendezVous(): void;
  validerRendezVous(): void;
  consulterRendezVous(): void;
  refuserRendezVous(): void;
}

export interface Administrateur extends User {
  gestionUtilisateur(): void;
  gestionServices(): void;
}