import React from 'react'
import imag1 from '../../assets/imag1.jpeg'
import imag2 from '../../assets/imag2.jpeg'
import imag3 from '../../assets/image3.jpeg'

const Event = () => {
    return (
        <div className='container-event tagbox mb-16'>
            <div className="container mx-auto pt-5 pb-5">
                <div className="innerbox mt-5 w-full ">
                    <div className="headlinerbox flex justify-center align-center mt-5">
                        <h1 className="bebas-neue-regular  sm:text-6xl text-5xl">
                            Spit Events: <span className='text-purple-800'>Karname</span>
                        </h1>
                    </div>
                    <div className="readmore mt-10 text-center w-full sm:pe-0 sm:px-0 px-5  ">
                        <p className='jersey-15-regular text-4xl underline '>Learn More  </p>
                    </div>

                    <div className=" grid lg:grid-cols-3 md:grid-cols-1 gap-8  justify-center mt-10    ">
                        <div className="firstbox mx-auto  ">
                            <div className="innerbox-container  mx-auto w-3/4">
                                <div className="imagebox mx-auto ">
                                    <img src={imag1} alt="" width={500} className='rounded-lg' />
                                    <p className=" bebas-neue-regular text-5xl text-purple-900 z-10 -mt-16  text-center"> SpitDope:Riot</p>
                                </div>
                            </div>
                        </div>
                        <div className="secondbox mx-auto">
                            <div className="innerbox-container mx-auto w-3/4">
                                <div className="imagebox mx-auto">
                                    <img src={imag2} alt="" width={500} className='rounded-lg' />
                                    <p className=" bebas-neue-regular text-5xl text-purple-900 z-10 -mt-16  text-center"> SpitDope:Riot</p>
                                </div>
                            </div>
                        </div>
                        <div className="thirdbox mx-auto">
                            <div className="innerbox-container mx-auto w-3/4">
                                <div className="imagebox mx-auto">
                                    <img src={imag3} alt="" width={500} height={100} className='rounded-lg' />
                                    <p className=" bebas-neue-regular text-5xl text-purple-900 z-10 -mt-16  text-center"> SpitDope:Riot</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Event