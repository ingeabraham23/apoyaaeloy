// eslint-disable-next-line no-unused-vars
import React from "react";
import "./App.css";
import imagen01 from "./assets/01.jpg";
import imagen05 from "./assets/05.jpg";
import imagen04 from "./assets/04.jpg";

function App() {
  const personas = [
    
    {
      boleto: "003",
      nombre: "Maria Del Carmen Hernandez Molina",
    },
    {
      boleto: "004",
      nombre: "Juan Carlos Hernandez Drovallet",
    },
    {
      boleto: "005",
      nombre: "Jose Ramos",
    },
    {
      boleto: "006",
      nombre: "Nancy Cano Cano",
    },
    {
      boleto: "007",
      nombre: "Daniela Casiano Sanchez",
    },
    {
      boleto: "008",
      nombre: "Mario Sanchez Aguilar",
    },
    {
      boleto: "009",
      nombre: "Jorge Landeros Lopez",
    },
    {
      boleto: "011",
      nombre: "Amalia Valera Rivera",
    },
    {
      boleto: "012",
      nombre: "Itzel Idali Lopez",
    },
    {
      boleto: "013",
      nombre: "Susy Sanchez Carmona",
    },
    {
      boleto: "14",
      nombre: "Guadalupe de Jesus Juarez",
    },
    {
      boleto: "15",
      nombre: "Hugo Jared Casiano ",
    },
    {
      boleto: "16",
      nombre: "Angel Giovani Carreon Ortega",
    },
    {
      boleto: "17",
      nombre: "Felipe Camacho Martinez",
    },
    //21-30
    {
      boleto: "022",
      nombre: "Amibelen Casiano Sanchez",
    },
    {
      boleto: "023",
      nombre: "Jose Luis Sanchez Campos",
    },
    {
      boleto: "24",
      nombre: "Juana Sanchez Carmona",
    },
    {
      boleto: "26",
      nombre: "Juan Roman Galvan",
    },
    {
      boleto: "28",
      nombre: "Raquel Herrera Vega",
    },
    {
      boleto: "30",
      nombre: "Hector Garcia Ramirez",
    },
    {
      boleto: "31",
      nombre: "Flavio Narciso Lucas",
    },
    {
      boleto: "32",
      nombre: "Vania Becerril Mendez",
    },
    {
      boleto: "33",
      nombre: "Flavio Narciso Lucas",
    },
    {
      boleto: "34",
      nombre: "Dilan Urbano Perfecto Ventura",
    },
    {
      boleto: "35",
      nombre: "Flavio Narciso Lucas",
    },
    {
      boleto: "36",
      nombre: "Dilan Urbano Perfecto Ventura",
    },
    {
      boleto: "37",
      nombre: "Flavio Narciso Lucas",
    },
    {
      boleto: "38",
      nombre: "Margarita Casiano Gonzalez",
    },
    {
      boleto: "39",
      nombre: "Flavio Narciso Lucas",
    },
    {
      boleto: "40",
      nombre: "Dilan Urbano Perfecto Ventura",
    },
    {
      boleto: "41",
      nombre: "Flavio Narciso Lucas",
    },
    {
      boleto: "42",
      nombre: "Vania Becerril Mendez",
    },
    {
      boleto: "43",
      nombre: "Flavio Narciso Lucas",
    },
    {
      boleto: "44",
      nombre: "Isaias Meneses Vega",
    },
    {
      boleto: "45",
      nombre: "Flavio Narciso Lucas",
    },
    
    //40-60
    {
      boleto: "46",
      nombre: "Marcos Colin",
    },
    {
      boleto: "50",
      nombre: "Victor Santos Aparicio",
    },
    {
      boleto: "51",
      nombre: "Marcos Colin",
    },
    {
      boleto: "52",
      nombre: "Moises Valera Carmona",
    },
    {
      boleto: "54",
      nombre: "Samuel Vazquez Nicolas",
    },
    {
      boleto: "55",
      nombre: "Marcos Colin",
    },
    {
      boleto: "56",
      nombre: "Humberto Ibañez Rodrigo",
    },
    {
      boleto: "57",
      nombre: "Victor Santos Aparicio",
    },
    {
      boleto: "59",
      nombre: "Alma Rosa Lucas Acevedo",
    },
    {
      boleto: "60",
      nombre: "Ramon Olivares Pozos",
    },
    {
      boleto: "61",
      nombre: "Samuel Vazquez Nicolas",
    },
    {
      boleto: "64",
      nombre: "Ramon Olivares Pozos",
    },
    {
      boleto: "65",
      nombre: "Marcos Colin",
    },
    
    //61-70
    {
      boleto: "66",
      nombre: "Brenda Ivonne Cordero Ortega",
    },
    {
      boleto: "67",
      nombre: "Emmanuel Ramos Marin",
    },
    {
      boleto: "69",
      nombre: "Ines Carmona Larios",
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
    {
      boleto: "76",
      nombre: "Santiago Rojas Domingo",
    },
    {
      boleto: "77",
      nombre: "Valeria Del Carmen Rojas Domingo",
    },
    {
      boleto: "78",
      nombre: "Regina Rojas Rojas",
    },
    {
      boleto: "79",
      nombre: "Sebastian Rojas Rojas",
    },
    {
      boleto: "80",
      nombre: "Victor Manuel Suarez Minor",
    },
    {
      boleto: "81",
      nombre: "Rosario Martinez Hernandez",
    },
    {
      boleto: "82",
      nombre: "Darío Conde Martinez",
    },
    {
      boleto: "85",
      nombre: "Jose Luis Victoria Mena",
    },
    {
      boleto: "87",
      nombre: "Edgar Morales",
    },
    {
      boleto: "88",
      nombre: "Concepcion Conde Teodosio",
    },
    {
      boleto: "89",
      nombre: "Edgar Morales",
    },
    {
      boleto: "91",
      nombre: "Juan Carlos Valera Lara",
    },

    {
      boleto: "100",
      nombre: "Daniel Casiano Lauriano",
    },
    {
      boleto: "101",
      nombre: "Carmen De Jesus Juarez",
    },
    {
      boleto: "102",
      nombre: "Mirna Ortega",
    },
    {
      boleto: "103",
      nombre: "Eulalia Rojas",
    },
    {
      boleto: "104",
      nombre: "Eulalia Rojas",
    },
    {
      boleto: "105",
      nombre: "Juanita Aurelio Martinez",
    },
    {
      boleto: "106",
      nombre: "Cosme Soriano Moreno",
    },
    {
      boleto: "107",
      nombre: "Maximina Rivera Simon",
    },
    {
      boleto: "108",
      nombre: "Ana Fernanda Casanova Hernandez",
    },
    {
      boleto: "109",
      nombre: "Karol Guadalupe Casanova Hernandez",
    },
    {
      boleto: "110",
      nombre: "Fernando Casanova De Jesus",
    },
    {
      boleto: "111",
      nombre: "Diego Emmanuel Casanova Hernandez",
    },
    {
      boleto: "112",
      nombre: "Yeraidin Adan Garcia Huerta",
    },
    {
      boleto: "113",
      nombre: "Gabriela Casanova",
    },
    {
      boleto: "114",
      nombre: "Lulu Aparicio Parra",
    },
    {
      boleto: "115",
      nombre: "Alejandra Fidel Garcia",
    },

    //121-140
    {
      boleto: "131",
      nombre: "Yameli Garcia Mota",
    },
    {
      boleto: "132",
      nombre: "Eugenia Nava Castañeda",
    },
    {
      boleto: "133",
      nombre: "Eugenia Nava Castañeda",
    },
    {
      boleto: "134",
      nombre: "Ana Maria Fernandez Nava",
    },
    {
      boleto: "135",
      nombre: "Renata Patricio Garcia",
    },
    {
      boleto: "136",
      nombre: "Alondra Eulogia Juarez",
    },
    {
      boleto: "137",
      nombre: "Jose Eulogia Vazquez",
    },
    {
      boleto: "138",
      nombre: "Florencia Juarez Martinez",
    },
    {
      boleto: "139",
      nombre: "Gabriela Benito Tirado",
    },
    {
      boleto: "140",
      nombre: "Bacilia Castañeda de Jesus",
    },
    {
      boleto: "141",
      nombre: "Araceli Martinez Hernandez",
    },
    {
      boleto: "142",
      nombre: "Leticia Hernandez Lopez",
    },
    {
      boleto: "143",
      nombre: "Lorenzo Juarez Martinez",
    },
    {
      boleto: "144",
      nombre: "Jeremi Yahir Cordova Nava",
    },
    {
      boleto: "145",
      nombre: "Karen Juarez Valera",
    },
    {
      boleto: "146",
      nombre: "Ana Maria Salazar Reyes",
    },
    {
      boleto: "147",
      nombre: "Gerardo Perfecto Garcia",
    },
    {
      boleto: "149",
      nombre: "Felix Mora Hernandez",
    },
    
    //141-160
    {
      boleto: "150",
      nombre: "Jhonatan Tadeo",
    },
    {
      boleto: "159",
      nombre: "Dante Victoria Ramos",
    },
    {
      boleto: "160",
      nombre: "Sergio Morales Mota",
    },

    {
      boleto: "161",
      nombre: "Hector Garcia Ramirez",
    },
    {
      boleto: "162",
      nombre: "Miguel Angel De La Cruz",
    },
    
    {
      boleto: "163",
      nombre: "Judith Sanchez",
    },
    {
      boleto: "164",
      nombre: "Miguel Angel De La Cruz",
    },
    {
      boleto: "165",
      nombre: "Omar Garcia Mendez",
    },
    {
      boleto: "167",
      nombre: "Gabriela Ramirez Simon",
    },
    {
      boleto: "168",
      nombre: "Marco Antonio Vazquez Perez",
    },
    {
      boleto: "169",
      nombre: "Adrian Encarnacion",
    },
    {
      boleto: "170",
      nombre: "Jeniffer Guzman Mendez",
    },

    {
      boleto: "171",
      nombre: "Flavio Narciso Lucas",
    },
    {
      boleto: "172",
      nombre: "Vania Becerril Mendez",
    },
    {
      boleto: "173",
      nombre: "Flavio Narciso Lucas",
    },
    {
      boleto: "174",
      nombre: "Pascual Perez Hernandez",
    },
    {
      boleto: "181",
      nombre: "Moises Valera Carmona",
    },
    //191-200
    {
      boleto: "192",
      nombre: "Luis Miranda",
    },
    {
      boleto: "200",
      nombre: "Marcelina de Jesus García",
    },
    //201-220
    {
      boleto: "204",
      nombre: "Juan Cabrera",
    },
    {
      boleto: "207",
      nombre: "Jesus Bandala",
    },
    {
      boleto: "208",
      nombre: "Ascencion Martinez",
    },
    {
      boleto: "211",
      nombre: "Erick García Olivares",
    },
    {
      boleto: "212",
      nombre: "Daniela Baez Ramón",
    },
    {
      boleto: "213",
      nombre: "Adolfo Cruz",
    },
    {
      boleto: "214",
      nombre: "Guadalepe de Jesus García",
    },
    {
      boleto: "215",
      nombre: "Josue Adan Bautista Casiano",
    },
    {
      boleto: "216",
      nombre: "Roberto Santos",
    },
    {
      boleto: "218",
      nombre: "Tino Garger",
    },
    {
      boleto: "219",
      nombre: "Trini Quijano",
    },
    {
      boleto: "220",
      nombre: "David Santos Lucas",
    },
    //241-260
    {
      boleto: "241",
      nombre: "Ofelia Luna Paulino",
    },
    {
      boleto: "242",
      nombre: "Ofelia Luna Paulino",
    },
    {
      boleto: "243",
      nombre: "David Muñiz Pila",
    },
    {
      boleto: "244",
      nombre: "Luis Mora",
    },
    
    {
      boleto: "250",
      nombre: "Rodolfo Borzani",
    },
    {
      boleto: "251",
      nombre: "María Dolores Monroy Díaz",
    },
    {
      boleto: "252",
      nombre: "Mia Miranda",
    },
    {
      boleto: "254",
      nombre: "Adareli",
    },
    {
      boleto: "255",
      nombre: "José David Muñiz Monroy",
    },
    {
      boleto: "256",
      nombre: "Maty Galindo",
    },
    {
      boleto: "257",
      nombre: "Anette Bautista Aquino",
    },
    {
      boleto: "259",
      nombre: "Josafath Bautista Aquino",
    },
    {
      boleto: "260",
      nombre: "Gabriel Muñiz Monroy",
    },
    //261-280 Lobo
    {
      boleto: "261",
      nombre: "Uriel Hernandez Ramirez",
    },
    {
      boleto: "262",
      nombre: "Uriel Hernandez Ramirez",
    },
    {
      boleto: "263",
      nombre: "Jesus Camacho",
    },
    {
      boleto: "264",
      nombre: "Aventurero",
    },
    {
      boleto: "265",
      nombre: "Gabriela Ramirez",
    },
    {
      boleto: "266",
      nombre: "Graciela de Jesus Lopez",
    },
    {
      boleto: "267",
      nombre: "Jaqueline de Jesus Lopez",
    },
    {
      boleto: "268",
      nombre: "Jose Antonio Vazquez",
    },
    {
      boleto: "269",
      nombre: "Jose Antonio Vazquez",
    },
    {
      boleto: "270",
      nombre: "Jazmin Hernandez",
    },
    {
      boleto: "271",
      nombre: "Maria Yolanda Ruiz Escalona",
    },
    {
      boleto: "272",
      nombre: "Maria Yolanda Ruiz Escalona",
    },
    {
      boleto: "273",
      nombre: "Ivan Mendez Urbano",
    },
    {
      boleto: "274",
      nombre: "Aventurero",
    },
    {
      boleto: "275",
      nombre: "Marcos Hernandez",
    },
    {
      boleto: "276",
      nombre: "Marcos Hernandez",
    },
    {
      boleto: "277",
      nombre: "Maria Luisa Ruiz Escalona",
    },
    {
      boleto: "278",
      nombre: "Josue Isaias Vazquez Ruiz",
    },
    {
      boleto: "279",
      nombre: "Raquel Elizabeth Vazquez de Jesus",
    },
    {
      boleto: "280",
      nombre: "Marco Antonio Vazquez Perez",
    },
    //281-290 Abraham
    {
      boleto: "281",
      nombre: "Maxi Cabrera Benito",
    },
    {
      boleto: "282",
      nombre: "Lorena de Jesus Lopez",
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
      boleto: "285",
      nombre: "Irma de Jesus Lopez",
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
      nombre: "Rafael Serrano Mestiza",
    },
    //291-300
    {
      boleto: "291",
      nombre: "Nahum Alejandro Fermin Garcia",
    },
    {
      boleto: "292",
      nombre: "Octavio Colin",
    },
    {
      boleto: "293",
      nombre: "Ascencion Martinez",
    },
    {
      boleto: "294",
      nombre: "Octavio Colin",
    },
    {
      boleto: "295",
      nombre: "Nahum Alejandro Fermin Garcia",
    },
    {
      boleto: "296",
      nombre: "Nahum Alejandro Fermin Garcia",
    },
    {
      boleto: "297",
      nombre: "Octavio Colin",
    }, 
    {
      boleto: "298",
      nombre: "Emmanuel Ramos Marin",
    },
    {
      boleto: "299",
      nombre: "Emmanuel Ramos Marin",
    },
    {
      boleto: "300",
      nombre: "Emmanuel Ramos Marin",
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
      <h3>
        La rifa se llevara a cabo el día Domingo 25 de junio del 2023. En la
        base de Urbanos Rojos. A las 11:00 de la mañana.
      </h3>
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
        <h3>Historia</h3>
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
          <img
            src={imagen04}
            alt="Honorarios del Doctor"
            className="img-fluid"
          />
          <p className="parrafo">
            Honorarios del doctor por Laparoscopia $35,000.00
          </p>
        </div>
        <div className="col-md-6">
          <img src={imagen05} alt="Gastos en Hospital" className="img-fluid" />
          <p className="parrafo">
            Gastos Totales en el hospital Aparte de los honorarios del doctor
            $68,782.26
          </p>
        </div>
        <hr></hr>
      </div>
      <h3>Dinámica.</h3>
      <p style={{textAlign: "left"}}>
        <ol>
          <li>
            El día de la rifa (Domingo, 25 de Junio, del 2023. A las 11 de la
            mañana) todos los boletos se meterán a un frasco.
          </li>
          <li>
            Se buscará una mano santa del público que saque el o los boletos.
          </li>
          <li>
            El público decidirá si gana el primer boleto que salga o el segundo,
            tercero, cuarto, etc.
          </li>
          <li>
            La persona ganadora deberá presentar su BOLETO o en su defecto su INE para recibir su
            SmartTV.
          </li>
          <li>
            Si la persona que resulte ganadora no se encuentra presente, se le
            hará una llamada, si no contesta a la segunda llamada se descartara su
            boleto y se procederá a sacar otro boleto.
          </li>
          <li>
            Si es que si contesta deberá presentarse en la terminal de urbanos
            rojos para recibir su SmartTV antes de las 8 de la noche ese mismo
            día presentando su boleto o su INE.
          </li>
        </ol>
      </p>
      <h4>Lista de participantes en la rifa.</h4>
      <table className="table">
        <thead>
          <tr>
            <th></th>
            <th>Boleto</th>
            <th>Nombre</th>
          </tr>
        </thead>
        <tbody>
          {personas.map((persona, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
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
