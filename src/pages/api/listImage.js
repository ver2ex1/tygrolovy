// utils/getImagePaths.js
import fs from 'fs';
import path from 'path';

export function getImageReportsPaths() {
  const reportsDirectory = path.join(
    process.cwd(),
    'public',
    'assets',
    'reports',
  );
  let files;
  try {
    files = fs.readdirSync(reportsDirectory);
  } catch (err) {
    console.error('Failed to read the directory:', err);
    return [];
  }
  const imageFiles = files.filter(file =>
    ['.jpg', '.jpeg', '.png', '.PNG', '.JPG'].includes(path.extname(file)),
  );
  return imageFiles.map(file => `/assets/reports/${file}`);
}
