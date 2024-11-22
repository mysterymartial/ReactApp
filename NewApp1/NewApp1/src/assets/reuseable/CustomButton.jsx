

const CustomButton = (props)=>{
    const {style,textContent, onClick, type} = props;
    //props mointor the state of this component
    //it follows the inheritance rules you pass from the parent down to the child
    //you can add extra property, props means properties
    return(
        //creating reusable button
        <button onClick = {onClick} className={style} type={type}> {textContent}</button>
    )
}

export default CustomButton;