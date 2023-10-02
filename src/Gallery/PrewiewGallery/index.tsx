import { useMemo, useRef, useEffect } from 'react';

import cl from 'classnames';

import { Photo, CommonClassProps } from "../types";

import style from './index.module.scss';

interface PreviewGalleryProps extends CommonClassProps {
    activePhotoIndex: number;
    photos: Photo[];
    setNewPhoto: (id: number) => void;
}

export const PreviewGallery: React.FC<PreviewGalleryProps> = ({
    activePhotoIndex,
    photos,
    className,
    setNewPhoto,
}) => {
    if (!photos.length) {
        return null;
    }

    const previewContainer = useRef<HTMLUListElement>(null);

    useEffect(() => {
        if (!previewContainer.current) {
            return;
        }

        // условия с тернарным оператором
        const maxWidth400px = window.matchMedia("(max-width: 400px)").matches;
        const maxWidth600px = window.matchMedia("(max-width: 600px)").matches;

        previewContainer.current.style.transform = maxWidth400px
            ? `translate3d(-${activePhotoIndex * 100}px, 0, 0)`
            : maxWidth600px
            ? `translate3d(-${activePhotoIndex * 110}px, 0, 0)`
            : `translate3d(-${activePhotoIndex * 164}px, 0, 0)`;
    }, [activePhotoIndex]);

    //     if(window.matchMedia("(max-width: 400px)").matches) {
    //         previewContainer.current.style.transform = `translate3d(-${activePhotoIndex * 100}px, 0, 0)`;
    //     } else if(window.matchMedia("(max-width: 600px)").matches) {
    //         previewContainer.current.style.transform = `translate3d(-${activePhotoIndex * 110}px, 0, 0)`;
    //     } else {
    //         previewContainer.current.style.transform = `translate3d(-${activePhotoIndex * 164}px, 0, 0)`;
    //     }
    // }, [ activePhotoIndex ]);

    return (
        <div className={cl(style.previewGallery, className)}>
            {useMemo(
                () => (
                    <ul
                        className={cl(style.previewGalleryTrack)}
                        ref={previewContainer}
                    >
                        {photos.map((photo, id) => (
                            <li key={photo.id}>
                                <button
                                    className={style.previewGalleryPreview} 
                                    onClick={() => setNewPhoto(id)}
                                >
                                    <img
                                        src={photo.preview}
                                        alt={photo.description}
                                        className={style.previewGalleryImage}
                                    />
                                </button>
                            </li>
                        ))}
                    </ul>
                ), [])}

            <div className={style.previewGalleryCover}>
                {activePhotoIndex + 1} / {photos.length}
            </div>
        </div>
    );
};