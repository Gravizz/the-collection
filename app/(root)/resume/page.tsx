import Image from 'next/image';
import React from 'react';
import { skillsData } from '@/utils/constant';

const Resume: React.FC = () => {
  return (
    <div className="p-4 md:p-8 mx-auto max-w-6xl">
      {/* Work Experience Section */}
      <div className="mb-10 border border-blue-300 rounded-lg p-6 md:p-8 shadow-lg">
        <h2 className="text-lg font-bold mb-6 text-center text-blue-700">
          W O R K &nbsp; E X P E R I E N C E
        </h2>
        <div className="flex flex-col gap-6">
          <div>
            <h3 className="text-md font-semibold text-blue-600">
              Delivery Officer
            </h3>
            <p className="font-semibold text-sm md:text-md">
              DEEJING AGRICULTURE 999 CO., LTD.
            </p>
            <p className="text-gray-600 text-sm md:text-md">2022 - 2023</p>
            <p className="text-gray-700 mt-2 text-sm md:text-md">
              • Managed delivery of 10 tonnes/day of agricultural supplies to
              100+ farms across 3 provinces
            </p>
            <p className="text-gray-700 text-sm md:text-md">
              • Replanned journey to reduce delivery time by 15% (customers
              received delivery by 4pm instead of 6pm)
            </p>
          </div>
          <hr className="my-4 border-blue-200" />
          <div>
            <h3 className="text-md font-semibold text-blue-600">
              Assistant Military Officer
            </h3>
            <p className="font-semibold text-sm md:text-md">
              29TH MILITARY DISTRICT
            </p>
            <p className="text-gray-600 text-sm md:text-md">2019 - 2020</p>
            <p className="text-gray-700 mt-2 text-sm md:text-md">
              • Planned guard shift allocation for 300 soldiers
            </p>
            <p className="text-gray-700 text-sm md:text-md">
              • Maintained records of staffing for military force readiness
            </p>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="mb-10 border border-blue-300 rounded-lg p-6 md:p-8 shadow-lg">
        <h2 className="text-lg font-bold mb-6 text-center text-blue-700">
          S K I L L S
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {skillsData.map((item) => (
            <div key={item.id} className="col-span-1">
              <button className="flex items-center gap-3 w-full border border-blue-300 rounded-md px-4 py-2 text-blue-600 hover:bg-blue-600 hover:text-white active:bg-blue-700 active:scale-95">
                <div className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center bg-white border border-blue-300">
                  <Image
                    src={item.pic}
                    alt={`${item.skill} icon`}
                    width={30}
                    height={30}
                  />
                </div>
                <span className="text-sm md:text-md">{item.skill}</span>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Education Section */}
      <div className="mb-10 border border-blue-300 rounded-lg p-6 md:p-8 shadow-lg">
        <h2 className="text-lg font-bold mb-6 text-center text-blue-700">
          E D U C A T I O N
        </h2>
        <div className="flex flex-col gap-6">
          <div>
            <h3 className="text-md font-semibold text-blue-600">
              Full-Stack Software Development
            </h3>
            <p className="font-semibold text-sm md:text-md">
              TechUp Coding Bootcamp
            </p>
            <p className="text-gray-600 text-sm md:text-md">
              November 2023 - March 2024
            </p>
          </div>
          <div>
            <h3 className="text-md font-semibold text-blue-600">
              Political Science
            </h3>
            <p className="font-semibold text-sm md:text-md">
              Ramkhamhaeng University
            </p>
            <p className="text-gray-600 text-sm md:text-md">2020 - 2024</p>
          </div>
          <div>
            <h3 className="text-md font-semibold text-blue-600">
              Computer Engineering
            </h3>
            <p className="font-semibold text-sm md:text-md">
              King Mongkut's Institute of Technology Ladkrabang
            </p>
            <p className="text-gray-600 text-sm md:text-md">
              2014 - 2019 (not graduated)
            </p>
          </div>
          <div>
            <h3 className="text-md font-semibold text-blue-600">
              Sciences and Mathematics Program
            </h3>
            <p className="font-semibold text-sm md:text-md">
              Sakonraj Wittayanukul
            </p>
            <p className="text-gray-600 text-sm md:text-md">2008 - 2014</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
