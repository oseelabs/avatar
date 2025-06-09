import { nameToAvatar } from './index';
import 'jest';

describe('nameToAvatar', () => {
    it('should generate the default avatar URL when no config is provided', () => {
        const name = 'John';
        const result = nameToAvatar(name);
        expect(result).toBe('https://placehold.co/100x100/F0F0F0/000000?text=John');
    });

    it('should generate the avatar URL with custom size', () => {
        const name = 'Jane';
        const config = {size: 150};
        const result = nameToAvatar(name, config);
        expect(result).toBe('https://placehold.co/150x150/F0F0F0/000000?text=Jane');
    });

    it('should generate the avatar URL with custom background color', () => {
        const name = 'Doe';
        const config = {backgroundColor: 'FF5733'};
        const result = nameToAvatar(name, config);
        expect(result).toBe('https://placehold.co/100x100/FF5733/000000?text=Doe');
    });

    it('should generate the avatar URL with custom text color', () => {
        const name = 'Alex';
        const config = {color: '123456'};
        const result = nameToAvatar(name, config);
        expect(result).toBe('https://placehold.co/100x100/F0F0F0/123456?text=Alex');
    });

    it('should generate the avatar URL with all custom configurations', () => {
        const name = 'Chris';
        const config = {
            size: 200,
            backgroundColor: 'abcdef',
            color: '654321',
        };
        const result = nameToAvatar(name, config);
        expect(result).toBe('https://placehold.co/200x200/abcdef/654321?text=Chris');
    });
});