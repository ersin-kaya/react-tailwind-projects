import './PromotionSectionServices.css'
import firstServiceItemIcon from '../../assets/first-service-item-icon.png'
import firstServiceItemShape from '../../assets/first-service-item-shape.png'
import secondServiceItemIcon from '../../assets/second-service-item-icon.png'
import secondServiceItemShape from '../../assets/second-service-item-shape.png'
import thirdServiceItemIcon from '../../assets/third-service-item-icon.png'
import thirdServiceItemShape from '../../assets/third-service-item-shape.png'

const PromotionSectionServices = () => {
    return (
        <div className='promotion-section-services flex justify-center items-end xs:text-center xs:flex-col xs:items-center xs:mt-64 [color:#0F172A]'>
            <div className="promotion-section-service-item">
                <div className="promotion-section-service-item-icon xs:[left:152px]">
                    <img src={firstServiceItemShape} />
                    <img src={firstServiceItemIcon} />
                </div>
                <div className="promotion-section-service-item-title [padding-top:72px]">
                    <span className='font-medium text-base tracking-wider'>Nibh viverra</span>
                </div>
                <div className="promotion-section-service-item-description pt-3">
                    <p>Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.</p>
                </div>
            </div>

            <div className="promotion-section-service-item">
                <div className="promotion-section-service-item-icon xs:[left:152px]">
                    <img src={secondServiceItemShape} />
                    <img src={secondServiceItemIcon} />
                </div>
                <div className="promotion-section-service-item-title [padding-top:72px]">
                    <span className='font-medium text-base tracking-wider'>Cursus amet</span>
                </div>
                <div className="promotion-section-service-item-description pt-3">
                    <p>Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.</p>
                </div>
            </div>

            <div className="promotion-section-service-item xs:mb-16">
                <div className="promotion-section-service-item-icon xs:[left:152px]">
                    <img src={thirdServiceItemShape} />
                    <img src={thirdServiceItemIcon} />
                </div>
                <div className="promotion-section-service-item-title [padding-top:72px]">
                    <span className='font-medium text-base tracking-wider'>Ipsum fermentum</span>
                </div>
                <div className="promotion-section-service-item-description pt-3">
                    <p>Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.</p>
                </div>
            </div>
        </div>
    )
}

export default PromotionSectionServices