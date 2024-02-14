// A FUNCTION THAT RETURNS THE TLC PAGE
import Link from 'next/link';
import React from 'react'


// 1. ACCOUNT & REGISTRATION
// You must be 18 years or older to use the products and services offered on the Website, including our application programming interface, software, tools, developer services, data, and documentation (collectively, the “Services / Web3 Services”). If you use the Services on behalf of another person or entity, you must have the authority to accept the Terms on their behalf. You must provide accurate and complete information to register for an account. You may not make your access credentials or account available to others outside your organization, and you are responsible for all activities that occur using your credentials.
// You may use our Services for free (a “Free Tier Account”) or subscribe to different pricing plans. Each account may be subject to a limitation with respect to resource usage based on your plan.
// 2. SERVICES
// Birble AI provides you with tools and services to create media assets, such as images, voice, music, & videos, with AI and craft anything you want in minutes. You may use a general or fine-tuned existing model to generate all sorts of production-ready art assets. In the future you can also train your own AI model and generate thousands of variations and deviations from your training data, or from models on the platform that others have trained.
// Additional Services Offered by Birble AI
// Birble AI is dedicated to providing innovative and reliable services in the field of smart contracts, blockchain technology, and digital assets. Our offerings are designed to empower individuals and businesses in navigating the evolving landscape of decentralized applications and non-fungible tokens (NFTs). By using our platform, you agree to the following terms and conditions:
// A. Smart Contract Generation
// Birble AI offers a user-friendly and efficient smart contract generation service. Users can leverage our AI-powered tools to create customized smart contracts tailored to their specific requirements. It is important to note that while we strive to provide accurate and reliable smart contract generation, users are responsible for thoroughly reviewing and testing the generated code to ensure its functionality and security.
// B. Smart Contract Auditing
// Our platform also provides smart contract auditing services, where users can request a comprehensive review of their existing smart contracts. Birble AI employs advanced analysis tools to identify potential vulnerabilities, security loopholes, and best practices, enhancing the overall security and reliability of smart contracts.
// C. NFT Creation and Deployment:
// Birble AI facilitates the creation and deployment of Non-Fungible Tokens (NFTs), empowering users to tokenize their digital assets and creations on blockchain networks. Whether you're an artist, content creator, or business looking to explore the world of NFTs, our platform streamlines the process of token creation and deployment.
// User Responsibilities:
// While Birble AI is committed to providing cutting-edge services, users are responsible for understanding and adhering to the following:
// Thoroughly review and validate any smart contracts generated or audited by our platform.
// Conduct appropriate testing and due diligence to ensure the functionality and security of smart contracts.
// Abide by relevant laws and regulations when deploying NFTs or engaging in blockchain-related activities.
// Disclaimer:
// Birble AI's services are provided on an "as-is" basis, and we do not guarantee the absence of errors or vulnerabilities in the generated smart contracts. Users are encouraged to seek professional advice and conduct independent assessments before deploying smart contracts or engaging in NFT creation.
// By using our services, you agree to comply with these terms of service and acknowledge that Birble AI shall not be held liable for any consequences resulting from the use or misuse of our platform.
// 3. CONTENT
// a) Your Content. You may provide input to the Services (“Input”), and receive output generated and returned by the Services based on the Input (“Output”). Input and Output are collectively “Content.” As between the parties and to the extent permitted by applicable law, you own all Input, and subject to your compliance with these Terms, Birble AI hereby assigns to you all its right, title and interest in and to Output.
// b) Images, music, video, & speech created by a user while a paid subscription is active retain full ownership, copyright, and all other intellectual property rights to their images.
// For media kept private on the platform, Birble AI retains the right to use those media filessolely for the purpose of providing the services to the user.
// For all media made public, Birble AI and its successors retain worldwide perpetual rights to use, copy, reproduce, process, adapt, modify, publish, transmit, create derivative works of, publicly display, publicly perform, sublicense, and distribute text prompts and images you input into the services, or any assets produced by the service at your direction. Birble AI retains the rights to make the assets available to the public, and use them commercially for the purposes of providing, maintaining, promoting, and improving the services.
// Additionally, other users also are granted a worldwide, non-exclusive, royalty-free license to access these publicly available assets through the service and to use those assets (including reproducing, distributing, modifying, displaying, and performing them) only as enabled by a feature of the service.
// c) For free tier users on the platform (whose media is made public by default), Birble AI and its successors own the rights to use, copy, reproduce, process, adapt, modify, publish, transmit, create derivative works of, publicly display, publicly perform, sublicense, and distribute text prompts and media you input into the services, or any assets produced by the service at your direction. Birble AI has the rights to make the assets and media available to the public, use them commercially, including for the purposes of providing, maintaining, promoting, and improving the services. Free tier users are granted a worldwide, non-exclusive, royalty-free license by Birble AI to access the assets they create using the service for their own commercial use.
// Additionally, other users are also granted a worldwide, non-exclusive, royalty-free license to access these publicly available assets through the service and to use those assets and media(including reproducing, distributing, modifying, displaying, and performing them) only as enabled by a feature of the service.
// d) For all plan tiers and generation types, Birble AI may use Content as necessary to provide and maintain the Services, comply with applicable law, and enforce our policies. You are responsible for Content, including ensuring that it does not violate any applicable law or these Terms. This license granted from Birble AI remains in effect even if this agreement is terminated by any party for any reason.
// e) Similarity of Content. Due to the nature of machine learning, Output may not be unique across users and the Services may generate the same or similar output for Birble AI or a third party and is to be expected by the end user.
// f) Use of Content to Improve Services. One of the main benefits of machine learning models is that they can be improved over time. To help Birble AI provide and maintain the Services, you understand and agree that we may use your Content or details around your platform usage to develop and improve the Services. If the privacy toggle is engaged on any of the AI Generations pages, any ‘Input’ or ‘Output’ provided by a user is NOT subject to granting Birble AI and its successors the right to the Use of Content to Improve Services.
// g) Use of Content for Advertising Purposes. For any media generated  not set to private, you agree to grant Birble AI a non-exclusive, non-transferable, non-sublicensable license to use your Content for advertising purposes, including, but not limited to, posting your Content on our Website.
// h) Model Promotion. If you train a public model that is popular on the Website, we reserve the right in our sole discretion to promote the model to permanent status on the Website, which means the promoted model will no longer count towards your Model Allowance and cannot be deleted by you. Users have the ability to keep models private if they choose if they prefer not to be subject to this Model Promotion clause.
// i) Any Output that is not set to private may be visible and usable by Birble AI or other users on the platform in derivative or transformative ways.
// 4. FEES AND PAYMENT
// a) Fees and Billing. You will pay all fees charged to your account (“Fees”) according to the prices and terms on the applicable pricing / payments page, or as otherwise agreed between us in writing. We have the right to correct pricing errors or mistakes even if we have already issued an invoice or received payment. You will provide complete and accurate billing information including a valid and authorized payment method. We will charge your payment method on an agreed-upon periodic basis but may reasonably change the date on which the charge is posted. You authorize Birble AI and its affiliates, and our third-party payment processor(s), to charge your payment method for the Fees. If your payment cannot be completed, we will provide you written notice and may suspend access to the Services until payment is received. Fees are payable in U.S. dollars and/ or Birble AI tokens and are due upon invoice issuance. Payments are nonrefundable except as provided in this Agreement. If any amount of your Fees is past due, we may suspend your access to the Services after we provide you written notice of late payment.
// b) Price Change. We reserve the right to change our prices by posting a notice to your account and/or to our Website. Any price changes will apply to the Fees charged to your account immediately after the effective date of the changes.
// 5. DMCA TAKEDOWN NOTICE
// Birble AI will take down works in response to Digital Millennium Copyright Act (“DMCA”) takedown notices and/or other intellectual property infringement claims and will terminate a user’s access to the Website if the user is determined to be a repeat infringer. If you believe that your content has been copied in a way that constitutes copyright or trademark infringement, or violates your publicity or other intellectual property rights, you may submit a takedown notice to us on our “Contact Us’ page. 
// For us to process your infringement claim regarding content on the Website, you must be the rightsholder or someone authorized to act on behalf of the rightsholder. Your notice must include:
// Identification of the copyrighted work(s), trademark, publicity rights, or other intellectual property rights that you claim are being infringed;
// Identification of the allegedly infringing material that is requested to be removed, including a description of the specific location (i.e., URLs) on the Website of the material claimed to be infringing, so that we may locate the material;
// Your contact information – at a minimum, your full legal name (not a pseudonym) and email address registered on the Birble AI [platform;
// A declaration that contains all of the following:
// a) A statement that you have a good faith belief that the use of the material in the manner complained of is not authorized by the intellectual property rights owner, its agent, or the law.
// b) A statement that the information in the notice is accurate.
// c) A statement under penalty of perjury that you are authorized to act on behalf of the intellectual property owner of the intellectual property that is allegedly being infringed.
// Your physical or electronic signature (of your full legal name).
// Please note that we will forward your notice of intellectual property infringement, including your contact information to the appropriate legal parties responsible for mitigating the situation. 
// 6. INTELLECTUAL PROPERTY RIGHTS
// We grant you a non-exclusive, non-transferable, non-sublicensable, revocable license to use the Website for both personal and commercial uses, as provided in these Terms. The Website and any related contents, features, and functionality, including but not limited to, all information, software, products, materials, APIs, text, displays, images, video, and audio (Both music & speech), and the design, selection, and arrangement thereof, are owned by the Company, its licensors, or other providers of such material and are protected by copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws. For the avoidance of doubt, rights, titles and interests in and to users’ Content are subject to and governed by Section 3 above.
// The following section refers to proprietary designs, UX, UI, and methodologies of the Birble AI platform itself – not the generative content you produce using the platform. As per Section 3, we assign to you all its rights, title and interest in content that you as a user produce on the Birble AI platform.
// You must not reproduce, modify, create derivative works of, republish, download, store, or transmit any of the proprietary material on our Website (this refers to our UX, UI, process methodologies and other aspects of the platform) as follows:
// You may share content created by other users on social media.
// Your computer may temporarily store copies of such materials in RAM incidental to your accessing and viewing those materials.
// You may store files that are automatically cached by your web browser for display enhancement purposes.
// You may print or download one copy of a reasonable number of pages of the Website for your own personal, non-commercial use and not for further reproduction, publication, or distribution.
// We provide desktop, mobile, & other applications for download, you agree to be bound by our end user license agreement for such applications.
// If you print, copy, modify, download, or otherwise use or provide any other person with access to any part of the Website in breach of the Terms, your right to use the Website will stop immediately and you must, at our option, return or destroy any copies of the materials you have made. No right, title, or interest in or to the Website or any content on the Website is transferred to you, and all rights not expressly granted are reserved by the Company. Any use of the Website not expressly permitted by these Terms is a breach of these Terms and may violate copyright, trademark, and other laws.
// 7. TRADEMARKS
// The Company name, the Company logo, and all related names, logos, product and service names, designs, and slogans are trademarks of the Company or its affiliates or licensors. You must not use such marks without the prior written permission of the Company. All other names, logos, product and service names, designs, and slogans on this Website are the trademarks of their respective owners.
// All other third-party trademarks, registered trademarks, and product names mentioned on the Website are the property of their respective owners and may not be copied, imitated or used, in whole or in part, without the permission of the applicable intellectual property rights holder. Reference to any products, services, processes or other information by name, trademark, manufacturer, supplier or otherwise does not constitute or imply endorsement, sponsorship, or recommendation by Birble AI or the Company.
// 8. LIMITATIONS OF USE
// By using the Website, you warrant on behalf of yourself, your users, and other parties you represent that you will not:
// Modify, copy, prepare derivative works of, decompile, or reverse engineer any materials and software contained on the Birble AI website.
// Remove any copyright or other proprietary notations from any materials and software on the Birble AI website.
// Transfer the materials to another person or “mirror” the materials on any other server.
// Knowingly or negligently use this website or any of its associated services in a way that abuses, disrupts, or interferes with our networks or any other service the Company provides.
// Use the Website or its associated services to transmit or publish any harassing, indecent, obscene, fraudulent, unlawful, or harmful material.
// Use the Website or its associated services in violation of any applicable local, state, national, or international laws or regulations.
// Use the Website in conjunction with sending unauthorized advertising, spam, or solicitation.
// Harvest, collect, or gather user data without the user’s express consent.
// Use the Website or its associated services in such a way that may infringe the privacy, intellectual property rights, or other rights of third parties.
// Generate content that includes impersonations of any real person or falsely portrays an individual in a misleading or defamatory way.
// Generate content that includes depictions of sexual abuse, sexual violence, explicit pornography, or any form of non-consensual acts.
// Generate content that includes depictions of child nudity, child pornography, or any form of child exploitation.
// Generate content that includes depictions of acts that involve non-consent, sexual or otherwise.
// Generate content that includes depictions of animal cruelty or harm to animals, including acts of violence or torture.
// Generate content that includes explicit depictions of gore or extreme violence.
// Generate content that promotes or incites hatred, violence, discrimination, or harm based on race, ethnicity, religion, gender, sexual orientation, or any other protected characteristic.
// Generate content that intentionally endangers or threatens the safety, security, or well-being of any individual or group.
// Generate content that, in the sole discretion of the Birble AI team, is deemed unsuitable, obscene, offensive, or contrary to community standards and user expectations.
// Any violation of these terms may result in immediate termination of your access to the Website, and the Company may take further action, including reporting violations to law enforcement authorities, as deemed appropriate. In cases of account termination due to violation of the Company’s Terms of Service, the Company reserves the right to refuse to issue a full or partial refund for any pre-paid, unused time and/or tokens that the terminated account has remaining at the time of termination. The Company reserves the right to block, restrict, or delete content that violates these terms, in its sole discretion, without prior notice or liability.
// 9. TERM AND TERMINATION
// These Terms shall remain in full force and and for any or no reason. We may terminate your access to or use of the Website at any time without prior notice if you breach any of these Terms or take any suspected fraudulent, abusive, or illegal activity, and termination of your access will be in addition to any other remedies we may have in law or equity.
// 10. DISCLAIMERS
// You expressly understand and agree that your access to and use of the Website is at your sole risk, and that the Website is provided “as is” and “as available” without warranties of any kind, whether express or implied. To the fullest extent permissible pursuant to applicable law, we, our subsidiaries, affiliates, and licensors make no express warranties and hereby disclaim all implied warranties regarding the Website and any part of it (including, without limitation, the site, any smart contract, or any external websites), including the implied warranties of merchantability, fitness for a particular purpose, non-infringement, correctness, accuracy, or reliability. Without limiting the generality of the foregoing, we, our subsidiaries, affiliates, and licensors do not represent or warrant to you that: (i) your access to or use of the Website will meet your requirements, (ii) your access to or use of the Website will be uninterrupted, timely, secure or free from error, (iii) usage data provided through the Website will be accurate, (iii) the Website or any content, services, or features made available on or through the app are free of viruses or other harmful components, or (iv) that any data that you disclose when you use the Website will be secure. Some jurisdictions do not allow the exclusion of implied warranties in contracts with consumers, so some or all of the above exclusions may not apply to you.
// You accept the inherent security risks of providing information and dealing online over the internet and agree that we have no liability or responsibility for any breach of security unless it is due to our gross negligence.
// 11. LIMITATION OF LIABILITY
// TO THE FULLEST EXTENT PROVIDED BY LAW, IN NO EVENT WILL THE COMPANY, ITS AFFILIATES, OR THEIR LICENSORS, SERVICE PROVIDERS, EMPLOYEES, AGENTS, OFFICERS, OR DIRECTORS BE LIABLE FOR DAMAGES OF ANY KIND, UNDER ANY LEGAL THEORY, ARISING OUT OF OR IN CONNECTION WITH YOUR USE, OR INABILITY TO USE, THE WEBSITE, ANY WEBSITES LINKED TO IT, ANY CONTENT ON THE WEBSITE OR SUCH OTHER WEBSITES, INCLUDING ANY INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO, PERSONAL INJURY, PAIN AND SUFFERING, EMOTIONAL DISTRESS, LOSS OF REVENUE, LOSS OF OPPORTUNITY, LOSS OF REPUTATION, LOSS OF PROFITS, LOSS OF BUSINESS OR ANTICIPATED SAVINGS, LOSS OF USE, LOSS OF GOODWILL, LOSS OF DATA, AND WHETHER CAUSED BY TORT (INCLUDING NEGLIGENCE), BREACH OF CONTRACT, OR OTHERWISE, EVEN IF FORESEEABLE.
// OUR AGGREGATE LIABILITY UNDER THESE TERMS SHALL NOT EXCEED THE GREATER OF THE AMOUNT YOU PAID FOR THE SERVICE THAT GAVE RISE TO THE CLAIM DURING THE 12 MONTHS BEFORE THE LIABILITY AROSE OR ONE HUNDRED DOLLARS ($100).
// YOU ACKNOWLEDGE AND AGREE THAT WE HAVE MADE THE WEBSITE AVAILABLE TO YOU AND ENTERED INTO THESE TERMS IN RELIANCE UPON THE WARRANTY DISCLAIMERS AND LIMITATIONS OF LIABILITY SET FORTH HEREIN, WHICH REFLECT A REASONABLE AND FAIR ALLOCATION OF RISK BETWEEN THE PARTIES AND FORM AN ESSENTIAL BASIS OF THE BARGAIN BETWEEN US. WE WOULD NOT BE ABLE TO PROVIDE THE WEBSITE TO YOU WITHOUT THESE LIMITATIONS.
// THE FOREGOING DOES NOT AFFECT ANY LIABILITY THAT CANNOT BE EXCLUDED OR LIMITED UNDER APPLICABLE LAW.
// 12. INDEMNIFICATION
// To the fullest extent permitted by applicable law, you will indemnify, defend and hold harmless the Company and its past, present and future employees, partners, contractors, consultants, suppliers, vendors, service providers, agents, representatives, predecessors, successors and assigns (the “Indemnified Parties”) from and against all claims, demands, actions, damages, losses, costs and expenses (including attorneys’ fees) that arise from or relate to: (i) your use of the Website or any services, (ii) your responsibilities or obligations under these Terms, (iii) your violation of these Terms, (iv) your violation of any applicable laws or regulations, or (v) your violation of any rights of any other person or entity. You expressly agree that this extends to any Inputs you upload to the platform, and that you have the rights to utilize these Inputs with the Services we provide.
// The Company reserves the right to exercise sole control over the defense, at your expense, of any claim subject to indemnification. This indemnity is in addition to, and not in lieu of, any other indemnities set forth in a written agreement between you and the Company.
// 13. RELIANCE ON INFORMATION POSTED
// The information presented on or through the Website is made available solely for general information purposes. We do not warrant the accuracy, completeness, or usefulness of this information. Any reliance you place on such information is strictly at your own risk. We disclaim all liability and responsibility arising from any reliance placed on such materials by you or any other visitor to the Website, or by anyone who may be informed of any of its contents.
// This Website includes content provided by third parties, including materials provided by other users, bloggers, and third-party licensors, syndicators, aggregators, and/or reporting services. All statements and/or opinions expressed in these materials, and all articles and responses to questions and other content, other than the content provided by the Company, are solely the opinions and the responsibility of the person or entity providing those materials. These materials do not necessarily reflect the opinion of the Company. We are not responsible, or liable to you or any third party, for the content or accuracy of any materials provided by any third parties.
// 14. LINKS FROM THE WEBSITE
// If the Website contains links to other sites and resources provided by third parties, these links are provided for your convenience only. This includes links contained in advertisements, including banner advertisements and sponsored links. We have no control over the contents of those sites or resources and accept no responsibility for them or for any loss or damage that may arise from your use of them. If you decide to access any of the third-party websites linked to this Website, you do so entirely at your own risk and subject to the terms and conditions of use for such websites.
// 15. SEVERANCE
// Any term of these Terms which is wholly or partially void or unenforceable is severed to the extent that it is void or unenforceable. The validity of the remainder of these Terms is not affected.
// 16. GOVERNING LAW
// These Terms and your access to and use of the Website shall be governed by and construed in accordance with the laws of the state of United States of America, The United Kingdom, & Ukraine without giving effect to any choice or conflict of law provisions.
// 17. DISPUTE RESOLUTION; ARBITRATION
// PLEASE READ THIS SECTION CAREFULLY. IT MAY SIGNIFICANTLY AFFECT YOUR LEGAL RIGHTS, INCLUDING YOUR RIGHT TO FILE A LAWSUIT IN COURT. ALL DISPUTES ARISING OUT OF OR RELATED TO THESE TERMS OF USE OR ANY ASPECT OF THE RELATIONSHIP BETWEEN YOU AND US, WHETHER BASED IN CONTRACT, TORT, STATUTE, FRAUD, MISREPRESENTATION, OR ANY OTHER LEGAL THEORY, WILL BE RESOLVED THROUGH FINAL AND BINDING ARBITRATION BEFORE A NEUTRAL ARBITRATOR INSTEAD OF IN A COURT BY A JUDGE OR JURY, AND YOU AGREE THAT THE COMPANY AND YOU ARE EACH WAIVING THE RIGHT TO SUE IN COURT AND TO HAVE A TRIAL BY A JURY. YOU AGREE THAT ANY ARBITRATION WILL TAKE PLACE ON AN INDIVIDUAL BASIS; CLASS ARBITRATIONS AND CLASS ACTIONS ARE NOT PERMITTED AND YOU ARE AGREEING TO GIVE UP THE ABILITY TO PARTICIPATE IN A CLASS ACTION.
// 18. NO CLASS ACTION
// YOU AND THE COMPANY AGREE THAT EACH MAY BRING CLAIMS AGAINST THE OTHER ONLY IN YOUR OR ITS INDIVIDUAL CAPACITY AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS OR REPRESENTATIVE PROCEEDING.
// 19. Privacy Policy
// At Birble AI, we are committed to safeguarding your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, and protect the data you provide while using our website and services. By accessing our platform, you agree to the terms outlined in this policy.
// Information Collection
// a. Personal Information: We may collect personal information, such as your name, email address, and contact details, when you register on our platform or interact with our services. We will also use the information supplied by the end user in the profile and settings section of the website supplied by the customer to enhance overall customer experience along with powering our “one click” AI generators in the Business Center.
// b. Usage Data: We automatically collect information about your interaction with our website, including IP addresses, device information, browser type, and pages visited. This data helps us analyze user behavior and improve our services.
// Use of Information
// a. Service Provision: We use the information collected to provide, maintain, and improve our services, including smart contract generation, auditing, and NFT creation.
// b. Communication: We may use your contact information to communicate with you regarding our services, updates, and important announcements. You can opt-out of these communications at any time.
// c. Analytics: Collected data is utilized for analytics purposes, enabling us to understand user preferences, enhance user experience, and optimize our website's performance.
// Information Sharing
// a. Third-Party Services: Birble AI may utilize third-party services for analytics, authentication, or other purposes. These service providers adhere to their own privacy policies, and we encourage users to review their terms.
// b. Legal Compliance: We may share your information when required by law or to protect our rights, property, or safety, as well as that of our users or others.
// Security
// Birble AI employs industry-standard security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no method of data transmission over the internet or electronic storage is entirely secure, and we cannot guarantee absolute security.
// Your Choices
// a. Account Information: You can review and update your account information by logging into your account on our platform.
// b. Opt-Out: You have the option to opt-out of non-essential communications by following the instructions provided in our emails.
// Cookies
// Birble AI uses cookies to enhance your browsing experience. You can manage cookie preferences through your browser settings. Please refer to our Cookies Notice for more information.
// Changes to the Privacy Policy
// We reserve the right to update our Privacy Policy to reflect changes in our practices. It is your responsibility to periodically review this policy for any updates.
// 20. CONTACT US
// All feedback, comments, and questions on the Terms should be sent to birbleai@gmail.com 



