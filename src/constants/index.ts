
export const routes = {
  // chapter 1 - 1
  zero: {  // updated
    title: 'Zero order reaction',
    path: '/',
    type: 'reaction',
    // path: 'reaction/zero',
  },
  // 1 - 2
  first: {  // updated
    title: 'First order reaction',
    path: '/reaction/first',
    type: 'reaction',
  },
  // 1 - 3
  second: {
    title: 'Second order reaction',
    path: '/reaction/second',
    type: 'reaction',
  },
  // 1 - 4
  comparison: {
    title: 'Reaction comparison',
    path: '/reaction/comparison',
    type: 'reaction',
  },
  // 1 - 5
  kinetics: {
    title: 'Kinetics',
    path: '/reaction/kinetics',
    type: 'reaction',
  },
  // Quiz
  zeroQuiz: {  // updated
    title: 'Quiz for Zero order reaction',
    path: '/quiz',
    type: 'quiz',
  },
  firstQuiz: {  // updated
    title: 'Quiz for First order reaction',
    path: '/reaction/first/quiz',
    type: 'quiz',
  },
  secondQuiz: {
    title: 'Quiz for Second order reaction',
    path: '/reaction/second/quiz',
    type: 'quiz',
  },
  comparisonQuiz: {
    title: 'Quiz for Reaction comparison',
    path: '/reaction/comparison/quiz',
    type: 'quiz',
  },
  kineticsQuiz: {
    title: 'Quiz for Kinetics',
    path: '/reaction/kinetics/quiz',
    type: 'quiz',
  },
  // 2 - 1
  aqueous: {
    title: 'Aqueous reaction',
    path: '/equilibrium/aqueous',
    type: 'equilibrium',
  },
  // 3 - 1
  introduction: {
    title: 'Introduction',
    path: '/acids/introduction',
    type: 'acids',
  },
  // 4 - 1
  balanced: {
    title: 'Balanced reactions',
    path: '/chemical/balanced',
    type: 'chemical',
  },
}

export const chaptersMenuList = [
  {
    title: 'Reaction rates',
    subItems: [
      {
        title: 'Zero order reaction',
        value: 'zero',
      }, {
        title: 'First order reaction',
        value: 'first',
      }, {
        title: 'Second order reaction',
        value: 'second',
      }, {
        title: 'Reaction comparison',
        value: 'comparison',
      }, {
        title: 'Energy profile',
        value: 'kinetics',
      }
    ],
  },
  {
    title: 'Equilibrium',
    subItems: [
      {
        title: 'Aqueous reaction',
        value: 'aqueous',
      }, {
        title: 'Gaseous reaction',
        value: 'gaseous',
      }, {
        title: 'Solubility',
        value: 'solubility',
      }
    ],
  },
  {
    title: 'Acids & bases',
    subItems: [
      {
        title: 'Introduction',
        value: 'introduction',
      }, {
        title: 'Buffers',
        value: 'buffers',
      }, {
        title: 'Titration',
        value: 'titration',
      }
    ],
  },
  {
    title: 'Chemical reactions',
    subItems: [
      {
        title: 'Balanced reactions',
        value: 'balanced',
      }, {
        title: 'Limiting reagent',
        value: 'limiting',
      }, {
        title: 'Precipitation',
        value: 'precipitation',
      }
    ],
  },
]

export const enum MenuList {
  zero = 'zero',
  first = 'first',
  second = 'second',
  comparison = 'comparison',
  kinetics = 'kinetics',
  zeroQuiz = 'zeroQuiz',
  firstQuiz = 'firstQuiz',
  secondQuiz = 'secondQuiz',
  comparisonQuiz = 'comparisonQuiz',
  kineticsQuiz = 'kineticsQuiz',
  aqueous = 'aqueous',
  introduction = 'introduction',
  balanced = 'balanced',
}

// Menu list in order by
export const MenuOrder = [
  MenuList.zero,
  MenuList.zeroQuiz,
  MenuList.first,
  MenuList.firstQuiz,
  MenuList.second,
  MenuList.secondQuiz,
  MenuList.comparison,
  MenuList.comparisonQuiz,
  MenuList.kinetics,
  MenuList.kineticsQuiz,
  // Todo: need to add more menus
  MenuList.aqueous,
  MenuList.introduction,
  MenuList.balanced,
]

// Colors to be used
export const themeColors = {
  none: "rgba(8, 168, 232,0.2)",
  A: 'rgba(8, 168, 232, 0.8)',
  B: 'rgba(255, 19, 19, 0.8)',
  C: 'rgba(213, 111, 62, 0.8)',
  D: 'rgba(99, 105, 209, 0.8)',
  E: 'rgba(156, 109, 138, 0.8)',
  F: 'rgba(27, 153, 139, 0.8)',
  bgA: 'rgba(8, 168, 232, 0.05)',
  bgB: 'rgba(255, 19, 19, 0.05)',
  bgC: 'rgba(213, 111, 62, 0.05)',
  bgD: 'rgba(99, 105, 209, 0.05)',
  bgE: 'rgba(156, 109, 138, 0.05)',
  bgF: 'rgba(27, 153, 139, 0.05)',
  grey: 'rgba(209, 209, 214, 0.8)',
}
export const dotColors = [
                     // dot Index
  themeColors.none,  // 0
  themeColors.A,     // 1
  themeColors.B,     // 2
  themeColors.C,     // 3
  themeColors.D,     // 4
  themeColors.E,     // 5
  themeColors.F,     // 6
]
export const dotBgColors = [
                     // dot Index
  themeColors.none,  // 0
  themeColors.bgA,   // 1
  themeColors.bgB,   // 2
  themeColors.bgC,   // 3
  themeColors.bgD,   // 4
  themeColors.bgE,   // 5
  themeColors.bgF,   // 6
]
export const dotColorList = [
  [themeColors.none, themeColors.A, themeColors.B], // A to B
  [themeColors.none, themeColors.C, themeColors.D], // C to D
  [themeColors.none, themeColors.E, themeColors.F], // E to F
]
export const sliderVertText = [
  'A', 'C', 'E'
]
// initial Beaker dots
export const totalDots = 144
export const initDots = Array.from({ length: totalDots }, () => 0)

const testColors = `
// dark red
color: rgb(225 45 45 / 80%);
// dark blue
color: rgba(96, 147, 202, 1);
// grey
color: rgba(100, 100, 100, 0.8);
`