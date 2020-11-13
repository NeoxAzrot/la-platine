import React from 'react'
import styles from './SearchBar.module.css'
import PropTypes from 'prop-types'

const SearchBar=(props) => {
    const {placeholder} = props
    console.log(props)
        return (

            <div>
                 <input type="text" placeholder={placeholder}></input>
            </div>
        )
}
SearchBar.propTypes = {
     placeholder: PropTypes.string
}
export default SearchBar