import "./singlepagebottom.style.scss"
import SearchSlice from "../../search/searchslice/SearchSlice"
import ManyViewsSlice from "./manyviewsslice/ManyViewsSlice"

const data = [
    {
      createdAt:"2023-02-16",
      title:"Lոռեմ իպսում դոլոռ սիթ ամեթ, քուո ադ իպսում դոլոռ սիթ ամեթ, քուո ադ",
      description:"Լոռեմ իպսում դոլոռ սիթ ամեթ, տուրիզմ ադ ծհոռո եխեռծի դելիծաթա Լոռեմ տուրիզմ դոլոռ սիթ ամեթ, քուո ադ ծհոռո եխեռծի դելիծաթա",
      img:"5d67c5ee-5394-4a3f-ae7b-42f7673b39d6.png",
    },
    {
      createdAt:"2023-02-16",
      title:"Lոռեմ իպսում դոլոռ սիթ ամեթ, քուո ադ իպսում դոլոռ սիթ ամեթ, քուո ադ",
      description:"Լոռեմ իպսում դոլոռ սիթ ամեթ, տուրիզմ ադ ծհոռո եխեռծի դելիծաթա Լոռեմ տուրիզմ դոլոռ սիթ ամեթ, քուո ադ ծհոռո եխեռծի դելիծաթա",
      img:"5d67c5ee-5394-4a3f-ae7b-42f7673b39d6.png",
    },
    {
      createdAt:"2023-02-16",
      title:"Lոռեմ իպսում դոլոռ սիթ ամեթ, քուո ադ իպսում դոլոռ սիթ ամեթ, քուո ադ",
      description:"Լոռեմ իպսում դոլոռ սիթ ամեթ, տուրիզմ ադ ծհոռո եխեռծի դելիծաթա Լոռեմ տուրիզմ դոլոռ սիթ ամեթ, քուո ադ ծհոռո եխեռծի դելիծաթա",
      img:"5d67c5ee-5394-4a3f-ae7b-42f7673b39d6.png",
    },
]

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

const SinglePageBottom = () => {
  return (
    <section className="single_page_bottom_container">
        <div className="will_like_container">
            <h3>Դուք կհավանեք</h3>
            <div>
            {data.map((data,key)=>{
         return <SearchSlice key={key} data={data}/>
        })
        }
            </div>
            <hr />
        </div>
        <div className="single_page_many_views_container">
            <h3>Շատ դիտվող</h3>
            <div>
                {manyViewsData.map((data,key)=>{
                    return <ManyViewsSlice key={key} data={data} count={key+1}/>
                })}
            </div>
        </div>
    </section>
  )
}

export default SinglePageBottom