import "./style.scss";

export const IconButton = ({ direction, disable }) => {
    let cls = 'icon-button'

    if (direction === 'left') cls += 'left';
    if (direction === 'right') cls += 'right';
    if (disable) cls += 'disable';

    return ( 
        <div className={cls} />
    );
}

export default IconButton;