import { useState } from "react";
import Tool from "./Tool";


const ERC721 = ()=>{
    const [isAutoIncrementIds, setIsAutoIncrementIds] = useState(false);
    const [isMintable, setIsMintable] = useState(false);

    const handleAutoIncrementIdsChange = () => {
        setIsAutoIncrementIds(!isAutoIncrementIds);
        setIsMintable(!isMintable); // Update the state of Mintable checkbox
    };

    return(
        <div className="p-4">
            <div>
                <h1 className="text-[#818998] font-semibold text-xs">SETTINGS</h1>
                <div className="flex flex-row">
                    <div className="flex flex-col w-[60%] p-[0.5rem]">
                        <label htmlFor="name" className="text-[#333333] text-[0.875rem]  ">
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
                    <div className="flex justify-between">
                        <label htmlFor="uri" className="text-[#333333] text-[0.875rem]">
                            Base URI
                        </label>
                        <Tool tooltipText="Will be concatenated with token IDs to generate the token URIs."/>
                    </div>
                    
                    <input  id="uri" type="text" placeholder="https://..." className="border border-1 border-[#333333] rounded-[6px] p-1  text-black"/>
                </div>
            </div>
            <hr className="my-4"></hr>
            <div>
                <h1 className="text-[#818998] font-semibold text-xs">FEATURES</h1>
                <div className="justify-between m-[0.5rem] flex items-center">
                    <div className=" flex items-center ">
                        <input
                            title="Mintable"
                            type="checkbox"
                            className="form-checkbox h-3 w-3 rounded"
                            checked={isAutoIncrementIds}
                            onChange={handleAutoIncrementIdsChange}
                            onClick={() => setIsAutoIncrementIds(!isAutoIncrementIds)}
                            
                        />
                        <label className="ml-[0.5rem] text-[#333333] ">Mintable</label>
                    </div>
                    
                    <Tool tooltipText="Privileged accounts will be able to emit new tokens."/>
                </div>
                <div className="m-[0.5rem] flex items-center justify-between">
                    <div className="flex items-center">
                    <label className=" text-[#333333] flex items-center">
                        <span className="text-[#d8dbe2]">└</span>
                        <input
                        title="Auto increment Ids"
                        type="checkbox"
                        className="form-checkbox h-3 w-3 rounded"
                        onClick={() => setIsAutoIncrementIds(!isAutoIncrementIds)}
                       
                        
                    />
                        Auto increment Ids</label>
                    </div>
                    <Tool tooltipText="New tokens will be automatically assigned an incremental id."/>
                </div>
                <div className="m-[0.5rem] flex items-center justify-between">
                    <div className=" flex items-center">
                    <input
                        title="Burnable"
                        type="checkbox"
                        className="form-checkbox h-3 w-3 text-indigo-600 rounded"
                        
                    />
                    <label className="ml-[0.5rem] text-[#333333]">Burnable</label>
                    </div>
                    <Tool tooltipText="Token holders will be able to destroy their tokens." link='https://docs.openzeppelin.com/contracts/api/token/erc721#ERC721Burnable' linktext='Read more'/>
                </div>
                <div className="m-[0.5rem] flex items-center justify-between">
                    <div className=" flex items-center">
                    <input
                        title="Pauseable"
                        type="checkbox"
                        className="form-checkbox h-3 w-3 text-indigo-600 rounded"
                        
                    />
                    <label className="ml-[0.5rem] text-[#333333] ">Pauseable</label>
                    </div>
                    <Tool tooltipText="Privileged accounts will be able to pause the functionality marked as whenNotPaused. Useful for emergency response." link='https://docs.openzeppelin.com/contracts/api/utils#Pausable' linktext='Read more'/>
                </div>
                <div className="m-[0.5rem] flex items-center justify-between">
                    <div className=" flex items-center">
                    <input
                        title="Votes"
                        type="checkbox"
                        className="form-checkbox h-3 w-3 text-indigo-600 rounded"
                        
                    />
                    <label className="ml-[0.5rem] text-[#333333] ">Votes</label>
                    </div>
                    <Tool tooltipText="Keeps track of individual units for voting in on-chain governance, with a way to delegate one's voting power to a trusted account." link='https://docs.openzeppelin.com/contracts/api/token/erc721#ERC721Votes' linktext='Read more'/>
                </div>
                <div className="m-[0.5rem] mb-0 flex items-center justify-between">
                    <div className=" flex items-center">
                    <input
                        title="enumerable"
                        type="checkbox"
                        className="form-checkbox h-3 w-3 text-indigo-600 rounded"
                        
                    />
                    <label className="ml-[0.5rem] text-[#333333] ">Enumerable</label>
                    </div>
                    <Tool tooltipText="Allows on-chain enumeration of all tokens or those owned by an account. Increases gas cost of transfers." link='https://docs.openzeppelin.com/contracts/api/token/erc721#ERC721Enumerable' linktext='Read more'/>
                </div>
                <div className="m-[0.5rem] mb-0 flex items-center justify-between">
                    <div className=" flex items-center">
                    <input
                        title="URI Storage"
                        type="checkbox"
                        className="form-checkbox h-3 w-3 text-indigo-600 rounded"
                        
                    />
                    <label className="ml-[0.5rem] text-[#333333] ">URI Storage</label>
                    </div>
                    <Tool tooltipText="Allows updating token URIs for individual token IDs." link='https://docs.openzeppelin.com/contracts/api/token/erc721#ERC721URIStorage' linktext='Read more'/>
                </div>
                
            </div>
            <hr className="my-4"></hr>
            <div>
                <div className=" mt-0  flex items-center justify-between px-2">
                    <div className=" mt-0  flex items-center">
                    <label className="text-[#818998] font-semibold text-xs mr-[0.5rem]">ACCESS CONTROL</label>
                    <input
                        title="Ownable"
                        type="checkbox"
                        className="form-checkbox h-3 w-3 rounded"
                        
                    />
                    </div>
                    <Tool tooltipText="Restrict who can access the functions of a contract or when they can do it." link='https://docs.openzeppelin.com/contracts/api/access' linktext='Read more'/>
            
                </div>
                <div className="m-[0.5rem]  flex items-center justify-between">
                    <div className="flex items-center">
                    <input
                        title="Ownable"
                        type="radio"
                        className="form-checkbox h-3 w-3"
                        
                    />
                    <label className="ml-2 text-[#333333] ">Ownable</label>
                    </div>
                     <Tool tooltipText="Simple mechanism with a single account authorized for all privileged actions." link='https://docs.openzeppelin.com/contracts/api/access#Ownable' linktext='Read more'/>
                   
                </div>
                <div className="m-[0.5rem]  flex items-center justify-between">
                    <div className="  flex items-center">
                    <input
                        title="Roles"
                        type="radio"
                        className="radio h-3 w-3 "
                        
                    />
                    <label className="ml-2 text-[#333333] ">Roles</label>
                    </div>
                    <Tool tooltipText="Flexible mechanism with a separate role for each privileged action. A role can have many authorized accounts." link='https://docs.openzeppelin.com/contracts/api/access#AccessControl' linktext='Read more'/>
                    
                </div>
                <div className=" flex items-center m-[0.5rem]  mb-0 justify-between">
                    <div className=" flex items-center ">
                    <input
                        title="Managed"
                        type="radio"
                        className="form-checkbox h-3 w-3"
                        
                    />
                    <label className="ml-2 text-[#333333] ">Managed</label>
                    </div>
                    <Tool tooltipText="Enables a central contract to define a policy that allows certain callers to access certain functions" link='https://docs.openzeppelin.com/contracts/api/access#AccessManaged' linktext='Read more'/>
                    
                </div>
                
            </div>
            <hr className="my-4"></hr>
            <div>
                <div className=" flex items-center justify-between px-2">
                    <div className=" flex items-center">
                    <label className="text-[#818998] font-semibold text-xs mr-[0.5rem]">UPGRADEABILITY</label>
                    <input
                        title="upgradability"
                        type="checkbox"
                        className="form-checkbox h-3 w-3 rounded"
                        
                    />
                    </div>
                    <Tool tooltipText="Smart contracts are immutable by default unless deployed behind an upgradeable proxy." link='https://docs.openzeppelin.com/openzeppelin/upgrades' linktext='Read more'/>
                </div>
                <div className="m-[0.5rem] flex items-center justify-between">
                    <div  className="flex items-center">
                    <input
                        title="transparent"
                        type="radio"
                        className="form-checkbox h-3 w-3"
                        
                    />
                    <label className="ml-2 text-[#333333] ">Transparent</label>
                    </div>
                    <Tool tooltipText="Uses more complex proxy with higher overhead, requires less changes in your contract. Can also be used with beacons." link='https://docs.openzeppelin.com/contracts/api/proxy#TransparentUpgradeableProxy' linktext='Read more'/>
                   
                </div>
                <div className="m-[0.5rem] mb-0 flex items-center justify-between">
                    <div className=" flex items-center">
                    <input
                        title="uups"
                        type="radio"
                        className="radio h-3 w-3"
                        
                    />
                    <label className="ml-2 text-[#333333] ">UUPS</label>
                    </div>
                    <Tool tooltipText="Uses simpler proxy with less overhead, requires including extra code in your contract. Allows flexibility for authorizing upgrades." link='https://docs.openzeppelin.com/contracts/api/proxy#UUPSUpgradeable' linktext='Read more'/>
                   
                </div>
                
            </div>
            <hr className="my-4"></hr>
            <div className="px-2">
                <h1 className="text-[#818998] font-semibold text-xs ">INFO</h1>
                <div className="flex flex-col mt-[0.75rem]">
                   <div className="flex items-center justify-between">
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

export default ERC721;