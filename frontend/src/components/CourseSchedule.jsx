import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const CourseSchedule = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const schedule = [
    { month: "October", course: "EKG TECHNICIAN (CET)", hours: "60 Hours", duration: "8 Weeks (2 Month)", start: "10-17-2025", session: "In Person, Weekday", schedule: "Friday", time: "5:00 pm to 10:00 pm" },
    { month: "October", course: "PHLEBOTOMY TECHNICIAN (CPT)", hours: "80 Hours", duration: "8 Weeks (2 Month)", start: "10-13-2025", session: "In Person, Weekday", schedule: "Monday & Wednesday", time: "5:00 pm to 10:00 pm" },
    { month: "September", course: "MEDICATION AIDE (RMA)", hours: "68 Hours", duration: "3 Weeks", start: "09-15-2025", session: "Hybrid", schedule: "Monday to Friday", time: "5:00 pm to 10:00 pm" },
    { month: "November", course: "NURSE AIDE (CNA)", hours: "155 Hours", duration: "6 Weeks (1.5 Month)", start: "11-03-2025", session: "Hybrid", schedule: "Monday to Thursday", time: "9:00 am to 3:00 pm" },
    { month: "September", course: "PHLEBOTOMY TECHNICIAN (CPT)", hours: "80 Hours", duration: "8 Weeks (2 Month)", start: "09-29-2025", session: "Hybrid", schedule: "Monday & Wednesday", time: "5:00 pm to 10:00 pm" },
    { month: "October", course: "MEDICATION AIDE (RMA)", hours: "68 Hours", duration: "3 Weeks", start: "10-06-2025", session: "Hybrid", schedule: "Monday to Friday", time: "5:00 pm to 10:00 pm" },
    { month: "August", course: "MEDICATION AIDE (RMA)", hours: "68 Hours", duration: "3 Weeks", start: "08-25-2025", session: "Hybrid", schedule: "Monday to Friday", time: "5:00 pm to 10:00 pm" },
    { month: "October", course: "MEDICAL ASSISTANT (CCMA)", hours: "200 Hours", duration: "8 Weeks (2 Month)", start: "10-13-2025", session: "Hybrid", schedule: "Monday to Friday", time: "5:00 pm to 10:00 pm" },
    { month: "August", course: "EKG TECHNICIAN (CET)", hours: "60 Hours", duration: "8 Weeks (2 Month)", start: "08-08-2025", session: "In Person, Weekday", schedule: "Friday", time: "5:00 pm to 10:00 pm" },
    { month: "August", course: "PHLEBOTOMY TECHNICIAN (CPT)", hours: "80 Hours", duration: "8 Weeks (2 Month)", start: "08-04-2025", session: "Hybrid", schedule: "Monday & Wednesday", time: "5:00 pm to 10:00 pm" },
    { month: "August", course: "MEDICAL ASSISTANT (CCMA)", hours: "200 Hours", duration: "8 Weeks (2 Month)", start: "08-04-2025", session: "Hybrid", schedule: "Monday to Friday", time: "5:00 pm to 10:00 pm" },
    { month: "September", course: "NURSE AIDE (CNA)", hours: "155 Hours", duration: "6 Weeks (1.5 Month)", start: "09-29-2025", session: "Hybrid", schedule: "Monday to Thursday", time: "9:00 am to 3:00 pm" },
    { month: "August", course: "MEDICATION AIDE (RMA)", hours: "68 Hours", duration: "3 Weeks", start: "08-04-2025", session: "Hybrid", schedule: "Monday to Friday", time: "5:00 pm to 10:00 pm" },
    { month: "August", course: "NURSE AIDE (CNA)", hours: "155 Hours", duration: "6 Weeks (1.5 Month)", start: "08-11-2025", session: "Hybrid", schedule: "Monday to Thursday", time: "9:00 am to 3:00 pm" },
  ];

  return (
    <div className="relative bg-white py-10">
      <div className="max-w-7xl mx-auto px-4 space-y-6 font-exo relative z-10">
        {/* Heading */}
        <div className="text-center" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-2">
            <span className="bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent">
              Upcoming Course Schedule
            </span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
            Your learning journey is mapped out clearly to help you stay organized, prepared, and on top of your course requirements.
          </p>
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-2xl shadow-lg border border-gray-200 bg-white">
          <table className="min-w-full text-gray-800 text-xs sm:text-sm md:text-base">
            <thead className="bg-gradient-to-r from-blue-700 to-blue-500 text-white">
              <tr>
                <th className="py-3 px-2">Month</th>
                <th className="py-3 px-2">Course / Program</th>
                <th className="py-3 px-2">Clock Hours</th>
                <th className="py-3 px-2">Duration</th>
                <th className="py-3 px-2">Start Date</th>
                <th className="py-3 px-2">Session</th>
                <th className="py-3 px-2">Schedule</th>
                <th className="py-3 px-2">Class Time</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {schedule.map((item, idx) => (
                <tr key={idx} className={`${idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-blue-50 transition`}>
                  <td className="py-3 px-2 text-center">{item.month}</td>
                  <td className="py-3 px-2">{item.course}</td>
                  <td className="py-3 px-2 text-center">{item.hours}</td>
                  <td className="py-3 px-2 text-center">{item.duration}</td>
                  <td className="py-3 px-2 text-center">{item.start}</td>
                  <td className="py-3 px-2 text-center">{item.session}</td>
                  <td className="py-3 px-2 text-center">{item.schedule}</td>
                  <td className="py-3 px-2 text-center">{item.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Enroll Now button */}
        <div className="text-center" data-aos="fade-up">
          <button className="mt-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-full shadow-md hover:shadow-lg transition duration-300">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseSchedule;
