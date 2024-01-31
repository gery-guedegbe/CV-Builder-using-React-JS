const defaultUser = {
    firstName: 'John',
    lastName: 'Doe',
    curRole: 'Software Developer',
    curAddress: 'San Antonio, Texas',
    email: 'samplemail@gmail.com',
    contactNum: '09912345678',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur molestie dui tincidunt metus molestie fringilla. Curabitur at risus nisi. Morbi eu porta odio.',
    image: 'sample-icon.jpg',
    educs: [
      {
        id: 'educInitial1',
        school: 'Hawkins Middle School',
        location: 'Hawkins, Indiana',
        from: 'August 2003',
        to: 'June 2006',
      },
      {
        id: 'educInitial2',
        school: 'Hawkins High School',
        location: 'Hawkins, Indiana',
        from: 'August 2006',
        to: 'June 2010',
      },
      {
        id: 'educInitial3',
        school: 'Harvard University',
        degree: 'Computer Science',
        location: 'Cambridge, MA',
        from: 'September 2010',
        to: 'June 2014',
      },
    ],
    works: [
      {
        id: 'workInitial1',
        company: 'Sample Company',
        position: 'Junior Programmer',
        location: 'San Diego, California',
        from: 'August 2014',
        to: 'October 2017',
      },
      {
        id: 'workInitial2',
        company: 'A Better Company',
        position: 'Web Developer',
        location: 'Los Angeles, California',
        from: 'November 2017',
        to: 'April 2022',
      },
    ],
  };
  
  export default defaultUser;
  