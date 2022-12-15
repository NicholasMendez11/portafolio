import React,{ useRef } from "react";
import Script from "next/script";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";
function LiveChat() {
    const tawkMessengerRef = useRef();
    const handleMinimize = () => {
        tawkMessengerRef.current.minimize();
      };
  return (
    <>
    <TawkMessengerReact
        propertyId={'639b51e4b0d6371309d49de6'}
        widgetId={'1gkbbfp4n'}
        useRef={tawkMessengerRef}
      />
  </>

  );
}

export default LiveChat;
