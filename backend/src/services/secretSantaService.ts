import { Employee, Assignment } from "../models/Employee";

export const assignSecretSanta = (
  employees: Employee[],
  previousAssignments: Employee[]
): Assignment[] => {
  let available = employees.map((emp) => ({ ...emp }));
  const assignments: Assignment[] = [];

  for (let emp of employees) {
    let potential = available.filter((e) => e.email !== emp.email);

    if (previousAssignments.length) {
      potential = potential.filter(
        (e) =>
          !previousAssignments.some(
            (prev) => prev.email === emp.email && prev.name === e.name
          )
      );
    }

    if (!potential.length) return [];

    const index = Math.floor(Math.random() * potential.length);
    const secretChild = potential[index];
    available = available.filter((e) => e.email !== secretChild.email);

    assignments.push({
      name: emp.name,
      email: emp.email,
      secretChildName: secretChild.name,
      secretChildEmail: secretChild.email,
    });
  }

  return assignments;
};
