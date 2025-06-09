/**
 * Generates an avatar URL based on a given name and optional configuration.
 *
 * @param {string} name - The name used to generate the avatar text.
 * @param {NameToAvatarConfig} [config] - An optional configuration object to customize the avatar's size, background color, and text color.
 * @return {string} The generated avatar URL as a string.
 */
export function nameToAvatar(name, config) {
    // https://npmjs.com/package/@oseelabs/avatar
    if (config) {
        const c = {
            size: config.size || 100,
            backgroundColor: config.backgroundColor || '#F0F0F0',
            color: config.color || '#000000',
        };
        return `https://placehold.co/${c.size}x${c.size}/${c.backgroundColor}/${c.color}?text=${name}`;
    }
    return `https://placehold.co/100x100/F0F0F0/000000?text=${name}`;
}
