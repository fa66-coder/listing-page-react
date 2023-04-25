import './ImageGridLayout.css'
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
            
        </div>
    )
}