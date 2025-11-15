
export const romanBank = {
    testTitle: "Roman History Test",
    multipleChoice: [
        {
            type: "multiple-choice",
            question: "Who was the first Roman emperor?",
            options: ["Julius Caesar", "Augustus", "Tiberius", "Nero"],
            answer: 1,
            aiResponses: [
                "Incorrect. Julius Caesar paved the way but was never officially emperor.",
                "Correct! Augustus became the first Roman emperor in 27 BCE.",
                "Tiberius was the second emperor, ruling after Augustus.",
                "Nero ruled later in the Julio-Claudian dynasty but was not the first."
            ]
        },
        {
            type: "multiple-choice",
            question: "Which river runs through Rome?",
            options: ["Nile", "Tiber", "Danube", "Rhine"],
            answer: 1,
            aiResponses: [
                "Incorrect. The Nile is in Egypt.",
                "Correct! The Tiber River flows through Rome.",
                "The Danube flows through central and eastern Europe, not Rome.",
                "The Rhine is located in western and central Europe."
            ]
        },
        {
            type: "multiple-choice",
            question: "What was the primary governing body of the Roman Republic?",
            options: ["The Senate", "The Assembly", "The Triumvirate", "The Consulate"],
            answer: 0,
            aiResponses: [
                "Correct! The Senate held major political authority during the Republic.",
                "The Assembly had power but was not the primary governing body.",
                "Triumvirates were temporary political alliances, not a governing body.",
                "The Consuls executed laws but were not the primary deliberative body."
            ]
        },
        {
            type: "multiple-choice",
            question: "Which Roman general crossed the Rubicon River, sparking civil war?",
            options: ["Pompey", "Crassus", "Julius Caesar", "Sulla"],
            answer: 2,
            aiResponses: [
                "Pompey opposed Caesar during the civil war.",
                "Crassus died in 53 BCE and was not involved in this event.",
                "Correct! Julius Caesar crossed the Rubicon in 49 BCE.",
                "Sulla marched on Rome earlier but did not cross the Rubicon."
            ]
        },
        {
            type: "multiple-choice",
            question: "What structure was primarily used for gladiatorial combat?",
            options: ["Circus Maximus", "Pantheon", "Colosseum", "Baths of Caracalla"],
            answer: 2,
            aiResponses: [
                "Circus Maximus hosted chariot races, not gladiator fights.",
                "The Pantheon was a temple, not an arena.",
                "Correct! The Colosseum was the main venue for gladiatorial games.",
                "Baths were public bathing complexes, not arenas."
            ]
        }
    ],

    freeResponse: [
        {
            type: "free-response",
            question: "What were some key causes of the fall of the Western Roman Empire?",
            correct: false,
            aiResponse: "A strong answer might include political instability, economic troubles, military defeats, overreliance on mercenaries, and pressure from invading groups like the Visigoths and Vandals."
        },
        {
            type: "free-response",
            question: "Describe the significance of the Pax Romana.",
            correct: false,
            aiResponse: "The Pax Romana was a long period of peace and stability (27 BCE–180 CE) that allowed trade, culture, and infrastructure to flourish across the empire."
        },
        {
            type: "free-response",
            correct: false,
            question: "Explain why Julius Caesar was assassinated.",
            aiResponse: "Caesar was assassinated because many senators feared he was becoming too powerful, undermining the Republic and potentially becoming a tyrant."
        },
        {
            type: "free-response",
            correct: false,
            question: "What role did Roman roads play in the empire?",
            aiResponse: "Roman roads enabled fast military movement, efficient trade, communication, and administrative control across vast distances."
        },
        {
            type: "free-response",
            correct: false,
            question: "How did Christianity spread throughout the Roman Empire?",
            aiResponse: "Christianity spread through missionary work, trade networks, urban centers, and eventually imperial support after Constantine's conversion."
        }
    ],

    trueFalse: [
        {
            type: "true-false",
            question: "The Roman Republic existed before the Roman Empire.",
            answer: "true",
            aiResponse: "The Republic lasted from 509 to 27 BCE."
        },
        {
            type: "true-false",
            question: "Hadrian's Wall was built to protect Rome from invasions in Egypt.",
            answer: "false",
            aiResponse: "Hadrian's Wall defended the northern frontier in Britain."
        },
        {
            type: "true-false",
            question: "Romans spoke primarily Greek as their official language.",
            answer: "false",
            aiResponse: "Latin was Rome's primary language."
        },
        {
            type: "true-false",
            question: "The Colosseum could hold tens of thousands of spectators.",
            answer: "true",
            aiResponse: "It could seat tens of thousands."
        },
        {
            type: "true-false",
            question: "Julius Caesar was Rome's first emperor.",
            answer: "false",
            aiResponse: "Augustus was the first emperor, not Caesar."
        }
    ],

    sentenceCompletion: [
        {
            type: "sentence-completion",
            question: "All roads lead to ________",
            answer: "Rome",
            aiResponse: "The phrase ends with 'Rome' and reflects the vast Roman road network."
        },
        {
            type: "sentence-completion",
            question: "Veni, vidi, ________",
            answer: "vici",
            aiResponse: "The phrase ends with 'vici'."
        },
        {
            type: "sentence-completion",
            question: "SPQR stands for Senatus Populusque ________",
            answer: "Romanus",
            aiResponse: "THis missing word is 'Romanus', meaning 'The Senate and People of Rome'."
        },
        {
            type: "sentence-completion",
            question: "The Ides of ________",
            answer: "March",
            aiResponse: "The Ides of March marked the beginning of the Roman year."
        },
        {
            type: "sentence-completion",
            question: "Pax ________",
            answer: "Romana",
            aiResponse: "'Pax Romana' refers to Roman peace."
        }
    ],

    selection: [
        {
            type: "select-all",
            question: "Which of the following were major Roman gods?",
            answers: [0, 2, 4],
            options: ["Jupiter", "Odin", "Mars", "Zeus", "Venus"],
            aiResponses: ["✅", "❌ This is a Norse god.", "✅", "❌ This is the Greek version of Jupiter.", "✅"]
        },
        {
            type: "select-all",
            question: "Which events contributed to the fall of Rome?",
            answers: [0, 1, 3],
            options: ["Barbarian invasions", "Economic decline", "Stable leadership", "Political corruption", "Rapid technological advancement"],
            aiResponses: ["✅", "✅", "❌ This would keep Rome stable.", "✅", "❌ This would make Rome even more prosperous."]
        },
        {
            type: "select-all",
            question: "Which of the following are the most important features of the Roman Empire?",
            answers: [0, 1, 2, 3, 4],
            options: ["Rome's military might", "Rome's economic prosperity", "Rome's political stability", "Rome's cultural diversity", "Rome's religious diversity"],
            aiResponses: ["✅", "✅", "✅", "✅", "✅"]
        },
        {
            type: "select-all",
            question: "What were things Romans commonly ate?",
            answers: [0, 1, 2, 3],
            options: ["Cereals", "Cheese", "Snails", "Chickpeas", "Song Birds"],
            aiResponses: ["✅ Wheat and barely primarily", "✅ Typically made from goat or sheep milk", "✅ A luxury for the wealthy", "✅ A favorite among legumes", "❌ That would be a waste of pleasant song"]
        }
    ]
};
