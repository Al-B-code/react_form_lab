import Cake from "./Cake";
const CakeList = ({cakes, onSellCake}) => {   



    const cakeComponents = cakes.map((cake, index) => <Cake key={index} cake={cake} onButtonClick={() => onSellCake(index)}/>)

    return(
        <section>
            <h2>Cakes</h2>
            {cakeComponents}
        </section> 
        );
}

export default CakeList;