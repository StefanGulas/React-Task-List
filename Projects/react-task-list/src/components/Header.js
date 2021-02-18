import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title, onAdd, showAdd}) => {
    
    return (
        <header className="header">
        <h1>{title}</h1>
        <Button color="green" 
          color={showAdd ? 'darkgreen' : 'green'}
          text={showAdd ? 'Schließen' : 'ToDo Hinzufügen'}        onClick={onAdd}/>     
        </header>
    )
}
Header.defaultTitle = {
    title: "ToDo Liste",
}
Header.propTypes = {
    title: PropTypes.string.isRequired,
}
// CSS in JS
// const headerStyling = {
//     color: "red", backgroundColor: "black"
// }


export default Header
