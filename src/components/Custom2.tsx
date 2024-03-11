"use client"

import { CustomCName, CustomCLicense, CustomCPauseable, CustomCUpgradeable, CustomCAccessControl, CustomCUpgradeability, CustomCUpgradeabilityTransparent, CustomCUpgradeabilityUUPS, CustomCAccessControlRoles, CustomCAccessControlOwnable } from "@/store/CustomC";
import { useRecoilState } from "recoil";
import Tool from "./Tool";

export default function Custom2() {
    const [name, setName] = useRecoilState(CustomCName);
    const [license, setLicense] = useRecoilState(CustomCLicense);
    const [pauseable, setPauseable] = useRecoilState(CustomCPauseable);
    const [upgradeable, setUpgradeable] = useRecoilState(CustomCUpgradeable)
    const [accessControl, setAccessControl] = useRecoilState(CustomCAccessControl);
    const [upgradeability, setUpgradeability] = useRecoilState(CustomCUpgradeability);
    const [transparent, setTransparent] = useRecoilState(CustomCUpgradeabilityTransparent);
    const [UUPS, setUUPS] = useRecoilState(CustomCUpgradeabilityUUPS);
    const [roles, setRoles] = useRecoilState(CustomCAccessControlRoles);
    const [ownable, setOwnable] = useRecoilState(CustomCAccessControlOwnable);

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
    
        if (isChecked || pauseable || upgradeable) {
            setAccessControl(true);
            
        } else {
            setAccessControl(false);
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
            if (!upgradeable) {
                setAccessControl(false);
                setOwnable(false)
                setRoles(false)
            }
        }
    };

    const handleUpgradeable = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUpgradeable(!upgradeable);
        const isChecked = e.target.checked;
        
        // If Pauseable is true, set Access Control to true
        if (isChecked) {
            setAccessControl(true);
            setOwnable(true)
            
        } else {
            // If both Burnable and Pauseable are false, set Access Control to false
            if ( !pauseable) {
                setAccessControl(false);
                setOwnable(false)
                setRoles(false)
            }
        }
    };

    

      const handleAccessControl = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const isChecked = e.target.checked;

        if (!pauseable && !upgradeable) {
        
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

    return (
        <div className=" flex flex-col rounded-lg overflow-y-visible p-4 bg-white ">
          <h2 className="text-[#818998] font-semibold text-xs">SETTINGS</h2>
            <form className="flex flex-col">
                <label className="text-black mt-2 text-xs font-normal">Name</label>
                <input
                    type="text"
                    placeholder="MyContract"
                    className="mt-2 p-1 rounded border border-gray-300 text-black"
                    value={name}  onChange={(e) => setName(e.target.value)}
                />
            </form>
            <hr className="my-4"></hr>
            <div>
                <h1 className="text-[#818998] font-semibold text-xs">FEATURES</h1>
                <div className="m-[0.5rem] flex items-center justify-between">

                    <div className=" flex items-center">
                    <input
                        title="Pausable"
                        type="checkbox"
                        className="form-checkbox h-3 w-3 text-indigo-600 rounded" 
                        checked={pauseable}
                        onChange={handlePauseableChange}  
                    />
                    <label className="ml-[0.5rem] text-[#333333]">Pausable</label>
                    </div>
                    <Tool tooltipText="Tooltip Text Here" link='https://www.birbleai.com/' linktext='Read more'/>
                </div>
                <div className="m-[0.5rem] flex items-center justify-between">
                    <div className=" flex items-center">
                    <input
                        title="Upgradeable"
                        type="checkbox"
                        className="form-checkbox h-3 w-3 text-indigo-600 rounded"
                        checked={upgradeable}
                        onChange={handleUpgradeable}
                    />
                    <label className="ml-[0.5rem] text-[#333333] ">Upgradeable</label>
                    </div>
                    <Tool tooltipText="Tooltip Text Here" link='https://www.birbleai.com/' linktext='Read more'/>
                </div>
            </div>
            <hr className="my-4"></hr>
            <div>
                <div className="flex">
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
                    <Tool tooltipText="Tooltip Text Here" link='https://www.birbleai.com/' linktext='Read more'/>
                </div>
                <div className="m-[0.5rem]  flex items-center justify-between">
                    <div className="  flex items-center">
                    <input
                        title="Roles"
                        type="radio"
                        className="radio h-3 w-3 "
                        value="roles"
                        checked={roles}
                        onChange={handleAccessControlChange}
                    />
                    <label className="ml-2 text-[#333333] ">Roles</label>
                    </div>
                    <Tool tooltipText="Tooltip Text Here" link='https://www.birbleai.com/' linktext='Read more'/>
                </div>
            </div>
            <hr className="my-4" />
            <div>
                <h1 className="text-[#818998] font-semibold text-xs ">INFO</h1>
                <div className="flex flex-col mt-[0.75rem]">
                    <label htmlFor="license" className="text-[#333333] text-sm">
                        License
                    </label>
                    <input  id="license" type="text" placeholder="MIT" className="border border-1 border-[#333333] rounded-[6px] p-1  text-black" value={license}  onChange={(e) => setLicense(e.target.value)}/>
                </div>
            </div>
        </div>

    );
}