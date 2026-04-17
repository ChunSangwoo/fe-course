import AvatarImage from "../commons/AvatarImage.jsx";

export default function Logo({ img, alt, style, title, like }) {
  return (
    <>
      <div className="header-logo">
        <AvatarImage img={img} alt={alt} style={style} />
        {/* <img
          src="images/favicon.ico"
          alt="header-logo"
          className="header-logo-img"
        /> */}
        <h1 className="header-logo-title">
          {title}::SPA::♥({like})
        </h1>
      </div>
    </>
  );
}
