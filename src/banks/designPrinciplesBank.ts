export const designPrinciplesBank = {
  multipleChoice: [
    {
      type: "multiple-choice",
      question: "Which design principle is primarily about giving extra visual weight to the most important message?",
      options: ["Alignment", "Hierarchy", "Repetition", "Proximity"],
      answer: 1,
      aiResponses: [
        "Alignment is about lining elements up, not about signaling importance.",
        "Correct! Hierarchy focuses attention on the most important message first.",
        "Repetition ties a design together but does not by itself prioritize information.",
        "Proximity groups related items but is not the main tool for emphasizing importance."
      ]
    },
    {
      type: "multiple-choice",
      question: "What does the principle of proximity help you achieve in a layout?",
      options: [
        "Adding as many colors as possible",
        "Grouping related elements together",
        "Ensuring perfect symmetry",
        "Maximizing font variety"
      ],
      answer: 1,
      aiResponses: [
        "No, proximity is unrelated to color count.",
        "Correct! Proximity helps group related elements and declutter the design.",
        "Symmetry is related to balance, not proximity.",
        "Proximity is about grouping, not using many different fonts."
      ]
    },
    {
      type: "multiple-choice",
      question: "Which statement best describes negative space (white space) in design?",
      options: [
        "It is wasted space that should be filled with graphics.",
        "It creates shapes and helps highlight key information.",
        "It should only be used around text, never images.",
        "It is another term for background color."
      ],
      answer: 1,
      aiResponses: [
        "Actually, white space is not wasted; it is a powerful design tool.",
        "Correct! Negative space creates structure and draws attention to important content.",
        "It applies to text and images alike, not just text.",
        "Background color can be part of white space, but the concept is broader."
      ]
    }
  ],

  freeResponse: [
    {
      type: "free-response",
      question: "Explain how alignment improves the appearance and clarity of a design.",
      correctTerms: ["alignment", "sharp", "ordered", "connection", "center", "left", "right"],
      aiResponse:
        "A strong answer mentions that alignment gives a sharp, ordered appearance by lining elements up (center, left, right, or aligned to other objects) so they feel visually connected and easier to scan."
    },
    {
      type: "free-response",
      question: "How can contrast be used to accentuate important elements in a graphic?",
      correctTerms: ["contrast", "opposition", "color", "size", "bold", "emphasis"],
      aiResponse:
        "A good answer would say that contrast uses opposites—like dark vs. light colors, thick vs. thin lines, or bold vs. regular text—to make key elements stand out and draw the viewer’s eye."
    },
    {
      type: "free-response",
      question: "Describe the role of color in supporting design and brand identity.",
      correctTerms: ["color", "emotion", "brand", "three shades", "consistency"],
      aiResponse:
        "An effective response explains that color communicates emotion, supports brand recognition, and should be used consistently—often by choosing about three shades and sticking to them across designs."
    }
  ],

  trueFalse: [
    {
      type: "true-false",
      question: "Repetition of colors, fonts, or shapes can help people remember your brand and unify your design.",
      answer: "true",
      aiResponse: "True. Repetition reinforces brand identity and ties different parts of a design together."
    },
    {
      type: "true-false",
      question: "Balance in design always means creating perfectly symmetrical layouts.",
      answer: "false",
      aiResponse:
        "False. Balance can be symmetrical or asymmetrical; asymmetrical balance uses contrast to guide the eye."
    },
    {
      type: "true-false",
      question: "Negative space should be avoided because it makes a design look empty.",
      answer: "false",
      aiResponse:
        "False. Negative space is essential; it helps highlight important elements and keeps designs from feeling cluttered."
    }
  ],

  sentenceCompletion: [
    {
      type: "sentence-completion",
      question: "Design ________ helps you create a clear path for the viewer’s eye by emphasizing the most important message first.",
      answer: "hierarchy",
      aiResponse: "This is called visual 'hierarchy'."
    },
    {
      type: "sentence-completion",
      question: "Repeating colors, fonts, or shapes in different graphics creates visual ________.",
      answer: "consistency",
      aiResponse: "Repetition supports visual consistency across your content."
    },
    {
      type: "sentence-completion",
      question: "Leaving parts of a layout intentionally blank uses ________ space to support the design.",
      answer: "negative",
      aiResponse: "That blank area is known as 'negative' space or white space."
    }
  ],

  selection: [
    {
      type: "select-all",
      question: "Which of the following are among the eight basic design principles discussed in the article?",
      options: [
        "Alignment",
        "Hierarchy",
        "Repetition",
        "Drop shadows",
        "Negative space",
        "Proximity"
      ],
      answers: [0, 1, 2, 4, 5],
      aiResponses: [
        "✅ Alignment is one of the core principles.",
        "✅ Hierarchy is another key principle.",
        "✅ Repetition is explicitly included.",
        "❌ Drop shadows are a technique, not one of the eight named principles.",
        "✅ Negative space (white space) is a principle on the list.",
        "✅ Proximity is covered as an organizational principle."
      ]
    },
    {
      type: "select-all",
      question: "Which techniques can help you create strong visual hierarchy?",
      options: [
        "Using larger or bolder fonts",
        "Placing key information higher on the page",
        "Using shapes to frame important content",
        "Randomly changing alignment",
        "Making all text the same size"
      ],
      answers: [0, 1, 2],
      aiResponses: [
        "✅ Larger or bolder fonts help important text stand out.",
        "✅ Higher placement on the page gives content more emphasis.",
        "✅ Framing with shapes can focus attention on central points.",
        "❌ Random alignment usually weakens hierarchy.",
        "❌ If all text is the same size, hierarchy is lost."
      ]
    },
    {
      type: "select-all",
      question: "Which statements describe good use of color in design?",
      options: [
        "Use color to support your message and emotions.",
        "Stick to a small set of brand colors for consistency.",
        "Always use every color in the rainbow for interest.",
        "Be mindful of contrast so text stays legible.",
        "Ignore how color makes people feel."
      ],
      answers: [0, 1, 3],
      aiResponses: [
        "✅ Color should reinforce the message and emotional tone.",
        "✅ Limiting yourself to a brand palette keeps designs cohesive.",
        "❌ Too many colors usually makes designs chaotic.",
        "✅ Contrast between text and background helps readability.",
        "❌ Designers should absolutely consider the emotional effect of color."
      ]
    }
  ]
};
