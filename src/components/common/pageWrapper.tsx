import * as React from 'react';

export type PageWrapperProps = {
  children: React.ReactElement;
};

const PageWrapper = (props: PageWrapperProps): JSX.Element => {
  const { children } = props;
  return (
    <div className="background">
      <div className="h-screen w-screen flex flex-col">{children}</div>
    </div>
  );
};

export default PageWrapper;
