/**
 * Generates a CSS linear gradient string.
 * @param {string} color1 - The first color hex.
 * @param {string} color2 - The second color hex.
 * @param {string} direction - Direction of the gradient (default: 'to bottom').
 * @returns {string} The CSS gradient string.
 */
export const generateGradient = (color1, color2, direction = 'to bottom right') => {
    return `linear-gradient(${direction}, ${color1}, ${color2})`;
};

/**
 * Generates a shimmering effect background.
 * @returns {string} CSS background property value.
 */
export const shimmerGradient = "linear-gradient(45deg, rgba(255,255,255,0.1) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.1) 75%, transparent 75%, transparent)";

/**
 * Returns a soft pink/purple gradient based on card type.
 * @param {string} type - 'light' or 'dark'.
 * @returns {string} CSS gradient.
 */
export const getThemeGradient = (type) => {
    if (type === 'dark') {
        return 'linear-gradient(135deg, #2D0F28 0%, #1A0B2E 100%)';
    }
    return 'linear-gradient(135deg, #FF9ECF 0%, #E6E6FA 100%)';
};
