export interface Teacher {
  id: string;
  name: string;
  subject: string;
  avatarUri: string;

  teacherId: string;
  status: "Active" | "Inactive";

  personalInfo: {
    dateOfBirth: string;
    gender: string;
    phone: string;
    email: string;
    address: string;
  };

  subjectInfo: {
    primarySubject: string;
    qualification: string;
    experience: string;
    specialization?: string;
    joiningDate: string;
  };

  classes: {
    className: string;
    section: string;
    subject: string;
  }[];

  documents: {
    id: string;
    name: string;
    type: string;
    uploadedOn: string;
  }[];
}

export const TEACHERS_MOCK_DATA: Teacher[] = [
  {
    id: "1",
    name: "Ms. Priya Patel",
    subject: "Mathematics",
    avatarUri: "https://randomuser.me/api/portraits/women/12.jpg",
    teacherId: "TCHR001",
    status: "Active",

    personalInfo: {
      dateOfBirth: "15 Aug 1990",
      gender: "Female",
      phone: "+91 9123456780",
      email: "priya.patel@email.com",
      address: "Bhubaneswar, Odisha",
    },

    subjectInfo: {
      primarySubject: "Mathematics",
      qualification: "M.Sc, B.Ed",
      experience: "8 Years",
      specialization: "Algebra & Geometry",
      joiningDate: "01 June 2018",
    },

    classes: [
      { className: "3", section: "A", subject: "Mathematics" },
      { className: "4", section: "A", subject: "Mathematics" },
      { className: "4", section: "B", subject: "Mathematics" },
    ],

    documents: [
      {
        id: "TDOC001",
        name: "Degree Certificate",
        type: "PDF",
        uploadedOn: "01 June 2018",
      },
      {
        id: "TDOC002",
        name: "Aadhaar Card",
        type: "PDF",
        uploadedOn: "01 June 2018",
      },
    ],
  },

  {
    id: "2",
    name: "Mr. Rahul Sharma",
    subject: "English",
    avatarUri: "https://randomuser.me/api/portraits/men/32.jpg",
    teacherId: "TCHR002",
    status: "Active",

    personalInfo: {
      dateOfBirth: "02 Feb 1988",
      gender: "Male",
      phone: "+91 9123456781",
      email: "rahul.sharma@email.com",
      address: "Cuttack, Odisha",
    },

    subjectInfo: {
      primarySubject: "English",
      qualification: "M.A, B.Ed",
      experience: "10 Years",
      specialization: "Literature & Grammar",
      joiningDate: "12 March 2016",
    },

    classes: [
      { className: "5", section: "A", subject: "English" },
      { className: "5", section: "B", subject: "English" },
    ],

    documents: [
      {
        id: "TDOC003",
        name: "Degree Certificate",
        type: "PDF",
        uploadedOn: "12 March 2016",
      },
    ],
  },

  {
    id: "3",
    name: "Mr. Suresh Kumar",
    subject: "Science",
    avatarUri: "https://randomuser.me/api/portraits/men/45.jpg",
    teacherId: "TCHR003",
    status: "Active",

    personalInfo: {
      dateOfBirth: "20 Nov 1985",
      gender: "Male",
      phone: "+91 9123456782",
      email: "suresh.kumar@email.com",
      address: "Puri, Odisha",
    },

    subjectInfo: {
      primarySubject: "Science",
      qualification: "M.Sc, B.Ed",
      experience: "12 Years",
      specialization: "Physics & Chemistry",
      joiningDate: "05 July 2014",
    },

    classes: [
      { className: "3", section: "A", subject: "Science" },
      { className: "3", section: "B", subject: "Science" },
      { className: "4", section: "A", subject: "Science" },
    ],

    documents: [
      {
        id: "TDOC004",
        name: "Degree Certificate",
        type: "PDF",
        uploadedOn: "05 July 2014",
      },
    ],
  },

  {
    id: "4",
    name: "Ms. Neha Verma",
    subject: "Social Science",
    avatarUri: "https://randomuser.me/api/portraits/women/68.jpg",
    teacherId: "TCHR004",
    status: "Active",

    personalInfo: {
      dateOfBirth: "09 May 1992",
      gender: "Female",
      phone: "+91 9123456783",
      email: "neha.verma@email.com",
      address: "Khordha, Odisha",
    },

    subjectInfo: {
      primarySubject: "Social Science",
      qualification: "M.A, B.Ed",
      experience: "6 Years",
      specialization: "History & Civics",
      joiningDate: "18 August 2020",
    },

    classes: [
      { className: "4", section: "A", subject: "Social Science" },
      { className: "5", section: "A", subject: "Social Science" },
    ],

    documents: [],
  },

  {
    id: "5",
    name: "Mr. Amit Behera",
    subject: "Hindi",
    avatarUri: "https://randomuser.me/api/portraits/men/22.jpg",
    teacherId: "TCHR005",
    status: "Active",

    personalInfo: {
      dateOfBirth: "27 Jan 1991",
      gender: "Male",
      phone: "+91 9123456784",
      email: "amit.behera@email.com",
      address: "Bhubaneswar, Odisha",
    },

    subjectInfo: {
      primarySubject: "Hindi",
      qualification: "M.A, B.Ed",
      experience: "7 Years",
      specialization: "Grammar & Literature",
      joiningDate: "03 April 2019",
    },

    classes: [
      { className: "3", section: "A", subject: "Hindi" },
      { className: "3", section: "B", subject: "Hindi" },
    ],

    documents: [],
  },
];