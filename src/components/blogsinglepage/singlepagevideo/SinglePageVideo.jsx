import { useState , useEffect } from "react"
import { useParams } from "react-router-dom"
import SinglePageBottom from "../singlepagebottom/SinglePageBottom"
import "./singlepagevideo.style.scss"
import axios from "axios"
import { address, scrollTop } from "../../../repetitiveVariables/variables"

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
        console.log(relatesNews,mostViewedNews)
        setDataId(data)
      } catch (error) {
        console.log(error)
      }
    })()
    scrollTop()
  },[id])


  return (
    <>
    <main className="video_single_page_container">
      {dataId && <iframe aria-autocomplete="none" src={address+dataId.newsContent.file.url}></iframe>}
        {/* <iframe src="https://www.youtube.com/embed/Y7BiOVz9XvY?si=Y8b2Z0LNhos44zRH" ></iframe> */}
        <h4>Տեսահոլովակ/{dataId && dataId.newsContent.file.author}</h4>
        <div className="video_single_page_about">
          <h2>{dataId && dataId.title}</h2>
          <p>{dataId && dataId.description}</p>
        </div>
        <div className="single_page_about_bottom">
          <h4>Հեղ․՝ {dataId && dataId.newsContent.author}</h4>
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