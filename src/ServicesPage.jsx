import { useEffect } from 'react';
import { ArrowRight, Check, MapPin, MessageCircle, Scissors, Shirt, Sparkles, Ruler, Heart, Images, Star } from 'lucide-react';

const WA = '923081042020';
const ask = (message) => `https://wa.me/${WA}?text=${encodeURIComponent(message)}`;

const services = [
  { icon: Shirt, number: '01', title: 'Ladies Suit Stitching in Lahore', desc: 'Custom shalwar kameez and ladies suits planned around your preferred fit, neckline, sleeves, shirt length and trouser style.', tags: 'Shalwar kameez · Casual suits · Everyday wear', message: 'Assalam-o-Alaikum! I want to enquire about ladies suit stitching in Lahore.' },
  { icon: Sparkles, number: '02', title: 'Party Wear & Formal Dress Stitching', desc: 'Discuss a polished outfit for dinners, family functions, Eid and wedding events. Share a reference photo so we can review the style and finishing details.', tags: 'Formal wear · Party dresses · Eid outfits', message: 'Assalam-o-Alaikum! I want to discuss party-wear stitching.' },
  { icon: Heart, number: '03', title: 'Frocks, Maxi Dresses & Pishwas', desc: 'Ask about custom stitching for frocks, maxi dresses, pishwas, anarkali styles, angrakha suits and other occasion outfits.', tags: 'Frocks · Maxi · Pishwas · Anarkali', message: 'Assalam-o-Alaikum! I want to enquire about frock, maxi or pishwas stitching.' },
  { icon: Scissors, number: '04', title: 'Custom Dress Stitching', desc: 'Have a design saved on your phone? Send your inspiration image or sketch and discuss fabric, cut, neckline, sleeves and finishing before confirming.', tags: 'Custom designs · Reference photos · Personal fit', message: 'Assalam-o-Alaikum! I want to discuss a custom dress design.' },
  { icon: Ruler, number: '05', title: 'Ladies Dress Alterations & Fitting', desc: 'Ask about possible adjustments to garment length, sleeves, waist, shirt shape or overall fitting. The garment is assessed before the final alteration quote.', tags: 'Fitting · Length adjustment · Repairs', message: 'Assalam-o-Alaikum! I want to ask about ladies dress alteration and fitting.' },
  { icon: Images, number: '06', title: 'Dupatta Finishing & Detail Work', desc: 'Ask about finishing options such as dori piping, lace, tassels and other details to coordinate with your outfit.', tags: 'Dori piping · Lace work · Tassels', message: 'Assalam-o-Alaikum! I want to ask about dupatta finishing work.' },
];

