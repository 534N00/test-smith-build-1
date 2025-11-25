export const typographyStudentBank = {
  multipleChoice: [
    {
      type: "multiple-choice",
      question: "In the lecture, typography is described as:",
      options: [
        "The design and use of typefaces",
        "Only the process of drawing letters by hand",
        "Choosing colors for icons",
        "Writing content without any formatting"
      ],
      answer: 0,
      aiResponses: [
        "Correct! Typography is the design and use of typefaces.",
        "Hand lettering can be related but is not the full definition here.",
        "Color choices are part of visual design, not typography alone.",
        "Typography is specifically about how text is styled and presented."
      ]
    },
    {
      type: "multiple-choice",
      question: "Which statement about serif vs. sans-serif in the slides is accurate?",
      options: [
        "Serif typefaces are always better on low-dpi screens.",
        "Sans serif typefaces are useful for short, large text like titles.",
        "Serif typefaces are never used for body text.",
        "Sans serif fonts cannot be used in user interfaces."
      ],
      answer: 1,
      aiResponses: [
        "The slides actually warn that serifs can be less legible on low-dpi displays.",
        "Correct! Sans serif typefaces are recommended for short large text such as titles and headings.",
        "Serifs are commonly used for body text, especially in print.",
        "Sans serif fonts are widely used in UIs like Android and maps."
      ]
    },
    {
      type: "multiple-choice",
      question: "What is 'leading' in typography?",
      options: [
        "The angle of italic letters",
        "The distance between baselines of lines of text",
        "The thickness of the letter strokes",
        "The overall style of a typeface family"
      ],
      answer: 1,
      aiResponses: [
        "Italics involve slant, but that’s not leading.",
        "Correct! Leading is the distance between the baselines of adjacent lines of text.",
        "Stroke thickness is more about weight.",
        "The overall style refers to the typeface itself, not leading."
      ]
    }
  ],

  freeResponse: [
    {
      type: "free-response",
      question: "What are the main goals of typography mentioned in the lecture?",
      correctTerms: ["readability", "legibility", "visual hierarchy", "meaning"],
      aiResponse:
        "A strong answer notes that typography should support readability and legibility, create a visual hierarchy, and reinforce or add meaning to the content."
    },
    {
      type: "free-response",
      question: "Why did Google develop Roboto for use in Maps and Android, according to the slides?",
      correctTerms: ["legibility", "small screen", "dense text", "modern appearance"],
      aiResponse:
        "A good answer explains that Roboto was designed to improve legibility of dense text on small screens and to provide a modern, consistent appearance across Google products."
    },
    {
      type: "free-response",
      question: "What practical factors should designers consider when choosing typefaces for a product?",
      correctTerms: ["goals", "content", "context", "audience", "medium"],
      aiResponse:
        "An effective response mentions typographic goals (legibility, readability, meaning), the nature of the content (code, chat, reports), the context (mobile, driving, lecture room), the medium (online, print, TV), and the intended audience."
    }
  ],

  trueFalse: [
    {
      type: "true-false",
      question: "Monospaced typefaces give every character the same width.",
      answer: "true",
      aiResponse: "True. The slides define monospaced fonts as giving each character the same width."
    },
    {
      type: "true-false",
      question: "According to the lecture, there is a single best typeface that works in all situations.",
      answer: "false",
      aiResponse:
        "False. The lecture emphasizes that there are hundreds of typefaces and no single best choice; it depends on goals, content, context, and audience."
    },
    {
      type: "true-false",
      question: "Highway signs in the U.S. use a special typeface designed to maximize legibility at a distance.",
      answer: "true",
      aiResponse:
        "True. The slides mention the FHA’s 'Highway Gothic' typeface for road signage to maximize legibility."
    }
  ],

  sentenceCompletion: [
    {
      type: "sentence-completion",
      question: "Typography is described as the user interface of ________.",
      answer: "text",
      aiResponse: "Typography is called the user interface of text."
    },
    {
      type: "sentence-completion",
      question: "In mobile apps, body text is recommended at a minimum of ________sp.",
      answer: "16",
      aiResponse: "The lecture suggests body text should be at least 16sp."
    },
    {
      type: "sentence-completion",
      question: "The distance between baselines of two adjacent lines of text is called ________.",
      answer: "leading",
      aiResponse: "That spacing is known as leading."
    }
  ],

  selection: [
    {
      type: "select-all",
      question: "Which typographic attributes are highlighted in the lecture?",
      options: [
        "Baseline",
        "Ascent and descent",
        "X-height",
        "Parallax",
        "Weight"
      ],
      answers: [0, 1, 2, 4],
      aiResponses: [
        "✅ Baseline is one of the key attributes.",
        "✅ Ascent and descent are mentioned as vertical metrics.",
        "✅ X-height is discussed and illustrated.",
        "❌ Parallax is not a typographic attribute here.",
        "✅ Weight (light/bold) is part of type attributes."
      ]
    },
    {
      type: "select-all",
      question: "In the lecture examples, which contexts are used to illustrate how type choices affect legibility?",
      options: [
        "Interactive maps on mobile",
        "Source code editors",
        "Highway signs",
        "Newspaper ads in the 1800s",
        "Auto UIs while driving"
      ],
      answers: [0, 1, 2, 4],
      aiResponses: [
        "✅ Maps use Roboto to maximize legibility on small screens.",
        "✅ Source code editors like Android Studio use monospaced fonts such as Consolas.",
        "✅ Highway signs use Highway Gothic for legibility at a distance.",
        "❌ Historical newspaper ads are not used as an example.",
        "✅ Auto UIs (e.g., Android Auto) use large sans serif text for glanceability."
      ]
    },
    {
      type: "select-all",
      question: "Which practical recommendations are given for mobile app typography?",
      options: [
        "Use system typefaces like Roboto for body text and controls.",
        "Use high contrast between text and background.",
        "Make headings extremely long, with many lines.",
        "Keep body text at least 16sp.",
        "Choose only decorative script fonts for small labels."
      ],
      answers: [0, 1, 3],
      aiResponses: [
        "✅ The slides recommend using system typefaces such as Roboto.",
        "✅ High text–background contrast is encouraged.",
        "❌ Headings should be at most 2–3 lines, not extremely long.",
        "✅ A minimum of 16sp is suggested for body text.",
        "❌ Decorative script is not recommended for small, functional labels."
      ]
    }
  ]
};
