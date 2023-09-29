import { Photo, CommonClassProps } from "../types";

interface NavigationProps extends CommonClassProps {
    disabledPrev: boolean;
    disabledNext: boolean;
    onPrevClick: () => void;
    onNextClick: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({
    activePhotoIndex,
    photos,
}) => <div>Navigation</div>;
