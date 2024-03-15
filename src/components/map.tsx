"use client"
import React, { useState } from 'react';


const Map = ()=>{
    const svg = '/TagIcon.svg';
    const [isHovered, setIsHovered] = useState(false);
    return(
        
        <div className="w-[100vw] bg-cover bg-center  bg-[url('/background.png')] mix-blend-screen bg-scroll h-[450vh] "> 
            {/* Page one containing the header and page description*/}
            <div className="mx-auto w-[90%] items-center">
                <div className="flex lg:flex-row flex-col  h-[100vh] w-[100%] md:mt-0">
                    <div className="grid grid-rows-1 lg:justify-items-start lg:w-[60%] h-[50%] mx-auto">  
                        <div  className="grid lg:grid-cols-[8%_1fr] grid-cols-[10%_1fr] items-center mx-auto lg:pt-48">            
                            <p className="mr-1 font-bold lg:text-2xl text-xl m-0 p-0 animate-pulse rotate-180 from-purple-500 via-indigo-600 to-green-400 bg-clip-text text-transparent  [writing-mode:vertical-rl] bg-gradient-to-b  from-pink-500 from-26%  via-violet-500 via-25%  to-emerald-300 to-60%">OurStatus</p>
                            <div className="flex flex-col">
                                <h1 className="font-bold lg:text-8xl md:text-7xl text-6xl">RoadMap</h1>
                                <h2 className="font-normal text-xl md:text-2xl lg:text-5xl">Our MileStones</h2>
                            </div>
                        </div>    
                    </div>
    
                    <div className="mt-12 bg-white w-[2px] lg:block hidden block h-[90vh]"></div>

                    <div className="lg:relative mt-10 lg:w-[40%] lg:h-[100vh] w-[100%]">
                        <img src="/austronaut1.png" alt="austronaut"  className="lg:absolute lg:-left-12 lg:inline hidden w-[70%] h-[70%] z-10"/>
                        <div className="lg:mx-10 lg:bottom-16 lg:absolute w-[80%] mx-auto">
                            <p className="md:text-md mb-2 font-semibold text-md" >What Birble AI Development Roadmap</p>
                            <p className="text-xs font-light z-20 text-gray-400" >Explore our ongoing roadmap at Birble AI, where we’re committed to a journey of continuous innovation, marked by exciting milestones and enhancements that will shape the landscape of AI and Web3 technology for the novice to advanced user for personal or commercial use.Information within this Roadmap will be updated periodically in accordance with developmental updates.</p>
                        </div>
                    </div>
                </div>
            <div>
                
                <div className="pl-2 pt-0 text-[450px] font-bold text-white text-opacity-100 mix-blend-overlay text-center whitespace-nowrap hidden lg:block">2023</div>
                <div className='lg:flex lg:block hidden mt-[-750px]'>
                    <div className="pl-2 pt-0 text-[400px] font-bold text-white text-opacity-100 mix-blend-overlay text-center whitespace-nowrap hidden hidden lg:block lg:-translate-x-32 translate-y-[900px]">Q1</div>                            
                    <div><img src="/fighter-jet.png" alt="plane image" className=" hidden lg:inline z-[51] w-3/4 translate-y-64 lg:-translate-x-[35%]"/></div>
                </div>
                <div className="p-0 text-[300px] text-center font-bold text-white text-opacity-100 mix-blend-overlay  whitespace-nowrap block translate-y-32 lg:hidden mt-[-100px]">Q1</div>
                <div className="lg:gap-8">
                    <div className="flex mx-auto lg:flex-row flex-col lg:w-[80%]">
                        
                        <div className={`text-xs hover:p-2 transition-padding duartion-200 mx-auto lg:-translate-y-20 h-min z-10   hover:bg-opacity-70 hover:bg-gradient-to-br from-slate-800 to-slate-800/[0.2] rounded-[30px]  `}>
                            <div className='border-2 border-[#B793FF] transition-all duration-50 hover:border-slate-700  bg-opacity-40 hover:bg-opacity-70 bg-gradient-to-br from-slate-800 to-slate-800/[0.2] lg:w-[350px]  w-[300px]  rounded-[30px] px-10'>
                                <p  className="text-md mt-10 font-bold text-[#B793FF]">2023/Q1</p>
                                <h3 className="text-white font-bold text-lg">Initial Conception of Website and Dashboard Design</h3>
                                <div className="my-4 bg-[#2E0E6E] rounded-md w-[100%] h-[4px]"></div>
                                <div className="flex items-start">
                                    <img src={svg} alt="Your SVG"/>
                                    <div className="ml-2" >
                                        <p className="font-semibold text-white text-xs">Dashboard Architecture Design: </p>
                                        <p className="text-xs text-[#9094A6]" > Initiate the design and planning phase for the dashboard&apos;s architecture, ensuring scalability and user-friendly interface</p>
                                    </div>
                                </div>
                                <div className=" mt-2 flex items-start">
                                    <img src={svg} alt="Your SVG"/>
                                    <div className="ml-2">
                                        <p className="font-semibold">Framework Selection and Development Stack:</p> 
                                        <p className="text-xs text-[#9094A6]" >Select the appropriate development framework and technology stack based on scalability, security, and future enhancements for the dashboard</p>                           
                                    </div>
                                </div>
                                <div className=" mt-2 flex items-start">
                                    <img src={svg} alt="Your SVG"/>
                                    <p className="text-xs text-[#9094A6] ml-2" >Begin forming the basis of dashboard and business center</p>                           
                                </div>
                                <div className=" mt-2 flex items-start">
                                    <img src={svg} alt="Your SVG"/>
                                    <p className="text-xs text-[#9094A6] ml-2" >Begin architectural design fo Web3 center</p>                           
                                </div>
                                <div className=" mt-2 flex items-start">
                                    <img src={svg} alt="Your SVG"/>
                                    <p className="text-xs text-[#9094A6] ml-2" >Initial maps / architecture of database storage and retrieval</p>                           
                                </div>
                                <div className=" mt-2 flex items-start">
                                    <img src={svg} alt="Your SVG"/>
                                    <p className="text-xs text-[#9094A6] ml-2" >Initial set-up of sandbox environment & testing for feedback loop</p>                           
                                </div>
                                <div className="mt-2 flex items-start">
                                    <img src={svg} alt="Your SVG"/>
                                    <p className="text-xs text-[#9094A6] ml-2" >Initial set-up of sandbox environment & testing for feedback loop</p>                           
                                </div>
                                <div className=" mt-2 flex items-start">
                                    <img src={svg} alt="Your SVG"/>
                                    <div className="ml-2">
                                        <p className="font-semibold">User Research and Feedback Gathering: </p>
                                        <p className="text-xs text-[#9094A6]" >Conduct user research, surveys, and feedback collection to understand user needs and preferences for the dashboard&apos;s functionalities</p>
                                    </div>
                                </div>
                                <div className=" mt-2 mb-12 flex items-start">
                                    <img src={svg} alt="Your SVG"/>
                                    <div className="ml-2">
                                        <p className="font-semibold">Backend Development Kickoff: </p>
                                        <p className="text-xs text-[#9094A6]" >Begin the backend development work focusing on data management, storage solutions, and APIs necessary for the dashboard&apos;s functionalities</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-0 text-[300px] font-bold text-white text-opacity-100 mix-blend-overlay text-center whitespace-nowrap block translate-y-32 lg:hidden mt-[-100px]">Q2</div>
                        <div className="text-xs mt-10 mx-auto lg:translate-y-96  hover:p-2  backdrop-blur-sm h-min  z-10  rounded-[30px]  hover:bg-opacity-70 hover:bg-gradient-to-br from-slate-800 to-slate-800/[0.2]  " >
                            <div className='border-2 border-[#B793FF] transition-all duration-300 hover:border-slate-700  bg-opacity-40 hover:bg-opacity-70 bg-gradient-to-br from-slate-800 to-slate-800/[0.2] lg:w-[350px]  w-[300px] rounded-[30px] px-10'>
                                <p className="text-md mt-10 font-bold text-[#B793FF]">2023/Q2</p>
                                <h3 className="text-white font-bold text-lg" >Website and Dashboard Design</h3>
                                <div className="my-4 bg-[#2E0E6E] rounded-md w-[100%] h-[4px]"></div>
                                <div className=" mt-2 flex items-start">
                                    <img src={svg} alt="Your SVG"/>
                                    <div className="ml-2">
                                        <p className="font-semibold">Front End Prototyping and Wireframing:  </p>
                                        <p  className="text-xs text-[#9094A6]"> Start creating wireframes and prototypes for the dashboard&apos;s frontend, mapping out the user journey and interface elements</p>
                                    </div>
                                </div>
                                <div className=" mt-2 flex items-start">
                                    <img src={svg} alt="Your SVG"/>
                                    <div className="ml-2">
                                        <p className="font-semibold">Dashboard MVP Development: </p>
                                        <p  className="text-xs text-[#9094A6]">Develop a Minimum Viable Product (MVP) of the dashboard, including core features such as user authentication, basic data visualization, and navigation</p>                           
                                    </div>
                                </div>   
                                <div className=" mt-2 flex items-start">
                                    <img src={svg} alt="Your SVG"/>
                                    <div className="ml-2">
                                        <p className="font-semibold">Integration of Basic Features: </p>
                                        <p  className="text-xs text-[#9094A6]"> Integrate essential features into the MVP, including data input, basic AI generators, and initial user interaction functionalities</p>
                                    </div>
                                </div>
                                <div className="mt-2 mb-12 flex items-start">
                                    <img src={svg} alt="Your SVG"/>
                                    <div className="ml-2">
                                        <p className="font-semibold">Initial Testing and Iterations: </p>
                                        <p  className="text-xs text-[#9094A6] "> Conduct initial testing phases with internal teams or a select group of users to gather feedback and iterate on the MVP</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='lg:inline hidden lg:mt-[-200px] z-[60]'>
                        <div className="pl-2 pt-0 text-[400px] font-bold text-white text-opacity-100 mix-blend-overlay text-center whitespace-nowrap hidden hidden lg:block lg:translate-x-96">Q2</div>                            
                        <img src="/left-jet.png" alt="2023" className="translate-x-[80%] lg: z-[60]  w-[55%] "/>
                    </div>
                    <div className="p-0  text-[300px] font-bold text-white text-opacity-40 mix-blend-overlay text-center whitespace-nowrap block translate-y-32 lg:hidden mt-[-100px]">Q3</div>
                    <div className="flex mx-auto lg:mt-[-200px] lg:flex-row flex-col lg:translate-x-24 w-[80%]" >
                        
                        
                        <div className="card text-sm mt-10 mx-auto lg:-translate-y-20  hover:p-2  backdrop-blur-sm h-min   rounded-[30px]  hover:bg-opacity-70 hover:bg-gradient-to-br from-slate-800 to-slate-800/[0.2]  " >
                            <div className='border-2 border-[#B793FF] transition-all duration-300 hover:border-slate-700  bg-opacity-40 hover:bg-opacity-70 bg-gradient-to-br from-slate-800 to-slate-800/[0.2] lg:w-[350px]  w-[300px] rounded-[30px] px-10'>
                                <p className="text-md mt-10 font-bold text-[#B793FF]">2023/Q3</p>
                                <h3 className="text-white font-bold text-lg" >Sandbox to Production</h3>
                                <div className="my-4 bg-[#2E0E6E] rounded-md w-[100%] h-[4px]"></div>
                                <div className="flex items-start">
                                    <img src={svg} alt="Your SVG"/>
                                    <div className="ml-2">
                                        <p className="font-semibold">Refinement and Enhancement: </p>
                                        <p className="text-xs text-[#9094A6]" >Based on feedback from testing, refine and enhance the MVP, addressing usability issues and improving the overall user experience.</p>
                                    </div>
                                </div>
                                <div className="mt-2 flex items-start">
                                    <img src={svg} alt="Your SVG"/>
                                    <div className="ml-2">
                                        <p className="font-semibold">Security and Compliance Integration: </p>
                                        <p className="text-xs text-[#9094A6]" >Implement robust security measures and ensure compliance with data protection regulations in the dashboard&apos;s architecture and functionalities. </p>                           
                                    </div>
                                </div>
                                <div className="mt-2 flex items-start">
                                <img src={svg} alt="Your SVG"/>
                                    <p className="text-xs text-[#9094A6] ml-2">Begin converting AI dashboard from sandbox to production environment</p>                           
                                </div>
                                <div className="mt-2 flex items-start">
                                <img src={svg} alt="Your SVG"/>
                                    <p className="text-xs text-[#9094A6] ml-2">Begin development of testing of smart contracts </p>                           
                                </div>
                                <div className="mt-2 flex items-start">
                                <img src={svg} alt="Your SVG"/>
                                    <p className="text-xs text-[#9094A6] ml-2">Implementation of the new Birble AI website and dashboard with additional features</p>                           
                                </div>
                                <div className="mt-2 flex items-start">
                                <img src={svg} alt="Your SVG"/>
                                    <p className="text-xs text-[#9094A6] ml-2">Finalize deals with API providers in order to be able to include them our dashboard</p>                           
                                </div>
                                <div className="mt-2 flex items-start">
                                <img src={svg} alt="Your SVG"/>
                                    <p className="text-xs text-[#9094A6] ml-2">Redesign of crucial section of dashboard to increase user intuitiveness</p>                           
                                </div>
                                <div className="mt-2 flex items-start">
                                <img src={svg} alt="Your SVG"/>
                                    <p className="text-xs text-[#9094A6] ml-2">Launch Birble AI token on BSC and LOCK supply</p>                           
                                </div>
                                <div className="mt-2 flex items-start">
                                    <img src={svg} alt="Your SVG"/>
                                    <div className="ml-2">
                                        <p className="font-semibold">User Acceptance Testing {"(UAT)"}:</p>
                                        <p className="text-xs text-[#9094A6] ">Conduct thorough User Acceptance Testing to ensure the dashboard meets user requirements and expectations before the official soft  launch.</p>
                                    </div>
                                </div>
                                <div className="mt-2 flex items-start mb-12">
                                    <img src={svg} alt="Your SVG"/>
                                    <div className="ml-2">
                                        <p className="font-semibold">Documentation and Training Materials: </p>
                                        <p className="text-xs text-[#9094A6] ">Start developing comprehensive documentation and training materials to assist users in navigating and utilizing the dashboard effectively</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="p-0  text-center text-[300px] font-bold text-white text-opacity-40 mix-blend-overlay  whitespace-nowrap block translate-y-[1500px] lg:hidden mt-[-430px]">Q4</div>
                        <div className="card mx-auto mt-10 text-sm  lg:translate-y-96 hover:p-2  backdrop-blur-sm h-min  z-10  rounded-[30px]  hover:bg-opacity-70 hover:bg-gradient-to-br from-slate-800 to-slate-800/[0.2] " >
                            <div className='border-2 border-[#B793FF] transition-all duration-300 hover:border-slate-700  bg-opacity-40 hover:bg-opacity-70 bg-gradient-to-br from-slate-800 to-slate-800/[0.2] lg:w-[350px]  w-[300px] rounded-[30px] px-10'>                            
                                <p className="text-md mt-10 font-bold text-[#B793FF]">2023/Q3</p>
                                <h3 className="text-white font-bold text-lg">Feature Implementation</h3>
                                <div className="my-4 bg-[#2E0E6E] rounded-md w-[100%] h-[4px]"></div>
                                <div className="flex items-start">
                                    <img src={svg} alt="Your SVG"/>
                                    <p className="text-xs text-[#9094A6] ml-2" > Implementation of the new Birble AI website and dashboard with additional features</p>
                                </div>
                                <div className="mt-2 flex items-start">
                                    <img src={svg} alt="Your SVG"/>
                                    <p className="text-xs text-[#9094A6] ml-2" >Key features of the Birble AI dashboard are set to be ready for production</p>
                                </div>
                                <div className="mt-2 flex items-start">
                                    <img src={svg} alt="Your SVG"/>
                                    <p className="text-xs text-[#9094A6] ml-2" >Providing users with advanced capabilities beyond initial concept</p>
                                </div>
                                <div className="mt-2 flex items-start">
                                    <img src={svg} alt="Your SVG"/>
                                    <p className="text-xs text-[#9094A6] ml-2" >Begin collecting various datasets and start training our own models</p>
                                </div>
                                
                                <div className="mt-2 flex items-start">
                                    <img src={svg} alt="Your SVG"/>
                                    <div className="ml-2">
                                        <p className="font-semibold">Expand Feature Set: </p>
                                        <p className="text-xs text-[#9094A6] " > Introduce additional features and functionalities into the dashboard, such as personalized settings, advanced analytics, and expanded data visualization options.</p>
                                    </div>
                                </div>
                                <div className="mt-2 mb-12 flex items-start">
                                    <img src={svg} alt="Your SVG"/>
                                    <div className="ml-2">
                                        <p className="font-semibold">Scalability and Performance Optimization:</p> 
                                        <p className="text-xs text-[#9094A6]" >Focus on scalability and performance optimization to handle increased user traffic and data volumes as the dashboard gains traction.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="pl-2 pt-0 text-[400px] font-bold mt-[-600px] text-white text-opacity-30 mix-blend-overlay text-center whitespace-nowrap hidden hidden lg:block lg:-translate-x-96 translate-y-64">Q3</div>                           
                    <div className="grid lg:grid-cols-2 lg:grid-rows-2 lg:mt-64 flex flex-col lg:gap-10 lg:w-2/3 mx-auto z-[62]">
                            
                        <div className="mt-10 mx-auto card text-sm hover:p-2  backdrop-blur-sm h-min  z-10  rounded-[30px]  hover:bg-opacity-70 hover:bg-gradient-to-br from-slate-800 to-slate-800/[0.2] lg:-translate-y-40 lg:-translate-x-20" >
                            <div className='border-2 border-[#B793FF] transition-all duration-50 hover:border-slate-700  bg-opacity-40 hover:bg-opacity-70 bg-gradient-to-br from-slate-800 to-slate-800/[0.2] lg:w-[350px]  w-[300px]  rounded-[30px] px-10'>                            
                                <p className="text-md mt-10 font-bold text-[#B793FF]">2023/Q3</p>
                                <h3 className="text-white font-bold text-lg">Autonomous Agent Development</h3>
                                <div className="my-4 bg-[#2E0E6E] rounded-md w-[100%] h-[4px]"></div>
                                <div className="flex items-start">
                                    <img src={svg} alt="Your SVG"/>
                                    <p className="text-xs text-[#9094A6] ml-2" >Begin development of our autonomous agents to redefine efficiency, seamlessly handling tasks, generating diverse content, and streamlining operations within the dashboard. Ensuring each customer gets a personalized AI assistant tailored to their unique business needs. This agent will automates tasks, collects social analytics for targeted campaigns</p>
                                </div>
                                <div className="mt-2 flex items-start">
                                    <img src={svg} alt="Your SVG"/>
                                    <p className="text-xs text-[#9094A6] ml-2" >Implementation of the new Birble AI website and dashboard with additional features</p>
                                </div>
                                <div className="mt-2 mb-12 flex items-start">
                                    <img src={svg} alt="Your SVG"/>
                                    <p className="text-xs text-[#9094A6] ml-2" >Key features of the Birble AI dashboard are set to be ready for production</p>
                                </div>    
                            </div>   
                        </div>
                        
                        <div className="mt-52 lg:mt-10 mx-auto card text-sm h-min mx-auto hover:p-2  backdrop-blur-sm h-min  z-10  rounded-[30px]  hover:bg-opacity-70 hover:bg-gradient-to-br from-slate-800 to-slate-800/[0.2] lg:translate-y-60" >
                            <div className='border-2  border-[#B793FF] transition-all duration-50 hover:border-slate-700  bg-opacity-40 hover:bg-opacity-70 bg-gradient-to-br from-slate-800 to-slate-800/[0.2] lg:w-[350px]  w-[300px]  rounded-[30px] px-10'>                                                       
                                <p className="text-md mt-10 font-bold text-[#B793FF]">2023/Q4</p>
                                <h3 className="text-white font-bold text-lg">Blockchain Storage Intergration</h3>
                                <div className="my-4 bg-[#2E0E6E] rounded-md w-[100%] h-[4px]"></div>
                                <div className="flex items-start">
                                    <img src={svg} alt="Your SVG"/>
                                    <p className="text-xs text-[#9094A6] ml-2" >Start the transition to blockchain storage with SKALE node set up</p>
                                </div>
                                <div className="mt-2 mb-12 flex items-start">
                                    <img src={svg} alt="Your SVG"/>
                                    <p className="text-xs text-[#9094A6] ml-2" >Enhance data integrity and reduce costs overall of API usage</p>
                                </div>
                            </div>
                        </div>
                   
                    
                    
                        <div className="mt-10 mx-auto card text-sm hover:p-2  backdrop-blur-sm h-min  z-10  rounded-[30px]  hover:bg-opacity-70 hover:bg-gradient-to-br from-slate-800 to-slate-800/[0.2] " >
                            <div className=' border-2 border-[#B793FF] transition-all duration-50 hover:border-slate-700  bg-opacity-40 hover:bg-opacity-70 bg-gradient-to-br from-slate-800 to-slate-800/[0.2] lg:w-[350px]  w-[300px]  rounded-[30px] px-10'>                                                                                  
                                <p className="text-md mt-10 font-bold text-[#B793FF]">2023/Q4</p>
                                <h3 className="text-white font-bold text-lg">Intergration with SingularityNet</h3>
                                <div className="my-4 bg-[#2E0E6E] rounded-md w-[100%] h-[4px]"></div>
                                <div className="flex items-start">
                                    <img src={svg} alt="Your SVG"/>
                                    <p className="text-xs text-[#9094A6] ml-2" >The integration into the SingularityNet AI marketplace begins</p>
                                </div>
                                <div className="mt-2 mb-12 flex items-start">
                                    <img src={svg} alt="Your SVG"/>
                                    <p className="text-xs text-[#9094A6] ml-2" >Extending our reach by enabling the Birble AI dashboard to be available to a wider audience by exploring additional AI marketplaces</p>
                                </div>
                            </div>
                        </div>
                        <div className="pl-2 pt-0 text-[400px] font-bold text-white text-opacity-40 mix-blend-overlay text-center whitespace-nowrap hidden lg:block lg:-translate-y-64 lg:translate-x-32">Q4</div>
                    </div>

                    <div className='flex mx-auto lg:w-2/3 items-center'> 
                        <div className='w-[300px] hidden lg:block -translate-x-32'><img src="/white-satellite.png" loading="lazy"  alt="2023"  /></div>
                        <div className="mt-10 mx-auto card text-sm hover:p-2  backdrop-blur-sm h-min  z-10  rounded-[30px]  hover:bg-opacity-70 hover:bg-gradient-to-br from-slate-800 to-slate-800/[0.2] " >
                            <div className='border-2 border-[#B793FF] transition-all duration-50 hover:border-slate-700  bg-opacity-40 hover:bg-opacity-70 bg-gradient-to-br from-slate-800 to-slate-800/[0.2] lg:w-[350px]  w-[300px]  rounded-[30px] px-10'>                                                                                                          
                                <p className="text-md mt-10 font-bold text-[#B793FF]">2023/Q4</p>
                                <h3 className="text-white font-bold text-lg">Security and Enhancement Focus</h3>
                                <div className="my-4 bg-[#2E0E6E] rounded-md w-[100%] h-[4px]"></div>
                                <div className="flex items-start">
                                    <img src={svg} alt="Your SVG"/>
                                    <p className="text-xs text-[#9094A6] ml-2" >This period will be dedicated to enhancing security</p>
                                </div>
                                <div className="mt-2 flex items-start">
                                    <img src={svg} alt="Your SVG"/>
                                    <p className="text-xs text-[#9094A6] ml-2" >Improving overall user experience, including feedback implementation, bug fixes, and performance optimizations & preparing for soft launch in Q1 2024</p>
                                </div>
                                <div className="mt-2 flex items-start">
                                    <img src={svg} alt="Your SVG"/>
                                    <p className="text-xs text-[#9094A6] ml-2" >Begin implementation of ChainLink services smart contract</p>
                                </div>
                                <div className="mt-2 mb-12 flex items-start">
                                    <img src={svg} alt="Your SVG"/>
                                    <p className="text-xs text-[#9094A6] ml-2" >Continue testing and feedback loop to improve customer intuitiveness</p>
                                </div>
                            </div>    
                        </div>    
                    </div>
                    
                <div className="  lg:inline hidden "><img src="/forward-jet.png" alt="2023" loading="lazy" className="w-[60%]  lg:translate-x-[70%] lg:-translate-y-[100px]" /></div>
            </div>       
            </div>
        </div>
        <div className="bg-cover lg:mt-[-150px] bg-center h-max bg-[url('/bg2.png')]">
            <div>
                <div>
                    <div>
                        <div className="pl-2 pt-0 text-[450px] font-bold text-white text-opacity-100 mix-blend-overlay text-center whitespace-nowrap hidden lg:block">2024</div>
                        
                        
                        <div className="pt-0  text-[300px] font-bold text-white text-opacity-100 mix-blend-overlay text-center whitespace-nowrap block translate-y-32 lg:hidden ">Q1</div>                            
                        <div className='grid lg:grid-cols-3 lg:grid-rows-1 flex flex-col lg:mt-[-150px] w-[85%] mx-auto'>
                            <div className="card mt-10 text-sm mx-auto hover:p-2  backdrop-blur-sm h-min  z-10  rounded-[30px]  hover:bg-opacity-70 hover:bg-gradient-to-br from-slate-800 to-slate-800/[0.2] lg:-translate-y-24" >
                                <div className='border-2 border-[#B793FF] transition-all duration-50 hover:border-slate-700  bg-opacity-40 hover:bg-opacity-70 bg-gradient-to-br from-slate-800 to-slate-800/[0.2] lg:w-[350px]  w-[300px]  rounded-[30px] px-10'>                                                                                                                                      
                                    <p className="text-md mt-10 font-bold text-[#B793FF]">2024/Q1</p>
                                    <h3 className="text-white font-bold text-lg">Features and Updates</h3>
                                    <div className="my-4 bg-[#2E0E6E] rounded-md w-[100%] h-[4px]"></div>
                                    <div className="flex items-start">
                                        <img src={svg} alt="Your SVG"/>
                                        <p className="text-xs text-[#9094A6] ml-2" >The development of the Birble AI dashboard&apos;s key features is finalized</p>
                                    </div>
                                    <div className="flex mt-2 items-start">
                                        <img src={svg} alt="Your SVG"/>
                                        <p className="text-xs text-[#9094A6] ml-2" >Soft launch of initial dashboard generators to select user base</p>                           
                                    </div>
                                    <div className="flex mt-2 items-start">
                                    <   img src={svg} alt="Your SVG"/>
                                        <p className="text-xs text-[#9094A6] ml-2">Token sale begins for the Birble AI ecosystem Tokens</p>                           
                                    </div>
                                    <div className="flex mt-2 items-start">
                                        <img src={svg} alt="Your SVG"/>
                                        <p className="text-xs text-[#9094A6] ml-2" >Text to Speech generator design / coding begins</p>                           
                                    </div>
                                    <div className="flex mt-2 items-start">
                                        <img src={svg} alt="Your SVG"/>
                                        <p className="text-xs text-[#9094A6] ml-2" >Launch initial ad campaigns with associated KOL’s</p>                           
                                    </div>
                                    <div className="flex mt-2 items-start">
                                        <img src={svg} alt="Your SVG"/>
                                        <p className="text-xs text-[#9094A6] ml-2" >Optimisation of Text to Video models</p>                           
                                    </div>
                                    <div className="flex mt-2 items-start">
                                        <img src={svg} alt="Your SVG"/>
                                        <p className="text-xs text-[#9094A6] ml-2" >Initial liquidity added and locked for 2 years on Pancakeswap</p>                           
                                    </div>
                                    <div className="flex mt-2 items-start">
                                        <img src={svg} alt="Your SVG"/>
                                        <p className="text-xs text-[#9094A6] ml-2" >1st air-drop of the Birble AI token through social media campaigns</p>                           
                                    </div>
                                    <div className="flex mt-2 mb-12 items-start">
                                        <img src={svg} alt="Your SVG"/>
                                        <p className="text-xs text-[#9094A6] ml-2" >Start incorporation process and trademark applications</p>                           
                                    </div>
                                </div>    
                            </div>
                            <img src="/bot.png" alt="2023" loading="lazy" width={450} className='hidden lg:block -translate-y-48'/>
                            <div className="card mt-10 text-sm  mx-auto hover:p-2  backdrop-blur-sm h-min  z-10  rounded-[30px]  hover:bg-opacity-70 hover:bg-gradient-to-br from-slate-800 to-slate-800/[0.2] lg:translate-y-32" >
                                <div className='border-2 border-[#B793FF] transition-all duration-50 hover:border-slate-700  bg-opacity-40 hover:bg-opacity-70 bg-gradient-to-br from-slate-800 to-slate-800/[0.2] lg:w-[350px]  w-[300px]  rounded-[30px] px-10'>                                                                                                          
                                    <p className="text-md mt-10 font-bold text-[#B793FF]">2024/Q1</p>
                                    <h3 className="text-white font-bold text-lg">Autonomous Agent Implementation And Testing</h3>
                                    <div className="my-4 bg-[#2E0E6E] rounded-md w-[100%] h-[4px]"></div>
                                    <div className="flex items-start">
                                        <img src={svg} alt="Your SVG"/>
                                        <p className="text-xs text-[#9094A6] ml-2" >Begin testing the autonomous agent V1 and integration into the dashboard</p>
                                    </div>
                                    <div className="flex mt-2 mt-2 items-start">
                                        <img src={svg} alt="Your SVG"/>
                                        <p className="text-xs text-[#9094A6] ml-2" >Begin testing the autonomous agent V1 and integration into the dashboard</p>                           
                                    </div>
                                    <div className="flex mt-2 mt-2 items-start">
                                        <img src={svg} alt="Your SVG"/>
                                        <p className="text-xs text-[#9094A6] ml-2" >During the selective launch of our AI assistant, we will meticulously test its functionalities and gather invaluable feedback. This phase will allow Birble AI to refine and enhance its capabilities based on real-world usage, ensuring it&apos;s finely tuned to meet the diverse needs of our users. The feedback loop is instrumental in shaping the AI assistant</p>                           
                                    </div>
                                    <div className="flex mt-2 mb-12 items-start">
                                        <img src={svg} alt="Your SVG"/>
                                        <p className="text-xs text-[#9094A6] ml-2" >Enhancing automation and analytics capabilities to be incorporated into dashboard back end</p>                           
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='grid lg:grid-cols-2 lg:grid-rows-1 hidden lg:block lg:mt-[-350px]'>
                            <div className="pl-2 pt-0 text-[400px] font-bold text-white text-opacity-100 mix-blend-overlay text-center whitespace-nowrap hidden lg:block -translate-x-[450px]">Q1</div>
                            <img src="/slim-jet.png" alt="2023" loading="lazy" width={700} className='ml-auto -translate-y-52' />
                        </div>
                        <div className='grid lg:grid-cols-2 lg:grid-rows-2 flex flex-col mx-auto lg:w-[70%] lg:mt-[-250px] mx-auto'>
                            <div className="mt-10 card text-sm mx-auto hover:p-2  backdrop-blur-sm h-min  z-10  rounded-[30px]  hover:bg-opacity-70 hover:bg-gradient-to-br from-slate-800 to-slate-800/[0.2] lg:-translate-x-12 lg:-translate-y-20" >
                                <div className='border-2 border-[#B793FF] transition-all duration-50 hover:border-slate-700  bg-opacity-40 hover:bg-opacity-70 bg-gradient-to-br from-slate-800 to-slate-800/[0.2] lg:w-[350px]  w-[300px]  rounded-[30px] px-10'>                                                                                                                                      
                                    <p className="text-md mt-10 font-bold text-[#B793FF]">2024/Q1</p>
                                    <h3 className="text-white font-bold text-lg">Blockchain Hosting for AI Models</h3>
                                    <div className="my-4 bg-[#2E0E6E] rounded-md w-[100%] h-[4px]"></div>
                                    <div className="flex items-start">
                                        <img src={svg} alt="Your SVG"/>
                                        <p className="text-xs text-[#9094A6] ml-2" >Training of our own models for production / commercial level</p>
                                    </div>
                                    <div className="flex mt-2 items-start">
                                        <img src={svg} alt="Your SVG"/>
                                        <p className="text-xs text-[#9094A6] ml-2" >Begin planning of hosting our own AI models with SKALE on our node and side chain</p>                           
                                    </div>
                                    <div className="flex mt-2 mb-12 items-start">
                                        <img src={svg} alt="Your SVG"/>
                                        <p className="text-xs text-[#9094A6] ml-2" >Begin planning the monetization of SKALE hosted AI model infrastructure</p>                           
                                    </div>
                                </div>
                            </div>
                            <div className="mt-10 card text-sm mx-auto hover:p-2  backdrop-blur-sm h-min  z-10  rounded-[30px]  hover:bg-opacity-70 hover:bg-gradient-to-br from-slate-800 to-slate-800/[0.2] lg:translate-y-20" >
                                <div className='border-2 border-[#B793FF] transition-all duration-50 hover:border-slate-700  bg-opacity-40 hover:bg-opacity-70 bg-gradient-to-br from-slate-800 to-slate-800/[0.2] lg:w-[350px]  w-[300px]  rounded-[30px] px-10'>                                                                                                                                      
                                    <p className="text-md mt-10 font-bold text-[#B793FF]">2024/Q1</p>
                                    <h3 className="text-white font-bold text-lg">Integration with SingularityNet & Launch of Business & Web3 Center</h3>
                                    <div className="my-4 bg-[#2E0E6E] rounded-md w-[100%] h-[4px]"></div>
                                    <div className="flex items-start">
                                        <img src={svg} alt="Your SVG"/>
                                        <p className="text-xs text-[#9094A6] ml-2" >The integration with the SingularityNet AI marketplace begins</p>
                                    </div>
                                    <div className="flex mt-2 items-start">
                                        <img src={svg} alt="Your SVG"/>
                                        <p className="text-xs text-[#9094A6] ml-2" >Offering users access to a broad range of AI capabilities within the Business Center & Web3 Center (limited select users only)</p>                           
                                    </div>
                                    <div className="flex mt-2 items-start">
                                        <img src={svg} alt="Your SVG"/>
                                        <p className="text-xs text-[#9094A6] ml-2" >Business Center “One Click” operation rolled out to select user base</p>                           
                                    </div>
                                    <div className="flex mt-2 items-start">
                                        <img src={svg} alt="Your SVG"/>
                                        <p className="text-xs text-[#9094A6] ml-2" > Web3 Collections creation & blockchain deployment to multiple chains rolled out to select user base</p>                           
                                    </div>
                                    <div className="flex mt-2 mb-12 items-start">
                                        <img src={svg} alt="Your SVG"/>
                                        <p className="text-xs text-[#9094A6] ml-2" >Start development of cross chain pairing on Cardano utilizing the SingularityNet bridge and technology</p>                           
                                    </div>
                                </div>
                            </div>
                            <div className="card mt-10 text-sm mx-auto hover:p-2  backdrop-blur-sm h-min  z-10  rounded-[30px]  hover:bg-opacity-70 hover:bg-gradient-to-br from-slate-800 to-slate-800/[0.2] lg:-translate-y-20" >
                                <div className='border-2 border-[#B793FF] transition-all duration-50 hover:border-slate-700  bg-opacity-40 hover:bg-opacity-70 bg-gradient-to-br from-slate-800 to-slate-800/[0.2] lg:w-[350px]  w-[300px]  rounded-[30px] px-10'>                                                                                                                                      
                                    <p className="text-md mt-10 font-bold text-[#B793FF]">2024/Q1</p>
                                    <h3 className="text-white font-bold text-lg">Continuous Security and Enhancement</h3>
                                    <div className="my-4 bg-[#2E0E6E] rounded-md w-[100%] h-[4px]"></div>
                                    <div className="flex items-start">
                                        <img src={svg} alt="Your SVG"/>
                                        <p className="text-xs text-[#9094A6] ml-2" >Ongoing efforts to enhance security</p>
                                    </div>
                                    <div className="flex mt-2 items-start">
                                        <img src={svg} alt="Your SVG"/>
                                        <p className="text-xs text-[#9094A6] ml-2" >Improve the overall quality of the dashboard to provide the best possible experience for our users (UI updates & generator optimisation) </p>                           
                                    </div>
                                    <div className="flex mt-2 items-start">
                                        <img src={svg} alt="Your SVG"/>
                                        <p className="text-xs text-[#9094A6] ml-2">Launch ChainLink Raffle for rewarding users of the Birble AI platform</p>                           
                                    </div>
                                    <div className="flex mt-2 mb-12 items-start">
                                        <img src={svg} alt="Your SVG"/>
                                        <p className="text-xs text-[#9094A6] ml-2">Begin initial airdrop of Birble AI Token through active social media campaigns</p>                           
                                    </div>
                                </div>
                            </div>
                        
                            <div className="mt-10 card text-sm  mx-auto hover:p-2  backdrop-blur-sm h-min  z-10  rounded-[30px]  hover:bg-opacity-70 hover:bg-gradient-to-br from-slate-800 to-slate-800/[0.2] lg:translate-y-48" >
                                <div className='border-2 border-[#B793FF] transition-all duration-50 hover:border-slate-700  bg-opacity-40 hover:bg-opacity-70 bg-gradient-to-br from-slate-800 to-slate-800/[0.2] lg:w-[350px]  w-[300px]  rounded-[30px] px-10'>                                                                                                                                     
                                    <p className="text-md mt-10 font-bold text-[#B793FF]">2024/Q1</p>
                                    <h3 className="text-white font-bold text-lg">Staking of the Birble AI Token</h3>
                                    <div className="my-4 bg-[#2E0E6E] rounded-md w-[100%] h-[4px]"></div>
                                    <div className="flex items-start">
                                        <img src={svg} alt="Your SVG"/>
                                        <p className="text-xs text-[#9094A6] ml-2">The staking dashboard will go live after thorough testing (possible overlap into Q2)</p>
                                    </div>
                                    <div className="flex mt-2 mb-12 items-start">
                                        <img src={svg} alt="Your SVG"/>
                                        <p className="text-xs text-[#9094A6] ml-2">Correlate Birble AI stakers with associated privileges within the dashboard</p>                           
                                    </div>
                                </div>    
                            </div>
                        </div>
                        <div className='lg:block hidden lg:flex '>
                            <div className='translate-x-32 z-[60]'><img src="/jet1.png" alt="2023" loading="lazy" className='w-[120%] '/></div>
                            <div className="pl-2 pt-0 text-[400px] font-bold text-white text-opacity-100 mix-blend-overlay text-center whitespace-nowrap hidden lg:block">Q2</div>                           
                        </div>
                        
                          
                    </div>
                    <div className="pt-0  text-[300px] font-bold text-white text-opacity-100 mix-blend-overlay text-center whitespace-nowrap block translate-y-32 lg:hidden ">Q2</div>
                    <div className="flex lg:flex-row flex-col lg:w-[70%] mx-auto">    
                        <div className="mt-10 card text-sm mx-auto hover:p-2  backdrop-blur-sm h-min  z-10  rounded-[30px]  hover:bg-opacity-70 hover:bg-gradient-to-br from-slate-800 to-slate-800/[0.2]" >
                            <div className='border-2 border-[#B793FF] transition-all duration-50 hover:border-slate-700  bg-opacity-40 hover:bg-opacity-70 bg-gradient-to-br from-slate-800 to-slate-800/[0.2] lg:w-[350px]  w-[300px]  rounded-[30px] px-10'>                                                                                                                                                                  
                                <p className="text-md mt-10 font-bold text-[#B793FF]">2024/Q2</p>
                                <h3 className="text-white font-bold text-lg">Release of Token From Private Presale & Feature Update</h3>
                                <div className="my-4 bg-[#2E0E6E] rounded-md w-[100%] h-[4px]"></div>
                                <div className="flex items-start">
                                    <img src={svg} alt="Your SVG"/>
                                    <p className="text-xs text-[#9094A6] ml-2" >The tokens purchased during the private presell will be released to holders</p>
                                </div>
                                <div className="flex mt-2 items-start">
                                    <img src={svg} alt="Your SVG"/>
                                    <p className="text-xs text-[#9094A6] ml-2" >Liquidity stabilization and buyback of the Birble AI token</p>
                                </div>
                                <div className="flex mt-2 items-start">
                                    <img src={svg} alt="Your SVG"/>
                                    <p className="text-xs text-[#9094A6] ml-2" >Roll out of Campaign generators with integrated analytics to select user base for testing and feedback loop {'(utilization of student testers)'}</p>
                                </div>
                                <div className="flex mt-2 items-start">
                                    <img src={svg} alt="Your SVG"/>
                                    <p className="text-xs text-[#9094A6] ml-2" >DAO created from Birble Token holders who are staking</p>
                                </div>
                                <div className="flex items-start mt-2">
                                    <img src={svg} alt="Your SVG"/>
                                    <div className="ml-2">
                                        <p className="font-semibold">AI Integration and Automation: </p>
                                        <p className="text-xs text-[#9094A6]" >Implement AI-driven autonomous agent for collection creation, data analysis, predictive modeling, and personalized recommendations for campaigns within the dashboard.</p>                           
                                    </div>
                                </div>
                                <div className="flex mt-2 items-start">
                                    <img src={svg} alt="Your SVG"/>
                                    <p className="text-xs text-[#9094A6] ml-2" >Incorporate Editing Canvas in dashboard for Image & Video & music</p>
                                </div>
                                <div className="flex mt-2 mb-12 items-start">
                                    <img src={svg} alt="Your SVG"/>
                                    <p className="text-xs text-[#9094A6] ml-2" >Explore partnerships for Tokenization of Assets with NFTs for end users</p>
                                </div>
                            </div>         
                        </div>
                        <div className="mt-10 card text-sm mx-auto hover:p-2  backdrop-blur-sm h-min  z-10  rounded-[30px]  hover:bg-opacity-70 hover:bg-gradient-to-br from-slate-800 to-slate-800/[0.2] lg:-translate-y-96" >
                            <div className='border-2 border-[#B793FF] transition-all duration-50 hover:border-slate-700  bg-opacity-40 hover:bg-opacity-70 bg-gradient-to-br from-slate-800 to-slate-800/[0.2] lg:w-[350px]  w-[300px]  rounded-[30px] px-10'>                                                                                                                                                                  
                                <p className="text-md mt-10 font-bold text-[#B793FF]">2024/Q2</p>
                                <h3 className="text-white font-bold text-lg">Storage Transition & SKALE Intergration</h3>
                                <div className="my-4 bg-[#2E0E6E] rounded-md w-[100%] h-[4px]"></div>
                                <div className="flex items-start">
                                    <img src={svg} alt="Your SVG"/>
                                    <div className="ml-2">
                                        <p className="font-semibold">Transitioning to SKALE Blockchain: </p>
                                        <p className="text-xs text-[#9094A6]" >Our shift to SKALE blockchain marks a pivotal moment in our journey. This move opens doors to unprecedented potential, enabling us not only to store data but to revolutionize its accessibility, security, and efficiency.</p>
                                    </div>
                                </div>
                                <div className="mt-2 flex items-start">
                                    <img src={svg} alt="Your SVG"/>
                                    <div className="ml-2">
                                        <p className="font-semibold">Running Nodes with Monetization: </p>
                                        <p className="text-xs text-[#9094A6]" >With the SKALE blockchain, Birble AI will start running nodes with monetization opportunities. This step forward positions us with additional revenue streams</p>                           
                                    </div>
                                </div>
                                <div className="mt-2 flex items-start">
                                    <img src={svg} alt="Your SVG"/>
                                    <div className="ml-2">
                                        <p className="font-semibold">Hosting LLMs and Models: </p>
                                        <p className="text-xs text-[#9094A6]" >Start hosting our proprietary LLMs (Language Learning Models) and other cutting-edge algorithms. By leveraging this technology, we significantly reduce costs while ensuring unparalleled stability and reliability</p>
                                    </div>
                                </div>
                                <div className="mt-2 flex items-start">
                                    <img src={svg} alt="Your SVG"/>
                                    <div className="ml-2">
                                        <p className="font-semibold">Reduced Costs, Increased Stability: </p>
                                        <p className="text-xs text-[#9094A6]" >By migrating our operations to the SKALE blockchain, Birble AI is streamlining processes, reducing overheads, and bolstering stability in order to optimize our resources for enhanced performance</p>
                                    </div>
                                </div>
                                <div className="mt-2 mb-12 flex items-start">
                                    <img src={svg} alt="Your SVG"/>
                                    <div className="ml-2">
                                        <p className="sont-semibold">Customer trained AI models: </p>
                                        <p className="text-xs text-[#9094A6]" >Begin select testing of customer accumulated data sets and model training Begin integration and initial set up for hosting customer trained models</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className='lg:flex hidden lg:block lg:mt-[-180px]'>
                        <div className="pl-2 pt-0 text-[400px] font-bold text-white text-opacity-100 mix-blend-overlay text-center whitespace-nowrap hidden lg:block lg:-translate-x-40 hidden lg:block ">Q3</div>                           
                        <div className='w-[550px] lg:-translate-y-40'><img src="/sideways-jet.png" loading="lazy" alt="2023"  /></div>
                    </div>
                    <div className="pt-0  text-[300px] font-bold text-white text-opacity-100 mix-blend-overlay text-center whitespace-nowrap block translate-y-32 lg:hidden ">Q3</div>
                    <div  className="flex flex-col lg:flex-row lg:w-[70%] mx-auto lg:mt-[-150px]">
                        <div className="mt-10 card  text-sm mx-auto hover:p-2  backdrop-blur-sm h-min  z-10  rounded-[30px]  hover:bg-opacity-70 hover:bg-gradient-to-br from-slate-800 to-slate-800/[0.2] lg:-translate-y-48" >
                        <div className='border-2 border-[#B793FF] transition-all duration-50 hover:border-slate-700  bg-opacity-40 hover:bg-opacity-70 bg-gradient-to-br from-slate-800 to-slate-800/[0.2] lg:w-[350px]  w-[300px]  rounded-[30px] px-10'>                                                                                                                                                                                             
                                <p className="text-md mt-10 font-bold text-[#B793FF]">2024/Q3</p>
                                <h3 className="text-white font-bold text-lg">Continued Enhancements & Feature Update</h3>
                                <div className="my-4 bg-[#2E0E6E] rounded-md w-[100%] h-[4px]"></div>
                                <div className="flex items-start">
                                    <img src={svg} alt="Your SVG"/>
                                    <div className="ml-2">
                                        <p className="font-semibold">Performance Enhancement: </p>
                                        <p className="text-xs text-[#9094A6]" >Conduct rigorous performance testing and optimization to ensure the dashboard operates seamlessly even under increased user loads.</p>
                                    </div>
                                </div>
                                <div className="mt-2 flex items-start">
                                    <img src={svg} alt="Your SVG"/>
                                    <div className="ml-2">
                                        <p className="font-semibold">Advanced Analytics and Reporting: </p>
                                        <p className="text-xs text-[#9094A6]" >Introduce advanced analytics features, allowing users to generate in-depth reports, analyze trends, and gain deeper insights from data.</p>
                                    </div>
                                </div>
                                <div className="mt-2 flex items-start">
                                    <img src={svg} alt="Your SVG"/>
                                    <div className="ml-2">
                                        <p className="font-semibold">User Feedback Integration: </p>
                                        <p className="text-xs text-[#9094A6]" >Continue gathering user feedback to implement iterative improvements and address any usability issues or feature requests.</p>
                                    </div>
                                </div>
                                <div className="mt-2 flex items-start">
                                    <img src={svg} alt="Your SVG"/>
                                    <div className="ml-2">
                                        <p className="font-semibold">Enhanced Security Measures: </p>
                                        <p className="text-xs text-[#9094A6]" >Strengthen security protocols, conduct vulnerability assessments, and implement additional security measures to safeguard user data.</p>
                                    </div>
                                </div>
                                <div className="mt-2 flex items-start">
                                    <img src={svg} alt="Your SVG"/>
                                    <div className="ml-2">
                                        <p className="sont-semibold">Integration of New Data Sources: </p>
                                        <p className="text-xs text-[#9094A6]" >Expand the dashboard&apos;s capabilities by integrating with additional data sources or APIs to offer more comprehensive data analysis.</p>
                                    </div>
                                </div>
                                <div className="mt-2 mb-12 flex items-start">
                                    <img src={svg} alt="Your SVG"/>
                                    <div className="ml-2">
                                        <p className="font-semibold">AI Integration and Automation: </p>
                                        <p className="text-xs text-[#9094A6]" >Implement an updated AI-driven agent and features for data analysis, predictive modeling, or personalized recommendations within the admin dashboard.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-10 card  text-sm mx-auto hover:p-2  backdrop-blur-sm h-min  z-10  rounded-[30px]  hover:bg-opacity-70 hover:bg-gradient-to-br from-slate-800 to-slate-800/[0.2] " >
                            <div className='border-2 border-[#B793FF] transition-all duration-50 hover:border-slate-700  bg-opacity-40 hover:bg-opacity-70 bg-gradient-to-br from-slate-800 to-slate-800/[0.2] lg:w-[350px]  w-[300px]  rounded-[30px] px-10'>                                                                                                                                                                                             
                                <p className="text-md mt-10 font-bold text-[#B793FF]">2024/Q3</p>
                                <h3 className="text-white font-bold text-lg">Ecosystem & Feature Update</h3>
                                <div className="my-4 bg-[#2E0E6E] rounded-md w-[100%] h-[4px]"></div>
                                <div className="flex items-start">
                                    <img src={svg} alt="Your SVG"/>
                                    <div className="ml-2">
                                        <p className="font-semibold">Token Unlocks: </p>
                                        <p className="text-xs text-[#9094A6]" >Some tokens will be unlocked during this quarter, refer to the Token Vesting documentation for vesting schedule and locker links</p>
                                    </div>
                                </div>
                                <div className="mt-2 flex items-start">
                                    <img src={svg} alt="Your SVG"/>
                                    <div className="ml-2">
                                        <p className="font-semibold">Social Campaigns: </p>
                                        <p className="text-xs text-[#9094A6]" > Birble AI will increase the social media campaigns that are run in cooperation with our partner and contracted KOL’s</p>
                                    </div>
                                </div>
                                <div className="mt-2 flex items-start">
                                    <img src={svg} alt="Your SVG"/>
                                    <div className="ml-2">
                                        <p className="font-semibold">Cooperative campaigns: </p>
                                        <p className="text-xs text-[#9094A6]" >Main net pools for cooperative campaigns up and running for a select user base along with partner KOL’s verified and registered in order to be able to fulfill the request on our platform for “proposals”</p>
                                    </div>
                                </div>
                                <div className="mt-2 flex items-start">
                                    <img src={svg} alt="Your SVG"/>
                                    <div className="ml-2">
                                        <p className="font-semibold">Additional LP Pairs: </p>
                                        <p className="text-xs text-[#9094A6]" >More liquidity pairs will be established on various leading DEX’s along with liquidity will be locked for standard time, check Token Vesting documentation</p>
                                    </div>
                                </div>
                                <div className="mt-2 flex items-start">
                                    <img src={svg} alt="Your SVG"/>
                                    <div className="ml-2">
                                        <p className="font-semibold">Expanded Partnerships: </p>
                                        <p className="text-xs text-[#9094A6]" >Continued development of partner relationships</p>
                                    </div>
                                </div>
                                <div className="mt-2 mb-12 flex items-start">
                                    <img src={svg} alt="Your SVG"/>
                                    <div className="ml-2">
                                        <p className="font-semibold">Additional Blockchains: </p>
                                        <p className="text-xs text-[#9094A6]" > Ongoing development of integrating new blockchains into the Birble AI Web3 Center and “One Click Deployment”</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pt-0  text-[300px] font-bold text-white text-opacity-100 mix-blend-overlay text-center whitespace-nowrap block translate-y-32 lg:hidden ">Q4</div>
                    <div  className="grid lg:grid-cols-2 lg:grid-cols-2 flex  flex-col gap-10 lg:w-2/3 mx-auto ">
                        <img src="/sat.png" alt="2023" loading="lazy" width={500} className='lg:block hidden lg:-translate-y-40'/>
                        <div className="mt-10 card text-sm mx-auto hover:p-2  backdrop-blur-sm h-min  z-10  rounded-[30px]  hover:bg-opacity-70 hover:bg-gradient-to-br from-slate-800 to-slate-800/[0.2] lg:translate-y-40" >
                            <div className='border-2 border-[#B793FF] transition-all duration-50 hover:border-slate-700  bg-opacity-40 hover:bg-opacity-70 bg-gradient-to-br from-slate-800 to-slate-800/[0.2] lg:w-[350px]  w-[300px]  rounded-[30px] px-10'>                                                                                                                                                                                              
                                <p className="text-md mt-10 font-bold text-[#B793FF]">2024/Q4</p>
                                <h3 className="text-white font-bold text-lg">Ongoing Developments & Feature Update</h3>
                                <div className="my-4 bg-[#2E0E6E] rounded-md w-[100%] h-[4px]"></div>
                                <div className="flex items-start">
                                    <img src={svg} alt="Your SVG"/>
                                    <div className="ml-2">
                                        <p className="font-semibold">Customization and Personalization: </p>
                                        <p className="text-xs text-[#9094A6]" >Enable users to customize their dashboard experience, including layout options, data visualization preferences, and personalized dashboards.</p>
                                    </div>
                                </div>
                                <div className="mt-2 flex items-start">
                                    <img src={svg} alt="Your SVG"/>
                                    <div className="ml-2">
                                        <p className="font-semibold">Collaboration Features: </p>
                                        <p className="text-xs text-[#9094A6]" > Introduce collaboration tools & features that facilitate teamwork, data sharing, and collaborative analysis within the dashboard.</p>
                                    </div>
                                </div>
                                <div className="mt-2 flex items-start">
                                    <img src={svg} alt="Your SVG"/>
                                    <div className="ml-2">
                                        <p className="font-semibold">Advanced User Support: </p>
                                        <p className="text-xs text-[#9094A6]" > Enhance customer support by integrating our own proprietary live chat, AI-driven support features, &  additional support resources directly into the dashboard.</p>
                                    </div>
                                </div>
                                <div className="mt-2 flex items-start">
                                    <img src={svg} alt="Your SVG"/>
                                    <div className="ml-2">
                                        <p className="font-semibold">Mobile Optimization or App Development: </p>
                                        <p className="text-xs text-[#9094A6]" >Focus on optimizing the dashboard for mobile devices &  developing dedicated mobile applications for seamless access.</p>
                                    </div>
                                </div>
                                <div className="mt-2 flex items-start">
                                    <img src={svg} alt="Your SVG"/>
                                    <div className="ml-2">
                                        <p className="font-semibold">Regulatory Compliance Updates: </p>
                                        <p className="text-xs text-[#9094A6]" >Ensure ongoing compliance with updated regulations, especially regarding data privacy and security standards.</p>
                                    </div>
                                </div>
                                <div className="mt-2 flex items-start">
                                    <img src={svg} alt="Your SVG"/>
                                    <div className="ml-2">
                                        <p className="font-semibold">AI Model Deployment: </p>
                                        <p className="text-xs text-[#9094A6]" style={{color: "#9094A6"}}> Deploy additional AI models & functionalities within the dashboard for improved data interpretation and decision-making.</p>
                                    </div>
                                </div>
                                <div className="mt-2 mb-12 flex items-start">
                                    <img src={svg} alt="Your SVG"/>
                                    <div className="ml-2">
                                        <p className="font-semibold"> Roadmap for Future Development: </p>
                                        <p className="text-xs text-[#9094A6]">Outline & publish the roadmap for future updates, expansions, and innovations beyond 2024 to maintain the dashboards relevance and competitiveness.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="mt-10 card text-sm mx-auto hover:p-2  backdrop-blur-sm h-min  z-10  rounded-[30px]  hover:bg-opacity-70 hover:bg-gradient-to-br from-slate-800 to-slate-800/[0.2] lg:-translate-y-40" >
                            <div className='border-2 border-[#B793FF] transition-all duration-50 hover:border-slate-700  bg-opacity-40 hover:bg-opacity-70 bg-gradient-to-br from-slate-800 to-slate-800/[0.2] lg:w-[350px]  w-[300px]  rounded-[30px] px-10'>                                                                                                                                                                                              
                                <p className="text-md mt-10 font-bold text-[#B793FF]">2024/Q4</p>
                                <h3 className="text-white font-bold text-lg">AI Model & Dashboard Update</h3>
                                <div className="my-4 bg-[#2E0E6E] rounded-md w-[100%] h-[4px]"></div>
                                <div className="flex items-start">
                                    <img src={svg} alt="Your SVG"/>
                                    <div className="ml-2">
                                        <p className="font-semibold"> API’s: </p>
                                        <p className="text-xs text-[#9094A6]">Continue refinement and fine tuning of our own AI models for monetization along with setting additional API endpoint access through the user dashboard</p>
                                    </div>
                                </div>
                                <div className="mt-2 flex items-start">
                                    <img src={svg} alt="Your SVG"/>
                                    <div className="ml-2">
                                        <p className="sont-semibold">Hosting AI Models: </p>
                                        <p className="text-xs text-[#9094A6]" > Continue optimizing our SKALE node and AI model hosting expanding our monetization efforts & improving the overall customer experience</p>
                                    </div>
                                </div>
                                <div className="mt-2 flex items-start">
                                    <img src={svg} alt="Your SVG"/>
                                    <div className="ml-2">
                                        <p className="font-semibold">New AI feature Planning: </p>
                                        <p className="text-xs text-[#9094A6]" >Continue enhancing the user experience by implementing new features and optimizing the current ones while gathering user feedback</p>
                                    </div>
                                </div>
                                <div className="mt-2 flex items-start">
                                    <img src={svg} alt="Your SVG"/>
                                    <div className="ml-2">
                                        <p className="font-semibold">Pier Review:</p>
                                        <p className="text-xs text-[#9094A6]" > Continue our work with the Universities & training the students in AI and Web3 while getting our documentation ready for Pier Review & Academic Publication</p>
                                    </div>
                                </div>
                                <div className="mt-2 mb-12 flex items-start">
                                    <img src={svg} alt="Your SVG"/>
                                    <div className="ml-2">
                                    <p className="font-semibold">Marketing:</p>
                                    <p className="text-xs text-[#9094A6]"> Continue refinement of our core marketing department and cooperative campaigns to expand the overall reach for the users of our dashboard </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pl-2 pt-0 text-[400px] font-bold text-white text-opacity-100 mix-blend-overlay text-center whitespace-nowrap hidden lg:block lg:translate-x-32 lg:-translate-y-32 hidden lg:block ">Q4</div>                            
                    </div>
                </div>
            </div>
            </div>
        </div>
    
)};

export default Map;

