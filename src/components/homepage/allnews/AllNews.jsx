import { useEffect,useState } from "react"
import "./allnews.style.scss"
import NewsContainer from "./newscontainer/NewsContainer"
import { Link,useLocation } from "react-router-dom"



const AllNews = ({title,data,region = ""}) => {
    const [quantity,setQuantity] = useState(5)

    useEffect(()=>{  
     if(window.innerWidth<=850){
        setQuantity(2)
     }
    },[])

    function handleChangeColor(region){
      if(region == "Հայաստան" || region == "Քաղաքական" || region == "Իրավական" || region == "Ռազմական" || region == "Հասարակություն" ){
        return {borderLeft:`3px solid #5F8670`, paddingLeft:"10px"}
      }else if(region == "Տարածաշրջան" || region == "Թուրքիա" || region == "Վրաստան" || region == "Իրան" || region == "Ադրբեջան" ){
        return {borderLeft:`3px solid #4A8FCE`, paddingLeft:"10px"}
      }else if(region == "Միջազգային"){
        return {borderLeft:`3px solid #FF9800`, paddingLeft:"10px"}
      }else {return {}
      }
    }
  return (
    <section className="all_news_container">
        <h2 style={handleChangeColor(region)}>{title}</h2>
        <div>
            {data && data.map((data,key)=>{
                if(quantity<key) return
                return <Link key={key} to={"/news/"+data.id}><NewsContainer region={region} data={data}/></Link>
            })}
        </div>
        
        <div className="see_more">
          <button  onClick={()=>{setQuantity(quantity+3)}}>Տեսնել ավելին</button>    
        </div>    
    </section>
  )
}

export default AllNews