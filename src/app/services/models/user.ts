export interface User {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  location: {
    street: {
      number: number;
      name: string;
    };
    city: string;
    state: string;
    country: string;
    postcode: number | string;
    coordinates: {
      latitude: string;
      longitude: string;
    };
    timezone: {
      offset: string;
      description: string;
    };
  };
  email: string;
  login: {
    uuid: string;
    username: string;
    password: string;
    salt: string;
    md5: string;
    sha1: string;
    sha256: string;
  };
  dob: {
    date: string;
    age: number;
  };
  registered: {
    date: string;
    age: number;
  };
  phone: string;
  cell: string;
  id: {
    name: string;
    value: string | null;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  nat: string;
}

export const userMock: User = {
  gender: 'female',
  name: {
    title: 'Ms',
    first: 'Jane',
    last: 'Doe',
  },
  location: {
    street: {
      number: 123,
      name: 'Main Street',
    },
    city: 'Springfield',
    state: 'Illinois',
    country: 'USA',
    postcode: '62701',
    coordinates: {
      latitude: '39.7817',
      longitude: '-89.6501',
    },
    timezone: {
      offset: '-05:00',
      description: 'Eastern Time (US & Canada)',
    },
  },
  email: 'jane.doe@example.com',
  login: {
    uuid: 'c6f8fa12-1b74-4e92-9f12-45d8d7f73c5b',
    username: 'janedoe',
    password: 'password123',
    salt: 'a1b2c3d4',
    md5: '5f4dcc3b5aa765d61d8327deb882cf99',
    sha1: '7c4a8d09ca3762af61e59520943dc26494f8941b',
    sha256: '2c1743a391305fbf367df8e4f069f9f9e2e3e0eb20f877bcd1f24cc5fda4b8a9',
  },
  dob: {
    date: '1985-05-15T09:44:18.674Z',
    age: 38,
  },
  registered: {
    date: '2010-06-22T14:22:12.000Z',
    age: 13,
  },
  phone: '555-555-5555',
  cell: '555-123-4567',
  id: {
    name: 'SSN',
    value: '123-45-6789',
  },
  picture: {
    large: 'https://randomuser.me/api/portraits/women/50.jpg',
    medium: 'https://randomuser.me/api/portraits/med/women/50.jpg',
    thumbnail: 'https://randomuser.me/api/portraits/thumb/women/50.jpg',
  },
  nat: 'US',
};
