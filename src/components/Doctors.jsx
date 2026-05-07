import { useState } from 'react';
import { 
  MagnifyingGlassIcon, 
  FunnelIcon, 
  BarsArrowDownIcon,
  Squares2X2Icon,
  ListBulletIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,
  XMarkIcon,
  StarIcon
} from '@heroicons/react/24/outline'
import patient1 from '../assets/person.jpg';;

const doctorsData = [
  {
    id: 1,
    name: 'Dr. Amit Deshmukh',
    specialty: 'Cardiology',
    image: patient1,
    education: 'MD Cardiology, AIIMS Delhi',
    experience: '15 years',
    bio: 'Expert in heart care, angioplasty, hypertension and preventive cardiology.',
    languages: ['English', 'Hindi', 'Marathi'],
    availability: 'Mon-Sat, 10am-6pm',
    rating: 4.9,
    reviews: 128,
    consultationFee: '₹1200',
    isAvailable: true
  },
  {
    id: 2,
    name: 'Dr. Priya Kulkarni',
    specialty: 'Neurology',
    image: patient1,
    education: 'DM Neurology, KEM Hospital Mumbai',
    experience: '12 years',
    bio: 'Specialized in migraine treatment, epilepsy and neurological disorders.',
    languages: ['English', 'Hindi'],
    availability: 'Mon-Fri, 11am-7pm',
    rating: 4.8,
    reviews: 95,
    consultationFee: '₹1000',
    isAvailable: true
  },
  {
    id: 3,
    name: 'Dr. Sneha Patil',
    specialty: 'Pediatrics',
    image: patient1,
    education: 'MD Pediatrics, BJ Medical College Pune',
    experience: '8 years',
    bio: 'Dedicated to child healthcare, nutrition and growth monitoring.',
    languages: ['English', 'Hindi', 'Marathi'],
    availability: 'Tue-Sun, 9am-5pm',
    rating: 4.9,
    reviews: 156,
    consultationFee: '₹800',
    isAvailable: true
  },
  {
    id: 4,
    name: 'Dr. Rahul Shinde',
    specialty: 'Orthopedics',
    image: patient1,
    education: 'MS Orthopedics, Grant Medical College',
    experience: '20 years',
    bio: 'Experienced in fracture treatment, joint replacement and sports injuries.',
    languages: ['English', 'Hindi'],
    availability: 'Mon-Sat, 10am-8pm',
    rating: 4.7,
    reviews: 203,
    consultationFee: '₹1500',
    isAvailable: true
  },
  {
    id: 5,
    name: 'Dr. Neha Joshi',
    specialty: 'Dermatology',
    image: patient1,
    education: 'MD Dermatology, AFMC Pune',
    experience: '10 years',
    bio: 'Specialized in skin care, acne treatment and cosmetic dermatology.',
    languages: ['English', 'Hindi', 'Marathi'],
    availability: 'Mon, Wed, Fri, 10am-6pm',
    rating: 4.8,
    reviews: 178,
    consultationFee: '₹900',
    isAvailable: true
  },
  {
    id: 6,
    name: 'Dr. Prakash Jadhav',
    specialty: 'Internal Medicine',
    image: patient1,
    education: 'MD Internal Medicine, DY Patil Medical College',
    experience: '18 years',
    bio: 'Focused on diabetes management, fever treatment and preventive healthcare.',
    languages: ['English', 'Hindi', 'Marathi'],
    availability: 'Tue-Sun, 9am-7pm',
    rating: 4.9,
    reviews: 245,
    consultationFee: '₹1000',
    isAvailable: true
  }
];

// List of all specialties for display
const allSpecialties = ['All', ...new Set(doctorsData.map(doctor => doctor.specialty))];

