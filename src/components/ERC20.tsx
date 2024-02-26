import Tool from "./Tool";


const ERC20 = ()=>{
    return(
        <div className="p-4 overflow-visible">
            <div>
                <h1 className="text-[#818998] font-semibold text-xs">SETTINGS</h1>
                <div className="flex flex-row">
                    <div className="flex flex-col w-[60%] p-[0.5rem]">
                        <label htmlFor="name" className="text-[#333333] text-[0.875rem]  text-black">
                            Name
                        </label>
                        <input  id="name" type="text" placeholder="My Token" className="border border-1 border-[#333333] rounded-[6px] p-1"/>
                    </div>
                    <div className="flex flex-col w-[40%] p-[0.5rem]">
                        <label htmlFor="symbol" className="text-[#333333] text-[0.875rem]">
                            Symbol
                        </label>
                        <input  id="symbol" type="text" placeholder="MTK" className="border border-1 border-[#333333] rounded-[6px] p-1  text-black"/>
                    </div>
                </div>
                <div className="flex flex-col p-[0.5rem]">
                    <div className="flex item-center place-content-between">
                        <label htmlFor="uri" className="text-[#333333] text-[0.875rem]">
                            Premint
                        </label>
                        <Tool tooltipText="Create an initial amount of tokens for the deployer." />
                    </div>
                    <input  id="uri" type="text" placeholder="0" className="border border-1 border-[#333333] rounded-[6px] p-1  text-black"/>
                </div>
            </div>
            <hr className="my-4"></hr>
            <div>
                <h1 className="text-[#818998] font-semibold text-xs">FEATURES</h1>
                <div className="m-[0.5rem] flex items-center place-content-between">
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            className="form-checkbox h-3 w-3 rounded"
                            
                        />
                        <label className="ml-[0.5rem] text-[#333333] ">Mintable</label>
                    </div>
                    <Tool tooltipText="Privileged accounts will be able to create more supply." />
                </div>
                <div className="m-[0.5rem] flex items-center place-content-between">
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            className="form-checkbox h-3 w-3 text-indigo-600 rounded"
                            
                        />
                        <label className="ml-[0.5rem] text-[#333333]">Burnable</label>
                    </div>
                    <Tool tooltipText="Token holders will be able to destroy their tokens." link='https://docs.openzeppelin.com/contracts/5.x/api/token/erc20#ERC20Burnable' linktext='Read more'/>
                </div>
                <div className="m-[0.5rem] flex items-center place-content-between">
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            className="form-checkbox h-3 w-3 text-indigo-600 rounded"
                            
                        />
                        <label className="ml-[0.5rem] text-[#333333] ">Pauseable</label>
                    </div>
                    <Tool tooltipText="Privileged accounts will be able to pause the functionality marked as whenNotPaused. Useful for emergency response." link='https://docs.openzeppelin.com/contracts/5.x/api/utils#Pausable' linktext='Read more'/>
                </div>
                <div className="m-[0.5rem] flex items-center place-content-between">
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            className="form-checkbox h-3 w-3 text-indigo-600 rounded"
                            
                        />
                        <label className="ml-[0.5rem] text-[#333333] ">Votes</label>
                    </div>
                    <Tool tooltipText="Keeps track of historical balances for voting in on-chain governance, with a way to delegate one's voting power to a trusted account." link='https://docs.openzeppelin.com/contracts/5.x/api/token/erc20#ERC20Votes' linktext='Read more'/>
                </div>
                <div className="m-[0.5rem] mb-0 flex items-center place-content-between">
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            className="form-checkbox h-3 w-3 text-indigo-600 rounded"
                            
                        />
                        <label className="ml-[0.5rem] text-[#333333] ">Flash Minting</label>
                    </div>
                    <Tool tooltipText="Built-in flash loans. Lend tokens without requiring collateral as long as they're returned in the same transaction." link='https://docs.openzeppelin.com/contracts/5.x/api/token/erc20#ERC20FlashMint' linktext='Read more'/>
                </div>
                
            </div>
            <hr className="my-4"></hr>
            <div>
                <div className=" mt-0  flex items-center place-content-between mr-[0.5rem]">
                    <div className="flex items-center mr-[0.5rem]">
                        <label className="text-[#818998] font-semibold text-xs mr-[0.5rem]">ACCESS CONTROL</label>
                        <input
                            type="checkbox"
                            className="form-checkbox h-3 w-3 rounded"
                            
                        />
                    </div>
                    <Tool tooltipText="Restrict who can access the functions of a contract or when they can do it." link='https://docs.openzeppelin.com/contracts/5.x/api/access' linktext='Read more' />
                </div>
                <div className="m-[0.5rem]  flex items-center place-content-between">
                    <div className="flex items-center">
                    <input
                        type="radio"
                        className="form-checkbox h-3 w-3"
                        name="accessControl"
                    />
                    <label className="ml-2 text-[#333333] ">Ownable</label>
                    </div>
                    <Tool tooltipText="Simple mechanism with a single account authorized for all privileged actions." link='https://docs.openzeppelin.com/contracts/5.x/api/access#Ownable' linktext='Read more'/>
                </div>
                <div className="m-[0.5rem]  flex items-center place-content-between">
                    <div className="flex items-center">
                    <input
                        type="radio"
                        className="radio h-3 w-3 "
                        name="accessControl"
                    />
                    <label className="ml-2 text-[#333333] ">Roles</label>
                    </div>
                    <Tool tooltipText="Flexible mechanism with a separate role for each privileged action. A role can have many authorized accounts." link='https://docs.openzeppelin.com/contracts/5.x/api/access#AccessControl' linktext='Read more'/>
                </div>
                <div className=" flex items-center m-[0.5rem]  mb-0 place-content-between">
                    <div className="flex items-center">
                        <input
                            type="radio"
                            className="form-checkbox h-3 w-3"
                            name="accessControl"
                        />
                        <label className="ml-2 text-[#333333] ">Managed</label>
                    </div>
                    <Tool tooltipText="Enables a central contract to define a policy that allows certain callers to access certain functions." link='https://docs.openzeppelin.com/contracts/5.x/api/access#AccessManag' linktext='Read more'/>
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
                    <input  id="license" type="text" placeholder="MIT" className="border border-1 border-[#333333] rounded-[6px] p-1  text-black" />
                </div>
            </div>
        </div>
    )
}

export default ERC20;