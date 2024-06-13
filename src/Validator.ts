export class Validator {
    public static validateEmail(email: string): boolean {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    }

    public static validateUrl(url: string): boolean {
        const urlRegex = /^(http|https):\/\/[^ "]+$/;
        return urlRegex.test(url);
    }

    public static validatePassword(password: string): boolean {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+-=[]{}|;:,.<>?]).{8,}$/;
        return passwordRegex.test(password);
    }

    public static validateHexColor(hexColor: string): boolean {
        const hexColorRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
        return hexColorRegex.test(hexColor);
    }

    public static validateRgbColor(rgbColor: string): boolean {
        const rgbColorRegex = /^rgb\((\d{1,3}), (\d{1,3}), (\d{1,3})\)$/;
        return rgbColorRegex.test(rgbColor);
    }

    public static validateRgbaColor(rgbaColor: string): boolean {
        const rgbaColorRegex = /^rgba\((\d{1,3}), (\d{1,3}), (\d{1,3}), (0(\.\d{1})?|1)\)$/;
        return rgbaColorRegex.test(rgbaColor);
    }

    public static validateHslColor(hslColor: string): boolean {
        const hslColorRegex = /^hsl\((\d{1,3}), (\d{1,3})%, (\d{1,3})%\)$/;
        return hslColorRegex.test(hslColor);
    }

    public static validateUuid(uuid: string): boolean {
        const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/;
        return uuidRegex.test(uuid);
    }
}