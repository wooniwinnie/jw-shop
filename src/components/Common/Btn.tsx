import React from 'react';
import { Link } from 'react-router-dom';
type Props = {
    url: string;
    title: string;
    className: string;
    onMouseOver: () => void;
    onMouseLeave: () => void;
};
export default function Btn({
    url,
    title,
    className,
    onMouseOver,
    onMouseLeave,
}: Props) {
    return (
        <button className={className}>
            <Link
                to={url}
                onMouseOver={onMouseOver}
                onMouseLeave={onMouseLeave}
            >
                {title}
            </Link>
        </button>
    );
}
