//REUSABLE COMPONENTS
//BOXE
function TheReBox({boxTitle,idTitle,subComponent}){
    return(
        <div id={idTitle} className="boxDivClass" color="blue">
        <h1 className="boxBgTtl">{boxTitle}</h1>
        <div className="subComponent">
            {subComponent} 
        </div>
       
        </div>
    );
    
};

//INPUT
function TheReInput({inputIcon,inputAltIcon,inputId,inputName,inputType,inputClass,inputPlaceholder}){
    return(
        <div className="inputSpaceClass">
       <img
          className="loginIcon"
          src={inputIcon}
          alt={inputAltIcon}/>
          <input id={inputId} name={inputName} type={inputType} className={inputClass} placeholder={inputPlaceholder}/>
        <br/>
        </div>
    )
}

//BUTTON SUBMIT
function TheReButton({labelId,btnValue,btnId,btnName}){
    return(
        <div className='soloBtnSpaceClass'>
            <label id={labelId} className="labelClass" htmlFor={btnId}>
                <input id={btnId} name={btnName} type='submit' className="buttoncssClass"  value={btnValue}/>
            </label>
        </div>
    )
}




export {TheReBox,
    TheReButton,
    TheReInput
};