export default function TermsAndConditions() {
  return (
    <div>
      <div></div>

      <section className="flex flex-col justify-center items-center">
        <h1 className="font-bold text-center text-lg">Terms of Service</h1>
        <small>text for last updated</small>

        <p>
          These Terms of Use (the <span className="font-bold">“Terms”</span>){" "}
          govern your use of the website and application located at{" "}
          <Link href={"https://birbleai.com/"} className="underline">
            our home site
          </Link>{" "}
          and other sites and subdomains (collectively,{" "}
          <span className="font-bold">“Birble Ai”</span> or the{" "}
          <span className="font-bold">“Website”</span>) owned and operated by
          Birble AI an Ukrainian private company (the{" "}
          <span className="font-bold">“Company,” “we,” “us,”</span> or{" "}
          <span className="font-bold">“our”</span>).
        </p>

        <p>
          By accessing the Website, you agree to abide by these Terms and to
          comply with all applicable laws and regulations. We reserve the right
          to review and amend any of these Terms at our sole discretion and
          update this page from time to time. Any change to these Terms will
          take effect immediately from the date of publication. If you do not
          agree with these Terms, you are prohibited from using or accessing our
          Website or using any other services provided by us.
        </p>

        <p>PLEASE READ THESE TERMS CAREFULLY BEFORE USING THE WEBSITE EACH TIME YOU USE THE WEBSITE. THESE TERMS GOVERN YOUR USE OF THE WEBSITE UNLESS WE HAVE EXECUTED A SEPARATE WRITTEN AGREEMENT WITH YOU FOR THAT PURPOSE. WE ARE ONLY WILLING TO MAKE THE WEBSITE AVAILABLE TO YOU IF YOU ACCEPT ALL OF THESE TERMS. BY USING THE WEBSITE, YOU ARE CONFIRMING YOU UNDERSTAND AND AGREE TO BE BOUND BY ALL OF THESE TERMS. IF YOU ARE ACCEPTING THESE TERMS ON BEHALF OF A COMPANY OR OTHER LEGAL ENTITY, YOU REPRESENT THAT YOU HAVE THE LEGAL AUTHORITY TO ACCEPT THESE TERMS ON THAT ENTITY&apos;S BEHALF, IN WHICH CASE “YOU” WILL MEAN THAT ENTITY. IF YOU DO NOT HAVE SUCH AUTHORITY, OR IF YOU DO NOT ACCEPT ALL OF THESE TERMS, THEN WE ARE UNWILLING TO MAKE THE WEBSITE AVAILABLE TO YOU. IF YOU DO NOT AGREE TO THESE TERMS, YOU MAY NOT ACCESS OR USE THE WEBSITE. NOTE THAT THESE TERMS MAY BE UPDATED AT ANY TIME, WITHOUT NOTIFYING YOU AND BY AGREEING TO THESE TERMS NOW, YOU AGREE THAT YOUR CONTINUED USAGE OF THIS SERVICE CONFIRMS YOUR ONGOING AGREEMENT TO ANY UPDATED TERMS. PLEASE ENSURE THAT YOU READ THE TERMS OF SERVICE EACH TIME YOU USE THE SERVICE AND DISCONTINUE USAGE IF YOU NO LONGER AGREE TO ANY UPDATED TERMS.</p>
      </section>
    </div>
  );
}