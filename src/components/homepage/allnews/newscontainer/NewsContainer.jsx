import "./newscontainer.style.scss"
import { address,handleDate,categories, countries } from "../../../../repetitiveVariables/variables"

const NewsContainer = ({data:{categoryId,createdAt,title,description,img,countryId}}) => {
  
  function handleBorderColor(){
    return countryId == 1?"all_news_container_col_armenia":countryId == 6?"all_news_container_col_international":"all_news_container_col_region"
  }
    return (
    <div className="newscontainer">
        <h4 className={handleBorderColor()}>
          {countryId == 1?categories[categoryId]:countryId == 6?"Միջազգային":countries[countryId]}
        </h4>
        <img src={address+img} alt="Լրատվական նկար" />
        <span>{handleDate(createdAt)}</span>
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
  )
}

export default NewsContainer