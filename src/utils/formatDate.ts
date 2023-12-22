export default function formatDate(date: Date) {
  return new Intl.DateTimeFormat("es-CR").format(date);
}
