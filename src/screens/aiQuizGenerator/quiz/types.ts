export interface Option {
  id: string;
  label: string;
}

export interface Question {
  text: string;
  options: Option[];
}
