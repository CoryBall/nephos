import React from 'react';
import { useForm } from 'react-hook-form';
import { Bucket } from '@aws-sdk/client-s3';
import { ipcRenderer } from 'electron';
import Swal from 'sweetalert2';
import { useHistory } from 'react-router-dom';
import FormField from './common/formField';
import {
  EventActions,
  S3DriveData,
  S3DriveFormFieldErrors,
  S3ReturnType,
} from '../../helpers/s3';

const NewS3DriveForm: React.FC = () => {
  const history = useHistory();
  const addDriveToast = Swal.mixin({
    toast: true,
    position: 'top-end',
    icon: 'success',
    title: 'Drive Added!',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer);
      toast.addEventListener('mouseleave', Swal.resumeTimer);
    },
  });

  const { register, handleSubmit, errors, setError } = useForm<S3DriveData>({
    defaultValues: {
      name: '',
      accessKey: '',
      secretKey: '',
      endpoint: '',
    },
  });

  const submitForm = handleSubmit(async (formData: S3DriveData) => {
    const driveResult: S3ReturnType<Bucket[]> = await ipcRenderer.invoke(
      EventActions.S3AddDrive,
      {
        name: formData.name,
        accessKey: formData.accessKey,
        secretKey: formData.secretKey,
        endpoint: formData.endpoint,
      } as S3DriveData
    );
    if (driveResult.error) {
      driveResult.error.forEach((fieldError: S3DriveFormFieldErrors) => {
        setError(fieldError[0], {
          message: fieldError[1],
        });
      });
    } else {
      addDriveToast.fire();
      history.push('/');
    }
  });

  return (
    <form onSubmit={submitForm} className="bg-gray-700 px-4 pt-3 pb-5 rounded">
      <FormField
        label="Name"
        type="text"
        name="name"
        register={register({ required: true })}
        error={errors.name}
      />
      <FormField
        label="Access Key"
        type="text"
        name="accessKey"
        register={register({ required: true })}
        error={errors.accessKey}
      />
      <FormField
        label="Secret Key"
        type="text"
        name="secretKey"
        register={register({ required: true })}
        error={errors.secretKey}
      />
      <FormField
        label="Server Endpoint"
        type="text"
        name="endpoint"
        register={register({ required: true })}
        error={errors.endpoint}
      />
      <div className="">
        <button className="btn btn-block btn-gray mt-5" type="submit">
          Add Drive
        </button>
      </div>
    </form>
  );
};

export default NewS3DriveForm;
