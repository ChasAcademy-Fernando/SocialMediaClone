import Image from "next/image";
import { useSession } from "next-auth/react";
import { CameraIcon, VideoCameraIcon } from "@heroicons/react/solid";
import { EmojiHappyIcon } from "@heroicons/react/outline";
import { useRef } from "react";
import firebase from "firebase"
import {db} from "../firebase"


const StatusBox = () => {
    const {data:session}=useSession();
    const inputRef = useRef(null);

    const sendPost = (e) =>{
        e.preventDefault();
        if(!inputRef.current.value) return;

        db.collection('posts').add({
            message:inputRef.current.value,
            name: session.user.name,
            email: session.user.email,
            image: session.user.image,
            timestamp: firebase.firestore.FieldValue.serverTimeStamp()
        })

        inputRef.current.value = '';
    };
    return ( 
    <div className=" bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6">
        <div className="flex space-x-4 p-4 items-center">
            <Image 
            className=" rounded-full"
            src={session.user.image}
            width={40}
            height={40}
            />
            <form className=" flex flex-1">
                <input type="text" 
                ref={inputRef}
                placeholder={`What's on your mind, ${session.user.name}?`}
                className=" rounded-full focus:outline-none h-12 bg-gray-100 flex-grow px-5"
                />
                <button className="hidden" type="submit" onClick={sendPost}>Submit</button>
            </form>
        </div>
        <div className=" justify-evenly flex p-3 border-t">
             <div className="inputIcon">
                <VideoCameraIcon className=" h-7 text-red-500"/>
                <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
             </div>
             <div className="inputIcon">
                <CameraIcon className=" h-7 text-green-400"/>
                <p className="text-xs sm:text-sm xl:text-base">Photo/VIdeo</p>
             </div>
             <div className="inputIcon">
                <EmojiHappyIcon className=" h-7 text-yellow-300"/>
                <p className="text-xs sm:text-sm xl:text-base">Feeling/Activity</p>
             </div>
        </div>
    </div> );
}
 
export default StatusBox;