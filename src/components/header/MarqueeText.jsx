
import { Titan_One } from 'next/font/google';
const titanOne = Titan_One({
    family: 'Titan One',
    weight: '400',
    subsets: ['latin', 'latin-ext'],

});
const MarqueeText = () => {
    return (
        <>
            <div className="noti">
                <div className={`${titanOne.className} text`}>
                    <span className='bobby'>$BOBBY</span>
                    <img src="/images/head/BOBBY_HEAD_1.png" width="30px" alt="" />
                    <span className='bobby'>$BOBBY</span>
                    <img src="/images/head/BOBBY_HEAD_2.png" width="30px" alt="" />
                    <span className='bobby'>$BOBBY</span>
                    <img src="/images/head/BOBBY_HEAD_3.png" width="30px" alt="" />
                    <span className='bobby'>$BOBBY</span>
                    <img src="/images/head/BOBBY_HEAD_1.png" width="30px" alt="" />
                    <span className='bobby'>$BOBBY</span>
                    <img src="/images/head/BOBBY_HEAD_2.png" width="30px" alt="" />
                    <span className='bobby'>$BOBBY</span>
                    <img src="/images/head/BOBBY_HEAD_3.png" width="30px" alt="" />
                    <span className='bobby'>$BOBBY</span>
                    <img src="/images/head/BOBBY_HEAD_1.png" width="30px" alt="" />
                    <span className='bobby'>$BOBBY</span>
                    <img src="/images/head/BOBBY_HEAD_2.png" width="30px" alt="" />
                    <span className='bobby'>$BOBBY</span>
                    <img src="/images/head/BOBBY_HEAD_3.png" width="30px" alt="" />
                    <span className='bobby'>$BOBBY</span>
                    <img src="/images/head/BOBBY_HEAD_1.png" width="30px" alt="" />
                    <span className='bobby'>$BOBBY</span>
                    <img src="/images/head/BOBBY_HEAD_2.png" width="30px" alt="" />
                    <span className='bobby'>$BOBBY</span>
                    <img src="/images/head/BOBBY_HEAD_3.png" width="30px" alt="" />
                    <span className='bobby'>$BOBBY</span>
                    <img src="/images/head/BOBBY_HEAD_1.png" width="30px" alt="" />
                    <span className='bobby'>$BOBBY</span>
                    <img src="/images/head/BOBBY_HEAD_2.png" width="30px" alt="" />
                    <span className='bobby'>$BOBBY</span>
                    <img src="/images/head/BOBBY_HEAD_3.png" width="30px" alt="" />
                    <span className='bobby'>$BOBBY</span>
                    <img src="/images/head/BOBBY_HEAD_1.png" width="30px" alt="" />
                    <span className='bobby'>$BOBBY</span>
                    <img src="/images/head/BOBBY_HEAD_2.png" width="30px" alt="" />
                    <span className='bobby'>$BOBBY</span>
                    <img src="/images/head/BOBBY_HEAD_3.png" width="30px" alt="" />
                </div>
            </div>
        </>
    );
};

export default MarqueeText;