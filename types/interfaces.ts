export interface Station {
  tritonId: string;
  callLetters: string;
  applogoM?: string;
  stream: string;
  fallbackstream?: string;
  name: string;
  backgroundColor: string;
  lat?: number | null;
  lng?: number | null;
}
