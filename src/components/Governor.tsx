"use client"

const Governor = () => {
  return (
    <div className="p-4">
      <div>
        <h1 className="text-[#818998] font-semibold text-xs">SETTINGS</h1>
        <div className="flex flex-col p-[0.5rem]">
          <label htmlFor="uri" className="text-[#333333] text-[0.875rem]">
            Name
          </label>
          <input
            id="uri"
            type="text"
            placeholder="My Governor"
            className="border border-1 border-[#333333] rounded-[6px] p-1 text-black"
          />
        </div>
        <div className="flex flex-row">
          <div className="flex flex-col p-[0.5rem] w-[50%]">
            <label htmlFor="name" className="text-[#333333] text-[0.875rem]">
              VotingDelay
            </label>
            <input
              id="name"
              type="text"
              placeholder="My Token"
              className="border border-1 border-[#333333] rounded-[6px] p-1 text-black"
            />
          </div>
          <div className="flex flex-col p-[0.5rem] w-[50%]">
            <label htmlFor="symbol" className="text-[#333333] text-[0.875rem]">
              VotingPeriod
            </label>
            <input
              id="symbol"
              type="text"
              placeholder="MTK"
              className="border border-1 border-[#333333] rounded-[6px] p-1 text-black"
            />
          </div>
        </div>
        <div className="flex flex-row items-center p-[0.5rem]">
          <label htmlFor="name" className="text-[#333333] text-[0.875rem]">
            1 block =
          </label>
          <input
            id="symbol"
            type="text"
            placeholder="12"
            className="border border-1 border-[#333333] rounded-[6px] p-1 w-8 h-5 text-black"
          />
          <p className="text-[#333333]  text-[0.875rem]">seconds</p>
        </div>
        <div className="flex flex-col p-[0.5rem]">
          <label htmlFor="uri" className="text-[#333333] text-[0.875rem]">
            Proposal Threshhold
          </label>
          <input
            id="uri"
            type="text"
            placeholder="My Governor"
            className="border border-1 border-[#333333] rounded-[6px] p-1 text-black"
          />
        </div>
        <div className="flex flex-col p-[0.5rem]">
          <label htmlFor="uri" className="text-[#333333] text-[0.875rem]">
            Quorum
          </label>
          <input
            id="uri"
            type="text"
            placeholder="My Governor"
            className="border border-1 border-[#333333] rounded-[6px] p-1 text-black"
          />
        </div>

        <div className="flex flex-row items-center p-[0.5rem]">
          <label htmlFor="name" className="text-[#333333] text-[0.875rem]">
            Token decimals=
          </label>
          <input
            id="symbol"
            type="text"
            placeholder="18"
            className="border border-1 border-[#333333] rounded-[6px] p-1 w-8 h-5 text-black"
          />
        </div>
        <div className="m-[0.5rem] flex items-center">
          <input type="checkbox" className=" h-3 w-3 text-indigo-600 rounded" />
          <label className="ml-[0.5rem] text-[#333333]">
            Updateable Settings
          </label>
        </div>
        <div className="m-[0.5rem] flex items-center">
          <input
            type="checkbox"
            className="form-checkbox h-3 w-3 text-indigo-600 rounded"
          />
          <label className="ml-[0.5rem] text-[#333333] ">Storage</label>
        </div>
      </div>
      <hr className="my-4"></hr>
      <div>
        <h1 className="text-[#818998] font-semibold text-xs">VOTES</h1>
        <div className="m-[0.5rem]  flex items-center">
          <input type="radio" className="form-checkbox h-3 w-3" />
          <label className="ml-2 text-[#333333] ">ERC20Votes</label>
        </div>
        <div className="m-[0.5rem]  flex items-center">
          <input type="radio" className="radio h-3 w-3 " />
          <label className="ml-2 text-[#333333] ">ERC721Votes</label>
        </div>
      </div>
      <hr className="my-4"></hr>
      <div>
        <div className=" flex items-center">
          <label className="text-[#818998] font-semibold text-xs mr-[0.5rem]">
            TIMELOCK
          </label>
          <input type="checkbox" className="form-checkbox h-3 w-3 rounded" />
        </div>
        <div className="m-[0.5rem]  flex items-center">
          <input type="radio" className="form-checkbox h-3 w-3" />
          <label className="ml-2 text-[#333333] ">TimeLock Controller</label>
        </div>
        <div className="m-[0.5rem]  flex items-center">
          <input type="radio" className="radio h-3 w-3 " />
          <label className="ml-2 text-[#333333] ">Compound</label>
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
            className="border border-1 border-[#333333] rounded-[6px] p-1 text-black"
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
            className="border border-1 border-[#333333] rounded-[6px] p-1 text-black"
          />
        </div>
      </div>
    </div>
  );
};

export default Governor;