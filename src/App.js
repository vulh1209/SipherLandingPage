import React, { useState, useEffect } from "react";
import { useMediaQuery } from 'react-responsive'
import Desktop from "./Screen/Desktop";
import TabletY from "./Screen/TabletY";
import PhoneX from "./Screen/PhoneX";

export default function App() {
  const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 1025})
  const isTablet = useMediaQuery({ maxWidth: 1024, minWidth:769})
  const isMobile= useMediaQuery({ maxWidth: 768})
  const isPortrait = useMediaQuery({ orientation: 'portrait' })
  return (
    <>
    {isDesktopOrLaptop && <Desktop/>}
    {isTablet&&!isPortrait&& <Desktop/> }
    {isTablet&& isPortrait&&<TabletY/> }
    {isMobile&&!isPortrait&&<PhoneX/> }
    {isMobile&& isPortrait&&<PhoneX/> }
    </>
  );
}
