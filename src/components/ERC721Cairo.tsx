
import Tool from "./Tool";


const ERC721Cairo = ()=>{
    return(
        <div className="p-4">
            <div>
                <h1 className="text-[#818998] font-semibold text-xs">SETTINGS...</h1>
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
                            
                            
                        />
                        <label className="ml-[0.5rem] text-[#333333] ">Mintable</label>
                    </div>
                    
                    <Tool tooltipText="Privileged accounts will be able to emit new tokens." link='https://docs.openzeppelin.com/contracts-cairo/erc721' linktext='Read more'/>
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
                    <Tool tooltipText="Token holders will be able to destroy their tokens."/>
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
                    <Tool tooltipText="Privileged accounts will be able to pause the functionality marked with self.pausable.assert_not_paused(). Useful for emergency response." link='https://docs.openzeppelin.com/contracts-cairo/security#pausable' linktext='Read more'/>
                </div>
                <div className="m-[0.5rem] flex items-center justify-between">
                    <div className=" flex items-center">
                    <input
                        title="Votes"
                        type="checkbox"
                        className="form-checkbox h-3 w-3 text-indigo-600 rounded"
                        
                    />
                    <label className="ml-[0.5rem] text-[#333333] ">Upgradable</label>
                    </div>
                    <Tool tooltipText="Smart contracts are immutable by default unless they include code that allows them to be upgraded." link='https://docs.openzeppelin.com/contracts-cairo/upgrades' linktext='Read more'/>
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
                    <Tool tooltipText="Restrict who can access the functions of a contract or when they can do it." link='https://docs.openzeppelin.com/contracts-cairo/access' linktext='Read more'/>
            
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
                     <Tool tooltipText="Simple mechanism with a single account authorized for all privileged actions." link='https://docs.openzeppelin.com/contracts-cairo/access#ownership_and_ownable' linktext='Read more'/>
                   
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
                    <Tool tooltipText="Flexible mechanism with a separate role for each privileged action. A role can have many authorized accounts." link='https://docs.openzeppelin.com/contracts-cairo/access#role_based_accesscontrol' linktext='Read more'/>
                    
                </div>
                
                
            </div>
            <hr className="my-4"></hr>
            
            <div className="px-2">
                <h1 className="text-[#818998] font-semibold text-xs ">INFO</h1>
                
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

export default ERC721Cairo;