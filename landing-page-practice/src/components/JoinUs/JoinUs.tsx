import './JoinUs.css'
import joinUsImage from '../../assets/join-us-image.png'
import joinUsBrownShape from '../../assets/join-us-brown-shape.png'
import joinUsYellowShape from '../../assets/join-us-yellow-shape.png'
import joinUsGreenShape from '../../assets/join-us-green-shape.png'
import joinUsBlueShape from '../../assets/join-us-blue-shape.png'
import joinUsPurpleShape from '../../assets/join-us-purple-shape.png'
import joinUsVioletRedShape from '../../assets/join-us-violet-red-shape.png'

const JoinUs = () => {
    return (
        <div className='join-us flex justify-center items-center [color:#0f172a]'>
            <div className="join-us-content bg-white p-16 flex justify-between items-center [max-width:1220px] mx-auto xs:flex-col xs:mb-20">
                <div className="join-us-left-section xs:flex xs:flex-col xs:items-center xs:[width:350px]">
                    <span className="title [font-size:56px] font-extrabold tracking-wide xs:text-4xl xs:font-semibold">Why join us</span>
                    <div className="detail my-6 text-lg tracking-wide">
                        <div className="detail-item flex">
                            <i className="bi bi-check-lg mr-2 block [color:#17803d]"></i><span className='block'>Est et in pharetra magna adipiscing ornare aliquam.</span>
                        </div>
                        <div className="detail-item flex">
                            <i className="bi bi-check-lg mr-2 block [color:#17803d]"></i><span className='block'>Tellus arcu sed consequat ac velit ut eu blandit.</span>
                        </div>
                        <div className="detail-item flex">
                            <i className="bi bi-check-lg mr-2 block [color:#17803d]"></i><span className='block'>Ullamcorper ornare in et egestas dolor orci.</span>
                        </div>
                    </div>
                    <a href="#" className="join-us-button flex justify-center items-center text-xl tracking-wide font-medium xs:[z-index:1]">Sign up now</a>
                </div>
                <div className="join-us-right-section relative flex justify-center items-center xs:[width:420px]">
                    <img className='mt-10 [width:520px] [z-index:1]' src={joinUsImage} />
                    <img className='absolute [left:15px] [top:73px] xs:[width:70px] xs:rounded-full xs:[left:5px] xs:[top:70px]' src={joinUsBrownShape} />
                    <img className='absolute scale-110 [left:-10px] [top:-50px] xs:[left:-47px] xs:[top:-18px]' src={joinUsYellowShape} />
                    <img className='absolute [z-index:2] [left:100px] [top:308px] xs:[width:60px] xs:[left:75px] xs:[top:233px]' src={joinUsGreenShape} />
                    <img className='absolute [left:410px] [top:-55px] xs:[width:46px] xs:[left:308px] xs:[top:-10px]' src={joinUsBlueShape} />
                    <img className='absolute [left:360px] [top:330px] xs:[width:55px] xs:rounded-full xs:[left:280px] xs:[top:240px]' src={joinUsPurpleShape} />
                    <img className='absolute [left:395px] [top:265px] xs:[width:180px] xs:[left:307px] xs:[top:190px] xs:[border-radius:70px]' src={joinUsVioletRedShape} />
                </div>
            </div>
        </div>
    )
}

export default JoinUs