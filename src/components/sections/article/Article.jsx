import { Link , NavLink} from "react-router-dom"
import "./article.style.scss"
import AsideSlice from "../asideslice/AsideSlice"
import { useRef,useEffect } from "react"

const Article = ({title,data,to=""}) => {
  const advisRef = useRef(null);

  useEffect(() => {
      if (window.location.hash.includes(to) ) {
        advisRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [])

  
  function handleAfterColor(title){
    if(title == "Քաղաքական" || title == "Իրավական" || title == "Ռազմական" || title == "Հասարակություն" )return "subsection_armenia"
    else return "subsection_region"

  }

  return (
    <div id={to} ref={advisRef} className="aside_container">
        <h2 className={handleAfterColor(title)}>{title}</h2>
        <div>
        {data && data.map((data,key)=>{
          if(key>2)return
            return <Link key={key} to={"/news/"+data.id}>
            <AsideSlice  data={data} />
            </Link>
        })}
        <div className="aside_button">
          <button><NavLink to={to}>Տեսնել բոլորը</NavLink></button>
        </div>
        </div>
        
    </div>
  )
}

export default Article