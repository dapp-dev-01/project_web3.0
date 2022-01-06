import React, { useEffect, useState } from "react";

export const IpfsContext = React.createContext();

export const IpfsProvider = ({ children }) => {
  const [uploadedIpfsUrl, setUploadedIpfsUrl] = useState("");
  const [uploadedJsonIpfsUrl, setUploadedJsonIpfsUrl] = useState("");
  
  const [isLoading, setIsLoading] = useState(false);

  const updateUploadedIpfsUrl = async (url) => {
    setUploadedIpfsUrl(url);
  };
  const updateUploadedJsonIpfsUrl = async (json) => {
    setUploadedJsonIpfsUrl(json);
  };

  return (
    <IpfsContext.Provider
      value={{
        uploadedIpfsUrl,
        setUploadedIpfsUrl,
        updateUploadedIpfsUrl,
        uploadedJsonIpfsUrl,
        setUploadedJsonIpfsUrl,
      }}
    >
      {children}
    </IpfsContext.Provider>
  );
};
