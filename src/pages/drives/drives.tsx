import React from 'react';
import { ipcRenderer } from 'electron';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import { PageWrapper } from '../../components';
import { EventActions, S3DriveData } from '../../helpers/s3';

const ViewDrivesPage: React.FC = () => {
  const [drives, setDrives] = React.useState<S3DriveData[]>([]);

  // On load, get all saved drives to list
  React.useEffect(() => {
    ipcRenderer
      .invoke(EventActions.S3ListDrives)
      .then((savedDrives: S3DriveData[]) => {
        setDrives(savedDrives);
      })
      .catch((err) => console.error(err));
  }, [setDrives]);

  const removeDriveToast = Swal.mixin({
    toast: true,
    position: 'top-end',
    icon: 'success',
    title: 'Drive Removed',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer);
      toast.addEventListener('mouseleave', Swal.resumeTimer);
    },
  });

  async function removeDrive(drive: S3DriveData) {
    const remainingDrives = await ipcRenderer.invoke(
      EventActions.S3RemoveDrive,
      drive
    );
    setDrives(remainingDrives);
    await removeDriveToast.fire();
  }

  return (
    <PageWrapper>
      <div className="h-full w-full">
        <div className="h-1/6 text-center flex flex-col justify-center w-full">
          <Link to="/" className="text-white text-4xl">
            Nephos
          </Link>
        </div>
        <div className="h-5/6">
          {drives.length === 0 ? (
            <div className="w-full h-full flex flex-col justify-center text-center text-gray-400 text-5xl space-y-7">
              <span>No Drives</span>
              <Link
                to="/drives/new"
                className="btn btn-white text-center w-1/3 mx-auto"
              >
                Add Drive
              </Link>
            </div>
          ) : (
            <div className="w-1/3 px-2 py-3 rounded h-full bg-gray-200 border-r-4 text-2xl text-gray-500 overflow-y-scroll">
              {drives.map((drive: S3DriveData) => (
                <div key={drive.name} className="flex justify-between">
                  <span className="my-auto ml-3">{drive.name}</span>
                  <button
                    type="button"
                    className="rounded font-bold px-2 btn-red"
                    onClick={async () => removeDrive(drive)}
                  >
                    X
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </PageWrapper>
  );
};

export default ViewDrivesPage;
