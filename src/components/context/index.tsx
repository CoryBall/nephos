// import * as React from 'react';
// import { S3DriveData } from '../../helpers/s3/types';
//
// export type AppContextPropsType = {
//   drives: S3DriveData[];
//   addDrive: (newDrive: S3DriveData) => void;
// };
//
// export type AppProviderProps = {
//   children: React.ReactNode;
// };
//
// export const AppContext = React.createContext<AppContextPropsType>({
//   drives: null,
//   addDrive: () => {},
// });
//
// export const AppProvider = (props: AppProviderProps): React.ReactNode => {
//   const { children } = props;
//   const [drives, setDrives] = React.useState<S3DriveData[] | null>([]);
//
//   function addDrive(newDrive: S3DriveData): void {
//     const allDrives = drives;
//     allDrives.push(newDrive);
//     setDrives(allDrives);
//   }
//
//   return (
//     <AppContext.Provider
//       value={{
//         drives,
//         addDrive,
//       }}
//     >
//       {children}
//     </AppContext.Provider>
//   );
// };
//
// export const useApp = (): AppContextPropsType => React.useContext(AppContext);
// export default AppProvider;
