import { SiEthereum } from "react-icons/si";
import { AiFillAlipayCircle } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { GiCrystalCluster } from "react-icons/gi";

const companyCommonStyles =
  "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const Welcome = () => {
  const connectWallet = () => {
    console.log("Connect wallet");
  };
  return (
    <div className="flex w-full justify-center item-center">
      <div className="flex md:flex-row flex-col items-start justify-between md:p-20 py-24 px-4">
        <div className="flex flex-1 justify-start flex-col md:mr-10">
          <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">
            Send crypto <br /> across the world
          </h1>
          <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base ">
            Explore the Crypto World .Buy and Sell cryptocurrencies easily on
            Jaxwallet.
          </p>
          <button
            type="button"
            onClick={connectWallet}
            className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#1233a9]"
          >
            <p className="text-white text-base font-semibold">Connect Wallet</p>
            {/* <GiCrystalCluster className="ml-5" /> */}
          </button>
          <div className="grid sm:grid-col-3 grid-cols-3 w-full mt-10">
            <div className={`rounded-tl-2xl ${companyCommonStyles}`}>
              Reliability
            </div>
            <div className={companyCommonStyles}>Security</div>
            <div className={`sm:rounded-tr-2xl ${companyCommonStyles}`}>
              Ethereum
            </div>
            <div className={`sm:rounded-bl-2xl ${companyCommonStyles}`}>
              Web 3.0
            </div>
            <div className={companyCommonStyles}>Low Fees</div>
            <div className={`rounded-br-2xl ${companyCommonStyles}`}>
              Blockchain
            </div>
          </div>
          <div className="flex flex-col flex-1 items-center justify-start w-ful md:mt-0 mt-10 ">
            <div className="p3 justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card white-glassmorpism">
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Welcome;
