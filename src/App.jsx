import { useState } from 'react';
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
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#stitching" onClick={closeMenu}>Stitching</a>
          <a href="#collections" onClick={closeMenu}>Collections</a>
          <a href="#our-work" onClick={closeMenu}>Our work</a>
          <a href="#book-appointment" onClick={closeMenu}>Appointment</a>
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
              <a href="#collections" className="text-link">Explore collections <ArrowDown size={16} /></a>
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

        <section className="trust-strip" id="about" aria-label="Our approach">
          <div><Scissors /><span>Thoughtful stitching</span></div><i />
          <div><Heart /><span>Personal style first</span></div><i />
          <div><MessageCircle /><span>Easy WhatsApp enquiries</span></div>
        </section>

        <section className="section collections-section" id="collections">
          <div className="section-heading">
            <div><div className="eyebrow"><span className="eyebrow-line" /> FIND YOUR FIT</div><h2>A collection for<br /><em>every kind of day.</em></h2></div>
            <p>Whether you’re keeping it simple or dressing up for a moment that matters, start with the style that feels right to you.</p>
          </div>
          <div className="collection-grid">
            {collections.map((item) => (
              <article className={`collection-card ${item.className}`} key={item.number}>
                <div className="collection-art">
                  <span className="collection-number">{item.number}</span>
                  <span className="collection-symbol">{item.symbol}</span>
                  <div className="swatch swatch-one" /><div className="swatch swatch-two" /><div className="swatch swatch-three" />
                  <span className="collection-tag">{item.tag}</span>
                </div>
                <div className="collection-info"><div><h3>{item.title}</h3><p>{item.description}</p></div><a href={whatsappLink(`Assalam-o-Alaikum! I’m interested in ${item.title.toLowerCase()} at Arisha Stitching. Please share the details.`)} target="_blank" rel="noreferrer" aria-label={`Enquire about ${item.title}`}><ArrowRight size={20} /></a></div>
              </article>
            ))}
          </div>
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

        <section className="process-section section" id="process">
          <div className="center-heading"><div className="eyebrow"><span className="eyebrow-line" /> SIMPLE FROM THE START <span className="eyebrow-line" /></div><h2>Three steps to <em>your outfit.</em></h2><p>No complicated forms. Just a conversation about what you want made.</p></div>
          <div className="steps-grid">{steps.map((step) => <article className="step-card" key={step.number}><span className="step-number">{step.number}</span><div className="step-icon">{step.number === '01' ? <MessageCircle /> : step.number === '02' ? <Ruler /> : <Check />}</div><h3>{step.title}</h3><p>{step.text}</p></article>)}</div>
          <div className="process-cta"><span>Have a question before you order?</span><WhatsAppButton message="Assalam-o-Alaikum! I have a question about placing a stitching order." >Ask us on WhatsApp</WhatsAppButton></div>
        </section>

        <section className="measurement-banner">
          <div className="measure-icon"><Ruler size={27} /></div><div><span className="eyebrow">A BETTER FIT STARTS WITH THE DETAILS</span><h2>Not sure about measurements?</h2><p>That’s okay. Message us and we’ll guide you through the next steps before you confirm your order.</p></div><WhatsAppButton message="Assalam-o-Alaikum! Please guide me about measurements for a stitching order.">Ask about measurements</WhatsAppButton>
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
            <a className="work-tile work-casual" href="#casual-wear"><span>01 / EVERYDAY</span><strong>Soft & simple</strong></a>
            <a className="work-tile work-party" href="#party-wear"><span>02 / OCCASION</span><strong>Details that shine</strong></a>
            <a className="work-tile work-bridal" href="#bridal-wear"><span>03 / CELEBRATION</span><strong>Made for your moment</strong></a>
            <a className="work-tile work-western" href="#western-wear"><span>04 / MODERN</span><strong>Your own silhouette</strong></a>
          </div>
        </section>

        <section className="fabric-calculator section" id="fabric-calc">
          <div className="calculator-copy"><div className="eyebrow"><span className="eyebrow-line" /> PLAN YOUR FABRIC</div><h2>Fabric calculator<br /><em>quick estimate.</em></h2><p>Use this as a starting point when planning fabric. Actual requirements depend on measurements, garment design, sleeves, lining, embroidery, print direction and fabric width.</p></div>
          <div className="calculator-panel">
            <label>Outfit type<select value={fabricOutfit} onChange={e=>setFabricOutfit(e.target.value)}><option value="shirt">Shirt / kurti</option><option value="two-piece">Two-piece suit</option><option value="three-piece">Three-piece suit</option><option value="party-wear">Party wear</option><option value="bridal-wear">Bridal outfit</option></select></label>
            <label>Fabric width<select value={fabricWidth} onChange={e=>setFabricWidth(e.target.value)}><option value="standard">Standard / wide</option><option value="narrow">Narrow width</option></select></label>
            <label>Approximate size<select value={fabricSize} onChange={e=>setFabricSize(e.target.value)}><option value="small">Small</option><option value="medium">Medium</option><option value="large">Large / extra room</option></select></label>
            <div className="fabric-result"><Calculator size={23}/><div><span>Rough fabric estimate</span><strong>{fabricEstimate} metres</strong></div></div>
            <p className="calculator-note">Planning guide only — confirm the final quantity with your tailor before buying fabric.</p>
            <WhatsAppButton message={`Assalam-o-Alaikum! I used the Arisha Stitching fabric calculator. Outfit: ${fabricOutfit.replace('-', ' ')}; fabric width: ${fabricWidth}; size: ${fabricSize}; rough estimate: ${fabricEstimate} metres. Please help me confirm the required fabric.`}>Confirm fabric quantity</WhatsAppButton>
          </div>
        </section>

        <section className="location-section" id="location">
          <div className="location-mark"><MapPin size={27}/></div>
          <div><div className="eyebrow"><span className="eyebrow-line" /> FIND ARISHA STITCHING</div><h2>Location & enquiries</h2><p>Open our Google Business Profile for the latest available location details, directions and business information. Please message us before visiting to confirm availability.</p></div>
          <a className="button button-primary" href="https://share.google/3DraUMLWvVehAA4rL" target="_blank" rel="noreferrer"><MapPin size={17}/> View Google profile <ArrowRight size={16}/></a>
        </section>

        <section className="section blog-section" id="blog">
          <div className="section-heading"><div><div className="eyebrow"><span className="eyebrow-line" /> FROM THE STITCHING DESK</div><h2>Helpful notes for<br /><em>your next outfit.</em></h2></div><p>Practical topics to help you prepare before choosing a design, buying fabric or booking a stitching discussion.</p></div>
          <div className="blog-grid">
            <article className="blog-card"><span className="blog-icon"><BookOpen/></span><span className="service-kicker">FABRIC GUIDE</span><h3>How to choose fabric for a stitched suit</h3><p>Consider season, drape, transparency, care instructions and the shape you want before buying.</p><a href="#fabric-calc" className="text-link">Estimate fabric <ArrowRight size={15}/></a></article>
            <article className="blog-card"><span className="blog-icon"><Ruler/></span><span className="service-kicker">FIT GUIDE</span><h3>Measurements to discuss before stitching</h3><p>Ask which measurements are needed for your chosen cut and whether a fitting or adjustment may be required.</p><a href="#book-appointment" className="text-link">Plan an enquiry <ArrowRight size={15}/></a></article>
            <article className="blog-card"><span className="blog-icon"><Sparkles/></span><span className="service-kicker">DESIGN GUIDE</span><h3>How to prepare a design reference</h3><p>Save clear front, back and detail views, then note the changes you would like to make to the design.</p><a href="#book-appointment" className="text-link">Discuss your idea <ArrowRight size={15}/></a></article>
          </div>
        </section>

        <section className="appointment-section" id="book-appointment">
          <div><div className="eyebrow"><span className="eyebrow-line" /> LET’S TALK THROUGH YOUR ORDER</div><h2>Book an enquiry<br /><em>with Arisha.</em></h2><p>Choose what you want to discuss and optionally add a preferred date. This sends an enquiry through WhatsApp; it does not confirm a booking until we reply.</p></div>
          <div className="appointment-panel">
            <label>What would you like to discuss?<select value={appointmentOutfit} onChange={e=>setAppointmentOutfit(e.target.value)}><option>Custom suit</option><option>Casual wear</option><option>Party wear</option><option>Bridal wear</option><option>Western wear</option><option>Alteration</option><option>Measurements</option></select></label>
            <label>Preferred date (optional)<input type="date" value={appointmentDate} onChange={e=>setAppointmentDate(e.target.value)} min={new Date().toISOString().slice(0,10)}/></label>
            <WhatsAppButton message={`Assalam-o-Alaikum! I would like to book an enquiry with Arisha Stitching. Topic: ${appointmentOutfit}.${appointmentDate ? ` Preferred date: ${appointmentDate}.` : ''} Please let me know availability and next steps.`}>Request appointment on WhatsApp</WhatsAppButton>
            <p className="calculator-note">Your request opens WhatsApp so you can review and send the message.</p>
          </div>
        </section>

        <section className="faq-section section" id="faq">
          <div className="faq-intro"><div className="eyebrow"><span className="eyebrow-line" /> GOOD TO KNOW</div><h2>A few things<br /><em>you might wonder.</em></h2><p>Still have a question? We’re just a WhatsApp message away.</p><a href={whatsappLink('Assalam-o-Alaikum! I have a question about Arisha Stitching.')} target="_blank" rel="noreferrer" className="text-link">Ask a question <ArrowRight size={16} /></a></div>
          <div className="faq-list">{faqs.map((faq, i) => <div className={faqOpen === i ? 'faq-item faq-active' : 'faq-item'} key={faq.q}><button onClick={() => setFaqOpen(faqOpen === i ? -1 : i)} aria-expanded={faqOpen === i}><span>{faq.q}</span><ChevronDown size={19} /></button>{faqOpen === i && <p>{faq.a}</p>}</div>)}</div>
        </section>

        <section className="final-cta"><div className="final-flower">✿</div><div className="eyebrow"><span className="eyebrow-line" /> LET’S MAKE SOMETHING LOVELY</div><h2>Have an outfit<br />in <em>mind?</em></h2><p>Tell us what you’re thinking. We’ll take it from there, one stitch at a time.</p><WhatsAppButton message="Assalam-o-Alaikum! I’d like to start an order with Arisha Stitching." /></section>
      </main>

      <footer className="site-footer">
        <a className="brand footer-brand" href="#home"><span className="brand-mark"><Scissors size={23} /></span><span className="brand-copy"><strong>arisha</strong><small>STITCHING STUDIO</small></span></a>
        <p>Thoughtful stitching, made personal.</p>
        <div className="footer-links"><a href="#about">About</a><a href="#stitching">Stitching</a><a href="#party-wear">Party wear</a><a href="#bridal-wear">Bridal wear</a><a href="#casual-wear">Casual wear</a><a href="#western-wear">Western wear</a><a href="#alteration">Alterations</a><a href="#our-work">Our work</a><a href="#fabric-calc">Fabric calculator</a><a href="#blog">Blog</a><a href="#location">Location</a><a href="#book-appointment">Book appointment</a><a href="#faq">FAQs</a><a href={whatsappLink()} target="_blank" rel="noreferrer"><MessageCircle size={15} /> WhatsApp</a><a href="https://share.google/3DraUMLWvVehAA4rL" target="_blank" rel="noreferrer" aria-label="View Arisha Stitching on Google">Google Business Profile</a></div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} Arisha Stitching. Made with care.</span><span>Every stitch tells a story.</span></div>
      </footer>
      <a className="floating-whatsapp" href={whatsappLink('Assalam-o-Alaikum! I’d like to enquire about stitching.')} target="_blank" rel="noreferrer" aria-label="Chat with Arisha Stitching on WhatsApp"><MessageCircle size={23} /><span>Chat with us</span></a>
    </div>
  );
}

export default App;
