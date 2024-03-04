import axios from 'axios'
import {useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import RichEditor from '../reactquil/RichEditor'
import DropDownMenu from '../admincontents/dropdownmenu/DropDownMenu'
import { categoriesfilter,categories, contentTypefilter, countries, countriesfilter } from '../../../repetitiveVariables/variables'

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

const EditContentFromId = () => {
    const [dataId,setDataId] = useState("")
    const [richEditorValue, setRichEditorValue] = useState()
    const [sectionValue, setSectionValue] = useState('')
    const [subsectionValue, setSubsectionValue] = useState('')
    const [contentType, setContentType] = useState('')
    const [image,setImage]=useState('')
    const [titleValue,setTitleValue]=useState('')
    const [descriptionValue,setDescriptionValue]=useState('')

    const {id} = useParams()

    useEffect(()=>{
        (async () => {
            try {
                const {data} = await axios.get(`http://localhost:5005/api/v1/news/getOne/${id}`)
                setDataId(data)
                setRichEditorValue(data.newsContent.description)
                if(data.countryId == 1 || data.countryId == 6){
                    setSectionValue(countriesfilter[data.countryId])
                    setSubsectionValue(categoriesfilter[data.categoryId])
                }else{
                    setSectionValue("region")
                    setSubsectionValue(countriesfilter[data.countryId])
                }
                if(data.newsContent.file.isImage){
                    setContentType("text")
                }else{
                    setContentType("video")
                }
                setTitleValue(data.title)
                setDescriptionValue(data.description)
            } catch (error) {
                console.log(error)
            }
        })()
    },[])


    function handleChange(e){
        setImage(e.target.files[0])
    }

    function handleEditContent (){
      
        (async () => {
          const formData = new FormData()
            formData.append('title', titleValue)
            formData.append('description', descriptionValue)
            formData.append('contentTitle', titleValue)
            formData.append('contentDescription', richEditorValue)
            if(sectionValue == 'armenia'){
              formData.append('countryId', countriesfilter[sectionValue])
              formData.append('categoryId', categories[subsectionValue])
            }else{
              formData.append('countryId',countriesfilter[sectionValue])
              formData.append('categoryId', 1)
            }
            formData.append('author', 'adminka')
            formData.append('fileTitle', 'adminka')
            formData.append('fileAuthor', 'adminka')
            formData.append('img', image)
            formData.append('fileContent', image) 
            formData.append('middleImage', image)
  
            try {
            const { data } = await axios.put(`http://localhost:5005/api/v1/news/editNews/${id}`, formData, 
            {headers: { 
                Authorization: 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiQURNSU4iLCJpZCI6NSwiaWF0IjoxNzA5NjI2MTY4LCJleHAiOjE3MDk2MjcwNjh9.U1OX01l1sTq2xRcRT3UaX13R0IBlQ1lz12pMZ2JWkyI',
                }})
  
            console.log(data)
          } catch (error) {
                console.log(error)
              }
            })()
      }

    return (
    <div>
        <div className='drop_down_container'>

        <DropDownMenu render={setSectionValue} chooseSection={chooseSection} title ={countries[sectionValue]}/>
        {sectionValue == "region"?<DropDownMenu render={setSubsectionValue} chooseSection={chooseSubsectionRegion} title ={countries[subsectionValue]}/>:<DropDownMenu render={setSubsectionValue} chooseSection={chooseSubsection} title ={categoriesfilter[subsectionValue]}/>}
        <DropDownMenu render={setContentType} chooseSection={contentTypeData} title ={contentTypefilter[contentType]}/>
        </div>
        <div className="admin_url_container">
            {contentType == "live"?<input className="add_live_stream_input" type="text" placeholder="Type the livestream link there"/>:null}

            {contentType == "video"?
            <>
            <input type="file" accept="image/*,.pdf" onChange={handleChange}/>
            <input className="add_video_input" type="text" placeholder="Type video link there"/>
            <input className="add_video_input" type="text" placeholder="Who is the author? "/>
            <input value={titleValue} type="text" placeholder="title" onChange={(e)=>setTitleValue(e.target.value)}/>
            <input value={descriptionValue} onChange={(e)=>setDescriptionValue(e.target.value)} type="text" placeholder="description"/>
            </>
            
            :null}
            {contentType == "text"?
            <>
            <input type="file" accept="image/*,.pdf" onChange={handleChange}/>
            <input value={titleValue} type="text" placeholder="title" onChange={(e)=>setTitleValue(e.target.value)}/>
            <input value={descriptionValue} onChange={(e)=>setDescriptionValue(e.target.value)} type="text" placeholder="description"/>
            </>:null}
            </div>
        <RichEditor value={richEditorValue} setValue={setRichEditorValue} btnValue="Edit Content" click={handleEditContent} />
    </div>
  )
}

export default EditContentFromId