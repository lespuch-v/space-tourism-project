import moon from './assets/destination/image-moon.png';
import mars from './assets/destination/image-mars.png';
import europa from './assets/destination/image-europa.png';
import titan from ".//assets/destination/image-titan.png"

const dataPlanets = [
  {
    id: 0,
    img: moon,
    name: 'Moon',
    description:
      'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
    avgDistance: '384,400 KM',
    estTravelTime: '3 Days',
    isActive: false,
  },
  {
    id: 1,
    img: mars,
    name: 'Mars',
    description:
      'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
    avgDistance: '225 MIL. KM',
    estTravelTime: '9 Months',
    isActive: false,
  },
  {
    id: 2,
    img: europa,
    name: 'Europa',
    description:
      'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
    avgDistance: '628 MIL. KM',
    estTravelTime: '3 Years',
    isActive: false,
  },
  {
    id: 3,
    img: titan,
    name: 'Titan',
    description:
      'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
    avgDistance: '1.6 BIL. KM',
    estTravelTime: '7 Years',
    isActive: false,
  },
];

export default dataPlanets;