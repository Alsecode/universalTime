import { useState, useEffect } from 'react';
import './App.css';
import FileUpload from './components/FileUpload/FileUpload';
import TimeOutput from './components/TimeOutput/TimeOutput';

const App = () => {
  // Загруженный файл (или null, если удалён)
  const [file, setFile] = useState(null);
  // Время загрузки файла
  const [dataValue, setDataValue] = useState(null);

  // Срабатывает каждый раз, когда file меняется
  useEffect(() => {
    // Если пользователь загрузил/обновил картинку:
    if (file) {
      setDataValue(new Date());
    } else {
      // Если файл удалён, сбрасываем время
      setDataValue(null);
    }
  }, [file]);

  return (
    <div className="container">
      <FileUpload className="fileUpload" onFileChange={setFile} />
      {file && <TimeOutput ms={dataValue} />}
    </div>
  );
}

export default App;
