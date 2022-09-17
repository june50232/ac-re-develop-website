export default function BannerImage(props) {
  return (
    <div
      className={'w-full h-full bg-center bg-no-repeat bg-cover'}
      style={{
        backgroundImage: `url(${props?.url})`,
      }}
    />
  );
}
