import { useState } from 'react';
import FileUpload from './components/FileUpload';
import SecretSantaResult from './components/SecretSantaResult';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [results, setResults] = useState([]);

  return (
    <div className="app-container">
      <h1>Secret Santa Assignment</h1>
      <FileUpload setResults={setResults} />
      <SecretSantaResult results={results} />
      <ToastContainer />
    </div>
  );
};

export default App;
