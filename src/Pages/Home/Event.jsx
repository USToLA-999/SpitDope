import React, { useRef, useState } from 'react';
import imag1 from '../../assets/imag1.jpeg';
import imag2 from '../../assets/imag2.jpeg';
import imag3 from '../../assets/image3.jpeg';

const BentoTilt = ({ children, className = '' }) => {
    const [transformStyle, setTransformStyle] = useState('');
    const itemRef = useRef();

    const handleMouseMove = (event) => {
        if (!itemRef.current) return;

        const { left, top, width, height } = itemRef.current.getBoundingClientRect();
        const relativeX = (event.clientX - left) / width;
        const relativeY = (event.clientY - top) / height;

        const tiltX = (relativeY - 0.5) * 5;
        const tiltY = (relativeX - 0.5) * -5;

        const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.95, 0.95, 0.95)`;
        setTransformStyle(newTransform);
    };

    const handleMouseLeave = () => {
        setTransformStyle('');
    };

    return (
        <div
            ref={itemRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={`${className} transition-transform duration-300 ease-out`}
            style={{ transform: transformStyle }}
        >
            {children}
        </div>
    );
};

const BentoCard = ({ src, title }) => {
    return (
        <div className="relative w-full aspect-[4/5] overflow-hidden rounded-lg">
            <img
                src={src}
                alt={title}
                className="w-full h-full object-cover rounded-lg"
                
            />
            <div className="  absolute flex items-start justify-center text-purple-700 w-full bg-black/40 py-4" style={{marginTop:"-17%"}}>
                <h1 className="bebas-neue-regular text-3xl sm:text-6xl text-purple-600 text-center" style={{color:"#6c22a8"}}>{title}</h1>
            </div> 
        </div>
    );
};

const Event = () => {
    return (
        <div className='container-event tagbox mb-16'>
            <div className="container mx-auto pt-5 pb-5">
                <div className="innerbox mt-5 w-full h-full">
                    
                    {/* Headline */}
                    <div className="headlinerbox flex justify-center items-center mt-5">
                        <h1 className="bebas-neue-regular sm:text-6xl text-5xl text-center">
                            Spit Events: <span className='text-purple-800'>Karname</span>
                        </h1>
                    </div>

                    {/* Read More */}
                    <div className="readmore mt-10 text-center w-full sm:px-0 px-5">
                        <p className='jersey-15-regular text-4xl underline'>Learn More</p>
                    </div>

                    {/* 3 Card Grid */}
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 justify-center mt-10 px-4">
                        
                        {/* First Card (Tilt Effect) */}
                        <div className="firstbox w-full">
                            <BentoTilt className="w-full">
                                <BentoCard src={imag1} title="SpitDope" />
                            </BentoTilt>
                        </div>

                        {/* Second Card */}
                        <div className="secondbox w-full">
                            <BentoTilt className="w-full">
                                <BentoCard src={imag2} title="SpitDope: Riot" />
                            </BentoTilt>
                        </div>

                        {/* Third Card */}
                        <div className="thirdbox w-full">
                            <BentoTilt className="w-full">
                                <BentoCard src={imag3} title="SpitDope: Riot 2" />
                            </BentoTilt>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Event;
