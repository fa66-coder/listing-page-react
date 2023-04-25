import './ImageGridLayout.css'
import Poster1 from "../../images/poster1.jpg"
import Poster2 from "../../images/poster2.jpg"
import Poster3 from "../../images/poster3.jpg"
import Poster4 from "../../images/poster4.jpg"
import Poster5 from "../../images/poster5.jpg"
import Poster6 from "../../images/poster6.jpg"
import Poster7 from "../../images/poster7.jpg"
import Poster8 from "../../images/poster8.jpg"
import Poster9 from "../../images/poster9.jpg"
import ImageGridItem from './ImageGridItem'
import listingPage1 from '../../api/listing-page1.json'

const formatLisitngPage = listingPage1
const imagePosters = formatLisitngPage.page['content-items'].content
export default function ImageGridLayout() {
    return (
        <div className="image-grid-container">
            {imagePosters.map((poster)=>{
               return <ImageGridItem posterImage={poster['poster-image']} posterName={poster.name}/>
            })}
            
             {/* <img src={Poster1} className='grid-images Poster1' alt='poster 1 image'/>
             <img src={Poster2} className='grid-images Poster2' alt='poster 1 image'/>
             <img src={Poster3} className='grid-images Poster3' alt='poster 1 image'/>
             <img src={Poster4} className='grid-images Poster4' alt='poster 1 image'/>
             <img src={Poster5} className='grid-images Poster5' alt='poster 1 image'/>
             <img src={Poster6} className='grid-images Poster6' alt='poster 1 image'/>
             <img src={Poster7} className='grid-images Poster7' alt='poster 1 image'/>
             <img src={Poster8} className='grid-images Poster8' alt='poster 1 image'/>
             <img src={Poster9} className='grid-images Poster9' alt='poster 1 image'/> */}
        </div>
    )
}