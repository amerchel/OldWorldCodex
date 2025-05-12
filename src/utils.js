export const getImageUrl = (name) => {
    const images = import.meta.glob('/src/assets/**/*', { eager: true });
    const path = `/src/assets/${name}`;
    return (images[path] && images[path].default) || "";
};
