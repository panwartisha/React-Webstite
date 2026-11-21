

function Footer(){
      return (
    <footer className="bg-light text-danger pt-5 pb-3 border-top mt-5">
      <div className="container">
        <div className="row">

          {/* About */}
          <div className="col-lg-4 col-md-6 mb-4">
            <h6 className="fw-bold mb-3 ">Computer Guru Institute</h6>
            <p className="text-secondary">
              Empowering individuals with quality computer education and practical skills for a brighter future. From basic computer literacy to advanced diploma programs, we help students and professionals across Rishikesh gain the skills they need to succeed.
            </p>

            <div className="d-flex gap-3">
              <a href="#" className="text-white fs-5">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="text-white fs-5">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="text-white fs-5">
                <i className="bi bi-twitter-x"></i>
              </a>
              <a href="#" className="text-white fs-5">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6 mb-4">
            <h5 className="fw-bold mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="/" className="text-secondary text-decoration-none">Home</a></li>
              <li className="mb-2"><a href="/about" className="text-secondary text-decoration-none">About Us</a></li>
              <li className="mb-2"><a href="/services" className="text-secondary text-decoration-none">Courses</a></li>
              <li className="mb-2"><a href="/contact" className="text-secondary text-decoration-none">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="fw-bold mb-3">Our Courses</h5>
            <ul className="list-unstyled">
              <li className="mb-2 text-secondary">Web Development</li>
              <li className="mb-2 text-secondary">UI/UX Design</li>
              <li className="mb-2 text-secondary">Digital Marketing</li>
              <li className="mb-2 text-secondary">SEO Optimization</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="fw-bold mb-3">Contact Us</h5>
            <p className="text-secondary">
              <i className="bi bi-geo-alt me-2"></i>
            New Delhi, IndiaGali No. 15, Geeta Nagar, IDPL, Virbhadra, Rishikesh,
Dist.- Dehradun, Uttarakhand-249202
            </p>
            <p className="text-secondary">
              <i className="bi bi-envelope me-2"></i>
              cgtirishikesh@gmail.com
            </p>
            <p className="text-secondary">
              <i className="bi bi-telephone me-2"></i>
            +91-7500679066, 7455857367
            </p>
          </div>

        </div>

        <hr className="border-secondary" />

        {/* Copyright */}
        <div className="row align-items-center text-center">

          
            <a href="/privacy" className="text-secondary text-decoration-none me-3">
             © 2026 Computer Guru Training Institute. All Rights Reserved.
            </a>
         
        </div>

      </div>
    </footer>
  );
};

export default Footer;