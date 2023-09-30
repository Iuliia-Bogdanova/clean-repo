import cl from 'classnames';

import { Photo, CommonClassProps } from "../types";

import style from './index.module.scss';

interface PreviewGalleryProps extends CommonClassProps {
    activePhotoIndex: number;
    photo: Photo[];
}

export const PreviewGallery: React.FC<PreviewGalleryProps> = ({
    activePhotoIndex,
    photos,
    className
}) => (
    <div className={cl(style.previewGallery, className)}>
        <ul className={cl(style.previewGalleryTrack)}
        >
            {photos.map((photo) => (
                <li
                    key={photo.id}
                    className={style.previewGalleryPreview}
                >
                    <img
                        src={photo.preview}
                        alt={photo.description}
                        className={style.previewGalleryImage}
                    />
                </li>
            ))}
        </ul>
        <div className={style.previewGalleryCover}>
            {activePhotoIndex + 1} / {photos.length}
        </div>
    </div>
);
