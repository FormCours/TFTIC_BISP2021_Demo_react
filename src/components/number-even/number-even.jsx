
const NumberEven = (props) => {
    const {number} = props;
    
    if(number % 2 === 0) {
        return <p>{number} est pair</p>
    }
    
    return <p>{number} est impair</p>
}
/***************************************************************************/

const NumberEven2 = (props) => {
    const {number} = props;
    const isEven = number % 2 === 0;
    
    return <p>{number} est {isEven ? "pair" : "impair"}</p>
}
/***************************************************************************/

const DisplayNumber = ({number, status}) => <p>{number} est {status}</p>

const NumberEven3 = (props) => {
    const {number} = props;
    const isEven = number % 2 === 0;

    return (
        <div>
            Le resultat est... 
            {isEven ? (
                <DisplayNumber number={number} status="pair" />
            ) : (
                <DisplayNumber number={number} status="impair" />
            )}
        </div>
    )
}

export default NumberEven3