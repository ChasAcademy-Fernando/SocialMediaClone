import Stories from "./Stories";
import StatusBox from "./StatusBox";

const Feed = () => {
    return ( 
        <div className="flex-grow h-screen pb-44 pt-6 mr-4 xl:mr-40 overflow-y-auto">
            
            <div className="mx-auto mx-w-md md:max-w-lg lg:max-w-2xl">
                <Stories/>
                <StatusBox/>
                {/*Stories */}


            </div>
        </div>
     );
}
 
export default Feed;