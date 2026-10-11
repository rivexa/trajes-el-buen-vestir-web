export const WHATSAPP_URL = 'https://wa.me/593993112096';

export function whatsappHref(message) {
    if (!message) return WHATSAPP_URL;
    return `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`;
}
export const PHONE_TEL = 'tel:+593993112096';
export const PHONE_DISPLAY = '+593 993112096';
export const EMAIL = 'trajeselbuenvestir@gmail.com';
export const FACEBOOK_URL = 'https://www.facebook.com/TrajesElbuenVestir';
export const INSTAGRAM_URL = 'https://instagram.com/trajeselbuenvestir';
export const MAPS_URL = 'https://maps.app.goo.gl/Am7okmaG1hMyj6xJ8';

export const DEVELOPER = {
    name: 'AtlaSarm',
    whatsapp: 'https://wa.me/593961284734',
};
