import Image from "next/image";
import { CameraIcon, VideoCameraIcon } from "@heroicons/react/solid";
import { EmojiHappyIcon } from "@heroicons/react/outline";
import { useRef, useState } from "react";
import { db,storage } from "@/firebaseConfig";
import { ref, uploadBytes,getDownloadURL} from "firebase/storage";
import {collection,addDoc, serverTimestamp,setDoc, doc} from "firebase/firestore"
import { useUser } from "@clerk/nextjs";

const StatusBox = () => {
    const {user}= useUser()
    const inputRef = useRef(null);
    const filePickerRef =useRef(null);
    const [imageToPost, setImageToPost] = useState(null)
    const [imageToPreview, setImageToPreview] = useState(null)



    const addImageToPost = (e) =>{
        const image = e.target.files[0];
        if(!image) return;
               
        const reader = new FileReader();
        if(image){
            reader.readAsDataURL(image)
        }
        reader.onload = (readerEvent)=>{
            setImageToPreview(readerEvent.target.result)
        }
        setImageToPost(image)
    }

    const removeImage = () =>{
        setImageToPost(null);
    }

    const sendPost = (e) =>{
        e.preventDefault();
        if(!inputRef.current.value) return;

        addDoc(collection(db,'posts'),{
            message:inputRef.current.value,
            name: user.fullName,
            email: user.emailAddresses[0].emailAddress,
            image: user.imageUrl,
            timestamp: serverTimestamp()
        }).then(file =>{
            if(imageToPost){
                console.log(imageToPost)
                const storageRef = ref(storage,`posts/${file.id}`);
                uploadBytes(storageRef, imageToPost).then((snapshot)=>{
                    getDownloadURL(snapshot.ref).then((url)=>{
                        setDoc(doc(db,`posts/${file.id}`),{
                            postImage:url
                        },{merge:true})
                        
                    })
                })
               
                removeImage();

                
            }
        })
        

        inputRef.current.value = '';
    };
    return ( 
    <div className=" bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6">
        <div className="flex sm:space-x-4 p-4 items-center max-w-full">
            <Image 
            className=" hidden  sm:inline-flex rounded-full"
            src={user.imageUrl}
            width={40}
            height={40}
            />
            <form className=" flex flex-1 break-words">
                <input type="text" 
                ref={inputRef}
                placeholder={`What's on your mind, ${user.firstName}?`}
                className=" rounded-full focus:outline-none h-12 bg-gray-100 flex-grow px-5 text-xs sm:text-base"
                />
                <button className="hidden" type="submit" onClick={sendPost}>Submit</button>
            </form>
            {imageToPost && (
                <div onClick={removeImage} className=" flex-col flex hover:brightness-110 transition duration-150 transform hover:scale-105 cursor-pointer">
                    <img src={imageToPreview} className=" object-contain h-10" />
                    <p className=" text-xs text-red-500 text-center">Remove</p>
                </div>
            )}
        </div>
        <div className=" justify-evenly flex p-3 border-t">
             <div className="inputIcon flex-col sm:flex-row">
                <VideoCameraIcon className=" h-7 text-red-500"/>
                <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
             </div>
             <div className="inputIcon flex-col sm:flex-row" onClick={()=> filePickerRef.current.click()}>
                <CameraIcon className=" h-7 text-green-400"/>
                <p className="text-xs sm:text-sm xl:text-base">Photo/Video</p>
                <input ref={filePickerRef} type="file" onChange={addImageToPost} hidden />
             </div>
             <div className="inputIcon flex-col sm:flex-row hidden sm:inline-flex">
                <EmojiHappyIcon className=" h-7 text-yellow-300"/>
                <p className="text-xs sm:text-sm xl:text-base">Feeling/Activity</p>
             </div>
        </div>
    </div> );
}
 
export default StatusBox;