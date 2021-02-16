import {
  S3Client,
  ListObjectsV2Command,
  ListObjectsV2CommandOutput,
  ListObjectsV2CommandInput,
  _Object,
} from '@aws-sdk/client-s3';
import { S3DriveData } from './types';

async function getBucketContents(
  driveData: S3DriveData,
  bucketName: string
): Promise<_Object[] | undefined> {
  const client = new S3Client({
    endpoint: driveData.endpoint,
    region: driveData.region,
    credentials: {
      accessKeyId: driveData.accessKey,
      secretAccessKey: driveData.secretKey,
    },
  });
  const result: ListObjectsV2CommandOutput = await client.send(
    new ListObjectsV2Command({
      Bucket: bucketName,
    } as ListObjectsV2CommandInput)
  );
  return result.Contents;
}

export default getBucketContents;
