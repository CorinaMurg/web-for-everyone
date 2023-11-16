
export default function slugify(title) {
    return title.toLowerCase().replace(/\s+/g, '-');
}
  