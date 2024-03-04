import './filtercontent.style.scss'
import { address,categories,countries,handleDate } from '../../../../repetitiveVariables/variables'

const FilterContent = ({data:{createdAt,title,description,img,categoryId,countryId,newsContent:{file:{isImage}}}}) => {

  return (
    <div className="filter_content_container">
      <div className='filter_content_img_container'>
        <img src={address+img} alt="Լրատվական նկար" />
        {isImage?null:<div>
          <img src="/img/fluentvideo.png" alt="" />
          <p>Հոլովակ</p>
        </div>}
      </div>
      <div>
      <div className="filter_slice_texts">
        <div className='filter_content_section_container'>
           <span>{handleDate(createdAt)}</span>
            <div>
               {countryId == 6?<p>Միջազգային</p>:countryId == 1?
               <>
                <p>{countries[countryId]}</p>
                <div></div>
                <p>{categories[categoryId]}</p>
                </>:
                <>
                <p>Տարածաշրջան</p>
                <div></div>
                <p>{countries[countryId]}</p>
                </>
                }
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