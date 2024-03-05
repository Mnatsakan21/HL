import { useState , useEffect } from "react"
import { useParams } from "react-router-dom"
import SinglePageBottom from "../singlepagebottom/SinglePageBottom"
import "./singlepagevideo.style.scss"
import axios from "axios"
<<<<<<< HEAD
import { address, handleDate, scrollTop } from "../../../repetitiveVariables/variables"
=======
import { address, scrollTop } from "../../../repetitiveVariables/variables"
>>>>>>> 66db5dec7ec556ab8317b79ff833d80f50bf7413

const SinglePageVideo = () => {
  const [dataId,setDataId] = useState()
  const [mostViewedNews,setMostViewedNews] = useState("")
  const [relatesNews,setRelatesNews] = useState("")
  const {id} = useParams()

  useEffect(()=>{
    (async () => {
      try {
        const {data} = await axios.get(`http://localhost:5005/api/v1/news/getOne/${id}`)
        const {data:{mostViewedNews,relatesNews}} = await axios.get(`http://localhost:5005/api/v1/news/getMostViewedAndRelates/${data.categoryId}`)
        setMostViewedNews(mostViewedNews)
        setRelatesNews(relatesNews)
<<<<<<< HEAD
=======
        console.log(relatesNews,mostViewedNews)
>>>>>>> 66db5dec7ec556ab8317b79ff833d80f50bf7413
        setDataId(data)
      } catch (error) {
        console.log(error)
      }
    })()
    scrollTop()
  },[id])
<<<<<<< HEAD
=======

>>>>>>> 66db5dec7ec556ab8317b79ff833d80f50bf7413

console.log(dataId)
  return (
    <>
    <main className="video_single_page_container">
<<<<<<< HEAD
      {dataId && 
      <video controls src={address+dataId.newsContent.file.url}>
      </video>
      }
        {/* <iframe src="https://www.youtube.com/embed/Y7BiOVz9XvY?si=Y8b2Z0LNhos44zRH" ></iframe> */}
        <h4>Տեսահոլովակ/{dataId && dataId.newsContent.author}</h4>
        <div className="video_single_page_about">
          <h2>{dataId && dataId.title}</h2>
          <hr/>
        <div>
              {dataId && <h3>{handleDate(dataId.createdAt)}</h3>}
              <div></div>
              <h3>երկար կարդալու</h3>
          </div>
          <div className='html_content' dangerouslySetInnerHTML={{__html: dataId && dataId.newsContent.description}}></div>
=======
      {dataId && <iframe aria-autocomplete="none" src={address+dataId.newsContent.file.url}></iframe>}
        {/* <iframe src="https://www.youtube.com/embed/Y7BiOVz9XvY?si=Y8b2Z0LNhos44zRH" ></iframe> */}
        <h4>Տեսահոլովակ/{dataId && dataId.newsContent.file.author}</h4>
        <div className="video_single_page_about">
          <h2>{dataId && dataId.title}</h2>
          <p>{dataId && dataId.description}</p>
>>>>>>> 66db5dec7ec556ab8317b79ff833d80f50bf7413
        </div>
        <div className="single_page_about_bottom">
          <h4>Հեղ․՝ {dataId && dataId.newsContent.file.author}</h4>
                <ul>
                  <li>
                  <img src="/img/Group.png" alt="Facebook" />
                  </li>
                  <li>
                  <img src="/img/Group1.png" alt="Instagram" />
                  </li>
                  <li>
                  <img src="/img/Group2.png" alt="Twitter" />
                  </li>
                  <li>
                  <img src="/img/Group3.png" alt="Twitter" />
                  </li>
                </ul>
        </div>
    </main>
    {relatesNews && <SinglePageBottom mostViewedNews={mostViewedNews} relatesNews={relatesNews}/>}
    </>
  )
}

export default SinglePageVideo