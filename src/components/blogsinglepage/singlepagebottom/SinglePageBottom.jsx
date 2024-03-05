import "./singlepagebottom.style.scss"
import SearchSlice from "../../search/searchslice/SearchSlice"
import ManyViewsSlice from "./manyviewsslice/ManyViewsSlice"
<<<<<<< HEAD
import {  NavLink } from "react-router-dom"
=======
import { Link, NavLink } from "react-router-dom"
>>>>>>> 66db5dec7ec556ab8317b79ff833d80f50bf7413


<<<<<<< HEAD
=======
const manyViewsData=[
    {
        region:"Հայաստան",
        title:"Lոռեմ իպսում դոլոռ սիթ ամեթ, քուո ադ դոլոռ",
        about:"Լոռեմ իպսում դոլոռ սիթ ամեթ, քուո ադ ծհոռո եխեռծի դելիծաթա",
    },
    {
        region:"Հայաստան",
        title:"Lոռեմ իպսում դոլոռ սիթ ամեթ, քուո ադ դոլոռ",
        about:"Լոռեմ իպսում դոլոռ սիթ ամեթ, քուո ադ ծհոռո եխեռծի դելիծաթա",
    },
    {
        region:"Հայաստան",
        title:"Lոռեմ իպսում դոլոռ սիթ ամեթ, քուո ադ դոլոռ",
        about:"Լոռեմ իպսում դոլոռ սիթ ամեթ, քուո ադ ծհոռո եխեռծի դելիծաթա",
    },
]

>>>>>>> 66db5dec7ec556ab8317b79ff833d80f50bf7413
const SinglePageBottom = ({mostViewedNews,relatesNews}) => {
  return (
    <section className="single_page_bottom_container">
        <div className="will_like_container">
            <h3>Դուք կհավանեք</h3>
            <div>
            {relatesNews.map((data,key)=>{
         return <NavLink key={key} to={"/news/"+data.id}> <SearchSlice  data={data}/></NavLink>
        })
        }
            </div>
            <hr />
        </div>
        <div className="single_page_many_views_container">
            <h3>Շատ դիտվող</h3>
            <div>
                {mostViewedNews.map((data,key)=>{
                    return <NavLink key={key} to={'/news/'+data.id}><ManyViewsSlice data={data} count={key+1}/></NavLink>
                })}
            </div>
        </div>
    </section>
  )
}

export default SinglePageBottom