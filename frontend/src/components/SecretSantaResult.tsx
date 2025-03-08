import React from 'react';

interface SecretSantaResultProps {
  results: {
    name: string;
    email: string;
    secretChildName: string;
    secretChildEmail: string;
  }[];
}

const SecretSantaResult: React.FC<SecretSantaResultProps> = ({ results }) => {
  return (
    <div>
      {results.length > 0 && (
        <div>
          <h2>Secret Santa Assignments</h2>
          <table border="1">
            <thead>
              <tr>
                <th>Employee Name</th>
                <th>Employee Email</th>
                <th>Secret Child Name</th>
                <th>Secret Child Email</th>
              </tr>
            </thead>
            <tbody>
              {results.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.secretChildName}</td>
                  <td>{item.secretChildEmail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default SecretSantaResult;
