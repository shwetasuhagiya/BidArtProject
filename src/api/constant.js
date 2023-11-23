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

export const sortby = [
  {
    id: 1,
    data: strings.LotNumberAscending,
    selected: false,
  },
  {
    id: 2,
    data: strings.LotNumberDescending,
    selected: false,
  },
  {
    id: 3,
    data: strings.MostBids,
    selected: false,
  },
  {
    id: 4,
    data: strings.LeastBids,
    selected: false,
  },
  {
    id: 5,
    data: strings.HighestBids,
    selected: false,
  },
  {
    id: 6,
    data: strings.LowestBids,
    selected: false,
  },
];

export const TreadingArtistList = [
  {
    image: images.artist1,
    name: 'Selena Perez',
    followers: '1,224 Followers',
  },
  {
    image: images.artist2,
    name: 'Simon Richard Ojeka',
    followers: '514 Followers',
  },
];

export const userData = [
  {
    id: 1,
    image1: images.userImage1,
    image2: images.userImage2,
    image3: images.userImage3,
    userImage: images.trnding1,
    name: 'Wilson Korsgaard',
    followers: '128,182 Followers',
    follow: false,
  },
  {
    id: 2,
    image1: images.userImage4,
    image2: images.userImage5,
    image3: images.userImage6,
    userImage: images.trnding2,
    name: 'Cooper Kenter',
    followers: '95,224 Followers',
    follow: false,
  },
  {
    id: 3,
    image1: images.userImage7,
    image2: images.userImage8,
    image3: images.userImage9,
    userImage: images.trnding3,
    name: 'Haylie Herwithz',
    followers: '1,224 Followers',
    follow: false,
  },
];

export const RecentSearchData = [
  {
    images: images.artwork1,
    name: 'Abstract Face Woman',
    email: '@selena',
  },
  {
    images: images.userImage1,
    name: 'Woman Face Pink',
    email: '@wilsonk',
  },
  {
    images: images.userImage6,
    name: 'Patung Wong',
    email: ' @selena',
  },
];

export const SearchResultData = [
  {
    image: images.folwer1,
    title: 'Dark Flowers',
    email: '@mandalikena',
    CurrentBid: 'Current Bid',
    price: '$3,500',
    timeImage: images.fTime2,
  },
  {
    image: images.folwer2,
    title: 'Man Flowers',
    email: '@danipredo',
    CurrentBid: 'Current Bid',
    price: '$3,900',
    timeImage: images.fTime1,
  },
  {
    image: images.folwer3,
    title: 'Red Flowers',
    email: '@jametkudasi',
    CurrentBid: 'Current Bid',
    price: '$3,500',
    timeImage: images.fTime2,
  },
  {
    image: images.folwer4,
    title: 'Red White Flower',
    email: '@simanjuntak',
    CurrentBid: 'Current Bid',
    price: '$3,900',
    timeImage: images.fTime1,
  },
];

export const BidArtEventList = [
  {
    mainImage: images.event,
    sideImage1: images.artwork2,
    sideImage2: images.event1,
    date: strings.Eventdate,
    auction: strings.Auction,
  },
  {
    mainImage: images.event2,
    sideImage1: images.folwer3,
    sideImage2: images.event3,
    date: strings.Eventdate1,
    auction: strings.Auction1,
  },
];

export const ExhibitorsData = [
  {
    image: images.exhibitors1,
    title: 'Half Face',
    price: '$4,500 - $7,500',
  },
  {
    image: images.exhibitors2,
    title: 'Red Hair Face',
    price: '$4,500 - $7,500',
  },
];

export const ExhibitorsList = [
  {
    image: images.exhibitors3,
    title: 'Abstract Blue Red',
    price: '$4,500 - $7,500',
  },
  {
    image: images.exhibitors4,
    title: 'Yellow abstract',
    price: '$4,500 - $7,500',
  },
];

export const DiscoveList = [
  {label: 'Following', value: 'Following'},
  {label: 'Popular', value: 'Popular'},
  {label: 'Nearby', value: 'Nearby'},
];

export const countryList = [
  {label: 'India', value: 'Imdia'},
  {label: 'USA', value: 'USA'},
  {label: 'China', value: 'China'},
];

export const InboxFiled = [strings.Bids, strings.Inbox, strings.Archive];

