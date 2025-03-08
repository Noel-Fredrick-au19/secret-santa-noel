import { useState } from "react";
import { uploadCSV } from "../api/secretSantaApi";
import { toast } from "react-toastify";

interface FileUploadProps {
  setResults: (data: unknown) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ setResults }) => {
  const [files, setFiles] = useState<FileList | null>(null);

  const handleSubmit = async () => {
    if (!files || files.length < 2) {
      return toast.error(
        "Please select both Employee and Previous Year CSV files"
      );
    }

    const employeeFile = files[0];
    const previousFile = files[1];

    if (!employeeFile || !previousFile) {
      return toast.error("Missing one or more files");
    }

    // Log selected files for debugging
    console.log("Selected Files:", employeeFile.name, previousFile.name);

    const formData = new FormData();
    formData.append("employees", employeeFile);
    formData.append("previous", previousFile);

    // Debugging FormData content
    console.log("FormData Entries:", [...formData.entries()]);

    try {
      const res = await uploadCSV(formData);
      console.log("Server Response:", res);
      setResults(res?.data || {}); // Prevent errors if res.data is undefined
      toast.success("Assignment successful!");
    } catch (error) {
      console.error("Upload Error:", error);
      toast.error("Assignment failed");
    }
  };

  return (
    <div>
      <input
        type="file"
        multiple
        onChange={(e) => setFiles(e.target.files)}
        accept=".csv" // Restrict file type to CSV
      />
      <button onClick={handleSubmit}>Upload</button>
    </div>
  );
};

export default FileUpload;
