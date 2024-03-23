import BestProducts from '../BestProducts/BestProducts'
import JoinUs from '../JoinUs/JoinUs'
import PromotionSection from '../PromotionSection/PromotionSection'
import Statistics from '../Statistics/Statistics'
import './Content.css'

const Content = () => {
    return (
        <>
            <PromotionSection />
            <BestProducts />
            <JoinUs />
            <Statistics />
        </>
    )
}

export default Content