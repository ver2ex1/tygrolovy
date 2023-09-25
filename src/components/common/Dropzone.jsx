import { Typography } from '@mui/material';
import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';

const DropzoneComponent = ({ topLabel, onDrop: onDropProp }) => {
  const [files, setFiles] = useState([]);

  const onDrop = acceptedFiles => {
    setFiles(prevFiles => [...prevFiles, ...acceptedFiles]);
    if (onDropProp) onDropProp(acceptedFiles); // Forwarding dropped files if onDrop prop is provided.
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: 'image/jpeg, image/png, application/pdf',
  });

  const removeFile = index => {
    setFiles(prevFiles => prevFiles.filter((file, i) => i !== index));
  };

  return (
    <div>
      {topLabel && (
        <Typography variant="body1" fontWeight={600}>
          {topLabel}
        </Typography>
      )}
      {!files.length && (
        <div {...getRootProps()} style={styles.dropzone}>
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>Відпустіть файли тут...</p>
          ) : (
            <p>Перетягніть файл сюди, або клікніть для вибору файлу</p>
          )}
        </div>
      )}
      <ul style={styles.fileList}>
        {files.map((file, index) => (
          <li key={index} style={styles.fileItem}>
            <span>{file.name}</span>
            <button
              onClick={() => removeFile(index)}
              style={styles.deleteButton}
            >
              Видалити
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  dropzone: {
    border: '2px dashed #cccccc',
    borderRadius: '4px',
    padding: '20px',
    textAlign: 'center',
    cursor: 'pointer',
    maxWidth: '500px',
  },
  fileList: {
    listStyleType: 'none',
    padding: '0',
  },
  fileItem: {
    margin: '10px 0',
    display: 'flex',
    justifyContent: 'space-between',
  },
  deleteButton: {
    background: 'red',
    color: 'white',
    border: 'none',
    padding: '5px 10px',
    cursor: 'pointer',
  },
};

export default DropzoneComponent;
