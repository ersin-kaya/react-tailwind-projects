import BestProducts from '../BestProducts/BestProducts'
import JoinUs from '../JoinUs/JoinUs'
import PromotionSection from '../PromotionSection/PromotionSection'
import './Content.css'
type Props = {}

const Content = (props: Props) => {
    return (
        <>
            <PromotionSection />
            <BestProducts />
            <JoinUs />
        </>
    )
}

export default Content