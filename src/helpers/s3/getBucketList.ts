import {
  S3Client,
  ListBucketsCommand,
  ListBucketsCommandOutput,
  Bucket,
} from '@aws-sdk/client-s3';
import { S3DriveData, S3DriveFormFieldErrors, S3ReturnType } from './types';
import { addSavedDrive } from '../store';

async function getBucketList(
  newDrive: S3DriveData
): Promise<Bucket[] | undefined> {
  const endpointRegion = (): string => {
    const protocolSplit = newDrive.endpoint.split('://');
    return protocolSplit[protocolSplit.length - 1].split('.')[0];
  };

  const validEndpoint = (): string => {
    const protocolSplit = newDrive.endpoint.split('://');
    if (protocolSplit.length === 2) return newDrive.endpoint;
    return `https://${newDrive.endpoint}`;
  };

  const client = new S3Client({
    endpoint: validEndpoint(),
    region: endpointRegion(),
    credentials: {
      accessKeyId: newDrive.accessKey,
      secretAccessKey: newDrive.secretKey,
    },
  });
  const result: ListBucketsCommandOutput = await client.send(
    new ListBucketsCommand({})
  );

  addSavedDrive({
    ...newDrive,
    endpoint: validEndpoint(),
    region: endpointRegion(),
  });
  return result.Buckets;
}

async function getBucketListFormResult(
  newDrive: S3DriveData
): Promise<S3ReturnType<Bucket[]>> {
  try {
    const buckets = await getBucketList(newDrive);
    return {
      data: buckets,
    } as S3ReturnType<Bucket[]>;
  } catch (error) {
    const errorMessage: S3DriveFormFieldErrors[] = [];
    const errorCode = !error.Code ? error.code : error.Code;
    switch (errorCode) {
      case 'InvalidAccessKeyId':
        errorMessage.push(['accessKey', 'Invalid access key']);
        break;
      case 'SignatureDoesNotMatch':
        errorMessage.push(['secretKey', 'Invalid secret key']);
        break;
      case 'ERR_INVALID_URL':
        errorMessage.push(['endpoint', 'Invalid endpoint']);
        break;
      default:
        errorMessage.push(['endpoint', 'Could not add S3 buckets']);
        break;
    }
    return {
      error: errorMessage,
    } as S3ReturnType<Bucket[]>;
  }
}

export default getBucketListFormResult;
