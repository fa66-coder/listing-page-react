import './ImageGridLayout.css'
import ImageGridItem from './ImageGridItem'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState, useRef, useCallback } from 'react'
import { loadImages, filteredImages, setImageLoadStatus } from '../../features/Images/imagesSlice'

export default function ImageGridLayout({ searchFilter }) {
    const totalPages = 3
    const shouldLoadImg = useRef(true)
    let [pageNumber, setPageNumber] = useState(1)
    let [hasNextPage, setHasNextPage] = useState(true)
    let [isLoading, setIsLoading] = useState(false)
    let imagesFiltered = useSelector(state => filteredImages(state, searchFilter))
    const dispatch = useDispatch()

    const imagesLoadStatus = useSelector(state => state.images.status)
    const loadError = useSelector(state => state.images.error)
    useEffect(() => {
        //shouldLoadImg flag is to avoid useEffect running twice
        if(pageNumber>1) {
            shouldLoadImg.current = true
        }
        if (shouldLoadImg.current && imagesLoadStatus === 'idle' && !isLoading) {
            setHasNextPage(pageNumber < totalPages)
            setIsLoading(true)
            dispatch(loadImages(pageNumber))
                .then(() => {
                    setIsLoading(false)
                })
                .catch((error) => {
                    setIsLoading(false)
                })
        }

        //Unmount
        return () => shouldLoadImg.current = false
    }, [pageNumber])

    let intObserver = useRef()
    let lastPosterRef = useCallback((post) => {
        if (imagesLoadStatus === 'loading') return;
        //Below intersection observer is used to find whether last poster row is reached
        if (intObserver.current) intObserver.current.disconnect()
        intObserver.current = new IntersectionObserver((posters) => {
            if (posters[0].isIntersecting && hasNextPage) {
                console.log("we are near to last post")
                dispatch(setImageLoadStatus('idle'))
                setPageNumber(prev => prev + 1)
            }
        })
        if (post) intObserver.current.observe(post)
    }, [hasNextPage])

    if (loadError) return <div className='center'>Something went wrong in fetching comedy posters, Please try after sometime</div>

    return (
        <>
            {(isLoading && pageNumber == 1) &&
                (<div><div className="loading-center">Loading Posters...</div></div>)}
            <div className="image-grid-container">
                {imagesFiltered && (
                    imagesFiltered.map((poster, index) => {
                        if (imagesFiltered.length === index + 1) {
                            return <ImageGridItem key={poster.id} ref={lastPosterRef} posterImage={poster['poster-image']} posterName={poster.name} />
                        }
                        return <ImageGridItem key={poster.id} posterImage={poster['poster-image']} posterName={poster.name} />
                    }))}
            </div>
            {(isLoading && pageNumber > 1) &&
                (<div className="loading-center">Loading More Posters...</div>)}
        </>
    )
}