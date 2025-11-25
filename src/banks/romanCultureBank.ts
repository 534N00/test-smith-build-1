export const romanCultureBank = {
    multipleChoice: [
        {
            type: "multiple-choice",
            question: "What kinds of events was the Colosseum in Rome primarily used for?",
            options: [
                "Senate meetings and elections",
                "Gladiatorial combats, wild beast fights, and mock naval battles",
                "Religious processions only",
                "Markets and trade fairs"
            ],
            answer: 1,
            aiResponses: [
                "No, political meetings were held elsewhere, not mainly in the Colosseum.",
                "Correct! It hosted gladiator combats, animal hunts (venationes), and mock naval battles (naumachiae).",
                "Religious processions could occur in Rome, but this was not the Colosseum’s primary role.",
                "Markets were held in other public spaces, not as the main purpose of the Colosseum."
            ]
        },
        {
            type: "multiple-choice",
            question: "Where were gladiators trained before fighting in arenas or circuses?",
            options: [
                "In ludi, specialized training schools",
                "In the private homes of senators",
                "In military legions on campaign",
                "In public baths"
            ],
            answer: 0,
            aiResponses: [
                "Correct! Gladiators were trained in ludi (singular: ludus) before appearing in the arena.",
                "No, gladiator training was formalized in special schools, not senators’ homes.",
                "Legions trained soldiers, not professional gladiators.",
                "Baths were for washing and socializing, not for systematic gladiator training."
            ]
        },
        {
            type: "multiple-choice",
            question: "What was one major purpose of Roman aqueducts?",
            options: [
                "To move armies quickly across the Empire",
                "To bring potable water to crowded urban populations",
                "To serve as defensive walls around cities",
                "To display religious statues of the gods"
            ],
            answer: 1,
            aiResponses: [
                "Moving armies was the function of Roman roads, not aqueducts.",
                "Correct! Aqueducts carried water over many miles to supply cities with relatively safe drinking water and water for latrines.",
                "Defensive walls were different structures; aqueducts transported water.",
                "While aqueducts were impressive, their primary role was practical, not for displaying statues."
            ]
        },
        {
            type: "multiple-choice",
            question: "What were Roman viae (roads) especially important for?",
            options: [
                "Carrying only merchants and traders",
                "Moving armies efficiently across the Empire",
                "Keeping wild animals away from farms",
                "Separating social classes within the city"
            ],
            answer: 1,
            aiResponses: [
                "Merchants used the roads, but their main strategic purpose was something else.",
                "Correct! Viae acted as the veins and arteries of the Roman military system, letting armies march from the Euphrates to the Atlantic.",
                "They were not built specifically for keeping animals out.",
                "Roads connected regions, not social classes, within the city."
            ]
        },
        {
            type: "multiple-choice",
            question: "How did ancient Roman priests mainly function in society?",
            options: [
                "As personal spiritual advisors hearing confessions",
                "As miracle workers who healed the sick directly",
                "As administrative officials performing rituals correctly",
                "As military commanders who led legions into battle"
            ],
            answer: 2,
            aiResponses: [
                "They were not primarily personal confessors in the later sense.",
                "Healing the sick by miracle was not their main defined role.",
                "Correct! They were administrative officials charged with performing rituals with scrupulous care to maintain the gods’ goodwill.",
                "Military command belonged to magistrates and generals, not priests in general."
            ]
        }
    ],

    freeResponse: [
        {
            type: "free-response",
            question: "Explain how the Romans borrowed from Greek culture and then spread their own culture across the Empire.",
            correctTerms: ["greeks", "etruscans", "borrow", "adapt", "spread", "empire"],
            aiResponse:
                "A strong answer would mention that early Romans adopted cultural elements from their neighbors, especially Greeks and Etruscans, then adapted them with a distinct Roman stamp and spread this Romanized culture throughout the Empire."
        },
        {
            type: "free-response",
            question: "Describe the main features and purposes of Roman aqueducts and sewers.",
            correctTerms: ["aqueducts", "water", "latrines", "sewers", "cloaca maxima", "tiber"],
            aiResponse:
                "A good answer would say that Roman aqueducts carried water for many miles to supply cities with potable water and latrines, and that sewers like the Cloaca Maxima drained waste into the Tiber River."
        },
        {
            type: "free-response",
            question: "What was the Pantheon, and what was distinctive about its construction?",
            correctTerms: ["pantheon", "all gods", "temple", "dome", "rotunda", "portico", "columns"],
            aiResponse:
                "An effective answer would note that the Pantheon was a temple for all the gods, featuring a huge domed brick-faced concrete rotunda and a rectangular Corinthian portico with granite columns."
        },
        {
            type: "free-response",
            question: "Summarize Roman beliefs and practices surrounding burial and the journey to the land of the dead.",
            correctTerms: ["washed", "laid out", "coin", "charon", "ferryman", "eight days", "burial"],
            aiResponse:
                "A strong response would explain that the dead person was washed, dressed in fine clothes, laid out for about eight days, and given a coin on the mouth, under the tongue, or on the eyes to pay Charon the ferryman for passage to the land of the dead before being taken out for burial."
        },
        {
            type: "free-response",
            question: "How did Greek and Roman thinkers contribute to medicine and philosophy?",
            correctTerms: ["medicine", "regimen", "diet", "exercise", "observation", "stoicism", "epicureanism", "ethics"],
            aiResponse:
                "A good answer would mention that Greek and Roman medicine moved from magic-based practices toward regimens involving diet, exercise, observation, and diagnosis, and that philosophies like Stoicism and Epicureanism focused on ethics, virtue, and quality of life."
        }
    ],

    trueFalse: [
        {
            type: "true-false",
            question: "Roman theater combined translated Greek plays with native Italian song, dance, farce, and improv.",
            answer: "true",
            aiResponse: "True. Roman theater began as Greek material mixed with local song, dance, farce, and improvisation."
        },
        {
            type: "true-false",
            question: "Roman gladiators usually fought only mock battles and were rarely in serious danger.",
            answer: "false",
            aiResponse: "False. Gladiators fought in violent contests, often to the death, to entertain crowds."
        },
        {
            type: "true-false",
            question: "Latrines in ancient Rome could seat many people at once and offered little privacy.",
            answer: "true",
            aiResponse: "True. Latrines sometimes served 12–60 people at once and had no dividers or toilet paper."
        },
        {
            type: "true-false",
            question: "Most Roman and Greek gods are entirely different figures with no overlapping traits.",
            answer: "false",
            aiResponse: "False. Many Roman and Greek gods share similar attributes and are roughly the same deities with different names."
        },
        {
            type: "true-false",
            question: "In Roman marriage, parents sometimes arranged matches to form political alliances and secure descendants.",
            answer: "true",
            aiResponse: "True. Marriages could create alliances that helped political careers and ensured descendants to tend ancestral spirits."
        }
    ],

    sentenceCompletion: [
        {
            type: "sentence-completion",
            question: "The sandy floor that absorbed blood gave the Roman ________ its name.",
            answer: "arena",
            aiResponse: "The correct word is 'arena', from harena, meaning sand."
        },
        {
            type: "sentence-completion",
            question: "The main sewer of Rome was called the Cloaca ________.",
            answer: "Maxima",
            aiResponse: "It was known as the Cloaca Maxima, the great sewer that emptied into the Tiber."
        },
        {
            type: "sentence-completion",
            question: "Roman roads, or ________, acted as the veins and arteries of the military system.",
            answer: "viae",
            aiResponse: "The Latin word 'viae' refers to the network of Roman roads."
        },
        {
            type: "sentence-completion",
            question: "The Roman ________ was a temple dedicated to all the gods.",
            answer: "Pantheon",
            aiResponse: "The missing word is 'Pantheon', meaning a temple for all gods."
        },
        {
            type: "sentence-completion",
            question: "Ethical schools like ________ and Epicureanism focused on virtue and quality of life.",
            answer: "Stoicism",
            aiResponse: "The text mentions 'Stoicism' alongside Epicureanism as ethical philosophies."
        }
    ],

    selection: [
        {
            type: "select-all",
            question: "Which of the following are Roman engineering achievements mentioned in the reading?",
            options: [
                "Aqueducts that carried water long distances",
                "Sewers like the Cloaca Maxima",
                "Massive stone pyramids as royal tombs",
                "Bridges that still span rivers",
                "Roads (viae) stretching across the Empire",
                "Huge underground subway tunnels"
            ],
            answers: [0, 1, 3, 4],
            aiResponses: [
                "✅ Aqueducts are highlighted as major engineering feats.",
                "✅ The Cloaca Maxima is a famous Roman sewer.",
                "❌ Pyramids are associated with Egypt, not Roman engineering here.",
                "✅ The text notes that some Roman-built bridges still span rivers.",
                "✅ Roman roads connected the Empire from the Euphrates to the Atlantic.",
                "❌ Subways are a modern development, not part of ancient Roman culture."
            ]
        },
        {
            type: "select-all",
            question: "Which items relate to Roman religion and belief as described?",
            options: [
                "Pantheon, a temple for all gods",
                "Priests as careful ritual officials",
                "Coin for Charon placed with the dead",
                "Belief that gods had to be tricked to get their help",
                "Roman and Greek gods sharing similar attributes",
                "Complete rejection of Greek myths"
            ],
            answers: [0, 1, 2, 4],
            aiResponses: [
                "✅ The Pantheon is explicitly described as a temple for all gods.",
                "✅ Priests are described as administrative officials who perform rituals with exactness.",
                "✅ A coin was placed with the dead to pay Charon, the ferryman.",
                "❌ The focus is on proper ritual, not on tricking the gods.",
                "✅ Many Roman and Greek gods shared attributes and were considered roughly the same.",
                "❌ The text does not say Romans totally rejected Greek myths."
            ]
        },
        {
            type: "select-all",
            question: "Which of the following describe how Romans influenced later cultures, according to the reading?",
            options: [
                "Their satire and theater forms influenced later entertainment, including modern sit-coms.",
                "Their roads and bridges shaped where later cities and routes developed.",
                "Their medical ideas helped shift from magic to observation and regimens.",
                "Their written language replaced all other languages in Europe permanently.",
                "Their architectural forms, like domes and colonnades, inspired later buildings.",
                "Their philosophy had no impact beyond their own lifetime."
            ],
            answers: [0, 1, 2, 4],
            aiResponses: [
                "✅ Roman theater and satire contributed patterns still seen in modern entertainment.",
                "✅ The text notes that distant cities are located along remnants of Roman roads and bridges.",
                "✅ Greek and Roman medicine advanced practice from magic toward regimen, observation, and diagnosis.",
                "❌ Latin did not permanently replace every other European language.",
                "✅ Roman architecture, including domes and temples like the Pantheon, influenced later structures.",
                "❌ Greek and Roman philosophies like Stoicism and Epicureanism had lasting influence."
            ]
        }
    ]
};