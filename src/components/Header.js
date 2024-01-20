import PropTypes from 'prop-types'
import Button from './Button'
import Tasks from './Tasks'

const Header = ({name})=>{
return (
<header className='header'>
    <h1>{name}</h1>
    <Button  color='green' text='hello there' />
    <Button color='black'/>
    <Tasks />

</header>

)
}
Header.defaultProps={
    name:'task tracker'
  }


export default Header