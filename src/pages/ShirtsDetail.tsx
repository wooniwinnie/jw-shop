import React from 'react';
import { useParams } from 'react-router-dom';

type Props = {};

export default function ShirtsDetail({}: Props) {
    const { shirtsId } = useParams();
    console.log(shirtsId);
    return <div>ShirtsDetail</div>;
}
