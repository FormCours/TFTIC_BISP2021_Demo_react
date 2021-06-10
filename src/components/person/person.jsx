import PropTypes from 'prop-types'

import style from './person.module.css'

// Utilisation d'une fonction fleché
const Person = (props) => {

    const {firstname, lastname, age} = props;
    // ↓ Equivalent
    // const firstname = props.firstname;
    // const lastname = props.lastname;
    // const age = props.age;

    return (
        <div>
            <h3 className={style.name}>
                {firstname} {lastname}
            </h3>
            <p>{age} ans</p>
        </div>
    );
}

Person.defaultProps = {
    age: 18
}

Person.propTypes = {
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    age: PropTypes.number
}

export default Person;