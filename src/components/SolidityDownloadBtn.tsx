import React, { useState, useEffect, useRef } from "react";
import DownloadIcon from "@mui/icons-material/Download";
import Image from "next/image";

function Download() {
  const [showPopup, setShowPopup] = useState(false);
  const popupRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (
        popupRef.current &&
        (popupRef.current as HTMLElement).contains(event.target)
      ) {
        setShowPopup(false);
      }
    }

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleButtonClick = () => {
    setShowPopup(true);
  };

  return (
    <div>
      <button
        className="font-bold text-black border p-2 rounded hover:bg-gray-200"
        onClick={handleButtonClick}
      >
        <DownloadIcon width={15} height={15} />
        Download
      </button>
      {showPopup && (
        <div
          ref={popupRef}
          className="absolute right-[5%] w-1/4 mt-2 h-full items-center"
        >
          <div className="bg-white p-2 rounded shadow">
            <div className="border-b hover:border hover:bg-gray-100 rounded p-2">
              <h2 className="text-black font-bold flex gap-2">
                <Image
                  alt="singleFile"
                  src={"/singleFile.svg"}
                  height={20}
                  width={20}
                />
                Single file
              </h2>
              <p className="text-black pl-6">
                Requires installation of npm package (@openzeppelin/contracts).{" "}
                <br />
                Simple to receive updates.
              </p>
            </div>
            <div className="border-b hover:border hover:bg-gray-100 rounded p-2">
              <h2 className="text-black font-bold flex gap-2">
                <Image
                  alt="singleFile"
                  src={"/development.svg"}
                  height={20}
                  width={20}
                />
                Development Package (Hardhat)
              </h2>
              <p className="text-black pl-6">
                Sample Hardhat project to get started with development and
                testing.
              </p>
            </div>
            <div className="hover:border hover:bg-gray-100 rounded p-2">
              <h2 className="text-black font-bold flex gap-2">
                <Image
                  alt="singleFile"
                  src={"/development.svg"}
                  height={20}
                  width={20}
                />
                Development Package (Foundry)
              </h2>
              <p className="text-black pl-6">
                Sample Foundry project to get started with development and
                testing.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Download;
