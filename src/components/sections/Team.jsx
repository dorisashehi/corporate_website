import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoLinkedin,
  BiLogoTwitter,
} from 'react-icons/bi';
import SectionTitle from '../SectionTitle';
import { img } from '../../utils/images';

const members = [
  {
    name: 'Walter White',
    role: 'Chief Executive Officer',
    bio: 'Explicabo voluptatem mollitia et repellat qui dolorum quasi',
    photo: 'person/person-m-7.webp',
  },
  {
    name: 'Sarah Jhonson',
    role: 'Product Manager',
    bio: 'Aut maiores voluptates amet et quis praesentium qui senda para',
    photo: 'person/person-f-8.webp',
  },
  {
    name: 'William Anderson',
    role: 'CTO',
    bio: 'Quisquam facilis cum velit laborum corrupti fuga rerum quia',
    photo: 'person/person-m-6.webp',
  },
  {
    name: 'Amanda Jepson',
    role: 'Accountant',
    bio: 'Dolorum tempora officiis odit laborum officiis et et accusamus',
    photo: 'person/person-f-4.webp',
  },
];

export default function Team() {
  return (
    <section id="team" className="py-16 md:py-20">
      <SectionTitle
        title="Team"
        subtitle="Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit"
      />
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-6">
          {members.map((member) => (
            <div
              key={member.name}
              className="bg-white shadow-sm rounded-lg p-6 flex gap-5 items-start hover:shadow-md transition-shadow"
            >
              <div className="shrink-0 w-36 h-36 rounded-full overflow-hidden">
                <img
                  src={img(member.photo)}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-heading text-xl font-bold text-arsha-heading mb-1">
                  {member.name}
                </h4>
                <span className="block italic text-sm text-arsha-accent mb-2">{member.role}</span>
                <p className="text-sm mb-4">{member.bio}</p>
                <div className="flex gap-2">
                  {[BiLogoTwitter, BiLogoFacebook, BiLogoInstagram, BiLogoLinkedin].map(
                    (Icon, i) => (
                      <a
                        key={i}
                        href="#"
                        className="w-8 h-8 flex items-center justify-center bg-arsha-accent/10 text-arsha-accent rounded-full hover:bg-arsha-accent hover:text-white transition-colors text-sm"
                      >
                        <Icon />
                      </a>
                    ),
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
