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
          if(!accessControl){
            setAccessControl(true);
            setOwnable(true)
          }  
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
          if(!accessControl){
            setAccessControl(true);
            setOwnable(true)
          }  
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
        <div className="p-4 overflow-visible">
        <div>
            <h1 className="text-white font-semibold text-xs">SETTINGS</h1>
            <form className="flex flex-col">
                <label className="text-white mt-2 text-xs font-normal">Name</label>
                <input
                    type="text"
                    placeholder="MyContract"
                    className="mt-2 p-1 rounded border bg-transparent border-[#818998] "
                    value={name}  onChange={(e) => setName(e.target.value)}
                />
            </form>
        </div>
  
        <hr className="my-4"></hr>
  
        <div>  
          <h1 className="text-white font-semibold text-xs">FEATURES</h1>
        <div className="mt-2">
          
  
          <label className={`flex items-center justify-between cursor-pointer ${pauseable ? 'bg-[#4D3C77]' : ''}`}>
            <div className="m-[0.5rem] flex items-center">
              <input
                title="Pauseable"
                type="checkbox"
                className="form-checkbox h-3 w-3 text-indigo-600 rounded"
                checked={pauseable}
                onChange={handlePauseableChange}
              />
              <span className="ml-[0.5rem] text-white select-text">Pauseable</span>
            </div>
            <Tool tooltipText="Privileged accounts will be able to pause the functionality marked with self.pausable.assert_not_paused(). Useful for emergency response." link='https://docs.openzeppelin.com/contracts-cairo/0.11.0/security#pausable' linktext='Read more'/>
          </label>
  
          
  
          <label className={`flex items-center justify-between cursor-pointer ${upgradeable ? 'bg-[#4D3C77]' : ''}`}>
            <div className="m-[0.5rem] flex items-center">
              <input
                title="Updateable URI"
                type="checkbox"
                className={`form-checkbox h-3 w-3 text-indigo-600 rounded `}
                checked={upgradeable}
                onChange={handleUpgradeable}
              />
              <span className="ml-[0.5rem] text-white select-text">Upgradeable</span>
            </div>
            <Tool tooltipText="Smart contracts are immutable by default unless they include code that allows them to be upgraded." link='https://docs.openzeppelin.com/contracts-cairo/0.11.0/upgrades' linktext='Read more'/>
          </label>          
          </div>
        </div>
  
        <hr className="my-4"></hr>
  
        <div>
          <div className=" mt-0  flex items-center place-content-between">
            <div className="flex items-center mr-[0.5rem]">
              <label className="text-white font-semibold text-xs mr-[0.5rem]">ACCESS CONTROL</label>
              <input
                type="checkbox"
                className={`form-checkbox h-3 w-3 rounded ${accessControl && (pauseable || upgradeable) ? "accent-grey-300 hover:accent-grey-300" : ""}`}
                checked={accessControl}
                value="access"
                onChange={handleAccessControl}
              />
            </div>
            <Tool tooltipText="Restrict who can access the functions of a contract or when they can do it." link='https://docs.openzeppelin.com/contracts-cairo/0.11.0/access' linktext='Read more' />
          </div>
  
        <div className="mt-2">
          <label className={`flex items-center justify-between cursor-pointer ${ownable ? 'bg-[#4D3C77]' : ''}`}>
            <div className="m-[0.5rem] flex items-center">
              <input
                title="Ownable"
                type="radio"
                name="accessControl"
                className="form-radio h-3 w-3"
                value="ownable"
                checked={ownable}
                onChange={handleAccessControlChange}
              />
              <span className="ml-2 text-white select-text">Ownable</span>
            </div>
            <Tool tooltipText="Simple mechanism with a single account authorized for all privileged actions." link='https://docs.openzeppelin.com/contracts-cairo/0.11.0/access#ownership_and_ownable' linktext='Read more'/>
          </label>
  
          <label className={`flex items-center justify-between cursor-pointer ${roles ? 'bg-[#4D3C77]' : ''}`}>
            <div className="m-[0.5rem] flex items-center">
              <input
                title="Roles"
                type="radio"
                className="form-radio h-3 w-3"
                value="roles"
                name="accessControl"
                checked={roles}
                onChange={handleAccessControlChange}
              />
              <span className="ml-2 text-white select-text">Roles</span>
            </div>
            <Tool tooltipText="Flexible mechanism with a separate role for each privileged action. A role can have many authorized accounts." link='https://docs.openzeppelin.com/contracts-cairo/0.11.0/access#role_based_accesscontrol' linktext='Read more'/>
          </label>
  
          
        </div>
      </div>
  
        <hr className="my-4" />
  
         
        <div className="px-2">
          <h1 className="text-white font-semibold text-xs ">INFO</h1>
          
          <div className="flex flex-col mt-[0.75rem]">
            <label htmlFor="license" className="text-white text-sm"> License </label>
            <input
              id="license"
              type="text"
              placeholder="MIT"
              className="border border-1 border-[#818998] rounded-[6px] p-1 bg-transparent"
              value={license} onChange={(e) => setLicense(e.target.value)}
            />
          </div>
        </div>
      </div>

    );
}