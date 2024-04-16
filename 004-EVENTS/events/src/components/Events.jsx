const Events = () => {


    const handleMyEvent = () => {

    }




    return(
            <div>
                <div>
                    <button onClick={handleMyEvent}>Clique aqui!</button>
                </div>
                <div>
                    <button onClick={() => console.log("Clicou")}>Clique aqui também!</button>
                </div>
            </div>
    )
}

export default Events;