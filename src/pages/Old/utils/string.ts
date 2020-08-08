// 去除模版字符串中每行开头的空格
export function trimMultiLine(str: string): string {
  if (!str) {
    return '';
  }

  return str.replace(/^\s*/gm, '');
}
