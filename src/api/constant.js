import images from '../assets/images';
import strings from '../i18n/strings';

export const OnBoardingSlideData = [
  {
    image: images.onBoardingImg1,
    titleText: 'Buy art from premier galleries Bidart',
    descriptionText:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula accumsan fames dui,',
    NextImg: images.Next1,
  },
  {
    image: images.onBoardingImg2,
    titleText: 'Auction houses from arround the world',
    descriptionText:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula accumsan fames dui,',
    NextImg: images.Next2,
  },
  {
    image: images.onBoardingImg3,
    titleText: 'Upload and sell your best work exploration',
    descriptionText:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula accumsan fames dui,',
    NextImg: images.Start,
  },
];

export const TopArtistList = [
  {
    id: 1,
    image: images.user1,
    name: 'Wilson Korsgaard',
    followers: '8.5k Total Artwork',
    selected: false,
  },
  {
    id: 2,
    image: images.user2,
    name: 'Cooper Kenter',
    followers: '10.2k Total Artwork',
    selected: false,
  },
  {
    id: 3,
    image: images.user3,
    name: 'Haylie Herwitz',
    followers: '7.7k Total Artwork',
    selected: false,
  },
  {
    id: 4,
    image: images.user4,
    name: 'Jakob Bergson',
    followers: '2.9k Total Artwork',
    selected: false,
  },
  {
    id: 5,
    image: images.user5,
    name: 'Emerson Calzoni',
    followers: '2.5k Total Artwork',
    selected: false,
  },
  {
    id: 6,
    image: images.user6,
    name: 'Ann Donin',
    followers: '1.7k Total Artwork',
    selected: false,
  },
];

export const CategoriesList = [
  {
    id: 1,
    image: images.artImage1,
    name: 'Photography',
    total: '19,5k Total Artwork',
    selected: false,
  },
  {
    id: 2,
    image: images.artImage2,
    name: 'Emerging Artists',
    total: '12.6k Total Artwork',
    selected: false,
  },
  {
    id: 3,
    image: images.artImage3,
    name: 'Pop Art',
    total: '16.6k Total Artwork',
    selected: false,
  },
  {
    id: 4,
    image: images.artImage4,
    name: ' Design',
    total: '20.8k Total Artwork',
    selected: false,
  },
  {
    id: 5,
    image: images.artImage5,
    name: 'Contemporary Art',
    total: '17.4k Total Artwork',
    selected: false,
  },
  {
    id: 6,
    image: images.artImage6,
    name: 'Post-War European Art',
    total: '8.7k Total Artwork',
    selected: false,
  },
];

export const BudgetList = [
  {
    id: 1,
    price: 'Under $500',
    selected: false,
  },
  {
    id: 2,
    price: 'Under $1,000',
    selected: false,
  },
  {
    id: 3,
    price: 'Under $2,500',
    selected: false,
  },
  {
    id: 4,
    price: 'Under $5,000',
    selected: false,
  },
  {
    id: 5,
    price: 'Under $10,000',
    selected: false,
  },
  {
    id: 6,
    price: 'Under $25,000',
    selected: false,
  },
  {
    id: 7,
    price: 'No Budget in Mind',
    selected: false,
  },
];

export const ArtWorkList = [
  {
    image: images.artwork1,
    title: 'Abstract Face Woman in...',
    creatorImage: images.artist1,
    Creator: 'Creator',
    email: '@selena',
    CurrentBid: 'Current Bid',
    price: '$3,800',
    timeImage: images.time1,
  },
  {
    image: images.artwork2,
    title: 'Men Scale Concre...',
    creatorImage: images.artist1,
    Creator: 'Creator',
    email: ' @andreas',
    CurrentBid: 'Current Bid',
    price: '$4,500',
    timeImage: images.time2,
  },
  {
    image: images.artwork3,
    title: 'Absurted',
    creatorImage: images.artist1,
    Creator: 'Creator',
    email: '@mariano',
    CurrentBid: 'Current Bid',
    price: '$4,100',
    timeImage: images.time3,
  },
  {
    image: images.artwork4,
    title: 'Woman Face',
    creatorImage: images.artist1,
    Creator: 'Creator',
    email: '@alimotion',
    CurrentBid: 'Current Bid',
    price: '$4,300',
    timeImage: images.time4,
  },
];

export const sortby =[
  {
    id:1,
    data:strings.LotNumberAscending,
    selected:false
  },
  {
    id:2,
    data: strings.LotNumberDescending,
    selected:false
  },
  {
    id:3,
    data: strings.MostBids,
    selected:false
  },
  {
    id:4,
    data:strings.LeastBids,
    selected:false
  },
  {
    id:5,
    data:strings.HighestBids,
    selected:false
  },
  {
    id:6,
    data:  strings.LowestBids,
    selected:false
  }
]