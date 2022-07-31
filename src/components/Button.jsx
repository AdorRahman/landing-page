import React from "react";

import styles from "../styles/Global";

const Button = ({ assetUrl, link }) => {
  return (
    <div
      className={styles.btnBlack}
      onClick={() => window.open(link, "_blank")}
    >
      <div className="flex flex-col justify-start px-4 py-2">
        <p className={`${styles.btnText} font-bold text-md`}>Donate Now</p>
      </div>
    </div>
  );
};

export default Button;
