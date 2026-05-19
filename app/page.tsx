export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <header className="bg-gray-900 text-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left mb-2 md:mb-0">
              <h1 className="text-xl md:text-2xl font-bold">जीव सेवा</h1>
              <p className="text-xs opacity-90">Jeev Sewa Samiti, Ajmer</p>
            </div>
            <nav className="flex gap-5 text-sm">
              <a href="#home" className="hover:text-red-400 transition">Home</a>
              <a href="#about" className="hover:text-red-400 transition">About</a>
              <a href="#services" className="hover:text-red-400 transition">Services</a>
              <a href="#contact" className="hover:text-red-400 transition">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-6">
                <div className="text-center">
                  {/* <div className="text-3xl font-bold text-gray-800">जीव सेवा</div>
                  <div className="text-xs text-gray-600">सत्यम् शिवम् सुन्दरम्</div> */}
                  <img src="/images/logo.jpeg" alt="Logo" className="w-24 h-24 rounded-full object-contain" />
                </div>
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Dayal Veena Charitable Diagnostic & Research Centre
            </h2>
            <p className="text-xl text-gray-600 font-semibold mb-6">
              A Venture of Jeev Sewa Samiti, Ajmer
            </p>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
              Providing quality diagnostic services with compassion and care. 
              Committed to serving the community with advanced medical technology and expert healthcare professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="bg-red-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-800 transition">
                Contact Us
              </a>
              <a href="#services" className="border-2 border-red-700 text-red-700 px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition">
                Our Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
              About Us
            </h2>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Dayal Veena Charitable Diagnostic & Research Centre is a dedicated healthcare facility 
                operating under the esteemed Jeev Sewa Samiti, Ajmer. Our mission is to provide 
                accessible, accurate, and affordable diagnostic services to the community.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Guided by the principles of <span className="font-semibold text-red-700">सत्यम् (Satyam)</span>, 
                <span className="font-semibold text-red-700"> शिवम् (Shivam)</span>, and 
                <span className="font-semibold text-red-700"> सुन्दरम् (Sundaram)</span>, 
                we strive to deliver truthful, benevolent, and beautiful healthcare services.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Our centre believes in <span className="font-semibold text-red-700">वसुदेव कुटुम्बकम्</span> 
                (Vasudhaiva Kutumbakam) - the world is one family, and we treat every patient 
                with the care and compassion they deserve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center">
            Our Diagnostic Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition">
              <div className="w-12 h-12 bg-red-700 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Pathology Services</h3>
              <p className="text-gray-600">Complete blood tests, biochemical analysis, and specialized pathology investigations.</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition">
              <div className="w-12 h-12 bg-red-700 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Radiology</h3>
              <p className="text-gray-600">X-ray, ultrasound, and advanced imaging services for accurate diagnosis.</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition">
              <div className="w-12 h-12 bg-red-700 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Biochemistry</h3>
              <p className="text-gray-600">Comprehensive metabolic panels and specialized biochemical testing.</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition">
              <div className="w-12 h-12 bg-red-700 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Hematology</h3>
              <p className="text-gray-600">Complete blood count, coagulation studies, and blood disorder diagnostics.</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition">
              <div className="w-12 h-12 bg-red-700 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Microbiology</h3>
              <p className="text-gray-600">Culture and sensitivity testing, infection diagnosis, and antimicrobial testing.</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition">
              <div className="w-12 h-12 bg-red-700 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Research Services</h3>
              <p className="text-gray-600">Advanced diagnostic research and clinical trial support services.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center">
            Contact Us
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">Address</p>
                        <p className="text-gray-600">78/X, Civil Lines, Savitri College Road,<br />Opp. Medical Girls Hostel,<br />AJMER - 305 001 (India)</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">Phone</p>
                        <p className="text-gray-600">0091-145-2626626, 2626627, 2626628</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">Email</p>
                        <p className="text-gray-600">jeev.sewa@yahoo.com</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">Fax</p>
                        <p className="text-gray-600">2626666</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Operating Hours</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="text-gray-600">Monday - Saturday</span>
                      <span className="font-semibold text-gray-800">8:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="text-gray-600">Sunday</span>
                      <span className="font-semibold text-gray-800">8:00 AM - 12:00 PM</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="text-gray-600">Emergency Services</span>
                      <span className="font-semibold text-red-700">24/7 Available</span>
                    </div>
                  </div>

                  <div className="mt-8 p-4 bg-red-50 rounded-lg">
                    <p className="text-sm text-gray-700">
                      <span className="font-semibold text-red-700">Note:</span> For emergency services, 
                      please call our helpline numbers. We are committed to providing prompt 
                      diagnostic services when you need them most.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-xl font-bold mb-4">जीव सेवा</h4>
              <p className="text-sm opacity-90 mb-2">Jeev Sewa Samiti, Ajmer</p>
              <p className="text-sm opacity-80">Serving the community with compassion and care since inception.</p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#home" className="hover:text-red-400 transition">Home</a></li>
                <li><a href="#about" className="hover:text-red-400 transition">About Us</a></li>
                <li><a href="#services" className="hover:text-red-400 transition">Services</a></li>
                <li><a href="#contact" className="hover:text-red-400 transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Contact Info</h4>
              <p className="text-sm opacity-90 mb-2">78/X, Civil Lines, Ajmer - 305001</p>
              <p className="text-sm opacity-90 mb-2">Phone: 0091-145-2626626</p>
              <p className="text-sm opacity-90">Email: jeev.sewa@yahoo.com</p>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center">
            <div className="flex justify-center gap-6 mb-4">
              <a href="https://wa.me/911452626626" target="_blank" rel="noopener noreferrer" className="hover:text-red-400 transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
              <a href="https://facebook.com/jeevsewasamiti" target="_blank" rel="noopener noreferrer" className="hover:text-red-400 transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://youtube.com/@jeevsewasamiti" target="_blank" rel="noopener noreferrer" className="hover:text-red-400 transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
            <p className="text-sm opacity-80">
              © {new Date().getFullYear()} Dayal Veena Charitable Diagnostic & Research Centre. 
              A Venture of Jeev Sewa Samiti, Ajmer. All rights reserved.
            </p>
            <p className="text-xs opacity-70 mt-2">
              सत्यम् शिवम् सुन्दरम् | वसुदेव कुटुम्बकम्
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
