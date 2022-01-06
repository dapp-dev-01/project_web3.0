import { Navbar, Welcome, Footer, Services, Transactions } from ".";
import { useContext, React, createContext} from "react";
import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";

import { pinJSONToIPFS, pinFileToIPFS } from "../utils/ipfs";
import {IpfsContext} from "../context/IpfsContext";

const JsonIpfs = () => {
    const { uploadedJsonIpfsUrl,setUploadedJsonIpfsUrl } = useContext(IpfsContext);

    const handleFile = (e) => {
        const content = e.target.result;
        // console.log('file content',  content);
    }

    const handleJsonUpload = (json) => {
        pinJSONToIPFS(json)
        .then(function (response) {
        //Temp solution - replace ipfs url to use pinata.cloud gateway url
        response = response.replace("ipfs.io/","gateway.pinata.cloud/");
        setUploadedJsonIpfsUrl(response);
        console.log(uploadedIpfsUrl);

        });
    }
}

export default JsonIpfs;