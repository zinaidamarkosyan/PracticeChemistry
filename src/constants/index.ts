
export const routes = {
  zero: {
    title: 'Zero order reaction',
    path: '/',
    type: 'reaction',
    // path: 'reaction/zero',
  },
  first: {
    title: 'First order reaction',
    path: '/reaction/first',
    type: 'reaction',
  },
  second: {
    title: 'Second order reaction',
    path: '/reaction/first',
    path1: '/reaction/second',
    type: 'reaction',
  },
  comparison: {
    title: 'Reaction comparison',
    path: '/reaction/first',
    path1: '/reaction/comparison',
    type: 'reaction',
  },
  kinetics: {
    title: 'Kinetics',
    path: '/reaction/first',
    path1: '/reaction/kinetics',
    type: 'reaction',
  },
  zeroQuiz: {
    title: 'Quiz for Zero order reaction',
    path: '/reaction/first',
    path1: '/quiz',
    type: 'reaction',
  },
  firstQuiz: {
    title: 'Quiz for First order reaction',
    path: '/reaction/first',
    path1: '/reaction/first/quiz',
    type: 'reaction',
  },
  secondQuiz: {
    title: 'Quiz for Second order reaction',
    path: '/reaction/first',
    path1: '/reaction/second/quiz',
    type: 'reaction',
  },
  comparisonQuiz: {
    title: 'Quiz for Reaction comparison',
    path: '/reaction/first',
    path1: '/reaction/comparison/quiz',
    type: 'reaction',
  },
  kineticsQuiz: {
    title: 'Quiz for Kinetics',
    path: '/reaction/first',
    path1: '/reaction/kinetics/quiz',
    type: 'reaction',
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

// tutorial steps

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

// initial Beaker dots
export const totalDots = 144
export const initDots = Array.from({ length: totalDots }, () => 0)