export default function ServicesPage() {
  useEffect(() => {
    document.title = 'Ladies Tailoring Services in Lahore | Arisha Stitching Studio';
    let description = document.querySelector('meta[name="description"]');
    if (!description) {
      description = document.createElement('meta');
      description.name = 'description';
      document.head.appendChild(description);
    }
    description.content = 'Explore ladies tailoring services in Lahore at Arisha Stitching Studio, including custom suit stitching, shalwar kameez, party wear, frocks, maxi dresses, alterations and dupatta finishing. Ask about rates on WhatsApp.';
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = 'https://arishaladiesstitching.vercel.app/services';
  }, []);

  return <div className="services-page">
    <div className="services-topline"><a className="services-brand" href="/"> <span className="services-brand-icon"><Scissors size={22}/></span><span><strong>arisha</strong><small>STITCHING STUDIO</small></span></a><a className="services-back" href="/">Home</a><a className="services-top-cta" href={ask('Assalam-o-Alaikum! I would like to enquire about stitching services at Arisha Stitching.')} target="_blank" rel="noreferrer"><MessageCircle size={16}/> WhatsApp us</a></div>
    <main>
      <section className="services-hero">
        <div className="services-hero-copy">
          <div className="services-eyebrow"><span/> LADIES TAILORING SERVICES · LAHORE</div>
          <h1>Ladies Tailoring Services in <em>Lahore.</em></h1>
          <p>From everyday shalwar kameez to special-occasion outfits, Arisha Stitching Studio helps you discuss custom designs, fitting preferences and finishing details before your order begins.</p>
          <div className="services-hero-actions"><a className="services-button services-button-primary" href={ask('Assalam-o-Alaikum! I want to discuss ladies tailoring services in Lahore.')} target="_blank" rel="noreferrer"><MessageCircle size={17}/> Discuss your outfit <ArrowRight size={16}/></a><a className="services-text-link" href="/#rate-list">View stitching rate list <ArrowRight size={15}/></a></div>
          <div className="services-promise"><Check size={17}/> Design and final price discussed before confirming your order</div>
        </div>
        <div className="services-hero-art"><div className="services-art-orbit"/><div className="services-art-card"><span>MADE WITH CARE</span><Scissors size={38}/><strong>Your fabric.<br/>Your style.</strong><small>ARISHA STITCHING STUDIO</small></div><div className="services-art-flower">✿</div></div>
      </section>

      <section className="services-benefits"><div><Check size={17}/><span>Custom-fit design discussion</span></div><div><Check size={17}/><span>Reference photos welcome</span></div><div><Check size={17}/><span>Rates confirmed before ordering</span></div><div><Check size={17}/><span>WhatsApp enquiries</span></div></section>

      <section className="services-list-section">
        <div className="services-section-heading"><div><div className="services-eyebrow"><span/> OUR SERVICES</div><h2>Stitching for your <em>kind of occasion.</em></h2></div><p>Choose a service to discuss your outfit idea, preferred fit, finishing details and expected timeline.</p></div>
        <div className="services-cards">{services.map(({icon: Icon, number, title, desc, tags, message}) => <article className="services-card" key={number}><div className="services-card-top"><span className="services-card-icon"><Icon size={22}/></span><span className="services-card-number">{number}</span></div><h3>{title}</h3><p>{desc}</p><div className="services-tags">{tags}</div><a href={ask(message)} target="_blank" rel="noreferrer" className="services-card-link">Enquire about this service <ArrowRight size={15}/></a></article>)}</div>
      </section>

      <section className="services-process"><div className="services-process-copy"><div className="services-eyebrow"><span/> HOW TO GET STARTED</div><h2>Easy to discuss.<br/><em>Made around you.</em></h2><p>Tell us what you need first. We’ll discuss the details with you on WhatsApp so you can make an informed decision before placing an order.</p><a className="services-button services-button-primary" href={ask('Assalam-o-Alaikum! I want to start a stitching enquiry.')} target="_blank" rel="noreferrer"><MessageCircle size={17}/> Start an enquiry <ArrowRight size={16}/></a></div><div className="services-steps"><div><span>01</span><section><h3>Share your idea</h3><p>Send a reference photo, sketch or description of the outfit.</p></section></div><div><span>02</span><section><h3>Discuss fit and details</h3><p>Talk through measurements, fabric, neckline, sleeves and finishing.</p></section></div><div><span>03</span><section><h3>Confirm rate and timeline</h3><p>Confirm the final price, availability and expected completion time before ordering.</p></section></div></div></section>

      <section className="services-local-area"><div className="services-local-icon"><MapPin size={24}/></div><div><div className="services-eyebrow"><span/> LOCAL TAILORING ENQUIRIES</div><h2>Looking for a ladies tailor in Lahore?</h2><p>If you’re searching for <strong>ladies suit stitching in Lahore</strong>, a <strong>ladies tailor near you</strong>, custom shalwar kameez stitching, party-wear dress stitching or ladies dress alterations, contact Arisha Stitching Studio to confirm service availability and location details before visiting.</p><a href="https://share.google/3DraUMLWvVehAA4rL" target="_blank" rel="noreferrer" className="services-text-link">Open our Google Business Profile <ArrowRight size={15}/></a></div></section>

      <section className="services-faq"><h2>Before you place an order</h2><div><h3>How can I get the latest stitching rates?</h3><p>Visit the rate list on our homepage or message us on WhatsApp to confirm current rates and any design-related charges.</p></div><div><h3>Can I share a design photo?</h3><p>Yes. Send your reference image and describe the style you want. We’ll discuss whether the requested design can be taken on.</p></div><div><h3>Is doorstep pickup or delivery available?</h3><p>Please ask us directly about pickup or delivery for your area. Availability and any separate charges must be confirmed before booking.</p></div><div><h3>How do I know the final price and timeline?</h3><p>They depend on the outfit and details. Confirm the price, fitting process and expected completion date with us before placing your order.</p></div></section>

      <section className="services-final-cta"><Star size={20}/><div className="services-eyebrow">LET’S TALK ABOUT YOUR OUTFIT</div><h2>Have a design in mind?</h2><p>Send your reference and ask about ladies tailoring services in Lahore.</p><a className="services-button services-button-light" href={ask('Assalam-o-Alaikum! I would like to enquire about ladies tailoring services in Lahore.')} target="_blank" rel="noreferrer"><MessageCircle size={17}/> Message Arisha Stitching <ArrowRight size={16}/></a></section>
    </main>
    <footer className="services-footer"><a className="services-brand" href="/"><span className="services-brand-icon"><Scissors size={21}/></span><span><strong>arisha</strong><small>STITCHING STUDIO</small></span></a><p>Ladies tailoring and custom stitching enquiries in Lahore, Pakistan.</p><div><a href="/">Home</a><a href="/#rate-list">Rate List</a><a href="/#our-work">Style Inspiration</a><a href="https://share.google/3DraUMLWvVehAA4rL" target="_blank" rel="noreferrer">Google Profile</a></div><small>© {new Date().getFullYear()} Arisha Stitching Studio</small></footer>
  </div>;
}
