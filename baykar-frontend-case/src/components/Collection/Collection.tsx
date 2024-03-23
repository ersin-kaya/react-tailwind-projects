import './Collection.css'
import collectionLeftSideImage from '../../assets/collection-left-side.png'
import collectionRightSideImage from '../../assets/collection-right-side.png'

const Collection = () => {
    return (
        <div className='collection'>
            <div className="collection-title"><h1>Grow your collection</h1></div>
            <p className="collection-description">
                Enim neque massa porta adipiscing elit. Sem libero id faucibus nibh amet dictum pellentesque sed. Eu non turpis risus odio sapien, fames sit rhoncus.
                Nec magna sed interdum sit purus tellus. Et volutpat proin neque placerat at bibendum quam tellus.
            </p>
            <div className="collection-images">
                <img src={collectionLeftSideImage} />
                <img src={collectionRightSideImage} />
            </div>
        </div>
    )
}

export default Collection