"use client"

// IMPORTING NECESSARY FILES
    // IMPORTING ATOMS
import { ERC20SName, ERC20SSecurityContact, ERC20SLicense, ERC20SSymbol, ERC20SPremint, ERC20SMintable, ERC20SVotes, ERC20SPauseable, ERC20SAccessControl, ERC20SBurnable, ERC20SUpgradeability, ERC20SFlashMinting, ERC20SUpgradeabilityTransparent, ERC20SUpgradeabilityUUPS, ERC20SAccessControlRoles, ERC20SAccessControlOwnable, ERC20SAccessControlManaged, ERC20SPermit, ERC20SolidityErrors } from "@/store/ERC20S";
    // IMPORTING COMPONENTS
import Tool from "./Tool";
    // IMPORTING MODULES
import {useRecoilState} from "recoil"
    // IMPORTING TYPES
import { ERC20SolidityErrorsType } from "@/types/types";
    // IMPORTING LIB FUNCTIONS
import checkIfNumber from "@/lib/checkIfNumber";

const ERC20 = ()=>{
    const [name, setName] = useRecoilState(ERC20SName);
    const [securityContact, setSecurityContact] = useRecoilState(ERC20SSecurityContact);
    const [license, setLicense] = useRecoilState(ERC20SLicense);
    const [symbol, setSymbol] = useRecoilState(ERC20SSymbol);
    const [premint, setPremint] = useRecoilState(ERC20SPremint);
    const [mintable, setMintable] = useRecoilState(ERC20SMintable);
    const [votes, setVotes] = useRecoilState(ERC20SVotes);
    const [pauseable, setPauseable] = useRecoilState(ERC20SPauseable);
    const [permit, setPermit] = useRecoilState(ERC20SPermit);
    const [accessControl, setAccessControl] = useRecoilState(ERC20SAccessControl);
    const [burnable, setBurnable] = useRecoilState(ERC20SBurnable);
    const [upgradeability, setUpgradeability] = useRecoilState(ERC20SUpgradeability);
    const [flashMinting, setFlashMinting] = useRecoilState(ERC20SFlashMinting);
    const [transparent, setTransparent] = useRecoilState(ERC20SUpgradeabilityTransparent);
    const [UUPS, setUUPS] = useRecoilState(ERC20SUpgradeabilityUUPS);
    const [roles, setRoles] = useRecoilState(ERC20SAccessControlRoles);
    const [ownable, setOwnable] = useRecoilState(ERC20SAccessControlOwnable);
    const [managed, setManaged] = useRecoilState(ERC20SAccessControlManaged);

    // A STATE TO MANAGE THE CURRENT ERRORS
    const [errors, setErrors] = useRecoilState<ERC20SolidityErrorsType>(ERC20SolidityErrors)

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
    
        if (isChecked || mintable || pauseable || UUPS) {
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
            if(!accessControl){
            setAccessControl(true);
            setOwnable(true)
            }
            
            
        } else {
            // If both Burnable and Pauseable are false, set Access Control to false
            if (!pauseable) {
                setAccessControl(false);
                setOwnable(false)
                setManaged(false)
                setRoles(false)
            }
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
            if (!mintable) {
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

        if (!mintable && !pauseable && !UUPS) {
        
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

      const handlePremintChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if(value == ''){
            setPremint(value);
        }
        else{
            if (checkIfNumber(value, true)) {
                setPremint(value);
            }
        }    
      };
      
     
    
     
    return(
    <div className="p-4 overflow-visible">
      <div>
        <h1 className="text-[#818998] font-semibold text-xs">SETTINGS</h1>
        <div className="flex flex-row">
            <div className="flex flex-col w-[60%] p-[0.5rem]">
                <label htmlFor="name" className="text-[0.875rem]  text-black">
                    Name
                </label>
                <input  id="name" type="text" placeholder="MyToken" className="border border-1 border-[#333333] rounded-[6px] p-1" value={name}  onChange={(e) => setName(e.target.value)}/>
            </div>
            <div className="flex flex-col w-[40%] p-[0.5rem]">
                <label htmlFor="symbol" className="text-[#333333] text-[0.875rem]">
                    Symbol
                </label>
                <input  id="symbol" type="text" placeholder="MTK" className="border border-1 border-[#333333] rounded-[6px] p-1  text-black" value={symbol}  onChange={(e) => setSymbol(e.target.value)}/>
            </div>
        </div>
        <div className="flex flex-col p-[0.5rem]">
            <div className="flex item-center place-content-between">
                <label htmlFor="uri" className="text-[#333333] text-[0.875rem]">
                    Premint
                </label>
                <Tool tooltipText="Create an initial amount of tokens for the deployer." />
            </div>
            <input  id="uri" type="string" placeholder="0" className={`border border-1 rounded-[6px] p-1 text-black border-[#333333]`} value={premint}   onChange={ handlePremintChange}/>
        </div>
        </div>

      <hr className="my-4"></hr>

      <div>  
        <h1 className="text-[#818998] font-semibold text-xs">FEATURES</h1>
      <div className="mt-2">
        <label className={`flex items-center justify-between cursor-pointer ${mintable ? 'bg-gray-100' : ''}`}>
          <div className="m-[0.5rem] flex items-center">
            <input
              title="Mintable"
              type="checkbox"
              className="form-checkbox h-3 w-3 text-indigo-600 rounded"
              checked={mintable}
              onChange={handleMintableChange}
            />
            <span className="ml-[0.5rem] text-[#333333] select-text">Mintable</span>
          </div>
          <Tool tooltipText="Privileged accounts will be able to create more supply." />
        </label>

        <label className={`flex items-center justify-between cursor-pointer ${burnable ? 'bg-gray-100' : ''}`}>
          <div className="m-[0.5rem] flex items-center">
            <input
              title="Burnable"
              type="checkbox"
              className="form-checkbox h-3 w-3 text-indigo-600 rounded"
              checked={burnable}
              onChange={() => setBurnable(!burnable)}
            />
            <span className="ml-[0.5rem] text-[#333333] select-text">Burnable</span>
          </div>
          <Tool tooltipText="Token holders will be able to destroy their tokens." link='https://docs.openzeppelin.com/contracts/5.x/api/token/erc20#ERC20Burnable' linktext='Read more'/>
        </label>

        <label className={`flex items-center justify-between cursor-pointer ${pauseable ? 'bg-gray-100' : ''}`}>
          <div className="m-[0.5rem] flex items-center">
            <input
              title="Pauseable"
              type="checkbox"
              className="form-checkbox h-3 w-3 text-indigo-600 rounded"
              checked={pauseable}
              onChange={handlePauseableChange}
            />
            <span className="ml-[0.5rem] text-[#333333] select-text">Pauseable</span>
          </div>
          <Tool tooltipText="Privileged accounts will be able to pause the functionality marked as whenNotPaused. Useful for emergency response." link='https://docs.openzeppelin.com/contracts/5.x/api/utils#Pausable' linktext='Read more'/>
        </label>

        <label className={`flex items-center justify-between cursor-pointer ${permit ? 'bg-gray-100' : ''}`}>
          <div className="m-[0.5rem] flex items-center">
            <input
              title="Updateable URI"
              type="checkbox"
              className="form-checkbox h-3 w-3 text-indigo-600 rounded"
              checked={permit}
              onChange={(e) => setPermit(!permit)}
            />
            <span className="ml-[0.5rem] text-[#333333] select-text">Permit</span>
          </div>
          <Tool tooltipText="Keeps track of historical balances for voting in on-chain governance, with a way to delegate one's voting power to a trusted account." link='https://docs.openzeppelin.com/contracts/5.x/api/token/erc20#ERC20Votes' linktext='Read more'/>
        </label>

        <label className={`flex items-center justify-between cursor-pointer ${votes ? 'bg-gray-100' : ''}`}>
          <div className="m-[0.5rem] flex items-center">
            <input
              title="Updateable URI"
              type="checkbox"
              className="form-checkbox h-3 w-3 text-indigo-600 rounded"
              checked={votes}
              onChange={(e) => setVotes(!votes)}
            />
            <span className="ml-[0.5rem] text-[#333333] select-text">Votes</span>
          </div>
          <Tool tooltipText="Keeps track of historical balances for voting in on-chain governance, with a way to delegate one's voting power to a trusted account." link='https://docs.openzeppelin.com/contracts/5.x/api/token/erc20#ERC20Votes' linktext='Read more'/>
        </label>

        <label className={`flex items-center justify-between cursor-pointer ${flashMinting ? 'bg-gray-100' : ''}`}>
          <div className="m-[0.5rem] flex items-center">
            <input
              title="Updateable URI"
              type="checkbox"
              className={`form-checkbox h-3 w-3 text-indigo-600 rounded `}
              checked={flashMinting}
              onChange={(e) => setFlashMinting(!flashMinting)}
            />
            <span className="ml-[0.5rem] text-[#333333] select-text">Flash Minting</span>
          </div>
          <Tool tooltipText="Built-in flash loans. Lend tokens without requiring collateral as long as they're returned in the same transaction." link='https://docs.openzeppelin.com/contracts/5.x/api/token/erc20#ERC20FlashMint' linktext='Read more'/>
        </label>          
        </div>
      </div>

      <hr className="my-4"></hr>

      <div>
        <div className=" mt-0  flex items-center place-content-between">
          <div className="flex items-center mr-[0.5rem]">
            <label className="text-[#818998] font-semibold text-xs mr-[0.5rem]">ACCESS CONTROL</label>
            <input
              type="checkbox"
              className={`form-checkbox h-3 w-3 rounded ${accessControl && (pauseable || mintable || UUPS) ? "accent-grey-300 hover:accent-grey-300" : ""}`}
              checked={accessControl}
              value="access"
              onChange={handleAccessControl}
            />
          </div>
          <Tool tooltipText="Restrict who can access the functions of a contract or when they can do it." link='https://docs.openzeppelin.com/contracts/5.x/api/access' linktext='Read more' />
        </div>

      <div className="mt-2">
        <label className={`flex items-center justify-between cursor-pointer ${ownable ? 'bg-gray-100' : ''}`}>
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
            <span className="ml-2 text-[#333333] select-text">Ownable</span>
          </div>
          <Tool tooltipText="Simple mechanism with a single account authorized for all privileged actions." link='https://docs.openzeppelin.com/contracts/5.x/api/access#Ownable' linktext='Read more'/>
        </label>

        <label className={`flex items-center justify-between cursor-pointer ${roles ? 'bg-gray-100' : ''}`}>
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
            <span className="ml-2 text-[#333333] select-text">Roles</span>
          </div>
          <Tool tooltipText="Flexible mechanism with a separate role for each privileged action. A role can have many authorized accounts." link='https://docs.openzeppelin.com/contracts/5.x/api/access#AccessControl' linktext='Read more'/>
        </label>

        <label className={`flex items-center mb-0 justify-between cursor-pointer ${managed ? 'bg-gray-100' : ''}`}>
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
            <span className="ml-2 text-[#333333] select-text">Managed</span>
          </div>
          <Tool tooltipText="Enables a central contract to define a policy that allows certain callers to access certain functions." link='https://docs.openzeppelin.com/contracts/5.x/api/access#AccessManag' linktext='Read more'/>
        </label>
      </div>
    </div>

      <hr className="my-4" />

      <div>
        <div className=" flex items-center place-content-between ">
            <div className="flex items-center">
                <label className="text-[#818998] font-semibold text-xs mr-[0.5rem]">UPGRADEABILITY</label>
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
        <label className={`flex items-center justify-between cursor-pointer ${transparent ? 'bg-gray-100' : ''}`}>
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
            <span className="ml-2 text-[#333333] select-text">Transparent</span>
          </div>
          <Tool tooltipText="Uses more complex proxy with higher overhead, requires less changes in your contract. Can also be used with beacons." link='https://docs.openzeppelin.com/contracts/5.x/api/proxy#TransparentUpgradeableProxy' linktext='Read more'/>
        </label>


        <label className={`mb-0 flex items-center justify-between cursor-pointer ${UUPS ? 'bg-gray-100' : ''}`}>
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
            <span className="ml-2 text-[#333333] select-text">UUPS</span>
          </div>
          <Tool tooltipText="Uses simpler proxy with less overhead, requires including extra code in your contract. Allows flexibility for authorizing upgrades." link='https://docs.openzeppelin.com/contracts/5.x/api/proxy#UUPSUpgradeable' linktext='Read more'/>
        </label>          
      </div>
    </div>

      <hr className="my-4" />

      <div className="px-2">
        <h1 className="text-[#818998] font-semibold text-xs ">INFO</h1>
        <div className="flex flex-col mt-[0.75rem]">
          <div className="flex items-center justify-between">
            <label htmlFor="Security Contact" className="text-[#333333] text-sm">  Security Contact </label>
            <Tool tooltipText="Where people can contact you to report security issues. Will only be visible if contract metadata is verified." link='https://github.com/ethereum-lists/contracts/blob/main/README.md#tracking-new-deployments' linktext='Read more' />
          </div>
          <input
            id="Security Contact"
            type="text"
            placeholder="security@example.com"
            className="border border-1 border-[#333333] rounded-[6px] p-1  text-black"
            value={securityContact}
            onChange={(e) => setSecurityContact(e.target.value)}
          />
        </div>
        <div className="flex flex-col mt-[0.75rem]">
          <label htmlFor="license" className="text-[#333333] text-sm"> License </label>
          <input
            id="license"
            type="text"
            placeholder="MIT"
            className="border border-1 border-[#333333] rounded-[6px] p-1  text-black"
            value={license} onChange={(e) => setLicense(e.target.value)}
          />
        </div>
      </div>
    </div>
    )
}

export default ERC20;