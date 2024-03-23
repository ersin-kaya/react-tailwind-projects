import './Statistics.css'
import statisticsSneakerImage from '../../assets/statistics-sneaker.png'

const Statistics = () => {
    return (
        <div className='statistics relative xs:flex xs:flex-col xs:justify-center'>
            <img src={statisticsSneakerImage} className='absolute top-0 left-52 xs:static xs:top-auto xs:left-auto xs:mb-12' />
            <div className="statistics-content">
                <h1 className="statistics-number">11,658,467</h1>
                <h3 className='statistics-description'>Shoes Collected</h3>
            </div>
        </div>
    )
}

export default Statistics