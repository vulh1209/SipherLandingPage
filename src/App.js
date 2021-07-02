import React, { useState, useEffect } from "react";
import { useMediaQuery } from 'react-responsive'
import Desktop from "./Screen/Desktop";
import TabletY from "./Screen/TabletY";
import PhoneX from "./Screen/PhoneX";

export default function App() {
  const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 1025})
  const isTablet = useMediaQuery({ maxWidth: 1024, minWidth:769})
  const isMobile= useMediaQuery({ maxWidth: 768})
  return (
    <>
    {isDesktopOrLaptop && <Desktop/>}
    {isTablet&& <TabletY/> }
    {isMobile&&<PhoneX/> }
    <h6>Made by Sipher team</h6>
    </>
  );
}

// import React, { useState, useEffect } from "react";
// import { useMediaQuery } from 'react-responsive'
// import Desktop from "./Screen/Desktop";
// import TabletY from "./Screen/TabletY";
// import PhoneX from "./Screen/PhoneX";

// export default function App() {
//   const [show, setshow] = useState()
//   const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 1025})
//   const isTablet = useMediaQuery({ maxWidth: 1024, minWidth:769})
//   const isMobile= useMediaQuery({ maxWidth: 768})
//   useEffect(() => {
//     isDesktopOrLaptop ? setshow(<Desktop/>) : isTablet ?setshow(<TabletY/>) : isMobile ? setshow(<PhoneX/>) : <></>
//   }, [])
//   return (
//     <>
//     {show}
//     <h6>Made by Sipher team</h6>
//     </>
//   );
// }

// import MediaQuery from "react-responsive";
// import React from "react";
// import Desktop from "./Screen/Desktop";
// import Tablet from "./Screen/TabletY";
// import Phone from "./Screen/PhoneX";

// export default function App() {
//   return (
//     <>
//       <MediaQuery minDeviceWidth={1025} device={{ deviceWidth: 1920 }}>
//         <Desktop />
//       </MediaQuery>
//       <MediaQuery minDeviceWidth={769} maxDeviceWidth={1024} device={{ deviceWidth: 1024 }}>
//         <Tablet />
//       </MediaQuery>
//       <MediaQuery maxDeviceWidth={768} device={{ deviceWidth: 768 }}>
//         <Phone />
//       </MediaQuery>
//     </>
//   );
// }
