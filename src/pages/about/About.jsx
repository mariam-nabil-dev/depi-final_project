import NewsSection from "../../components/newsSection/NewsSection";
import Sponsors from "../../components/sponsors/Sponsors";
import StatisticsSection from "../../components/statisticsSection/StatisticsSection";
import TravelTipsForm from "../../components/TravelTipsForm/TravelTipsForm";
import WhereWeAre from "../../components/where-we-are-component/WhereWeAre";

const About = () => {
  return (
    <>
      <StatisticsSection />
      <NewsSection />
      <Sponsors />
      <TravelTipsForm />
      <WhereWeAre />
    </>
  );
};

export default About;
