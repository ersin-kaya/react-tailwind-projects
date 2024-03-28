import './BestProducts.css'
import firstProductPhoto from '../../assets/first-product.png'
import secondProductPhoto from '../../assets/second-product.png'
import thirdProductPhoto from '../../assets/third-product.png'
import firstCardShape from '../../assets/first-card-shape.png'
import secondCardFirstShape from '../../assets/second-card-first-shape.png'
import secondCardSecondShape from '../../assets/second-card-second-shape.png'
import thirdCardFirstShape from '../../assets/third-card-first-shape.png'
import thirdCardSecondShape from '../../assets/third-card-second-shape.png'

const BestProducts = () => {
    return (
        <div className='best-products pt-16 xs:pt-10 xs:[height:1739px]'>
            <div className="best-products-header flex justify-between items-center [max-width:1220px] mx-auto xs:flex-col">
                <span className="best-products-title [font-size:56px] xs:[font-size:32px] xs:mb-6 font-bold tracking-wide">The best of the best</span>
                <a href="#" className="best-products-button text-lg xs:text-2xl font-medium tracking-wider">Sign up now</a>
            </div>
            <div className="best-products-content [position:relative] pt-16 flex justify-between xs:flex-col xs:items-center [max-width:1220px] mx-auto">
                <img className='[position:absolute] [left:-30px] [top:220px] xs:[width:202px] xs:[left:50px] xs:[top:363px]' src={firstCardShape} />
                <div className="product-card">
                    <img className='product-photo' src={firstProductPhoto} />
                    <div className="card-body p-8">
                        <span className="card-title text-2xl font-medium tracking-wide">Title</span>
                        <p className="card-description text-lg font-light py-4 tracking-wide">Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.</p>
                        <a href="#" className="card-button text-xl tracking-wide"><i className="bi bi-cart2 pr-4"></i>Buy Now</a>
                    </div>
                </div>
                <img className='[position:absolute] [left:402px] [top:30px] xs:[left:270px] xs:[top:650px]' src={secondCardFirstShape} />
                <img className='[position:absolute] [left:683px] [top:340px]' src={secondCardSecondShape} />
                <div className="product-card">
                    <img className='product-photo' src={secondProductPhoto} />
                    <div className="card-body p-8">
                        <span className="card-title text-2xl font-medium tracking-wide">Title</span>
                        <p className="card-description text-lg font-light py-4 tracking-wide">Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.</p>
                        <a href="#" className="card-button text-xl tracking-wide"><i className="bi bi-cart2 pr-4"></i>Buy Now</a>
                    </div>
                </div>
                <img className='[position:absolute] [left:933px] [top:360px] xs:[left:0px] xs:[top:1130px]' src={thirdCardFirstShape} />
                <img className='[position:absolute] [left:1025px] [top:100px]' src={thirdCardSecondShape} />
                <div className="product-card">
                    <img className='product-photo' src={thirdProductPhoto} />
                    <div className="card-body p-8">
                        <span className="card-title text-2xl font-medium tracking-wide">Title</span>
                        <p className="card-description text-lg font-light py-4 tracking-wide">Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.</p>
                        <a href="#" className="card-button text-xl tracking-wide"><i className="bi bi-cart2 pr-4"></i>Buy Now</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BestProducts