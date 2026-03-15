import React from 'react';
import { 
  FaGraduationCap, 
  FaSchool, 
  FaHospital, 
  FaUserNurse, 
  FaLaptopCode,
  FaArrowRight,
  FaBuilding
} from 'react-icons/fa';
import './StudyInIndia.css';

const categories = [
  {
    id: 'universities',
    title: 'Universities (UG & PG Programs)',
    icon: <FaGraduationCap />,
    institutions: [
      { name: 'Christ University', courses: 'B.Tech, BBA, BCA, MBA, Law, Arts & Science' },
      { name: 'Jain University', courses: 'Engineering, Management, Commerce, Computer Applications' },
      { name: 'St Joseph\'s University', courses: 'Arts, Commerce, Science, Management' },
      { name: 'Alliance University', courses: 'Engineering, MBA, Law, Business' },
      { name: 'CMR University', courses: 'Engineering, Management, Law, Design' },
      { name: 'REVA University', courses: 'Engineering, Architecture, Management, Commerce' },
      { name: 'Presidency University', courses: 'Engineering, Management, Law, Design' },
      { name: 'PES University', courses: 'Engineering, Computer Science, Management' },
      { name: 'Dayananda Sagar University', courses: 'Engineering, Pharmacy, Management, Computer Applications' },
      { name: 'Garden City University', courses: 'Management, Commerce, Life Sciences, Media Studies' }
    ]
  },
  {
    id: 'arts-science',
    title: 'Arts, Science & Commerce Colleges',
    icon: <FaSchool />,
    institutions: [
      { name: 'Kristu Jayanti College', courses: 'BBA, BCom, BCA, BA, MSc, MBA' },
      { name: 'Mount Carmel College', courses: 'BBA, BCom, BA, Science, Media Studies' }
    ]
  },
  {
    id: 'medical',
    title: 'Medical Colleges',
    icon: <FaHospital />,
    institutions: [
      { name: 'St. John\'s Medical College', courses: 'MBBS, MD, MS' },
      { name: 'Vydehi Institute of Medical Sciences', courses: 'MBBS, MD, MS, Super Speciality' }
    ]
  },
  {
    id: 'nursing',
    title: 'Nursing Colleges',
    icon: <FaUserNurse />,
    institutions: [
      { name: 'MS Ramaiah Institute of Nursing', courses: 'BSc Nursing, MSc Nursing' },
      { name: 'Acharya Institute of Health Sciences', courses: 'BSc Nursing, Allied Health Sciences' },
      { name: 'East Point College of Nursing', courses: 'BSc Nursing, GNM, MSc Nursing' }
    ]
  },
  {
    id: 'engineering',
    title: 'Engineering Colleges',
    icon: <FaLaptopCode />,
    institutions: [
      { name: 'RV College of Engineering', courses: 'B.Tech / M.Tech Engineering Programs' },
      { name: 'College of Engineering and Management', courses: 'Engineering & Technology Programs' }
    ]
  },
  {
    id: 'prof-group',
    title: 'Group of Institutions / Professional',
    icon: <FaBuilding />,
    institutions: [
      { name: 'BTL Group of Institutions', courses: 'Engineering, MBA, Polytechnic, Nursing' },
      { name: 'Ramaiah University of Applied Sciences', courses: 'Engineering, Medical, Dental, Pharmacy, Management' }
    ]
  }
];

function StudyInIndia() {
  return (
    <section id="study-in-india" className="study-in-india section">
      <div className="container">
        <div className="sii-header">
          <span className="sii-tagline">Academic Excellence</span>
          <h2 className="sii-title">
            Study in <span>India</span>
          </h2>
          <p className="sii-desc">
            Explore top-tier institutions across diverse fields, offering world-class programs and career opportunities.
          </p>
        </div>

        <div className="sii-grid">
          {categories.map((category) => (
            <div 
              key={category.id} 
              id={category.id} 
              className={`sii-card ${category.id === 'universities' ? 'sii-card--featured' : ''}`}
            >
              <div className="sii-card-header">
                <div className="sii-icon-wrapper">
                  {category.icon}
                </div>
                <h3 className="sii-category-title">{category.title}</h3>
              </div>
              
              <div className="sii-institutions">
                {category.institutions.map((inst, idx) => (
                  <div key={idx} className="sii-inst-item">
                    <h4 className="sii-inst-name">{inst.name}</h4>
                    <p className="sii-inst-courses">{inst.courses}</p>
                  </div>
                ))}
              </div>

              <div className="sii-card-footer">
                <button 
                  className="sii-card-btn" 
                  onClick={() => {
                    const el = document.getElementById('contact');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Apply Now <FaArrowRight />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StudyInIndia;
