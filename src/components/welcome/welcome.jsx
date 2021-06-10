
const Welcome = function(props)  {
    const firstname = props.name;

    return (
        <h1>Bienvenue {firstname}</h1>
    );
}

export default Welcome;