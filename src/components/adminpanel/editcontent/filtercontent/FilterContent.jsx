import './filtercontent.style.scss'
import { address,categories,countries,handleDate } from '../../../../repetitiveVariables/variables'

const FilterContent = ({data:{createdAt,title,description,img,categoryId,countryId}}) => {
  
  return (
    <div className="filter_content_container">
      <div>
        <img src={address+img} alt="Լրատվական նկար" />
      </div>
      <div>
      <div className="filter_slice_texts">
        <div className='filter_content_section_container'>
           <span>{handleDate(createdAt)}</span>
            <div>
                <p>{countries[countryId]}</p>
                <div></div>
                <p>{categories[categoryId]}</p>
            </div>
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      </div>
    </div>
  )
}

export default FilterContent