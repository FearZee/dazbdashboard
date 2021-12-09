import "./Map.css"

export default function GoogleMap() {
    return(
        <div className="map-container">
            <iframe
                title="DHZB-Map"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9706.039177032404!2d13.3468664!3d52.5423029!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xacb9c03bf8511e08!2sDeutsches%20Herzzentrum%20Berlin!5e0!3m2!1sde!2sde!4v1639043569250!5m2!1sde!2sde"
                width="280"
                height="300"
                style={{border:0}}
                allowFullScreen=""
                loading="lazy"/>
        </div>
    )
}