export const ActiveBidFiled = [
  {
    image: images.face,
    name: 'Tripple Face',
    email: '@oliver',
    discription: 'Live bidding begins Apr 5th at 2 pm ',
  },
  {
    image: images.face1,
    name: 'Beauty Woman',
    email: '@mantunis',
    discription: 'Live bidding begins Apr 5th at 2 pm ',
  },
  {
    image: images.artwork3,
    name: 'Absurted',
    email: '@mariano',
    discription: 'Live bidding begins Apr 5th at 2 pm ',
  },
];

export const InboxChatFiled = [
  {
    image: images.chat1,
    name: 'Rhiel Madsen',
    time: '21 minutes ago',
    msg: 'I have spent a good amount of mone and loose it and i hen the game drops',
  },
  {
    image: images.chat2,
    name: 'Corey Aminoff',
    time: '21/04',
    msg: 'i am on level 3409 i sure cant figure ot out on to get the center area',
  },
  {
    image: images.chat3,
    name: 'Dulce Arcand',
    time: '19/04',
    msg: 'also would please quit giving free lives for every rewrads you have?',
  },
  {
    image: images.chat4,
    name: 'Maren Bothman',
    time: '24/03',
    msg: 'how do you play when it treansforers from one side to anothers',
  },
  {
    image: images.chat5,
    name: 'Zaire Franci',
    time: '22/03',
    msg: 'I have spent a good amount of mone and loose it and i hen the game drops',
  },
  {
    image: images.chat6,
    name: 'Phillip Lubin',
    time: '21/03',
    msg: 'how do you play when it treansforers from one side to anothers',
  },
];

export const CategoryList = [
  {label: 'ArtWork', value: 'ArtWork'},
  {label: 'photography', value: 'photography'},
  {label: 'pop Art', value: 'pop Art'},
];

export const whisListData = [strings.Works, strings.Show];

export const WorkList = [
  {
    image: images.face,
    title: 'Triple Face',
    email: '@oliver',
    CurrentBid: 'Current Bid',
    price: '$4,500',
  },
  {
    image: images.artwork3,
    title: 'Absurted',
    email: '@mariano',
    CurrentBid: 'Current Bid',
    price: '$4,100',
  },
  {
    image: images.face2,
    title: 'Monalisa',
    email: '@paijo',
    CurrentBid: 'Current Bid',
    price: '$3,900',
  },
  {
    image: images.face1,
    title: 'Beauty Woman',
    email: '@martunisr',
    CurrentBid: 'Current Bid',
    price: '$4,600',
  },
];

export const filterData = [
  {id: 0, name: 'Sort By'},
  {id: 1, name: 'Medium'},
  {id: 2, name: 'Price'},
];

export const DiscoverData = [
  {id: 0, name: 'All Art'},
  {id: 1, name: 'Photography'},
  {id: 2, name: 'Emerging Artists'},
  {id: 3, name: 'Pop Art'},
];

export const EventData = [
  {id: 0, name: 'Exhibitors'},
  {id: 1, name: 'Artworks'},
];

export const chatData = [
  {
    id: 1,
    message: 'Hi Theresa, good morning 😄',
    time: '12:00',
    type: 'sender',
  },
  {
    id: 2,
    message: 'Hi there, good morning! How are you?',
    time: '12:01',
    type: 'receiver',
  },
  {
    id: 3,
    message: 'I am doing well, thanks for asking 😊',
    time: '12:02',
    type: 'sender',
  },
  {
    id: 4,
    message: "That's great to hear! What are your plans for the day?",
    time: '12:03',
    type: 'receiver',
  },
  {
    id: 5,
    message:
      'I have a few meetings scheduled, but otherwise just working from home. How about you?',
    time: '12:04',
    type: 'sender',
  },
  {
    id: 1,
    message: 'Hi Theresa, good morning 😄',
    time: '12:00',
    type: 'sender',
  },
  {
    id: 2,
    message: 'Hi there, good morning! How are you?',
    time: '12:01',
    type: 'receiver',
  },
  {
    id: 3,
    message: 'I am doing well, thanks for asking 😊',
    time: '12:02',
    type: 'sender',
  },
  {
    id: 4,
    message: "That's great to hear! What are your plans for the day?",
    time: '12:03',
    type: 'receiver',
  },
  {
    id: 5,
    message:
      'I have a few meetings scheduled, but otherwise just working from home. How about you?',
    time: '12:04',
    type: 'sender',
  },
];

export  const searchData = [
  {id: 0, name: 'ArtWork'},
  {id: 1, name: 'Artist'},
];