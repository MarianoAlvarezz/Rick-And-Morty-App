
export interface Personaje {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: { name: string };
  location: { name: string };
  image: string;
  episode: string[];
}

export interface RespuestaPersonajes {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: Personaje[];
}
