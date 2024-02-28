import { useState , useEffect } from "react"
import "./singlepage.style.scss"
import SinglePageBottom from "./singlepagebottom/SinglePageBottom"
import {useParams } from "react-router-dom"
import axios from "axios"
import { address,countries,categories,handleDate } from "../../repetitiveVariables/variables"

const SinglePage = () => {
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

  return (
    <>
    <main className="single_page_container">
        <div className="single_page_section">
            <h3>{dataId && dataId.countryId == 1? countries[dataId.countryId]:"Տարածաշրջան"}</h3>
            <div>
                <div></div>
            </div>
            <h3>{dataId && dataId.countryId == 1?categories[dataId.categoryId]:countries[dataId?.countryId]}</h3>
        </div>

        <div className="single_page_title">
            <h2>{dataId &&dataId.title}</h2>
            {dataId && <img src={address+dataId.newsContent.file?.url} alt="Լրատվական Նկար" />}
            <h3>Նկարի վերնագիր {dataId && dataId.newsContent.file?.title}</h3>
            <h3>Նկարի հեղինակ {dataId && dataId.newsContent.file?.author}</h3>
        </div>

        <div className="single_page_about">
          <hr />
            <div>
              {dataId && <h3>{handleDate(dataId.createdAt)}</h3>}
              <div></div>
              <h3>երկար կարդալու</h3>
            </div>
            <p>{dataId && dataId.description}</p>
            <h4>{dataId && dataId.newsContent.title}</h4>
            <p>{dataId && dataId.newsContent.description}</p>
            {/* <img src="/img/cyclist.png" alt="Լրատվական նկար" /> */}
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
        <SinglePageBottom/>
    </>
  )
}

export default SinglePage