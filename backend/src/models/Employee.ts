export interface Employee {
  name: string;
  email: string;
}

export interface Assignment extends Employee {
  secretChildName: string;
  secretChildEmail: string;
}
