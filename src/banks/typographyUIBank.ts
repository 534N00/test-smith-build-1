export const typographyUIBank = {
  multipleChoice: [
    {
      type: "multiple-choice",
      question: "Which of the following best defines typography in the context of UI design?",
      options: [
        "Only choosing decorative fonts for logos",
        "Using typefaces so copy is legible, clear, and enjoyable to read",
        "Creating illustrations without any text",
        "Setting all text in as many fonts as possible"
      ],
      answer: 1,
      aiResponses: [
        "Typography is much broader than logo decoration.",
        "Correct! Typography is the art of using typefaces to make copy legible, clear, and pleasant.",
        "Illustration can be part of UI, but typography deals with text.",
        "Using many fonts usually harms readability and consistency."
      ]
    },
    {
      type: "multiple-choice",
      question: "For digital interfaces, which type of typeface is generally preferred for body text readability?",
      options: ["Serif", "Sans-serif", "Script decorative", "Blackletter"],
      answer: 1,
      aiResponses: [
        "Serif fonts are traditional in print but less ideal on screens in this article.",
        "Correct! Sans-serif fonts are recommended for digital interfaces.",
        "Script fonts are usually harder to read in long passages.",
        "Blackletter is highly decorative and not suitable for standard UI text."
      ]
    },
    {
      type: "multiple-choice",
      question: "Which practice improves readability for long text blocks on screens?",
      options: [
        "Center-aligning all paragraphs",
        "Keeping line length within about 60–80 characters on desktop",
        "Using as little white space as possible",
        "Randomly varying line height"
      ],
      answer: 1,
      aiResponses: [
        "Full centering can hurt readability in long passages.",
        "Correct! The article recommends a line length of roughly 60–80 characters on large screens.",
        "White space should be used intentionally, not minimized at all costs.",
        "Line height should be tuned systematically, not random."
      ]
    }
  ],

  freeResponse: [
    {
      type: "free-response",
      question: "Describe how hierarchy and contrast work together in typography to guide users through a page.",
      correctTerms: ["hierarchy", "contrast", "headings", "sizes", "weights", "emphasis"],
      aiResponse:
        "A strong answer explains that hierarchy uses different sizes and weights to show which text is most important, while contrast (between fonts, sizes, or colors) emphasizes those key elements so users know what to read first."
    },
    {
      type: "free-response",
      question: "What typographic practices does the article recommend for improving readability?",
      correctTerms: ["left", "alignment", "white space", "line height", "letter spacing", "line length"],
      aiResponse:
        "A good answer mentions left alignment for most text, mindful white space, appropriate line-height (around 1.5 for 16px text), careful letter-spacing, and suitable line lengths so reading feels easy and low-effort."
    },
    {
      type: "free-response",
      question: "Explain what scalable fonts are and why they matter for responsive UI design.",
      correctTerms: ["scalable", "vector", "responsive", "resolution", "multiple sizes"],
      aiResponse:
        "An effective response notes that scalable (vector) fonts store outlines mathematically so they resize cleanly at different resolutions. This supports responsive design, where text must remain legible on many screen sizes."
    }
  ],

  trueFalse: [
    {
      type: "true-false",
      question: "Using many different typefaces in one interface usually improves consistency and clarity.",
      answer: "false",
      aiResponse:
        "False. The article suggests limiting typefaces, often to one family with different weights, to keep things cohesive."
    },
    {
      type: "true-false",
      question: "White space can help command users’ eyes and prevent text from feeling crowded.",
      answer: "true",
      aiResponse:
        "True. Mindful use of white space guides attention and reduces visual clutter, improving readability."
    },
    {
      type: "true-false",
      question: "Letter-spacing should often be increased for uppercase text to keep it readable.",
      answer: "true",
      aiResponse:
        "True. The article specifically recommends increasing letter-spacing for uppercase letters."
    }
  ],

  sentenceCompletion: [
    {
      type: "sentence-completion",
      question: "Typography aims to make copy ________, clear, and enjoyable to read.",
      answer: "legible",
      aiResponse: "Typography is about making copy legible, clear, and enjoyable."
    },
    {
      type: "sentence-completion",
      question: "A line-height of about ________ times the font size is suggested as a starting point for body text.",
      answer: "1.5",
      aiResponse: "The article recommends roughly 1.5× the font size for standard text."
    },
    {
      type: "sentence-completion",
      question: "Shorter lines are favored; on desktop, about 60–80 ________ per line are suggested.",
      answer: "characters",
      aiResponse: "The recommended line length is around 60–80 characters."
    }
  ],

  selection: [
    {
      type: "select-all",
      question: "Which are listed as elements of typography in the article?",
      options: [
        "Fonts and typefaces",
        "Consistency",
        "White space",
        "Alignment",
        "Parallax scrolling"
      ],
      answers: [0, 1, 2, 3],
      aiResponses: [
        "✅ Fonts and typefaces are fundamental elements.",
        "✅ Consistency of type choices is emphasized.",
        "✅ White space is discussed as negative space around text.",
        "✅ Alignment is highlighted as an important element.",
        "❌ Parallax scrolling is not an element of typography here."
      ]
    },
    {
      type: "select-all",
      question: "According to the article, what should you consider when choosing fonts for a UI?",
      options: [
        "Brand personality",
        "Product or service",
        "Audience",
        "Web browser compatibility",
        "How many animated GIFs you can include"
      ],
      answers: [0, 1, 2, 3],
      aiResponses: [
        "✅ Fonts should reflect the brand’s personality.",
        "✅ They must fit the product or service.",
        "✅ Audience expectations and needs matter.",
        "✅ Web-friendly fonts from libraries like Google Fonts are recommended.",
        "❌ Animated GIF count is unrelated to font choice."
      ]
    },
    {
      type: "select-all",
      question: "Which practices support readability in on-screen text according to the guide?",
      options: [
        "Left-align long paragraphs",
        "Avoid widows (single words on a last line)",
        "Use consistent margins and paddings",
        "Make lines extremely long to reduce scrolling",
        "Adjust letter-spacing and line-height thoughtfully"
      ],
      answers: [0, 1, 2, 4],
      aiResponses: [
        "✅ Left alignment helps readers track lines easily.",
        "✅ The article suggests avoiding widows for better flow.",
        "✅ Hierarchy and spacing often rely on consistent margins and paddings.",
        "❌ Very long lines hurt readability instead of helping.",
        "✅ Adjusting spacing is part of fine-tuning readability."
      ]
    }
  ]
};
