import BestProducts from '../BestProducts/BestProducts'
import PromotionSection from '../PromotionSection/PromotionSection'
import './Content.css'
type Props = {}

const Content = (props: Props) => {
    return (
        <>
            <PromotionSection />
            <BestProducts />
        </>
    )
}

export default Content