import { FaExternalLinkAlt } from "react-icons/fa"; // add any icon library you like

const LinksGrid = () => {
  const items = [
    {
      title: "REGISTERED NURSING",
      url: "https://www.registerednursing.org/",
    },
    {
      title: "REGISTRATION FOR MEDICATION AIDE",
      url: "https://www.dhp.virginia.gov/Boards/Nursing/ApplicantResources/ApplyforLicense/MedicationAide/",
    },
    {
      title: "PRIMARY CARE INCENTIVE PROGRAMS",
      url: "https://www.vdh.virginia.gov/health-equity/incentive-programs/?utm_campaign=20240223_&utm_content=&utm_medium=email&utm_source=govdelivery/",
    },
    {
      title: "VIRGINIA DHP MEDICATION AIDES CANDIDATE INFORMATION BULLETIN",
      url: "https://www.psiexams.com/test-takers/",
    },
    {
      title: "SCHOLARSHIP AND FINANCIAL AID FOR ONLINE COLLEGE STUDENTS | BEST COLLEGES",
      url: "https://www.bestcolleges.com/resources/online-student-scholarships/",
    },
    {
      title: "REGISTRATION FOR NURSE AIDE",
      url: "https://credentia.com/test-takers/va/",
    },
    {
      title: "VIRGINIA REGIONAL TEST SITES",
      url: "https://www.1stprovidence.com/wp-content/themes/firstprovideia334/pdf/NNAAP-VIRGINIA-REGIONAL-TEST-SITES.pdf",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-6 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 font-exo">
      {items.map((item, index) => (
        <a
          key={index}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center text-center bg-white/30 backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 p-6 group"
        >
          <div className="mb-3 text-blue-600 bg-white/20 rounded-full p-3 group-hover:bg-white/30 transition">
            <FaExternalLinkAlt className="text-lg md:text-xl" />
          </div>
          <span className="text-xs sm:text-sm md:text-base font-semibold text-gray-800 group-hover:text-blue-700">
            {item.title}
          </span>
        </a>
      ))}
    </div>
  );
};

export default LinksGrid;
