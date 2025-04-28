import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';


const ComingSoon = () => {
    return (
        <main>
            <div className="main-container overflow-hidden pt-5 backgroundbox">
                <div className="container mx-auto">
                    <div className="innerbox flex flex-col justify-center items-center">
                        <div className="titlebar mb-5">
                            <h3 className='jersey-15-regular text-4xl sm:text-6xl'>LAUNCHING SOON </h3>
                        </div>
                        <FlipClockCountdown
                            className='flip-clock'
                            to={new Date().getTime() + 98 * 24 * 3600 * 1000 + 5000}
                            labels={['DAYS', 'HOURS', 'MINUTES', 'SECONDS']}
                            labelStyle={{ fontSize: 10, fontWeight: 500, textTransform: 'uppercase' }}
                            digitBlockStyle={{ width: 40, height: 60, fontSize: 30, }}
                            dividerStyle={{ color: 'white', height: 1 }}
                            separatorStyle={{ color: 'red', size: '6px' }}
                            duration={0.5}
                            renderOnServer={false}
                            renderMap={true}
                        >
                            Finished
                        </FlipClockCountdown>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default ComingSoon