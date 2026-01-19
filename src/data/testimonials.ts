import neilImg from '../images/testimonials/neil.png';
import kerryImg from '../images/testimonials/kerry.png';
import gerwynImg from '../images/testimonials/gerwyn-pritchard.jpg';
import debbieImg from '../images/testimonials/debbie.png';
import shaneImg from '../images/testimonials/shane.png';
import lowriImg from '../images/testimonials/lowri.png';
import daveImg from '../images/testimonials/dave.jpg';
import louiseImg from '../images/testimonials/louise-cox.jpg';
import jamesImg from '../images/testimonials/james.png';

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  image: string;
  quote: string;
  update?: string | null;
}

export const testimonials: Testimonial[] = [
  {
    id: 'neil',
    name: 'Neil',
    role: 'Client',
    image: neilImg.src,
    quote:
      'Trained for years but could never establish the balance between a healthy lifestyle and long-lasting results. In JUST 90 days this changed fast!',
  },
  {
    id: 'kerry',
    name: 'Kerry',
    role: 'Hard-working Professional',
    image: kerryImg.src,
    quote:
      'I struggled with weight & wellbeing. With a personalised structure I succeeded — in ONLY 12 weeks I lost 12 pounds & inches!',
  },
  {
    id: 'gerwyn-pritchard',
    name: 'Gerwyn Pritchard',
    role: 'Client',
    image: gerwynImg.src,
    quote:
      'Self-confessed unhealthy & unhappy — I discovered my BEST VERSION. Check out my inspiring words & transformation.',
    update:
      'Update: Gerwyn is still working with us as an exclusive 1:1 client — incredible transformation to date.',
  },
  {
    id: 'debbie',
    name: 'Debbie',
    role: 'Busy Health Professional & Mum',
    image: debbieImg.src,
    quote:
      'I lacked confidence & knowledge to start my transformation. With structured coaching I overcame barriers and changed my lifestyle.',
    update: 'Debbie continues with us — super happy with her progress and so are we.',
  },
  {
    id: 'shane',
    name: 'Shane (Nottingham)',
    role: 'Busy Family Man',
    image: shaneImg.src,
    quote:
      'I struggled with belly fat for years. With tailored support and JUST 12 WEEKS I achieved incredible results.',
  },
  {
    id: 'lowri',
    name: 'Lowri',
    role: 'Client',
    image: lowriImg.src,
    quote: 'In 12 WEEKS I shredded OVER 30 LBS of fat and overcame my fears of the gym!',
  },
  {
    id: 'dave',
    name: 'Dave (Chester)',
    role: 'Client',
    image: daveImg.src,
    quote:
      'I struggled to balance a demanding job and family with transformation goals — the 12-week formula changed everything.',
    update: 'Dave continues to enjoy fantastic progression in our remote coaching programme.',
  },
  {
    id: 'louise-cox',
    name: 'Louise Cox',
    role: 'Busy Professional',
    image: louiseImg.src,
    quote: "I was convinced I couldn't change my weight. The 90-day formula proved that wrong.",
    update:
      "Read Lou's inspiring story — she continues working with us towards ongoing fitness goals.",
  },
  {
    id: 'james',
    name: 'James',
    role: 'Client',
    image: jamesImg.src,
    quote:
      'After 180 days inside the transformation programme I shifted over 80 LBS of stubborn body fat and built a healthy harmony between food & exercise.',
    update: 'We continue to support James; check out his amazing progression and interview.',
  },
];

export const testimonialsSmall1: Testimonial[] = [
  {
    id: 'neil',
    name: 'Neil',
    role: 'Client',
    image: neilImg.src,
    quote:
      'Trained for years but could never establish the balance between a healthy lifestyle and long-lasting results. In JUST 90 days this changed fast!',
  },
  {
    id: 'kerry',
    name: 'Kerry',
    role: 'Hard-working Professional',
    image: kerryImg.src,
    quote:
      'I struggled with weight & wellbeing. With a personalised structure I succeeded — in ONLY 12 weeks I lost 12 pounds & inches!',
  },
  {
    id: 'gerwyn-pritchard',
    name: 'Gerwyn Pritchard',
    role: 'Client',
    image: gerwynImg.src,
    quote:
      'Self-confessed unhealthy & unhappy — I discovered my BEST VERSION. Check out my inspiring words & transformation.',
    update:
      'Update: Gerwyn is still working with us as an exclusive 1:1 client — incredible transformation to date.',
  },
  {
    id: 'james',
    name: 'James',
    role: 'Client',
    image: jamesImg.src,
    quote:
      'After 180 days inside the transformation programme I shifted over 80 LBS of stubborn body fat and built a healthy harmony between food & exercise.',
    update: 'We continue to support James; check out his amazing progression and interview.',
  },
];
export const testimonialsSmall2: Testimonial[] = [
  {
    id: 'debbie',
    name: 'Debbie',
    role: 'Busy Health Professional & Mum',
    image: debbieImg.src,
    quote:
      'I lacked confidence & knowledge to start my transformation. With structured coaching I overcame barriers and changed my lifestyle.',
    update: 'Debbie continues with us — super happy with her progress and so are we.',
  },
  {
    id: 'shane',
    name: 'Shane (Nottingham)',
    role: 'Busy Family Man',
    image: shaneImg.src,
    quote:
      'I struggled with belly fat for years. With tailored support and JUST 12 WEEKS I achieved incredible results.',
  },
  {
    id: 'lowri',
    name: 'Lowri',
    role: 'Client',
    image: lowriImg.src,
    quote: 'In 12 WEEKS I shredded OVER 30 LBS of fat and overcame my fears of the gym!',
  },
  {
    id: 'dave',
    name: 'Dave (Chester)',
    role: 'Client',
    image: daveImg.src,
    quote:
      'I struggled to balance a demanding job and family with transformation goals — the 12-week formula changed everything.',
    update: 'Dave continues to enjoy fantastic progression in our remote coaching programme.',
  },
];

export const testimonialsSmall3: Testimonial[] = [
  {
    id: 'louise-cox',
    name: 'Louise Cox',
    role: 'Busy Professional',
    image: louiseImg.src,
    quote: "I was convinced I couldn't change my weight. The 90-day formula proved that wrong.",
    update:
      "Read Lou's inspiring story — she continues working with us towards ongoing fitness goals.",
  },
];
