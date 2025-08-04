import Banner from "../components/Banner";
import bannerImg from "../assets/banner5.png";
import SocialIcons from "../components/SocialIcons";
import ScrollToTop from "../components/ScrollToTop";
import BlogCard from "../components/BlogCard";

const BlogScreen = () => {
  const blogs = [
    {
      id: 1,
      image: "https://images.pexels.com/photos/263194/pexels-photo-263194.jpeg",
      title: "Understanding of ECG",
      description:
        "An Electrocardiogram (ECG) is a critical diagnostic tool in modern medicine that records the electrical signals of the heart to detect and monitor various cardiac conditions. By analyzing the heart’s rhythm and electrical activity, healthcare professionals can identify abnormalities such as arrhythmias, heart attacks, and other disorders that may require urgent intervention. ECGs are quick, non-invasive, and highly informative, making them essential in both routine check-ups and emergency settings. Advances in digital technology have also allowed ECG machines to become more portable and accurate, enabling remote monitoring and telemedicine applications. Through early detection and continuous monitoring, ECGs play a pivotal role in improving patient outcomes, reducing hospital admissions, and ensuring timely treatment. For patients with chronic heart conditions, regular ECG tests can provide peace of mind and valuable data for doctors to make informed decisions about ongoing care and lifestyle recommendations.",
      date: "August 4, 2025",
      author: "John Doe",
    },
    {
      id: 2,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKmE8HZdjYBwX0aC5nAWpEGOOFcTRoH0UcXg&s",
      title: "Patient Care Technician",
      description:
        "Patient Care Technicians (PCTs) are vital members of the healthcare team, working alongside nurses and physicians to ensure patients receive compassionate and comprehensive care. Their responsibilities often include monitoring vital signs, assisting patients with daily activities, collecting specimens, and ensuring overall comfort and safety within hospital and clinical environments. Beyond technical skills, successful PCTs demonstrate strong communication and empathy, building trust with patients and supporting their emotional well-being. Training programs equip them with practical knowledge in phlebotomy, EKG monitoring, and infection control, preparing them for fast-paced healthcare settings. As the demand for quality patient care rises, PCTs contribute significantly to improving patient satisfaction and streamlining hospital workflows. Whether in rehabilitation centers, hospitals, or outpatient facilities, patient care technicians bridge the gap between medical teams and patients, playing a key role in delivering holistic, patient-centered healthcare every day.",
      date: "July 28, 2025",
      author: "Jane Smith",
    },
    // Add more blogs if you like
  ];

  return (
    <div className="font-exo">
      <Banner image={bannerImg} title="Blog" height="h-[500px]" />

      <div className="max-w-6xl mx-auto px-4 py-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} {...blog} />
        ))}
      </div>

      <SocialIcons />
      <ScrollToTop />
    </div>
  );
};

export default BlogScreen;
