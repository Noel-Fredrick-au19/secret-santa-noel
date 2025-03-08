import { Request, Response } from 'express';
import { readCSV } from '../utils/fileHandler';
import { assignSecretSanta } from '../services/secretSantaService';

export const processSecretSanta = async (req: Request, res: Response): Promise<void> => {
  try {
    console.log('Received files:', req.files); // Debugging: Check if files are received

    if (!req.files || !('employees' in req.files) || !('previous' in req.files)) {
      res.status(400).json({ message: 'Missing required files' });
      return;
    }

    const employeesFile = (req.files as { [fieldname: string]: Express.Multer.File[] })['employees'][0];
    const previousFile = (req.files as { [fieldname: string]: Express.Multer.File[] })['previous'][0];

    console.log('Employee File:', employeesFile);
    console.log('Previous File:', previousFile);

    const employees = await readCSV(employeesFile.path);
    const previousAssignments = await readCSV(previousFile.path);

    const newAssignments = assignSecretSanta(employees, previousAssignments);
    
    if (!newAssignments.length) {
      res.status(400).json({ message: 'Assignment failed, try again' });
      return;
    }

    res.json(newAssignments);
  } catch (error) {
    console.error('Error processing Secret Santa:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
