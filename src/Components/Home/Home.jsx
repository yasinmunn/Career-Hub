import Banner from "../Banner/Banner";
import CategoryList from "../CagegoryList/CategoryList";
import FeatureJobs from "../FeatureJobs/FeatureJobs";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CategoryList></CategoryList>
            <FeatureJobs></FeatureJobs>
            <h2>This is Home</h2>
        </div>
    );
};

export default Home;