export const transformCategories = categories =>
    categories.map(category => ({
        value: category.id,
        label: category.name,
    }));

export const generateRandomNumber = (min, max) =>
    Math.floor(Math.random() * (max - min + 1) + min);

export const escapeHtml = str => {
    return str
        .replace(/&amp;/g, "&")
        .replace(/&gt;/g, ">")
        .replace(/&lt;/g, "<")
        .replace(/&quot;/g, '"')
        .replace(/&#039;/g, "'")
        .replace(/&oacute;/g, "ó");
};
