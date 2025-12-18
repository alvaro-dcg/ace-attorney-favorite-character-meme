export interface CharacterInfo {
  game: string;
  category: string[];
  music?: string[];
  breakdown?: string[];
}

export interface CharacterData {
  [characterName: string]: CharacterInfo[];
}
