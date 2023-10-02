import { useState, useEffect } from "react";

// import { MainPhoto } from "./MainPhoto";
import { TransitionPhoto } from "./TransitionPhoto";
import { PreviewGallery } from "./PrewiewGallery";
import { Navigation } from "./Navigation";
import { Photo } from "./types";

import style from "./index.module.scss";

interface GalleryProps {
    photos: Photo[];
}

export const Gallery: React.FC<GalleryProps> = ({
    photos,
}) => {
    if (!photos.length) {
        return null;
    }

    const [ indexActivePhoto, setIndexActivePhoto] = useState(0);
    const prevPhoto = photos[indexActivePhoto - 1];
    const nextPhoto = photos[indexActivePhoto + 1];

    useEffect(() => {
        const timer = setTimeout(() => {
            if (indexActivePhoto === photos.length - 1) {
                setIndexActivePhoto(0);
            } else {
                setIndexActivePhoto(indexActivePhoto + 1);
            }
        }, 5000);

        return () => {
            clearTimeout(timer);
        };
    }, [indexActivePhoto, photos.length]);

    return (
        <div className={style.gallery}>
            <div className={style.galleryContainer}>
                <TransitionPhoto
                    photos={photos}
                    indexActivePhoto={indexActivePhoto}
                />
                <Navigation
                    className={style.galleryNavigation}
                    disabledPrev={!prevPhoto}
                    disabledNext={!nextPhoto}
                    onPrevClick={() => {
                        setIndexActivePhoto(indexActivePhoto - 1);
                    }}
                    onNextClick={() => {
                        setIndexActivePhoto(indexActivePhoto + 1);
                    }}
                />
            </div>
            <PreviewGallery
                activePhotoIndex={indexActivePhoto}
                photos={photos}
                className={style.previewList}
                setNewPhoto={setIndexActivePhoto}
            />
        </div>
    );
}