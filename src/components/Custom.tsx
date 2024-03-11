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
  
      if (isChecked ||  pauseable) {
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
          
              setAccessControl(false);
              setOwnable(false)
              setManaged(false)
              setRoles(false)
          
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

    if ( !pauseable) {
    
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
          <Tool
            tooltipText="Tooltip Text Here"
            link="https://www.birbleai.com/"
            linktext="Read more"
            
          />
        </div>
      </div>
      <hr className="my-4"></hr>
      <div>
        <div className="flex">
          <div className=" mt-0  flex items-center">
            <label className="text-[#818998] font-semibold text-xs mr-[0.5rem]">
              ACCESS CONTROL
            </label>
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
          <Tool
            tooltipText="Tooltip Text Here"
            link="https://www.birbleai.com/"
            linktext="Read more"
          />
        </div>
        <div className="m-[0.5rem]  flex items-center justify-between">
          <div className="  flex items-center">
            <input title="Roles" type="radio" className="radio h-3 w-3 " value="roles"
              checked={roles}
              onChange={handleAccessControlChange}/>
            <label className="ml-2 text-[#333333] ">Roles</label>
          </div>
          <Tool
            tooltipText="Tooltip Text Here"
            link="https://www.birbleai.com/"
            linktext="Read more"
          />
        </div>
        <div className=" flex items-center m-[0.5rem]  mb-0 justify-between">
          <div className=" flex items-center ">
            <input
              title="Managed"
              type="radio"
              className="form-checkbox h-3 w-3"
              value="managed"
              checked={managed}
              onChange={handleAccessControlChange}
            />
            <label className="ml-2 text-[#333333] ">Managed</label>
          </div>
          <Tool
            tooltipText="Tooltip Text Here"
            link="https://www.birbleai.com/"
            linktext="Read more"
          />
        </div>
      </div>
      <hr className="my-4" />
      <div>
        <div className=" flex">
          <div className=" flex items-center">
            <label className="text-[#818998] font-semibold text-xs mr-[0.5rem]">
              UPGRADEABILITY
            </label>
            <input
              title="upgradability"
              type="checkbox"
              className="form-checkbox h-3 w-3 rounded"
              checked={upgradeability}
              value="upgradeable"
              onChange={handleUpgradabilityChange}
            />
          </div>
        </div>
        <div className="m-[0.5rem] flex items-center justify-between">
          <div className="flex items-center">
            <input
              title="transparent"
              type="radio"
              className="form-checkbox h-3 w-3"
              value="transparent"
              checked={transparent}
              onChange={handleUpgradeChange}
            />
            <label className="ml-2 text-[#333333] ">Transparent</label>
          </div>
          <Tool
            tooltipText="Tooltip Text Here"
            link="https://www.birbleai.com/"
            linktext="Read more"
          />
        </div>
        <div className="m-[0.5rem] mb-0 flex items-center justify-between">
          <div className=" flex items-center">
            <input title="uups" type="radio" className="radio h-3 w-3" 
            value="uups"
            checked={UUPS}
            onChange={handleUpgradeChange}/>
            <label className="ml-2 text-[#333333] ">UUPS</label>
          </div>
          <Tool
            tooltipText="Tooltip Text Here"
            link="https://www.birbleai.com/"
            linktext="Read more"
          />
        </div>
      </div>
      <hr className="my-4" />
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
            value={securityContact}  onChange={(e) => setSecurityContact(e.target.value)}
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
            value={license}  onChange={(e) => setLicense(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
