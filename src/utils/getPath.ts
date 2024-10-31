export default function getPath(name: string) {
  return `${process.env.NODE_ENV === 'production' ? '/novels' : ''}${name}`;
}
