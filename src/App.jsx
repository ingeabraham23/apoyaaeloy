// eslint-disable-next-line no-unused-vars
import React from "react";
import "./App.css";
import imagen01 from "./assets/01.jpg";
import imagen05 from "./assets/05.jpg";
import imagen04 from "./assets/04.jpg";

function App() {
  const personas = [
    {
      boleto: "001",
      nombre: "Emilio Aquino Teodosio",
    },
    {
      boleto: "002",
      nombre: "Silvia Conde Teodosio",
    },
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
      boleto: "014",
      nombre: "Guadalupe de Jesus Juarez",
    },
    {
      boleto: "015",
      nombre: "Hugo Jared Casiano ",
    },
    {
      boleto: "016",
      nombre: "Angel Giovani Carreon Ortega",
    },
    {
      boleto: "017",
      nombre: "Felipe Camacho Martinez",
    },
    {
      boleto: "018",
      nombre: "Silvia Julian Aquino",
    },
    {
      boleto: "019",
      nombre: "Alejandra Cabrera Perez",
    },
    //21-30
    {
      boleto: "020",
      nombre: "Florencia Hernandez Perez",
    },
    {
      boleto: "021",
      nombre: "Ivan Cano Capetillo",
    },
    {
      boleto: "022",
      nombre: "Amibelen Casiano Sanchez",
    },
    {
      boleto: "023",
      nombre: "Jose Luis Sanchez Campos",
    },
    {
      boleto: "024",
      nombre: "Juana Sanchez Carmona",
    },
    {
      boleto: "025",
      nombre: "Humberto Leon Bravo",
    },
    {
      boleto: "026",
      nombre: "Juan Roman Galvan",
    },
    {
      boleto: "027",
      nombre: "Ivan Cano Capetillo",
    },
    {
      boleto: "028",
      nombre: "Raquel Herrera Vega",
    },
    {
      boleto: "029",
      nombre: "Humberto Leon Bravo",
    },
    {
      boleto: "030",
      nombre: "Hector Garcia Ramirez",
    },
    {
      boleto: "031",
      nombre: "Flavio Narciso Lucas",
    },
    {
      boleto: "032",
      nombre: "Vania Becerril Mendez",
    },
    {
      boleto: "033",
      nombre: "Flavio Narciso Lucas",
    },
    {
      boleto: "034",
      nombre: "Dilan Urbano Perfecto Ventura",
    },
    {
      boleto: "035",
      nombre: "Flavio Narciso Lucas",
    },
    {
      boleto: "036",
      nombre: "Dilan Urbano Perfecto Ventura",
    },
    {
      boleto: "037",
      nombre: "Flavio Narciso Lucas",
    },
    {
      boleto: "038",
      nombre: "Margarita Casiano Gonzalez",
    },
    {
      boleto: "039",
      nombre: "Flavio Narciso Lucas",
    },
    {
      boleto: "040",
      nombre: "Dilan Urbano Perfecto Ventura",
    },
    {
      boleto: "041",
      nombre: "Flavio Narciso Lucas",
    },
    {
      boleto: "042",
      nombre: "Vania Becerril Mendez",
    },
    {
      boleto: "043",
      nombre: "Flavio Narciso Lucas",
    },
    {
      boleto: "044",
      nombre: "Isaias Meneses Vega",
    },
    {
      boleto: "045",
      nombre: "Flavio Narciso Lucas",
    },
    
    //40-60
    {
      boleto: "046",
      nombre: "Marcos Colin",
    },
    {
      boleto: "047",
      nombre: "Ramiro Gonzalez Ortiz",
    },
    {
      boleto: "048",
      nombre: "Juan Pascual De La Cruz",
    },
    {
      boleto: "049",
      nombre: "Candido Ortiz Olivares",
    },

    {
      boleto: "050",
      nombre: "Victor Santos Aparicio",
    },
    {
      boleto: "051",
      nombre: "Marcos Colin",
    },
    {
      boleto: "052",
      nombre: "Moises Valera Carmona",
    },
    {
      boleto: "053",
      nombre: "Ramiro Gonzalez Ortiz",
    },
    {
      boleto: "054",
      nombre: "Samuel Vazquez Nicolas",
    },
    {
      boleto: "055",
      nombre: "Marcos Colin",
    },
    {
      boleto: "056",
      nombre: "Humberto Ibañez Rodrigo",
    },
    {
      boleto: "057",
      nombre: "Victor Santos Aparicio",
    },
    {
      boleto: "58",
      nombre: "Bernardino Ramos Perez",
    },
    {
      boleto: "059",
      nombre: "Alma Rosa Lucas Acevedo",
    },
    {
      boleto: "060",
      nombre: "Ramon Olivares Pozos",
    },
    {
      boleto: "061",
      nombre: "Samuel Vazquez Nicolas",
    },
    {
      boleto: "062",
      nombre: "Francisco Clemente Hernandez",
    },
    {
      boleto: "063",
      nombre: "Juan Reyes Teodosio",
    },
    {
      boleto: "064",
      nombre: "Ramon Olivares Pozos",
    },
    {
      boleto: "065",
      nombre: "Marcos Colin",
    },
    
    //61-70
    {
      boleto: "066",
      nombre: "Brenda Ivonne Cordero Ortega",
    },
    {
      boleto: "067",
      nombre: "Emmanuel Ramos Marin",
    },
    {
      boleto: "068",
      nombre: "Arnulfo Ramos Gonzalez",
    },
    {
      boleto: "069",
      nombre: "Ines Carmona Larios",
    },
    
    {
      boleto: "070",
      nombre: "Francisca Sandoval Rojas",
    },
    {
      boleto: "071",
      nombre: "Natividad Mote Rivera",
    },
    {
      boleto: "072",
      nombre: "Natividad Mote Rivera",
    },
    {
      boleto: "073",
      nombre: "Arnulfo Ramos Gonzalez",
    },
    {
      boleto: "074",
      nombre: "Arnulfo Ramos Gonzalez",
    },

    //71-80
    {
      boleto: "075",
      nombre: "José Luis Ortega Sandoval",
    },
    {
      boleto: "076",
      nombre: "Santiago Rojas Domingo",
    },
    {
      boleto: "077",
      nombre: "Valeria Del Carmen Rojas Domingo",
    },
    {
      boleto: "078",
      nombre: "Regina Rojas Rojas",
    },
    {
      boleto: "079",
      nombre: "Sebastian Rojas Rojas",
    },
    {
      boleto: "080",
      nombre: "Victor Manuel Suarez Minor",
    },
    {
      boleto: "081",
      nombre: "Rosario Martinez Hernandez",
    },
    {
      boleto: "082",
      nombre: "Darío Conde Martinez",
    },
    {
      boleto: "085",
      nombre: "Jose Luis Victoria Mena",
    },
    {
      boleto: "087",
      nombre: "Edgar Morales",
    },
    {
      boleto: "088",
      nombre: "Concepcion Conde Teodosio",
    },
    {
      boleto: "089",
      nombre: "Edgar Morales",
    },
    {
      boleto: "091",
      nombre: "Juan Carlos Valera Lara",
    },

    {
      boleto: "92",
      nombre: "Abigail Garcia Benito",
    },
    {
      boleto: "93",
      nombre: "Cecilia Benito Garcia",
    },
    {
      boleto: "94",
      nombre: "Abigail Garcia Benito",
    },
    {
      boleto: "95",
      nombre: "Clara Benito Garcia",
    },
    {
      boleto: "96",
      nombre: "Anayely Hilario Jaimez",
    },
    {
      boleto: "97",
      nombre: "Filomeno Garcia Hernandez",
    },
    {
      boleto: "98",
      nombre: "Filomeno Garcia Hernandez",
    },
    {
      boleto: "99",
      nombre: "Elizabeth Mendez Jimenez",
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
    {
      boleto: "116",
      nombre: "Mayra Goretty Gonzalez Sosa",
    },
    {
      boleto: "117",
      nombre: "Inocencia Espinoza Garcia",
    },
    {
      boleto: "118",
      nombre: "Cristina Inocencio Ortiz",
    },
    {
      boleto: "119",
      nombre: "Mayra Yesenia Espinoza Inocencio",
    },
    {
      boleto: "120",
      nombre: "Isela Del Carmen Espinoza Inocencio",
    },
    {
      boleto: "121",
      nombre: "Jose Alejandro Ortega",
    },
    {
      boleto: "122",
      nombre: "Jose Sebastian Ortega Espinoza",
    },
    {
      boleto: "123",
      nombre: "Cristian Espinoza Inocencio",
    },
    {
      boleto: "124",
      nombre: "Mayra Goretty Gonzalez Sosa",
    },
    {
      boleto: "125",
      nombre: "Cristian Espinoza Inocencio",
    },
    {
      boleto: "126",
      nombre: "Juan Mauricio Aparicio Vega",
    },
    {
      boleto: "127",
      nombre: "Señora Salia",
    },
    {
      boleto: "128",
      nombre: "Señora Salia",
    },
    {
      boleto: "129",
      nombre: "Araceli Cruz Lozano",
    },
    {
      boleto: "130",
      nombre: "Maurilia Sosa Diaz",
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
      boleto: "148",
      nombre: "Ramon Gomez",
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
      boleto: "151",
      nombre: "Marco Antonio Andio Ortiz",
    },
    {
      boleto: "152",
      nombre: "Karol Cordova Becerra",
    },
    {
      boleto: "153",
      nombre: "Ramon Olivares Antonio",
    },
    {
      boleto: "154",
      nombre: "Marlen Aquino Julian",
    },
    {
      boleto: "155",
      nombre: "Samuel Hernandez Sebastian",
    },
    {
      boleto: "156",
      nombre: "Norberto Zamora",
    },
    {
      boleto: "157",
      nombre: "Norberto Zamora",
    },
    {
      boleto: "158",
      nombre: "Norberto Zamora",
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
      boleto: "166",
      nombre: "Elpidio Marcos Cordova",
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
      boleto: "176",
      nombre: "Señora Salia",
    },
    {
      boleto: "178",
      nombre: "Señora Salia",
    },
    {
      boleto: "179",
      nombre: "Señora Salia",
    },
    {
      boleto: "180",
      nombre: "Jose Juan Hermenegildo Aguilar",
    },
    {
      boleto: "181",
      nombre: "Moises Valera Carmona",
    },
    {
      boleto: "182",
      nombre: "Maria Isabel Mendez Hernandez",
    },
    {
      boleto: "184",
      nombre: "Eliza Hernandez Bonilla",
    },
    {
      boleto: "187",
      nombre: "Wulfrano Figueroa Hernandez",
    },
    {
      boleto: "188",
      nombre: "Benita Luna Hernandez",
    },
    {
      boleto: "189",
      nombre: "Fausto Hernandez",
    },
    {
      boleto: "190",
      nombre: "Yahor Alonso Arguelles",
    },
    //191-200
    {
      boleto: "191",
      nombre: "Yuridia Sanchez Hernandez",
    },
    {
      boleto: "192",
      nombre: "Luis Miranda",
    },
    {
      boleto: "193",
      nombre: "Julian Martinez Sarmiento",
    },
    {
      boleto: "194",
      nombre: "Fausto Hernandez",
    },
    {
      boleto: "195",
      nombre: "Juan Carlos Garcia De Jesus",
    },
    {
      boleto: "196",
      nombre: "Natalia Bonilla Apango",
    },
    {
      boleto: "197",
      nombre: "Fausto Hernandez",
    },
    {
      boleto: "198",
      nombre: "Martha Joaquin Perez",
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
      boleto: "217",
      nombre: "Zara Reyes Mendez",
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
    {
      boleto: "221",
      nombre: "Jose Armando Brigido Rodriguez",
    },
    {
      boleto: "222",
      nombre: "Heriberto Brigido Jimenez",
    },
    {
      boleto: "223",
      nombre: "Minerva Rodriguez Esteban",
    },
    {
      boleto: "224",
      nombre: "Montserrat Brigido Rodriguez",
    },
    {
      boleto: "225",
      nombre: "Raul Brigido Trujillo",
    },
    {
      boleto: "226",
      nombre: "Heriberto Brigido Rodriguez",
    },
    {
      boleto: "227",
      nombre: "Gloria Jimenez Anacleto",
    },
    {
      boleto: "228",
      nombre: "Gloria Jimenez Anacleto",
    },
    {
      boleto: "229",
      nombre: "Gloria Jimenez Anacleto",
    },
    {
      boleto: "230",
      nombre: "Maria Del Carmen Brigido Rodriguez",
    },
    {
      boleto: "231",
      nombre: "Justimiano Rodriguez Palacio",
    },
    {
      boleto: "232",
      nombre: "Jaime Brigido J.",
    },
    {
      boleto: "233",
      nombre: "Jaime Brigido J.",
    },
    {
      boleto: "234",
      nombre: "Jaime Brigido J.",
    },
    {
      boleto: "235",
      nombre: "Jaime Brigido J.",
    },
    {
      boleto: "236",
      nombre: "Fabio Jimenez Anacleto",
    },
    {
      boleto: "237",
      nombre: "Rosi Jimenez Ortiz",
    },
    {
      boleto: "238",
      nombre: "Laura Jimenez Ortiz",
    },
    {
      boleto: "239",
      nombre: "Carmen Brigido",
    },
    {
      boleto: "240",
      nombre: "Brely Gonzalez Jiemenez",
    },

    //241-260 David David David David David David David David David David David David
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
      boleto: "245",
      nombre: "Diana K. Garcia Barroeta",
    },
    {
      boleto: "246",
      nombre: "Florencia Hernandez Perez",
    },
    {
      boleto: "247",
      nombre: "Lucia Vega Arroy",
    },
    {
      boleto: "248",
      nombre: "Claudia Lizeth Jimenez Hernandez",
    },
    {
      boleto: "249",
      nombre: "Iztac Quiterio Hernandez",
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
      boleto: "253",
      nombre: "Aldo Trujillo",
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
      boleto: "258",
      nombre: "Aldo Trujillo",
    },
    {
      boleto: "259",
      nombre: "Josafath Bautista Aquino",
    },
    {
      boleto: "260",
      nombre: "Gabriel Muñiz Monroy",
    },
    //David David David David David David David David David David David David

    //261-280 Lobo Lobo Lobo Lobo Lobo Lobo Lobo Lobo Lobo Lobo Lobo Lobo Lobo Lobo
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
    //Lobo Lobo Lobo Lobo Lobo Lobo Lobo Lobo Lobo Lobo Lobo Lobo Lobo Lobo

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

    {
      boleto: "301",
      nombre: "Beatriz Toral",
    },
    {
      boleto: "302",
      nombre: "Raymundo Martinez",
    },
    {
      boleto: "303",
      nombre: "Everardo Alarcon Posadas",
    },
    {
      boleto: "304",
      nombre: "Everardo Alarcon",
    },
    {
      boleto: "305",
      nombre: "Vanessa Antonio",
    },
    {
      boleto: "306",
      nombre: "Jonathan Jimenez",
    },
    {
      boleto: "307",
      nombre: "Abel Santos",
    },
    {
      boleto: "308",
      nombre: "Nancy Torres",
    },
    {
      boleto: "309",
      nombre: "Karen Castro",
    },
    {
      boleto: "310",
      nombre: "Karen Castro",
    },
    {
      boleto: "311",
      nombre: "Ruben Lopez",
    },
    {
      boleto: "312",
      nombre: "Nelson Landero",
    },
    {
      boleto: "313",
      nombre: "Maricarmen Galindo",
    },
    {
      boleto: "314",
      nombre: "Mayra Teodocio",
    },
    {
      boleto: "315",
      nombre: "Mayra Cardenas",
    },
    {
      boleto: "316",
      nombre: "Montserrat Lucas",
    },
    {
      boleto: "317",
      nombre: "Silviano Conde",
    },
    {
      boleto: "318",
      nombre: "Raymundo Martinez",
    },
    {
      boleto: "319",
      nombre: "Araceli Agustin",
    },
    {
      boleto: "320",
      nombre: "Jorge Santos",
    },
    {
      boleto: "321",
      nombre: "Ruben Lopez",
    },
    {
      boleto: "322",
      nombre: "Gustavo Julian",
    },
    {
      boleto: "323",
      nombre: "Ma. Del Rosario Conde",
    },
    {
      boleto: "324",
      nombre: "Ma. Del Rosario Conde",
    },
    {
      boleto: "325",
      nombre: "Omar Santos",
    },
    {
      boleto: "326",
      nombre: "Diego Romero",
    },
    {
      boleto: "327",
      nombre: "Silviano Conde",
    },
    {
      boleto: "328",
      nombre: "Gustavo Galindo",
    },
    {
      boleto: "329",
      nombre: "Elisa Lopez",
    },
    {
      boleto: "330",
      nombre: "Ruben Lopez",
    },
    {
      boleto: "331",
      nombre: "Guillermina Santos",
    },
    {
      boleto: "332",
      nombre: "Laura Morales",
    },
    {
      boleto: "333",
      nombre: "Rodrigo Cesareo",
    },
    {
      boleto: "334",
      nombre: "Vicky Conde Reyes",
    },
    {
      boleto: "335",
      nombre: "Laura Morales",
    },
    {
      boleto: "336",
      nombre: "Laura Morales",
    },

    {
      boleto: "337",
      nombre: "Laura Morales",
    },
    {
      boleto: "338",
      nombre: "Arturo Morales",
    },
    {
      boleto: "339",
      nombre: "Arturo Morales",
    },
    {
      boleto: "340",
      nombre: "Lucia Morales",
    },
    {
      boleto: "341",
      nombre: "Luis Angel Cesareo",
    },
    {
      boleto: "342",
      nombre: "Lucia Morales",
    },
    {
      boleto: "343",
      nombre: "Arturo Morales",
    },
    {
      boleto: "344",
      nombre: "Arturo Morales",
    },
    {
      boleto: "345",
      nombre: "Eutiquia Santos",
    },
    {
      boleto: "346",
      nombre: "Ignacio Toledano",
    },
    {
      boleto: "347",
      nombre: "Abel Santos",
    },
    {
      boleto: "348",
      nombre: "Beatriz Amaro",
    },
    {
      boleto: "349",
      nombre: "Diego Romero",
    },
    {
      boleto: "350",
      nombre: "Pablo Castro",
    },
    {
      boleto: "351",
      nombre: "Regina Angel",
    },
    {
      boleto: "352",
      nombre: "Mariana Amaro",
    },
    {
      boleto: "353",
      nombre: "Eugenia Leon",
    },
    {
      boleto: "354",
      nombre: "Jaime Galindo",
    },
    {
      boleto: "355",
      nombre: "Eduardo Santos",
    },
    {
      boleto: "356",
      nombre: "Cintia Rodrigo",
    },
    {
      boleto: "357",
      nombre: "Natali Rodrigo",
    },
    {
      boleto: "358",
      nombre: "Karla Sofia Rodrigo",
    },
    {
      boleto: "359",
      nombre: "Lucia Santos",
    },
    {
      boleto: "360",
      nombre: "Lucia Santos",
    },
    {
      boleto: "361",
      nombre: "Lucia Santos",
    },
    {
      boleto: "362",
      nombre: "Araceli Flores",
    },
    {
      boleto: "363",
      nombre: "Margarita Natividad",
    },
    {
      boleto: "364",
      nombre: "Julio Cesar Hernandez",
    },
    {
      boleto: "365",
      nombre: "Jasive Adareli",
    },
    {
      boleto: "366",
      nombre: "Lucia Santos",
    },
    {
      boleto: "367",
      nombre: "Carmen Castro",
    },
    {
      boleto: "368",
      nombre: "Lucia Santos",
    },
    {
      boleto: "369",
      nombre: "Lorenzo Conde",
    },
    {
      boleto: "370",
      nombre: "Maria Isabel Castro",
    },
    {
      boleto: "371",
      nombre: "Antonia Santos",
    },
    {
      boleto: "372",
      nombre: "Lucia Santos",
    },
    {
      boleto: "373",
      nombre: "Laura Morales",
    },
    {
      boleto: "374",
      nombre: "Lucia Santos",
    },
    {
      boleto: "375",
      nombre: "Lucia Santos",
    },
    {
      boleto: "376",
      nombre: "Lucia Santos",
    },
    {
      boleto: "377",
      nombre: "Leticia Castro",
    },
    {
      boleto: "378",
      nombre: "Jose lsabel lsidro",
    },
    {
      boleto: "379",
      nombre: "Eduardo Barrera",
    },
    {
      boleto: "380",
      nombre: "Adriana Cantellano",
    },
    {
      boleto: "381",
      nombre: "Ruben Lopez",
    },
    {
      boleto: "382",
      nombre: "Araceli Flores",
    },
    {
      boleto: "383",
      nombre: "Vanessa Juarez",
    },
    {
      boleto: "384",
      nombre: "Juan Ortiz",
    },
    {
      boleto: "385",
      nombre: "Victorina Lucas",
    },
    {
      boleto: "386",
      nombre: "José Conde",
    },
    {
      boleto: "387",
      nombre: "Iris Anahi Garcia",
    },
    {
      boleto: "388",
      nombre: "Fabiola Teodocio",
    },
    {
      boleto: "389",
      nombre: "Jessica de Jesus Ramos",
    },
    {
      boleto: "390",
      nombre: "Guillermo Alberto",
    },
    {
      boleto: "391",
      nombre: "Ruben Lopez",
    },
    {
      boleto: "392",
      nombre: "Andrea Anacleto",
    },
    {
      boleto: "393",
      nombre: "David Mendoza",
    },
    {
      boleto: "394",
      nombre: "Asuncion Santos",
    },
    {
      boleto: "395",
      nombre: "Margarita Natividad",
    },
    {
      boleto: "396",
      nombre: "Amy Sofia Alberto",
    },
    {
      boleto: "397",
      nombre: "Diana Paola Perez",
    },
    {
      boleto: "398",
      nombre: "Julian Bonilla",
    },
    {
      boleto: "399",
      nombre: "Elisa Lopez",
    },
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
