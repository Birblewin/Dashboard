"use client"

import Tool from "./Tool";

export default function Custom2() {
    return (
        <div className=" flex flex-col rounded-lg overflow-y-visible p-4 bg-white ">
          <h2 className="text-[#818998] font-semibold text-xs">SETTINGS</h2>
            <form className="flex flex-col">
                <label className="text-black mt-2 text-xs font-normal">Name</label>
                <input
                    type="text"
                    placeholder="MyContract"
                    className="mt-2 p-1 rounded border border-gray-300 text-black"
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
                    />
                    </div>
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
                    <Tool tooltipText="Tooltip Text Here" link='https://www.birbleai.com/' linktext='Read more'/>
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
                    <Tool tooltipText="Tooltip Text Here" link='https://www.birbleai.com/' linktext='Read more'/>
                </div>
            </div>
            <hr className="my-4" />
            <div>
                <div className=" flex">
                    <div className=" flex items-center">
                    <label className="text-[#818998] font-semibold text-xs mr-[0.5rem]">UPGRADEABILITY</label>
                    <input
                        title="upgradability"
                        type="checkbox"
                        className="form-checkbox h-3 w-3 rounded"

                    />
                    </div>
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
                    <Tool tooltipText="Tooltip Text Here" link='https://www.birbleai.com/' linktext='Read more'/>
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
                    <input  id="license" type="text" placeholder="MIT" className="border border-1 border-[#333333] rounded-[6px] p-1  text-black" />
                </div>
            </div>
        </div>

    );
}