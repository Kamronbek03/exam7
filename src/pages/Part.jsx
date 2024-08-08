import React from 'react'
import UserAdd from "../assets/images/userAdd.svg"
import Close from "../assets/images/close.svg"
import UserPart from "../assets/images/userPart.svg"
import Union from "../assets/images/Union.svg"
function Part() {
    return (
        <div className='px-[20px]'>
            <div className='flex justify-between items-center py-[15px]'>
                <strong className='font-bold text-[20px] leading-[20px] tracking-[1%] text-[#CCCCCC]'>Friend Activity</strong>
                <div className='flex'>
                    <img src={UserAdd} alt="userAdd svg" width={32} height={32} />
                    <img src={Close} alt="close svg" width={56} height={56} />
                </div>
            </div>
            <div className='flex flex-col gap-[18px]'>
                <p className='font-[450] text-[18px] leading-[24px] text-[#CCCCCC]'>Let friends and followers on Spotify see what you’re listening to.</p>
                <ul className='flex flex-col gap-[17px]'>
                    <li className='flex gap-[10px] items-center'>
                        <img src={UserPart} alt=" user part svg" width={62} height={62} />
                        <img src={Union} alt=" union svg" width={102} height={42} />
                    </li>
                    <li className='flex gap-[10px] items-center'>
                        <img src={UserPart} alt=" user part svg" width={62} height={62} />
                        <img src={Union} alt=" union svg" width={102} height={42} />
                    </li>
                    <li className='flex gap-[10px] items-center'>
                        <img src={UserPart} alt=" user part svg" width={62} height={62} />
                        <img src={Union} alt=" union svg" width={102} height={42} />
                    </li>
                </ul>
                <p className='font-[450] text-[18px] leading-[25px] text-[#CCCCCC]'>Go to Settings  Social and enable “Share my listening activity on Spotify.’ You can turn this off at any time.</p>
                <button className='font-bold text-[18px] leading-[22.77px] tracking-[14%] text-[#171717] bg-[#FFFFFF] py-[20px] px-[64px] rounded-[40px]'>SETTINGS</button>
            </div>
        </div>
    )
}

export default Part