export type movies = {
    map(arg0: (m: any) => JSX.Element): import("react").ReactNode;
    adult: boolean;
    backdrop_path: string;
    id: number;
    title: string;
    original_language: string;
    original_title: string;
    overview: string;
    poster_path: string;
    media_type: string;
    popularity: number;
  };
  
  // export interface Pokedex {
  //   images:      Images;
  //   change_keys: string[];
  // }
  
  export interface Images {
    base_url: string;
    secure_base_url: string;
    backdrop_sizes: string[];
    logo_sizes: string[];
    poster_sizes: string[];
    profile_sizes: string[];
    still_sizes: string[];
  }
  
  export type movieprops = {
    id: number;
    profile_path: string;
    name: string;
    character: string;
  };
  