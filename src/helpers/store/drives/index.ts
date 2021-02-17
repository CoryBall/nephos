import Store from 'electron-store';
// eslint-disable-next-line import/no-cycle
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

function removeSavedDrive(drive: S3DriveData): S3DriveData[] {
  const savedDrives = getSavedDrives();
  const remainingDrives = savedDrives.filter(
    (d: S3DriveData) => d.accessKey !== drive.accessKey
  );
  driveStore.set('savedDrives', remainingDrives);
  return remainingDrives;
}

export { addSavedDrive, getSavedDrives, removeSavedDrive };
