"use client"

import { CustomSName, CustomSSecurityContact, CustomSLicense, CustomSPauseable, CustomSUpgradeable, CustomSAccessControl, CustomSUpgradeability, CustomSUpgradeabilityTransparent, CustomSUpgradeabilityUUPS, CustomSAccessControlRoles, CustomSAccessControlOwnable, CustomSAccessControlManaged } from "@/store/CustomS";
import { ERC20SVotes } from "@/store/ERC20S";
import { useRecoilState } from "recoil";
import Tool from "./Tool";

export default function Custom() {
    const [name, setName] = useRecoilState(CustomSName);
    const [securityContact, setSecurityContact] = useRecoilState(CustomSSecurityContact);
    const [license, setLicense] = useRecoilState(CustomSLicense);
    const [votes, setVotes] = useRecoilState(ERC20SVotes);
    const [pauseable, setPauseable] = useRecoilState(CustomSPauseable);
    const [upgradeable, setUpgradeable] = useRecoilState(CustomSUpgradeable)
    const [accessControl, setAccessControl] = useRecoilState(CustomSAccessControl);
    const [upgradeability, setUpgradeability] = useRecoilState(CustomSUpgradeability);
    const [transparent, setTransparent] = useRecoilState(CustomSUpgradeabilityTransparent);
    const [UUPS, setUUPS] = useRecoilState(CustomSUpgradeabilityUUPS);
    const [roles, setRoles] = useRecoilState(CustomSAccessControlRoles);
    const [ownable, setOwnable] = useRecoilState(CustomSAccessControlOwnable);
    const [managed, setManaged] = useRecoilState(CustomSAccessControlManaged);

    const handleUpgradeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.value === 'transparent') {
        setTransparent(true);
        setUUPS(false);
      } else if (e.target.value === 'uups') {
        setUUPS(true);
        setTransparent(false);
        if(!accessControl){
          setAccessControl(true);
          setOwnable(true)
        }  
      }
      setUpgradeability(true); // Set the checkbox to true if either radio input is true
    };

    const handleAccessControlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      const isChecked = e.target.checked;
      
      if (value === 'ownable') {
          setOwnable(true);
          setRoles(false);
          setManaged(false);
      } else if (value === 'roles') {
          setRoles(true);
          setOwnable(false);
          setManaged(false);
      } else if (value === 'managed') {
          setRoles(false);
          setOwnable(false);
          setManaged(true);
      }
      
      // If either Burnable or Pauseable is true, set Access Control to true
  
      if (isChecked ||  pauseable || UUPS) {
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
          if(!UUPS){
              setAccessControl(false);
              setOwnable(false)
              setManaged(false)
              setRoles(false)
          }
      }
  };
  const handleUpgradabilityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const isChecked = e.target.checked;
    
    if (value === 'upgradeable') {
      
      if (isChecked) {
        setUUPS(false);
        setTransparent(true);
      } else {
        setUUPS(false);
        setTransparent(false);
      }
      setUpgradeability(!upgradeability);
    }
  };

  const handleAccessControl = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    if ( !pauseable && !UUPS) {
    
        if (value === 'access') {
        
        if (isChecked) {
            setOwnable(true);
            setRoles(false);
            setManaged(false)
        } else {
            setOwnable(false);
            setRoles(false);
            setManaged(false)
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
            className="mt-2 p-1 rounded border border-[#818998] bg-transparent"
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
          <Tool tooltipText="Privileged accounts will be able to pause the functionality marked as whenNotPaused. Useful for emergency response." link='https://docs.openzeppelin.com/contracts/5.x/api/utils#Pausable' linktext='Read more'/>
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
              className={`form-checkbox h-3 w-3 rounded ${accessControl && (pauseable || UUPS) ? "accent-grey-300 hover:accent-grey-300" : ""}`}
              checked={accessControl}
              value="access"
              onChange={handleAccessControl}
            />
          </div>
          <Tool tooltipText="Restrict who can access the functions of a contract or when they can do it." link='https://docs.openzeppelin.com/contracts/5.x/api/access' linktext='Read more' />
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
          <Tool tooltipText="Simple mechanism with a single account authorized for all privileged actions." link='https://docs.openzeppelin.com/contracts/5.x/api/access#Ownable' linktext='Read more'/>
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
          <Tool tooltipText="Flexible mechanism with a separate role for each privileged action. A role can have many authorized accounts." link='https://docs.openzeppelin.com/contracts/5.x/api/access#AccessControl' linktext='Read more'/>
        </label>

        <label className={`flex items-center justify-between cursor-pointer ${managed ? 'bg-[#4D3C77]' : ''}`}>
          <div className="m-[0.5rem] flex items-center">
            <input
              title="Managed"
              type="radio"
              className="form-radio h-3 w-3"
              value="managed"
              name="accessControl"
              checked={managed}
              onChange={handleAccessControlChange}
            />
            <span className="ml-2 text-white select-text">Managed</span>
          </div>
          <Tool tooltipText="Enables a central contract to define a policy that allows certain callers to access certain functions." link='https://docs.openzeppelin.com/contracts/5.x/api/access#AccessManag' linktext='Read more'/>
        </label>
      </div>
    </div>

      <hr className="my-4" />

      <div>
        <div className=" flex items-center place-content-between ">
            <div className="flex items-center">
                <label className="text-white font-semibold text-xs mr-[0.5rem]">UPGRADEABILITY</label>
                <input
                    type="checkbox"
                    className="form-checkbox h-3 w-3 rounded"
                    checked={upgradeability}
                    value="upgradeable"
                    onChange={handleUpgradabilityChange}
                    
                />
            </div>
            <Tool tooltipText="Smart contracts are immutable by default unless deployed behind an upgradeable proxy." link='https://docs.openzeppelin.com/upgrades' linktext='Read more'/>
        </div>

      <div className="mt-2">
        <label className={`flex items-center justify-between cursor-pointer ${transparent ? 'bg-[#4D3C77]' : ''}`}>
          <div className="m-[0.5rem] flex items-center">
            <input
              title="transparent"
              type="radio"
              className="form-radio h-3 w-3"
              value='transparent'
              name="upgradeability"
              checked={transparent}
              onChange={handleUpgradeChange}
            />
            <span className="ml-2 text-white select-text">Transparent</span>
          </div>
          <Tool tooltipText="Uses more complex proxy with higher overhead, requires less changes in your contract. Can also be used with beacons." link='https://docs.openzeppelin.com/contracts/5.x/api/proxy#TransparentUpgradeableProxy' linktext='Read more'/>
        </label>


        <label className={`flex items-center justify-between cursor-pointer ${UUPS ? 'bg-[#4D3C77]' : ''}`}>
          <div className="m-[0.5rem] flex items-center">
            <input
              title="uups"
              type="radio"
              className="radio h-3 w-3"
              value="uups"
              name="upgradeability"
              checked={UUPS}
              onChange={handleUpgradeChange}
            />
            <span className="ml-2 text-white select-text">UUPS</span>
          </div>
          <Tool tooltipText="Uses simpler proxy with less overhead, requires including extra code in your contract. Allows flexibility for authorizing upgrades." link='https://docs.openzeppelin.com/contracts/5.x/api/proxy#UUPSUpgradeable' linktext='Read more'/>
        </label>          
      </div>
    </div>

      <hr className="my-4" />

      <div className="px-2">
        <h1 className="text-white font-semibold text-xs ">INFO</h1>
        <div className="flex flex-col mt-[0.75rem]">
          <div className="flex items-center justify-between">
            <label htmlFor="Security Contact" className="text-white text-sm">  Security Contact </label>
            <Tool tooltipText="Where people can contact you to report security issues. Will only be visible if contract metadata is verified." link='https://github.com/ethereum-lists/contracts/blob/main/README.md#tracking-new-deployments' linktext='Read more' />
          </div>
          <input
            id="Security Contact"
            type="text"
            placeholder="security@example.com"
            className="border border-1 border-[#818998] rounded-[6px] p-1 bg-transparent"
            value={securityContact}
            onChange={(e) => setSecurityContact(e.target.value)}
          />
        </div>
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
