import { PlayCircleIcon } from '@heroicons/react/24/outline'
import './PromotionSectionInfo.css'

const PromotionSectionInfo = () => {
    return (
        <div className='promotion-section-info xs:flex xs:flex-col xs:text-center'>
            <div className="md:text-7xl font-semibold xs:[font-size:56px] xs:leading-tight">Collectible Sneakers</div>
            <div className="py-8 [font-weight:400] [color:#0F172A] [font-size:18px]">Sit elit feugiat turpis sed integer accumsan turpis. Sed suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices amet.</div>
            <div className="buttons flex items-center font-medium xs:justify-center">
                <a className='sign-up-button flex justify-center items-center' href="#">Sign up now</a>
                <a className='watch-demo-button flex justify-center items-center' href="#"><PlayCircleIcon className="h-6 w-6 mr-2" aria-hidden="true" />Watch demo</a>
            </div>
        </div>
    )
}

export default PromotionSectionInfo