import fs from 'fs';
import csv from 'csv-parser';
import path from 'path';
import xlsx from 'xlsx';
import { Employee } from '../models/Employee';

export const readCSV = (filePath: string): Promise<Employee[]> => {
  return new Promise((resolve, reject) => {
    const absolutePath = path.resolve(filePath);

    if (!fs.existsSync(absolutePath)) {
      return reject(new Error(`File not found: ${absolutePath}`));
    }

    if (filePath.endsWith('.xlsx')) {
      const workbook = xlsx.readFile(absolutePath);
      const sheetName = workbook.SheetNames[0]; 
      const csvData = xlsx.utils.sheet_to_csv(workbook.Sheets[sheetName]);

      filePath = absolutePath.replace('.xlsx', '.csv');
      fs.writeFileSync(filePath, csvData); 
    }

    const employees: Employee[] = [];

    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (row) => employees.push({ name: row.Employee_Name, email: row.Employee_EmailID }))
      .on('end', () => resolve(employees))
      .on('error', (error) => reject(error));
  });
};
