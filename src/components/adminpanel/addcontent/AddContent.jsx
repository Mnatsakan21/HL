import "./addcontent.style.scss"
import {useRef, useState} from 'react'
import DropDownMenu from '../admincontents/dropdownmenu/DropDownMenu'
import RichEditor from "../reactquil/RichEditor"
import { categories, countriesfilter } from "../../../repetitiveVariables/variables"
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
const chooseSubsectionInternational = [
  {label:"Բոլորը", value:"all"}
]
const contentTypeData = [
    {label:"Թեքստային",value:"text"},
    {label:"Վիդեո",value:"video"},
    {label:"Ուղիղ եթեր",value:"live"},
    {label:"Բոլորը", value:"all"}
]


const AddContent = () => {
    const [sectionValue, setSectionValue] = useState('')
    const [subsectionValue, setSubsectionValue] = useState('')
    const [contentType, setContentType] = useState('')
    const [richEditorValue, setRichEditorValue] = useState('')
    const [image,setImage]=useState('')
    const [video,setVideo]=useState('')
    const liveStreamRef = useRef(null)
    const videoLinkRef = useRef(null)

    const titleRef = useRef(null)
    const descriptionRef = useRef(null)
    const pictureTitleRef = useRef('')
    const pictureAuthorRef = useRef(null)
    const fileAuthorRef = useRef(null)

    function handleAddContent (){
      
      (async () => {
        const formData = new FormData()
          formData.append('title', titleRef.current.value)
          formData.append('description', descriptionRef.current.value)
          formData.append('contentTitle', titleRef.current.value)
          formData.append('contentDescription', richEditorValue)
          if(sectionValue == 'armenia'){
            formData.append('countryId', countriesfilter[sectionValue])
            formData.append('categoryId', categories[subsectionValue])
          }else if(sectionValue == 'international'){
            formData.append('countryId',countriesfilter[sectionValue])
            formData.append('categoryId', 1)
          }else{
            formData.append('countryId',countriesfilter[subsectionValue])
            formData.append('categoryId', 1)
          }
          formData.append('author', pictureAuthorRef.current.value)
          formData.append('fileTitle',pictureTitleRef.current?.value || "s")
          formData.append('fileAuthor', fileAuthorRef.current.value )
          formData.append('img', image)
          if(video){
            formData.append('fileContent', video) 
            formData.append('middleImage', video)
          }else{
            formData.append('fileContent', image) 
            formData.append('middleImage', image)
          }

          try {
          const { data } = await axios.post('http://localhost:5005/api/v1/news/create', formData, 
          {headers: { 
              Authorization: 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiQURNSU4iLCJpZCI6NSwiaWF0IjoxNzA5NjM1OTQ5LCJleHAiOjE3MDk2MzY4NDl9.NPcpG4Y9Hy7V_mT5yjqJgPRzuw-thamqYeoX3uChbCA',
              }})

          console.log(data)
        } catch (error) {
              console.log(error)
            }
          })()
    }
    
    function handleChange(e){
        setImage(e.target.files[0])
    }
    function handleVideoChange(e){
        setVideo(e.target.files[0])
    }

    console.log(richEditorValue)
  return (
    <div className="admin_add_contents_container">
    
            <div className="drop_down_container">
            <DropDownMenu render={setSectionValue} chooseSection={chooseSection} title ="Choose section"/>
          
            {sectionValue == "region"?<DropDownMenu render={setSubsectionValue} chooseSection={chooseSubsectionRegion} title ="Choose subsection"/>:sectionValue == "international"?<DropDownMenu chooseSection={chooseSubsectionInternational} title ="Choose subsection"/>:<DropDownMenu render={setSubsectionValue} chooseSection={chooseSubsection} title ="Choose subsection"/>}

            <DropDownMenu render={setContentType} chooseSection={contentTypeData} title ="Content type"/>
            </div>
            <div className="admin_url_container">
            {contentType == "live"?<input ref={liveStreamRef} className="add_live_stream_input" type="text" placeholder="Type the livestream link there"/>:null}
            
            {contentType == "video"?
            <>
            <input  type="file" accept="image/*,.pdf" onChange={handleChange}/>
            <input  type="file" onChange={handleVideoChange}/>
            <input ref={videoLinkRef} className="add_video_input" type="text" placeholder="Type video link there"/>
            <input ref={pictureAuthorRef} className="add_video_input" type="text" placeholder="Video Author"/>
            <input ref={fileAuthorRef}className="add_video_input" type="text" placeholder="Who is the author? "/>
            <input className="add_video_input" ref={titleRef} type="text" placeholder="title"/>
            <input className="add_video_input" ref={descriptionRef} type="text" placeholder="description"/>
            </>
            
            :null}

            {contentType == "text"?
            <>
            <input  type="file" accept="image/*,.pdf" onChange={handleChange}/>
            <input ref={pictureTitleRef} className="add_video_input" type="text" placeholder="Picture Title"/>
            <input ref={pictureAuthorRef} className="add_video_input" type="text" placeholder="Picture Author"/>
            <input className="add_video_input" ref={titleRef} type="text" placeholder="title"/>
            <input className="add_video_input" ref={descriptionRef} type="text" placeholder="description"/>
            <input ref={fileAuthorRef}className="add_video_input" type="text" placeholder="Who is the author? "/>
            </>:null}
            </div>
            <RichEditor click={handleAddContent} value={richEditorValue} setValue={setRichEditorValue}/>
        </div>
  )
}

export default AddContent