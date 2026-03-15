import React from 'react';
import { FaMapMarkerAlt, FaUniversity, FaBuilding, FaLandmark, FaTree, FaSun, FaStar } from 'react-icons/fa';
import './StudyInIndia.css';

const destinations = [
  {
    id: 'delhi',
    name: 'New Delhi',
    state: 'National Capital Region',
    icon: <FaLandmark />,
    highlight: 'Heart of the Nation',
    colleges: [
      'Indian Institute of Technology (IIT), Delhi',
      'All India Institute of Medical Sciences (AIIMS)',
      'University of Delhi (DU) - Top Colleges',
      'Jawaharlal Nehru University (JNU)',
      'Delhi Technological University (DTU)'
    ]
  },
  {
    id: 'karnataka',
    name: 'Karnataka',
    state: 'Education Hub of South',
    icon: <FaUniversity />,
    highlight: 'Innovation & Research',
    colleges: [
      'National Institute of Technology (NITK), Surathkal',
      'Manipal Academy of Higher Education (MAHE)',
      'Visvesvaraya Technological University (VTU)',
      'Christ University, Bangalore',
      'International Institute of Information Technology (IIIT-B)'
    ]
  },
  {
    id: 'bangalore',
    name: 'Bangalore',
    state: 'Silicon Valley of India',
    icon: <FaBuilding />,
    highlight: 'Tech & Startups',
    colleges: [
      'Indian Institute of Science (IISc)',
      'Indian Institute of Management (IIM-B)',
      'RV College of Engineering (RVCE)',
      'PES University',
      'NIFT Bangalore'
    ]
  },
  {
    id: 'tamilnadu',
    name: 'Tamil Nadu',
    state: 'Heritage & Excellence',
    icon: <FaSun />,
    highlight: 'Diverse Programs',
    colleges: [
      'Indian Institute of Technology (IIT), Madras',
      'Vellore Institute of Technology (VIT)',
      'Anna University, Chennai',
      'National Institute of Technology (NIT), Trichy',
      'SRM Institute of Science and Technology'
    ]
  },
  {
    id: 'kerala',
    name: 'Kerala',
    state: 'God\'s Own Country',
    icon: <FaTree />,
    highlight: 'High Literacy & Quality',
    colleges: [
      'National Institute of Technology (NIT), Calicut',
      'Cochin University of Science and Technology (CUSAT)',
      'Indian Institute of Science Education and Research (IISER)',
      'University of Kerala',
      'Amrita Vishwa Vidyapeetham'
    ]
  },
  {
    id: 'punjab',
    name: 'Punjab',
    state: 'Land of Five Rivers',
    icon: <FaStar />,
    highlight: 'Vibrant Campus Life',
    colleges: [
      'Thapar Institute of Engineering and Technology',
      'Panjab University (PU), Chandigarh',
      'Lovely Professional University (LPU)',
      'Chandigarh University (CU)',
      'Dr. B. R. Ambedkar National Institute of Technology (NIT), Jalandhar'
    ]
  },
  {
    id: 'pune',
    name: 'Pune',
    state: 'Oxford of the East',
    icon: <FaMapMarkerAlt />,
    highlight: 'Cultural & Academic Hub',
    colleges: [
      'Savitribai Phule Pune University (SPPU)',
      'Symbiosis International University',
      'College of Engineering Pune (COEP)',
      'Fergusson College',
      'Armed Forces Medical College (AFMC)'
    ]
  }
];

function StudyInIndia() {
  return (
    <section id="study-in-india" className="study-in-india section">
      <div className="container">
        <div className="sii-header">
          <span className="sii-tagline">Discover Excellence</span>
          <h2 className="sii-title">
            Study in <span>India</span>
          </h2>
          <p className="sii-desc">
            Experience world-class education combined with rich cultural heritage in India's top academic destinations.
          </p>
        </div>

        <div className="sii-grid">
          {destinations.map((dest) => (
            <div key={dest.id} id={dest.id} className="sii-card">
              <div className="sii-location-header">
                <div className="sii-icon-wrapper">
                  {dest.icon}
                </div>
                <div>
                  <h3 className="sii-location-name">{dest.name}</h3>
                  <span className="sii-location-state">{dest.state}</span>
                </div>
              </div>
              
              <div className="sii-content">
                <h4>Top Institutions</h4>
                <ul className="sii-colleges-list">
                  {dest.colleges.map((college, idx) => (
                    <li key={idx}>{college}</li>
                  ))}
                </ul>
              </div>

              <div className="sii-card-footer">
                <span className="sii-highlight">{dest.highlight}</span>
                <button 
                  className="sii-card-btn" 
                  onClick={() => {
                    const el = document.getElementById('contact');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Apply in {dest.name}
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
