export const homeUrl = '/';
export const aboutUrl = '/about';
export const servicesUrl = '/services';
export const careerUrl = '/career';
export const contactUrl = '/contact';

const NavList: { title: string; url: string; isPhoneHidden?: boolean }[] = [
  {
    title: 'About AC Re',
    url: aboutUrl,
  },
  {
    title: 'Services & products',
    url: servicesUrl,
    isPhoneHidden: true,
  },
  {
    title: 'Careers',
    url: careerUrl,
  },
  {
    title: 'Contact us',
    url: contactUrl,
  },
];

export default NavList;
