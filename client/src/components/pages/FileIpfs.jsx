import { Navbar, Welcome, Footer, Services, Transactions } from "..";
import React from "react";
import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";
import { pinJSONToIPFS, pinFileToIPFS } from "../../utils/ipfs";

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
    
    console.log("XB");
  });
}


const FileIpfs = () => (
  <div className="min-h-screen">
    <div className="gradient-bg-welcome">
        <Navbar />
    </div>
    <div className="flex w-full justify-center items-center gradient-bg-services h-screen">
        <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
          <div className="flex-1 flex flex-col justify-start items-start">
            <h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient ">
              Services that we
              <br />
              continue to improve
            </h1>
            <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base">
            The best choice for buying and selling your crypto assets, with the
              various super friendly services we offer
              The best choice for buying and selling your crypto assets, with the
              various super friendly services we offer
              The best choice for buying and selling your crypto assets, with the    
            </p>
            <div class="flex justify-center">
              <div class="mb-3 w-96">
                  <div>
                      <input type="file" accept=".jpg,.png" onChange={e => 
                          handleChangeFile(e.target.files[0])} /> 
                  </div>
              </div>
            </div>
          </div>
        </div>
    </div>
    <Footer />
  </div>
);

export default FileIpfs;