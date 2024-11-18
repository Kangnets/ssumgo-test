import * as React from "react";
import mainLogo from "../../assets/ssumgoLogo.webp";

const MainLogo = React.forwardRef<HTMLDivElement>(() => {
  return (
    <div className="img_container">
      <img style={{ width: "220px" }} src={mainLogo}></img>
    </div>
  );
});

MainLogo.displayName = "MainLogo";

export { MainLogo };
