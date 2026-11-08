export const BUSINESS = {
  name: 'Arisha Ladies Stitching & Boutique',
  city: 'Lahore',
  established: '2021',
  ownership: 'Female-owned',
  country: 'Pakistan',
  phoneDisplay: '03081042020',
  phoneInternational: '923081042020',
  address: 'House No. 145-E, Pak-Arab Housing Scheme, Ferozepur Road, Lahore, Punjab, Pakistan',
  hours: 'Please message us to confirm current hours',
  startingPrice: 800,
  turnaround: 'Confirm when ordering',
  siteUrl: 'https://arishaladiesstitching.vercel.app',
  mapsUrl: 'https://maps.app.goo.gl/U2oJkeL3HtgZbDWbA',
  mapEmbed: 'https://www.google.com/maps?q=House%20No.%20145-E%2C%20Pak-Arab%20Housing%20Scheme%2C%20Ferozepur%20Road%2C%20Lahore&output=embed',
  serviceAreas: ['Pak-Arab Housing Scheme', 'Shadab Garden', 'Attari Saroba', 'Chandrai', 'Venus Housing Scheme', 'Qainchi', 'Chungi Amar Sidhu', 'Model Town', 'Central Park Housing Scheme', 'DHA Phase 1', 'DHA Phase 2', 'DHA Phase 3', 'DHA Phase 4', 'DHA Phase 5', 'DHA Phase 6', 'DHA Phase 7', 'DHA Phase 8'],
};
export const waLink = (message='Assalam-o-Alaikum! I would like to enquire about stitching.') => `https://wa.me/${BUSINESS.phoneInternational}?text=${encodeURIComponent(message)}`;
export const WHATSAPP_URL = waLink();
export const IMAGES = {
  hero: 'https://images.unsplash.com/photo-1773439878392-74abd38c55ec?auto=format&fit=crop&w=1400&q=85',
  casual: 'https://images.unsplash.com/photo-1773439878193-be7f99e3bd49?auto=format&fit=crop&w=1100&q=84',
  party: 'https://images.unsplash.com/photo-1773439877245-79b5ac3244a8?auto=format&fit=crop&w=1100&q=84',
  bridal: 'https://images.unsplash.com/photo-1721324807072-784ab8ddf166?auto=format&fit=crop&w=1000&q=85',
  western: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=82',
  stitching: 'https://images.unsplash.com/photo-1753162659603-53b36c0c2403?auto=format&fit=crop&w=1100&q=85',
  fabric: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=82',
  alterations: 'https://images.pexels.com/photos/7147640/pexels-photo-7147640.jpeg?auto=compress&cs=tinysrgb&w=1200',
};
export const PRICES = [
  { name: 'Ladies Simple Shirt Stitching', price: 800 },
  { name: 'Ladies Simple Suit Stitching', price: 1000 },
  { name: 'Ladies Dori Piping Suit Stitching', price: 1200 },
  { name: 'Ladies Lining Suit / Party Wear Stitching', price: 2000 },
  { name: 'Ladies Frock Stitching', price: 1500 },
  { name: 'Ladies Short Frock Stitching', price: 1300 },
  { name: 'Ladies Angrakha Suit Stitching', price: 1800 },
  { name: 'Casual Wear Stitching — starting from', price: 1000 },
  { name: 'Party Wear Stitching — starting from', price: 1500 },
  { name: 'Bridal Wear Stitching — starting from', price: 8000 },
  { name: 'Western Wear Stitching — starting from', price: 1200 },
  { name: 'Ladies Dress Alterations — starting from', price: 300 },
];
export const SERVICES = [
 {number:'01',kicker:'EVERYDAY STYLE',title:'Ladies Suit Stitching',path:'/stitching/',description:'Custom shalwar kameez and ladies suits planned around your preferred fit, neckline and trouser style.',price:1000,image:IMAGES.stitching,alt:'Female dressmaker sewing fabric on a machine — tailoring style inspiration'},
 {number:'02',kicker:'CELEBRATIONS',title:'Party Wear',path:'/party-wear/',description:'Formal suits, frocks and occasion outfits with thoughtful finishing details.',price:1500,image:IMAGES.party,alt:'Party wear dress inspiration'},
 {number:'03',kicker:'YOUR SPECIAL DAY',title:'Bridal Wear',path:'/bridal-wear/',description:'Discuss bridal lehenga, gharara, sharara and gown ideas with a custom quote.',price:8000,image:IMAGES.bridal,alt:'Bridal outfit inspiration'},
 {number:'04',kicker:'DAILY FAVOURITES',title:'Casual Wear',path:'/casual-wear/',description:'Comfortable daily suits and kurtas made around your preferred style.',price:1000,image:IMAGES.casual,alt:'Pakistani embroidered outfit inspiration'},
 {number:'05',kicker:'MODERN SILHOUETTES',title:'Western Wear',path:'/western-wear/',description:'Discuss co-ords, dresses, trousers and western-inspired custom outfits.',price:1200,image:IMAGES.western,alt:'Western fashion outfit inspiration'},
 {number:'06',kicker:'FIT & FINISH',title:'Alterations',path:'/alteration/',description:'Ask about length, sleeve, waist and fit adjustments for your garment.',price:300,image:IMAGES.alterations,alt:'Female dressmaker sewing clothing in a tailoring studio — style inspiration'},
];
