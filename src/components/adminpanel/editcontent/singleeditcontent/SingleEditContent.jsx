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
        setDataId(data)
      } catch (error) {
        console.log(error)
      }
    })()
  },[])

  function handleDelete(){
    (async () => {
      try {
        const {data} = await axios.delete(`http://localhost:5005/api/v1/news/delete/${id}`,{headers:{
          Authorization: "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiQURNSU4iLCJpZCI6NSwiaWF0IjoxNzA5MjgyMDUzLCJleHAiOjE3MDkyODI5NTN9.tQUaSxdAyrdDfyXEC1vSIgIyEo8q-fzt59XMVofU4Pc",
        }})
        console.log(data)
      } catch (error) {
        console.log(error)
      }
    })()
  }
  return (
    <main className="edit_single_container">
        <div className="edit_single_section">
            <button>Edit Content</button>
            
            {dataId && dataId.countryId == 6?<h3>Միջազգային</h3>:dataId && dataId.countryId == 1?
               <>
                <h3>{dataId && countries[dataId.countryId]}</h3>
                <div>
                  <div></div>
                </div>
                <h3>{dataId && categories[dataId.categoryId]}</h3>
                </>:
                <>
                <h3>Տարածաշրջան</h3>
                <div>
                  <div></div>
                </div>
                <h3>{dataId && countries[dataId.countryId]}</h3>
                </>
              }
        </div>
        <div className="edit_single_title">
            <h2>{dataId &&dataId.title}</h2>
            {dataId && !dataId.newsContent.file?.isImage?<iframe src={address+dataId.newsContent.file.url}></iframe> :dataId && <img src={address+dataId.newsContent.file?.url} alt="Լրատվական Նկար" />}
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
          <button onClick={handleDelete}>Delete this post</button>
        </div>
    </main>
  )
}

export default SingleEditContent