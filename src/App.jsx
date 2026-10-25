import { useState } from 'react';
import ServicesPage from './ServicesPage.jsx';
import { ArrowDown, ArrowRight, Check, ChevronDown, Menu, MessageCircle, Scissors, Sparkles, Ruler, Heart, MapPin, Calculator, CalendarDays, Images, BookOpen, Shirt, X } from 'lucide-react';

const WA_NUMBER = '923081042020';
const whatsappLink = (message = 'Assalam-o-Alaikum! I would like to ask about stitching an outfit.') =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;

const collections = [
  {
    number: '01',
    title: 'Everyday & Casual',
    description: 'Comfortable, thoughtfully stitched outfits for everyday moments.',
    tag: 'YOUR DAILY FAVOURITES',
    className: 'casual',
    symbol: '✿',
  },
  {
    number: '02',
    title: 'Formal Wear',
    description: 'A little extra detail for dinners, celebrations and special days.',
    tag: 'MADE FOR THE MOMENT',
    className: 'formal',
    symbol: '✧',
  },
  {
    number: '03',
    title: 'Custom Designs',
    description: 'Bring your reference, fabric or idea. Let’s make it yours.',
    tag: 'YOUR IDEA, YOUR FIT',
    className: 'custom',
    symbol: '❋',
  },
];

const steps = [
  { number: '01', title: 'Share your idea', text: 'Send a design reference, describe your outfit, or ask us what will work best.' },
  { number: '02', title: 'Discuss measurements', text: 'We’ll guide you through the measurements and details needed for your order.' },
  { number: '03', title: 'Confirm your order', text: 'Agree on the style, fabric details and timeline with us on WhatsApp.' },
];

