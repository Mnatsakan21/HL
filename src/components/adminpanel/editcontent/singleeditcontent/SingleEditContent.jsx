import { useParams } from 'react-router-dom'
import './singleeditcontent.style.scss'
import { useState , useEffect } from 'react'
import axios from 'axios'
import { countries,categories,address,handleDate } from '../../../../repetitiveVariables/variables'

const SingleEditContent = () => {
  const [dataId,setDataId] = useState()
  const {id} = useParams()

  useEffect(()=>{
    (async () => {
      try {
        const {data} = await axios.get(`http://localhost:5005/api/v1/news/getOne/${id}`)
        console.log(data)
        setDataId(data)
      } catch (error) {
        console.log(error)
      }
    })()
  },[])


  return (
    <main className="edit_single_container">
        <div className="edit_single_section">
            <button>Edit Content</button>
            <h3>{dataId &&countries[dataId.country.title]}</h3>
            <div>
                <div></div>
            </div>
            <h3>{dataId &&categories[dataId.categoryId]}</h3>
        </div>

        <div className="edit_single_title">
            <h2>{dataId &&dataId.title}</h2>
            {dataId && <img src={address+dataId.newsContent.file?.url} alt="Լրատվական Նկար" />}
            <h3>Նկարի վերնագիր {dataId && dataId.newsContent.file?.title}</h3>
            <h3>Նկարի հեղինակ {dataId && dataId.newsContent.file?.author}</h3>
        </div>

        <div className="edit_single_about">
          <hr />
            <div>
              {dataId && <h3>{handleDate(dataId.createdAt)}</h3>}
              <div></div>
              <h3>երկար կարդալու</h3>
            </div>
            <p>{dataId && dataId.description}</p>
            <h4>{dataId && dataId.newsContent.title}</h4>
            <p>{dataId && dataId.newsContent.description}</p>
        </div>
        <div className="edit_page_bottom">
          <h4>Հեղ․՝ {dataId && dataId.newsContent.author}</h4>
          <button>Delete this post</button>
        </div>
    </main>
  )
}

export default SingleEditContent