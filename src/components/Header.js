const Header = ({name})=>{
return (
<header><h1>{name}</h1></header>
)
}
Header.defaultProps={
    name:'task tracker'
  }
export default Header