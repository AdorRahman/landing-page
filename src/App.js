import { Download, Features, SectionWrapper } from "./components";
import assets from "./assets";
import styles from "./styles/Global";

const App = () => {
  return (
    <>
      <SectionWrapper
        title="Be part of a change in the world"
        description="Our focus is to help needy people so that they can see a beautiful day every day. And for that, our team, with interest, working to make those people's life a bit easier."
        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
      />
      <SectionWrapper
        title="This is a non profit organization"
        description="Helping others feels good. We believe When you donate, that's important to you, you not only help them continue their vital work"
        mockupImg={assets.homeCards}
        reverse
      />
      <Features />
      <SectionWrapper
        title="Donation"
        description="All field Projects and distributions are carried out by our team members, which provides transparency giving our donors confidence that the team they donate to in our are the same teams that carry out the distribution projects in all over world."
        mockupImg={assets.feature}
        reverse
      />
      <SectionWrapper
        title="100% goes to the field"
        description="we are doing more to empower the needy by working to creating human relief projects amd more"
        mockupImg={assets.mockup}
        banner="banner02"
      />
      <Download />

      <div className="flex-col items-center justify-center px-4 py-2 text-center bg-primary banner04">
        <p className={`${styles.pText} ${styles.whiteText}`}>
          <span className="bold">A non profit organization</span>
        </p>
      </div>
    </>
  );
};

export default App;
