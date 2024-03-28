import './PromotionSection.css'
import PromotionSectionCard from './PromotionSectionCard'
import PromotionSectionInfo from './PromotionSectionInfo'
import PromotionSectionServices from './PromotionSectionServices'

const PromotionSection = () => {
    return (
        <div className='promotion-section w-full mx-auto py-20 xs:bg-white'>
            <div className='flex justify-between items-center [max-width:1220px] mx-auto xs:flex-col'>
                <PromotionSectionInfo />
                <PromotionSectionCard />
            </div>
            <PromotionSectionServices />
        </div>
    )
}

export default PromotionSection