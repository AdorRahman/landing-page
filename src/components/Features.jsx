import React from "react";

import assets from "../assets";
import styles from "../styles/Global";

const FeatureCard = ({ iconUrl, iconText }) => (
  <div className={styles.featureCard}>
    <img src={iconUrl} alt="icon" className={styles.featureImg} />
    <p className={styles.featureText}>{iconText}</p>
  </div>
);

const Features = () => {
  return (
    <div className={`${styles.section} ${styles.bgPrimary} banner03`}>
      <div className={`${styles.subSection} flex-col text-center`}>
        <div>
          <h1 className={`${styles.h1Text} ${styles.whiteText}`}>
            Download Now
          </h1>
          <p className={`${styles.pText} ${styles.whiteText}`}>
            You can also download our apps and donate from the apps.
          </p>
        </div>

        <div className={styles.flexWrap}>
          <FeatureCard iconUrl={assets.appstore} iconText="Apple App Store" />
          <FeatureCard
            iconUrl={assets.googleplay}
            iconText="Google Play Store"
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
