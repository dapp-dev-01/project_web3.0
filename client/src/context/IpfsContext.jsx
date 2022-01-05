import React, { useEffect, useState } from "react";

export const IpfsContext = React.createContext();

export const IpfsProvider = ({ children }) => {
  const [uploadedIpfsUrl, setUploadedIpfsUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const updateUploadedIpfsUrl = async (url) => {
    setUploadedIpfsUrl(url);
  };

  return (
    <IpfsContext.Provider
      value={{
        uploadedIpfsUrl,
        setUploadedIpfsUrl,
        updateUploadedIpfsUrl
      }}
    >
      {children}
    </IpfsContext.Provider>
  );
};
