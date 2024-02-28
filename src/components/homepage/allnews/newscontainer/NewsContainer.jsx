import "./newscontainer.style.scss"
import { address,handleDate,categories, countries } from "../../../../repetitiveVariables/variables"

const NewsContainer = ({data:{categoryId,createdAt,title,description,img,countryId},region=""}) => {
  function handleBorderColor(region){
  
    switch (region) {
      case "Տարածաշրջան":
        return "#4A8FCE"
      
      case "Միջազգային":
        return "#FF9800"
      case "Հայաստան":
      case "Ռազմական":
      case "Քաղաքական":
      case "Իրավական":
      case "Հասարակություն":
        return "#5F8670"
    
      default:
        return "#4A8FCE"
      }
   
  }
    return (
    <div className="newscontainer">
        <h4 style={{borderColor:`${handleBorderColor(region == "Տարածաշրջան"? "Տարածաշրջան":region == "Միջազգային"?"Միջազգային": categories[categoryId])}`}}>
        {region=="Տարածաշրջան"?countries[countryId]:region == "Միջազգային"?"Միջազգային":categories[categoryId]}</h4>
        <img src={address+img} alt="Լրատվական նկար" />
        <span>{handleDate(createdAt)}</span>
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
  )
}

export default NewsContainer