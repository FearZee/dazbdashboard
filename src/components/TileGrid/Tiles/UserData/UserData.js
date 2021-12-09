import "./UserData.css"

export default function UserData() {
    return (
        <div class="userdata-container">
            <div class="userdata-content">
                <h2>Deine Daten</h2>
                <h1 className="userdata-progress">60%</h1>
                <div>
                    Nicht mehr weit,
                    lade die restlichen Daten hoch!
                </div>
                <DataButton/>
            </div>
        </div>
    )
}


function DataButton() {
    return (
        <div class="data-button">
            Vervollständigen
        </div>
    )
}