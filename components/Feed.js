import Stories from "./Stories";
import StatusBox from "./StatusBox";
import Posts from "./Posts";

const Feed = () => {
    return ( 
        <div className="flex-grow h-screen pb-44 pt-6 mr-4 xl:mr-40 overflow-y-auto scrollbar-hide">
            
            <div className="mx-auto mx-w-md md:max-w-lg lg:max-w-2xl">
                <Stories/>
                <StatusBox/>
                <Posts/>
            

            </div>
        </div>
     );
}
 
export default Feed;