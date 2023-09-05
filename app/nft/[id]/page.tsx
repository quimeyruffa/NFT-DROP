"use client";
import { useAddress, useDisconnect, useMetamask } from "@thirdweb-dev/react";
export default function Page({ params }: { params: { id: string } }) {
  // Auth
  const connectWithMetamask = useMetamask();
  const address = useAddress();
  const disconnect = useDisconnect();
  
  return (
    <div className="flex flex-1 h-screen flex-col lg:grid lg:grid-cols-10">
      <div className=" lg:col-span-5 bg-gradient-to-r from-[#FFDE59] to-[#FF914D] flex items-center justify-center py-2 lg:min-h-screen  ">
        <div>
          <img
            className=" lg:h-80 md:h-60 h-40 object-cover "
            src="https://res.cloudinary.com/dv8hvjcim/image/upload/v1693874582/dmb7crscyfgjysx6lg1r.svg"
            alt="arteofyou"
          />
        </div>
      </div>
      <div className="flex flex-1 flex-col p-12 lg:col-span-5">
        {/* Header */}
        <header className="flex items-center justify-between flex-col xl:flex-row">
          <h1 className="font-mono flex w-max cursor-pointer text-xl font-extralight ">
            The
            <span className="font-sans ml-2 mr-2 tracking-standar">
              ARTEOFYOU
            </span>
            <span className="flex  flex-row">NFT Market Place</span>
          </h1>
          <button
            onClick={() => {
              address ? disconnect() : connectWithMetamask();
            }}
            className=" lg:px-5 lg:py-3  xl:mt-0  mt-2 lg:text-base font-mono rounded-full bg-rose-400 px-4 py-2 text-xs text-white font-bold"
          >
            {address ? "Sign Out" : "Sign In"}
          </button>
        </header>

        <hr className="my-2 border" />
        {address && (
          <p className="font-mono text-center text-sm text-rose-400">
            You're logged in with wallet {address.substring(0, 5)}...
            {address.substring(address.length - 5)}
          </p>
        )}

        {/* Content */}
        <div className="mt-10 flex flex-1 flex-col items-center space-y-6 text-center lg:space-y-0 lg:justify-center">
          <img
            className="w-80 object-cover pb-10 lg:h-40"
            src="https://links.papareact.com/bdy"
            alt=""
          />
          <h1 className="text-3xl font-bold lg:text-5xl lg:font-extrabold font-mono">
            NFT Drop
          </h1>
          <p className="pt-2 text-xl text-green-500 font-mono ">
            13/21 NFT's Claimed
          </p>
        </div>
        {/* Mint Button */}

        <button className="h-16 bg-red-600 text-white rounded-full font-mono font-semibold">
          Mint NFT (0.01 ETH)
        </button>
      </div>
    </div>
  );
}
