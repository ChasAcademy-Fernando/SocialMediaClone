import Image from "next/image";
import { useSession, signIn, signOut } from 'next-auth/react'
const Login = () => {
  

    return ( 
        <div className=" grid place-items-center space-y-2">
            <Image src='https://cdn-icons-png.flaticon.com/512/3281/3281613.png' 
            width={400} 
            height={400}/>

            <h1 onClick={signIn} className=" p-5 bg-green-500 rounded-full text-white text-center cursor-pointer">Log into your TreeHouse</h1>
            </div>

    )
}
 
export default Login;