const domain =
  process.env.NODE_ENV === 'production' ? process.env.s3domain : '';

export const loadingImgUrl = `${domain}/img/loading.gif`;
export const globalImgUrl = `${domain}/img/global.png`;
export const globalDottedImgUrl = `${domain}/img/dotted-map.png`;
export const smileHandShakeImgUrl = `${domain}/img/handshake.png`;
export const globalNightImgUrl = `${domain}/img/global-night.png`;
export const esgImgUrl = `${domain}/img/esg.png`;
export const professionImgUrl = `${domain}/img/profession.png`;

export const homeOceanBanner = `${domain}/img/home-banner.png`;

export const aboutBannerImgUrl = `${domain}/img/about-banner.png`;
export const aboutTeamsImgUrl = `${domain}/img/about-teams.png`;
export const aboutBestImgUrl = `${domain}/img/about-best.png`;
export const aboutfastGrowImgUrl = `${domain}/img/about-fast-growing.png`;
export const aboutSuccessfulImgUrl = `${domain}/img/about-successful.png`;
export const aboutFounderImgUrl = `${domain}/img/about-founder.jpg`;

export const servicesBannerImgUrl = `${domain}/img/services-banner.png`;
export const services2WindImgUrl = `${domain}/img/services-2-wind.png`;
export const services2SolarImgUrl = `${domain}/img/services-2-solar.png`;

export const contactBannerImgUrl = `${domain}/img/contact-banner.png`;
