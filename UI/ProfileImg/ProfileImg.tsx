import styles from "./ProfileImg.module.scss";
import { useState } from "react";
import { SVGS } from "../../svg/svg";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import Link from "next/link";

const ProfileImg: React.FC<{ type: "page" | "nav"; isPageActive: boolean }> = ({
  type,
  isPageActive,
}) => {
  const [isImgErr, setIsImgErr] = useState(false);
  const profileIcon = SVGS.profile;
  const { userPicture } = useSelector((state: RootState) => state.login);

  const innerJsx = !isImgErr ? (
    <img
      src={userPicture}
      onError={() => setIsImgErr(true)}
      style={{
        width: type === "nav" ? "22px" : "100px",
        borderRadius: "50%",
        margin: "15px 0",
      }}
    />
  ) : (
    <svg
      width={type === "nav" ? "25" : "100"}
      height={type === "nav" ? "25" : "100"}
      viewBox="0 0 25 25"
    >
      {profileIcon.svg}
    </svg>
  );

  return (
    <div className={`${styles.container} ${isPageActive ? styles.active : ""}`}>
      {type === "nav" ? <Link href="/profile">{innerJsx}</Link> : innerJsx}
    </div>
  );
};

export default ProfileImg;
