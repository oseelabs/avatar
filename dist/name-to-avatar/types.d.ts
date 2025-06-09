/**
 * Configuration type for generating an avatar image based on a name.
 *
 * This type defines the properties required to customize the avatar dimensions, background color,
 * and text color when creating a placeholder image that represents a name or initials.
 */
export type NameToAvatarConfig = {
    /** The dimension of the avatar image i.e. `size = 100` => `100x100` */
    size?: number;
    /** The color of the avatar image background e.g. `#ff0044` */
    backgroundColor?: string;
    /** The color of the avatar image text e.g. `#003344` */
    color?: string;
};
//# sourceMappingURL=types.d.ts.map