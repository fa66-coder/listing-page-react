import './ImageGridLayout.css'
import ImageGridItem from './ImageGridItem'
import { useSelector , useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { loadImages } from '../../features/Images/imagesSlice'

export default function ImageGridLayout() {
    const imagePosters = useSelector(state=>state.images.images)
    const dispatch = useDispatch()

    const imagesLoadStatus = useSelector(state=>state.images.status)
    const loadError = useSelector(state => state.images.error)
    useEffect(()=>{
        console.log("Entere use effect",imagePosters)
        if(imagesLoadStatus === 'idle') {
             dispatch(loadImages())
        }
    }, [imagesLoadStatus])

    return (
        <div className="image-grid-container">
            {imagePosters.map((poster)=>{
               return <ImageGridItem posterImage={poster['poster-image']} posterName={poster.name}/>
            })}
            
        </div>
    )
}