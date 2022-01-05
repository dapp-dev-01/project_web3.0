//imports needed for this function
import axios from 'axios';
import fs from 'fs';
// import form-data' from 'form-data';

const pinataApiKey = "0767e7a67f44824eed1a";
const pinataSecretApiKey = "d81eed05984d363f7ff1d14c215eaed3d9934233403b5b9241f34f38bb3d526f";

export const pinJSONToIPFS = (JSONBody) => {
    const url = `https://api.pinata.cloud/pinning/pinJSONToIPFS`;
    return axios
        .post(url, JSONBody, {
            headers: {
                pinata_api_key: pinataApiKey,
                pinata_secret_api_key: pinataSecretApiKey
            }
        })
        .then(function (response) {
			console.log(response);
            return response;
        })
        .catch(function (error) {
			console.log(error);
        });
};

export const pinFileToIPFS = (file) => {
    const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;
    // const url = `https://ipfs-uploader.photovideo2046.workers.dev/`;

    //we gather a local file for this example, but any valid readStream source will work here.
    let data = new FormData();
    data.append('file',file);

    //You'll need to make sure that the metadata is in the form of a JSON object that's been convered to a string
    //metadata is optional
    const metadata = JSON.stringify({
        name: 'testname4',
        keyvalues: {
            exampleKey: 'exampleValue2'
        }
    });
    data.append('pinataMetadata', metadata);

    //pinataOptions are optional
    const pinataOptions = JSON.stringify({
        cidVersion: 0,
        customPinPolicy: {
            regions: [
                {
                    id: 'FRA1',
                    desiredReplicationCount: 1
                },
                {
                    id: 'NYC1',
                    desiredReplicationCount: 2
                }
            ]
        }
    });
    data.append('pinataOptions', pinataOptions);

    return axios.post(url, data, {
            maxBodyLength: 'Infinity', //this is needed to prevent axios from erroring out with large files
            headers: {
                'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
                pinata_api_key: pinataApiKey,
                pinata_secret_api_key: pinataSecretApiKey
            }
        })
        .then(function (response) {
            const url = "https://ipfs.io/ipfs/"+response.data.IpfsHash;
			console.log(url);
            return url;
        })
        .catch(function (error) {
			console.log(error);
        });
};

// pinJSONToIPFS(pinata_api_key,pinata_secret_api_key,{"dsa":"123132"});
// pinFileToIPFS(pinata_api_key,pinata_secret_api_key,'ntf-client-linux');
// module.exports = pinJSONToIPFS;