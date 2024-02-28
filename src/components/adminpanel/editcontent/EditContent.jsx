import "./editcontent.style.scss"
import DropDownMenu from "../admincontents/dropdownmenu/DropDownMenu"
import { useState,useRef, useEffect } from "react"
import FilterContent from "./filtercontent/FilterContent"
import { Link, Outlet, useParams } from "react-router-dom"
import axios from "axios"

const chooseSection = [
    {label:"Հայաստան",value:"armenia"},
    {label:"Տարածաշրջան",value:"region"},
    {label:"Միջազգային",value:"international"},
    {label:"Բոլորը", value:"all"}
]
const chooseSubsection = [
    {label:"Քաղաքական",value:"politics"},
    {label:"Իրավական",value:"legal"},
    {label:"Ռազմական",value:"military"},
    {label:"Հասարակություն",value:"society"},
    {label:"Բոլորը", value:"all"}
]
const chooseSubsectionRegion = [
    {label:"Վրաստան",value:"georgia"},
    {label:"Թուրքիա",value:"turkey"},
    {label:"Իրան",value:"iran"},
    {label:"Ադրբեջան",value:"azerbaijan"},
    {label:"Բոլորը", value:"all"}
]
const contentTypeData = [
    {label:"Թեքստային",value:"text"},
    {label:"Վիդեո",value:"video"},
    {label:"Ուղիղ եթեր",value:"live"},
    {label:"Բոլորը", value:"all"}
]
const country = {
  "armenia":1,
  "region":2,
  "international":3,
  "all":""
}

const category = {
  "military":1,
  "politics":2,
  "legal":3,
  "society":4
}

const EditContent = () => {
    const [sectionValue, setSectionValue] = useState('all')
    const [subsectionValue, setSubsectionValue] = useState('all')
    const [contentType, setContentType] = useState('all')

    const [currentPage, setCurrentPage] = useState(1)
    const [contentBeginning,setContentBegining] = useState(0)
    const [contentQuantity,setContentQuantity] = useState(6)
    
    const [data,setData] = useState("")
    
    const containerRef = useRef(null)
    const maxPages = Math.ceil(data.length/6)
    const {id} = useParams()


    useEffect(()=>{
      (async () => {
        try {
          if(sectionValue == 'all' && subsectionValue == "all") {
            const {data}= await axios.get('http://localhost:5005/api/v1/news/getAll')
            setData(data)
          }else{
            const {data}= await axios.get(`http://localhost:5005/api/v1/news/filter?countryId=${country[sectionValue]}&categoryId=${category[subsectionValue]}`)
            setData(data)
            
          }
          
        } catch (error) {
          console.log(error)
        }
      })()
    },[sectionValue,subsectionValue])

    function handleNextPage () {
      if(currentPage<maxPages){
        setCurrentPage(currentPage+1)
        setContentBegining(contentQuantity)
        setContentQuantity(contentQuantity+6)
        containerRef.current.scrollIntoView({behavior:"smooth", block: "start"})
      }
    }
    
    function handlePrevPage (){
      if(currentPage>1){
        setCurrentPage(currentPage-1)
        setContentBegining(contentBeginning - 6)
        setContentQuantity(contentQuantity-6)
        containerRef.current.scrollIntoView({behavior:"smooth", block: "start"})
      }
    }
    
    function handlePageChange(number){ 
      setCurrentPage(number)
      setContentBegining((number*6)-6)
      setContentQuantity(number*6)
      containerRef.current.scrollIntoView({behavior:"smooth", block: "start"})
    }

  return (
    <>
    {id?<Outlet/>:
    <>
      <div ref={containerRef} className="drop_down_container" >
        <DropDownMenu render={setSectionValue} chooseSection={chooseSection} edit={true} title ="Choose section"/>
        {sectionValue == "region"?<DropDownMenu render={setSubsectionValue} edit={true} chooseSection={chooseSubsectionRegion} title ="Choose subsection"/>:<DropDownMenu render={setSubsectionValue} chooseSection={chooseSubsection} edit={true} title ="Choose subsection"/>}

        <DropDownMenu render={setContentType} chooseSection={contentTypeData} edit={true} title ="Content type"/>
    </div>
    {data && data.map((data,key)=>{
        if(key>=contentQuantity || key<contentBeginning)return
       return <Link  key={key} to={"/admin/edit/"+data.id}><FilterContent data={data}/></Link>
    })}
    <div className="flex_container">
        
        <div className="paginate_ctn">
          <div className={"arrow "+(currentPage == 1?"":"arrow_active")} onClick={handlePrevPage}> ← </div>

          {new Array(maxPages).fill(null).map((_,key)=>{
            const rightSide = currentPage+3
            const leftSide = currentPage
            const number = key + 1

              if(number > rightSide || number < leftSide)return
            return <div key={key} className={"round_effect "+(number === currentPage ? "paginate_active" : "")} onClick={()=>handlePageChange(number)}>
              {number}
            </div>
          })}
          <div className={"arrow "+(currentPage == maxPages?"":"arrow_active")} onClick={handleNextPage}> → </div>
        </div>
      </div>
    </>}
    
    </>
  )
}

export default EditContent