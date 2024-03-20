import './PromotionSection.css'
import PromotionSectionCard from './PromotionSectionCard'
import PromotionSectionInfo from './PromotionSectionInfo'

type Props = {}

const PromotionSection = (props: Props) => {
    return (
        <div className='promotion-section w-full mx-auto px-28 py-20 flex justify-between'>
            <PromotionSectionInfo />
            <PromotionSectionCard />
        </div>
    )
}

export default PromotionSection