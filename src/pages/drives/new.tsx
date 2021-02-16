import * as React from 'react';
import { NewS3DriveForm, PageWrapper } from '../../components';

const NewDrivePage: React.FC = () => {
  return (
    <PageWrapper>
      <div className="m-auto w-1/2 h-1/2">
        <NewS3DriveForm />
      </div>
    </PageWrapper>
  );
};

export default NewDrivePage;
