// Personal Palette – Lightweight class concatenation for tranquil components.
const cls = (...tokens: Array<string | false | null | undefined>) =>
  tokens.filter(Boolean).join(' ');

export default cls;
