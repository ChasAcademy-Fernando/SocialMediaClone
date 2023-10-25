import Image from "next/image";
const Contact = ({src,name}) => {
    return ( 
    <div className=" flex items-center space-x-2 mb-2 relative
     hover:bg-gray-200 p-2 rounded-xl cursor-pointer">
        <Image
        className=" rounded-full object-cover max-w-[50px] max-h-[50px]"
        src={src}
        width={50}
        height={50}
        />
        <p>{name}</p>
        <div className=" absolute bottom-2 left-7 bg-green-400 h-3 w-3 rounded-full"></div>
    </div> );
}
 
export default Contact;