import { address, countries } from '../../../../repetitiveVariables/variables'
import './veryreadablenews.style.scss'

const VeryReadableNewsRight = ({data:{title,description,img,countryId}}) => {

  return (
    <div className='very_readable_news_container'>
        <img src={address+img} alt="Լրատվական նկար"/>
        <div className='very_readable_news_data'>
          <h3>{title}</h3>
          <p>{description}</p>
          <h4>{countries[countryId]}</h4>
        </div>
    </div>
  )
}

export default VeryReadableNewsRight