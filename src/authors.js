/** Authors arrive as string | string[] | undefined from baked corpora. */
export function getFirstAuthor(authors) {
  if (authors == null || authors === "") return "Unknown";
  if (Array.isArray(authors)) {
    const first = authors.find((a) => typeof a === "string" && a.trim());
    return first ? first.trim() : "Unknown";
  }
  if (typeof authors === "string") {
    const first = authors.split(/;|,/)[0].trim();
    return first || "Unknown";
  }
  return "Unknown";
}

export function formatAuthors(authors) {
  if (authors == null || authors === "") return "Unknown authors";
  const list = Array.isArray(authors)
    ? authors.filter((a) => typeof a === "string" && a.trim())
    : String(authors)
        .split(/;/)
        .map((s) => s.trim())
        .filter(Boolean);
  if (!list.length) return "Unknown authors";
  if (list.length === 1) return list[0];
  if (list.length === 2) return `${list[0]} & ${list[1]}`;
  return `${list[0]} et al.`;
}
