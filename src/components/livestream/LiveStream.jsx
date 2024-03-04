import { useEffect, useState } from "react"
import WatchClip from "../homepage/watch/watchclip/WatchClip"
import "./livestream.style.scss"
import LiveStreamSlice from "./livestreamslice/LiveStreamSlice"
import axios from "axios"
import { NavLink } from "react-router-dom"

const data = [
    {
        img:"./img/livestream.png",
        about:"Lոռեմ իպսում դոլոռ սիթ ամեթ, քուո ադ սիթ ամեթ, քուո ադ դոլոռ "
    },
    {
        img:"./img/livestream.png",
        about:"Lոռեմ իպսում դոլոռ սիթ ամեթ, քուո ադ սիթ ամեթ, քուո ադ դոլոռ "
    },
    {
        img:"./img/livestream.png",
        about:"Lոռեմ իպսում դոլոռ սիթ ամեթ, քուո ադ սիթ ամեթ, քուո ադ դոլոռ "
    },
    {
        img:"./img/livestream.png",
        about:"Lոռեմ իպսում դոլոռ սիթ ամեթ, քուո ադ սիթ ամեթ, քուո ադ դոլոռ "
    },
    {
        img:"./img/livestream.png",
        about:"Lոռեմ իպսում դոլոռ սիթ ամեթ, քուո ադ սիթ ամեթ, քուո ադ դոլոռ "
    },
    {
        img:"./img/livestream.png",
        about:"Lոռեմ իպսում դոլոռ սիթ ամեթ, քուո ադ սիթ ամեթ, քուո ադ դոլոռ "
    },
]

const dataManyViews =[ {
    title:"Lոռեմ իպսում դոլոռ սիթ ամեթ, քուո ադ սիթ ամեթ, քուո ադ դոլոռ սիթ",
    img:"./img/cyclist.png"
},
{
    title:"Lոռեմ իպսում դոլոռ սիթ ամեթ, քուո ադ սիթ ամեթ, քուո ադ դոլոռ սիթ",
    img:"./img/cyclist.png"
},
]

const LiveStream = () => {
    
    const [quantity,setQuantity] = useState(5)
    const [manyViewsQuantity,setManyViewsQuantity] = useState(1)
    const [dataWatch,setDataWatch] = useState()
  
    useEffect(()=>{
      (async () => {
        try {
          const {data}= await axios.get('http://localhost:5005/api/v1/news/getAll')
          setDataWatch(data.filter((data)=>!data.newsContent.file.isImage && data))
        } catch (error) {
          console.log(error)
        }
      })()
    },[])



    useEffect(()=>{
    if(window.innerWidth>1032 && window.innerWidth<=1278 ){
        setManyViewsQuantity(2)
        }
     if(window.innerWidth<=1032){
        setQuantity(2)
     }
    },[])
    
  return (
    <main className="live_stream_container">
        {/* <iframe src="https://www.youtube.com/embed/Y7BiOVz9XvY?si=Y8b2Z0LNhos44zRH" ></iframe> */}
        <div>
            <h3>24/7 ուղիղ եթերներ Լոռեմ կայքից</h3>
            <ul>
                <li><img src="./img/Group.png" /></li>
                <li><img src="./img/Group1.png" /></li>
                <li><img src="./img/Group2.png" /></li>
                <li><img src="./img/Group3.png" /></li>
            </ul>
        </div>

        <div className="live_streams_additional">
            <h2>Լրացուցիչ ուղիղ եթերներ</h2>
            <div>
                {data.map(({img,about},key)=>{
                    if(quantity<key) return
                    return <LiveStreamSlice img={img} about={about} key={key}/>
                })}
            </div>
        </div>
            <div className="aside_btn">
          <button  onClick={()=>{setQuantity(quantity+3)}}>Տեսնել բոլորը</button>    
        </div> 
        <div className="many_views_container">
            <h2>Շատ դիտվածներ</h2>
            <div>
               {dataWatch && dataWatch.map((data,key)=>{
                    if(manyViewsQuantity<key)return
                return <NavLink to={'/videos/'+data.id} key={key}><WatchClip  data={data}/></NavLink>
               })}
            </div>
            <div className="aside_btn many_views_btn" >
          <button  onClick={()=>{setManyViewsQuantity(manyViewsQuantity+3)}}>Տեսնել բոլորը</button>    
        </div> 
        </div>
    </main>
  )
}

export default LiveStream