import { Photo, CommonClassProps } from "../types";

interface PreviewGalleryProps extends CommonClassProps {
    activePhotoIndex: number;
    photo: Photo[];
}

export const PreviewGallery: React.FC<PreviewGalleryProps> = ({
    activePhotoIndex,
    photos,
}) => (
    <div>Preview Gallery</div>
)
