// src/data/precios.js
export const platos = {
    //ENTRANTES
    vieiras: {
        precio: "17.80",
        foto: "vieiras.jpg",
        alergenos: ["moluscos", "gluten"],
        nombres:{
            es: "Vieiras",
            en: "Scallops",
            fr: "Noix de Saint-Jacques",
            de: "Jakobsmuscheln",
            it: "Capesante",
        },
        descripciones: {
            es: "Del pacífico Gratinadas al horno de leña | 7 unidades",
            en: "Pacific scallops gratinéed in wood-fired oven | 7 units",
            fr: "Du Pacifique gratinées au four à bois | 7 unités",
            de: "Pazifische Jakobsmuscheln gratiniert im Holzofen. | 7 Stück",
            it: "Del Pacifico gratinate nel forno a legna| 7 unità",
    },
    },

    pastel: {
        precio: "12.80",
        foto: "pastel.jpg",
        alergenos: ["lacteos", "huevos", "crustaceos"],
        nombres:{
            es: "Pastel",
            en: "Seafood Cake  ",
            fr: "Terrine de la Mer",
            de: "Meeresfrüchte-Pastete ",
            it: "Tortino di Mare",
        },
        descripciones: {
            es: "De Centollo y Gambas con ensalada de tomate y queso fresco",
            en: "Spider crab and prawn cake with tomato and fresh cheese salad.",
            fr: "D'araignée de mer et crevettes avec salade de tomates et fromage frais. ",
            de: "Aus Seespinne und Garnelen mit Tomaten-Frischkäse-Salat.",
            it: "Di granseola e gamberi con insalata di pomodori e formaggio fresco.",
    },

    },
    cecina: {
        precio: "17.50",
        foto: "cecina.jpg",
        alergenos: ["lacteos"],
        nombres:{
            es: "Cecina",
            en: "Cecina",
            fr: "Cecina",
            de: "Cecina",
            it: "Cecina",
        },
        descripciones: {
            es: "De León con queso curado y ensalada",
            en: "León cured beef with aged cheese and salad",
            fr: "Bœuf séché de León avec fromage affiné et salade.",
            de: "Rinderschinken aus León mit gereiftem Käse und Salat.",
            it: "Manzo stagionato di León con formaggio stagionato e insalata.",
    },
    },
    langostinos: {
        precio: "16.80",
        foto: "langostinos.jpg",
        alergenos: ["crustaceos", "gluten"],
       nombres:{
            es: "Langostinos",
            en: "Prawns",
            fr: "Crevettes ",
            de: "Garnelen",
            it: "Mazzancolle",
        },
        descripciones: {
            es: "Crujientes Kataifi con guacamole y salsa Ali-oli | 8 unidades",
            en: "Crispy Kataifi prawns with guacamole and Ali-oli sauce | 8 units",
            fr: "Crevettes croustillantes Kataifi avec guacamole et sauce Ali-oli | 8 unités ",
            de: "Knusprige Kataifi-Garnelen mit Guacamole und Ali-oli-Sauce | 8 Stück",
            it: "Croccanti Kataifi con guacamole e salsa Ali-oli | 8 unità",
    },
    },

    empanada: {
        precio: "10.90",
        foto: "empanada.jpg",
        desc_es: "Casera de Atún | 6 unidades",
        alergenos: ["lacteos", "moluscos", "huevos", "gluten"],
        nombres:{
            es: "Empanada casera",
            en: "Empanada",
            fr: "Empanada",
            de: "Hausgemachte Empanada",
            it: "Empanada Fatta in Casa",
        },
        descripciones: {
            es: "Casera de Atún | 6 unidades",
            en: "Homemade tuna | 6 units",
            fr: "Chausson maison au thon | 6 unités ",
            de: "Hausgemachte Thunfisch-Pastete | 6 Stück",
            it: "Fatta in casa al tonno | 6 unità",
    },
    },

    foie: {
        precio: "14.80",
        foto: "foie.jpg",
        alergenos: ["gluten", "sulfitos"],
        nombres:{
            es: "Foie Grass de Pato",
            en: "Duck Foie Gras",
            fr: "Foie Gras de Canard",
            de: "Entenleberpastete",
            it: "Foie Gras d'Anatra"
        },
        descripciones: {
            es: "Con aceite de moras",
            en: "With blackberry oil",
            fr: "À l'huile de mûres",
            de: "Mit Brombeeröl",
            it: "Con olio di more",
    },
    },

    navajas: {
        precio: "15.80",
        foto: "navajas.jpg",
        alergenos: ["moluscos"],
        nombres:{
            es: "Navajas",
            en: "Razor Clams",
            fr: "Couteaux",
            de: "Schwertmuscheln",
            it: "Cannolicchi",
        },
        descripciones: {
            es: "Al horno de leña | 8 unidades",
            en: "Baked in a wood-fired oven | 8 units",
            fr: "Au four à bois. | 8 unités ",
            de: "Im Holzofen gebacken | 8 Stück",
            it: "Al forno a legna | 8 unità",
    },
    },

     croquetas: {
        precio: "11.80",
        foto: "croquetas.jpg",
        alergenos: ["gluten", "huevos", "lacteos"],

    nombres:{
            es: "Croquetas",
            en: "Croquettes",
            fr: "Croquettes",
            de: "Kroketten",
            it: "Crocchette",
        },
        descripciones: {
            es: "De Jamón con patatas paja | 6 unidades",
            en: "Ham croquettes with shoestring fries | 6 units",
            fr: "Croquettes de jambon avec pommes paille | 6 unités",
            de: "Schinkenkroketten mit Strohkartoffeln | 6 Stück",
            it: "Di prosciutto con patatine paglia | 6 unità",
    },
    },

    // === MARISCOS ===
    arrozNegro: {
        precio: "24.50",
        foto: "arroz_negro.jpg",
        alergenos: ["pescado", "crustaceos", "moluscos"],
        nombres:{
            es: "Arroz Negro",
            en: "Black Rice",
            fr: "Riz Noir",
            de: "Schwarzer Reis",
            it: "Riso Nero"
        },
        descripciones: {
            es: "Con Calamares de la Ría, Atún, Almejas y Langostinos",
            en: "With local squid, tuna, clams, and prawns.",
            fr: "Aux calamars locaux, thon, palourdes et crevettes.",
            de: "Mit Tintenfisch, Thunfisch, Muscheln und Garnelen",
            it: "Con calamari locali, tonno, vongole e mazzancolle"
    },
    },

    arrozBogavante: {
        precio: "29.80",
        foto: "arroz_bogavante.jpg",
        alergenos: ["pescado", "crustaceos", "moluscos"],
        nombres:{
            es: "Arroz Bogavante",
            en: "Lobster Rice",
            fr: "Riz au Homard",
            de: "Hummer-Reis",
            it: "Riso all'Astice"
        },
        descripciones: {
            es: "Con Almejas y colas de Langostino",
            en: "With clams and prawn tails",
            fr: "Aux palourdes et queues de crevettes",
            de: "Mit Muscheln und Garnelenschwänzen",
            it: "Con vongole e code di mazzancolle."
    },
    },

    arrozMarineiro: {
        precio: "21.00",
        foto: "arroz_marineiro.jpg",
        alergenos: ["pescado", "crustaceos", "moluscos"],
        nombres:{
            es: "Arroz Marinero",
            en: "Seafood Rice",
            fr: "Riz 'Mariñeiro'",
            de: "Meeresfrüchte-Reis",
            it: "Riso alla Marinara"
        },
        descripciones: {
            es: "Con Marisco variado",
            en: "With assorted shellfish",
            fr: "Aux fruits de mer variés.",
            de: "Mit verschiedenen Meeresfrüchten",
            it: "Con frutti di mare assortiti."
    },
    },

    fidegua: {
        precio: "21.00",
        foto: "fidegua.jpg",
        alergenos: ["pescado", "crustaceos", "moluscos", "gluten"],
        nombres:{
            es: "Fidegua de Marisco",
            en: "Seafood Fideguá",
            fr: "Fideguá de Fruits de Mer",
            de: "Meeresfrüchte-Fideguá",
            it: "Fideguá di Mare"
        },
        descripciones: {
            es: "Con Marisco variado",
            en: "Traditional noodle paella with assorted shellfish.",
            fr: "Fines nouilles aux fruits de mer variés.",
            de: "Traditionelle Nudelpfanne mit Meeresfrüchten.",
            it: "Pasta corta tradizionale con frutti di mare assortiti."
    },
    },

    // === CARNES ===
    cochinillo: {
        precio: "22.50",
        foto: "cochinillo.jpg",
        alergenos: [],
       nombres:{
            es: "Cochinillo",
            en: "Suckling Pig",
            fr: "Cochon de Lait",
            de: "Spanferkel",
            it: "Maialino da Latte"
        },
        descripciones: {
            es: "Segoviano asado al horno de leña",
            en: "Segovian style, roasted in a wood-fired oven",
            fr: "Style Segoviano rôti au four à bois.",
            de: "Nach Segovia-Art im Holzofen gebraten",
            it: "In stile segoviano arrostito nel forno a legna"
    },
    },

    solomillo: {
        precio: "21.80",
        foto: "solomillo.jpg",
        desc_es: "De ternera al horno de leña con guarnición patatas",
        alergenos: [],
        nombres:{
            es: "Solomillo",
            en: "Beef Tenderloin",
            fr: "Filet de Bœuf",
            de: "Rinderfilet",
            it: "Filetto di vitello al forno a legna con contorno di patate"
        },
        descripciones: {
            es: "De ternera al horno de leña con guarnición patatas",
            en: "Veal tenderloin roasted in a wood-fired oven with potato garnish.",
            fr: "Filet de veau au four à bois avec garniture de pommes de terre.",
            de: "Kalbsfilet aus dem Holzofen mit Kartoffelbeilage.",
            it: "Filetto di Manzo"
    },
    },

    solomilloRoquefort: {
        precio: "22.50",
        foto: "solomillo_roquefort.jpg",
        alergenos: ["lacteos"],
       nombres:{
            es: "Solomillo Roquefort",
            en: "Roquefort Tenderloin",
            fr: "Filet au Roquefort",
            de: "Filet mit Roquefort",
            it: "Filetto al Roquefort"
        },
        descripciones: {
            es: "De ternera en salsa Roquefort",
            en: "Veal tenderloin in Roquefort cheese sauce.",
            fr: "Filet de veau avec sauce au fromage Roquefort.",
            de: "Kalbsfilet in Roquefort-Käsesauce.",
            it: "Filetto di vitello in salsa di formaggio Roquefort."
    },
    },

    entrecot: {
        precio: "19.80",
        foto: "entrecot.jpg",
        alergenos: ["lacteos", "gluten"],
        nombres:{
            es: "Entrecot",
            en: "Entrecôte",
            fr: "Entrecôte",
            de: "Entrecôte",
            it: "Entrecôte"
        },
        descripciones: {
            es: "De ternera a la brasa o con salsa de setas",
            en: "Grilled veal or with mushroom sauce.",
            fr: "Veau grillé ou avec sauce aux champignons.",
            de: "Gegrilltes Kalbfleisch oder mit Pilzsauce.",
            it: "Vitello alla brace o con salsa ai funghi."
    },
    },
    // === PESCADOS ===
    rapeSugerencia: {
        precio: "22.50",
        foto: "rape.jpg",
        alergenos: ["pescado", "crustaceos", "moluscos"],
        nombres:{
            es: "Rape",
            en: "Monkfish",
            fr: "Lotte",
            de: "Seeteufel",
            it: "Rana Pescatrice"
        },
        descripciones: {
            es: "En Salsa de Marisco con almejas de la ría.",
            en: "In seafood sauce with local clams.",
            fr: "À la sauce aux fruits de mer avec des palourdes locales.",
            de: "In Meeresfrüchtesauce mit lokalen Venusmuscheln.",
            it: "In salsa di mare con vongole locali."
    },
    },

    lubinaSugerencia: {
        precio: "22.00",
        foto: "lubina.jpg",
        alergenos: ["pescado"],
        nombres:{
            es: "Lubina",
            en: "Sea Bass",
            fr: "Bar",
            de: "Wolfsbarsch",
            it: "Branzino"
        },
        descripciones: {
            es: "Salvaje en horno de leña",
            en: "Wild sea bass roasted in a wood-fired oven.",
            fr: "Bar sauvage au four à bois.",
            de: "Wilder Wolfsbarsch aus dem Holzofen.",
            it: "Branzino selvaggio al forno a legna."
    },
    },

    bacalaoManzanos: {
        precio: "21.80",
        foto: "bacalao_manzanos.jpg",
        alergenos: ["pescado"],
        nombres:{
            es: "Bacalao 'Manzanos'",
            en: "Cod 'Manzanos'",
            fr: "Morue 'Manzanos'",
            de: "Kabeljau 'Manzanos'",
            it: "Baccalà 'Manzanos'"
        },
        descripciones: {
            es: "Al horno con patata panadera",
            en: "Baked in the oven with sliced 'panadera' potatoes.",
            fr: "Cuite au four avec pommes de terre 'panadera'",
            de: "Im Ofen gebacken mit 'Panadera'-Kartoffeln.",
            it: "Al forno con patate 'panadera'."
    },
    },

    bacalaoDourado: {
        precio: "14.50",
        foto: "bacalao_dourado.jpg",
        alergenos: ["pescado", "huevos"],
        nombres:{
            es: "Bacalao 'Dourado'",
            en: "Cod 'Dourado'",
            fr: "Morue 'Dourado'",
            de: "Kabeljau 'Dourado'",
            it: "Baccalà 'Dourado'"
        },
        descripciones: {
            es: "Revuelto de bacalao cebolla y huevo",
            en: "Scrambled eggs with cod and onions.",
            fr: "Brouillade de morue, oignons et œufs.",
            de: "Rührei mit Kabeljau und Zwiebeln.",
            it: "Uova strapazzate con baccalà e cipolle."
    },
    },

    // === PIZZAS ===
    pizzaMargarita: {
        precio: "12.90",
        foto: "pizza_margarita.jpg",
        alergenos: ["gluten", "lacteos"],
        nombres:{
            es: "Pizza Margarita",
            en: "Pizza Margarita",
            fr: "Pizza Margarita",
            de: "Pizza Margarita",
            it: "Pizza Margarita",
         },
         descripciones: {
            es: "Aceitunas negras y orégano",
            en: "Black olives and oregano",
            fr: "Olives noires et origan",
            de: "Schwarze Oliven und Oregano.",
            it: "Olive nere e origano."
    },
    },
    pizzaMixta: {
        precio: "13.90",
        foto: "mixta.jpg",
        alergenos: ["gluten", "lacteos"],
         nombres:{
            es: "Pizza Mixta",
            en: "Pizza Mixta",
            fr: "Pizza Mixta",
            de: "Pizza Mixta",
            it: "Pizza Mixta",
         },
         descripciones: {
            es: "Aceitunas negras y jamón",
            en: "Black olives and ham",
            fr: "Olives noires et jambon",
            de: "Schwarze Oliven und Schinken.",
            it: "Olive nere e prosciutto."
    },
    },
    pizzaCaprichosa: {
        precio: "14.80",
        foto: "caprichosa.jpg",
        alergenos: ["gluten", "lacteos"],
         nombres:{
            es: "Pizza Caprichosa",
            en: "Pizza Caprichosa",
            fr: "Pizza Caprichosa",
            de: "Pizza Caprichosa",
            it: "Pizza Caprichosa",
         },
         descripciones: {
            es: "Bacon y champiñones",
            en: "Bacon and mushrooms",
            fr: "Bacon et champignons",
            de: "Speck und Pilze",
            it: "Bacon e funghi."
    },
    },
    pizzaCantabrica: {
        precio: "15.50",
        foto: "cantabrica.jpg",
        alergenos: ["gluten", "lacteos", "pescado"],
         nombres:{
            es: "Pizza Cantabrica",
            en: "Pizza Cantabrica",
            fr: "Pizza Cantabrica",
            de: "Pizza Cantabrica",
            it: "Pizza Cantabrica",
         },
         descripciones: {
            es: "Anchoas y pimientos del piquillo",
            en: "Anchovies and piquillo peppers",
            fr: "Anchois et poivrons piquillo",
            de: "Sardellen und Piquillo-Paprika",
            it: "Acciughe e Peperone rosso"
    },
    },
    pizzaSiciliana: {
        precio: "14.50",
        foto: "siciliana.jpg",
        alergenos: ["gluten", "lacteos"],
         nombres:{
            es: "Pizza Siciliana",
            en: "Pizza Siciliana",
            fr: "Pizza Siciliana",
            de: "Pizza Siciliana",
            it: "Pizza Siciliana",
         },
         descripciones: {
            es: "Berenjena y pimiento rojo",
            en: "Eggplant and red pepper",
            fr: "Aubergine et poivron rouge",
            de: "Aubergine und rote Paprika",
            it: "Melanzane e peperone rosso"
    },
    },
    pizzaCuatroQuesos: {
        precio: "14.80",
        foto: "cuatro_quesos.jpg",
        alergenos: ["gluten", "lacteos"],
         nombres:{
            es: "Pizza 4 Quesos",
            en: "Pizza 4 Quesos",
            fr: "Pizza 4 Quesos",
            de: "Pizza 4 Quesos",
            it: "Pizza 4 Quesos",
         },
         descripciones: {
            es: "Roquefort, parmesano y queso fresco",
            en: "Roquefort, Parmesan and fresh cheese",
            fr: "Roquefort, parmesan et fromage frais",
            de: "Roquefort, Parmesan und Frischkäse",
            it: "Roquefort, parmigiano e formaggio fresco."
    },
    },
    pizzaDelPais: {
        precio: "14.80",
        foto: "pizza_del_pais.jpg",
        alergenos: ["gluten", "lacteos"],
         nombres:{
            es: "Pizza del País",
            en: "Pizza del País",
            fr: "Pizza del País",
            de: "Pizza del País",
            it: "Pizza del País",
         },
         descripciones: {
            es: "Chorizo gallego, ajo y guindilla",
            en: "Galician chorizo, garlic and chili pepper",
            fr: "Chorizo ​​galicien, ail et piment",
            de: "Galicische Chorizo, Knoblauch und Chilischoten",
            it: "Chorizo galiziano, aglio e peperoncino."
    },
    },
    pizzaAtlantica: {
        precio: "14.80",
        foto: "atlantica.jpg",
        alergenos: ["gluten", "lacteos", "pescado"],
         nombres:{
            es: "Pizza Atlantica",
            en: "Pizza Atlantica",
            fr: "Pizza Atlantica",
            de: "Pizza Atlantica",
            it: "Pizza Atlantica",
         },
         descripciones: {
            es: "Bonito y cebolla",
            en: "Bonito and onion",
            fr: "Bonite et oignon",
            de: "Bonito und Zwiebeln",
            it: "Tonno e cipolla."
    },
    },
    pizzaCampista: {
        precio: "15.50",
        foto: "campista.jpg",
        alergenos: ["gluten", "lacteos", "huevos"],
         nombres:{
            es: "Pizza Campista",
            en: "Pizza Campista",
            fr: "Pizza Campista",
            de: "Pizza Campista",
            it: "Pizza Campista",
         },
         descripciones: {
            es: "Jamón, champiñones y huevo",
            en: "Ham, mushrooms and egg",
            fr: "Jambon, champignons et œuf",
            de: "Ammoniak, Pilze und Ei",
            it: "Prosciutto, funghi e uovo."
    },
    },
    pizzaTresSabores: {
        precio: "15.50",
        foto: "3sabores.jpg",
        alergenos: ["gluten", "lacteos"],
         nombres:{
            es: "Pizza 3 Sabores",
            en: "Pizza 3 Sabores",
            fr: "Pizza 3 Sabores",
            de: "Pizza 3 Sabores",
            it: "Pizza 3 Sabores",
         },
         descripciones: {
            es: "Bacon, chorizo y roquefort",
            en: "Bacon, chorizo y roquefort",
            fr: "Bacon, chorizo ​​et Roquefort",
            de: "Speck, Chorizo ​​und Roquefort",
            it: "Bacon, chorizo e roquefort."
    },
    },
    pizzaVegetariana: {
        precio: "14.50",
        foto: "vegetariana.jpg",
        alergenos: ["gluten", "lacteos"],
         nombres:{
            es: "Pizza Vegetariana",
            en: "Pizza Vegetariana",
            fr: "Pizza Vegetariana",
            de: "Pizza Vegetariana",
            it: "Pizza Vegetariana",
         },
         descripciones: {
            es: "Verduras de temporada",
            en: "seasonal vegetables",
            fr: "légumes de saison",
            de: "Gemüse der Saison",
            it: "Verdure di stagione."
    },
    },

    // === POSTRES ===
    tartaCastana: {
        precio: "5.90",
        foto: "tarta-castana.jpg",
        alergenos: ["lacteos", "huevos"],
        nombres:{
            es: "Tarta de castaña",
            en: "Chestnut Cake",
            fr: "Tarte aux Châtaignes",
            de: "Kastanienkuchen",
            it: "Torta di Castagne"
        },
        descripciones: {
            es: "Con nata y marrón glace",
            en: "With whipped cream and marron glacé.",
            fr: "Avec crème chantilly et marron glacé.",
            de: "Mit Sahne und Marron Glacé.",
            it: "Con panna e marron glacé."
    },
    },
    tocinilloCielo: {
        precio: "5.50",
        foto: "tocinillo.jpg",
        alergenos: ["lacteos", "huevos", "frutos-secos"],
        nombres:{
            es: "Tocinillo del cielo",
            en: "Tocinillo del cielo",
            fr: "Tocinillo del cielo",
            de: "Tocinillo del cielo",
            it: "Tocinillo del cielo"
        },
        descripciones: {
            es: "Con delicia de queso y chocolate",
            en: "With cheese and chocolate delight.",
            fr: "Flan aux œufs avec délice de fromage et chocolat.",
            de: "Mit Käse- und Schokoladengenuss.",
            it: "Budino di tuorli con delizia di formaggio e cioccolato."
    },
    },
    brownie: {
        precio: "6.00",
        foto: "brownie.jpg",
        alergenos: ["lacteos", "frutos-secos", "huevos"],
        nombres:{
            es: "Brownie",
            en: "Brownie",
            fr: "Brownie",
            de: "Brownie",
            it: "Brownie"
        },
        descripciones: {
            es: "De chocolate con nueces y helado de vainilla",
            en: "With walnuts and vanilla ice cream",
            fr: "Aux noix et glace vanille.",
            de: "Mit Walnüssen und Vanilleeis.",
            it: "Con noci e gelato alla vaniglia."
    },
    },
    tartaQueso: {
        precio: "5.60",
        foto: "tarta-queso.jpg",
        alergenos: ["lacteos", "frutos-secos"],
        nombres:{
            es: "Tarta de Queso (Horno o Fria)",
            en: "Cheesecake (Baked or Cold)",
            fr: "Gâteau au Fromage (Cuit ou Froid)",
            de: "Käsekuchen (Gebacken oder Kalt)",
            it: "Torta al Formaggio (Al forno o Fredda)"
        },
        descripciones: {
            es: "Con coulis de frutos rojos",
            en: "With red berry coulis.",
            fr: "Avec coulis de fruits rouges.",
            de: "Mit Beeren-Coulis.",
            it: "Con coulis ai frutti rossi."
    },
    },
    heladosSurtidos: {
        precio: "7.80",
        foto: "helados.jpg",
        alergenos: ["lacteos", "frutos-secos"],
        nombres:{
            es: "Surtido de Helados",
            en: "Assorted Ice Creams",
            fr: "Assortiment de Glaces",
            de: "Eis-Sortiment",
            it: "Gelati Assortiti"
        },
        descripciones: {
            es: "Caseros y teja de almendras",
            en: "Homemade with almond 'teja' crisp.",
            fr: "Artisanales avec tuile aux amandes.",
            de: "Hausgemacht mit Mandelgebäck (Teja).",
            it: "Artigianali con tegola di mandorle."
    },
    },
    tiramisu: {
        precio: "5.90",
        foto: "tiramisu.jpg",
        alergenos: ["lacteos", "gluten"],
       nombres:{
            es: "Tiramisu",
            en: "Tiramisu",
            fr: "Tiramisu",
            de: "Tiramisu",
            it: "Tiramisu"
        },
        descripciones: {
            es: "Casero con helado de frutos rojos",
            en: "Homemade with red berry ice cream.",
            fr: "Fait maison avec glace aux fruits rouges.",
            de: "Hausgemacht mit Beereneis.",
            it: "Fatto in casa con gelato ai frutti rossi."
    },
    },
    heladoDulceLeche: {
        precio: "5.60",
        foto: "dulce-leche.jpg",
        alergenos: ["lacteos", "frutos-secos"],
       nombres:{
            es: "Helado de dulce de leche",
            en: "Dulce de Leche Ice Cream",
            fr: "Glace au Dulce de Leche",
            de: "Dulce de Leche Eis",
            it: "Gelato al Dulce de Leche"
        },
        descripciones: {
            es: "Con nueces",
            en: "With walnuts.",
            fr: "Avec des noix.",
            de: "Mit Walnüssen.",
            it: "Con noci."
    },
    },
    falsoTomate: {
        precio: "6.70",
        foto: "falso-tomate.jpg",
        alergenos: ["lacteos", "frutos-secos", "gluten"],
        nombres:{
            es: "Falso Tomate",
            en: "Falso Tomate",
            fr: "Falso Tomate",
            de: "Falso Tomate",
            it: "Falso Tomate"
        },
        descripciones: {
            es: "De vainilla y helado de cítricos",
            en: "Vanilla and citrus ice cream.",
            fr: "Vanille et glace aux agrumes.",
            de: "Vanille und Zitruseis.",
            it: "Vaniglia e gelato agli agrumi."
    },
    },
    bolaHelado: {
        precio: "3.50",
        foto: "bola-helado.jpg", // Puedes usar la misma de helados si no tienes una específica
        alergenos: ["lacteos"],
        nombres:{
            es: "Bola Individual de helado Artesanal",
            en: "Single scoop of artisan ice cream",
            fr: "Une boule de glace artisanale",
            de: "Eine Kugel handgemachtes Eis",
            it: "Palla (singola) di gelato artigianale"
        },
        descripciones: {
            es: "Sabores: Limón, Mandarina, Chocolate, Fresa, Frutos del Bosque o Frambuesa. (precio por bola)",
            en: "Flavors: Lemon, Tangerine, Chocolate, Strawberry, Forest Fruits or Raspberry. (price per scoop)",
            fr: "Parfums : Citron, Mandarine, Chocolat, Fraise, Fruits des bois ou Framboise. (prix par boule)",
            de: "Sorten: Zitrone, Mandarine, Schokolade, Erdbeere, Waldfrüchte oder Himbeere. (Preis pro Kugel)",
            it: "Gusti: Limone, Mandarino, Cioccolato, Fragola, Frutti di bosco o Lampone. (prezzo per pallina)"
    },
    },
    // === VINOS: COPAS ===
    copaAlbarino: { 
        precioCopa: "3.50", 
        alergenos: [] ,
        nombres: {
             es: "Copa de Albariño",
             en: "Glass of Albariño" ,
             fr: "Verre à vin d'Albariño" ,
             de: "Ein Glas Albariño" ,
             it: "Bicchiere da Albariño" ,

            },
    },
   
    copaGodello: {
        precioCopa: "3.50",
         alergenos: [] ,
        nombres: {
             es: "Copa de Godello", 
             en: "Glass of Godello" ,
             fr: "Verre à vin d'Godello" ,
             de: "Ein Glas Godello" ,
             it: "Bicchiere da Godello" ,
            },
    },
    
    copaRibeiro: {
        precioCopa: "3.50",
         alergenos: [] ,
        nombres: {
             es: "Copa de Ribeiro",
             en: "Glass of Ribeiro" ,
             fr: "Verre à vin d'Ribeiro " ,
             de: "Ein Glas Ribeiro" ,
             it: "Bicchiere da Ribeiro" ,
            },
    },

    copaRibera: {
        precioCopa: "3.50",
         alergenos: [] ,
        nombres: {
             es: "Copa de Ribera del Duero",
             en: "Glass of Ribera del Duero" ,
             fr: "Verre à vin d'Ribera del Duero " ,
             de: "Ein Glas Ribera del Duero" ,
             it: "Bicchiere da Ribera del Duero" ,
            },
    },

    copaRioja: {
        precioCopa: "3.50",
         alergenos: [] ,
        nombres: {
             es: "Copa de Rioja",
             en: "Glass of Rioja" ,
             fr: "Verre à vin d'Rioja " ,
             de: "Ein Glas Rioja" ,
             it: "Bicchiere da Rioja" ,
            },
    },

    copaMencia: {
        precioCopa: "3.50",
         alergenos: [] ,
        nombres: {
             es: "Copa de Mencia",
             en: "Glass of Mencia" ,
             fr: "Verre à vin d'Mencia " ,
             de: "Ein Glas Mencia" ,
             it: "Bicchiere da Mencia" ,
            },
    },

    // === VINOS TINTOS ===
    rebolledo: {
        precio34: "17.50", // Precio base 3/4
        precioMagnum: "32.00",
        denominacion: "VALDEORRAS",
        alergenos: [],
        nombres: {
             es: "Joaquín Rebolledo",
             en: "Joaquín Rebolledo" ,
             fr: "Joaquín Rebolledo" ,
             de: "Joaquín Rebolledo" ,
             it: "Joaquín Rebolledo" ,
            },
        descripciones: {
            es: "Mencía de montaña, mineral y elegante.",
            en: "A mountain Mencía, mineral and elegant.",
            fr: "Un Mencía de montagne, minéral et élégant.",
            de: "Ein mineralischer und eleganter Mencía aus den Bergen.",
            it: "Mencía di montagna, minerale ed elegante."
    },
    },
    abadiaCova: {
        precio34: "19.50",
        denominacion: "RIBEIRA SACRA",
        alergenos: [],
        nombres: {
             es: "Abadía da Cova",
             en: "Abadía da Cova" ,
             fr: "Abadía da Cova" ,
             de: "Abadía da Cova" ,
             it: "Abadía da Cova" ,
            },
        descripciones: {
            es: "Mencía de viñas viejas, floral y especiado.",
            en: "Mencía from old vines, floral and spicy.",
            fr: "Mencía issu de vieilles vignes, aux arômes floraux et épicés.",
            de: "Mencía aus alten Rebstöcken, blumig und würzig.",
            it: "Mencía da vecchi vigneti, floreale e speziato."
        
    },
    },
    cregoMonaguillo: {
        precio34: "17.80",
        denominacion: "MONTERREY",
        alergenos: [],
        nombres: {
             es: "Crego e Monaguillo",
             en: "Crego e Monaguillo " ,
             fr: "Crego e Monaguillo " ,
             de: "Crego e Monaguillo " ,
             it: "Crego e Monaguillo " ,
            },
        descripciones: {
            es: "Mencía joven, fruta roja vibrante.",
            en: "Young Mencía, vibrant red fruit.",
            fr: "Une Mencía jeune, aux arômes de fruits rouges éclatants.",
            de: "Junger Mencía, lebhafte rote Beeren.",
            it: "Mencía giovane, con vivaci note di frutti rossi."
        
    },
    },

    castroLobarzan: {
        precio34: "20.00",
        denominacion: "MONTERREY",
        alergenos:  [],
        nombres: {
             es: "Castro de Lobarzán",
             en: "Castro de Lobarzán " ,
             fr: "Castro de Lobarzán" ,
             de: "Castro de Lobarzán" ,
             it: "Castro de Lobarzán" ,
            },
        descripciones: {
            es: "Mencía estructurado, paso por roble.",
            en: "A full-bodied Mencía, aged in oak.",
            fr: "Mencía structuré, élevé en fûts de chêne.",
            de: "Strukturierter Mencía, in Eichenfässern gereift.",
            it: "Mencía strutturato, affinato in rovere."
        
    },
    },

    campillo: {
        precio34: "21.00",
        precio12: "14.00",
        precioMagnum: "42.00",
        denominacion: "RIOJA",
        alergenos: [],
        nombres: {
             es: "Campillo",
             en: "Campillo" ,
             fr: "Campillo" ,
             de: "Campillo" ,
             it: "Campillo" ,
            },
        descripciones: {
            es: "Reserva elegante, clásico y con notas de madera noble.",
            en: "An elegant, classic reserve with notes of fine wood.",
            fr: "Une cuvée élégante et classique, aux notes de bois précieux.",
            de: "Ein eleganter, klassischer Reserva mit Noten von Edelholz.",
            it: "Un vino elegante, classico, con note di legno pregiato."
        
    },
    },
    ramonBilbao: {
        precio34: "19.50",
        precio12: "9.80",
        denominacion: "RIOJA",
        alergenos: [],
        nombres: {
             es: "Ramón Bilbao",
             en: "Ramón Bilbao" ,
             fr: "Ramón Bilbao" ,
             de: "Ramón Bilbao" ,
             it: "Ramón Bilbao" ,
            },
        descripciones: {
            es: "Moderno y afrutado, muy versátil",
            en: "Modern and fruity, very versatile",
            fr: "Moderne et fruité, très polyvalent",
            de: "Modern und fruchtig, sehr vielseitig",
            it: "Moderno e fruttato, molto versatile"
        
    },
    },
    baigorri: {
        precio34: "22.50",
        denominacion: "RIOJA",
        alergenos:  [],
        nombres: {
             es: "Baigorri",
             en: "Baigorri" ,
             fr: "Baigorri" ,
             de: "Baigorri" ,
             it: "Baigorri" ,
            },
        descripciones: {
            es: "Crianza de coupage seleccionado, taninos sedosos.",
            en: "A blend of carefully selected wines, with silky tannins.",
            fr: "Élevage d'un assemblage sélectionné, aux tanins soyeux.",
            de: "Ausgewählte Cuvée, seidige Tannine.",
            it: "Affinamento di un blend selezionato, con tannini setosi."
        
    },
    },
    azpilicueta: {
        precio34: "17.50",
        precioMagnum: "34.00",
        denominacion: "RIOJA",
        alergenos:  [],
        nombres: {
             es: "Azpilicueta",
             en: "Azpilicueta" ,
             fr: "Azpilicueta" ,
             de: "Azpilicueta" ,
             it: "Azpilicueta" ,
            },
        descripciones: {
            es: "Tradición y modernidad en equilibrio.",
            en: "A balance between tradition and modernity.",
            fr: "Un équilibre entre tradition et modernité.",
            de: "Tradition und Moderne im Gleichgewicht.",
            it: "Tradizione e modernità in perfetto equilibrio."
        
    },
    },
    ramonBilbaoLimitada: {
        precio34: "22.00",
        precioMagnum: "42.00",
        denominacion: "VENDIMIAS SELECCIONADAS",
        alergenos:  [],
        nombres: {
             es: "Ramón Bilbao Ed. Limitada ",
             en: "Ramón Bilbao Ed. Limitada " ,
             fr: "Ramón Bilbao Ed. Limitada " ,
             de: "Ramón Bilbao Ed. Limitada " ,
             it: "Ramón Bilbao Ed. Limitada " ,
            },
        descripciones: {
            es: "Selección de las mejores parcelas.",
            en: "Selection of the best plots.",
            fr: "Sélection des meilleurs terrains.",
            de: "Auswahl der besten Grundstücke.",
            it: "Selezione dei migliori appezzamenti."
        
    },
    },
    lanD12: {
        precio34: "20.00",
        denominacion: "VENDIMIAS SELECCIONADAS",
        alergenos: [],
        nombres: {
             es: "Lan D-12",
             en: "Lan D-12" ,
             fr: "Lan D-12" ,
             de: "Lan D-12" ,
             it: "Lan D-12" ,
            },
        descripciones: {
            es: "Crianza extensa, gran potencial.",
            en: "Extended ageing, great potential.",
            fr: "Vieux vin, grand potentiel.",
            de: "Langer Ausbau, großes Potenzial.",
            it: "Lunga maturazione, grande potenziale."
        
    },
    },
    lanMano: {
        precio34: "34.50",
        denominacion: "VENDIMIAS SELECCIONADAS",
        alergenos: [],
        nombres: {
             es: "Lan a Mano ",
             en: "Lan a Mano " ,
             fr: "Lan a Mano " ,
             de: "Lan a Mano " ,
             it: "Lan a Mano " ,
            },
        descripciones: {
            es: "Elaboración artesanal, muy exclusivo.",
            en: "Handcrafted, highly exclusive.",
            fr: "Fabrication artisanale, très exclusive.",
            de: "Handwerkliche Herstellung, sehr exklusiv.",
            it: "Produzione artigianale, molto esclusiva."
        
    },
    },
    fincaValpiedra: {
        precio34: "26.00",
        denominacion: "GRANDES VINOS",
        alergenos: [],
        nombres: {
             es: "Finca Valpiedra",
             en: "Finca Valpiedra" ,
             fr: "Finca Valpiedra" ,
             de: "Finca Valpiedra" ,
             it: "Finca Valpiedra" ,
            },
        descripciones: {
            es: "Vino de pago, mineral y complejo.",
            en: "A single vineyard wine, mineral and complex.",
            fr: "Un vin d'appellation, minéral et complexe.",
            de: "Ein Spitzenwein, mineralisch und komplex.",
            it: "Vino di qualità, minerale e complesso."
        
    },
    },
    quintaTarsus: {
        precio34: "22.00",
        denominacion: "RIBERA DEL DUERO",
        alergenos: [],
        nombres: {
             es: "Quinta de Tarsus",
             en: "Quinta de Tarsus" ,
             fr: "Quinta de Tarsus" ,
             de: "Quinta de Tarsus" ,
             it: "Quinta de Tarsus" ,
            },
        descripciones: {
            es: "Tinto joven, fruta negra intensa",
            en: "Young red wine, with intense black fruit",
            fr: "Vin rouge jeune, aux arômes intenses de fruits noirs",
            de: "Junger Rotwein, intensive Noten von schwarzen Beeren",
            it: "Vino rosso giovane, con intense note di frutta nera"
        
    },
    },
    manchonMieres: {
        precio34: "29.00",
        denominacion: "RIBERA DEL DUERO",
        alergenos: [],
        nombres: {
             es: "47 Manchon Mieres",
             en: "47 Manchon Mieres" ,
             fr: "47 Manchon Mieres" ,
             de: "47 Manchon Mieres" ,
             it: "47 Manchon Mieres" ,
            },
        descripciones: {
            es: "Crianza prolongada, gran estructura",
            en: "Extended ageing, great structure",
            fr: "Élevage prolongé, belle structure",
            de: "Lange Reifezeit, großartige Struktur",
            it: "Lunga maturazione, ottima struttura"
        
    },
    },
    vilano: {
        precio34: "21.00",
        denominacion: "RIBERA DEL DUERO",
        alergenos: [],
        nombres: {
             es: "Vilano",
             en: "Vilano" ,
             fr: "Vilano" ,
             de: "Vilano" ,
             it: "Vilano" ,
            },
        descripciones: {
            es: "Tempranillo expresivo, taninos redondos",
            en: "An expressive Tempranillo with smooth tannins",
            fr: "Un Tempranillo expressif, aux tanins ronds",
            de: "Ein ausdrucksstarker Tempranillo mit runden Tanninen",
            it: "Tempranillo espressivo, con tannini morbidi"
        
    },
    },
    matasnos: {
        precio34: "38.00",
        denominacion: "RIBERA DEL DUERO",
        alergenos: [],
        nombres: {
             es: "Bosque de Matasnos",
             en: "Bosque de Matasnos" ,
             fr: "Bosque de Matasnos" ,
             de: "Bosque de Matasnos" ,
             it: "Bosque de Matasnos" ,
            },
        descripciones: {
            es: "Personalidad única, terruño marcado",
            en: "A unique character, a distinctive terroir",
            fr: "Une personnalité unique, un terroir affirmé",
            de: "Einzigartiger Charakter, ausgeprägtes Terroir",
            it: "Personalità unica, territorio caratteristico"
        
    },
    },
    velilla: {
        precio34: "20.50",
        denominacion: "RIBERA DEL DUERO",
        alergenos: [],
        nombres: {
             es: "Marqués de Velilla",
             en: "Marqués de Velilla" ,
             fr: "Marqués de Velilla" ,
             de: "Marqués de Velilla" ,
             it: "Marqués de Velilla" ,
            },
        descripciones: {
            es: "Clásico de la Ribera, nobleza",
            en: "Ribera Classic, Nobility",
            fr: "Un classique de la Ribera, la noblesse",
            de: "Ein Klassiker aus der Ribera, edel",
            it: "Il Classico della Ribera, nobiltà"
        
    },
    },
    fincaVallejo: {
        precio34: "16.50",
        denominacion: "RIBERA DEL DUERO",
        alergenos: [],
        nombres: {
             es: "Finca Vallejo",
             en: "Finca Vallejo" ,
             fr: "Finca Vallejo" ,
             de: "Finca Vallejo" ,
             it: "Finca Vallejo" ,
            },
        descripciones: {
            es: "Tinto joven, fruta fresca y tostados suaves",
            en: "A young red wine with fresh fruit and subtle toasted notes",
            fr: "Vin rouge jeune, aux arômes de fruits frais et de notes grillées légères",
            de: "Ein junger Rotwein mit Noten von frischen Früchten und sanften Röstnoten",
            it: "Vino rosso giovane, con note di frutta fresca e lievi sentori tostati"
        
    },
    },
    malabrigo: {
        precio34: "48.00",
        denominacion: "PREMIUM SELECTION",
        alergenos: [],
        nombres: {
             es: "Malabrigo Cepa 21",
             en: "Malabrigo Cepa 21" ,
             fr: "Malabrigo Cepa 21" ,
             de: "Malabrigo Cepa 21" ,
             it: "Malabrigo Cepa 21" ,
            },
        descripciones: {
            es: "Selección de cepas centenarias",
            en: "A selection of century-old vines",
            fr: "Sélection de cépages centenaires",
            de: "Auswahl hundertjähriger Rebstöcke",
            it: "Selezione di viti centenarie"
        
    },
    },
    pagoSantaCruz: {
        precio34: "56.00",
        denominacion: "PREMIUM SELECTION",
        alergenos: [],
        nombres: {
             es: "Pago de Santa Cruz",
             en: "Pago de Santa Cruz" ,
             fr: "Pago de Santa Cruz" ,
             de: "Pago de Santa Cruz" ,
             it: "Pago de Santa Cruz" ,
            },
        descripciones: {
            es: "Vino de autor, máxima expresión",
            en: "Signature wine, the ultimate expression",
            fr: "Vin d'auteur, l'expression ultime",
            de: "Einzigartiger Wein, der höchste Ausdruck",
            it: "Vino d'autore, massima espressione"
        
    },
    },
    valOsa: {
        precio34: "26.00",
        denominacion: "BIERZO",
        alergenos: [],
        nombres: {
             es: "Val de la Osa",
             en: "Val de la Osa" ,
             fr: "Val de la Osa" ,
             de: "Val de la Osa" ,
             it: "Val de la Osa" ,
            },
        descripciones: {
            es: "Mencía de altura, frescura y mineralidad",
            en: "A Mencía with depth, freshness and minerality",
            fr: "Une Mencía qui se distingue par son élégance, sa fraîcheur et sa minéralité ",
            de: "Ein Mencía mit Tiefe, Frische und Mineralität",
            it: "Mencía caratterizzata da intensità, freschezza e mineralità"
        
    },
    },
    petitPittacum: {
        precio34: "14.00",
        denominacion: "BIERZO",
        alergenos: [],
        nombres: {
             es: "Petit Pittacum",
             en: "Petit Pittacum" ,
             fr: "Petit Pittacum" ,
             de: "Petit Pittacum" ,
             it: "Petit Pittacum" ,
            },
        descripciones: {
            es: "Mencía concentrado, fruta madura",
            en: "Concentrated Mencía, ripe fruit",
            fr: "Mencía concentré, fruit mûr",
            de: "Konzentrierter Mencía, reife Frucht",
            it: "Mencía concentrato, frutta matura"
        
    },
    },
    retuerta: {
        precio34: "38.00",
        denominacion: "TIERRAS DE LEÓN",
        alergenos: [],
        nombres: {
             es: "Abadía Retuerta Selección",
             en: "Abadía Retuerta Selección" ,
             fr: "Abadía Retuerta Selección" ,
             de: "Abadía Retuerta Selección" ,
             it: "Abadía Retuerta Selección" ,
            },
        descripciones: {
            es: "Prieto Picudo, especiado y carnoso",
            en: "Prieto Picudo: spicy and meaty",
            fr: "Prieto Picudo, épicé et charnu ",
            de: "Prieto Picudo, würzig und vollmundig",
            it: "Prieto Picudo, speziato e corposo"
        
    },
    },
    elPillo: {
        precio34: "20.00",
        denominacion: "TORO",
        alergenos: [],
        nombres: {
             es: "El pillo",
             en: "El pillo" ,
             fr: "El pillo" ,
             de: "El pillo" ,
             it: "El pillo" ,
            },
        descripciones: {
            es: "Tinta de Toro potente, carácter mediterráneo",
            en: "A full-bodied Tinta de Toro with a Mediterranean character",
            fr: "Un Tinta de Toro puissant, au caractère méditerranéen",
            de: "Kräftiger Tinta de Toro mit mediterranem Charakter",
            it: "Tinta de Toro: corposo, dal carattere mediterraneo"
        
    },
    },

    // === VINOS BLANCOS ===
    santiagoRuiz: {
        precio34: "22.50",
        denominacion: "RÍAS BAIXAS",
        alergenos: [],
        nombres: {
             es: "Santiago Ruiz",
             en: "Santiago Ruiz" ,
             fr: "Santiago Ruiz" ,
             de: "Santiago Ruiz" ,
             it: "Santiago Ruiz" ,
            },
        descripciones: {
            es: "Albariño complejo, mineral y largo",
            en: "A complex, mineral and full-bodied Albariño",
            fr: "Un Albariño complexe, minéral et long en bouche",
            de: "Ein komplexer, mineralischer Albariño mit langem Abgang",
            it: "Un Albariño complesso, minerale e persistente"
    },   
    },
    bouzaDoRei: {
        precio34: "19.00",
        denominacion: "RÍAS BAIXAS",
        alergenos: [],
        nombres: {
             es: "Bouza do Rei ",
             en: "Bouza do Rei " ,
             fr: "Bouza do Rei " ,
             de: "Bouza do Rei " ,
             it: "Bouza do Rei " ,
            },
        descripciones: {
            es: "Albariño afrutado, muy versátil",
            en: "A fruity Albariño, highly versatile",
            fr: "Un albariño fruité, très polyvalent",
            de: "Ein fruchtiger Albariño, sehr vielseitig",
            it: "Albariño fruttato, molto versatile"
    },   
    },
    terrasGauda: {
        precio34: "23.50",
        denominacion: "RÍAS BAIXAS",
        alergenos: [],
        nombres: {
             es: "Terras Gauda",
             en: "Terras Gauda" ,
             fr: "Terras Gauda" ,
             de: "Terras Gauda" ,
             it: "Terras Gauda" ,
            },
        descripciones: {
            es: "Albariño intenso, notas cítricas",
            en: "A full-bodied Albariño with citrus notes",
            fr: "Un albariño intense, aux notes d'agrumes",
            de: "Ein vollmundiger Albariño mit Zitrusnoten",
            it: "Albariño intenso, con note agrumate"
    },   
    },
    condeAlbarei: {
        precio34: "17.80",
        denominacion: "RÍAS BAIXAS",
        alergenos: [],
        nombres: {
             es: "Conde de Albarei ",
             en: "Conde de Albarei " ,
             fr: "Conde de Albarei " ,
             de: "Conde de Albarei " ,
             it: "Conde de Albarei " ,
            },
        descripciones: {
            es: "Albariño clásico, fresco y directo",
            en: "A classic Albariño, fresh and straightforward",
            fr: "Un albariño classique, frais et franc",
            de: "Ein klassischer, frischer und geradliniger Albariño",
            it: "Un Albariño classico, fresco e diretto"
    },   
    },
    marDeFrades: {
        precio34: "24.00",
        denominacion: "RÍAS BAIXAS",
        alergenos: [],
        nombres: {
             es: "Mar de Frades",
             en: "Mar de Frades" ,
             fr: "Mar de Frades" ,
             de: "Mar de Frades" ,
             it: "Mar de Frades" ,
            },
        descripciones: {
            es: "Albariño elegante, toque salino",
            en: "Elegant Albariño, saline touch",
            fr: "Albariño élégant, touche saline",
            de: "Eleganter Albariño, salzige Note",
            it: "Albariño elegante, tocco salino"
    },   
    },
    casalDeArman: {
        precio34: "22.00",
        denominacion: "RIBEIRO",
        alergenos: [],
        nombres: {
             es: "Casal de Arman",
             en: "Casal de Arman" ,
             fr: "Casal de Arman" ,
             de: "Casal de Arman" ,
             it: "Casal de Arman" ,
            },
        descripciones: {
            es: "Treixadura pura, floral y delicado",
            en: "Pure Treixadura, floral and delicate",
            fr: "Treixadura pure, florale et délicate",
            de: "Reiner Treixadura, blumig und zart",
            it: "Treixadura pura, floreale e delicato"
    },   
    },
    vinaCosteira: {
        precio34: "14.80",
        precio12: "9.50",
        denominacion: "RIBEIRO",
        alergenos: [],
        nombres: {
             es: "Viña Costeira",
             en: "Viña Costeira" ,
             fr: "Viña Costeira" ,
             de: "Viña Costeira" ,
             it: "Viña Costeira" ,
            },
        descripciones: {
            es: "Blanco joven, fruta blanca",
            en: "Young white wine, white fruit notes",
            fr: "Blanc jeune, notes de fruits blancs",
            de: "Junger Weißwein, weiße Fruchtnoten",
            it: "Bianco giovane, note de frutta bianca"
    },   
    },
    cuatroFerrados: {
        precio: "18.80",
        denominacion: "RIBEIRO",
        alergenos: [],
        nombres: {
             es: "4 Ferrados",
             en: "4 Ferrados" ,
             fr: "4 Ferrados" ,
             de: "4 Ferrados" ,
             it: "4 Ferrados" ,
            },
        descripciones: {
            es: "Mezcla tradicional, buena estructura",
            en: "Traditional blend, good structure",
            fr: "Assemblage traditionnel, bonne structure",
            de: "Traditioneller Verschnitt, gute Struktur",
            it: "Miscela tradizionale, buona struttura"
    },   
    },
    cregoMonaguilloBlanco: {
        precio34: "17.80",
        denominacion: "GODELLO - MONTERREY",
        alergenos: [],
        descripciones: {
            es: "Crego e Monaguillo",
            en: "Crego e Monaguillo",
            fr: "Crego e Monaguillo ",
            de: "Crego e Monaguillo",
            it: "Crego e Monaguillo"
        },
        descripciones: {
            es: "Godello joven, fruta blanca vibrante",
            en: "Young Godello, vibrant white fruit",
            fr: "Godello jeune, fruit blanc vibrant",
            de: "Junger Godello, lebendige weiße Frucht",
            it: "Godello giovane, frutta bianca vibrante"
    },   

    },
    castroLobarzanBlanco: {
        precio34: "20.00",
        denominacion: "GODELLO - MONTERREY",
        alergenos: [],
        nombres: {
             es: "Castro de Lobarzán",
             en: "Castro de Lobarzán" ,
             fr: "Castro de Lobarzán" ,
             de: "Castro de Lobarzán" ,
             it: "Castro de Lobarzán" ,
            },
        descripciones: {
            es: "Godello con cuerpo, paso por roble",
            en: "Full-bodied Godello, oak-aged",
            fr: "Godello corsé, vieilli en chêne",
            de: "Vollmundiger Godello, im Eichenfass gereift",
            it: "Godello corposo, affinato in rovere"
    },   
    },
    rebolledoBlanco: {
        precio34: "18.50",
        denominacion: "GODELLO - VALDEORRAS",
        alergenos: [],
        nombres: {
             es: "Joaquín Rebolledo",
             en: "Joaquín Rebolledo" ,
             fr: "Joaquín Rebolledo" ,
             de: "Joaquín Rebolledo" ,
             it: "Joaquín Rebolledo" ,
            },
        descripciones: {
            es: "Godello mineral, acidez brillante",
            en: "Mineral Godello, bright acidity",
            fr: "Godello minéral, acidité brillante",
            de: "Mineralischer Godello, brillante Säure",
            it: "Godello minerale, acidità brillante"
    },   
    },
    guitian: {
        precio34: "24.00",
        denominacion: "GODELLO - VALDEORRAS",
        alergenos: [],
        nombres: {
             es: "Guitián",
             en: "Guitián" ,
             fr: "Guitián" ,
             de: "Guitián" ,
             it: "Guitián" ,
            },
        descripciones: {
           es: "Godello concentrado, gran elegancia",
            en: "Concentrated Godello, great elegance",
            fr: "Godello concentré, grande élégance",
            de: "Konzentrierter Godello, große Eleganz",
            it: "Godello concentrato, grande eleganza"
    },   
    },
    godeval: {
        precio34: "19.80",
        denominacion: "GODELLO - VALDEORRAS",
        alergenos: [],
        nombres: {
             es: "Godeval",
             en: "Godeval" ,
             fr: "Godeval" ,
             de: "Godeval" ,
             it: "Godeval" ,
            },
        descripciones: {
            es: "Godello clásico, fresco y aromático",
            en: "Classic Godello, fresh and aromatic",
            fr: "Godello classique, frais et aromatique",
            de: "Klassischer Godello, frisch und aromatisch",
            it: "Godello classico, fresco e aromatico"
    },   
    },
    godevalCepasVellas: {
        precio34: "26.00",
        denominacion: "GODELLO - VALDEORRAS",
        alergenos: [],
        nombres: {
             es: "Godeval Cepas Vellas",
             en: "Godeval Cepas Vellas" ,
             fr: "Godeval Cepas Vellas" ,
             de: "Godeval Cepas Vellas" ,
             it: "Godeval Cepas Vellas" ,
            },
        descripciones: {
            es: "Godello de viñas viejas, complejo",
            en: "Old vines Godello, complex",
            fr: "Godello de vieilles vignes, complexe",
            de: "Godello aus alten Reben, komplex",
            it: "Godello da vecchie vigne, complesso"
    },   
    },
    vinasDelVero: {
        precio34: "21.50",
        denominacion: "SOMONTANO",
        alergenos: [],
        nombres: {
             es: "Viñas del Vero Gewürztraminer",
             en: "Viñas del Vero Gewürztraminer" ,
             fr: "Viñas del Vero Gewürztraminer" ,
             de: "Viñas del Vero Gewürztraminer" ,
             it: "Viñas del Vero Gewürztraminer" ,
            },
        descripciones: {
            es: "Blanco aromático, ligeramente semidulce",
            en: "Aromatic white, slightly off-dry",
            fr: "Blanc aromatique, légèrement moelleux",
            de: "Aromatischer Weißwein, leicht lieblich",
            it: "Bianco aromatico, leggermente abboccato"
        
    },
    },
    // === VINOS ROSADOS ===
    pizarrasOtero: {
        precio34: "12.50",
        denominacion: "BIERZO",
        alergenos: [],
        nombres: {
            es: "Pizarras de Otero",
            en: "Pizarras de Otero",
            fr: "Pizarras de Otero",
            de: "Pizarras de Otero",
            it: "Pizarras de Otero",
        },
        descripciones: {
            es: "Rosado de Mencía, fresco y frutal",
            en: "Mencía rosé, fresh and fruity",
            fr: "Rosé de Mencía, frais et fruité",
            de: "Mencía-Rosé, frisch und fruchtig",
            it: "Rosato di Mencía, fresco e fruttato"
        },
    },
    lambruscoGalieri: {
        precio34: "11.80",
        denominacion: "LAMBRUSCO",
        alergenos: [],
        nombres: {
            es: "Ostras D.O. Galieri",
            en: "Ostras D.O. Galieri",
            fr: "Ostras D.O. Galieri",
            de: "Ostras D.O. Galieri",
            it: "Ostras D.O. Galieri",
        },
        descripciones: {
            es: "Lambrusco rosado, ligero espumante natural.",
            en: "Rosé Lambrusco, light natural sparkling wine.",
            fr: "Lambrusco rosé, vin effervescent naturel léger.",
            de: "Lambrusco Rosé, leichter natürlicher Schaumwein.",
            it: "Lambrusco rosato, leggero spumante naturale."
        },
    },

    // === VINOS DULCES (POR COPA) ===
    pedroXimenez: {
        precioCopa: "3.80",
        alergenos: [],
        nombres: {
            es: "Pedro Ximénez",
            en: "Pedro Ximénez",
            fr: "Pedro Ximénez",
            de: "Pedro Ximénez",
            it: "Pedro Ximénez",
        },
        descripciones: {
            es: "Dulce intenso, pasas y especias.",
            en: "Intensely sweet, raisins and spices.",
            fr: "Doux intense, raisins secs et épices.",
            de: "Intensiv süß, Rosinen und Gewürze.",
            it: "Dolce intenso, uva passa e spezie."
        },
    },
    oportoSandeman: {
        precioCopa: "3.80",
        alergenos: [],
        nombres: {
            es: "Oporto Sandeman",
            en: "Sandeman Port",
            fr: "Porto Sandeman",
            de: "Sandeman Port",
            it: "Porto Sandeman",
        },
        descripciones: {
            es: "Oporto tinto, dulce y especiado.",
            en: "Red Port, sweet and spicy.",
            fr: "Porto rouge, doux et épicé.",
            de: "Roter Portwein, süß und würzig.",
            it: "Porto rosso, dolce e speziato."
        },
    },
    moscatelNaranja: {
        precioCopa: "3.80",
        alergenos: [],
        nombres: {
            es: "Moscatel Sauci Naranja",
            en: "Sauci Orange Muscat",
            fr: "Muscat Sauci Orange",
            de: "Sauci Orangen-Muskateller",
            it: "Moscatel Sauci Arancia",
        },
        descripciones: {
            es: "Moscatel dulce, aroma natural a naranja.",
            en: "Sweet Muscat, natural orange aroma.",
            fr: "Muscat doux, arôme naturel d'orange.",
            de: "Süßer Muskateller, natürliches Orangenaroma.",
            it: "Moscato dolce, aroma naturale di arancia."
        },
    },

// === BURBUJAS: CAVAS Y CHAMPAGNE ===
    marDeFradesEspumoso: {
        precio34: "26.00",
        denominacion: "ESPUMOSO",
        alergenos: [],
        nombres: {
            es: "Mar de Frades Espumoso",
            en: "Mar de Frades Sparkling",
            fr: "Mar de Frades Pétillant",
            de: "Mar de Frades Schaumwein",
            it: "Mar de Frades Spumante",
        },
        descripciones: {
            es: "Espumoso de Albariño, elegante y sorprendente.",
            en: "Sparkling Albariño, elegant and surprising.",
            fr: "Albariño pétillant, élégant et surprenant.",
            de: "Albariño-Schaumwein, elegant und überraschend.",
            it: "Spumante di Albariño, elegante e sorprendente."
        },
    },
    annaCodorniu: {
        precio34: "17.50",
        denominacion: "BRUT",
        alergenos: [],
        nombres: {
            es: "Anna de Codorniu",
            en: "Anna de Codorniu",
            fr: "Anna de Codorniu",
            de: "Anna de Codorniu",
            it: "Anna de Codorniu",
        },
        descripciones: {
            es: "Cava brut, burbuja fina y equilibrada.",
            en: "Brut Cava, fine and balanced bubbles.",
            fr: "Cava brut, bulles fines et équilibrées.",
            de: "Cava Brut, feine und ausgewogene Perlage.",
            it: "Cava brut, perlage fine ed equilibrato."
        },
    },
    sumarrocaReserva: {
        precio34: "22.50",
        denominacion: "BRUT",
        alergenos: [],
        nombres: {
            es: "Sumarroca Reserva",
            en: "Sumarroca Reserva",
            fr: "Sumarroca Reserva",
            de: "Sumarroca Reserva",
            it: "Sumarroca Reserva",
        },
        descripciones: {
            es: "Cava reserva, complejo y con notas de crianza.",
            en: "Reserva Cava, complex with aging notes.",
            fr: "Cava reserva, complexe avec des notes d'élevage.",
            de: "Cava Reserva, komplex mit Reifenoten.",
            it: "Cava reserva, complesso con note di invecchiamento."
        },
    },
    sumarrocaRose: {
        precio34: "22.50",
        denominacion: "BRUT ROSÉ",
        alergenos: [],
        nombres: {
            es: "Sumarroca Rosé",
            en: "Sumarroca Rosé",
            fr: "Sumarroca Rosé",
            de: "Sumarroca Rosé",
            it: "Sumarroca Rosé",
        },
        descripciones: {
            es: "Cava rosado, aromas a frutos rojos frescos",
            en: "Rosé Cava, aromas of fresh red fruits",
            fr: "Cava rosé, arômes de fruits rouges frais",
            de: "Rosé-Cava, Aromen von frischen roten Früchten",
            it: "Cava rosato, aromi di frutti rossi freschi"
        },
    },
    veuveClicquot: {
        precio34: "58.00",
        denominacion: "BRUT",
        alergenos: [],
        nombres: {
            es: "Veuve Clicquot",
            en: "Veuve Clicquot",
            fr: "Veuve Clicquot",
            de: "Veuve Clicquot",
            it: "Veuve Clicquot",
        },
        descripciones: {
            es: "Champagne clásico, gran estructura y frescura.",
            en: "Classic Champagne, great structure and freshness.",
            fr: "Champagne classique, grande structure et fraîcheur.",
            de: "Klassischer Champagner, großartige Struktur und Frische.",
            it: "Champagne classico, grande struttura e freschezza."
        },
    },
    bollinger: {
        precio34: "68.00",
        denominacion: "CHAMPAGNE",
        alergenos: [],
        nombres: {
            es: "Bollinger",
            en: "Bollinger",
            fr: "Bollinger",
            de: "Bollinger",
            it: "Bollinger",
        },
        descripciones: {
            es: "Champagne robusto, notas de frutos secos y tostados.",
            en: "Robust Champagne, notes of dried fruits and toast.",
            fr: "Champagne robuste, notes de fruits secs et de pain grillé.",
            de: "Robuster Champagner, Noten von getrockneten Früchten und Röstbrot.",
            it: "Champagne robusto, note di frutta secca e tostato."
        },
    },
    moetChandon: {
        precio34: "54.00",
        denominacion: "CHAMPAGNE",
        alergenos: [],
        nombres: {
            es: "Moët & Chandon",
            en: "Moët & Chandon",
            fr: "Moët & Chandon",
            de: "Moët & Chandon",
            it: "Moët & Chandon",
        },
        descripciones: {
            es: "Champagne frutal, elegante y muy equilibrado.",
            en: "Fruity Champagne, elegant and very balanced.",
            fr: "Champagne fruité, élégant et très équilibré.",
            de: "Fruchtiger Champagner, elegant und sehr ausgewogen.",
            it: "Champagne fruttato, elegante e molto equilibrato."
        },
    },

// === COCTELERÍA: GINEBRAS ===
    beefeater: { precioCopa: "6.50", precioCombinado: "7.50", nombres: { es: "Beefeater" } },
    beefeater24: { precioCopa: "9.50", precioCombinado: "10.50", nombres: { es: "Beefeater 24" } },
    bombay: { precioCopa: "7.00", precioCombinado: "8.00", nombres: { es: "Bombay" } },
    bombaySapphire: { precioCopa: "8.50", precioCombinado: "9.50", nombres: { es: "Bombay Sapphire" } },
    bulldog: { precioCopa: "10.00", precioCombinado: "11.00", nombres: { es: "Bulldog" } },
    citadelle: { precioCopa: "10.00", precioCombinado: "11.00", nombres: { es: "Citadelle" } },
    gVine: { precioCopa: "11.00", precioCombinado: "12.00", nombres: { es: "G-Vine" } },
    gordons: { precioCopa: "4.80", precioCombinado: "5.80", nombres: { es: "Gordon's" } },
    hendricks: { precioCopa: "10.00", precioCombinado: "11.00", nombres: { es: "Hendrick's" } },
    june: { precioCopa: "9.00", precioCombinado: "10.00", nombres: { es: "June" } },
    larios: { precioCopa: "4.80", precioCombinado: "5.80", nombres: { es: "Larios" } },
    larios12: { precioCopa: "7.50", precioCombinado: "8.50", nombres: { es: "Larios 12" } },
    martinMillers: { precioCopa: "10.00", precioCombinado: "11.00", nombres: { es: "Martin Miller's" } },
    seagrams: { precioCopa: "7.50", precioCombinado: "8.50", nombres: { es: "Seagram's" } },
    tanqueray: { precioCopa: "7.00", precioCombinado: "8.00", nombres: { es: "Tanqueray" } },
    puertoIndias: { precioCopa: "7.50", precioCombinado: "8.50", nombres: { es: "Puerto de Indias" } },
    nordes: { precioCopa: "9.00", precioCombinado: "10.00", nombres: { es: "Nordés" } },
    ginmare: { precioCopa: "10.00", precioCombinado: "11.00", nombres: { es: "Gin Mare" } },
    formentera: { precioCopa: "10.00", precioCombinado: "11.00", nombres: { es: "Formentera" } },
    
    // === COCTELERÍA: WHISKY ===
    whisky100Pipers: { precioShot: "4.00", precioCopa: "6.00", precioCombinado: "7.00", nombres: { es: "100 Pipers" } },
    ballantines: { precioShot: "4.00", precioCopa: "5.50", precioCombinado: "6.50", nombres: { es: "Ballantine's" } },
    cardhu: { precioShot: "5.00", precioCopa: "7.50", precioCombinado: "8.50", nombres: { es: "Cardhu" } },
    chivasRegal: { precioShot: "5.00", precioCopa: "7.50", precioCombinado: "8.50", nombres: { es: "Chivas Regal" } },

    // === COCTELERÍA: BRANDY ===
    brandy1866: { precioCopa: "10.00", precioCombinado: "11.00", nombres: { es: "Brandy 1866" } },
    cardenalMendoza: { precioCopa: "6.00", precioCombinado: "7.00", nombres: { es: "Cardenal Mendoza" } },
    carlosI: { precioCopa: "6.00", precioCombinado: "7.00", nombres: { es: "Carlos I" } },
    duqueAlba: { precioCopa: "6.00", precioCombinado: "6.50", nombres: { es: "Duque de Alba" } },
    luisFelipe: { precioCopa: "15.00", precioCombinado: "16.00", nombres: { es: "Luis Felipe" } },
    magno: { precioCopa: "3.00", precioCombinado: "4.00", nombres: { es: "Magno" } },
    torres5: { precioCopa: "3.30", precioCombinado: "4.30", nombres: { es: "Torres 5" } },
    torres10: { precioCopa: "3.80", precioCombinado: "4.80", nombres: { es: "Torres 10" } },
    torres20: { precioCopa: "8.00", precioCombinado: "9.00", nombres: { es: "Torres 20" } },
    veterano: { precioCopa: "2.00", precioCombinado: "3.00", nombres: { es: "Veterano" } },

    // === COCTELERÍA: VERMUT ===
    martiniBlanco: { precioCopa: "3.20", nombres: { es: "Martini Blanco" } },
    martiniRojo: { precioCopa: "3.20", nombres: { es: "Martini Rojo" } },
    petrony: { precioCopa: "4.00", nombres: { es: "Petroni" } },
    yzaguirre: { precioCopa: "3.20", nombres: { es: "Yzaguirre" } },
    chizpaso: { precioCopa: "4.50", nombres: { es: "Chizpaso" } },
    vermutMezclado: { precioCopa: "3.20", nombres: { es: "Vermut Mezclado" } },

    // === COCTELERÍA: VODKA ===
    absolut: { precioCopa: "6.50", nombres: { es: "Absolut" } },
    stolichnaya: { precioCopa: "7.00", nombres: { es: "Stolichnaya" } },

};
