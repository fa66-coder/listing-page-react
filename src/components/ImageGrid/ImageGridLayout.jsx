import './ImageGridLayout.css'
import ImageGridItem from './ImageGridItem'
import { useSelector , useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { loadImages , filteredImages} from '../../features/Images/imagesSlice'

export default function ImageGridLayout({searchFilter}) {
    const totalPages = 3
    let [pageNumber , setPageNumber] = useState(3)
    let [hasMorePages, setHasMorePages] = useState(true)
    let imagesFiltered = useSelector(state=>filteredImages(state, searchFilter))
    const dispatch = useDispatch()

    const imagesLoadStatus = useSelector(state=>state.images.status)
    const loadError = useSelector(state => state.images.error)
    //if reaches end set pageNumber:
    // setHasMorePages(pageNumber<=totalPages)
    // setPageNumber(prev=>prev+1)

    useEffect(()=>{
        if(imagesLoadStatus === 'idle') {
             dispatch(loadImages(pageNumber))
        }
    }, [imagesLoadStatus, pageNumber])

    return (
        <div className="image-grid-container">
            {imagesFiltered.map((poster)=>{
               return <ImageGridItem posterImage={poster['poster-image']} posterName={poster.name}/>
            })}
            
        </div>
    )
}