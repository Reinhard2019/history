/**
 * 用来返回正确的公元前时间
 * @param date eg: -206-05-02
 */
export function getDate(date: string): Date {
  if (!date) {
    return new Date();
  }

  // AD
  if (date[0] !== '-') {
    return new Date(date);
  }

  // BC
  const [year, month, day] = date.slice(1).split('-');
  const yearNum = year ? -Number(year) : 0;
  const monthNum = month ? Number(month) : 1;
  const dayNum = day ? Number(day) : 1;
  return new Date(yearNum, monthNum, dayNum);
}