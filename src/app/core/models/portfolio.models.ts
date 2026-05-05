export interface Experience {
  date: string;
  title: string;
  org: string;
  desc: string;
  tags: string[];
  accent?: boolean;
}

export interface Formation {
  date: string;
  title: string;
  org: string;
  desc: string;
  tags?: string[];
  accent?: boolean;

}

export interface Projet {
  numero: string;
  icon: string;
  title: string;
  desc: string;
  stack: string[];
  featured?: boolean;

  details?: string;
  context?: string;
  features?: string[];
  duration?: string;
  images?: ProjetImage[];
  liveUrl?: string;
  repoUrl?: string;
}

export interface ProjetImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface SkillGroup {
  icon: string;
  title: string;
  skills: string[];
  wide?: boolean;
}

export interface Document {
  icon: string;
  badge: 'bts' | 'stage' | 'perso';
  badgeLabel: string;
  title: string;
  desc: string;
  date: string;
  file?: string;
}

export interface VeilleEntry {
  date: string;    // ex: "Février 2025"
  content: string;
  source: string;
}

export interface VeilleAxe {
  id: string;
  icon: string;
  title: string;
  intro: string;
  entries: VeilleEntry[];
}

export interface VeilleItem {
  category: string;
  title: string;
  body: string;
  sources: string;
}

export interface Source {
  name: string;
  type: string;
}

export interface SoftSkill {
  label: string;
}
