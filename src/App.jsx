// eslint-disable-next-line no-unused-vars
import React from "react";
import "./App.css";
import imagen01 from "./assets/01.jpg";
import imagen02 from "./assets/02.jpg";
import imagen03 from "./assets/03.jpg";
import imagen04 from "./assets/04.jpg";

function App() {
  const personas = [
    {
      boleto: "01",
      nombre: "Abraham Cabrera Benito",
      celular: 2311591893,
      domicilio: "Aquiles Serdan #7 Yopi Chignautla",
      
    },
    {
      boleto: "02",
      nombre: "Heriberto Brigido",
      celular: 2311591893,
      domicilio: "Aquiles Serdan #7 Yopi Chignautla",
      
    },
    {
      boleto: "03",
      nombre: "Lobo",
      celular: 2311591893,
      domicilio: "Aquiles Serdan #7 Yopi Chignautla",
      
    },
  ];
  return (
    <div className="container">
      <h3>Apoya a Eloy.</h3>
      <h3>🎉Gran Rifa🎉</h3>
      <p>
        Todo lo recaudado será donado en apoyo a su señora esposa: Soledad Conde
        Teodosio.
      </p>
      <p>💲$50 Pesos el boleto💲</p>
      <p>📺Ganate una pantalla de 40 pulgadas.📺</p>
      <p>La rifa se llevara a cabo el día Domingo 25 de junio del 2023. En la base de Urbanos Rojos a las 11:00 am.</p>
      <p>
        Muchas gracias a todos nuestros donantes. Esto no estaría siendo posible
        sin ustedes. Gracias a la sociedad en general por hacernos sentir
        acompañados en estos momentos tan difíciles.
      </p>
      <p>❤ De corazon. MIL GRACIAS. ❤</p>
      <hr></hr>
      <div className="row">
        <h4>Roku TV Televisor LED-LCD serie 4000</h4>
        <div className="col-md-6">
          <img src={imagen01} alt="01" className="img-fluid" />
          <p className="parrafo">
            Más que un Smart TV, un mejor televisor. Un televisor más sencillo y
            más inteligente totalmente diseñado para el entretenimiento con
            funciones integradas para transmitir, ver televisión en vivo y mucho
            más.
          </p>
        </div>
        <div className="col-md-6">
          <img src={imagen02} alt="02" className="img-fluid" />
          <p className="parrafo">
            Ve, transmite, reproduce, escucha, ríe y repite todo lo anterior.
            Con este TV Roku Philips verás, descubrirás y disfrutarás el
            entretenimiento que te encanta como nunca antes. Comienza a
            transmitir tus programas favoritos. Accede a tu sintonizador de
            cable o antena HDTV. Incluso puedes potenciar tu consola de juegos
            desde la pantalla de inicio. Busca por título, actor o director para
            descubrir dónde transmitir tus programas favoritos de manera
            gratuita o al precio más bajo. Además, verás dónde lo están
            transmitiendo en vivo con una antena HDTV.
          </p>
        </div>
        <div className="col-md-6">
          <img src={imagen03} alt="03" className="img-fluid" />
          <p className="parrafo">
            Convierte tu dispositivo iOS® o Android™ en tu mejor compañero de
            transmisión. Cuando necesites un segundo control remoto o desees
            contar con más funciones y funcionalidades, la aplicación móvil Roku
            hace que controlar tu Roku TV sea divertido y sencillo. Busca con el
            teclado, usa la búsqueda por voz, disfruta de reproducciones de
            audio privadas con hasta tres amigos, transmite con tu televisor y
            mucho más.
          </p>
        </div>
        <hr></hr>
        <h1>Historia</h1>
        <p>
          El pasado miércoles 24 de mayo Eloy llevo a consulta a su esposa, ya
          que presentaba tos fuerte y arrojaba flema café con sangre, en días
          anteriores ya habían asistido con otros médicos y les recetaban
          medicina como si fuera una enfermedad respiratoria normal. Al revisar
          los estudios solicitados el médico les dice que había una lesión en un
          Pulmón, secuela de una neumonía que tuvo anteriormente. Y que se tenía
          que operar de inmediato porque ya estaba muy avanzada la lesión y
          podría complicarse demasiado.
        </p>
        <p>
          Al ser un chofer de transporte público, Eloy no cuenta con seguro
          médico y en el hospital regional no hacen la operación que su esposa
          necesitaba y ya no daba tiempo de comprar algún seguro médico o
          afiliar, ya que los trámites son muy tardados y había posibilidad de
          que también la operación no fuera de inmediato, entonces no hubo otra
          opción que acudir al hospital POLICLÍNICA y en este hospital al ser
          privado los gastos son altos.
        </p>
        <p>
          Entonces se decide que ese mismo día se haga la operación, y todo sale
          bien. Quedando internada la paciente para su observación.
        </p>
        <p>
          Los gastos contemplados ascienden a más de $100,000.00, es por eso que
          se está solicitando el apoyo.
        </p>
        <div className="col-md-6">
          <img src={imagen04} alt="04" className="img-fluid" />
        </div>
        <hr></hr>
      </div>
      <h4>Lista de participantes en la rifa.</h4>
      <table className="table">
        <thead>
          <tr>
            <th>Boleto</th>
            <th>Nombre</th>
          </tr>
        </thead>
        <tbody>
          {personas.map((persona, index) => (
            <tr key={index}>
              <td>{persona.boleto}</td>
              <td>{persona.nombre}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
