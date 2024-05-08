// import React from 'react';
// import './style.css';

// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Modal from '@mui/material/Modal';
// import Fade from '@mui/material/Fade';
// import Backdrop from '@mui/material/Backdrop';

// import { BottomNavigation, BottomNavigationAction } from '@mui/material';
// import { styled } from '@mui/system';

// import { AiFillHome, AiOutlineHome } from 'react-icons/ai';
// import { RiEditBoxFill, RiEditBoxLine } from 'react-icons/ri';

// // Styled BottomNavigationAction
// const TabBarButton = styled(BottomNavigationAction)({
//   color: 'royalblue',
//   '&.Mui-selected': {
//     color: 'crimson',
//   },
// });

// const BottomNav = () => {
//   const [value, setValue] = React.useState(0);
//   const home_icon = value === 0;
//   const documentos_icon = value === 1;

//   return (
//     <BottomNavigation
//       showLabels
//       value={value}
//       onChange={(event, newValue) => {
//         setValue(newValue);
//       }}
//     >
//       <TabBarButton
//         id="Home"
//         label="Home"
//         icon={
//           home_icon ? <AiFillHome size="30" /> : <AiOutlineHome size="30" />
//         }
//         // onClick={(value) => {
//         //   iconHandler(value.currentTarget.id);
//         // }}
//       />

//       <TabBarButton
//         id="Documentos"
//         label="Documentos"
//         icon={
//           documentos_icon ? (
//             <RiEditBoxFill size="30" />
//           ) : (
//             <RiEditBoxLine size="30" />
//           )
//         }
//         // onClick={(value) => iconHandler(value.currentTarget.id)}
//       />
//     </BottomNavigation>
//   );
// };

// export default function App() {
//   return (
//     <main>
//       <BottomNav />
//     </main>
//   );
// }
