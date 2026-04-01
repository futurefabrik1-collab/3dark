/**
 * Animation utilities for gentle, randomized entrance animations
 * 
 * TOGGLE: Set ENABLE_RANDOM_ANIMATIONS to false to disable all random animations
 * TOGGLE: Set ENABLE_SCROLL_RIPPLE to false to disable scroll ripple effect
 */

export const ENABLE_RANDOM_ANIMATIONS = false;
export const ENABLE_SCROLL_RIPPLE = false;

// Ripple effect configuration
export const RIPPLE_DIRECTION = 'right'; // 'left' or 'right' - direction of ripple
export const RIPPLE_SHIFT_AMOUNT = 5; // Percentage shift when crossing center

type Direction = 'top' | 'bottom' | 'left' | 'right' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

const directions: Direction[] = [
  'top',
  'bottom',
  'left',
  'right',
  'top-left',
  'top-right',
  'bottom-left',
  'bottom-right'
];

/**
 * Get random direction for animation entrance
 */
const getRandomDirection = (): Direction => {
  return directions[Math.floor(Math.random() * directions.length)];
};

/**
 * Convert direction to x/y offsets (5% movement)
 */
const getDirectionOffset = (direction: Direction) => {
  const offset = 5; // 5% movement
  
  const offsets: Record<Direction, { x: number; y: number }> = {
    'top': { x: 0, y: -offset },
    'bottom': { x: 0, y: offset },
    'left': { x: -offset, y: 0 },
    'right': { x: offset, y: 0 },
    'top-left': { x: -offset, y: -offset },
    'top-right': { x: offset, y: -offset },
    'bottom-left': { x: -offset, y: offset },
    'bottom-right': { x: offset, y: offset },
  };
  
  return offsets[direction];
};

/**
 * Generate random gentle entrance animation config for Framer Motion
 * WITH scroll ripple effect when crossing screen center
 * 
 * @param delay - Optional delay before animation starts (in seconds)
 * @returns Framer Motion animation props
 */
export const getRandomEntranceAnimation = (delay: number = 0) => {
  if (!ENABLE_RANDOM_ANIMATIONS) {
    return {
      initial: { opacity: 0, y: 16 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] },
    };
  }

  const direction = getRandomDirection();
  const offset = getDirectionOffset(direction);
  
  return {
    initial: { 
      opacity: 0,
      x: `${offset.x}%`,
      y: `${offset.y}%`
    },
    animate: { 
      opacity: 1,
      x: '0%',
      y: '0%'
    },
    transition: { 
      duration: 0.8,
      delay,
      ease: "easeInOut"
    },
    whileInView: ENABLE_SCROLL_RIPPLE ? {
      x: [0, RIPPLE_DIRECTION === 'right' ? `${RIPPLE_SHIFT_AMOUNT}%` : `-${RIPPLE_SHIFT_AMOUNT}%`, 0],
    } : undefined,
    viewport: ENABLE_SCROLL_RIPPLE ? { 
      once: false,
      amount: 0.5,
      margin: "0px 0px 0px 0px"
    } : undefined,
  };
};

/**
 * Generate random gentle entrance animation that responds to inView
 * WITH scroll ripple effect when crossing screen center
 * 
 * @param isInView - Whether element is in viewport
 * @param delay - Optional delay before animation starts (in seconds)
 * @returns Framer Motion animation props
 */
export const getRandomInViewAnimation = (isInView: boolean, delay: number = 0) => {
  if (!ENABLE_RANDOM_ANIMATIONS) {
    return {
      initial: { opacity: 0, y: 16 },
      animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 },
      transition: { duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] },
    };
  }

  const direction = getRandomDirection();
  const offset = getDirectionOffset(direction);
  
  return {
    initial: { 
      opacity: 0,
      x: `${offset.x}%`,
      y: `${offset.y}%`
    },
    animate: isInView ? { 
      opacity: 1,
      x: '0%',
      y: '0%'
    } : {
      opacity: 0,
      x: `${offset.x}%`,
      y: `${offset.y}%`
    },
    transition: { 
      duration: 0.8,
      delay,
      ease: "easeInOut"
    },
    whileInView: ENABLE_SCROLL_RIPPLE ? {
      x: [0, RIPPLE_DIRECTION === 'right' ? `${RIPPLE_SHIFT_AMOUNT}%` : `-${RIPPLE_SHIFT_AMOUNT}%`, 0],
    } : undefined,
    viewport: ENABLE_SCROLL_RIPPLE ? { 
      once: false,
      amount: 0.5,
      margin: "0px 0px 0px 0px"
    } : undefined,
  };
};
