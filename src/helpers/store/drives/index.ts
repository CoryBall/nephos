import Store from 'electron-store';
import { S3DriveData } from '../../s3';

const driveStore = new Store();

function getSavedDrives(): S3DriveData[] {
  return driveStore.get('savedDrives', []) as S3DriveData[];
}

function addSavedDrive(drive: S3DriveData): void {
  const savedDrives: S3DriveData[] = driveStore.get(
    'savedDrives',
    []
  ) as S3DriveData[];
  savedDrives.push(drive);
  driveStore.set('savedDrives', savedDrives);
  console.log('saved drives: ', savedDrives);
}

export { addSavedDrive, getSavedDrives };
