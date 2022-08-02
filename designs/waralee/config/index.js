import { version } from '../package.json'

export default {
  version,
  name: 'waralee',
  design: 'Wouter Van Wageningen',
  code: 'Wouter Van Wageningen',
  department: 'bottoms',
  type: 'pattern',
  difficulty: 2,
  optionGroups: {
    options: ['showMini'],
    fit: ['fitWaist','backRaise', 'waistRaise'],
    style: [
      'hemWidth',
      'legShortening',
      'waistOverlap',
      'frontPocket',
      'frontPocketStyle',
      'backPocket',
      'waistbandWidth',
    ],
    advanced: [
      'crotchFront',
      'crotchBack',
      'crotchFactorBackHor',
      'crotchFactorBackVer',
      'crotchFactorFrontHor',
      'crotchFactorFrontVer',
    ],
  },
  measurements: ['seat', 'inseam', 'crotchDepth', 'waistToHips'],
  optionalMeasurements: ['waist', 'waistBack'],
  dependencies: {
    backPocket: 'pantsproto',
    pocket: 'pantsproto',
    facings: 'pantsproto',
    cutout: 'pantsproto',
  },
  inject: { pants: 'pantsproto', mini: 'pantsproto', cutout: 'pantsproto' },
  hide: ['pantsproto'],
  parts: ['pants', 'mini', 'cutout', 'pocket', 'backPocket', 'facings'],
  options: {
    minimizer: 4,
    frontPocketVerticalOffset: 0.07,
    frontPocketHorizontalOffset: 0.18,
    frontPocketSize: 0.45,
    frontPocketDepthFactor: 1.6,
    frontWaistAdjustment: 0.167,
    backPocketDepth: 140,
    backPocketVerticalOffset: 0.2,
    backPocketHorizontalOffset: 0.045,
    backPocketSize: 0.45,
    backWaistAdjustment: 0.20,
    frontPocket: { bool: true },
    frontPocketStyle: {
      dflt: 'welt',
      list: ['welt', 'waistband'],
    },
    backPocket: { bool: true },
    hemWidth: { pct: 1.75, min: 1, max: 2.5 },
    waistbandWidth: { pct: 3.5, min: 2, max: 5 },
    waistRaise: { pct: 20, min: 0, max: 40 },
    crotchBack: { pct: 45, min: 10, max: 70 },
    crotchFront: { pct: 30, min: 10, max: 70 },
    crotchFactorFrontHor: { pct: 90, min: 10, max: 100 },
    crotchFactorFrontVer: { pct: 30, min: 10, max: 70 },
    crotchFactorBackHor: { pct: 90, min: 10, max: 100 },
    crotchFactorBackVer: { pct: 60, min: 20, max: 90 },
    waistOverlap: { pct: 50, min: 10, max: 100 },
    legShortening: { pct: 25, min: -10, max: 50 },
    backRaise: { pct: 10, min: 0, max: 25 },
    showMini: { bool: true },
    fitWaist: { bool: true },
  },
}
