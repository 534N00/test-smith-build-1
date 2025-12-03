import { TestBank } from "../util/test/types";



export const romanDeclineBank: TestBank = {
    topic: "Roman Decline",
    multipleChoice: [
        {
            type: "multiple-choice",
            question: "According to the slides, which group proposes that the Roman Empire 'survived in all its essentials until the coming of Islam'?",
            options: ["Edward Gibbon", "Henri Pirenne", "Arnold Toynbee", "J.B. Bury"],
            answer: 1,
            aiResponses: [
                "Gibbon wrote a classic narrative of decline but did not make this specific claim.",
                "Correct! Pirenne argued that the Empire’s essentials survived until Islamic expansion around 800 [Decline of Roman Empire, pg. 6].",
                "Toynbee discussed civilizations broadly, not this precise thesis.",
                "Bury spoke of 'death by accident', but not Pirenne’s survival thesis."
            ]
        },
        {
            type: "multiple-choice",
            question: "Which of the following is listed as an INTERNAL factor in the decline of the Western Roman Empire?",
            options: [
                "Barbarian invasions",
                "Islamic expansion",
                "Political disintegration",
                "Hunnic pressure from Central Asia"
            ],
            answer: 2,
            aiResponses: [
                "Barbarian invasions are categorized as external.",
                "Islamic expansion appears later in Pirenne’s thesis, not as an internal factor.",
                "Correct! Political disintegration is one of the internal causes listed [Decline of Roman Empire, pg. 4].",
                "Hunnic pressure is part of the external barbarian invasions."
            ]
        },
        {
            type: "multiple-choice",
            question: "Which event traditionally marks the deposition of the last Western Roman emperor?",
            options: [
                "Alaric’s sack of Rome in 410",
                "The death of Marcus Aurelius in 180",
                "Odovacar deposing Romulus Augustulus in 476",
                "The coronation of Charlemagne in 800"
            ],
            answer: 2,
            aiResponses: [
                "The sack of Rome in 410 is important but not the final deposition.",
                "180 marks a 'gold to iron' turning point, not the fall itself.",
                "Correct! In 476, Odovacar deposed Romulus Augustulus [Decline of Roman Empire, pg. 7].",
                "800 is used in Pirenne’s discussion of Islam, not the standard fall date."
            ]
        }
    ],

    freeResponse: [
        {
            type: "free-response",
            question: "Summarize the difference between internal and external causes of Roman decline as presented in the slides.",
            correctTerms: ["internal", "external", "political disintegration", "population", "social", "economic", "barbarian", "invasions"],
            aiResponse: "A strong answer distinguishes internal problems—such as political disintegration, falling population, social and economic decline, and intellectual stagnation—from external pressures, especially barbarian invasions and infiltration [Decline of Roman Empire, pg. 4]."
        },
        {
            type: "free-response",
            question: "Describe the role of barbarian invasions in the fall of the Western Roman Empire, including both short-term and longer-term effects.",
            correctTerms: ["barbarian", "Huns", "Goths", "Visigoths", "Ostrogoths", "Odovacar", "acceleration", "Middle Ages"],
            aiResponse: "A good answer notes that barbarians such as Huns, Goths, Visigoths, and Ostrogoths invaded; short-term life often stayed 'still Roman,' but long-term the invasions accelerated western decline, leading to a 'barbarian West' and the start of the Middle Ages, symbolized by Odovacar’s deposition of Romulus Augustulus [Decline of Roman Empire, pg. 7-9]."
        },
        {
            type: "free-response",
            question: "Explain the four 'categories of death' used to interpret the end of the Roman Empire.",
            correctTerms: ["accident", "natural causes", "murder", "suicide", "historians"],
            aiResponse: "An effective response lists the four categories: death by accident (Bury), natural causes (Gibbon, Boak, Walbank), murder by barbarians (Gibbon, Toynbee), and suicide (Westermann), framing different explanations for Rome’s end [Decline of Roman Empire, pg. 10]."
        }
    ],

    trueFalse: [
        {
            type: "true-false",
            question: "According to the slides, both internal problems and external invasions contributed to Rome’s decline.",
            answer: "true",
            aiResponse: "True. The outline explicitly contrasts internal and external factors in the fall [Decline of Roman Empire, pg. 4]."
        },
        {
            type: "true-false",
            question: "The slides present Christianity as the only cause of Rome’s fall.",
            answer: "false",
            aiResponse: "False. Christianity is raised as a question, but many other internal and external causes are listed [Decline of Roman Empire, pg. 4]."
        },
        {
            type: "true-false",
            question: "The phrase 'from a kingdom of gold to one of iron & rust' is used to describe a perceived decline after the death of Aurelius.",
            answer: "true",
            aiResponse: "True. A Roman historian is quoted saying this about the period after Marcus Aurelius’s death [Decline of Roman Empire, pg. 7]."
        }
    ],

    sentenceCompletion: [
        {
            type: "sentence-completion",
            question: "Henri ________ argued that the Roman Empire survived in essentials until the coming of Islam.",
            answer: "Pirenne",
            aiResponse: "The historian is Henri Pirenne [Decline of Roman Empire, pg. 6]."
        },
        {
            type: "sentence-completion",
            question: "In 476, the Germanic general ________ deposed Romulus Augustulus.",
            answer: "Odovacar",
            aiResponse: "Odovacar removed the last Western Roman emperor [Decline of Roman Empire, pg. 7]."
        },
        {
            type: "sentence-completion",
            question: "The invasion leader associated with the 410 sack of Rome is ________.",
            answer: "Alaric",
            aiResponse: "The Visigothic leader was Alaric [Decline of Roman Empire, pg. 7]."
        }
    ],

    selection: [
        {
            type: "select-all",
            question: "Which of the following are listed as possible internal problems contributing to Rome’s decline?",
            options: [
                "Political disintegration",
                "Population decrease",
                "Social and economic decline",
                "Barbarian invasions",
                "Intellectual decline",
                "Islamic expansion"
            ],
            answers: [0, 1, 2, 4],
            aiResponses: [
                "✅ Political disintegration appears under internal causes [Decline of Roman Empire, pg. 4].",
                "✅ Population decrease is mentioned (with possible causes like lead poisoning) [Decline of Roman Empire, pg. 4].",
                "✅ Social and economic decline is listed internally [Decline of Roman Empire, pg. 4].",
                "❌ Barbarian invasions are external.",
                "✅ Intellectual decline appears among internal factors [Decline of Roman Empire, pg. 4].",
                "❌ Islamic expansion is part of Pirenne’s later thesis, not in the internal list."
            ]
        },
        {
            type: "select-all",
            question: "Which groups are mentioned as socio-economic historians of Roman decline?",
            options: [
                "Lynn White Jr.",
                "Marc Bloch",
                "Henri Pirenne",
                "Edward Gibbon",
                "J.B. Bury"
            ],
            answers: [0, 1, 2],
            aiResponses: [
                "✅ Lynn White Jr. is included among socio-economic historians [Decline of Roman Empire, pg. 5].",
                "✅ Marc Bloch is also listed there [Decline of Roman Empire, pg. 5].",
                "✅ Henri Pirenne appears in that group as well [Decline of Roman Empire, pg. 5].",
                "❌ Gibbon is discussed elsewhere but not in that bullet list.",
                "❌ Bury appears later with the 'death by accident' view, not as a socio-economic historian."
            ]
        },
        {
            type: "select-all",
            question: "Which barbarian groups are explicitly mentioned in the slides?",
            options: [
                "Huns",
                "Visigoths",
                "Ostrogoths",
                "Vikings",
                "Vandals"
            ],
            answers: [0, 1, 2, 4],
            aiResponses: [
                "✅ The Huns are mentioned, including Attila [Decline of Roman Empire, pg. 7-8].",
                "✅ Visigoths are named as one of the Germanic peoples [Decline of Roman Empire, pg. 7-8].",
                "✅ Ostrogoths also appear in the list [Decline of Roman Empire, pg. 7-8].",
                "❌ Vikings are not discussed in these slides.",
                "✅ Vandals are mentioned along with other groups [Decline of Roman Empire, pg. 7-8]."
            ]
        }
    ]
};