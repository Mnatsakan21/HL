import "./addcontent.style.scss"
import {useRef, useState} from 'react'
import DropDownMenu from '../admincontents/dropdownmenu/DropDownMenu'
import RichEditor from "../reactquil/RichEditor"

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


const AddContent = () => {
    const [sectionValue, setSectionValue] = useState('')
    const [subsectionValue, setSubsectionValue] = useState('')
    const [contentType, setContentType] = useState('')
    const [richEditorValue, setRichEditorValue] = useState('')
    const [image,setImage]=useState('')
    const liveStreamRef = useRef(null)
    const videoLinkRef = useRef(null)
    const videoAuthorRef = useRef(null)
    
    function handleAddContent (){
        console.log(sectionValue,subsectionValue,contentType,richEditorValue)
    }
    
    function handleChange(e){
        setImage(e.target.files[0])
    }
  return (
    <div className="admin_add_contents_container">
    
            <div className="drop_down_container">
            <DropDownMenu render={setSectionValue} chooseSection={chooseSection} title ="Choose section"/>
          
            {sectionValue == "region"?<DropDownMenu render={setSubsectionValue} chooseSection={chooseSubsectionRegion} title ="Choose subsection"/>:<DropDownMenu render={setSubsectionValue} chooseSection={chooseSubsection} title ="Choose subsection"/>}

            <DropDownMenu render={setContentType} chooseSection={contentTypeData} title ="Content type"/>
            </div>
            <div className="admin_url_container">
            {contentType == "live"?<input ref={liveStreamRef} className="add_live_stream_input" type="text" placeholder="Type the livestream link there"/>:null}
            {contentType == "video"?
            <>
            <input ref={videoLinkRef} className="add_video_input" type="text" placeholder="Type video link there"/>
            <input ref={videoAuthorRef}className="add_video_input" type="text" placeholder="Who is the author? "/>
            </>
            
            :null}
            {contentType == "text"?<input type="file" accept="image/*,.pdf" onChange={handleChange}/>:null}
            </div>
            <RichEditor click={handleAddContent} value={richEditorValue} setValue={setRichEditorValue}/>
        </div>
  )
}

export default AddContent