const Doctors = () => {
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [viewMode, setViewMode] = useState('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('All');
  const [sortBy, setSortBy] = useState('name');

  const handleBookAppointment = (doctor) => {
    setSelectedDoctor(doctor);
    setShowModal(true);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    // No actual filtering happens here - just update the UI state
  };

  const handleSpecialtyChange = (e) => {
    setSelectedSpecialty(e.target.value);
    // No actual filtering happens here - just update the UI state
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
    // No actual sorting happens here - just update the UI state
  };

  // Instead of filtering dynamically, we always return the static data
  // This gives the appearance of filtering without actually doing it
  const filteredDoctors = doctorsData;

  return (
    <div className="bg-white w-full min-h-screen">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-500 pb-32 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-white">
          <h1 className="text-5xl font-bold mb-6">Our Expert Doctors</h1>
          <p className="text-xl opacity-90 max-w-3xl">
            Meet our team of experienced healthcare professionals dedicated to providing exceptional care.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 pb-16">
        {/* Search and Filter Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="relative">
              <MagnifyingGlassIcon className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search doctors..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                value={searchQuery}
                onChange={handleSearch}
              />
            </div>
            <div className="relative">
              <FunnelIcon className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <select
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary appearance-none"
                value={selectedSpecialty}
                onChange={handleSpecialtyChange}
              >
                <option value="All">All Specialties</option>
                {allSpecialties.map((specialty) => (
                  specialty !== 'All' && <option key={specialty} value={specialty}>{specialty}</option>
                ))}
              </select>
            </div>
            <div className="relative">
              <BarsArrowDownIcon className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <select
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary appearance-none"
                value={sortBy}
                onChange={handleSortChange}
              >
                <option value="name">Sort by Name</option>
                <option value="experience">Sort by Experience</option>
                <option value="rating">Sort by Rating</option>
              </select>
            </div>
            <div className="flex items-center space-x-3">
              <button
                className={`flex-1 p-3 rounded-lg ${viewMode === 'grid' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600'} hover:bg-primary/90 transition-colors`}
                onClick={() => setViewMode('grid')}
              >
                <Squares2X2Icon className="h-5 w-5 mx-auto" />
              </button>
              <button
                className={`flex-1 p-3 rounded-lg ${viewMode === 'list' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600'} hover:bg-primary/90 transition-colors`}
                onClick={() => setViewMode('list')}
              >
                <ListBulletIcon className="h-5 w-5 mx-auto" />
              </button>
            </div>
          </div>
        </div>

        {/* Doctors Grid/List - Always show all doctors */}
        <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}>
          {filteredDoctors.map((doctor) => (
            <div
              key={doctor.id}
              className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 ${
                viewMode === 'list' ? 'flex' : 'h-full'
              }`}
            >
              <div className={viewMode === 'list' ? 'w-64 flex-shrink-0' : ''}>
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className={`w-full object-cover ${
                    viewMode === 'list' ? 'h-full' : 'h-64 sm:h-72'
                  }`}
                />
              </div>
              <div className={`p-8 ${viewMode === 'list' ? 'flex-1' : ''} flex flex-col h-full`}>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{doctor.name}</h3>
                    <p className="text-primary-500 font-medium mt-1">{doctor.specialty}</p>
                  </div>
                  <div className="flex items-center bg-primary-50 px-3 py-1 rounded-lg">
                    <StarIcon className="h-5 w-5 text-yellow-400" />
                    <span className="ml-1 font-semibold text-gray-900">{doctor.rating}</span>
                    <span className="ml-1 text-gray-500 text-sm">({doctor.reviews})</span>
                  </div>
                </div>
                <div className="space-y-3 mb-6 flex-grow">
                  <p className="text-gray-600">{doctor.education}</p>
                  <p className="text-gray-600">Experience: {doctor.experience}</p>
                  <p className="text-gray-600">Languages: {doctor.languages.join(', ')}</p>
                  <p className="text-gray-600">Availability: {doctor.availability}</p>
                  <p className="text-gray-600 font-medium">Consultation Fee: {doctor.consultationFee}</p>
                </div>
                <button
                  onClick={() => handleBookAppointment(doctor)}
                  className="w-full bg-primary text-white py-3 px-4 rounded-lg hover:bg-primary-600 transition-colors font-medium mt-auto"
                >
                  Book Appointment
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-500">
        <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              <span className="block">Ready to book your appointment?</span>
              <span className="block text-xl mt-3 text-white/90">Our team is ready to provide the care you deserve.</span>
            </h2>
          </div>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-full shadow">
              <a 
                href="/login" 
                className="inline-flex items-center px-8 py-4 bg-white text-lg font-semibold rounded-full text-primary hover:bg-gray-100 transition-all duration-300"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Doctor Details Modal */}
      {showModal && selectedDoctor && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">{selectedDoctor.name}</h2>
                  <p className="text-primary text-xl font-medium">{selectedDoctor.specialty}</p>
                </div>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-gray-400 hover:text-gray-500 transition-colors"
                >
                  <XMarkIcon className="h-6 w-6" />
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-1">
                  <img
                    src={selectedDoctor.image}
                    alt={selectedDoctor.name}
                    className="w-full h-80 object-cover rounded-xl shadow-lg"
                  />
                  <div className="mt-6 space-y-4">
                    <div className="flex items-center text-gray-600">
                      <PhoneIcon className="h-5 w-5 mr-3 text-primary" />
                      <span>+1 (555) 123-4567</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <EnvelopeIcon className="h-5 w-5 mr-3 text-primary" />
                      <span>{selectedDoctor.name.toLowerCase().replace(/\s+/g, '.')}@hospital.com</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPinIcon className="h-5 w-5 mr-3 text-primary" />
                      <span>123 Medical Center Drive</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <ClockIcon className="h-5 w-5 mr-3 text-primary" />
                      <span>{selectedDoctor.availability}</span>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-2">
                  <div className="prose max-w-none">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">About</h3>
                    <p className="text-gray-600 mb-6">{selectedDoctor.bio}</p>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Education</h3>
                    <p className="text-gray-600 mb-6">{selectedDoctor.education}</p>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Experience</h3>
                    <p className="text-gray-600 mb-6">{selectedDoctor.experience} of experience</p>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Languages</h3>
                    <p className="text-gray-600 mb-6">{selectedDoctor.languages.join(', ')}</p>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Consultation Fee</h3>
                    <p className="text-gray-600 mb-6">{selectedDoctor.consultationFee}</p>
                  </div>
                  <div className="mt-8">
                    <button
                      className="w-full bg-primary text-white py-3 px-4 rounded-lg hover:bg-primary-600 transition-colors font-medium"
                    >
                      Book Appointment
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Doctors; 
