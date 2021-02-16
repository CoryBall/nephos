export type S3DriveData = {
  name: string;
  accessKey: string;
  secretKey: string;
  endpoint: string;
  region?: string;
};

export enum EventActions {
  S3GetBucketListCommand = 'get-bucket-list',
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
