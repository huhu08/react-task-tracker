import propTypes from 'prop-types'

const Button = ({ color, text ,})=>{
    const onClick=()=>{
        console.log("clicked")
      }
    return(
    <button  onClick={onClick} 
    style={{background:color }}
    className='btn'>{text}</button>
    )
}
Button.propTypes={
    text:propTypes.string,
    color:propTypes.string,
    onClick:propTypes.func
}
export default Button