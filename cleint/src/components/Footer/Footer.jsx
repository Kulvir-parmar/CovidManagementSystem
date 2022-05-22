import './Footer.css'
export default function App() {
  return (
    <div className="footer">
      <section className='footer-sec'>
          <div className='row'>
            <div className='col-md-3 mx-auto'>
              <h4 className='text-uppercase'>
                Covid Management System
              </h4>
              <p className='para'>
                This is our very sundar website made with pure love and sheer dedication.
              </p>
            </div>
            <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Angular
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  React
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Vue
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Laravel
                </a>
              </p>
            </div>

            <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </div>
          </div>
      </section>
      <hr />
      <div className='text-center p-4'>
        © 2022 Copyright: Hospital Management
      </div>
    </div>
  );
}