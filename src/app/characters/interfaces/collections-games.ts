
export interface Game {
  name: string;
  src: string;
  selected: boolean;
}

export interface Collection {
  name: string;
  src: string;
  selected: boolean;
  games: Game[];
}