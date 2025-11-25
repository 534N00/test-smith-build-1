export const graphicDesignStudentBank  = {
  multipleChoice: [
    {
      type: "multiple-choice",
      question: "Which of the following is NOT one of the six visual variables listed in the slides?",
      options: ["Hue", "Value", "Texture", "Orientation"],
      answer: 2,
      aiResponses: [
        "Hue is one of the six visual variables.",
        "Value is also one of the six.",
        "Correct! Texture is not in the six-variable list (value, hue, shape, position, orientation, size).",
        "Orientation is one of the six variables."
      ]
    },
    {
      type: "multiple-choice",
      question: "A visual variable is 'Selective' when elements with the same value are:",
      options: [
        "Perceived as forming an ordered ranking",
        "Perceived as different from elements with other values",
        "Invisible to the user",
        "Always perceived with equal visual weight"
      ],
      answer: 1,
      aiResponses: [
        "Ordering is about 'Ordered' variables, not Selective ones.",
        "Correct! Selective variables make it easy to pick out elements that share the same value.",
        "No, selective variables are meant to be highly visible.",
        "Equal visual weight relates more to 'Associative' variables."
      ]
    },
    {
      type: "multiple-choice",
      question: "Which color guideline advises limiting the number of colors you use?",
      options: [
        "G1: Leverage known schemes",
        "G2: Use as few colors as possible",
        "G3: Avoid saturated colors",
        "G5: Use color to draw attention"
      ],
      answer: 1,
      aiResponses: [
        "G1 is about using schemes such as monochromatic or complementary.",
        "Correct! G2 recommends one color, minimal color, or neutrals when possible.",
        "G3 focuses on avoiding highly saturated colors.",
        "G5 is about drawing attention, not limiting the palette."
      ]
    }
  ],

  freeResponse: [
    {
      type: "free-response",
      question: "Define a 'Selective' visual variable and give an example from the slides.",
      correctTerms: ["selective", "perceived", "different", "hue", "value", "size"],
      aiResponse:
        "A strong answer states that a Selective variable lets users easily distinguish elements with different values; examples include hue, value, or size, which allow quick selection of items that stand out from others."
    },
    {
      type: "free-response",
      question: "Explain why designers should consider color-blind safe palettes when choosing colors.",
      correctTerms: ["color deficiency", "red-green", "accessibility", "shape", "value"],
      aiResponse:
        "A good answer mentions that about 1 in 20 people have color deficiency (e.g., red-green), so designers should pick color-blind safe palettes and reinforce categories with other variables like shape or value for accessibility."
    },
    {
      type: "free-response",
      question: "Describe the composition guideline of 'simplify' and how it can improve a UI screen.",
      correctTerms: ["simplify", "reduce", "remove", "clutter", "perfection", "take away"],
      aiResponse:
        "An effective answer recalls the quote about perfection being when there is nothing left to take away and explains that simplification removes unnecessary elements, reduces clutter, and makes important information easier to perceive."
    }
  ],

  trueFalse: [
    {
      type: "true-false",
      question: "Hue, value, size, and orientation are mentioned as examples of visual variables.",
      answer: "true",
      aiResponse: "True. The slides list six visual variables, including hue, value, size, position, orientation, and shape."
    },
    {
      type: "true-false",
      question: "Highly saturated colors are recommended because they reduce visual fatigue.",
      answer: "false",
      aiResponse:
        "False. The guideline warns that saturated colors can cause visual fatigue and recommends using less saturated, more pastel tones."
    },
    {
      type: "true-false",
      question: "Repetition of visual variables such as hue or shape can promote unity and consistency in a design.",
      answer: "true",
      aiResponse: "True. The 'Repetition' guideline explicitly says repetition promotes unity and cohesiveness."
    }
  ],

  sentenceCompletion: [
    {
      type: "sentence-completion",
      question: "A visual variable is ________ if different values for it support ranking of elements as 'more' or 'less'.",
      answer: "ordered",
      aiResponse: "Such a variable is described as 'ordered'."
    },
    {
      type: "sentence-completion",
      question: "Guideline G3 recommends avoiding highly ________ colors because they cause visual fatigue.",
      answer: "saturated",
      aiResponse: "The problematic colors are highly 'saturated'."
    },
    {
      type: "sentence-completion",
      question: "The composition guidelines list simplify, contrast, repetition, alignment, proximity, and ________.",
      answer: "balance",
      aiResponse: "The missing principle is 'balance' (and symmetry)."
    }
  ],

  selection: [
    {
      type: "select-all",
      question: "Which visual variables are explicitly listed in the lecture?",
      options: ["Hue", "Texture", "Shape", "Value", "Position", "Animation"],
      answers: [0, 2, 3, 4],
      aiResponses: [
        "✅ Hue is one of the six visual variables.",
        "❌ Texture is not on the list.",
        "✅ Shape is included.",
        "✅ Value is one of the variables.",
        "✅ Position is also listed.",
        "❌ Animation is not part of the six variables in this lecture."
      ]
    },
    {
      type: "select-all",
      question: "Which color scheme types are mentioned as examples in the slides?",
      options: [
        "Monochromatic",
        "Complementary",
        "Analogous",
        "Triadic",
        "Split complementary",
        "Grayscale-only"
      ],
      answers: [0, 1, 2, 3, 4],
      aiResponses: [
        "✅ Monochromatic schemes are demonstrated (e.g., Kiva).",
        "✅ Complementary schemes are shown (e.g., MoMA).",
        "✅ Analogous schemes are discussed (e.g., CS website).",
        "✅ Triadic schemes appear (e.g., Taasky).",
        "✅ Split complementary schemes are also shown (e.g., Southwest).",
        "❌ Grayscale-only is not introduced as a named color scheme type."
      ]
    },
    {
      type: "select-all",
      question: "Which composition guidelines are listed in the lecture?",
      options: [
        "Simplify",
        "Contrast",
        "Repetition",
        "Alignment",
        "Perspective drawing",
        "Proximity"
      ],
      answers: [0, 1, 2, 3, 5],
      aiResponses: [
        "✅ 'Simplify' is one of the guidelines.",
        "✅ 'Contrast' is explicitly mentioned.",
        "✅ 'Repetition' is part of the list.",
        "✅ 'Alignment' is listed as G4.",
        "❌ Perspective drawing is not one of the composition guidelines.",
        "✅ 'Proximity' appears along with balance and symmetry."
      ]
    }
  ]
};
