"use client"

import Tool from "./Tool";

const ERC20 = () => {
  return (
    <div className="p-4 overflow-visible">
      <div>
        <h1 className="text-[#818998] font-semibold text-xs">SETTINGS</h1>
        <div className="flex flex-row">
          <div className="flex flex-col w-[60%] p-[0.5rem]">
            <label
              htmlFor="name"
              className="text-[0.875rem] text-black"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="My Token"
              className="border border-1 border-[#333333] rounded-[6px] p-1"
            />
          </div>
          <div className="flex flex-col w-[40%] p-[0.5rem]">
            <label htmlFor="symbol" className="text-[#333333] text-[0.875rem]">
              Symbol
            </label>
            <input
              id="symbol"
              type="text"
              placeholder="MTK"
              className="border border-1 border-[#333333] rounded-[6px] p-1  text-black"
            />
          </div>
        </div>
        <div className="flex flex-col p-[0.5rem]">
          <label htmlFor="uri" className="text-black text-[0.875rem]">
            Premint
          </label>
          <input
            id="uri"
            type="text"
            placeholder="0"
            className="border border-1 border-[#333333] rounded-[6px] p-1  text-black"
          />
        </div>
      </div>

      <hr className="my-4"></hr>

      <div>
        <h1 className="text-[#818998] font-semibold text-xs">FEATURES</h1>
        <div className="m-[0.5rem] flex items-center place-content-between">
          <div className="flex items-center">
            <input type="checkbox" className="form-checkbox h-3 w-3 rounded" />
            <label className="ml-[0.5rem] text-[#333333] ">Mintable</label>
          </div>
          <Tool
            tooltipText="Tooltip Text Here"
            link="https://www.birbleai.com/"
            linktext="Read more"
          />
        </div>
        <div className="m-[0.5rem] flex items-center">
          <input
            type="checkbox"
            className="form-checkbox h-3 w-3 text-indigo-600 rounded"
          />
          <label className="ml-[0.5rem] text-[#333333]">Burnable</label>
        </div>
        <div className="m-[0.5rem] flex items-center">
          <input
            type="checkbox"
            className="form-checkbox h-3 w-3 text-indigo-600 rounded"
          />
          <label className="ml-[0.5rem] text-[#333333] ">Pauseable</label>
        </div>
        <div className="m-[0.5rem] flex items-center">
          <input
            type="checkbox"
            className="form-checkbox h-3 w-3 text-indigo-600 rounded"
          />
          <label className="ml-[0.5rem] text-[#333333] ">Votes</label>
        </div>
        <div className="m-[0.5rem] mb-0 flex items-center">
          <input
            type="checkbox"
            className="form-checkbox h-3 w-3 text-indigo-600 rounded"
          />
          <label className="ml-[0.5rem] text-[#333333] ">Flash Minting</label>
        </div>
      </div>

      <hr className="my-4"></hr>

      <div>
        <div className=" mt-0  flex items-center">
          <label className="text-[#818998] font-semibold text-xs mr-[0.5rem]">
            ACCESS CONTROL
          </label>
          <input type="checkbox" className="form-checkbox h-3 w-3 rounded" />
        </div>
        <div className="m-[0.5rem]  flex items-center">
          <input type="radio" className="form-checkbox h-3 w-3" />
          <label className="ml-2 text-[#333333] ">Ownable</label>
        </div>
        <div className="m-[0.5rem]  flex items-center">
          <input type="radio" className="radio h-3 w-3 " />
          <label className="ml-2 text-[#333333] ">Roles Managed</label>
        </div>
        <div className=" flex items-center m-[0.5rem]  mb-0">
          <input type="radio" className="form-checkbox h-3 w-3" />
          <label className="ml-2 text-[#333333] ">Mintable</label>
        </div>
      </div>

      <hr className="my-4"></hr>

      <div>
        <div className=" flex items-center">
          <label className="text-[#818998] font-semibold text-xs mr-[0.5rem]">
            UPGRADEABILITY
          </label>
          <input type="checkbox" className="form-checkbox h-3 w-3 rounded" />
        </div>
        <div className="m-[0.5rem] flex items-center">
          <input type="radio" className="form-checkbox h-3 w-3" />
          <label className="ml-2 text-[#333333] ">Transparent</label>
        </div>
        <div className="m-[0.5rem] mb-0 flex items-center">
          <input type="radio" className="radio h-3 w-3" />
          <label className="ml-2 text-[#333333] ">UUPS</label>
        </div>
      </div>

      <hr className="my-4"></hr>
      
      <div>
        <h1 className="text-[#818998] font-semibold text-xs ">INFO</h1>
        <div className="flex flex-col mt-[0.75rem]">
          <label htmlFor="Security Contact" className="text-[#333333] text-sm">
            Security Contact
          </label>
          <input
            id="Security Contact"
            type="text"
            placeholder="security@example.com"
            className="border border-1 border-[#333333] rounded-[6px] p-1  text-black"
          />
        </div>
        <div className="flex flex-col mt-[0.75rem]">
          <label htmlFor="license" className="text-[#333333] text-sm">
            License
          </label>
          <input
            id="license"
            type="text"
            placeholder="MIT"
            className="border border-1 border-[#333333] rounded-[6px] p-1  text-black"
          />
        </div>
      </div>
    </div>
  );
};

export default ERC20;