function WhatsAppButton({ children = 'Order on WhatsApp', className = '', message }) {
  return (
    <a className={`button button-primary ${className}`} href={whatsappLink(message)} target="_blank" rel="noreferrer">
      <MessageCircle size={18} strokeWidth={2} />
      <span>{children}</span>
      <ArrowRight size={17} />
    </a>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState(0);
  const [fabricOutfit, setFabricOutfit] = useState('three-piece');
  const [fabricWidth, setFabricWidth] = useState('standard');
  const [fabricSize, setFabricSize] = useState('medium');
  const [appointmentOutfit, setAppointmentOutfit] = useState('Custom suit');
  const [appointmentDate, setAppointmentDate] = useState('');
  const fabricBase = { shirt: 2.5, 'two-piece': 4, 'three-piece': 5.5, 'party-wear': 6.5, 'bridal-wear': 8 };
  const fabricEstimate = (fabricBase[fabricOutfit] * (fabricWidth === 'narrow' ? 1.2 : 1) + (fabricSize === 'large' ? 0.5 : fabricSize === 'small' ? -0.25 : 0)).toFixed(1);

  const closeMenu = () => setMenuOpen(false);
  const faqs = [
    { q: 'How do I place an order?', a: 'Tap any WhatsApp order button. Tell us what you have in mind and we’ll discuss the design, measurements and next steps with you.' },
    { q: 'Can I bring my own design or reference picture?', a: 'Yes! You can share a reference photo, a sketch or simply describe the look you want. We’ll talk through the details before confirming.' },
    { q: 'How do I share my measurements?', a: 'Message us on WhatsApp first. We’ll explain which measurements are needed and how to provide them. Please confirm the measurement and fitting process with us before placing your order.' },
    { q: 'How long will stitching take?', a: 'Timing depends on the outfit, design details and current orders. Message us with your requirements so we can discuss an estimated completion date.' },
  ];

  if (window.location.pathname === '/services' || window.location.pathname === '/services/') return <ServicesPage />;

  return (
    <div className="site-shell">
      <div className="announcement"><Sparkles size={14} /> A little care in every stitch <span className="announcement-dot">·</span> Custom orders welcome</div>
      <header className="site-header">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Arisha Stitching home">
          <span className="brand-mark"><Scissors size={24} /></span>
          <span className="brand-copy"><strong>arisha</strong><small>STITCHING STUDIO</small></span>
        </a>
        <button className="menu-toggle" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X /> : <Menu />}
        </button>
        <nav className={menuOpen ? 'main-nav nav-open' : 'main-nav'}>
          <a href="/services" onClick={closeMenu}>Services</a>
          <a href="/services" onClick={closeMenu}>Stitching</a>
          <a href="#rate-list" onClick={closeMenu}>Rate List</a>
          <a href="#our-work" onClick={closeMenu}>Gallery</a>
          <a href="#our-work" onClick={closeMenu}>Our work</a>
          <a href="#location" onClick={closeMenu}>Location</a>
          <WhatsAppButton className="nav-cta" message="Assalam-o-Alaikum! I’d like to enquire about an order at Arisha Stitching.">Let’s talk</WhatsAppButton>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-line" /> LADIES TAILORING &amp; CUSTOM STITCHING</div>
            <h1>Wear the feeling<br />of <em>being you.</em></h1>
            <p className="hero-intro">Thoughtful stitching for your everyday wardrobe, special occasions and the designs you’ve been dreaming of.</p>
            <div className="hero-actions">
              <WhatsAppButton message="Assalam-o-Alaikum! I’d like to discuss an outfit with Arisha Stitching." />
              <a href="#rate-list" className="text-link">View stitching rates <ArrowDown size={16} /></a>
            </div>
            <div className="hero-note"><span className="note-icon"><Heart size={16} /></span><span><strong>Your style comes first.</strong><br />Made around your ideas and preferences.</span></div>
          </div>
          <div className="hero-art" aria-label="Decorative fashion illustration">
            <div className="art-sun" />
            <div className="art-stamp">MADE<br />WITH LOVE <Heart size={15} fill="currentColor" /></div>
            <div className="fabric fabric-back" />
            <div className="fabric fabric-main">
              <div className="fabric-neck" />
              <div className="fabric-embroidery embroidery-one">✿　✧　✿</div>
              <div className="fabric-embroidery embroidery-two">✧　✿　✧</div>
              <div className="fabric-border" />
            </div>
            <div className="art-flower flower-one">✿</div><div className="art-flower flower-two">✧</div>
            <div className="art-caption"><span>01 / 03</span><span>THE ART OF A PERFECT FIT</span></div>
          </div>
          <div className="hero-bottom"><span>DETAILS MATTER</span><span className="bottom-line" /><span>FROM FIRST IDEA TO FINAL STITCH</span></div>
        </section>

        <section className="custom-section" id="stitching">
          <div className="custom-visual">
            <div className="custom-circle circle-back" /><div className="custom-circle circle-front" />
            <div className="custom-thread"><span>✧</span><span>✿</span><span>✧</span></div>
            <div className="custom-label"><Scissors size={16} /> DESIGNED AROUND YOU</div>
          </div>
          <div className="custom-copy">
            <div className="eyebrow"><span className="eyebrow-line" /> HAVE SOMETHING IN MIND?</div>
            <h2>Your idea.<br />Your fabric.<br /><em>Your kind of fit.</em></h2>
            <p>Sometimes you know exactly what you want. Sometimes you have a picture saved and need help bringing it to life. Either way, let’s talk through your custom stitching idea together.</p>
            <ul className="check-list"><li><Check size={17} /> Share an inspiration picture or sketch</li><li><Check size={17} /> Discuss fabric, details and fit preferences</li><li><Check size={17} /> Confirm the order before we begin</li></ul>
            <WhatsAppButton message="Assalam-o-Alaikum! I have an idea for a custom outfit. Can I share a reference picture and discuss the details?" />
            <span className="small-note">Every design is discussed individually before an order is confirmed.</span>
          </div>
        </section>

        <section className="rate-list-section section" id="rate-list">
          <div className="section-heading"><div><div className="eyebrow"><span className="eyebrow-line" /> ARISHA STITCHING</div><h2>Stitching <em>rate list.</em></h2></div><p>Prices are in Pakistani rupees. Please confirm the final rate and availability before placing your order.</p></div>
          <div className="rate-list-grid">
            <div className="rate-list-card"><h3>Stitching Rates</h3>{[['Simple Suit','1,000'],['Dori Piping Suit','1,200'],['Lining Suit / Party Wear','2,000'],['Frock','1,500'],['Short Frock','1,300'],['Angrakha Suit','1,800'],['Pishwas','1,800'],['Anarkali Dress','1,800'],['Kaftan','1,500'],['Gown Style (Full-Length)','2,500'],['Simple Shirt','800'],['Dori Piping Shirt','1,000'],['Lining Shirt','1,500'],['Open Shirt','1,200'],['Peplum Top','1,500'],['Jacket Style Suit','1,600'],['Ghagra + Shirt','2,000'],['Ghagra + Shirt with Lining','2,500']].map(([n,p])=><div className="rate-row" key={n}><span>{n}</span><strong>Rs. {p}</strong></div>)}</div>
            <div className="rate-list-side">
              <div className="rate-list-card"><h3>Bottoms Collection</h3>{[['Simple Trouser','200'],['Simple Shalwar','200'],['Bell Bottom','250'],['Sharara','450'],['Farshi Shalwar','500'],['Flazo','300'],['Designing Trouser','500'],['Tulip Shalwar','350'],['Cigarette Pants','400'],['Churidar Pajama','300'],['Capri','300'],['Dhoti Shalwar','500'],['Garara','800'],['Culottes','400'],['Patiala Shalwar','450']].map(([n,p])=><div className="rate-row" key={n}><span>{n}</span><strong>Rs. {p}</strong></div>)}</div>
              <div className="rate-list-card"><h3>Dupatta &amp; Finishing Work</h3>{[['Dori Piping Dupatta','350'],['Lace Work Dupatta','400'],['Gotapati Work Dupatta','500'],['Stone Work Dupatta','600'],['Tassel Finishing','250']].map(([n,p])=><div className="rate-row" key={n}><span>{n}</span><strong>Rs. {p}</strong></div>)}</div>
              <div className="rate-list-card"><h3>Extra Services</h3><div className="rate-row"><span>Alteration / Fitting</span><strong>Rs. 300–500</strong></div></div>
            </div>
          </div>
          <div className="rate-contact-cta"><div><h3>Need a custom quote?</h3><p>Send your dress reference on WhatsApp to discuss design and final price.</p></div><a className="button button-primary" href="https://wa.me/923081042020?text=Assalam-o-Alaikum%21%20Please%20confirm%20the%20latest%20stitching%20rates." target="_blank" rel="noreferrer"><MessageCircle size={17}/> Confirm rates on WhatsApp <ArrowRight size={16}/></a></div>
        </section>
        <section className="section service-categories" id="stitching-services">
          <div className="section-heading">
            <div><div className="eyebrow"><span className="eyebrow-line" /> STITCHING SERVICES</div><h2>Made for your<br /><em>kind of occasion.</em></h2></div>
            <p>Choose a style below, then message us to discuss your design, fabric, measurements and timeline before confirming your order.</p>
          </div>
          <div className="service-grid">
            <article className="service-card" id="casual-wear"><span className="service-icon"><Shirt /></span><span className="service-kicker">EVERYDAY STYLE</span><h3>Casual Wear</h3><p>Everyday suits and comfortable outfits planned around your preferred cut, sleeves, neckline and fit.</p><a href={whatsappLink('Assalam-o-Alaikum! I want to discuss casual wear stitching.')} target="_blank" rel="noreferrer" className="text-link">Enquire about casual wear <ArrowRight size={15}/></a></article>
            <article className="service-card" id="party-wear"><span className="service-icon"><Sparkles /></span><span className="service-kicker">SPECIAL OCCASIONS</span><h3>Party Wear</h3><p>Discuss dressy cuts, embellishment details and finishing for dinners, celebrations and events.</p><a href={whatsappLink('Assalam-o-Alaikum! I want to discuss party-wear stitching.')} target="_blank" rel="noreferrer" className="text-link">Enquire about party wear <ArrowRight size={15}/></a></article>
            <article className="service-card" id="bridal-wear"><span className="service-icon"><Heart /></span><span className="service-kicker">MADE FOR YOUR DAY</span><h3>Bridal Wear</h3><p>Share your bridal reference and ask about design complexity, fittings, embellishments and lead time.</p><a href={whatsappLink('Assalam-o-Alaikum! I would like to ask about bridal-wear stitching and availability.')} target="_blank" rel="noreferrer" className="text-link">Ask about bridal wear <ArrowRight size={15}/></a></article>
            <article className="service-card" id="western-wear"><span className="service-icon"><Scissors /></span><span className="service-kicker">YOUR OWN LOOK</span><h3>Western Wear</h3><p>Talk through shirts, dresses, co-ords or other western-inspired outfits using your own reference.</p><a href={whatsappLink('Assalam-o-Alaikum! I want to discuss a western-wear outfit.')} target="_blank" rel="noreferrer" className="text-link">Enquire about western wear <ArrowRight size={15}/></a></article>
            <article className="service-card" id="alteration"><span className="service-icon"><Ruler /></span><span className="service-kicker">FIT & FINISH</span><h3>Alterations</h3><p>Ask whether a length, waist, sleeve or fit adjustment is possible for your specific garment.</p><a href={whatsappLink('Assalam-o-Alaikum! I would like to ask about clothing alterations.')} target="_blank" rel="noreferrer" className="text-link">Ask about alterations <ArrowRight size={15}/></a></article>
            <article className="service-card"><span className="service-icon"><Images /></span><span className="service-kicker">PERSONAL DESIGN</span><h3>Custom Stitching</h3><p>Bring your fabric, sketch or inspiration picture and discuss a design that suits your preferences.</p><a href={whatsappLink('Assalam-o-Alaikum! I want to discuss custom stitching and share a design reference.')} target="_blank" rel="noreferrer" className="text-link">Discuss a custom design <ArrowRight size={15}/></a></article>
          </div>
        </section>

        <section className="work-section section" id="our-work">
          <div className="center-heading"><div className="eyebrow"><span className="eyebrow-line" /> STYLE INSPIRATION <span className="eyebrow-line" /></div><h2>Ideas to make <em>your own.</em></h2><p>These are illustrative style panels, not photos of completed customer orders. Share a reference image on WhatsApp to discuss your preferred look.</p></div>
          <div className="work-grid">
            <a className="work-tile work-casual" href="#casual-wear"><img className="work-image" src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=85" alt="Traditional embroidered outfit inspiration" loading="lazy" /><span>01 / EVERYDAY</span><strong>Soft & simple</strong></a>
            <a className="work-tile work-party" href="#party-wear"><img className="work-image" src="https://images.unsplash.com/photo-1583391733956-6c78276477e3?auto=format&fit=crop&w=900&q=85" alt="Elegant occasion wear inspiration" loading="lazy" /><span>02 / OCCASION</span><strong>Details that shine</strong></a>
            <a className="work-tile work-bridal" href="#bridal-wear"><img className="work-image" src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=900&q=85" alt="Special occasion dress inspiration" loading="lazy" /><span>03 / CELEBRATION</span><strong>Made for your moment</strong></a>
            <a className="work-tile work-western" href="#western-wear"><img className="work-image" src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=85" alt="Modern fashion outfit inspiration" loading="lazy" /><span>04 / MODERN</span><strong>Your own silhouette</strong></a>
          </div>
        </section>

        <section className="location-section" id="location">
          <div className="location-mark"><MapPin size={27}/></div>
          <div className="location-copy"><div className="eyebrow"><span className="eyebrow-line" /> LADIES TAILOR IN LAHORE</div><h2>Arisha Stitching — Lahore</h2><p>Looking for a ladies tailor in Lahore, ladies suit stitching, custom dress stitching, alterations or party-wear tailoring? Contact Arisha Stitching to discuss your design, measurements, stitching rates and order availability before visiting.</p><a className="button button-primary" href="https://share.google/3DraUMLWvVehAA4rL" target="_blank" rel="noreferrer"><MapPin size={17}/> Open Google Maps <ArrowRight size={16}/></a></div>
          <div className="map-frame"><iframe title="Arisha Stitching Lahore map" src="https://www.google.com/maps?q=Arisha%20Stitching%20Lahore%20Pakistan&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen /></div>
        </section>
        <section className="local-seo" aria-label="Ladies tailoring services in Lahore"><h2>Ladies tailoring and suit stitching in Lahore</h2><p>Arisha Stitching helps customers enquire about ladies tailor services in Lahore, Pakistani suit stitching, shalwar kameez stitching, custom ladies suits, shirt and trouser stitching, casual wear, formal wear, party wear, frocks, maxi dresses, pishwas, anarkali dresses, kaftans, dupatta finishing, lace work, dori piping and clothing alterations. Share a reference photo on WhatsApp to discuss your preferred design, fitting, fabric details, estimated cost and timeline. Service availability and final prices should be confirmed directly before ordering.</p></section>

        <section className="faq-section section" id="faq">
          <div className="faq-intro"><div className="eyebrow"><span className="eyebrow-line" /> GOOD TO KNOW</div><h2>A few things<br /><em>you might wonder.</em></h2><p>Still have a question? We’re just a WhatsApp message away.</p><a href={whatsappLink('Assalam-o-Alaikum! I have a question about Arisha Stitching.')} target="_blank" rel="noreferrer" className="text-link">Ask a question <ArrowRight size={16} /></a></div>
          <div className="faq-list">{faqs.map((faq, i) => <div className={faqOpen === i ? 'faq-item faq-active' : 'faq-item'} key={faq.q}><button onClick={() => setFaqOpen(faqOpen === i ? -1 : i)} aria-expanded={faqOpen === i}><span>{faq.q}</span><ChevronDown size={19} /></button>{faqOpen === i && <p>{faq.a}</p>}</div>)}</div>
        </section>

        <section className="final-cta"><div className="final-flower">✿</div><div className="eyebrow"><span className="eyebrow-line" /> LET’S MAKE SOMETHING LOVELY</div><h2>Have an outfit<br />in <em>mind?</em></h2><p>Tell us what you’re thinking. We’ll take it from there, one stitch at a time.</p><WhatsAppButton message="Assalam-o-Alaikum! I’d like to start an order with Arisha Stitching." /></section>
      </main>

      <footer className="site-footer">
        <a className="brand footer-brand" href="#home"><span className="brand-mark"><Scissors size={23} /></span><span className="brand-copy"><strong>arisha</strong><small>STITCHING STUDIO</small></span></a>
        <p>Thoughtful stitching, made personal.</p>
        <div className="footer-links"><a href="/services">Services</a><a href="/services">Stitching</a><a href="#rate-list">Rate List</a><a href="#party-wear">Party wear</a><a href="#bridal-wear">Bridal wear</a><a href="#casual-wear">Casual wear</a><a href="#western-wear">Western wear</a><a href="#alteration">Alterations</a><a href="#our-work">Our work</a><a href="#location">Location</a><a href="#location">Book appointment</a><a href="#faq">FAQs</a><a href={whatsappLink()} target="_blank" rel="noreferrer"><MessageCircle size={15} /> WhatsApp</a><a href="https://share.google/3DraUMLWvVehAA4rL" target="_blank" rel="noreferrer" aria-label="View Arisha Stitching on Google">Google Business Profile</a></div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} Arisha Stitching. Made with care.</span><span>Every stitch tells a story.</span></div>
      </footer>
      <a className="floating-whatsapp" href={whatsappLink('Assalam-o-Alaikum! I’d like to enquire about stitching.')} target="_blank" rel="noreferrer" aria-label="Chat with Arisha Stitching on WhatsApp"><MessageCircle size={23} /><span>Chat with us</span></a>
    </div>
  );
}

export default App;
