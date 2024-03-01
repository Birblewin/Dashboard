"use client"
import Tool from "./Tool";


const Governor = () => {
  return (
    <div className="p-2">
      <div>
        <h1 className="text-[#818998] font-semibold text-xs">SETTINGS</h1>
        <div className="flex flex-col p-[0.5rem] mb-[0.5rem]">
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
          <div className="flex flex-col pl-[0.5rem] w-[50%] pr-[5px]">
            <div className="flex items-center place-content-between">
              <label htmlFor="name" className="text-[#333333] text-[0.875rem]">
                VotingDelay
              </label>
              <Tool tooltipText="Delay since proposal is created until voting starts." />
            </div>
            <input
              id="name"
              type="text"
              placeholder="My Token"
              className="border border-1 border-[#333333] rounded-[6px] p-1 text-black"
            />
          </div>
          <div className="flex flex-col pr-[0.5rem] w-[50%]">
            <div className="flex items-center place-content-between">
              <label htmlFor="symbol" className="text-[#333333] text-[0.875rem]">
                VotingPeriod
              </label>
              <Tool tooltipText="Length of period during which people can cast their vote." />
            </div>
            <input
              id="symbol"
              type="text"
              placeholder="MTK"
              className="border border-1 border-[#333333] rounded-[6px] p-1 text-black"
            />
          </div>
        </div>
        <div className="flex flex-row items-center p-[0.5rem] place-content-between mt-[0.5rem]">
          <div className="flex items-center">
            <label htmlFor="name" className="text-[#333333] text-[0.875rem]">
              1 block =
            </label>
            <input
              id="symbol"
              type="text"
              placeholder="12"
              className="border border-1 border-[#333333] rounded-[6px] p-1 w-7 h-5 text-black"
            />
            <p className="text-[#333333]  text-[0.875rem]">seconds</p>
          </div>
          <Tool tooltipText="Assumed block time for converting above time periods into block numbers.Block time may drift and impact these periods in the future." />
        </div>
        <div className="flex flex-col p-[0.5rem]">
          <div className="flex items-center place-content-between">
            <label htmlFor="uri" className="text-[#333333] text-[0.875rem]">
              Proposal Threshhold
            </label>
            <Tool tooltipText="Minimum number of votes an account must have to create a proposal." />
          </div>
          <input
            id="uri"
            type="text"
            placeholder="0"
            className="border border-1 border-[#333333] rounded-[6px] p-1 text-black"
          />
        </div>
        <div className="flex flex-col p-[0.5rem] place-content-between">
          
            <div className="flex items-center place-content-between">
              <div className="flex items-center">
                <label htmlFor="quorum" className="text-[#333333] text-[0.875rem] ">
                  Quorum
                </label>
                <label htmlFor="percentage" className="text-[#333333] text-[0.875rem] ml-1">
                  %
                </label>
                <input
                  id="percentage"
                  type="radio"
                  name="numType"
                />
                <label htmlFor="integer" className="text-[#333333] text-[0.875rem] ml-1">
                  #
                </label>
                <input
                  id="integer"
                  type="radio"
                  name="numType"
                />
              </div>
              <Tool tooltipText="Quorum required for a proposal to pass." />
            </div>
            <input
              id="quorum"
              type="text"
              placeholder="4"
              className="border border-1 border-[#333333] rounded-[6px] p-1 text-black"
            />
        </div>

        <div className="flex flex-row items-center p-[0.5rem] place-content-between">
          <div className="flex items-center">
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
          <Tool tooltipText="Token amounts above will be extended with this number of zeroes. Does not apply to ERC721Votes." />
        </div>
        <div className="m-[0.5rem] flex items-center place-content-between">
          <div className="flex items-center">
            <input type="checkbox" className=" h-3 w-3 text-indigo-600 rounded" />
            <label className="ml-[0.5rem] text-[#333333]">
              Updateable Settings
            </label>
          </div>
          <Tool tooltipText="Allow governance to update voting settings (delay, period, proposal threshold)." />
        </div>
        <div className="m-[0.5rem] flex items-center place-content-between">
          <div className="flex items-center">
            <input
                type="checkbox"
                className="form-checkbox h-3 w-3 text-indigo-600 rounded"
            />
            <label className="ml-[0.5rem] text-[#333333] ">Storage</label>
          </div>
          <Tool tooltipText="Enable storage of proposal details and enumerability of proposals." link='https://docs.openzeppelin.com/contracts/5.x/api/governance#GovernorStorage' linktext='Read more'/>
        </div>
      </div>
      <hr className="my-4"></hr>
      <div>
        <h1 className="text-[#818998] font-semibold text-xs">VOTES</h1>
        <div className="m-[0.5rem]  flex items-center place-content-between">
          <div className="flex items-center">
            <input type="radio" className="form-checkbox h-3 w-3"  name="votes"/>
            <label className="ml-2 text-[#333333] ">ERC20Votes</label>
          </div>
          <Tool tooltipText="Represent voting power with a votes-enabled ERC20 token. Voters can entrust their voting power to a delegate." link='https://docs.openzeppelin.com/contracts/5.x/api/token/erc20#ERC20Votes' linktext='Read more'/>
        </div>
        <div className="m-[0.5rem]  flex items-center place-content-between ">
          <div className="flex items-center">
            <input type="radio" className="radio h-3 w-3 " name="votes"/>
            <label className="ml-2 text-[#333333] ">ERC721Votes</label>
          </div>
          <Tool tooltipText="Represent voting power with a votes-enabled ERC721 token. Voters can entrust their voting power to a delegate." link='https://docs.openzeppelin.com/contracts/5.x/api/token/erc721#ERC721Votes' linktext='Read more'/>
        </div>
      </div>
      <hr className="my-4"></hr>
     
      <div>
        <div className=" flex items-center place-content-between mr-[0.5rem]">
            <div className="flex items-center">
                <label className="text-[#818998] font-semibold text-xs mr-[0.5rem]">TIMELOCK</label>
                <input
                    type="checkbox"
                    className="form-checkbox h-3 w-3 rounded"
                    
                />
            </div>
            <Tool tooltipText="Add a delay to actions taken by the Governor. Gives users time to exit the system if they disagree with governance decisions."/>
        </div>
        <div className="m-[0.5rem] flex items-center place-content-between">
            <div className="flex items-center">
                <input
                    type="radio"
                    className="form-checkbox h-3 w-3"
                    name="timelock"
                />
                <label className="ml-2 text-[#333333] ">TimeLock Controller</label>
            </div>
            <Tool tooltipText="Module compatible with OpenZeppelin's TimelockController. Allows multiple proposers and executors, in addition to the Governor itself." link='https://docs.openzeppelin.com/contracts/5.x/api/governance#GovernorTimelockControl' linktext='Read more'/>
        </div>
        <div className="m-[0.5rem] mb-0 flex items-center place-content-between">
            <div className="flex items-center">
                <input
                    type="radio"
                    className="radio h-3 w-3"
                    name="timelock"
                />
                <label className="ml-2 text-[#333333] ">Compound</label>
            </div>
            <Tool tooltipText="Module compatible with Compound's Timelock contract. Useful if assets and roles are already held in this contract." link='https://github.com/compound-finance/compound-protocol/blob/master/contracts/Timelock' linktext='Read more'/>
        </div>
      </div>

      <hr className="my-4"></hr>
      <div>
        <div className=" flex items-center place-content-between mr-[0.5rem]">
            <div className="flex items-center">
                <label className="text-[#818998] font-semibold text-xs mr-[0.5rem]">UPGRADEABILITY</label>
                <input
                    type="checkbox"
                    className="form-checkbox h-3 w-3 rounded"
                    
                />
            </div>
            <Tool tooltipText="Smart contracts are immutable by default unless deployed behind an upgradeable proxy." link='https://docs.openzeppelin.com/upgrades' linktext='Read more'/>
        </div>
        <div className="m-[0.5rem] flex items-center place-content-between">
            <div className="flex items-center">
                <input
                    type="radio"
                    className="form-checkbox h-3 w-3"
                    name="upgradeability"
                />
                <label className="ml-2 text-[#333333] ">Transparent</label>
            </div>
            <Tool tooltipText="Uses more complex proxy with higher overhead, requires less changes in your contract. Can also be used with beacons." link='https://docs.openzeppelin.com/contracts/5.x/api/proxy#TransparentUpgradeableProxy' linktext='Read more'/>
        </div>
        <div className="m-[0.5rem] mb-0 flex items-center place-content-between">
            <div className="flex items-center">
                <input
                    type="radio"
                    className="radio h-3 w-3"
                    name="upgradeability"
                />
                <label className="ml-2 text-[#333333] ">UUPS</label>
            </div>
            <Tool tooltipText="Uses simpler proxy with less overhead, requires including extra code in your contract. Allows flexibility for authorizing upgrades." link='https://docs.openzeppelin.com/contracts/5.x/api/proxy#UUPSUpgradeable' linktext='Read more'/>
        </div>
      </div>
      <hr className="my-4"></hr>
      <div>
        <h1 className="text-[#818998] font-semibold text-xs ">INFO</h1>
        <div className="flex flex-col mt-[0.75rem]">
          <div className="flex items-center place-content-between">
              <label htmlFor="Security Contact" className="text-[#333333] text-sm">
                  Security Contact
              </label>
              <Tool tooltipText="Where people can contact you to report security issues. Will only be visible if contract metadata is verified." link='https://github.com/ethereum-lists/contracts/blob/main/README.md#tracking-new-deployments' linktext='Read more'/>
          </div>
          <input  id="Security Contact" type="text" placeholder="security@example.com" className="border border-1 border-[#333333] rounded-[6px] p-1  text-black"/>
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