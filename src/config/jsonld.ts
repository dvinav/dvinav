import { Person, WithContext } from 'schema-dts'

const jsonLd: WithContext<Person> = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Dvin Avanesian',
  url: 'https://dvinav.com',
  jobTitle: 'Full Stack Developer and Linux Specialist',
  sameAs: [
    'https://github.com/dvinav',
    'https://linkedin.com/in/dvin-avanesian-0b4565283',
    'https://t.me/dvinav',
    'https://instagram.com/dvin.av',
    'https://wa.me/989020092004',
    'mailto:dvinav@outlook.com',
    'tel:+989020092004'
  ]
}
export default jsonLd
