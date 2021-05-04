export type S3DriveData = {
  name: string;
  accessKey: string;
  secretKey: string;
  endpoint: string;
  region?: string;
};

export enum EventActions {
  S3ListDrives = 'list-drives',
  S3AddDrive = 'add-drive',
  S3RemoveDrive = 'remove-drive',
  S3GetBucketList = 'get-bucket-list',
  S3GetBucketContent = 'get-bucket-content',
}

export type S3ReturnType<T> = {
  data?: T;
  error?: S3DriveFormFieldErrors[];
};

export type S3DriveFormFieldErrors = [
  'accessKey' | 'secretKey' | 'endpoint',
  string
];
