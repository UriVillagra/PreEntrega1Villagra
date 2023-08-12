export const Contacto = () => {


    


    return (
        <div className="bg-blue-100 w-full h-full">
            <h2 className="text-8xl text-center">Contacto</h2>
            <hr />
            <div>
                <p className="text-6xl m-80">
                    Desde Asteroid estamos agradecidos con su visita, si desea consultar, reclamar o sugerir algo, puede realizarlo mediante los siguientes medios
                </p>
            </div>
            <div>
                <ul>
                    <li className="text-5xl m-80 flex flex-row">
                        <img className="w-40" src="https://www.dondefluirdanzas.com.ar/wp-content/uploads/2017/12/whatsapp-icon-logo-whatsapp-logo-png.jpg" alt="" />
                        <p>Whatsapp</p>
                    </li>
                    <li className="text-5xl m-80 flex flex-row">
                        <img className="w-40" src="https://www.msm.gov.ar/wp-content/uploads/2020/05/new-instagram-logo-png-transparent-light.png" alt="" />
                        <p>Instagram</p>
                    </li>
                    <li className="text-5xl m-80 flex flex-row">
                        <img className="w-40" src="https://upload.wikimedia.org/wikipedia/commons/e/ee/Logo_de_Facebook.png" alt="" />
                        <p>Facebook</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}