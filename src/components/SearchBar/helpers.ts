export function copyUrl(shortenLink: string): void {
  navigator.clipboard.writeText(shortenLink);
}
