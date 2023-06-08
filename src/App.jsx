// eslint-disable-next-line no-unused-vars
import React from "react";
import "./App.css";
import imagen01 from "./assets/01.jpg";
import imagen05 from "./assets/05.jpg";
import imagen04 from "./assets/04.jpg";

function App() {
  const personas = [
    {
      boleto: "7",
      nombre: "Daniela Casiano Sanchez",
    },
    {
      boleto: "8",
      nombre: "Mario Sanchez Aguilar",
    },
    //11-20
    {
      boleto: "13",
      nombre: "Susy Sanchez Carmona",
    },
    {
      boleto: "15",
      nombre: "Hugo Jared Casiano Sanchez",
    },
    //21-30
    {
      boleto: "22",
      nombre: "Amibelen Casiano Sanchez",
    },
    {
      boleto: "23",
      nombre: "Jose Luis Sanchez Campos",
    },
    {
      boleto: "24",
      nombre: "Juana Sanchez Carmona",
    },
    //61-70
    {
      boleto: "69",
      nombre: "Ines Carmona Larios",
    },
    {
      boleto: "66",
      nombre: "Brenda Ivonne Cordero Ortega",
    },
    {
      boleto: "70",
      nombre: "Francisca Sandoval Rojas",
    },

    //71-80
    {
      boleto: "75",
      nombre: "José Luis Ortega Sandoval",
    },
    
    //141-150
    {
      boleto: "150",
      nombre: "Jhonatan Tadeo",
    },
   //91-100
    {
      boleto: "100",
      nombre: "Daniel Casiano Lauriano",
    },
    //191-200
    {
      boleto: "200",
      nombre: "Marcelina de Jesus García",
    },
    //261-270
    {
      boleto: "261",
      nombre: "Uriel Hernandez Ramirez",
    },
    {
      boleto: "262",
      nombre: "Uriel Hernandez Ramirez",
    },
    {
      boleto: "265",
      nombre: "Gabriela Ramirez",
    },
    {
      boleto: "270",
      nombre: "Jazmin Hernandez",
    },
    //271-280
    {
      boleto: "275",
      nombre: "Marcos Hernandez",
    },
    {
      boleto: "276",
      nombre: "Marcos Hernandez",
    },
    //281-290
    {
      boleto: "281",
      nombre: "Maxi Cabrera Benito",
    },
    {
      boleto: "283",
      nombre: "Jesús Esteban Lucas",
    },
    {
      boleto: "284",
      nombre: "Agustina Cabrera Benito",
    },
    {
      boleto: "286",
      nombre: "Isabel Cabrera Benito",
    },
    {
      boleto: "287",
      nombre: "Fernando Cabrera Benito",
    },
    {
      boleto: "288",
      nombre: "Rafael Serrano Mestiza",
    },
    {
      boleto: "289",
      nombre: "Abraham Cabrera Benito",
    },
    {
      boleto: "290",
      nombre: "Rafael Serrado Mestiza",
    },
    //391-400
    {
      boleto: "400",
      nombre: "Ines Carmona Larios",
    },
  ];

  return (
    <div className="container">
      <h3>Apoya a Eloy.</h3>
      <h2>🎉Gran Rifa🎉</h2>
      <h3>La rifa se llevara a cabo el día Domingo 25 de junio del 2023. En la base de Urbanos Rojos. A las 11:00 de la mañana.</h3>
      <p>
        Todo lo recaudado será donado en apoyo a su señora esposa: Soledad Conde
        Teodosio.
      </p>
      <p>💲$50 Pesos el boleto💲</p>
      <p>📺Ganate una pantalla de 40 pulgadas.📺</p>
      
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
          <img src={imagen04} alt="Honorarios del Doctor" className="img-fluid" />
          <p className="parrafo">
            Honorarios del doctor por Laparoscopia  $35,000.00
          </p>
        </div>
        <div className="col-md-6">
          <img src={imagen05} alt="Gastos en Hospital" className="img-fluid" />
          <p className="parrafo">
            Gastos Totales en el hospital Aparte de los honorarios del doctor $68,782.26
          </p>
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
