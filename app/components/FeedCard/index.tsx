import React from 'react'
import Image from 'next/image'
import { TbMessageCircle } from "react-icons/tb";
import { FaRetweet } from 'react-icons/fa6';
import { IoHeartOutline } from 'react-icons/io5';
import { AiOutlineUpload } from 'react-icons/ai';

const FeedCard: React.FC = () => {
    return <div className="border border-r-0 border-l-0 border-b-0 border-gray-500 p-5 hover:bg-slate-800 transition-all">
        <div className="grid grid-cols-12 gap-3">
            <div className="col-span-1">
                <Image src="https://avatars.githubusercontent.com/u/8079861?v=4" alt="user-image" height={50} width={50}></Image>
            </div>
            <div className="col-span-11">
                <h5>Divyansh Sharma</h5>
                <p>Just a guy who loves coding Cold-blooded. Warm-hearted. Unsung. Unusual. Unreasonable. Unapologetic. The one you always wanted to be. PollComm Strategist. Founder: WarRoom Strategies</p>
                <div className="flex flex-row justify-between mt-4 text-xl items-center w-[90%]">
                    <div>
                        <TbMessageCircle />
                    </div>
                    <div>
                        <FaRetweet />
                    </div>
                    <div>
                        <IoHeartOutline />
                    </div>
                    <div>
                        <AiOutlineUpload />
                    </div>
                </div>
            </div>
        </div>
    </div>

}

export default FeedCard;