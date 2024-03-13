
import { ERC721CName, ERC721CLicense, ERC721CSymbol, ERC721CMintable, ERC721CPauseable, ERC721CAccessControl, ERC721CBurnable, ERC721CUpgradeable, ERC721CAccessControlRoles, ERC721CAccessControlOwnable, ERC721CBaseURI } from "@/store/ERC721C";
import Tool from "./Tool";
import {atom, useRecoilState} from "recoil"

const ERC721C = ()=>{

    const [name, setName] = useRecoilState(ERC721CName);
    const [license, setLicense] = useRecoilState(ERC721CLicense);
    const [symbol, setSymbol] = useRecoilState(ERC721CSymbol);
    const [mintable, setMintable] = useRecoilState(ERC721CMintable);
    const [pauseable, setPauseable] = useRecoilState(ERC721CPauseable);
    const [accessControl, setAccessControl] = useRecoilState(ERC721CAccessControl);
    const [burnable, setBurnable] = useRecoilState(ERC721CBurnable);
    const [upgradeable, setUpgradeable] = useRecoilState(ERC721CUpgradeable);
    const [roles, setRoles] = useRecoilState(ERC721CAccessControlRoles);
    const [ownable, setOwnable] = useRecoilState(ERC721CAccessControlOwnable);
    const [BaseURI, setBaseURI] = useRecoilState(ERC721CBaseURI);
    


      const handleAccessControlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const isChecked = e.target.checked;
        
        if (value === 'ownable') {
            setOwnable(true);
            setRoles(false);
        } else if (value === 'roles') {
            setRoles(true);
            setOwnable(false);
        } 
        
        // If either Burnable or Pauseable is true, set Access Control to true
    
        if (isChecked || mintable || pauseable) {
            setAccessControl(true);
            
        } else {
            setAccessControl(false);
        }
        
    };
    
    const handleMintableChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMintable(!mintable);
        const isChecked = e.target.checked;
        
    
        // If Mintable is true, set Access Control to true
        if (isChecked) {
            setAccessControl(true);
            setOwnable(true)
            
            
        } else {
            // If both Burnable and Pauseable are false, set Access Control to false
            if (!pauseable) {
                setAccessControl(false);
                setOwnable(false)
                setRoles(false)
            }
        }
    };

    const handlePauseableChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPauseable(!pauseable);
        const isChecked = e.target.checked;
        
        // If Pauseable is true, set Access Control to true
        if (isChecked) {
            setAccessControl(true);
            setOwnable(true)
            
        } else {
            // If both Burnable and Pauseable are false, set Access Control to false
            if (!mintable) {
                setAccessControl(false);
                setOwnable(false)
                setRoles(false)
            }
        }
    };

    const handleUpgradableChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUpgradeable(!upgradeable);
        const isChecked = e.target.checked;
        
        // If Upgradable is true, set Access Control to true
        if (isChecked) {
            setAccessControl(true);
            setOwnable(true)
            
        } else {
            // If both Burnable and Pauseable are false, set Access Control to false
            if (!mintable) {
                setAccessControl(false);
                setOwnable(false)
                setRoles(false)
            }
        }
      };

      const handleAccessControl = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const isChecked = e.target.checked;

        if (!mintable && !pauseable) {
        
            if (value === 'access') {
            
            if (isChecked) {
                setOwnable(true);
                setRoles(false);
            } else {
                setOwnable(false);
                setRoles(false);
            }
            setAccessControl(!accessControl);
            }
        }else {
            // If either Mintable or Pauseable is true, prevent the change in Access Control
            e.preventDefault();
        }
      };
     
    

    return(
        <div className="p-4">
            <div>
                <h1 className="text-[#818998] font-semibold text-xs">SETTINGS...</h1>
                <div className="flex flex-row">
                    <div className="flex flex-col w-[60%] p-[0.5rem]">
                        <label htmlFor="name" className="text-[#333333] text-[0.875rem]  ">
                            Name
                        </label>
                        <input  id="name" type="text" placeholder="My Token" className="border border-1 border-[#333333] rounded-[6px] p-1"
                        value={name}  onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-col w-[40%] p-[0.5rem]">
                        <label htmlFor="symbol" className="text-[#333333] text-[0.875rem]">
                            Symbol
                        </label>
                        <input  id="symbol" type="text" placeholder="MTK" className="border border-1 border-[#333333] rounded-[6px] p-1  text-black"
                         value={symbol}  onChange={(e) => setSymbol(e.target.value)}
                        />
                    </div>
                   
                </div>
                <div className="flex flex-col p-[0.5rem]">
                    <div className="flex justify-between">
                        <label htmlFor="uri" className="text-[#333333] text-[0.875rem]">
                            Base URI
                        </label>
                        <Tool tooltipText="Will be concatenated with token IDs to generate the token URIs."/>
                    </div>
                    
                    <input  id="uri" type="text" placeholder="https://..." className="border border-1 border-[#333333] rounded-[6px] p-1  text-black"
                    value={BaseURI}  onChange={(e) => setBaseURI(e.target.value)}
                    />
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
                            checked={mintable}
                            onChange={handleMintableChange}
                            
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
                        checked={burnable}
                        onChange={(e) => setBurnable(!burnable)}
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
                        checked={pauseable}
                        onChange={handlePauseableChange}
                        
                    />
                    <label className="ml-[0.5rem] text-[#333333] ">Pauseable</label>
                    </div>
                    <Tool tooltipText="Privileged accounts will be able to pause the functionality marked with self.pausable.assert_not_paused(). Useful for emergency response." link='https://docs.openzeppelin.com/contracts-cairo/security#pausable' linktext='Read more'/>
                </div>
                <div className="m-[0.5rem] flex items-center justify-between">
                    <div className=" flex items-center">
                    <input
                        title="upgradable"
                        type="checkbox"
                        className="form-checkbox h-3 w-3 text-indigo-600 rounded"
                        checked={upgradeable}
                        onChange={handleUpgradableChange}
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
                        checked={accessControl}
                        value="access"
                        onChange={handleAccessControl}
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
                        value="ownable"
                        checked={ownable}
                        onChange={handleAccessControlChange}
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
                        className="radio h-3 w-3"
                        value="roles"
                        checked={roles}
                        onChange={handleAccessControlChange}
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
                    <input  id="license" type="text" placeholder="MIT" className="border border-1 border-[#333333] rounded-[6px] p-1  text-black"  value={license}  onChange={(e) => setLicense(e.target.value)}/>
                </div>
            </div>
        </div>
    )
}

export default ERC721C;