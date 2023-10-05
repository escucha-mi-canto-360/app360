// import insideOne from '';
// import insideTwo from '../images/PanoramaInterior2.png';

const Scenes = {
    panoOne:{
        id:1,
        title:'Girardor Cundinamarca',
        image: "../Entorno_uno/pano-girardot-vista-poso-azul.jpg",
        soundEscena: '../Entorno_uno/sonido-girardot-vista-poso-azul.mp3',
        pitch: -11,
        yaw: -3,
        hotSpot:{
            hostpot1:{
                id:1,
                type: 'custom',
                pitch: -12.555909946270644,
                yaw: 25.475028999025003,
                cssClass: 'hotSpotElement',
                icono:'../Entorno_uno/Hospot_uno/icono-ave1.png',
                media: {
                    title:"Atrapamoscas Pechirrojo",
                    subTitle:"Pyrocephalus Rubinus",
                    imageIntial:"../Entorno_uno/Hospot_uno/Foto-icono-ave1.jpg",
                    dataCurious:[
                        {
                            id: 1,
                            info: "El atrapamoscas pechirrojo es conocido por su comportamiento agresivo y valiente. A menudo se enfrenta a aves más grandes, como cuervos y halcones, para defender su territorio y nido. También ataca a depredadores que se acercan demasiado a su territorio."
                        },
                        {
                            id: 2,
                            info: "Su nombre común, 'atrapamoscas', hace referencia a su habilidad para atrapar insectos en el aire. Son excelentes cazadores de insectos, y su dieta se compone principalmente de moscas, abejas, avispas y otros insectos voladores."
                        },
                        {
                            id: 3,
                            info: "Los machos y las hembras de esta especie presentan diferencias en su apariencia. Los machos tienen un pecho de color rojo brillante, que es una característica distintiva. En contraste, las hembras tienen un pecho de color amarillo pálido."
                        },
                        {
                            id: 4,
                            info: "Estas aves construyen nidos colgantes en las ramas de los árboles. Utilizan una variedad de materiales para construir sus nidos, incluyendo hierba, ramitas, plumas y otros materiales que encuentran en su entorno."
                        },
                        {
                            id: 5,
                            info: "Durante el invierno, los atrapamoscas pechirrojos migran desde América del Norte hacia América del Sur. Esto es un viaje largo y agotador que puede abarcar miles de kilómetros. En su migración, cruzan el Golfo de México, lo que los convierte en uno de los viajes migratorios más largos realizados por aves de tamaño pequeño."
                        },
                        {
                            id: 6,
                            info: "Estas aves son conocidas por sus vocalizaciones distintivas. Su llamada es un sonido agudo y característico que se asemeja al canto que a menudo suena como 'pee-a-wee,' lo que ha llevado a su nombre común en inglés 'Eastern Wood-Pewee'."
                        },
                        {
                            id: 7,
                            info: "Para atrapar insectos en el aire, el atrapamoscas pechirrojo adopta un comportamiento de caza aérea. Se posa en una percha alta y se lanza en picado hacia abajo para atrapar insectos en pleno vuelo. Luego, regresa a su percha para consumir la presa."
                        }
                    ],
                    images:[
                        { id: 1, imagen: '../Entorno_uno/Hospot_uno/Foto1-ave1.jpg' },
                        { id: 2, imagen: '../Entorno_uno/Hospot_uno/Foto2-ave1.jpg' },
                        { id: 3, imagen: '../Entorno_uno/Hospot_uno/Foto3-ave1.jpg' },
                        { id: 4, imagen: '../Entorno_uno/Hospot_uno/Foto4-ave1.jpg' }
                    ],
                    videoId:"jszJDavxwJI"
                }
            },
            hostpot2:{
                id:2,
                type: 'custom',
                pitch: -12.729387038429113,
                yaw: 67.89470155921522,
                cssClass: 'hotSpotElement',
                icono:'../Entorno_uno/Hospot_dos/icono-ave2.png',
                media: {
                    title:"Bichofué Gritón",
                    subTitle:"Pitangus Sulphuratus",
                    imageIntial:"../Entorno_uno/Hospot_dos/Foto-icono-ave2.jpg",
                    dataCurious:[
                        { id: 1, info: "Llamativo plumaje: El benteveo tiene un plumaje llamativo que incluye un vientre de color amarillo brillante, una cabeza y espalda de color marrón y una garganta blanca. También tiene una banda negra en el pecho y una cola larga." },
                        { id: 2, info: "Vocalización distintiva: Estas aves son conocidas por su distintivo canto, que suena como un 'bien te veo' o 'benteveo,' lo que les ha dado su nombre común en algunos lugares. Son muy vocales y pueden ser escuchados con frecuencia en su hábitat." },
                        { id: 3, info: "Alimentación variada: El benteveo es un omnívoro oportunista y se alimenta de una amplia variedad de presas. Su dieta incluye insectos, pequeños vertebrados, frutas, y ocasionalmente pescado, lo que le permite adaptarse a diferentes condiciones y ambientes." },
                        { id: 4, info: "Comportamiento agresivo: Estas aves son territoriales y a menudo muestran un comportamiento agresivo hacia otras aves, incluyendo la persecución de aves rapaces más grandes que puedan amenazar su territorio o nidos." },
                        { id: 5, info: "Nidos aéreos: Construyen sus nidos en lugares diversos, pero a menudo eligen ubicaciones elevadas, como árboles, postes o estructuras humanas. Sus nidos son construidos con ramitas y otras fibras vegetales, y a menudo incluyen materiales inusuales como papel, plástico y pedazos de tela." },
                        { id: 6, info: "Tolerantes a la cercanía humana: El benteveo es una especie que puede adaptarse bien a la presencia humana y es común en áreas urbanas y suburbanas. A menudo, construyen sus nidos cerca de casas y jardines." },
                        { id: 7, info: "Migración: En algunas regiones, como el norte de su rango de distribución, pueden migrar hacia el sur durante los meses más fríos. Sin embargo, en muchas áreas más cálidas, son residentes permanentes." },
                        { id: 8, info: "Control de plagas: Debido a su dieta de insectos, el benteveo es apreciado por agricultores y jardineros, ya que pueden ayudar a controlar plagas de insectos en áreas donde habitan." },
                        { id: 9, info: "Hábitat variado: Estas aves se encuentran en una amplia variedad de hábitats, desde bosques y selvas tropicales hasta zonas urbanas y rurales, lo que demuestra su capacidad de adaptación." },
                        { id: 10, info: "Culturalmente significativo: El benteveo tiene una importancia cultural en algunos lugares de América Latina, donde es considerado un ave con significado simbólico y mitológico en la tradición popular." }
                    ],
                    images:[
                        { id: 1, imagen: '../Entorno_uno/Hospot_dos/Foto1-ave2.jpg' },
                        { id: 2, imagen: '../Entorno_uno/Hospot_dos/Foto2-ave2.jpg' }
                    ],
                }
            },
            hostpot3:{
                id:3,
                type: 'custom',
                pitch: 4.696159228592777,
                yaw:  -3.4203733004315,
                cssClass: 'hotSpotElement',
                icono:'../Entorno_uno/Hospot3/icono-cantera1.png',
                media: {
                    title:"Bichofué Gritón",
                    subTitle:"Pitangus Sulphuratus",
                    imageIntial:"../Entorno_uno/Hospot3/foto-icono-cantera1.jpg",
                    dataCurious:[
                        {
                            "id": 1,
                            "info": "Plumaje llamativo: El turpial ventrinegro tiene un plumaje vibrante y llamativo. Su parte superior es de color negro brillante, mientras que su parte inferior es de un color amarillo intenso. Esta combinación de colores le confiere un aspecto llamativo y fácilmente reconocible."
                          },
                          {
                            "id": 2,
                            "info": "Distribución geográfica: Esta especie se encuentra en una amplia variedad de hábitats en América Central y América del Sur, desde el norte de México hasta Brasil y el norte de Argentina. Son aves migratorias y pueden desplazarse a lo largo de su rango de distribución según la estación."
                          },
                          {
                            "id": 3,
                            "info": "Vocalización distintiva: Los turpiales ventrinegros son conocidos por sus cantos y vocalizaciones variadas. Emiten una serie de gorjeos, trinos y silbidos que varían según la región. Sus vocalizaciones son una parte importante de su comportamiento reproductivo y de su comunicación en general."
                          },
                          {
                            "id": 4,
                            "info": "Comportamiento forrajeador: Estas aves son omnívoras y se alimentan de una amplia gama de alimentos, incluyendo insectos, frutas y néctar. A menudo se les puede ver buscando insectos en el follaje de los árboles o alimentándose de frutas en los árboles y arbustos."
                          },
                          {
                            "id": 5,
                            "info": "Nidos colgantes: Al igual que muchas otras especies de turpiales, el turpial ventrinegro construye nidos colgantes. Estos nidos son elaborados y tejidos, y suelen ser colgados en las ramas de árboles o arbustos. La hembra es la principal responsable de construir el nido."
                          },
                          {
                            "id": 6,
                            "info": "Interacción con otras especies: Estas aves pueden interactuar de manera agresiva con otras especies de aves, especialmente cuando defienden sus territorios o nidos. Son conocidas por defender sus nidos de posibles depredadores o intrusos."
                          },
                          {
                            "id": 7,
                            "info": "Importancia cultural: En algunos países de América Latina, el turpial ventrinegro es considerado un símbolo cultural y es el ave nacional de Venezuela. Su canto melodioso y su plumaje atractivo lo convierten en una especie apreciada por su belleza y su importancia en la cultura local."
                          }
                    ],
                    images:[
                        { id: 1, imagen: "../Entorno_uno/Hospot3/foto1-cantera1.jpg" },
                        { id: 2, imagen: "../Entorno_uno/Hospot3/foto2-cantera1.jpg" },
                        { id: 3, imagen: "../Entorno_uno/Hospot3/foto3-cantera1.jpg" },
                        { id: 4, imagen: "../Entorno_uno/Hospot3/foto4-cantera1.jpg" },
                        { id: 5, imagen: "../Entorno_uno/Hospot3/foto5-cantera1.jpg" }
                    ],
                }
            },
            nexScene:{
                id:4,
                type: 'custom',
                pitch: 2,
                yaw: 142,
                cssClass: 'moveScene',
                scene: 'panoTwo'
            }
        }
    },
    panoTwo:{
        title:'Pozo azul ingreso al lago',
        image: "../img/pano-dos.jpg",
        soundEscena: '../Entorno_dos/sonido-ingreso-humedal-poso-azul_out.mp3',
        pitch: -11,
        yaw: -3,
        hotSpot:{
            hostpot1:{
                id:1,
                type: 'custom',
                pitch: -3.5964291917872258,
                yaw: -52.06207842027155,
                cssClass: 'hotSpotElement',
                icono:'../Entorno_dos/Hospot1/icono-ave3.png',
                media: {
                    title:"Turpial Amarillo",
                    subTitle:"Icterus Nigrogularis",
                    imageIntial:"../Entorno_dos/Hospot1/foto_icono_ Ave3.jpg",
                    dataCurious:[
                      {
                        "id": 1,
                        "info": "Dimorfismo sexual: Los machos y las hembras de Leistes militaris muestran un marcado dimorfismo sexual en su apariencia. Los machos tienen un plumaje brillante y llamativo de color negro en la parte superior y un pecho de color amarillo intenso, lo que les da su nombre común \"pecho amarillo\". Las hembras, por otro lado, son de un color marrón más apagado en general, sin el llamativo pecho amarillo."
                       },
                       {
                        "id": 2,
                        "info": "Comportamiento gregario: Estas aves son conocidas por su comportamiento gregario, lo que significa que tienden a formar grandes grupos o bandadas. Durante la temporada de reproducción, los machos compiten por la atención de las hembras a través de exhibiciones de vuelo y canto."
                       },
                       {
                        "id": 3,
                        "info": "Canto melodioso: Los machos de Leistes militaris son conocidos por su canto melodioso y distintivo. Utilizan su canto para atraer a las hembras y defender su territorio. El canto puede incluir trinos y notas melodiosas que son agradables de escuchar."
                       },
                       {
                        "id": 4,
                        "info": "Hábitat variado: Estas aves pueden encontrarse en una variedad de hábitats, desde pastizales y campos agrícolas hasta áreas urbanas y riberas de ríos. Son adaptables y pueden prosperar en una amplia gama de entornos."
                       },
                       {
                        "id": 5,
                        "info": "Alimentación: La dieta de Leistes militaris se compone principalmente de semillas, aunque también pueden alimentarse de insectos, especialmente durante la temporada de cría. Esto los convierte en importantes dispersores de semillas en sus hábitats."
                       },
                       {
                        "id": 6,
                        "info": "Migración estacional: En algunas regiones, estas aves pueden realizar migraciones estacionales en busca de mejores condiciones de alimentación y reproducción. Durante la migración, pueden formar grandes bandadas que vuelan juntas."
                       },
                       {
                        "id": 7,
                        "info": "Nidos coloniales: Durante la temporada de reproducción, las parejas de Leistes militaris a menudo construyen sus nidos en colonias en árboles o arbustos. Los nidos son pequeños y están hechos de materiales vegetales como hierba y ramitas."
                       },
                       {
                        "id": 8,
                        "info": "Caza de insectos en vuelo: A pesar de que su dieta principal consiste en semillas, estas aves también son hábiles cazadoras de insectos en vuelo. Pueden atrapar insectos en el aire durante vuelos cortos y ágiles."
                       }
                      ],
                    images:[
                        { id: 1, imagen: '../Entorno_dos/Hospot1/Foto1-ave3.jpg' },
                        { id: 2, imagen: '../Entorno_dos/Hospot1/Foto2-ave3.jpg' },
                    ]
                }
            },
            hostpot2:{
                id:2,
                type: 'custom',
                pitch: 21.468488671909675,
                yaw: -40.75413753725874,
                cssClass: 'hotSpotElement',
                icono:'../Entorno_dos/Hospot2/icono-ave4.png',
                media: {
                    title:"Soldadito",
                    subTitle:"Leistes Militaris",
                    imageIntial:"../Entorno_dos/Hospot2/foto_icono_-Ave4.jpg",
                    dataCurious:[
                      {
                        "id": 1,
                        "info": "Plumaje vibrante: Los machos de turpial cabeciamarillo tienen un plumaje extremadamente llamativo y colorido. Tienen la cabeza, el cuello y el pecho de color amarillo brillante, que contrasta marcadamente con el resto de su cuerpo, que es negro. Este plumaje distintivo hace que sean fácilmente reconocibles."
                       },
                       {
                        "id": 2,
                        "info": "Dimorfismo sexual: Como es común en muchas especies de turpiales, las hembras tienen un plumaje más apagado en comparación con los machos. Las hembras suelen ser de color marrón oscuro o negro en su mayoría, con un tono amarillo menos pronunciado."
                       },
                       {
                        "id": 3,
                        "info": "Hábitat variado: Estas aves pueden encontrarse en una variedad de hábitats, desde bosques tropicales hasta zonas urbanas y áreas de cultivo. Son adaptables y pueden prosperar en diferentes entornos."
                       },
                       {
                        "id": 4,
                        "info": "Vocalización distintiva: Los turpiales cabeciamarillos son conocidos por su canto distintivo y melodioso. Emiten una serie de trinos y gorjeos que son apreciados por su belleza y que utilizan tanto para la comunicación entre individuos como para la delimitación de su territorio."
                       },
                       {
                        "id": 5,
                        "info": "Alimentación: La dieta de estos turpiales incluye una variedad de alimentos, como insectos, frutas y néctar. A menudo, se les puede ver forrajeando entre las ramas de los árboles en busca de insectos y alimentándose de frutas y néctar de flores."
                       },
                       {
                        "id": 6,
                        "info": "Nidos colgantes: Al igual que otros turpiales, construyen nidos colgantes en árboles o arbustos. Los nidos son elaborados y tejidos, y a menudo utilizan fibras vegetales para su construcción."
                       },
                       {
                        "id": 7,
                        "info": "Migración estacional: En algunas regiones, los turpiales cabeciamarillos realizan migraciones estacionales en busca de mejores condiciones de alimentación y reproducción. Durante la migración, pueden formar bandadas grandes."
                       },
                       {
                        "id": 8,
                        "info": "Amenazas: A pesar de ser aves adaptativas, los turpiales cabeciamarillos enfrentan amenazas como la pérdida de hábitat debido a la deforestación y la contaminación del medio ambiente. Las poblaciones de estas aves pueden disminuir en áreas afectadas por estas amenazas."
                       }
                      ],
                    images:[
                        { id: 1, imagen: '../Entorno_dos/Hospot2/Foto1-ave4.jpg' },
                        { id: 2, imagen: '../Entorno_dos/Hospot2/Foto2-ave4.jpg' },
                    ],
                    videoId:"beR8a1cnOM4"
                }
            },
            hostpot3:{
              id:2,
              type: 'custom',
              pitch: 35.97990575165335, 
              yaw: 10.014314235956977,
              cssClass: 'hotSpotElement',
              icono:'../Entorno_dos/Hospot3/icono-ave5.png',
              media: {
                  title:"Turpial Cabeciamarillo",
                  subTitle:"Icterus chrysater",
                  imageIntial:"../Entorno_dos/Hospot3/foto_icono_-Ave5jpg.jpg",
                  dataCurious:[
                    {
                      "id": 1,
                      "info": "Tamaño pequeño: El mosquero tirano chico es una de las aves rapaces más pequeñas de América del Norte. Su tamaño compacto y su apariencia discreta contrastan con su pariente más grande, el mosquero tirano occidental (Tyrannus verticalis)."
                     },
                     {
                      "id": 2,
                      "info": "Plumaje distintivo: Aunque su apariencia general puede parecer simple, estos pájaros tienen un plumaje distintivo. Presentan una corona gris y un pecho blanco que contrasta con una franja ocular negra y un pico negro afilado."
                     },
                     {
                      "id": 3,
                      "info": "Comportamiento aéreo: Al igual que otros mosqueros tiranos, esta especie es conocida por su habilidad para atrapar insectos en vuelo. Realizan vuelos cortos y ágiles desde una percha para atrapar insectos al vuelo y luego regresan a la misma percha."
                     },
                     {
                      "id": 4,
                      "info": "Canto melancólico: El nombre científico \"melancholicus\" proviene del carácter melancólico y repetitivo de su canto. Emiten un canto agudo y repetitivo que suena como \"pi-pi-pi-pi-pi.\" Su canto distintivo los hace fácilmente identificables."
                     },
                     {
                      "id": 5,
                      "info": "Migración: Muchas poblaciones de mosqueros tiranos chicos son migratorias y viajan desde América del Norte hacia América Central y América del Sur durante el invierno. En sus rutas de migración, pueden formar grupos y ser avistados en grandes números."
                     },
                     {
                      "id": 6,
                      "info": "Nidos colgantes: Estas aves construyen sus nidos en árboles o arbustos, y a menudo cuelgan de una rama. Los nidos están hechos de materiales como hierba, raicillas y fibras vegetales. La hembra es la principal encargada de construir el nido y cuidar de los polluelos."
                     },
                     {
                      "id": 7,
                      "info": "Territorialidad: Durante la temporada de reproducción, los machos pueden volverse territorialmente agresivos para defender su territorio y atraer a las hembras. Pueden realizar vuelos de exhibición para mostrar sus habilidades y territorio a otras aves y machos rivales."
                     },
                     {
                      "id": 8,
                      "info": "Control de plagas: Al ser insectívoros voraces, los mosqueros tiranos chicos desempeñan un papel importante en el control de poblaciones de insectos, incluyendo moscas y mosquitos. Por lo tanto, son beneficiosos para el equilibrio ecológico en sus hábitats."
                     }
                    ],
                  images:[
                      { id: 1, imagen: '../Entorno_dos/Hospot3/Foto1-ave5.jpg' },
                  ],
                  videoId:"4r39rCbzoKU"
              }
            },
            hostpot4:{
              id:4,
              type: 'custom',
              pitch: 64.10104539179846, 
              yaw: 104.68789459319305, 
              cssClass: 'hotSpotElement',
              icono:'../Entorno_dos/Hospot4/icono-ave6.png',
              media: {
                  title:"Sirirí común",
                  subTitle:"Tyrannus melancholicus",
                  imageIntial:"../Entorno_dos/Hospot4/foto_icono_Ave6.jpg",
                  dataCurious:[
                    {
                      "id": 1,
                      "info": "Plumaje variado: Los pericos pecho sucio tienen un plumaje principalmente verde. Sin embargo, lo que los distingue son las manchas de color amarillo en la cabeza y el cuello, una mancha roja en la parte delantera del pecho y un parche azul en las alas."
                    },
                    {
                      "id": 2,
                      "info": "Dimorfismo sexual: A diferencia de muchas especies de loros, los pericos pecho sucio exhiben un ligero dimorfismo sexual. Los machos suelen tener un color amarillo más extenso en la cabeza, mientras que las hembras pueden tener un amarillo más pálido."
                    },
                    {
                      "id": 3,
                      "info": "Comportamiento social: Estos loros son altamente sociales y tienden a vivir en grupos familiares o bandadas grandes. La comunicación vocal es esencial para su vida en grupo, y emiten una variedad de sonidos, como graznidos, silbidos y chillidos."
                    },
                    {
                      "id": 4,
                      "info": "Alimentación variada: La dieta de los pericos pecho sucio es variada y consta de una amplia gama de alimentos, que incluyen frutas, semillas, flores, néctar e insectos. Esta diversidad les permite adaptarse a diferentes fuentes de alimento en su hábitat."
                    },
                    {
                      "id": 5,
                      "info": "Nidos en cavidades: Para anidar, estos loros suelen buscar cavidades naturales en árboles o palmas, donde pueden criar a sus crías. A menudo, los nidos son reutilizados en años sucesivos."
                    },
                    {
                      "id": 6,
                      "info": "Vuelo rápido y ágil: Los pericos pecho sucio son aves ágiles en vuelo. Sus alas largas y puntiagudas les permiten realizar vuelos rápidos y maniobras ágiles, lo que les resulta útil para evitar depredadores y buscar comida."
                    },
                    {
                      "id": 7,
                      "info": "Vocalizaciones características: Son conocidos por sus vocalizaciones características, que incluyen una variedad de sonidos, desde llamadas suaves y melódicas hasta fuertes y estridentes, especialmente cuando están en grupo o en vuelo."
                    },
                    {
                      "id": 8,
                      "info": "Migración estacional: Algunas poblaciones de pericos pecho sucio son migratorias y se desplazan en busca de condiciones climáticas más favorables durante ciertas épocas del año."
                    },
                    {
                      "id": 9,
                      "info": "Adaptabilidad: Estos loros son adaptables a diferentes hábitats, desde selvas tropicales hasta áreas urbanas. Son conocidos por su capacidad para adaptarse a la presencia humana y pueden vivir en cercanía de asentamientos humanos."
                    },
                    {
                      "id": 10,
                      "info": "Amenazas: A pesar de su adaptabilidad, algunas poblaciones de pericos pecho sucio enfrentan amenazas debido a la pérdida de hábitat y la captura para el comercio de aves. La conservación de estas aves es importante para garantizar su supervivencia en la naturaleza."
                    },
                    ],
                  images:[
                      { id: 1, imagen: '../Entorno_dos/Hospot4/Foto1-ave6.jpg' },
                  ]
              }
            },
            hostpot5:{
              id:5,
              type: 'custom',
              pitch: 12.022014827763604, 
              yaw: 148.57668133982511, 
              cssClass: 'hotSpotElement',
              icono:'../Entorno_dos/Hospot5/icono-ave7.png',
              media: {
                  title:"Perico Carisucio",
                  subTitle:"Eupsittula pertinax 25cm",
                  imageIntial:"../Entorno_dos/Hospot5/foto_icono_ Ave7.jpg",
                  dataCurious:[
                    {
                      "id": 1,
                      "info": "Tamaño compacto: La garcita verdosa es una garza pequeña, con una longitud promedio de aproximadamente 40 centímetros. Su tamaño la hace fácilmente distinguible de garzas más grandes y otras aves acuáticas."
                    },
                    {
                      "id": 2,
                      "info": "Plumaje verde-azulado: Su plumaje es de color verde-azulado en la espalda y las alas, lo que le da su nombre común de \"verdosa\". Su parte inferior es de color blanco y presenta un patrón de rayas en el cuello y el pecho."
                    },
                    {
                      "id": 3,
                      "info": "Pico afilado: Tienen un pico largo y puntiagudo que utilizan para atrapar pequeños peces, insectos acuáticos y otros organismos acuáticos que constituyen su dieta principal."
                    },
                    {
                      "id": 4,
                      "info": "Hábitat acuático: La garcita verdosa suele habitar áreas cercanas al agua, como ríos, arroyos, estanques, lagunas y manglares. Se la puede encontrar tanto en agua dulce como salada."
                    },
                    {
                      "id": 5,
                      "info": "Comportamiento sigiloso: A pesar de su tamaño pequeño, son depredadores sigilosos. Se mueven lentamente y con cautela en el agua, buscando presas que acechar antes de lanzarse para atraparlas con su pico."
                    },
                    {
                      "id": 6,
                      "info": "Nidos en árboles: A diferencia de algunas garzas que anidan en el suelo, la garcita verdosa suele construir sus nidos en los árboles. Utilizan ramitas y ramas para construir nidos relativamente pequeños en la vegetación cercana al agua."
                    },
                    {
                      "id": 7,
                      "info": "Vocalización discreta: A diferencia de algunas garzas que emiten sonidos audibles, la garcita verdosa es generalmente silenciosa. Sin embargo, ocasionalmente pueden emitir una serie de graznidos suaves cuando se sienten amenazadas o durante la interacción social."
                    },
                    {
                      "id": 8,
                      "info": "Migración: Algunas poblaciones de garcitas verdosas son migratorias y se desplazan hacia climas más cálidos durante el invierno, mientras que otras son residentes permanentes en sus áreas de reproducción."
                    },
                    {
                      "id": 9,
                      "info": "Importancia ecológica: Estas aves tienen un papel importante en la cadena alimentaria de los ecosistemas acuáticos al controlar las poblaciones de insectos acuáticos y pequeños peces."
                    },
                    {
                      "id": 10,
                      "info": "Adaptabilidad: La garcita verdosa es una especie adaptable que puede vivir en una variedad de hábitats acuáticos, lo que le permite prosperar en una amplia gama de condiciones ambientales."
                    },
                    ],
                  images:[
                      { id: 1, imagen: '../Entorno_dos/Hospot5/Foto1-ave7.jpg' },
                      { id: 2, imagen: '../Entorno_dos/Hospot5/Foto2-ave7.jpg' },
                  ]
              }
            },
            nexScene:{
                type: 'custom',
                pitch: 4.335649535245636,
                yaw: -170.55954540912236,
                cssClass: 'moveScene',
                scene: 'panoTree'
            }
        }
    },
    panoTree:{
      title:'Pozo azul ingreso al lago',
      image: "../Entorno_tres/pano_lago_posoazul.jpg",
      soundEscena: '../Entorno_tres/sonido_pano_lago_posoazul_out.mp3',
      pitch: -11,
      yaw: -3,
      hotSpot:{
        hostpot1:{
          id:1,
          type: 'custom',
          pitch: 12.555920341566372, 
          yaw: -136.0985069448331, 
          cssClass: 'hotSpotElement',
          icono:'../Entorno_tres/Hospot1/icono-ave8.png',
          media: {
              title:"Garcita Rayada",
              subTitle:"Butorides Striata 43 cm",
              imageIntial:"../Entorno_tres/Hospot1/foto_icono_-Ave8.jpg",
              dataCurious:[
                {
                    "id": 1,
                    "info": "Hábitos nocturnos: A diferencia de muchas garzas que son diurnas, el garza nocturna coroninegra es principalmente nocturno. Esto significa que es más activo durante las horas de la noche y el crepúsculo, cazando y alimentándose en la oscuridad."
                   },
                   {
                    "id": 2,
                    "info": "Plumaje distintivo: El garza nocturna coroninegra tiene un plumaje característico, con la parte superior de su cuerpo de color negro y la parte inferior de color blanco. Durante la temporada de reproducción, desarrolla plumas largas y delicadas en su cabeza que forman un penacho característico."
                   },
                   {
                    "id": 3,
                    "info": "Vuelo silencioso: Son conocidas por su vuelo silencioso. Esto se debe a que tienen plumaje especializado en sus alas que amortigua el ruido producido por el movimiento del aire al volar, lo que les permite acechar a sus presas sin ser detectados."
                   },
                   {
                    "id": 4,
                    "info": "Hábitat variado: El garza nocturna coroninegra habita en una variedad de hábitats acuáticos, como lagos, estanques, ríos, pantanos y humedales. Se puede encontrar en áreas tanto de agua dulce como salada."
                   },
                   {
                    "id": 5,
                    "info": "Comportamiento de caza paciente: Cuando cazan, se quedan inmóviles en el agua o en la vegetación cercana durante largos períodos de tiempo, esperando pacientemente a que las presas, como peces, ranas e insectos acuáticos, se acerquen lo suficiente para atraparlas rápidamente con su pico afilado."
                   },
                   {
                    "id": 6,
                    "info": "Vocalización nocturna: Durante la temporada de reproducción, emiten vocalizaciones nocturnas que suenan como \"croaks\" o \"graznidos\", lo que puede contribuir a su identificación durante la noche."
                   },
                   {
                    "id": 7,
                    "info": "Solitarias o en grupos pequeños: Aunque pueden ser solitarias, a menudo se pueden encontrar en grupos pequeños o colonias mixtas con otras aves acuáticas, especialmente durante la temporada de reproducción."
                   },
                   {
                    "id": 8,
                    "info": "Migración: Algunas poblaciones de garzas nocturnas coroninegras son migratorias y se desplazan hacia climas más cálidos durante el invierno, mientras que otras son residentes permanentes en sus áreas de reproducción."
                   },
                   {
                    "id": 9,
                    "info": "Cuidado parental: Ambos padres participan en la construcción del nido, la incubación de los huevos y la alimentación de los polluelos. Los nidos suelen estar ubicados en árboles o arbustos cerca del agua."
                   },
                   {
                    "id": 10,
                    "info": "Importancia ecológica: Estas aves desempeñan un papel importante en los ecosistemas acuáticos al ayudar a controlar las poblaciones de peces y otros organismos acuáticos, contribuyendo así al equilibrio de estos ecosistemas."
                   }
                ],
              images:[
                  { id: 1, imagen: '../Entorno_tres/Hospot1/Foto1-ave8.jpg' },
                  { id: 2, imagen: '../Entorno_tres/Hospot1/Foto2-ave8.jpg' },
              ]
          }
        },
        hostpot2:{
          id:2,
          type: 'custom',
          pitch: -23.66106067330814, 
          yaw: -67.72603856478779, 
          cssClass: 'hotSpotElement',
          icono:'../Entorno_tres/Hospot2/icono-ave9.png',
          media: {
              title:"Guaco Común",
              subTitle:"Nycticorax nycticiras 60 cm",
              imageIntial:"../Entorno_tres/Hospot2/Foto1-ave9.jpg",
              dataCurious:[
                {
                    "id": 1,
                    "info": "Tamaño compacto: La garcita bueyera es una de las garzas más pequeñas del mundo, con una longitud que suele estar entre 45 y 50 centímetros. Su tamaño compacto y su aspecto delicado la hacen fácil de identificar."
                   },
                   {
                    "id": 2,
                    "info": "Plumaje blanco: Su plumaje es predominantemente blanco, lo que le da un aspecto limpio y elegante. A menudo tiene una franja de color amarillo o naranja en la base de su cuello y patas amarillas."
                   },
                   {
                    "id": 3,
                    "info": "Pico recto y afilado: Tiene un pico recto y afilado que utiliza para atrapar insectos y pequeños organismos acuáticos, su principal fuente de alimento. Se alimenta acechando y picoteando en aguas poco profundas."
                   },
                   {
                    "id": 4,
                    "info": "Hábitat variado: La garcita bueyera puede encontrarse en diversos hábitats acuáticos, incluyendo lagos, estanques, ríos, manglares y marismas. Prefiere aguas poco profundas donde pueda buscar alimento fácilmente."
                   },
                   {
                    "id": 5,
                    "info": "Comportamiento de caza: Cuando cazan, se quedan inmóviles en el agua o se mueven lentamente, esperando a que los peces, ranas, insectos y otros organismos acuáticos se acerquen lo suficiente para atraparlos con su pico afilado."
                   },
                   {
                    "id": 6,
                    "info": "Vocalización suave: A diferencia de algunas garzas que son muy vocales, la garcita bueyera es generalmente silenciosa. Su vocalización es suave y suave en comparación con otras especies de garzas."
                   },
                   {
                    "id": 7,
                    "info": "Nidos en arbustos: Construyen sus nidos en arbustos o árboles cercanos al agua. Utilizan ramitas y otros materiales vegetales para la construcción del nido."
                   },
                   {
                    "id": 8,
                    "info": "Migración estacional: Algunas poblaciones de garcitas bueyeras son migratorias y se desplazan hacia climas más cálidos durante el invierno, mientras que otras son residentes permanentes en sus áreas de reproducción."
                   },
                   {
                    "id": 9,
                    "info": "Cortejo nupcial: Durante la temporada de reproducción, los machos pueden realizar exhibiciones de cortejo, como el estiramiento del cuello y la emisión de vocalizaciones suaves, para atraer a las hembras."
                   },
                   {
                    "id": 10,
                    "info": "Importancia ecológica: Estas aves desempeñan un papel importante en la cadena alimentaria de los ecosistemas acuáticos al ayudar a controlar las poblaciones de insectos acuáticos y pequeños peces."
                   },
                ],
              images:[
                  { id: 1, imagen: '../Entorno_tres/Hospot2/Foto1-ave9.jpg' }
              ]
          }
        },
        hostpot3:{
          id:3,
          type: 'custom',
          pitch: 1.7437421487148352, 
          yaw: -7.082878020573938, 
          cssClass: 'hotSpotElement',
          icono:'../Entorno_tres/Hospot3/icono-ave10.png',
          media: {
              title:"Garcita Bueyera",
              subTitle:"Bulbucus ibis 50cm",
              imageIntial:"../Entorno_tres/Hospot3/foto_icono_-Ave10.jpg",
              dataCurious:[
                {
                    "id": 1,
                    "info": "Vibrante plumaje verde y blanco: El martín pescador verde es conocido por su plumaje vibrante, que combina el verde brillante en la parte superior con el blanco en la parte inferior. Esta combinación de colores lo hace fácilmente reconocible."
                   },
                   {
                    "id": 2,
                    "info": "Pico largo y afilado: Tienen un pico largo y puntiagudo que utilizan para atrapar peces y otros organismos acuáticos. Son excelentes pescadores y pueden sumergirse en el agua para atrapar a sus presas."
                   },
                   {
                    "id": 3,
                    "info": "Hábitat acuático: Estas aves suelen habitar cerca de cuerpos de agua, como ríos, lagos, estanques, pantanos y manglares. Pasan mucho tiempo en la orilla del agua y utilizan perchas elevadas, como ramas o postes, para buscar presas y descansar."
                   },
                   {
                    "id": 4,
                    "info": "Vuelo rápido y directo: Los martin pescadores verdes son conocidos por su vuelo rápido y directo sobre la superficie del agua mientras buscan presas. Pueden lanzarse al agua desde el aire para atrapar peces."
                   },
                   {
                    "id": 5,
                    "info": "Comportamiento solitario o en pareja: Aunque pueden encontrarse solitarios, a menudo se les ve en parejas o grupos familiares durante la temporada de reproducción. Construyen nidos en agujeros de árboles o en barrancos."
                   },
                   {
                    "id": 6,
                    "info": "Vocalización ruidosa: A pesar de su aspecto tranquilo, emiten vocalizaciones ruidosas y estridentes, especialmente durante el vuelo o cuando se sienten amenazados."
                   },
                   {
                    "id": 7,
                    "info": "Importancia ecológica: Los martin pescadores verdes son depredadores importantes en los ecosistemas acuáticos, ayudando a controlar las poblaciones de peces y otros organismos acuáticos."
                   },
                   {
                    "id": 8,
                    "info": "Nidos en agujeros: Para anidar, excavan agujeros en pendientes de barrancos o en la tierra cerca del agua. Los nidos son generalmente poco profundos y pueden tener varios metros de longitud."
                   },
                   {
                    "id": 9,
                    "info": "Migración estacional: Algunas poblaciones de martin pescador verde son migratorias y se desplazan hacia climas más cálidos durante el invierno, mientras que otras son residentes permanentes en sus áreas de reproducción."
                   },
                   {
                    "id": 10,
                    "info": "Adaptabilidad: Estas aves son adaptables y se pueden encontrar en una variedad de hábitats acuáticos, desde áreas urbanas hasta selvas tropicales."
                   },
                ],
              images:[
                  { id: 1, imagen: '../Entorno_tres/Hospot3/Foto1-ave10.jpg' },
                  { id: 2, imagen: '../Entorno_tres/Hospot3/Foto2-ave10.jpg' },
                  { id: 3, imagen: '../Entorno_tres/Hospot3/Foto3-ave10.jpg' }
              ]
          }
        },
        hostpot4:{
          id:4,
          type: 'custom',
          pitch: -0.15423994566278607, 
          yaw: 88.99939091042097, 
          cssClass: 'hotSpotElement',
          icono:'../Entorno_tres/Hospot4/icono-ave11.png',
          media: {
              title:"Martín Pescador Chico",
              subTitle:"Chloroceryle Americana",
              imageIntial:"../Entorno_tres/Hospot4/foto_icono_-Ave11.jpg",
              dataCurious:[
                {
                    "id": 1,
                    "info": "Dimorfismo sexual: Los saíras-amarelas exhiben un marcado dimorfismo sexual en su plumaje. Los machos suelen tener un plumaje de color amarillo brillante en la parte superior y en las alas, con una cabeza negra y una máscara facial negra distintiva. Las hembras, en cambio, tienen un plumaje más apagado, con tonos de verde oliva en lugar de amarillo y carecen de la máscara negra."
                   },
                   {
                    "id": 2,
                    "info": "Canto melodioso: Los machos de saíra-amarela son conocidos por su canto melodioso y alegre. Emiten una serie de notas silbadas y melodiosas que a menudo se escuchan durante la temporada de reproducción. Su canto es una parte importante de su comportamiento de apareamiento y territorial."
                   },
                   {
                    "id": 3,
                    "info": "Hábitat variado: Estas aves pueden encontrarse en una variedad de hábitats, desde campos abiertos y pastizales hasta áreas agrícolas y jardines urbanos. Son adaptables y pueden vivir en diferentes entornos."
                   },
                   {
                    "id": 4,
                    "info": "Comportamiento gregario: Suelen formar bandadas pequeñas, especialmente fuera de la temporada de reproducción. Estas bandadas pueden incluir individuos de diferentes edades y sexos."
                   },
                   {
                    "id": 5,
                    "info": "Alimentación granívora: La dieta de los saíras-amarelas consiste principalmente en semillas y granos, como los de las plantas de la familia Asteraceae y Poaceae. También pueden consumir pequeños insectos en menor medida."
                   },
                   {
                    "id": 6,
                    "info": "Nidos en arbustos y árboles: Para anidar, construyen nidos en arbustos y árboles, generalmente a baja altura. Los nidos están hechos de hierba, tallos y fibras vegetales."
                   },
                   {
                    "id": 7,
                    "info": "Caza de insectos: Aunque su dieta principal es granívora, durante la temporada de reproducción, los saíras-amarelas complementan su alimentación con insectos para proporcionar una fuente de proteína a sus crías."
                   },
                   {
                    "id": 8,
                    "info": "Migración estacional: Algunas poblaciones de saíras-amarelas son migratorias y se desplazan en busca de condiciones climáticas más favorables y de alimento durante ciertas épocas del año."
                   },
                   {
                    "id": 9,
                    "info": "Aves apreciadas en avicultura: Debido a su colorido y canto agradable, los saíras-amarelas son apreciados en la avicultura y a menudo son mantenidos como mascotas en jaulas."
                   },
                   {
                    "id": 10,
                    "info": "Conservación: Aunque no se considera una especie en peligro de extinción, la degradación del hábitat debido a la expansión agrícola y urbana puede representar una amenaza para sus poblaciones en algunas áreas. La conservación de hábitats adecuados es importante para su supervivencia."
                   },
                ],
              images:[
                  { id: 1, imagen: '../Entorno_tres/Hospot4/foto_icono_-Ave11.jpg' }
              ]
          }
        },
        hostpot5:{
          id:5,
          type: 'custom',
          pitch: 3.90350697604291,
          yaw: 119.81794396731908, 
          cssClass: 'hotSpotElement',
          icono:'../Entorno_tres/Hospot5/icono-ave12.png',
          media: {
              title:"MSicalis Coronado",
              subTitle:"Sicalis Flaveola 14cm",
              imageIntial:"../Entorno_tres/Hospot5/Foto1-ave12.jpg",
              dataCurious:[
                {
                    "id": 1,
                    "info": "Dimorfismo sexual: Los batarás carcajada presentan un marcado dimorfismo sexual en su plumaje. Los machos tienen un plumaje negro brillante en la parte superior y un parche en forma de collar blanco en el cuello. Las hembras, por otro lado, tienen un plumaje de color marrón oscuro en la parte superior."
                   },
                   {
                    "id": 2,
                    "info": "Vocalización distintiva: Su nombre común \"carcajada\" proviene de su distintiva vocalización, que suena como una risa o una serie de risotadas. Estos llamados son utilizados para la comunicación territorial y pueden ser escuchados durante la temporada de reproducción."
                   },
                   {
                    "id": 3,
                    "info": "Comportamiento hormiguero: Al igual que otros miembros de la familia Thamnophilidae, los batarás carcajada son insectívoros especializados que se alimentan principalmente de hormigas y otros insectos. Utilizan sus fuertes picos para abrir el follaje y buscar insectos en el suelo."
                   },
                   {
                    "id": 4,
                    "info": "Hábitat variado: Se pueden encontrar en una variedad de hábitats, desde selvas tropicales y bosques secos hasta áreas de matorrales y sabanas. Prefieren áreas con vegetación densa donde puedan buscar insectos con facilidad."
                   },
                   {
                    "id": 5,
                    "info": "Vuelo bajo y rápido: Cuando están en búsqueda de presas, realizan vuelos bajos y rápidos entre la vegetación, capturando insectos en el aire o en el suelo."
                   },
                   {
                    "id": 6,
                    "info": "Nidos en ramas bajas: Construyen nidos en forma de cuenco en ramas bajas del dosel forestal, a menudo cerca de cursos de agua. Utilizan materiales como hojas y fibras vegetales para la construcción de los nidos."
                   },
                   {
                    "id": 7,
                    "info": "Colonias cooperativas: En algunas ocasiones, varias parejas de batarás carcajada pueden compartir territorios y cooperar en la defensa del mismo."
                   },
                   {
                    "id": 8,
                    "info": "Migración estacional: Algunas poblaciones de batarás carcajada son migratorias y se desplazan hacia climas más cálidos durante el invierno, mientras que otras son residentes permanentes en sus áreas de reproducción."
                   },
                   {
                    "id": 9,
                    "info": "Importancia ecológica: Estas aves desempeñan un papel importante en el control de poblaciones de insectos y en la salud de los ecosistemas, al ayudar a mantener bajo control las poblaciones de hormigas y otros insectos."
                   },
                   {
                    "id": 10,
                    "info": "Amenazas: Como muchas aves, los batarás carcajada enfrentan amenazas como la pérdida de hábitat debido a la deforestación y la fragmentación de sus áreas de distribución. La conservación de estos hábitats es esencial para su supervivencia."
                   },
                ],
              images:[
                  { id: 1, imagen: '../Entorno_tres/Hospot5/Foto2-ave12.jpg' },
                  { id: 2, imagen: '../Entorno_tres/Hospot5/Foto3-ave12.jpg' }
              ]
          }
        },
        nexScene:{
          type: 'custom',
          pitch: 4.335649535245636,
          yaw: -170.55954540912236,
          cssClass: 'moveScene',
          scene: 'panoFour'
       }

      }
    },
    panoFour:{
      title:'Girardot-Cundinamarca',
      image: "../Entorno_cuatro/pano_girardot_vista_Humedalelyulo.jpg",
      soundEscena: '../Entorno_cuatro/sonido4-entorno4.mp3',
      pitch: -11,
      yaw: -3,
      hotSpot:{
        hostpot1:{
          id:1,
          type: 'custom',
          pitch: 5.132092489518491,
          yaw: 18.19867595573513, 
          cssClass: 'hotSpotElement',
          icono:'../Entorno_cuatro/Hospot2/icono-cantera2.png',
          media: {
              title:"Cantera La Estrella Ricaurte",
              subTitle:"",
              imageIntial:"../Entorno_cuatro/Hospot2/foto_icono_ cantera2.png",
              dataCurious:[
                {
                    "id": 1,
                    "title":"Cantera La Estrella Ricaurte"
                }
            ],
              images:[
                  { id: 1, imagen: '../Entorno_cuatro/Hospot2/Foto1-cantera2.jpg' },
                  { id: 2, imagen: '../Entorno_cuatro/Hospot2/Foto2-cantera2.jpg' }
              ]
          }
        },
        
       nexScene:{
          type: 'custom',
          pitch: 6.123729651923993,
          yaw: -0.09383274781842443,
          cssClass: 'moveScene',
          scene: 'panoFive'
       }

      }
    },
    panoFive:{
      title:'Humedal el Yulo',
      image: "../Entorno_cinco/pano_humedalelyulo.jpg",
      soundEscena: '../Entorno_cinco/sonido5-entorno5.mp3',
      pitch: -11,
      yaw: -3,
      hotSpot:{
        hostpot1:{
          id:1,
          type: 'custom',
          pitch: -2.5307278217195353,
          yaw: 125.09901009507483, 
          cssClass: 'hotSpotElement',
          icono:'../Entorno_cinco/Hospot1/icono-ave13.png',
          media: {
              title:"Batará Barrado",
              subTitle:"Thamnophilus doliatus 16cm",
              imageIntial:"../Entorno_cinco/Hospot1/foto_icono_-Ave13.jpg",
              dataCurious:[
                {
                        "id": 1,
                        "info": "Dimorfismo sexual: Los lavandera piquinegra exhiben un marcado dimorfismo sexual en su plumaje. Los machos tienen una coloración predominante de color negro en la cabeza, la espalda y el pecho, con un parche blanco en la garganta. Las hembras, en cambio, tienen un plumaje más apagado y parduzco en general, con menos contraste que los machos."
                       },
                       {
                        "id": 2,
                        "info": "Hábitat acuático: Estas aves suelen habitar áreas cercanas al agua, como ríos, lagos, estanques, manglares y humedales. Se les puede encontrar en hábitats acuáticos tanto dulces como salados."
                       },
                       {
                        "id": 3,
                        "info": "Comportamiento activo: Los lavandera piquinegra son aves activas que se mueven constantemente en busca de alimento. Son conocidos por posarse en ramas bajas o cercanas al agua desde donde realizan vuelos cortos para atrapar insectos y otros invertebrados acuáticos."
                       },
                       {
                        "id": 4,
                        "info": "Vuelo bajo y rápido: Cuando cazan insectos en vuelo, realizan vuelos rápidos y bajos sobre la superficie del agua, lo que les permite atrapar presas con eficacia."
                       },
                       {
                        "id": 5,
                        "info": "Vocalización constante: Estas aves son conocidas por su vocalización constante, que consiste en una serie de llamadas agudas y repetitivas. Estas vocalizaciones son una parte importante de su comportamiento social y de comunicación."
                       },
                       {
                        "id": 6,
                        "info": "Nidos en agujeros: Para anidar, los lavandera piquinegra excavan agujeros en los bancos de los ríos o en barrancos. Los nidos suelen estar cerca del agua y están construidos con materiales como hojas y plumas."
                       },
                       {
                        "id": 7,
                        "info": "Colonias comunales: A veces, se pueden encontrar en colonias comunales de anidación junto con otras aves acuáticas, como garzas y cormoranes."
                       },
                       {
                        "id": 8,
                        "info": "Alimentación variada: Aunque su dieta principal consiste en insectos y otros invertebrados acuáticos, también pueden consumir pequeños peces, crustáceos y larvas de insectos, dependiendo de la disponibilidad de alimentos en su hábitat."
                       },
                       {
                        "id": 9,
                        "info": "Migración estacional: Algunas poblaciones de lavandera piquinegra son migratorias y se desplazan hacia climas más cálidos durante el invierno, mientras que otras son residentes permanentes en sus áreas de reproducción."
                       },
                       {
                        "id": 10,
                        "info": "Importancia ecológica: Estas aves desempeñan un papel importante en la cadena alimentaria de los ecosistemas acuáticos al ayudar a controlar las poblaciones de insectos y otros invertebrados, lo que contribuye al equilibrio ecológico en sus hábitats."
                       },
            ],
              images:[
                  { id: 1, imagen: '../Entorno_cinco/Hospot1/Foto1-ave13.jpg' },
                  { id: 2, imagen: '../Entorno_cuatro/Hospot2/Foto2-ave13.jpg' }
              ]
          }
        },
        hostpot2:{
          id:2,
          type: 'custom',
          pitch: -34.72083053537736,
          yaw: -11.79079476962033, 
          cssClass: 'hotSpotElement',
          icono:'../Entorno_cinco/Hospot2/icono-ave14.png',
          media: {
              title:"Viudita Común",
              subTitle:"Fluvicola pica 13cm",
              imageIntial:"../Entorno_cinco/Hospot2/foto_icono_-Ave14.jpg",
              dataCurious:[
                {
                    "id": 1,
                    "info": "Aspecto discreto: El hormiguerito gris es un ave pequeña y discreta, con un plumaje de tonos grises que le permite camuflarse eficazmente en su entorno. Esto lo hace difícil de detectar en su hábitat natural."
                   },
                   {
                    "id": 2,
                    "info": "Hábitat especializado: Suelen habitar en selvas tropicales y subtropicales, así como en zonas de bosque húmedo, donde se alimentan principalmente de hormigas y otros insectos que encuentran en el suelo."
                   },
                   {
                    "id": 3,
                    "info": "Comportamiento de forrajeo: Para encontrar su alimento, estos pájaros realizan un comportamiento conocido como \"zarcilleo\", que consiste en saltar y picotear rápidamente en la hojarasca del suelo en busca de insectos. Su dieta se compone principalmente de hormigas, lo que le valió su nombre común."
                   },
                   {
                    "id": 4,
                    "info": "Vuelo bajo y rápido: El hormiguerito gris realiza vuelos cortos y rápidos entre los arbustos y la vegetación baja, donde encuentra su alimento. Rara vez se le observa en vuelos largos o elevados."
                   },
                   {
                    "id": 5,
                    "info": "Nidos en forma de taza: Para anidar, construyen nidos en forma de taza en la vegetación baja. Utilizan materiales como hojas, tallos y fibras vegetales en la construcción de sus nidos."
                   },
                   {
                    "id": 6,
                    "info": "Canto discreto: Aunque son más conocidos por su comportamiento de forrajeo y camuflaje que por su canto, emiten vocalizaciones suaves y discretas en su hábitat natural. Estas vocalizaciones pueden incluir gorjeos y trinos."
                   },
                   {
                    "id": 7,
                    "info": "Sociabilidad: A menudo, se les encuentra en pares o en grupos familiares durante la temporada de reproducción, pero también pueden unirse a bandadas mixtas de otras especies de aves en busca de alimento."
                   },
                   {
                    "id": 8,
                    "info": "Amenazas: La degradación y la pérdida de hábitat debido a la deforestación y la expansión agrícola son amenazas significativas para las poblaciones de hormiguerito gris en algunas áreas. La conservación de sus hábitats es esencial para su supervivencia."
                   },
                   {
                    "id": 9,
                    "info": "Estado de conservación: Aunque no se considera una especie en peligro de extinción en general, la disminución de su hábitat ha llevado a que algunas poblaciones locales estén en riesgo. Algunos esfuerzos de conservación se centran en proteger las áreas donde habita."
                   },
            ],
              images:[
                  { id: 1, imagen: '../Entorno_cinco/Hospot2/Foto1-ave14.jpg' },
                  { id: 2, imagen: '../Entorno_cuatro/Hospot2/Foto2-ave14.jpg' }
              ]
          }
        },
        hostpot3:{
          id:3,
          type: 'custom',
          pitch: 17.953825209166933,
          yaw: -145.04302570290358, 
          cssClass: 'hotSpotElement',
          icono:'../Entorno_cinco/Hospot3/icono-ave15.png',
          media: {
              title:"Hormiguerito pechinegro",
              subTitle:"Formicivora grisea 12.5cm",
              imageIntial:"../Entorno_cinco/Hospot3/foto_icono_-Ave15.jpg",
              dataCurious:[
                {
                  "id": 1,
                  "info": "Apariencia inusual: El mirasol tiene una apariencia única y distintiva. Su plumaje es principalmente de color pardo o marrón oscuro, con una corona de plumas negras en la cabeza y un llamativo ojo amarillo brillante. Su aspecto general se asemeja a una cucaracha, lo que le ha valido el nombre de \"cucarachero\" en algunos lugares."
                 },
                 {
                  "id": 2,
                  "info": "Hábitat de humedales: Este pájaro suele habitar en áreas de humedales, como pantanos, lagunas, ríos y estanques. Prefiere hábitats con vegetación densa y acuática."
                 },
                 {
                  "id": 3,
                  "info": "Comportamiento territorial: Los mirasoles son conocidos por su comportamiento territorial. Los machos suelen cantar desde perchas prominentes en su territorio para advertir a otros machos que se mantengan alejados."
                 },
                 {
                  "id": 4,
                  "info": "Canto melodioso y variado: Los mirasoles son reconocidos por su canto melodioso y complejo, que incluye una amplia variedad de sonidos, como gorjeos, silbidos, chirridos y trinos. Su canto es una parte importante de su comportamiento de apareamiento y territorial."
                 },
                 {
                  "id": 5,
                  "info": "Construcción de nidos elaborados: Para anidar, construyen nidos de forma esférica que cuelgan sobre el agua o se ubican en áreas cercanas a ella. Estos nidos son elaborados y a menudo construidos con materiales vegetales tejidos con gran habilidad."
                 },
                 {
                  "id": 6,
                  "info": "Alimentación variada: La dieta de los mirasoles es diversa y consiste en insectos, arañas, pequeños crustáceos, peces, ranas y otros invertebrados acuáticos. También pueden consumir algunas semillas y frutas."
                 },
                 {
                  "id": 7,
                  "info": "Comportamiento cooperativo: En ocasiones, varias parejas de mirasoles pueden cooperar en la construcción de nidos y cuidado de las crías, lo que es un ejemplo de comportamiento social y colaborativo."
                 },
                 {
                  "id": 8,
                  "info": "Vuelo bajo y ágil: Cuando cazan insectos en vuelo, realizan vuelos bajos y rápidos sobre la superficie del agua, lo que les permite atrapar presas con eficacia."
                 },
                 {
                  "id": 9,
                  "info": "Migración estacional: Algunas poblaciones de mirasoles son migratorias y se desplazan hacia climas más cálidos durante el invierno, mientras que otras son residentes permanentes en sus áreas de reproducción."
                 },
                 {
                  "id": 10,
                  "info": "Importancia ecológica: Los mirasoles desempeñan un papel importante en los ecosistemas de humedales, ya que ayudan a controlar las poblaciones de insectos acuáticos y contribuyen a la cadena alimentaria al ser presa de aves rapaces y reptiles."
                 },
            ],
              images:[
                  { id: 1, imagen: '../Entorno_cinco/Hospot3/foto_icono_-Ave15.jpg' },
              ]
          }
        },
        hostpot4:{
          id:4,
          type: 'custom',
          pitch: 55.05532124603006,
          yaw: 123.19018382110167, 
          cssClass: 'hotSpotElement',
          icono:'../Entorno_cinco/Hospot4/icono-ave16.png',
          media: {
              title:"Colibrí de Buffon",
              subTitle:"Chalybura Buffonii 10cm",
              imageIntial:"../Entorno_cinco/Hospot4/foto_icono_Ave16.jpg",
              dataCurious:[
                {
                    "id": 1,
                    "info": "Plumaje iridiscente: El colibrí Buffon es conocido por su plumaje iridiscente de colores brillantes, que cambian de tonalidad dependiendo del ángulo de la luz. Puede mostrar una variedad de colores, incluyendo verde, azul, púrpura y turquesa."
                   },
                   {
                    "id": 2,
                    "info": "Dimorfismo sexual: Al igual que muchos colibríes, esta especie exhibe dimorfismo sexual en su plumaje. Los machos tienden a tener colores más brillantes y llamativos, mientras que las hembras suelen tener un plumaje más apagado."
                   },
                   {
                    "id": 3,
                    "info": "Pico largo y delgado: Tienen un pico largo y delgado que utilizan para alimentarse del néctar de las flores. Su lengua es tubular y les permite extraer el néctar de manera eficiente."
                   },
                   {
                    "id": 4,
                    "info": "Comportamiento territorial: Los machos suelen ser territoriales y pueden defender agresivamente sus fuentes de alimento y territorio de otros machos. Esto puede resultar en disputas aéreas y exhibiciones de vuelo."
                   },
                   {
                    "id": 5,
                    "info": "Vuelo rápido y ágil: Son aves extremadamente ágiles en vuelo y pueden moverse en cualquier dirección, incluso volar hacia atrás. Esto les permite acceder a las flores y atrapar insectos en el aire con facilidad."
                   },
                   {
                    "id": 6,
                    "info": "Alimentación: Además de alimentarse del néctar de las flores, también consumen pequeños insectos y arañas para obtener proteínas esenciales en su dieta."
                   },
                   {
                    "id": 7,
                    "info": "Nidos en árboles: Para anidar, construyen pequeños nidos en forma de taza en las ramas de los árboles. Los nidos están hechos de materiales como fibras vegetales y telarañas."
                   },
                   {
                    "id": 8,
                    "info": "Migración estacional: Algunas poblaciones de colibrí Buffon son migratorias y se desplazan hacia climas más cálidos durante ciertas épocas del año en busca de mejores condiciones climáticas y fuentes de alimento."
                   },
                   {
                    "id": 9,
                    "info": "Importancia en la polinización: Estas aves desempeñan un papel crucial en la polinización de muchas especies de plantas a medida que buscan néctar en las flores y transportan polen de una flor a otra."
                   },
                   {
                    "id": 10,
                    "info": "Amenazas y conservación: La pérdida de hábitat debido a la deforestación y la degradación de su entorno es una amenaza significativa para las poblaciones de colibrí Buffon. La conservación de los bosques y áreas naturales es esencial para su supervivencia."
                   }
            ],
              images:[
                  { id: 1, imagen: '../Entorno_cinco/Hospot4/Foto1-ave16.jpg' },
                  { id: 2, imagen: '../Entorno_cinco/Hospot4/Foto2-ave16.jpg' },
              ]
          }
        },
        hostpot5:{
          id:5,
          type: 'custom',
          pitch: -6.032670431493295,
          yaw: 19.309452456108495, 
          cssClass: 'hotSpotElement',
          icono:'../Entorno_cinco/Hospot5/icono-ave17.png',
          media: {
              title:"Sinsonte lagunero",
              subTitle:"Donacobius atricapilla 20cm",
              imageIntial:"../Entorno_cinco/Hospot5/foto_icono_Ave17.jpg",
              dataCurious:[
                {
                    "id": 1,
                    "info": "Apariencia inusual: El mirasol tiene una apariencia única y distintiva. Su plumaje es principalmente de color pardo o marrón oscuro, con una corona de plumas negras en la cabeza y un llamativo ojo amarillo brillante. Su aspecto general se asemeja a una cucaracha, lo que le ha valido el nombre de \"cucarachero\" en algunos lugares."
                   },
                   {
                    "id": 2,
                    "info": "Hábitat de humedales: Este pájaro suele habitar en áreas de humedales, como pantanos, lagunas, ríos y estanques. Prefiere hábitats con vegetación densa y acuática."
                   },
                   {
                    "id": 3,
                    "info": "Comportamiento territorial: Los mirasoles son conocidos por su comportamiento territorial. Los machos suelen cantar desde perchas prominentes en su territorio para advertir a otros machos que se mantengan alejados."
                   },
                   {
                    "id": 4,
                    "info": "Canto melodioso y variado: Los mirasoles son reconocidos por su canto melodioso y complejo, que incluye una amplia variedad de sonidos, como gorjeos, silbidos, chirridos y trinos. Su canto es una parte importante de su comportamiento de apareamiento y territorial."
                   },
                   {
                    "id": 5,
                    "info": "Construcción de nidos elaborados: Para anidar, construyen nidos de forma esférica que cuelgan sobre el agua o se ubican en áreas cercanas a ella. Estos nidos son elaborados y a menudo construidos con materiales vegetales tejidos con gran habilidad."
                   },
                   {
                    "id": 6,
                    "info": "Alimentación variada: La dieta de los mirasoles es diversa y consiste en insectos, arañas, pequeños crustáceos, peces, ranas y otros invertebrados acuáticos. También pueden consumir algunas semillas y frutas."
                   },
                   {
                    "id": 7,
                    "info": "Comportamiento cooperativo: En ocasiones, varias parejas de mirasoles pueden cooperar en la construcción de nidos y cuidado de las crías, lo que es un ejemplo de comportamiento social y colaborativo."
                   },
                   {
                    "id": 8,
                    "info": "Vuelo bajo y ágil: Cuando cazan insectos en vuelo, realizan vuelos bajos y rápidos sobre la superficie del agua, lo que les permite atrapar presas con eficacia."
                   },
                   {
                    "id": 9,
                    "info": "Migración estacional: Algunas poblaciones de mirasoles son migratorias y se desplazan hacia climas más cálidos durante el invierno, mientras que otras son residentes permanentes en sus áreas de reproducción."
                   },
                   {
                    "id": 10,
                    "info": "Importancia ecológica: Los mirasoles desempeñan un papel importante en los ecosistemas de humedales, ya que ayudan a controlar las poblaciones de insectos acuáticos y contribuyen a la cadena alimentaria al ser presa de aves rapaces y reptiles."
                   },
            ],
              images:[
                  { id: 1, imagen: '../Entorno_cinco/Hospot5/Foto1-ave17.jpg' }
              ]
          }
        },

       nexScene:{
          type: 'custom',
          pitch: 4.335649535245636,
          yaw: -170.55954540912236,
          cssClass: 'moveScene',
          scene: 'panoSix'
       }

      }
    },
    panoSix:{
      title:'Humedal el Yulo',
      image: "../Entorno_seis/pano_bosqueseco_humedalelyulo.jpg",
      soundEscena: '../Entorno_seis/sonido6_entorno6.mp3',
      pitch: -11,
      yaw: -3,
      hotSpot:{
        hostpot1:{
          id:1,
          type: 'custom',
          pitch: 51.12155174206732,
          yaw: 67.07763203328717, 
          cssClass: 'hotSpotElement',
          icono:'../Entorno_seis/Hospot1/icono-ave18.png',
          media: {
              title:"Gabilan Caminero",
              subTitle:"Rupornis Magnirostris",
              imageIntial:"../Entorno_seis/Hospot1/foto_icono_Ave18.jpg",
              dataCurious:[
                {
                    "id": 1,
                    "info": "Tamaño mediano: El gavilán caracolero es un ave rapaz de tamaño mediano, con una longitud promedio de unos 35 a 40 centímetros y una envergadura alar de aproximadamente 80 centímetros. Los machos suelen ser ligeramente más pequeños que las hembras."
                   },
                   {
                    "id": 2,
                    "info": "Plumaje variado: Tienen un plumaje variable en su apariencia, lo que ha llevado a una diversidad de subespecies reconocidas. Generalmente, el plumaje es de color marrón oscuro en la parte superior y blanco en la parte inferior, con rayas oscuras en el pecho y un collar blanco distintivo."
                   },
                   {
                    "id": 3,
                    "info": "Pico especializado: El gavilán caracolero ha desarrollado un pico fuerte y curvado que le permite abrir y alimentarse de caracoles terrestres y otros invertebrados con caparazón. Su habilidad para abrir los caracoles es una característica única en el reino animal."
                   },
                   {
                    "id": 4,
                    "info": "Alimentación especializada: Su dieta principal consiste en caracoles terrestres, pero también pueden consumir otros invertebrados con caparazón, como cangrejos de río y escarabajos. Para acceder a la carne de los caracoles, golpean y rompen las conchas con su pico."
                   },
                   {
                    "id": 5,
                    "info": "Comportamiento de caza: Los gavilanes caracoleros suelen cazar desde una percha elevada, como un árbol o un poste, y escanean el suelo en busca de presas potenciales. Cuando localizan un caracol, descienden y lo atrapan con sus garras."
                   },
                   {
                    "id": 6,
                    "info": "Vuelo ágil: Son aves rapaces ágiles en vuelo y pueden realizar maniobras precisas cuando cazan. Sus alas largas y puntiagudas les permiten realizar vuelos rápidos y capturas eficientes."
                   },
                   {
                    "id": 7,
                    "info": "Vocalización: Emiten una variedad de vocalizaciones, que incluyen chillidos y silbidos, especialmente durante la temporada de reproducción. Estas vocalizaciones se utilizan para la comunicación entre individuos."
                   },
                   {
                    "id": 8,
                    "info": "Anidación en árboles: Para anidar, construyen nidos en árboles altos, generalmente cerca del dosel del bosque. Los nidos están hechos de ramas y pueden ser reutilizados en años sucesivos."
                   },
                   {
                    "id": 9,
                    "info": "Distribución geográfica: Se encuentran en una amplia gama de hábitats, desde selvas tropicales hasta zonas semiáridas, y se distribuyen desde el sur de México hasta Argentina."
                   },
                   {
                    "id": 10,
                    "info": "Conservación: Aunque no se considera una especie en peligro de extinción en general, algunas poblaciones de gavilanes caracoleros pueden verse amenazadas por la pérdida de hábitat debido a la deforestación y la expansión agrícola. La conservación de sus hábitats es esencial para garantizar su supervivencia."
                   },
            ],
              images:[
                  { id: 1, imagen: '../Entorno_seis/Hospot1/Foto1-ave18.jpg' },
                  { id: 2, imagen: '../Entorno_seis/Hospot1/Foto2-ave18.jpg' }
              ]
          }
        },

       nexScene:{
          type: 'custom',
          pitch: 4.335649535245636,
          yaw: -170.55954540912236,
          cssClass: 'moveScene',
          scene: 'panoTree'
       }

      }
    }
}

//Pitch: 6.123729651923993, Yaw: -0.09383274781842443

export default Scenes;