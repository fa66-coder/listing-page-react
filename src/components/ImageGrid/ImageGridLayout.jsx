import './ImageGridLayout.css'
import ImageGridItem from './ImageGridItem'
import { useSelector , useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { loadImages , filteredImages} from '../../features/Images/imagesSlice'

export default function ImageGridLayout({searchFilter}) {
    let imagesFiltered = useSelector(state=>filteredImages(state, searchFilter))
    const dispatch = useDispatch()

    const imagesLoadStatus = useSelector(state=>state.images.status)
    const loadError = useSelector(state => state.images.error)
    useEffect(()=>{
        if(imagesLoadStatus === 'idle') {
             dispatch(loadImages())
        }
    }, [imagesLoadStatus])

    return (
        <div className="image-grid-container">
            {imagesFiltered.map((poster)=>{
               return <ImageGridItem posterImage={poster['poster-image']} posterName={poster.name}/>
            })}
            
        </div>
    )
}