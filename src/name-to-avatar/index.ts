import {NameToAvatarConfig} from "@/name-to-avatar/types";

/**
 * Generates an avatar URL based on a given name and optional configuration.
 *
 * @param {string} name - The name used to generate the avatar text.
 * @param {NameToAvatarConfig} [config] - An optional configuration object to customize the avatar's size, background color, and text color.
 * @return {string} The generated avatar URL as a string.
 */
export function nameToAvatar(name: string, config?: NameToAvatarConfig): string {
    // https://npmjs.com/package/@oseelabs/avatar
    if (config) {
        const c = {
            size: config.size || 100,
            backgroundColor: config.backgroundColor || 'F0F0F0',
            color: config.color || '000000',
        };

        // Remove '#' prefix from color codes if present
        const bgColor = c.backgroundColor.replace(/^#/, '');
        const textColor = c.color.replace(/^#/, '');

        return `https://placehold.co/${c.size}x${c.size}/${bgColor}/${textColor}?text=${name}`
    }

    return `https://placehold.co/100x100/F0F0F0/000000?text=${name}`;
}
