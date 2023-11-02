// MainVideo.tsx

import { hover } from '@testing-library/user-event/dist/hover';
import React, { useState } from 'react';

type Props = {};

export default function MainVideos({}: Props) {
const videoContent = [
{
title: 'The Beginning of a Perfect Fit',
text: '매일의 편안함과 스타일을 담은 바지',
src: 'https://cdn.pixabay.com/vimeo/824281872/man-160975.mp4?width=360&hash=6695040ea1886e6961df641542a7749f845cfc00',
className:
'relative w-full h-full col-start-1 row-span-6 border border-zinc-400',
},
{
title: 'A Step Apart',
text: '당신의 발걸음을 더욱 특별하게 만드는 신발',
src: 'https://cdn.pixabay.com/vimeo/678173574/man-107337.mp4?width=640&hash=88befe4a38e2b4e3ed50e21bac8b865838c470f3',
className:
'relative w-full h-full col-start-2 row-span-3 border border-zinc-400',
},
{
title: 'Wear the Elegance',
text: '당신의 스타일을 완성하는 우아한 셔츠',
src: 'https://cdn.pixabay.com/vimeo/592491844/woman-86378.mp4?width=1280&hash=d00c216975f3ba79c6c593ea6af3c8615ce61879',
className:
'relative w-full h-full col-start-2 row-span-3 border border-zinc-400',
},
];

    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const onMouseOverHandler = (index: number) => {
        setHoveredIndex(index);
    };

    // 마우스가 비디오 인덱스에서 벗어나면 title, text 사라지게 해줭
    const leaveMouseOverHandler = () => {
        setHoveredIndex(null);
    };

    const getTitleClass = (index: number) => {
        if (index === hoveredIndex) {
            return 'absolute top-0 text-2xl opacity-100 left-0 transition-all text-white  ';
        }
        return 'absolute top-0 -left-96 text-1xl opacity-0 ';
    };

    const getTextClass = (index: number) => {
        if (index === hoveredIndex) {
            return 'absolute top-12 text-1xl opacity-100 left-0 transition-all text-white ';
        }
        return 'absolute top-12 text-1xl -left-96 opacity-0';
    };
    return (
        <>
            {videoContent.map((item, index) => (
                <div
                    className={item.className}
                    key={index}
                    onMouseOver={() => onMouseOverHandler(index)}
                    onMouseLeave={leaveMouseOverHandler}
                >
                    <video
                        className='object-cover w-full h-full z-1'
                        src={item.src}
                        loop
                        muted
                        autoPlay
                    />
                    <div>
                        <h1 className={getTitleClass(index)}>{item.title}</h1>
                        <p className={getTextClass(index)}>{item.text}</p>
                    </div>
                </div>
            ))}
        </>
    );

}
