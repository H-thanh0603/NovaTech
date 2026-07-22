const MAX_INPUT_LENGTH = 500;
const MAX_NOTE_LENGTH = 2000;

const HTML_TAG_REGEX = /<[^>]*>/g;

export function sanitizeText(input: string, maxLength = MAX_INPUT_LENGTH): string {
  return input.slice(0, maxLength).replace(HTML_TAG_REGEX, "").trim();
}

export function sanitizeNote(input: string): string {
  return sanitizeText(input, MAX_NOTE_LENGTH);
}

export function sanitizeEmail(input: string): string {
  return input.slice(0, 254).replace(HTML_TAG_REGEX, "").trim().toLowerCase();
}

export function sanitizePhone(input: string): string {
  return input.replace(HTML_TAG_REGEX, "").replace(/[^\d+\-\s]/g, "").slice(0, 20).trim();
}
