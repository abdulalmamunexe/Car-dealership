
import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { MOCK_CARS, MAKES, BODY_TYPES } from './constants';
import { Car, CarCondition, SearchFilters } from './types';
import CarCard from './components/CarCard';
import AIChat from './components/AIChat';

const Navbar = () => (
  <nav className="glass-effect sticky top-0 z-40 border-b border-gray-200">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-20">
        <div className="flex items-center">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </div>
            <span className="text-2xl font-black text-gray-900 tracking-tight">AUTOPRIME</span>
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/inventory" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Browse Cars</Link>
          <Link to="/sell" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Sell Your Car</Link>
          <Link to="/finance" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Financing</Link>
          <button className="bg-blue-600 text-white px-6 py-2.5 rounded-full font-bold hover:bg-blue-700 transition-all shadow-md hover:shadow-lg">
            Login
          </button>
        </div>
      </div>
    </div>
  </nav>
);

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://picsum.photos/id/1071/1920/1080" alt="Hero" className="w-full h-full object-cover brightness-[0.4]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white w-full">
          <div className="max-w-3xl">
            <h1 className="text-6xl md:text-8xl font-black mb-6 leading-[0.9]">
              DRIVE THE <span className="text-blue-500">FUTURE</span> TODAY.
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-gray-300 font-medium">
              Find your next new or pre-owned vehicle from the world's most trusted manufacturers. Seamless buying, transparent selling.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => navigate('/inventory')}
                className="bg-blue-600 px-10 py-5 rounded-full text-xl font-black hover:bg-blue-700 transition-all flex items-center justify-center gap-2"
              >
                Browse Inventory
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7-7 7" /></svg>
              </button>
              <button 
                onClick={() => navigate('/sell')}
                className="bg-white/10 backdrop-blur-md border border-white/30 px-10 py-5 rounded-full text-xl font-black hover:bg-white/20 transition-all"
              >
                Sell Your Car
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-4xl font-black text-gray-900">FEATURED LISTINGS</h2>
            <p className="text-gray-500 text-lg mt-2">The best deals in our showroom right now.</p>
          </div>
          <Link to="/inventory" className="text-blue-600 font-bold hover:underline mb-1">View All Inventory &rarr;</Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {MOCK_CARS.slice(0, 3).map(car => (
            <CarCard key={car.id} car={car} onClick={(c) => navigate(`/car/${c.id}`)} />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center">
            <div>
              <div className="text-5xl font-black text-blue-500 mb-2">500+</div>
              <div className="text-gray-400 font-medium">Cars in Stock</div>
            </div>
            <div>
              <div className="text-5xl font-black text-blue-500 mb-2">15k+</div>
              <div className="text-gray-400 font-medium">Happy Customers</div>
            </div>
            <div>
              <div className="text-5xl font-black text-blue-500 mb-2">12</div>
              <div className="text-gray-400 font-medium">Regional Locations</div>
            </div>
            <div>
              <div className="text-5xl font-black text-blue-500 mb-2">4.9/5</div>
              <div className="text-gray-400 font-medium">User Rating</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const Inventory = () => {
  const [filters, setFilters] = useState<SearchFilters>({});
  const navigate = useNavigate();

  const filteredCars = MOCK_CARS.filter(car => {
    if (filters.make && car.make !== filters.make) return false;
    if (filters.condition && car.condition !== filters.condition) return false;
    if (filters.bodyType && car.bodyType !== filters.bodyType) return false;
    if (filters.minPrice && car.price < filters.minPrice) return false;
    if (filters.maxPrice && car.price > filters.maxPrice) return false;
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-black text-gray-900 mb-8">BROWSE INVENTORY</h1>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filters Sidebar */}
        <div className="w-full lg:w-64 space-y-8 bg-white p-6 rounded-2xl border border-gray-200 shadow-sm h-fit">
          <div>
            <h3 className="font-bold text-gray-900 mb-4 uppercase tracking-wider text-xs">Condition</h3>
            <div className="space-y-2">
              {[CarCondition.NEW, CarCondition.USED, CarCondition.CERTIFIED].map(c => (
                <label key={c} className="flex items-center gap-2 cursor-pointer group">
                  <input 
                    type="radio" 
                    name="condition" 
                    className="w-4 h-4 text-blue-600 focus:ring-blue-500" 
                    onChange={() => setFilters({...filters, condition: c})}
                  />
                  <span className="text-sm text-gray-600 group-hover:text-blue-600 transition-colors">{c}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-4 uppercase tracking-wider text-xs">Make</h3>
            <select 
              className="w-full p-2 border border-gray-300 rounded-lg text-sm"
              onChange={(e) => setFilters({...filters, make: e.target.value || undefined})}
            >
              <option value="">All Makes</option>
              {MAKES.map(m => <option key={m} value={m}>{m}</option>)}
            </select>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-4 uppercase tracking-wider text-xs">Price Range</h3>
            <div className="flex gap-2">
              <input 
                type="number" 
                placeholder="Min" 
                className="w-full p-2 border border-gray-300 rounded-lg text-sm"
                onChange={(e) => setFilters({...filters, minPrice: Number(e.target.value) || undefined})}
              />
              <input 
                type="number" 
                placeholder="Max" 
                className="w-full p-2 border border-gray-300 rounded-lg text-sm"
                onChange={(e) => setFilters({...filters, maxPrice: Number(e.target.value) || undefined})}
              />
            </div>
          </div>

          <button 
            onClick={() => setFilters({})}
            className="w-full py-2 text-sm text-gray-500 hover:text-blue-600 font-bold transition-colors"
          >
            Clear All Filters
          </button>
        </div>

        {/* Main List */}
        <div className="flex-1">
          {filteredCars.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredCars.map(car => (
                <CarCard key={car.id} car={car} onClick={(c) => navigate(`/car/${c.id}`)} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200">
              <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 9.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <h3 className="text-xl font-bold text-gray-900">No cars found</h3>
              <p className="text-gray-500">Try adjusting your filters to find more results.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const SellCar = () => {
  const [submitted, setSubmitted] = useState(false);
  
  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-32 text-center">
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
        </div>
        <h1 className="text-4xl font-black text-gray-900 mb-4">WE'VE RECEIVED YOUR INFO!</h1>
        <p className="text-gray-500 text-lg mb-8">One of our appraisers will contact you within 24 hours with an initial offer.</p>
        <button onClick={() => setSubmitted(false)} className="text-blue-600 font-bold hover:underline">Submit another vehicle</button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h1 className="text-6xl font-black text-gray-900 mb-8 leading-tight">GET A REAL <span className="text-blue-600">OFFER</span> IN MINUTES.</h1>
          <p className="text-xl text-gray-600 mb-10">We buy all makes and models. No hidden fees, no obligations. Just a fair price for your car.</p>
          
          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex-shrink-0 flex items-center justify-center font-bold">1</div>
              <div>
                <h3 className="font-bold text-lg">Enter Vehicle Details</h3>
                <p className="text-gray-500">Tell us about your car's make, model, year, and condition.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex-shrink-0 flex items-center justify-center font-bold">2</div>
              <div>
                <h3 className="font-bold text-lg">Get Initial Quote</h3>
                <p className="text-gray-500">Our AI-valuation tool provides an instant estimate.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex-shrink-0 flex items-center justify-center font-bold">3</div>
              <div>
                <h3 className="font-bold text-lg">Bring it In</h3>
                <p className="text-gray-500">Visit our nearest showroom for a quick inspection and get paid.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-10 rounded-3xl shadow-2xl border border-gray-100">
          <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase">Make</label>
                <input required type="text" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" placeholder="e.g. Toyota" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase">Model</label>
                <input required type="text" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" placeholder="e.g. Camry" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase">Year</label>
                <input required type="number" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" placeholder="2020" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase">Mileage</label>
                <input required type="number" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" placeholder="45,000" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-500 uppercase">Condition</label>
              <select className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none">
                <option>Excellent - Like New</option>
                <option>Good - Minor Wear</option>
                <option>Fair - Noticeable Wear</option>
                <option>Poor - Needs Repair</option>
              </select>
            </div>
            <button className="w-full bg-blue-600 text-white py-5 rounded-2xl text-xl font-black hover:bg-blue-700 transition-all shadow-xl shadow-blue-200">
              Get My Valuation
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const CarDetail = () => {
  // In a real app, you'd fetch by ID. Here we just take the first one or mock based on ID
  const car = MOCK_CARS[0];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-6">
          <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
            <img src={car.imageUrl} alt={car.model} className="w-full h-full object-cover" />
          </div>
          <div className="grid grid-cols-3 gap-4">
            <img src="https://picsum.photos/id/1073/400/300" className="rounded-2xl h-32 w-full object-cover" />
            <img src="https://picsum.photos/id/1074/400/300" className="rounded-2xl h-32 w-full object-cover" />
            <img src="https://picsum.photos/id/1075/400/300" className="rounded-2xl h-32 w-full object-cover" />
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase">{car.condition}</span>
              <span className="text-gray-500 font-medium">#{car.id}39482</span>
            </div>
            <h1 className="text-5xl font-black text-gray-900 mb-2">{car.year} {car.make} {car.model}</h1>
            <p className="text-3xl font-extrabold text-blue-600">${car.price.toLocaleString()}</p>
          </div>

          <div className="grid grid-cols-2 gap-6 bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
            <div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Mileage</p>
              <p className="text-lg font-bold">{car.mileage.toLocaleString()} miles</p>
            </div>
            <div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Fuel Type</p>
              <p className="text-lg font-bold">{car.fuelType}</p>
            </div>
            <div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Transmission</p>
              <p className="text-lg font-bold">{car.transmission}</p>
            </div>
            <div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Body Type</p>
              <p className="text-lg font-bold">{car.bodyType}</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold">Key Features</h3>
            <div className="flex flex-wrap gap-2">
              {car.features.map(f => (
                <span key={f} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">{f}</span>
              ))}
            </div>
          </div>

          <div className="pt-8 border-t space-y-4">
            <button className="w-full bg-blue-600 text-white py-5 rounded-2xl text-xl font-black hover:bg-blue-700 transition-all">
              Reserve This Vehicle
            </button>
            <button className="w-full bg-white text-gray-900 border-2 border-gray-200 py-5 rounded-2xl text-xl font-black hover:bg-gray-50 transition-all">
              Schedule Test Drive
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Footer = () => (
  <footer className="bg-white border-t border-gray-200 py-16 mt-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </div>
            <span className="text-xl font-black text-gray-900 tracking-tight">AUTOPRIME</span>
          </div>
          <p className="text-gray-500 text-sm">Elevating the automotive experience through technology, transparency, and top-tier service.</p>
        </div>
        <div>
          <h4 className="font-bold text-gray-900 mb-6">Inventory</h4>
          <ul className="space-y-4 text-sm text-gray-500">
            <li><Link to="/inventory" className="hover:text-blue-600">New Vehicles</Link></li>
            <li><Link to="/inventory" className="hover:text-blue-600">Used Vehicles</Link></li>
            <li><Link to="/inventory" className="hover:text-blue-600">Electric Vehicles</Link></li>
            <li><Link to="/inventory" className="hover:text-blue-600">Certified Pre-Owned</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-gray-900 mb-6">Company</h4>
          <ul className="space-y-4 text-sm text-gray-500">
            <li><a href="#" className="hover:text-blue-600">About Us</a></li>
            <li><a href="#" className="hover:text-blue-600">Our Showrooms</a></li>
            <li><a href="#" className="hover:text-blue-600">Careers</a></li>
            <li><a href="#" className="hover:text-blue-600">Press</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-gray-900 mb-6">Support</h4>
          <ul className="space-y-4 text-sm text-gray-500">
            <li><a href="#" className="hover:text-blue-600">Help Center</a></li>
            <li><a href="#" className="hover:text-blue-600">Contact Us</a></li>
            <li><a href="#" className="hover:text-blue-600">Finance Terms</a></li>
            <li><a href="#" className="hover:text-blue-600">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
      <div className="pt-16 border-t mt-16 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} AutoPrime Dealership Group. All rights reserved.
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/sell" element={<SellCar />} />
            <Route path="/car/:id" element={<CarDetail />} />
          </Routes>
        </main>
        <Footer />
        <AIChat />
      </div>
    </Router>
  );
}
