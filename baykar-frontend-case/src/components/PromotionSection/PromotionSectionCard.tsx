import './PromotionSectionCard.css'
import sneaker from '../../assets/sneaker.png';

type Props = {}

const PromotionSectionCard = (props: Props) => {
    return (
        <div className='promotion-section-card'>
            <img className='[margin-left:0px] [height:423px] [max-width:486px] xs:[height:314.2px] xs:mt-10' src={sneaker} />
        </div>
    )
}

export default PromotionSectionCard