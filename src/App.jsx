import './App.css'
import React from "react";

function App() {
    const [strawberryCount, setStrawberryCount] = React.useState(0);
    const [bananaCount, setBananaCount] = React.useState(0);
    const [appleCount, setAppleCount] = React.useState(0);
    const [kiwiCount, setKiwiCount] = React.useState(0);

   /* function handleChange(e) {
        setCount({
            count: e.target.value,
        })
    }*/

    return (
        <>
            <h1>Fruitmand bezorgservice</h1>
            <div className="fruit">
                <h2>{String.fromCodePoint(0x1F353)}Aardbeien</h2>
                <div>
                    <button type="button"
                            name="strawberry"
                            onClick={() => setStrawberryCount(strawberryCount - 1)}
                            disabled={strawberryCount === 0}>
                        -
                    </button>
                    {strawberryCount}
                    <button type="button"
                            name="strawberry"
                            onClick={() => setStrawberryCount(strawberryCount + 1)}>
                        +
                    </button>
                </div>
            </div>
            <div className="fruit">
                <h2>{String.fromCodePoint(0x1F34C)}Bananen</h2>
                <div>
                    <button type="button"
                            name="banana"
                            onClick={() => setBananaCount(bananaCount - 1)}
                            disabled={bananaCount === 0}>
                        -
                    </button>
                    {bananaCount}
                    <button type="button"
                            name="banana"
                            onClick={() => setBananaCount(bananaCount + 1)}>
                        +
                    </button>
                </div>
            </div>
            <div className="fruit">
                <h2>{String.fromCodePoint(0x1F34E)}Appels</h2>
                <div>
                    <button type="button"
                            name="apple"
                            onClick={() => setAppleCount(appleCount - 1)}
                            disabled={appleCount === 0}>
                        -
                    </button>
                    {appleCount}
                    <button type="button"
                            name="apple"
                            onClick={() => setAppleCount(appleCount + 1)}>
                        +
                    </button>
                </div>
            </div>
            <div className="fruit">
                <h2>{String.fromCodePoint(0x1F34C)}Kiwi's</h2>
                <div>
                    <button type="button"
                            name="kiwi"
                            onClick={() => setKiwiCount(kiwiCount - 1)}
                            disabled={kiwiCount === 0}>
                        -
                    </button>
                    {kiwiCount}
                    <button type="button"
                            name="kiwi"
                            onClick={() => setKiwiCount(kiwiCount + 1)}>
                        +
                    </button>
                </div>

                <button type="reset"
                        onClick={() => setStrawberryCount(0) + setBananaCount(0) + setAppleCount(0) + setKiwiCount(0)}>
                    Reset
                </button>

                <form>
                    Voornaam
                    Achternaam
                    Leeftijd
                    Postcode
                    Selectbox met bezorgfrequentie. Opties: iedere week, om de week, iedere maand
                    Radiobuttons met tijdvak. Opties: overdag, 's avonds
                    Opmerking (textarea)
                    Akkoord met de voorwaarden (checkbox)
                    Verzendbutton
                </form>
            </div>
        </>
    )
}

export default App
