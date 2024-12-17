import Image from "next/image";
import logo from "../../../public/logo.jpg";
import demoImg from "../../../public/download.png";
import bgImage from "../../../public/bglImage.jpg";
import Footer from "@/Components/Footer";
import SideNav from "@/Components/SideNav";

export default function Formulation() {
  const sections = [
    { id: "question", label: "Question/Challenges" },
    { id: "approach", label: "Approach to the Solution" },
    { id: "outcome", label: "Outcome" },
    { id: "help", label: "How Can Arcolab Help" },
  ];
  return (
    <div>
      <header className="flex flex-col ">
        <nav className="flex flex-row  items-center gap-[40em] border-b-2 border-gray-300">
          <div>
            <Image
              src={logo}
              alt="Company logo"
              className="w-[15rem] h-[10rem] ml-10"
            />
          </div>
          <div className="text-4xl font-semibold">Case Studies</div>
        </nav>
        <section className="h-[50vh] relative">
          <Image
            src={bgImage}
            alt="background-img1"
            className="w-full h-full object-cover"
          />
          <h1 className="text-5xl font-semibold italic text-slate-200 absolute bottom-10 left-5">
            5S Implementation at Formulation Plants
          </h1>
        </section>
      </header>
      <br />
      <br />

      <main className="flex flex-col items-center justify-between mb-[10em]">
        <SideNav sections={sections} />
        <article className="ml-[13rem] ">
          <section id="question">
            <div className="text-3xl font-semibold mb-4 w-[60em] h-[35vh] gap-[3em] shadow-xl flex flex-row items-center justify-start pl-10 bg-gradient-to-r from-green-700 via-green-300 to-slate-700">
              <div className="text-[14em] mb-3 opacity-80  ">1</div>

              <div className="w-[10em] text-5xl font-serif ">  Question/Challenges </div>
            </div>
            <div className="text-2xl">
              <ul className="list-disc flex flex-col justify-between h-[32vh]">
                <li className="m-4">
                  Implementation of 5S standards at technical floor comprises of
                  10,135 sqmt
                </li>
                <li className="m-4">
                  130+ issues related to safety, EHS standards, cleaning,
                  replacement of rusted parts, lightening to be addressed.
                </li>
                <li className="m-4">
                  Achieve 60+ score out off 80 RADAR score across all areas{" "}
                </li>
                <li className="m-4">
                  All areas are maintained with Best-In-Class standards{" "}
                  <span className="font-bold">
                    &quot;all time readiness&quot;
                  </span>{" "}
                  for the audits
                </li>
              </ul>
            </div>
          </section>
          <br />
          <br />
          <section id="approach">
            <div className="text-3xl font-semibold mb-7 w-[60em] h-[35vh] shadow-xl flex items-center pl-10 relative">
              <Image src={bgImage} alt="demoImg" className="w-full h-full object-cover" />
              <span className="absolute text-[14em] right-[0.5em] mb-4 opacity-80">2</span>
              <span className="absolute text-7xl left-[2em]">Approach to the Solution</span>

            </div>

            <div className="text-2xl">
              We Approached the problem with a{" "}
              <span className="font-semibold"> Six-Step Process:</span>
              <ul className="mt-10 flex flex-col justify-between h-[110vh]">
                <li className="font-semibold ">
                  Step 1: Data Collection and Workshop
                  <div className="mt-5 font-normal w-3/4">
                    In this step, a tracker is being Developed to systematically
                    identify and resolve challenges within the services area.
                    Additionally, specialised training sessions are being
                    organised for a selected team members to equip them with the
                    necessary skills.I knowledge to use the tracker
                    efficiently.And handle service related issues proactively.
                  </div>
                </li>
                <li className="font-semibold ">
                  Step 2: Team formation and phase wise area distribution
                  <div className="mt-5 font-normal w-3/4">
                    Engaging with zone members in brainstorming sessions to
                    identify and prioritise opportunities for quick wins.This
                    initiative encourages collaborative problem solving and
                    strategic alignment to drive impactful results.
                  </div>
                </li>
                <li className="font-semibold ">
                  Step 3: Recommendation and High level roadmap
                  <div className="mt-5 font-normal w-3/4">
                    A detailed report has been developed for the 5s project
                    detailing the road map for Implementation planning in the
                    selected zone. This report includes a well defined pilot
                    strategy to evaluate the feasibility and effectiveness of
                    the proposed approach.
                  </div>
                </li>
                <li className="font-semibold ">
                  Step 4: 5S Implementation according to the tracker
                  <div className="mt-5 font-normal w-3/4">
                    More than 10 issues are reviewed and addressed daily,
                    through a structured process guided by a governance
                    checklist. Each issue is assigned targets to specific team
                    members ensuring accountability and time resolution.
                  </div>
                </li>
                <li className="font-semibold ">
                  Step 5: Allocation of 5S Champion and site champion
                  <div className="mt-5 font-normal w-3/4">
                    5S champions have been appointed for each zone to oversee
                    the Implementation and progress. Adding to site champions
                    are nominated to evaluate and recognize the best work
                    achieved till date.
                  </div>
                </li>
                <li className="font-semibold ">
                  Step 6: Governance round and 5S radar audit with 5S champion
                  <div className="mt-5 font-normal w-3/4">
                    A meeting is scheduled with the 5S champions from all zone
                    to offer guidance, support and monitor progress. The session
                    will include conducting a radar audit in partnership with
                    the area owner to evaluate performance.
                  </div>
                </li>
              </ul>
            </div>
            <div className="mt-10 w-4/5  h-[40vh] flex flex-row justify-around">
              <span className="flex flex-col justify-center items-center">
                <Image src={demoImg} alt="img1" className="w-[25em] h-[20em]" />
                <span>This is above image ............</span>
              </span>
              <span className="flex flex-col justify-center items-center">
                <Image src={demoImg} alt="img1" className="w-[25em] h-[20em]" />
                <span>This is above image ............</span>
              </span>
            </div>
          </section>
          <section id="outcome">
          <div className="text-3xl font-semibold mb-10 w-[60em] h-[35vh] gap-[3em] shadow-xl flex flex-row items-center justify-start pl-10 bg-gradient-to-r from-green-700 via-green-300 to-slate-700">
              <div className="text-[14em] mb-3 opacity-80  ">3</div>

              <div className="w-[10em] text-5xl font-serif "> Outcome </div>
            </div>
            <div className="w-4/5 text-2xl font-normal mb-10">
             An indusstry leading company in the pharmaceuticals has shifted its approach from official actions
              to voluntary actions, as indicated by the three classifications.
              This strategic transition is designed to streamline operations and
              improve efficiency within the organization. The focus is now on
              ensuring that the Product Approval ANDAS (Abbreviated New Drug
              Application) submitted by the their sites begins to come
              through. This will enable the team to fast-track product launches,
              aligning with the company’s growth objectives. The successful and
              timely approval of ANDAS submissions is expected to significantly
              accelerate the development and release of new products. In
              parallel, the preparedness of all zones for upcoming audits is
              being carefully monitored. It is crucial that each zone meets the
              necessary standards and operational requirements to ensure smooth
              and successful audit outcomes.This proactive approach helps
              minimize any potential delays or disruptions, ensuring compliance
              with regulatory guidelines.
            </div>
          </section>
          <section id="help">
          <div className="text-3xl font-semibold mb-7 w-[60em] h-[35vh] shadow-xl flex items-center pl-10 relative">
              <Image src={bgImage} alt="demoImg" className="w-full h-full object-cover" />
              <span className="absolute text-[14em] right-[0.5em] mb-4 opacity-80">4</span>
              <span className="absolute text-7xl left-[2em]">How can we help</span>

            </div>


            <div className="text-2xl font-normal">
              Acrolab specializes in operational excellence and can help
              companies successfully implement the 5S methodology. Here’s a
              streamlined approach Acrolab offers:
              <ul className="flex flex-col justify-between h-[50vh] list-disc mt-10 mb-10">
                <li>
                  Team Formation: Assist in creating a cross-functional team to
                  lead the 5S initiative.
                </li>
                <li>
                  Training: Provide tailored training to ensure employees
                  understand 5S principles and benefits.
                </li>
                <li>
                  Pilot Projects: Start with a specific area, redesign it using
                  5S, and set a benchmark for broader implementation.
                </li>
                <li>
                  Performance Tracking: Establish clear KPIs to measure waste
                  reduction, efficiency improvements, and safety enhancements.
                </li>
                <li>
                  Sustainability: Conduct regular audits, promote continuous
                  improvement, and integrate tools like poka-yoke for error
                  prevention.
                </li>
                <li>
                  Customization: Tailor the methodology to align with the
                  company’s unique needs and industry standards.
                </li>
              </ul>
              By partnering with Acrolab, companies can streamline processes,
              eliminate waste, and build a culture of efficiency and safety,
              ensuring long-term success.
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
}
