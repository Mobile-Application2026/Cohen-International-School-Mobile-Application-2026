export interface Student {
  id: string;
  name: string;
  className: string;
  section: string;
  rollNo: number;
  avatarUri?: string;

  studentId: string;
  status: "Active" | "Inactive";

  personalInfo: {
    dateOfBirth: string;
    gender: string;
    bloodGroup: string;
    phone: string;
    email: string;
    address: string;
  };

  academicInfo: {
    admissionNumber: string;
    admissionDate: string;
    className: string;
    section: string;
    rollNo: string;
    academicYear: string;
    previousSchool?: string;
  };

  parentInfo: {
    fatherName: string;
    fatherOccupation?: string;
    fatherPhone: string;

    motherName: string;
    motherOccupation?: string;
    motherPhone: string;
  };

  documents: {
    id: string;
    name: string;
    type: string;
    uploadedOn: string;
  }[];
}

export const STUDENTS_MOCK_DATA: Student[] = [
  {
    id: "1",
    name: "Rohan Kumar",
    className: "3 - A",
    section: "A",
    rollNo: 12,
    avatarUri: "https://randomuser.me/api/portraits/men/11.jpg",
    studentId: "STU001",
    status: "Active",

    personalInfo: {
      dateOfBirth: "15 March 2017",
      gender: "Male",
      bloodGroup: "B+",
      phone: "9876543210",
      email: "rohan.kumar@example.com",
      address: "Bhubaneswar, Odisha",
    },

    academicInfo: {
      admissionNumber: "ADM001",
      admissionDate: "10 April 2024",
      className: "3 - A",
      section: "A",
      rollNo: "12",
      academicYear: "2026-27",
      previousSchool: "ABC Public School",
    },

    parentInfo: {
      fatherName: "Rajesh Kumar",
      fatherOccupation: "Businessman",
      fatherPhone: "9876543211",

      motherName: "Sunita Kumar",
      motherOccupation: "Teacher",
      motherPhone: "9876543212",
    },

    documents: [
      {
        id: "DOC001",
        name: "Birth Certificate",
        type: "PDF",
        uploadedOn: "10 April 2024",
      },
      {
        id: "DOC002",
        name: "Aadhaar Card",
        type: "PDF",
        uploadedOn: "10 April 2024",
      },
    ],
  },

  {
    id: "2",
    name: "Ananya Singh",
    className: "3 - A",
    section: "A",
    rollNo: 13,
    avatarUri: "https://randomuser.me/api/portraits/women/21.jpg",
    studentId: "STU002",
    status: "Active",

    personalInfo: {
      dateOfBirth: "22 July 2017",
      gender: "Female",
      bloodGroup: "A+",
      phone: "9876543220",
      email: "ananya.singh@example.com",
      address: "Cuttack, Odisha",
    },

    academicInfo: {
      admissionNumber: "ADM002",
      admissionDate: "12 April 2024",
      className: "3 - A",
      section: "A",
      rollNo: "13",
      academicYear: "2026-27",
      previousSchool: "Delhi Public School",
    },

    parentInfo: {
      fatherName: "Amit Singh",
      fatherOccupation: "Engineer",
      fatherPhone: "9876543221",

      motherName: "Priya Singh",
      motherOccupation: "Doctor",
      motherPhone: "9876543222",
    },

    documents: [
      {
        id: "DOC003",
        name: "Birth Certificate",
        type: "PDF",
        uploadedOn: "12 April 2024",
      },
      {
        id: "DOC004",
        name: "Transfer Certificate",
        type: "PDF",
        uploadedOn: "12 April 2024",
      },
    ],
  },

  {
    id: "3",
    name: "Vivek Patel",
    className: "3 - A",
    section: "A",
    rollNo: 14,
    avatarUri: "https://randomuser.me/api/portraits/men/32.jpg",
    studentId: "STU003",
    status: "Active",

    personalInfo: {
      dateOfBirth: "05 January 2017",
      gender: "Male",
      bloodGroup: "O+",
      phone: "9876543230",
      email: "vivek.patel@example.com",
      address: "Bhubaneswar, Odisha",
    },

    academicInfo: {
      admissionNumber: "ADM003",
      admissionDate: "15 April 2024",
      className: "3 - A",
      section: "A",
      rollNo: "14",
      academicYear: "2026-27",
      previousSchool: "DAV Public School",
    },

    parentInfo: {
      fatherName: "Suresh Patel",
      fatherOccupation: "Accountant",
      fatherPhone: "9876543231",

      motherName: "Kavita Patel",
      motherOccupation: "Homemaker",
      motherPhone: "9876543232",
    },

    documents: [
      {
        id: "DOC005",
        name: "Birth Certificate",
        type: "PDF",
        uploadedOn: "15 April 2024",
      },
    ],
  },

  {
    id: "4",
    name: "Meera Das",
    className: "3 - A",
    section: "A",
    rollNo: 15,
    avatarUri: "https://randomuser.me/api/portraits/women/44.jpg",
    studentId: "STU004",
    status: "Active",

    personalInfo: {
      dateOfBirth: "18 February 2017",
      gender: "Female",
      bloodGroup: "AB+",
      phone: "9876543240",
      email: "meera.das@example.com",
      address: "Puri, Odisha",
    },

    academicInfo: {
      admissionNumber: "ADM004",
      admissionDate: "18 April 2024",
      className: "3 - A",
      section: "A",
      rollNo: "15",
      academicYear: "2026-27",
      previousSchool: "St. Xavier School",
    },

    parentInfo: {
      fatherName: "Manoj Das",
      fatherOccupation: "Businessman",
      fatherPhone: "9876543241",

      motherName: "Anita Das",
      motherOccupation: "Teacher",
      motherPhone: "9876543242",
    },

    documents: [
      {
        id: "DOC006",
        name: "Birth Certificate",
        type: "PDF",
        uploadedOn: "18 April 2024",
      },
    ],
  },

  {
    id: "5",
    name: "Arjun Sahoo",
    className: "3 - A",
    section: "A",
    rollNo: 16,
    avatarUri: "https://randomuser.me/api/portraits/men/53.jpg",
    studentId: "STU005",
    status: "Active",

    personalInfo: {
      dateOfBirth: "30 May 2017",
      gender: "Male",
      bloodGroup: "B-",
      phone: "9876543250",
      email: "arjun.sahoo@example.com",
      address: "Khordha, Odisha",
    },

    academicInfo: {
      admissionNumber: "ADM005",
      admissionDate: "20 April 2024",
      className: "3 - A",
      section: "A",
      rollNo: "16",
      academicYear: "2026-27",
      previousSchool: "DAV Public School",
    },

    parentInfo: {
      fatherName: "Pradip Sahoo",
      fatherOccupation: "Manager",
      fatherPhone: "9876543251",

      motherName: "Mamata Sahoo",
      motherOccupation: "Homemaker",
      motherPhone: "9876543252",
    },

    documents: [
      {
        id: "DOC007",
        name: "Birth Certificate",
        type: "PDF",
        uploadedOn: "20 April 2024",
      },
    ],
  },

  {
    id: "6",
    name: "Priya Nayak",
    className: "3 - A",
    section: "A",
    rollNo: 17,
    avatarUri: "https://randomuser.me/api/portraits/women/65.jpg",
    studentId: "STU006",
    status: "Active",

    personalInfo: {
      dateOfBirth: "12 June 2017",
      gender: "Female",
      bloodGroup: "O+",
      phone: "9876543260",
      email: "priya.nayak@example.com",
      address: "Cuttack, Odisha",
    },

    academicInfo: {
      admissionNumber: "ADM006",
      admissionDate: "22 April 2024",
      className: "3 - A",
      section: "A",
      rollNo: "17",
      academicYear: "2026-27",
      previousSchool: "DAV Public School",
    },

    parentInfo: {
      fatherName: "Ramesh Nayak",
      fatherOccupation: "Teacher",
      fatherPhone: "9876543261",

      motherName: "Sangita Nayak",
      motherOccupation: "Homemaker",
      motherPhone: "9876543262",
    },

    documents: [],
  },

  {
    id: "7",
    name: "Sagar Mishra",
    className: "3 - A",
    section: "A",
    rollNo: 18,
    avatarUri: "https://randomuser.me/api/portraits/men/74.jpg",
    studentId: "STU007",
    status: "Active",

    personalInfo: {
      dateOfBirth: "25 August 2017",
      gender: "Male",
      bloodGroup: "A+",
      phone: "9876543270",
      email: "sagar.mishra@example.com",
      address: "Bhubaneswar, Odisha",
    },

    academicInfo: {
      admissionNumber: "ADM007",
      admissionDate: "25 April 2024",
      className: "3 - A",
      section: "A",
      rollNo: "18",
      academicYear: "2026-27",
      previousSchool: "DAV Public School",
    },

    parentInfo: {
      fatherName: "Ashok Mishra",
      fatherOccupation: "Engineer",
      fatherPhone: "9876543271",

      motherName: "Rekha Mishra",
      motherOccupation: "Teacher",
      motherPhone: "9876543272",
    },

    documents: [],
  },

  {
    id: "8",
    name: "Kabita Behera",
    className: "3 - A",
    section: "A",
    rollNo: 19,
    avatarUri: "https://randomuser.me/api/portraits/women/28.jpg",
    studentId: "STU008",
    status: "Active",

    personalInfo: {
      dateOfBirth: "08 September 2017",
      gender: "Female",
      bloodGroup: "B+",
      phone: "9876543280",
      email: "kabita.behera@example.com",
      address: "Puri, Odisha",
    },

    academicInfo: {
      admissionNumber: "ADM008",
      admissionDate: "27 April 2024",
      className: "3 - A",
      section: "A",
      rollNo: "19",
      academicYear: "2026-27",
      previousSchool: "St. Mary's School",
    },

    parentInfo: {
      fatherName: "Bikash Behera",
      fatherOccupation: "Businessman",
      fatherPhone: "9876543281",

      motherName: "Laxmi Behera",
      motherOccupation: "Homemaker",
      motherPhone: "9876543282",
    },

    documents: [],
  },

  {
    id: "9",
    name: "Debasis Rout",
    className: "3 - A",
    section: "A",
    rollNo: 20,
    avatarUri: "https://randomuser.me/api/portraits/men/85.jpg",
    studentId: "STU009",
    status: "Active",

    personalInfo: {
      dateOfBirth: "14 October 2017",
      gender: "Male",
      bloodGroup: "O-",
      phone: "9876543290",
      email: "debasis.rout@example.com",
      address: "Cuttack, Odisha",
    },

    academicInfo: {
      admissionNumber: "ADM009",
      admissionDate: "28 April 2024",
      className: "3 - A",
      section: "A",
      rollNo: "20",
      academicYear: "2026-27",
      previousSchool: "DAV Public School",
    },

    parentInfo: {
      fatherName: "Prakash Rout",
      fatherOccupation: "Businessman",
      fatherPhone: "9876543291",

      motherName: "Sushila Rout",
      motherOccupation: "Teacher",
      motherPhone: "9876543292",
    },

    documents: [],
  },

  {
    id: "10",
    name: "Sneha Panda",
    className: "3 - A",
    section: "A",
    rollNo: 21,
    avatarUri: "https://randomuser.me/api/portraits/women/37.jpg",
    studentId: "STU010",
    status: "Active",

    personalInfo: {
      dateOfBirth: "20 November 2017",
      gender: "Female",
      bloodGroup: "A-",
      phone: "9876543300",
      email: "sneha.panda@example.com",
      address: "Bhubaneswar, Odisha",
    },

    academicInfo: {
      admissionNumber: "ADM010",
      admissionDate: "30 April 2024",
      className: "3 - A",
      section: "A",
      rollNo: "21",
      academicYear: "2026-27",
      previousSchool: "DAV Public School",
    },

    parentInfo: {
      fatherName: "Sanjay Panda",
      fatherOccupation: "Engineer",
      fatherPhone: "9876543301",

      motherName: "Madhuri Panda",
      motherOccupation: "Teacher",
      motherPhone: "9876543302",
    },

    documents: [],
  },

  {
    id: "11",
    name: "Amit Jena",
    className: "3 - B",
    section: "B",
    rollNo: 1,
    avatarUri: "https://randomuser.me/api/portraits/men/16.jpg",
    studentId: "STU011",
    status: "Active",

    personalInfo: {
      dateOfBirth: "10 January 2017",
      gender: "Male",
      bloodGroup: "B+",
      phone: "9876543310",
      email: "amit.jena@example.com",
      address: "Khordha, Odisha",
    },

    academicInfo: {
      admissionNumber: "ADM011",
      admissionDate: "02 May 2024",
      className: "3 - B",
      section: "B",
      rollNo: "1",
      academicYear: "2026-27",
      previousSchool: "DAV Public School",
    },

    parentInfo: {
      fatherName: "Rabi Jena",
      fatherOccupation: "Businessman",
      fatherPhone: "9876543311",

      motherName: "Puja Jena",
      motherOccupation: "Homemaker",
      motherPhone: "9876543312",
    },

    documents: [],
  },

  {
    id: "12",
    name: "Ritika Mohanty",
    className: "3 - B",
    section: "B",
    rollNo: 2,
    avatarUri: "https://randomuser.me/api/portraits/women/52.jpg",
    studentId: "STU012",
    status: "Active",

    personalInfo: {
      dateOfBirth: "17 February 2017",
      gender: "Female",
      bloodGroup: "AB+",
      phone: "9876543320",
      email: "ritika.mohanty@example.com",
      address: "Puri, Odisha",
    },

    academicInfo: {
      admissionNumber: "ADM012",
      admissionDate: "05 May 2024",
      className: "3 - B",
      section: "B",
      rollNo: "2",
      academicYear: "2026-27",
      previousSchool: "St. Mary's School",
    },

    parentInfo: {
      fatherName: "Sanjib Mohanty",
      fatherOccupation: "Accountant",
      fatherPhone: "9876543321",

      motherName: "Rina Mohanty",
      motherOccupation: "Teacher",
      motherPhone: "9876543322",
    },

    documents: [],
  },
];