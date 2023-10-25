import StoryCard from "./Storycard";
import { useUser } from "@clerk/nextjs";


const Stories = () => {
    const {user} = useUser()
    const stories = [{
        name:`${user.fullNamename}`,
        src: `${user.imageUrl}`,
        profile: `${user.imageUrl}`
    },
    {
        name:'Elon Musk',
        src:'https://links.papareact.com/4zn',
        profile:'https://links.papareact.com/kxk'
    },
    {   
        name:'Jeff Bezoz',
        src:'https://links.papareact.com/k2j',
        profile:'https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80'
    },
    {
        name:'Mark Zuckerberg',
        src:'https://links.papareact.com/xql',
        profile:'https://links.papareact.com/snf'
    },
    {
        name:'Bill Gates',
        src:'https://links.papareact.com/4u4',
        profile:'https://links.papareact.com/zvy'
    }
];
    
    return ( 
        <div className="flex justify-center space-x-3 mx-auto">
            
            {stories.map((story)=>(
                
                <StoryCard key={story.src} name={story.name} src={story.src} profile={story.profile}/>
            ))}
        </div>
     );
}
 
export default Stories;