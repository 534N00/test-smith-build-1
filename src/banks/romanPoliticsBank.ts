export const romanPoliticsBank = {
    multipleChoice: [
        {
            type: "multiple-choice",
            question: "Why did the Romans overthrow their last Etruscan king, Tarquin the Proud?",
            options: [
                "He attempted to convert Rome to Greek religion.",
                "He ruled as a harsh tyrant.",
                "He invited Carthage to rule Rome.",
                "He abolished the Roman Senate."
            ],
            answer: 1,
            aiResponses: [
                "No, religion was not the primary issue mentioned.",
                "Correct! Tarquin the Proud was described as a very harsh tyrant, which led to his overthrow.",
                "No, there is no mention of such an invitation.",
                "The Senate continued to exist; this was not the cause of his removal."
            ]
        },
        {
            type: "multiple-choice",
            question: "Which group represented the executive branch of the Roman Republic?",
            options: [
                "Consuls and magistrates",
                "Senators and tribunes",
                "Plebeian Council",
                "Assembly of the Centuries"
            ],
            answer: 0,
            aiResponses: [
                "Correct! The executive branch consisted of consuls and various magistrates.",
                "No, these groups were part of the legislative branch.",
                "The Plebeian Council belonged to the legislative/judicial sphere.",
                "The Assembly of the Centuries was a legislative voting body, not executive."
            ]
        },
        {
            type: "multiple-choice",
            question: "Which Roman assembly allowed Plebeians to pass laws and elect magistrates?",
            options: [
                "Assembly of the Curia",
                "Assembly of the Centuries",
                "Plebeian Council",
                "Senate"
            ],
            answer: 2,
            aiResponses: [
                "No, the Curia assembly was an early foundational assembly.",
                "No, the Centuries assembly represented soldiers of various wealth classes.",
                "Correct! The Plebeian Council allowed commoners to pass laws and elect magistrates.",
                "The Senate advised and administered but was not the plebeian law-making body."
            ]
        },
        {
            type: "multiple-choice",
            question: "Which major legal development formed the basis of early Roman written law?",
            options: [
                "Code of Hammurabi",
                "Twelve Tables",
                "Justinian Code",
                "Lex Hortensia"
            ],
            answer: 1,
            aiResponses: [
                "That was Babylonian, not Roman.",
                "Correct! The Twelve Tables were Rome’s first codified laws, created around 450 BCE.",
                "The Justinian Code was created much later during the Byzantine Empire.",
                "Lex Hortensia was a significant law but not the earliest written legal code."
            ]
        },
        {
            type: "multiple-choice",
            question: "Who initiated the Pax Romana and established a monarchy disguised as a republic?",
            options: [
                "Julius Caesar",
                "Tarquin the Proud",
                "Gaius Marius",
                "Augustus (Octavian)"
            ],
            answer: 3,
            aiResponses: [
                "Caesar’s rule came earlier; Augustus established the long peace that followed.",
                "Tarquin was an early king, not the founder of Pax Romana.",
                "Marius was a military commander, not the emperor who stabilized Rome.",
                "Correct! Augustus created a stable imperial system and began the Pax Romana."
            ]
        }
    ],

    freeResponse: [
        {
            type: "free-response",
            question: "Describe the structure of the Roman Republic and how power was balanced among branches.",
            correctTerms: ["executive", "legislative", "judicial", "consuls", "senate", "assemblies", "courts"],
            aiResponse:
                "A strong answer would mention the three-branch system: the executive (consuls and magistrates), legislative (Senate and assemblies), and judicial (councils and courts), designed to prevent any one man from holding too much power."
        },
        {
            type: "free-response",
            question: "Explain the role and power of the consuls in the Roman political system.",
            correctTerms: ["consuls", "one year", "veto", "army", "executive", "command"],
            aiResponse:
                "Consuls were the top executive officials elected for one year. They supervised the Senate, commanded the army, and each held veto power over the other."
        },
        {
            type: "free-response",
            question: "Summarize key problems that led to the fall of the Roman Republic.",
            correctTerms: ["wealth", "elite", "landless", "civil war", "marius", "sulla", "senate", "plebeians"],
            aiResponse:
                "A good answer would mention wealth concentration among elites, displacement of farmers, rising landless citizens, conflict between Senate and Plebeians, and civil wars led by commanders like Marius and Sulla."
        },
        {
            type: "free-response",
            question: "What reforms did Julius Caesar implement during his dictatorship?",
            correctTerms: ["reforms", "debt", "citizenship", "land", "veterans", "building", "entertainment"],
            aiResponse:
                "Caesar relieved debt, redistributed land to veterans, extended citizenship to provincial people, and funded building and entertainment projects to stabilize Rome."
        },
        {
            type: "free-response",
            question: "Describe how emperors under the principate system combined different kinds of authority.",
            correctTerms: ["princeps", "imperium", "proconsulare", "maiis", "religious", "consul", "power"],
            aiResponse:
                "An accurate answer would explain that emperors were called princeps and held combined powers: executive authority of the consul, religious authority of the high priest, and absolute provincial command through imperium proconsulare and imperium proconsulare maius."
        }
    ],

    trueFalse: [
        {
            type: "true-false",
            question: "In the Roman Republic, each consul could veto the actions of the other.",
            answer: "true",
            aiResponse: "True. This ensured that no single consul held unchecked power."
        },
        {
            type: "true-false",
            question: "The Senate in the Republic had complete legislative authority and passed all major laws.",
            answer: "false",
            aiResponse:
                "False. The Senate advised and controlled finances and foreign relations but had limited legislative authority."
        },
        {
            type: "true-false",
            question: "The Twelve Tables were the first written codification of Roman law.",
            answer: "true",
            aiResponse:
                "True. The Twelve Tables were Rome’s foundational legal code, inscribed around 450 BCE."
        },
        {
            type: "true-false",
            question: "Gaius Marius and Sulla fought on the same side during the Roman civil wars.",
            answer: "false",
            aiResponse:
                "False. They led opposing factions—Marius for plebeian interests and Sulla for patrician dominance."
        },
        {
            type: "true-false",
            question: "Augustus restored the Republic fully and surrendered his powers after stabilizing Rome.",
            answer: "false",
            aiResponse:
                "False. He preserved the appearance of a republic but concentrated ultimate authority in himself."
        }
    ],

    sentenceCompletion: [
        {
            type: "sentence-completion",
            question: "The two top executives of the Roman Republic were the ________.",
            answer: "consuls",
            aiResponse: "The correct term is 'consuls'."
        },
        {
            type: "sentence-completion",
            question: "Rome’s first written legal code was known as the Twelve ________.",
            answer: "Tables",
            aiResponse: "This refers to the Twelve Tables."
        },
        {
            type: "sentence-completion",
            question: "Julius Caesar extended Roman ________ to people in conquered provinces.",
            answer: "citizenship",
            aiResponse: "He broadened Roman citizenship as part of his reforms."
        },
        {
            type: "sentence-completion",
            question: "Augustus established a long period of stability called the Pax ________.",
            answer: "Romana",
            aiResponse: "This refers to the Pax Romana."
        },
        {
            type: "sentence-completion",
            question: "Under the principate, the emperor held both executive and ________ authority.",
            answer: "religious",
            aiResponse: "He held religious authority as high priest."
        }
    ],

    selection: [
        {
            type: "select-all",
            question: "Which groups made up the legislative branch of the Roman Republic?",
            options: [
                "Senate",
                "Assembly of the Curia",
                "Assembly of the Centuries",
                "Assembly of the Tribes",
                "Consuls"
            ],
            answers: [0, 1, 2, 3],
            aiResponses: [
                "✅ Part of the legislative/advisory structure.",
                "✅ One of the earliest assemblies.",
                "✅ The Army Assembly, part of Rome’s legislative system.",
                "✅ A democratic assembly of Roman citizens.",
                "❌ Consuls were executive officials, not legislators."
            ]
        },
        {
            type: "select-all",
            question: "Which issues contributed to the fall of the Roman Republic?",
            options: [
                "Concentration of wealth among elites",
                "Landless farmers",
                "Civil wars led by military commanders",
                "Smooth cooperation between Senate and Plebeians",
                "Debt crisis"
            ],
            answers: [0, 1, 2, 4],
            aiResponses: [
                "✅ Wealth inequality was a major factor.",
                "✅ Many poor farmers lost land and became landless.",
                "✅ Commanders like Marius and Sulla escalated conflicts into civil war.",
                "❌ There was growing conflict, not cooperation.",
                "✅ Debt problems destabilized social and political structures."
            ]
        },
        {
            type: "select-all",
            question: "Which reforms or actions are associated with Julius Caesar?",
            options: [
                "Relieving debt",
                "Redistributing land to veterans",
                "Extending citizenship",
                "Starting the Pax Romana",
                "Using wealth to promote public building and entertainment"
            ],
            answers: [0, 1, 2, 4],
            aiResponses: [
                "✅ Caesar relieved debt during his rule.",
                "✅ He granted land to his veterans.",
                "✅ He extended Roman citizenship to people in conquered provinces.",
                "❌ The Pax Romana was begun by Augustus, not Caesar.",
                "✅ He funded public buildings and entertainment to stabilize Rome."
            ]
        }
    ]
};
