import { useState } from 'react';
import { ArrowDown, ArrowRight, Check, ChevronDown, Menu, MessageCircle, Scissors, Sparkles, Ruler, Heart, Instagram, X } from 'lucide-react';

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
          <a href="#collections" onClick={closeMenu}>Collections</a>
          <a href="#custom" onClick={closeMenu}>Custom stitching</a>
          <a href="#process" onClick={closeMenu}>How to order</a>
          <a href="#faq" onClick={closeMenu}>FAQs</a>
          <WhatsAppButton className="nav-cta" message="Assalam-o-Alaikum! I’d like to enquire about an order at Arisha Stitching.">Let’s talk</WhatsAppButton>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-line" /> MADE WITH CARE, STITCHED FOR YOU</div>
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

        <section className="trust-strip" aria-label="Our approach">
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

        <section className="custom-section" id="custom">
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

        <section className="faq-section section" id="faq">
          <div className="faq-intro"><div className="eyebrow"><span className="eyebrow-line" /> GOOD TO KNOW</div><h2>A few things<br /><em>you might wonder.</em></h2><p>Still have a question? We’re just a WhatsApp message away.</p><a href={whatsappLink('Assalam-o-Alaikum! I have a question about Arisha Stitching.')} target="_blank" rel="noreferrer" className="text-link">Ask a question <ArrowRight size={16} /></a></div>
          <div className="faq-list">{faqs.map((faq, i) => <div className={faqOpen === i ? 'faq-item faq-active' : 'faq-item'} key={faq.q}><button onClick={() => setFaqOpen(faqOpen === i ? -1 : i)} aria-expanded={faqOpen === i}><span>{faq.q}</span><ChevronDown size={19} /></button>{faqOpen === i && <p>{faq.a}</p>}</div>)}</div>
        </section>

        <section className="final-cta"><div className="final-flower">✿</div><div className="eyebrow"><span className="eyebrow-line" /> LET’S MAKE SOMETHING LOVELY</div><h2>Have an outfit<br />in <em>mind?</em></h2><p>Tell us what you’re thinking. We’ll take it from there, one stitch at a time.</p><WhatsAppButton message="Assalam-o-Alaikum! I’d like to start an order with Arisha Stitching." /></section>
      </main>

      <footer className="site-footer">
        <a className="brand footer-brand" href="#home"><span className="brand-mark"><Scissors size={23} /></span><span className="brand-copy"><strong>arisha</strong><small>STITCHING STUDIO</small></span></a>
        <p>Thoughtful stitching, made personal.</p>
        <div className="footer-links"><a href="#collections">Collections</a><a href="#custom">Custom stitching</a><a href="#process">How to order</a><a href="#faq">FAQs</a><a href={whatsappLink()} target="_blank" rel="noreferrer"><MessageCircle size={15} /> WhatsApp</a><a href="https://share.google/3DraUMLWvVehAA4rL" target="_blank" rel="noreferrer" aria-label="View Arisha Stitching on Google">Google Business Profile</a></div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} Arisha Stitching. Made with care.</span><span>Every stitch tells a story.</span></div>
      </footer>
      <a className="floating-whatsapp" href={whatsappLink('Assalam-o-Alaikum! I’d like to enquire about stitching.')} target="_blank" rel="noreferrer" aria-label="Chat with Arisha Stitching on WhatsApp"><MessageCircle size={23} /><span>Chat with us</span></a>
    </div>
  );
}

export default App;
