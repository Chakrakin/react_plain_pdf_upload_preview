import { useState } from 'react'
import './App.css'

function App() {
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files?.[0];
    if (!selectedFile || selectedFile.type !== "application/pdf") return;
    setFile(selectedFile);
    setPreviewUrl(URL.createObjectURL(selectedFile));
  }

  return <div>
    <input type="file" accept="application/pdf,.pdf" onChange={handleFileChange} />
    {previewUrl
      ? <iframe src={previewUrl} title="PDF preview" width="100%" height="600" />
      : <div>no file selected</div>
    }
    </div>
}

export default App
