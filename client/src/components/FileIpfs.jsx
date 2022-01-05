import { Navbar, Welcome, Footer, Services, Transactions } from ".";
import { useContext, React, createContext} from "react";
import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";

import { pinJSONToIPFS, pinFileToIPFS } from "../utils/ipfs";
import {IpfsContext} from "../context/IpfsContext";

const FileIpfs = () => {
  const { uploadedIpfsUrl,setUploadedIpfsUrl } = useContext(IpfsContext);

  const handleFile = (e) => {
    const content = e.target.result;
    console.log('file content',  content);
  }
  
  const handleChangeFile = (file) => {
    console.log('handleChangeFilet',  file);
    let fileData = new FileReader();
    fileData.onloadend = handleFile;
    fileData.readAsText(file);
  
    pinFileToIPFS(file)
    .then(function (response) {
      console.log("XA");
      console.log(response);

      //Temp solution - replace ipfs url to use pinata.cloud gateway url
      response = response.replace("ipfs.io/","gateway.pinata.cloud/");
      setUploadedIpfsUrl(response);
      console.log(">>>>>>>>>XA");
      console.log(uploadedIpfsUrl);
      console.log(">>>>>>>>>XB");
      console.log("XA");
    });
  }
  return (
    <div>
      <input type="file" accept=".jpg,.png" onChange={e => 
          handleChangeFile(e.target.files[0])} /> 
    </div>
  );
}

export default FileIpfs;