import "./dropdownmenu.style.scss"

const DropDownMenu = ({chooseSection,title,render,edit=false}) => {

 return (

   <div>

     <label>
       <select onChange={(e)=>render(e.target.value)}>

        {<option hidden>{title}</option>}
        {chooseSection.map(({label,value},key)=>{
          if(edit) return value == "all"?<option key={key} selected value={value}>{label}</option>:<option key={key} value={value}>{label}</option>
           return value == "all"?<option key={key} disabled value={value}>{label}</option>:<option key={key} value={value}>{label}</option>
            
        })}

       </select>

     </label>
   </div>

 );

};

export default DropDownMenu