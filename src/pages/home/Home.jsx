import HomeBanner from "./homeContaint/HomeBanner";
import HomeCategory from "./homeContaint/HomeCategory";
import HomeSCollection from "./homeContaint/HomeSCollection";
import NewJewelry from "./homeContaint/NewJewelry";
import Contact from "./homeContaint/contact/Contact";
import Offer from "./homeContaint/offer/Offer";

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <HomeCategory/>
            <HomeSCollection></HomeSCollection>
            <Offer></Offer>
            <NewJewelry></NewJewelry>
            <Contact></Contact>
        </div>
    );
};

export default Home;