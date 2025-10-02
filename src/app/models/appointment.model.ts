export interface RendezVous {
  id: string;
  numeroRDV: string;
  motif: string;
  status: 'en_attente' | 'confirme' | 'annule' | 'termine';
  dateCreation: Date;
  patientId: string;
  medecinId: string;
  creneauId: string;
}

export interface Creneau {
  id: string;
  codeCreneau: string;
  heureDebut: string;
  heureFin: string;
  status: 'libre' | 'occupe' | 'indisponible';
  planningId: string;
}

export interface Planning {
  idPlanning: string;
  datePlanning: Date;
  status: 'actif' | 'inactif';
  medecinId: string;
  creneaux: Creneau[];
}