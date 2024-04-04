"use client"

// IMPORTING NECESSARY FILES
  // IMPORTING COMPONENTS
import Tool from "./Tool";
  // IMPORTING MODULES
import { useRecoilState } from "recoil";
import React from "react";
  // IMPORTING TYPES
import { GovernorFormDataType, GovernorErrorsType } from "@/types/types";
  // IMPORTING ATOMS
import {governorFormData, governorErrors} from "@/store/Governor";
  // IMPORTING LIB FUNCTIONS
import checkIfNumber from "@/lib/checkIfNumber";

// A FUNCTION THAT RETURNS A GOVERNOR COMPONENT
export default function Governor(){
  // EXTRACTING THE GOVERNOR FORM DATA FROM RECOIL
  const [formData, setFormData] =
    useRecoilState<GovernorFormDataType>(governorFormData);
  // A STATE TO KEEP TRACK OF POSSIBLE ERRORS
  const [errors, setErrors] =
    useRecoilState<GovernorErrorsType>(governorErrors);

  // A FUNCTION TO HANDLE THE FORM DATA
  function handleFormData({
    target: { name, value, type, checked },
  }: React.ChangeEvent<HTMLInputElement>): void {
    if (name === "votingDelay") {
      // DESTRUCTURE INPUT INTO 2 PARTS
      const [numberPart, daysPart] = value.split(" ");

      // CHECK IF THE VALUE ENTERED IS OF RIGHT FORMAT
      if (!checkIfNumber(numberPart, true)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          votingDelay: "Bad duration format",
        }));
      } else if (daysPart !== "day" && daysPart !== "days") {
        setErrors((prevErrors) => ({
          ...prevErrors,
          votingDelay: "Bad duration format",
        }));
      } else {
        // CLEAR ERRORS
        setErrors((prevErrors) => ({
          ...prevErrors,
          votingDelay: "",
        }));
      }

      // CHECK IF FORMAT IS '0 DAY'
      if (parseFloat(numberPart) === 0 && daysPart === "day") {
        setErrors((prevErrors) => ({
          ...prevErrors,
          votingDelay: "",
        }));

        return setFormData((prevFormData) => ({
          ...prevFormData,
          votingDelay: "0 days",
        }));

        // CHECK IF FORMAT IS 'Xs DAY'
      } else if (parseFloat(numberPart) > 1 && daysPart === "day") {
        setErrors((prevErrors) => ({
          ...prevErrors,
          votingDelay: "",
        }));

        if (numberPart.includes("."))
          return setFormData((prevFormData) => ({
            ...prevFormData,
            votingDelay: `${parseFloat(numberPart)} days`,
          }));

        return setFormData((prevFormData) => ({
          ...prevFormData,
          votingDelay: `${parseInt(numberPart)} days`,
        }));

        // CHECK IF FORMAT IS '1 DAYS'
      } else if (parseFloat(numberPart) === 1 && daysPart === "days") {
        setErrors((prevErrors) => ({
          ...prevErrors,
          votingDelay: "",
        }));

        return setFormData((prevFormData) => ({
          ...prevFormData,
          votingDelay: "1 day",
        }));
      }
    } else if (name === "votingPeriod") {
      // DESTRUCTURE INPUT INTO 2 SECTIONS
      const [numberPart, weeksPart] = value.split(" ");

      // CHECK IF THE VALUE ENTERED IS OF RIGHT FORMAT
      if (!checkIfNumber(numberPart, true)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          votingPeriod: "Bad duration format",
        }));
      } else if (weeksPart !== "week" && weeksPart !== "weeks") {
        setErrors((prevErrors) => ({
          ...prevErrors,
          votingPeriod: "Bad duration format",
        }));
      } else {
        // CLEAR ERRORS
        setErrors((prevErrors) => ({
          ...prevErrors,
          votingPeriod: "",
        }));
      }

      // CHECK IF FORMAT IS '0 WEEK'
      if (parseFloat(numberPart) === 0 && weeksPart === "week") {
        setErrors((prevErrors) => ({
          ...prevErrors,
          votingPeriod: "",
        }));

        return setFormData((prevFormData) => ({
          ...prevFormData,
          votingPeriod: "0 weeks",
        }));

        // CHECK IF FORMAT IS 'Xs WEEK'
      } else if (parseFloat(numberPart) > 1 && weeksPart === "week") {
        setErrors((prevErrors) => ({
          ...prevErrors,
          votingPeriod: "",
        }));

        if (numberPart.includes("."))
          return setFormData((prevFormData) => ({
            ...prevFormData,
            votingPeriod: `${parseFloat(numberPart)} weeks`,
          }));

        return setFormData((prevFormData) => ({
          ...prevFormData,
          votingPeriod: `${parseInt(numberPart)} weeks`,
        }));

        // CHECK IF FORMAT IS '1 WEEKS'
      } else if (parseFloat(numberPart) === 1 && weeksPart === "weeks") {
        setErrors((prevErrors) => ({
          ...prevErrors,
          votingPeriod: "",
        }));

        return setFormData((prevFormData) => ({
          ...prevFormData,
          votingPeriod: "1 week",
        }));
      }
    } else if (name === "blockValue") {
      // CHECK IF VALUE IS A NUMBER, IF NOT MAKE THE VALUE AN EMPTY STRING
      if (!checkIfNumber(value, true)) {
        return setFormData((prevFormData) => ({
          ...prevFormData,
          blockValue: "",
        }));
      }
    } else if (name === "proposalThreshold") {
      // CHECK IF VALUE IS AN INTEGER, IF NOT THROW ERROR
      if (!checkIfNumber(value)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          proposalThreshold: "Not a valid number",
        }));
      } else {
        // CLEAR ERRORS
        setErrors((prevErrors) => ({
          ...prevErrors,
          proposalThreshold: "",
        }));
      }

      // IF VALUE IS NONE, AUTO SET NULL ERRORS
      if (!value) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          proposalThreshold: "",
        }));
      }
    } else if (name === "quorumType") {
      return setFormData((prevFormData) => ({
        ...prevFormData,
        quorumType: value as "number" | "percentage",
        quorumValue: "0",
      }));
    } else if (name === "tokenDecimals") {
      // CHECK IF VALUE IS A NUMBER, IF NOT MAKE THE VALUE AN EMPTY STRING
      if (!checkIfNumber(value, true)) {
        return setFormData((prevFormData) => ({
          ...prevFormData,
          tokenDecimals: "",
        }));
      }
    } else if (name === "timelockValue") {
      // SEE IF CHECKED IS TRUE, IF SO CHECK THE DEFAULT, IF NOT, CANCEL EVERYTHING
      if (checked) {
        return setFormData((prevFormData) => ({
          ...prevFormData,
          timelockValue: true,
          timelockType: "TimelockController",
        }));
      } else {
        return setFormData((prevFormData) => ({
          ...prevFormData,
          timelockValue: false,
          timelockType: "",
        }));
      }
    } else if (name === "timelockType") {
      // IF ANY TIMELOCKTYPE IS CHECKED, CHECK THE TIMELOCKVALUE FIELD
      return setFormData((prevFormData) => ({
        ...prevFormData,
        timelockType: value as "TimelockController" | "Compound",
        timelockValue: true,
      }));
    } else if (name === "upgradeabilityValue") {
      // SEE IF CHECKED IS TRUE, IF SO CHECK THE DEFAULT, IF NOT, CANCEL EVERYTHING
      if (checked) {
        return setFormData((prevFormData) => ({
          ...prevFormData,
          upgradeabilityValue: true,
          upgradeabilityType: "Transparent",
        }));
      } else {
        return setFormData((prevFormData) => ({
          ...prevFormData,
          upgradeabilityValue: false,
          upgradeabilityType: "",
        }));
      }
    } else if (name === "upgradeabilityType") {
      // IF ANY UPGRADEABILITYTYPE IS CHECKED, CHECK THE UPGRADEABILITYVALUE FIELD
      return setFormData((prevFormData) => ({
        ...prevFormData,
        upgradeabilityType: value as "Transparent" | "UUPS",
        upgradeabilityValue: true,
      }));
    } else if (name === "quorumValue") {
      // CHECK IF VALUE IS A NUMBER, IF NOT MAKE THE VALUE AN EMPTY STRING
      if (!checkIfNumber(value, true)) {
        return setFormData((prevFormData) => ({
          ...prevFormData,
          quorumValue: "",
        }));
      }
    }

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  // A USEEFFECT TO MONITOR BOTH QUORUMTYPE AND QUORUMVALUE FIELDS
  React.useEffect(() => {
    // CHECK IF VALUE IS GREATER THAN 100 WHEN TYPE IS A PERCENTAGE
    if (
      formData.quorumType === "percentage" &&
      parseFloat(formData.quorumValue) > 100
    ) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        quorumValue: "Not a valid percentage",
      }));
    } else if (formData.quorumType === "number" && !formData.quorumValue) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        quorumValue: "Not a valid number",
      }));
    } else {
      // CLEAR ERRORS
      setErrors((prevErrors) => ({
        ...prevErrors,
        quorumValue: "",
      }));
    }
  }, [formData.quorumType, formData.quorumValue, setErrors]);

  /*
    TEXT-WHITE
    INPUT border-[#818998]
    INPUT bg-transparent
    CLICKED VALUE bg-[#4D3C77]
    SELECTED text-indigo-600
  */

  return (
    <div className="p-2">
      <div>
        <h1 className="text-white font-semibold text-xs">SETTINGS</h1>

        {/* NAME FIELD */}
        <label className="text-white text-[0.875rem] flex flex-col p-[0.5rem] mb-[0.5rem]">
          Name
          <input
            name="name"
            type="text"
            className="border border-1 border-[#818998] rounded-[6px] p-1 bg-transparent"
            value={formData.name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleFormData(e)
            }
          />
        </label>

        <div className="flex flex-row">
          {/* VOTING DELAY */}
          <div className="flex flex-col pl-[0.5rem] w-[50%] pr-[5px]">
            <div className="flex items-center place-content-between">
              <label
                htmlFor="votingDelay"
                className="text-white text-[0.875rem]"
              >
                VotingDelay
              </label>

              <Tool tooltipText="Delay since proposal is created until voting starts." />
            </div>

            <input
              id="votingDelay"
              type="text"
              className={`border border-1 rounded-[6px] p-1 bg-transparent ${errors.votingDelay ? "border-red-500" : "border-[#818998]"}`}
              name="votingDelay"
              value={formData.votingDelay}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleFormData(e)
              }
            />

            {errors.votingDelay && (
              <p className="text-sm text-red-500">{errors.votingDelay}</p>
            )}
          </div>

          {/* VOTING PERIOD */}
          <div className="flex flex-col pr-[0.5rem] w-[50%]">
            <div className="flex items-center place-content-between">
              <label
                htmlFor="votingPeriod"
                className="text-white text-[0.875rem]"
              >
                VotingPeriod
              </label>
              <Tool tooltipText="Length of period during which people can cast their vote." />
            </div>

            <input
              id="votingPeriod"
              type="text"
              className={`border border-1 rounded-[6px] p-1 bg-transparent ${errors.votingPeriod ? "border-red-500" : "border-[#818998]"}`}
              name="votingPeriod"
              value={formData.votingPeriod}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleFormData(e)
              }
            />

            {errors.votingPeriod && (
              <p className="text-sm text-red-500">{errors.votingPeriod}</p>
            )}
          </div>
        </div>

        {/* BLOCK VALUE */}
        <div className="flex flex-row items-center p-[0.5rem] place-content-between mt-[0.5rem]">
          <div className="flex items-center gap-1">
            <label htmlFor="blockValue" className="text-white text-[0.875rem]">
              1 block =
            </label>

            <input
              id="blockValue"
              type="text"
              placeholder="12"
              className="border border-1 border-[#818998] bg-transparent rounded-[6px] p-1 w-7 h-5"
              name="blockValue"
              value={formData.blockValue}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleFormData(e)
              }
            />

            <p className="text-white text-[0.875rem]">seconds</p>
          </div>

          <Tool tooltipText="Assumed block time for converting above time periods into block numbers.Block time may drift and impact these periods in the future." />
        </div>

        {/* PROPOSAL THRESHOLD */}
        <div className="flex flex-col p-[0.5rem]">
          <div className="flex items-center place-content-between">
            <label
              htmlFor="proposalThreshold"
              className="text-white text-[0.875rem]"
            >
              Proposal Threshhold
            </label>
            <Tool tooltipText="Minimum number of votes an account must have to create a proposal." />
          </div>

          <input
            id="proposalThreshold"
            type="text"
            placeholder="0"
            className={`border border-1 bg-transparent ${errors.proposalThreshold ? "border-red-500" : "border-[#818998]"} rounded-[6px] p-1`}
            name="proposalThreshold"
            value={formData.proposalThreshold}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleFormData(e)
            }
          />

          {errors.proposalThreshold && (
            <p className="text-sm text-red-500">{errors.proposalThreshold}</p>
          )}
        </div>

        {/* QUORUMS */}
        <div className="flex flex-col p-[0.5rem] place-content-between">
          {/* QUORUM TYPE */}
          <div className="flex items-center place-content-between">
            <div className="flex items-center">
              <label
                className="text-white text-[0.875rem]"
                htmlFor="quorumValue"
              >
                Quorum
              </label>

              <label
                htmlFor="percentage"
                className="text-white text-[0.875rem] ml-1"
              >
                %
              </label>

              <input
                id="percentage"
                type="radio"
                name="quorumType"
                value="percentage"
                checked={formData.quorumType === "percentage"}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleFormData(e)
                }
              />

              <label
                htmlFor="number"
                className="text-white text-[0.875rem] ml-1"
              >
                #
              </label>

              <input
                id="number"
                type="radio"
                name="quorumType"
                value="number"
                checked={formData.quorumType === "number"}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleFormData(e)
                }
              />
            </div>
            <Tool tooltipText="Quorum required for a proposal to pass." />
          </div>

          {/* QUORUM VALUE */}
          <input
            id="quorumValue"
            type="text"
            placeholder="4"
            className={`border border-1 bg-transparent ${errors.quorumValue ? "border-red-500" : "border-[#818998]"} rounded-[6px] p-1`}
            name="quorumValue"
            value={formData.quorumValue}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleFormData(e)
            }
          />

          {errors.quorumValue && (
            <p className="text-sm text-red-500">{errors.quorumValue}</p>
          )}
        </div>

        {/* TOKEN DECIMALS */}
        <div className="flex flex-row items-center p-[0.5rem] place-content-between">
          <div className="flex items-center">
            <label
              htmlFor="tokenDecimals"
              className="text-white text-[0.875rem]"
            >
              Token decimals=
            </label>

            <input
              id="tokenDecimals"
              type="text"
              placeholder="18"
              className={`border border-1 bg-transparent border-[#818998] rounded-[6px] p-1 w-8 h-5 ${formData.votes === "ERC721Votes" ? "bg-[#bdaaec]" : ""}`}
              name="tokenDecimals"
              value={
                formData.votes === "ERC721Votes" ? "0" : formData.tokenDecimals
              }
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleFormData(e)
              }
            />
          </div>

          <Tool tooltipText="Token amounts above will be extended with this number of zeroes. Does not apply to ERC721Votes." />
        </div>

        {/* UPDATEABLE SETTINGS */}
        <div
          className={`p-2 flex items-center place-content-between ${formData.updatableSettings ? "bg-[#4D3C77]" : ""}`}
        >
          <label className="text-white flex items-center">
            <input
              type="checkbox"
              className="h-3 w-3 text-indigo-600 rounded mr-2"
              name="updatableSettings"
              checked={formData.updatableSettings}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleFormData(e)
              }
            />
            Updateable Settings
          </label>

          <Tool tooltipText="Allow governance to update voting settings (delay, period, proposal threshold)." />
        </div>

        {/* STORAGE */}
        <div
          className={`p-2 flex items-center place-content-between ${formData.storage ? "bg-[#4D3C77]" : ""}`}
        >
          <label className="text-white flex items-center">
            <input
              type="checkbox"
              className="form-checkbox h-3 w-3 text-indigo-600 rounded mr-2"
              id="storage"
              name="storage"
              checked={formData.storage}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleFormData(e)
              }
            />
            Storage
          </label>

          <Tool
            tooltipText="Enable storage of proposal details and enumerability of proposals."
            link="https://docs.openzeppelin.com/contracts/5.x/api/governance#GovernorStorage"
            linktext="Read more"
          />
        </div>
      </div>

      <hr className="my-4"></hr>

      {/* VOTES */}
      <div>
        <h1 className="text-white font-semibold text-xs">VOTES</h1>

        <div
          className={`p-2 flex items-center place-content-between ${formData.votes === "ERC20Votes" ? "bg-[#4D3C77]" : ""}`}
        >
          <label className="text-white flex items-center">
            <input
              type="radio"
              className="form-checkbox h-3 w-3 mr-2"
              name="votes"
              value="ERC20Votes"
              checked={formData.votes === "ERC20Votes"}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleFormData(e)
              }
            />
            ERC20Votes
          </label>

          <Tool
            tooltipText="Represent voting power with a votes-enabled ERC20 token. Voters can entrust their voting power to a delegate."
            link="https://docs.openzeppelin.com/contracts/5.x/api/token/erc20#ERC20Votes"
            linktext="Read more"
          />
        </div>

        <div
          className={`p-2 flex items-center place-content-between ${formData.votes === "ERC721Votes" ? "bg-[#4D3C77]" : ""}`}
        >
          <div>
            <label className="text-white flex items-center">
              <input
                type="radio"
                className="radio h-3 w-3 mr-2"
                name="votes"
                value="ERC721Votes"
                checked={formData.votes === "ERC721Votes"}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleFormData(e)
                }
              />
              ERC721Votes
            </label>
          </div>

          <Tool
            tooltipText="Represent voting power with a votes-enabled ERC721 token. Voters can entrust their voting power to a delegate."
            link="https://docs.openzeppelin.com/contracts/5.x/api/token/erc721#ERC721Votes"
            linktext="Read more"
          />
        </div>
      </div>

      <hr className="my-4"></hr>

      {/* TIMELOCK */}
      <div>
        {/* TIMELOCK VALUE */}
        <div className="flex items-center place-content-between mr-[0.5rem]">
          <label className="text-white font-semibold text-xs flex items-center gap-2">
            TIMELOCK
            <input
              type="checkbox"
              className="form-checkbox h-3 w-3 rounded text-indigo-600"
              id="timelockValue"
              name="timelockValue"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleFormData(e)
              }
              checked={formData.timelockValue}
            />
          </label>

          <Tool tooltipText="Add a delay to actions taken by the Governor. Gives users time to exit the system if they disagree with governance decisions." />
        </div>

        {/* TIMELOCK TYPE */}
        <div
          className={`p-2 flex items-center place-content-between ${formData.timelockType === "TimelockController" ? "bg-[#4D3C77]" : ""}`}
        >
          <label className="text-white flex items-center">
            <input
              type="radio"
              className="form-checkbox h-3 w-3 mr-2 text-indigo-600"
              name="timelockType"
              value="TimelockController"
              checked={formData.timelockType === "TimelockController"}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleFormData(e)
              }
            />
            TimeLock Controller
          </label>

          <Tool
            tooltipText="Module compatible with OpenZeppelin's TimelockController. Allows multiple proposers and executors, in addition to the Governor itself."
            link="https://docs.openzeppelin.com/contracts/5.x/api/governance#GovernorTimelockControl"
            linktext="Read more"
          />
        </div>

        <div
          className={`p-2 mb-0 flex items-center place-content-between ${formData.timelockType === "Compound" ? "bg-[#4D3C77]" : ""}`}
        >
          <label className="text-white flex items-center">
            <input
              type="radio"
              className="radio h-3 w-3 mr-2"
              name="timelockType"
              value="Compound"
              checked={formData.timelockType === "Compound"}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleFormData(e)
              }
            />
            Compound
          </label>

          <Tool
            tooltipText="Module compatible with Compound's Timelock contract. Useful if assets and roles are already held in this contract."
            link="https://github.com/compound-finance/compound-protocol/blob/master/contracts/Timelock"
            linktext="Read more"
          />
        </div>
      </div>

      <hr className="my-4"></hr>

      {/* UPGRADEABILITY */}
      <div>
        {/* UPGRADEABILITY VALUE */}
        <div className="flex items-center place-content-between mr-[0.5rem]">
          <label className="text-white font-semibold text-xs gap-2 flex items-center">
            UPGRADEABILITY
            <input
              type="checkbox"
              className="form-checkbox h-3 w-3 rounded text-indigo-600"
              id="upgradeabilityValue"
              name="upgradeabilityValue"
              checked={formData.upgradeabilityValue}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleFormData(e)
              }
            />
          </label>

          <Tool
            tooltipText="Smart contracts are immutable by default unless deployed behind an upgradeable proxy."
            link="https://docs.openzeppelin.com/upgrades"
            linktext="Read more"
          />
        </div>

        {/* UPGRADEABILITY TYPE */}
        <div
          className={`p-2 flex items-center place-content-between ${formData.upgradeabilityType === "Transparent" ? "bg-[#4D3C77]" : ""}`}
        >
          <label className="text-white flex items-center">
            <input
              type="radio"
              className="form-checkbox h-3 w-3 mr-2"
              name="upgradeabilityType"
              id="Transparent"
              checked={formData.upgradeabilityType === "Transparent"}
              value="Transparent"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleFormData(e)
              }
            />
            Transparent
          </label>

          <Tool
            tooltipText="Uses more complex proxy with higher overhead, requires less changes in your contract. Can also be used with beacons."
            link="https://docs.openzeppelin.com/contracts/5.x/api/proxy#TransparentUpgradeableProxy"
            linktext="Read more"
          />
        </div>

        <div
          className={`p-2 mb-0 flex items-center place-content-between ${formData.upgradeabilityType === "UUPS" ? "bg-[#4D3C77]" : ""}`}
        >
          <label className="text-white flex items-center">
            <input
              type="radio"
              className="radio h-3 w-3 mr-2"
              name="upgradeabilityType"
              checked={formData.upgradeabilityType === "UUPS"}
              value="UUPS"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleFormData(e)
              }
            />
            UUPS
          </label>

          <Tool
            tooltipText="Uses simpler proxy with less overhead, requires including extra code in your contract. Allows flexibility for authorizing upgrades."
            link="https://docs.openzeppelin.com/contracts/5.x/api/proxy#UUPSUpgradeable"
            linktext="Read more"
          />
        </div>
      </div>

      <hr className="my-4"></hr>

      <div>
        <h1 className="text-white font-semibold text-xs ">INFO</h1>
        {/* SECURITY CONTACT */}
        <div className="flex flex-col mt-[0.75rem]">
          <div className="flex items-center place-content-between">
            <label htmlFor="securityContact" className="text-white text-sm">
              Security Contact
            </label>
            <Tool
              tooltipText="Where people can contact you to report security issues. Will only be visible if contract metadata is verified."
              link="https://github.com/ethereum-lists/contracts/blob/main/README.md#tracking-new-deployments"
              linktext="Read more"
            />
          </div>

          <input
            id="securityContact"
            type="text"
            placeholder="security@example.com"
            className="border border-1 border-[#818998] rounded-[6px] p-1 bg-transparent"
            name="securityContact"
            value={formData.securityContact}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleFormData(e)
            }
          />
        </div>

        {/* LICENSE */}
        <label className="text-white text-sm flex flex-col my-3">
          License
          <input
            type="text"
            placeholder="MIT"
            className="border border-1 border-[#818998] rounded-[6px] p-1 bg-transparent"
            name="license"
            value={formData.license}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleFormData(e)
            }
          />
        </label>
      </div>
    </div>
  );
};