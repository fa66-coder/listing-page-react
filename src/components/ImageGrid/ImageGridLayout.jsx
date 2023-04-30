import './ImageGridLayout.css'
import ImageGridItem from './ImageGridItem'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState, useRef, useCallback } from 'react'
import { loadImages, filteredImages, setImageLoadStatus } from '../../features/Images/imagesSlice'

export default function ImageGridLayout({ searchFilter }) {
    const totalPages = 3
    const disableTwiceMount = useRef(false)
    let [pageNumber, setPageNumber] = useState(1)
    let [hasNextPage, setHasNextPage] = useState(true)
    let imagesFiltered = useSelector(state => filteredImages(state, searchFilter))
    const dispatch = useDispatch()

    const imagesLoadStatus = useSelector(state => state.images.status)
    const loadError = useSelector(state => state.images.error)
    useEffect(() => {
        if (imagesLoadStatus === 'idle') {
            setHasNextPage(pageNumber < totalPages)
            dispatch(loadImages(pageNumber))
        }
    }, [pageNumber])

    let intObserver = useRef()
    let lastPosterRef = useCallback((post) => {
        if (imagesLoadStatus === 'loading') return;
        if (intObserver.current) intObserver.current.disconnect()
        intObserver.current = new IntersectionObserver((posters) => {
            if (posters[0].isIntersecting && hasNextPage) {
                console.log("we are near to last post")
                dispatch(setImageLoadStatus('idle'))
                disableTwiceMount.current = false;
                setPageNumber(prev => prev + 1)

            }
        })
        if (post) intObserver.current.observe(post)
    }, [hasNextPage])

    return (
        <div className="image-grid-container">
            {imagesFiltered.map((poster, index) => {
                if (imagesFiltered.length === index + 1) {
                    return <ImageGridItem key={poster.id} ref={lastPosterRef} posterImage={poster['poster-image']} posterName={poster.name} />
                }
                return <ImageGridItem key={poster.id} posterImage={poster['poster-image']} posterName={poster.name} />
            })}

        </div>
    )
}