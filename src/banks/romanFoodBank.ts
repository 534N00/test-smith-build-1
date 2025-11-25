
export const romanFoodBank = {
    testTitle: "Roman Food Bank",
    multipleChoice: [
        {
            type: "multiple-choice",
            question: "What was typically served as the starter (gustatio) at a Roman festival meal?",
            options: [
                "A salad or small meat dish like clams or snails",
                "Only bread and water",
                "A large roast of pork",
                "Sweet cakes soaked in honey"
            ],
            answer: 0,
            aiResponses: [
                "Correct! Gustatio was usually a salad or small meat dish such as clams, sea urchins, or lightly salted snails.",
                "No, bread and water alone would be too simple for a festival starter.",
                "Large roasts were more suited to the main course, not the starter.",
                "Honey cakes were more associated with dessert than with the gustatio."
            ]
        },
        {
            type: "multiple-choice",
            question: "What drink was commonly associated with the starter course at Roman festival meals?",
            options: [
                "Plain water",
                "Muslum, a mix of wine and honey",
                "Undiluted strong wine",
                "Milk flavored with herbs"
            ],
            answer: 1,
            aiResponses: [
                "Water might be available, but the text specifically mentions a different drink.",
                "Correct! Muslum was wine mixed with honey and was associated with the starter.",
                "Romans actually thought drinking wine undiluted was strange and improper.",
                "Milk was considered barbaric and mostly used for making cheese, not a main table drink."
            ]
        },
        {
            type: "multiple-choice",
            question: "Which of the following meats was described as a luxury in Roman main dishes?",
            options: [
                "Pork",
                "Rabbit",
                "Goatfish",
                "Chicken"
            ],
            answer: 2,
            aiResponses: [
                "Pork was common rather than a luxury meat.",
                "Rabbit was a common meat as well.",
                "Correct! Goatfish was considered a luxury dish.",
                "Chicken appears as a regular food at home, not as a luxury in this description."
            ]
        },
        {
            type: "multiple-choice",
            question: "What was the name of the fish-intestine sauce commonly eaten with bread and main dishes?",
            options: [
                "Merum",
                "Garum",
                "Pasca",
                "Cochleas"
            ],
            answer: 1,
            aiResponses: [
                "Merum refers to wine, not a salty fish sauce.",
                "Correct! Garum was a spread or sauce made from fish intestines.",
                "Pasca (or posca) was a watered-down wine or vinegar drink, not a sauce.",
                "Cochleas refers to snails, not a fish-based sauce."
            ]
        },
        {
            type: "multiple-choice",
            question: "What was a typical everyday main food at home for Romans?",
            options: [
                "Pottage, a stew made from wheat, millet, or corn",
                "Roast flamingo tongues with gold leaf",
                "Roast beef with potatoes",
                "Only nuts and grapes"
            ],
            answer: 0,
            aiResponses: [
                "Correct! Pottage was a simple stew made from grains like wheat, millet, or corn.",
                "Exotic foods like flamingo tongues existed but were not everyday home meals.",
                "Beef and potatoes are not how the text describes Roman daily food.",
                "Nuts and grapes were more like dessert or snacks, not the main everyday food."
            ]
        }
    ],

    freeResponse: [
        {
            type: "free-response",
            question: "Describe the typical gustatio (starter) at a Roman festival meal and what drink might accompany it.",
            correctTerms: ["salad", "meat", "snails", "clams", "muslum", "wine", "honey"],
            aiResponse:
                "A strong answer would mention that the gustatio was usually a salad or small meat dish—such as clams, sea urchins, or lightly salted snails—often served with muslum, a drink made from wine and honey."
        },
        {
            type: "free-response",
            question: "What was pottage, and what ingredients commonly went into it in a Roman household?",
            correctTerms: ["pottage", "stew", "wheat", "millet", "corn", "vegetables"],
            aiResponse:
                "Pottage was a simple everyday stew made from grains such as wheat, millet, or corn, often mixed with home-grown vegetables. It was one of the most common household foods for ordinary Romans."
        },
        {
            type: "free-response",
            question: "Summarize what a typical Roman might eat for breakfast, lunch, and dinner.",
            correctTerms: ["bread", "fruit", "ham", "salami", "cheese", "eggs", "vegetables", "salad"],
            aiResponse:
                "Breakfast was typically bread and fresh fruit. Lunch could include small amounts of cooked meat like ham or salami, cheese, eggs, vegetables, and bread. Dinner—the main meal—often began with a salad or small meat dish."
        },
        {
            type: "free-response",
            question: "What kinds of desserts or sweets did Romans enjoy?",
            correctTerms: ["grapes", "figs", "dates", "nuts", "honey", "cakes", "fruit tarts", "sweet buns"],
            aiResponse:
                "Romans enjoyed many fruits such as grapes, figs, dates, and mulberries, as well as nuts like walnuts, hazelnuts, almonds, and pine nuts. They also ate cakes soaked in honey, fruit tarts, and sweet buns."
        },
        {
            type: "free-response",
            question: "Explain the types of drinks Romans consumed and how attitudes toward those drinks differed.",
            correctTerms: ["wine", "watered", "pasca", "vinegar", "beer", "mead", "milk", "barbaric"],
            aiResponse:
                "Romans drank wine that was usually watered down, sometimes heated or spiced. Lower classes often drank pasca—a watered-down wine or vinegar drink. Beer and mead were common in northern towns. Milk was considered barbaric and mostly used for cheese-making."
        }
    ],

    trueFalse: [
        {
            type: "true-false",
            question: "Romans usually drank their wine undiluted and thought this was normal.",
            answer: "false",
            aiResponse: "False. Romans actually thought it was crazy to drink undiluted wine and typically watered it down."
        },
        {
            type: "true-false",
            question: "Goatfish was considered a luxury item in Roman main dishes.",
            answer: "true",
            aiResponse: "True. Goatfish is specifically mentioned as a luxury food."
        },
        {
            type: "true-false",
            question: "A typical Roman breakfast might include bread and fresh fruit.",
            answer: "true",
            aiResponse: "True. The text describes breakfast as bread and fresh fruit eaten early in the day."
        },
        {
            type: "true-false",
            question: "Milk was a popular Roman drink at the dinner table and was served to guests.",
            answer: "false",
            aiResponse: "False. Milk was considered barbaric and mainly reserved for making cheese."
        },
        {
            type: "true-false",
            question: "Romans sometimes ate snails, including snails soaked in milk.",
            answer: "true",
            aiResponse: "True. Snails appear as a starter and one fact mentions snails soaked in milk."
        }
    ],

    sentenceCompletion: [
        {
            type: "sentence-completion",
            question: "The Roman starter course at a festival meal was called a ________.",
            answer: "gustatio",
            aiResponse: "The correct term is 'gustatio', referring to the starter course of the meal."
        },
        {
            type: "sentence-completion",
            question: "An everyday stew made from wheat, millet, or corn was called ________.",
            answer: "pottage",
            aiResponse: "This common home dish was called 'pottage'."
        },
        {
            type: "sentence-completion",
            question: "Romans often ate their main dish with bread and a fish-intestine sauce called ________.",
            answer: "garum",
            aiResponse: "The salty fish-intestine sauce was called 'garum'."
        },
        {
            type: "sentence-completion",
            question: "After the main course, an offering was made to the spirit of the ________.",
            answer: "house",
            aiResponse: "The offering was made to the spirit of the house, using meat, wine, and cake."
        },
        {
            type: "sentence-completion",
            question: "Among lower classes, a drink made from watering down wine or vinegar was known as ________.",
            answer: "Pasca",
            aiResponse: "The text refers to this drink as 'Pasca'."
        }
    ],

    selection: [
        {
            type: "select-all",
            question: "Which of the following were common foods in an ordinary Roman home diet?",
            options: [
                "Wheat or barley",
                "Olive oil",
                "A lot of beef and pork every day",
                "Home-grown vegetables",
                "Chicken and cheese",
                "A few eggs",
                "Wine",
                "Sweets only on every meal"
            ],
            answers: [0, 1, 3, 4, 5, 6],
            aiResponses: [
                "✅ Wheat or barley were central grains in their diet.",
                "✅ Olive oil was a staple ingredient.",
                "❌ The text emphasizes simple foods, not lots of beef and pork every day.",
                "✅ Home-grown vegetables were commonly eaten.",
                "✅ Chicken and cheese are both mentioned as part of typical food.",
                "✅ They ate a few eggs, not huge quantities.",
                "✅ Wine was part of their usual consumption.",
                "❌ Sweets were enjoyed, but not at every meal and not as the main food."
            ]
        },
        {
            type: "select-all",
            question: "Which of these are described as Roman desserts or sweets?",
            options: [
                "Grapes",
                "Figs",
                "Hamburgers",
                "Fruit tarts",
                "Sweet buns",
                "Mulberries"
            ],
            answers: [0, 1, 3, 4, 5],
            aiResponses: [
                "✅ Grapes were one of the most popular desserts.",
                "✅ Figs are listed as a dessert fruit.",
                "❌ Hamburgers are not a Roman dessert in the text.",
                "✅ Fruit tarts are mentioned as a sweet food.",
                "✅ Sweet buns were also eaten as desserts.",
                "✅ Mulberries are included among the fruits they enjoyed."
            ]
        },
        {
            type: "select-all",
            question: "What types of entertainment could guests expect during a Roman dinner?",
            options: [
                "Musicians",
                "Acrobats",
                "Poets",
                "Dancers",
                "Gladiatorial combat in the dining room",
                "Chariot racing around the table"
            ],
            answers: [0, 1, 2, 3],
            aiResponses: [
                "✅ Musicians are specifically mentioned as part of dinner entertainment.",
                "✅ Acrobats performed for guests during dinners.",
                "✅ Poets could perform during the meal.",
                "✅ Dancers are also listed as entertainment.",
                "❌ Gladiator fights belonged in arenas, not in dining rooms.",
                "❌ Chariot racing happened in venues like the Circus Maximus, not around a dinner table."
            ]
        }
    ]
};

