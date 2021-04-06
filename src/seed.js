export function seedDatabase(firebase) {
  const users = [
    {
      userId: 'XYwFtYOtRtZntpuRFQfJHzdrMN92',
      username: 'olha_ua',
      fullName: 'Olha Anhel',
      emailAddress: 'olhaanhelua@gmail.com',
      following: ['2', '3', '4', '5', '6'],
      followers: [],
      dateCreated: Date.now(),
    },
    {
      userId: '2',
      username: 'thenetninja',
      fullName: 'Shaun',
      emailAddress: 'thenetninja@co.uk',
      following: [],
      followers: ['XYwFtYOtRtZntpuRFQfJHzdrMN92'],
      dateCreated: Date.now(),
    },
    {
      userId: '3',
      username: 'engbobthecanadian',
      fullName: 'Bob the Canadian',
      emailAddress: 'bobthecanadian@gmail.com',
      following: ['6'],
      followers: ['XYwFtYOtRtZntpuRFQfJHzdrMN92', '6'],
      dateCreated: Date.now(),
    },
    {
      userId: '4',
      username: 'zelenskiy_official',
      fullName: 'Volodymyr Zelenskyi',
      emailAddress: 'zelenskyi@gmail.com',
      following: [],
      followers: ['XYwFtYOtRtZntpuRFQfJHzdrMN92', '5'],
      dateCreated: Date.now(),
    },
    {
      userId: '5',
      username: 'tripmustgo_on',
      fullName: 'TripMustGoOn',
      emailAddress: 'pavel@gmail.com',
      following: ['4'],
      followers: ['XYwFtYOtRtZntpuRFQfJHzdrMN92'],
      dateCreated: Date.now(),
    },
    {
      userId: '6',
      username: 'canguroenglish',
      fullName: 'Canguro English',
      emailAddress: 'canguroenglish@gmail.com',
      following: ['3'],
      followers: ['XYwFtYOtRtZntpuRFQfJHzdrMN92', '3'],
      dateCreated: Date.now(),
    },
  ];

  // eslint-disable-next-line prefer-const
  for (let k = 0; k < users.length; k++) {
    firebase.firestore().collection('users').add(users[k]);
  }

  // eslint-disable-next-line prefer-const
  for (let i = 1; i <= 5; ++i) {
    firebase
      .firestore()
      .collection('photos')
      .add({
        photoId: i,
        userId: '4',
        imageSrc: `/images/users/zelenskiy/${i}.jpg`,
        caption: 'The President of Ukraine',
        likes: [],
        comments: [
          {
            displayName: 'olha_ua',
            comment: 'Glory to Ukraine!',
          },
          {
            displayName: 'tripmustgo_on',
            comment: 'Discover Ukraine!',
          },
        ],
        userLatitude: '40.7128°',
        userLongitude: '74.0060°',
        dateCreated: Date.now(),
      });
  }
}
