import './JoinUs.css'

type Props = {}

const JoinUs = (props: Props) => {
    return (
        <div className='join-us [color:#0f172a]'>
            <div className="join-us-content bg-white p-16 flex justify-between items-center [max-width:1220px] mx-auto xs:flex-col">
                <div className="join-us-left-section">
                    <span className="title [font-size:56px] font-extrabold">Why join us</span>
                    <div className="detail my-6">
                        <div className="detail-item text-xl tracking-wide">
                            <i className="bi bi-check-lg mr-2 [color:#17803d]"></i><span>Est et in pharetra magna adipiscing ornare aliquam.</span>
                        </div>
                        <div className="detail-item text-xl tracking-wide">
                            <i className="bi bi-check-lg mr-2 [color:#17803d]"></i><span>Tellus arcu sed consequat ac velit ut eu blandit.</span>
                        </div>
                        <div className="detail-item text-xl tracking-wide">
                            <i className="bi bi-check-lg mr-2 [color:#17803d]"></i><span>Ullamcorper ornare in et egestas dolor orci.</span>
                        </div>
                    </div>
                    <a href="#" className="join-us-button flex justify-center items-center text-xl tracking-wide font-medium">Sign up now</a>
                </div>
                <div className="join-us-right-section">right section</div>
            </div>
        </div>
    )
}

export default JoinUs