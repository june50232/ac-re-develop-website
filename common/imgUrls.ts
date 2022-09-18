const domain =
  process.env.NODE_ENV === 'production' ? process.env.s3domain : '';

export const loadingImgUrl = `${domain}/img/loading.gif`;
export const globalImgUrl = `${domain}/img/global.png`;
export const globalDottedImgUrl = `${domain}/img/dotted-map.png`;
export const smileHandShakeImgUrl = `${domain}/img/handshake.png`;
export const globalNightImgUrl = `${domain}/img/global-night.png`;
export const esgImgUrl = `${domain}/img/esg.png`;
export const professionImgUrl = `${domain}/img/profession.png`;
