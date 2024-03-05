import { useState , useEffect } from "react"
import "./singlepage.style.scss"
import SinglePageBottom from "./singlepagebottom/SinglePageBottom"
import {useParams } from "react-router-dom"
import axios from "axios"
import { address,countries,categories,handleDate, scrollTop } from "../../repetitiveVariables/variables"

const SinglePage = () => {
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

  return (
    <>
    <main className="single_page_container">
        <div className="single_page_section">
            {dataId && dataId.countryId == 6?<h3 className="international_title_single_page">Միջազգային</h3>:
            <>
            <h3>{dataId && dataId.countryId == 1? countries[dataId.countryId]:"Տարածաշրջան"}</h3>
            <div className={dataId && dataId.countryId == 1?"":"region_title"}>
                <div></div>
            </div>
            <h3>{dataId && dataId.countryId == 1?categories[dataId.categoryId]:countries[dataId?.countryId]}</h3>
            </>}
        </div>

        <div className="single_page_title">
            <h2>{dataId &&dataId.title}</h2>
            {dataId && <img src={address+dataId.newsContent.file.url} alt="Լրատվական Նկար" />}
            <h3>Նկարի վերնագիր {dataId && dataId.newsContent.file.title}</h3>
            <h3>Նկարի հեղինակ {dataId && dataId.newsContent.author}</h3>
        </div>

        <div className="single_page_about">
          <hr className={dataId && dataId.countryId == 1?"":dataId && dataId.countryId == 6?"international_hr":"region_hr"}/>

            <div>
              {dataId && <h3>{handleDate(dataId.createdAt)}</h3>}
              <div className={dataId && dataId.countryId == 1?"":dataId && dataId.countryId == 6?"international_div":"region_div"}></div>
              <h3>երկար կարդալու</h3>
            </div>
<<<<<<< HEAD
            <div className={`html_content ${dataId && dataId.countryId == 1?"html_content_armenia":dataId && dataId.countryId == 6?"html_content_international":"html_content_region"}`} dangerouslySetInnerHTML={{__html: dataId && dataId.newsContent.description}}></div>

          </div>
=======
            <p>{dataId && dataId.description}</p>
            <h4>{dataId && dataId.newsContent.title}</h4>
            <p>{dataId && dataId.newsContent.description}</p>
            
        </div>
>>>>>>> 66db5dec7ec556ab8317b79ff833d80f50bf7413
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

export default SinglePage