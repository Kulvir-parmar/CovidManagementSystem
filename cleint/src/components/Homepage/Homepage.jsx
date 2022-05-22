import './Homepage.css'

import { UncontrolledCarousel } from 'reactstrap'

// Import Swiper styles
import "swiper/css";

function Homepage() {
  return (
    <div>
      <UncontrolledCarousel
        style={{
          width: "100%",
          height: "1rem"
        }}
        items={[
          {
            key: 1,
            src: '/Images/Hospital1.jpeg'
          },
          {
            key: 2,
            src: '/Images/Covid.jpeg'
          }
        ]}
      />

      {/* Text Area */}
      <div className="container">
      <div className='Row textArea'>
        <div className="why-ap-care artcl-sec col-md-6">
          <p className="sub-ttl">Who we are</p>
          <h2>Why Choose Us?</h2>
          <p>Established by Dr Prathap C Reddy in 1983, Apollo Healthcare has a robust presence across the healthcare ecosystem. From routine wellness &amp; preventive health care to innovative life-saving treatments and diagnostic services, Apollo Hospitals has touched more than 120 million lives from over 120 countries, offering the best clinical outcomes.</p>
          <ul className="check-list abv-sml-d-flx">
            <li><div className="d-flx itm-cntr" title="8,000+ Healing Hands">8,000+ Healing Hands</div><br />
              Largest network of the world’s finest and brightest medical experts who provide compassionate care using outstanding expertise and advanced technology.</li>
            <li><div className="d-flx itm-cntr" title="4,000+ Pharmacies">4,000+ Pharmacies</div><br />
              Apollo Pharmacy is India’s first, largest and most trusted branded pharmacy network, with over 4000 plus outlets covering the entire nation</li>
            <li><div className="d-flx itm-cntr" title="Most Advanced Healthcare Technology"> Most Advanced Healthcare Technology</div><br />
              Apollo Hospitals has been the pioneer in bringing ground-breaking healthcare technologies to India.</li>
            <li><div className="d-flx itm-cntr" title="Best Clinical Outcomes">Best Clinical Outcomes</div><br />
              Leveraging its vast medical expertise &amp; technological advantage, Apollo Hospitals has consistently delivered best in class clinical outcomes.</li>
          </ul>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Homepage