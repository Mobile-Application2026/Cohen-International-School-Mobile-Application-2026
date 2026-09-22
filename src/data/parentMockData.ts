import { Ionicons } from '@expo/vector-icons';

/*
|--------------------------------------------------------------------------
| Parent Mock Data
|--------------------------------------------------------------------------
|
| This file contains all temporary mock data used by the Parent module.
|
| Structure:
|
| PARENT_MOCK_DATA
|   ├── parent
|   ├── children
|   │    ├── Aarav
|   │    └── Ananya
|   ├── busTracking
|   ├── hostel
|   └── mentors
|
| Later, this complete object can be replaced by API/database data.
|
|--------------------------------------------------------------------------
*/

// ==========================================================================
// Types
// ==========================================================================

export type IconName = keyof typeof Ionicons.glyphMap;

export interface ScheduleItem {
  id: string;
  title: string;
  section: string;
  time: string;
  location: string;
  status?: string;
  period?: number;
}

export interface BiometricLog {
  id: string;
  dateLabel: string;
  timeIn: string;
  timeOut: string | null;
  status: string;
}

export interface FeeRecord {
  id: string;
  title: string;
  amount: string;
  reference: string;
  date: string;
}

export interface ReportCard {
  id: string;
  title: string;
  subtitle: string;
}

export interface ChildData {
  id: string;
  firstName: string;
  fullName: string;
  initials: string;

  classLabel: string;
  section: string;
  board: string;
  course?: string;

  rollNumber: string;

  teacherName: string;

  // Dashboard
  presentToday: boolean;
  checkInTime: string;

  attendance: string;
  classRank: string;
  feeDues: string;
  hostel: string;

  // Child card
  gradeScore: string;
  feeStatus: string;

  // Attendance
  daysPresent: number;
  totalDays: number;
  presentPercent: string;
  absentDays: string;
  leaveDays: string;

  biometricLog: BiometricLog[];

  // Timetable
  timetable: {
    monday: ScheduleItem[];
    tuesday: ScheduleItem[];
    wednesday: ScheduleItem[];
    thursday: ScheduleItem[];
    friday: ScheduleItem[];
    saturday: ScheduleItem[];
  };

  // Fees
  fees: FeeRecord[];

  // Report Cards
  reportCards: ReportCard[];
}

export interface ParentProfile {
  initials: string;
  fullName: string;
  role: string;
  childrenLabel: string;

  email: string;
  phone: string;
  occupation: string;
  residentialAddress: string;
}

export interface BusTrackingData {
  routeNumber: string;
  vehicleNumber: string;
  driverName: string;
  driverPhone: string;
  status: string;

  stops: {
    id: string;
    name: string;
    time: string;
    detail: string;
    status: 'completed' | 'current' | 'upcoming';
  }[];
}

export interface HostelData {
  name: string;
  wardenName: string;
  wardenPhone: string;

  meals: {
    id: string;
    type: string;
    time: string;
    mainItem: string;
    description: string;
  }[];
}

export interface MentorData {
  id: string;
  name: string;
  designation: string;
  icon: IconName;
}

export interface MentorMessage {
  mentorName: string;
  dateTime: string;
  message: string;
  reply: string;
}

export interface ParentMockData {
  parent: ParentProfile;
  children: ChildData[];
  busTracking: BusTrackingData;
  hostel: HostelData;
  mentors: MentorData[];
  mentorMessage: MentorMessage;
}

// ==========================================================================
// Children
// ==========================================================================

export const CHILDREN_DATA: ChildData[] = [

  // ------------------------------------------------------------------------
  // Aarav
  // ------------------------------------------------------------------------

  {
    id: 'aarav',

    firstName: 'Aarav',
    fullName: 'Aarav Sharma',
    initials: 'AS',

    classLabel: 'XI',
    section: 'XI-A',
    board: 'Science',
    course: 'JEE Integrated',

    rollNumber: '07',

    teacherName: 'Dr. Alok Mohanty',

    // Dashboard
    presentToday: true,
    checkInTime: '07:30 AM',

    attendance: '96.5%',
    classRank: '#1',
    feeDues: '₹0.00',
    hostel: 'Kaveri',

    // Child Card
    gradeScore: '92.4%',
    feeStatus: 'Cleared',

    // Attendance
    daysPresent: 149,
    totalDays: 153,
    presentPercent: '97.4%',
    absentDays: '1 day',
    leaveDays: '3 days',

    biometricLog: [
      {
        id: 'aarav-log-1',
        dateLabel: 'Today (27 Aug)',
        timeIn: '07:38 AM',
        timeOut: null,
        status: 'Present',
      },
      {
        id: 'aarav-log-2',
        dateLabel: '26 Aug 2026',
        timeIn: '07:35 AM',
        timeOut: '04:12 PM',
        status: 'Present',
      },
      {
        id: 'aarav-log-3',
        dateLabel: '25 Aug 2026',
        timeIn: '07:40 AM',
        timeOut: '04:05 PM',
        status: 'Present',
      },
      {
        id: 'aarav-log-4',
        dateLabel: '24 Aug 2026',
        timeIn: '07:44 AM',
        timeOut: '04:15 PM',
        status: 'Present',
      },
    ],

    // Timetable
    timetable: {
      monday: [
        {
          id: 'aarav-mon-1',
          title: 'Mathematics',
          section: 'XI-A',
          time: '08:00 – 08:45',
          location: 'Room 12',
          status: 'Next',
          period: 1,
        },
        {
          id: 'aarav-mon-2',
          title: 'Physics',
          section: 'XI-A',
          time: '08:50 – 09:35',
          location: 'Lab 03',
          status: 'Upcoming',
          period: 2,
        },
        {
          id: 'aarav-mon-3',
          title: 'Library / Study Hall',
          section: '',
          time: '09:40 – 10:25',
          location: '',
          status: 'Upcoming',
          period: 3,
        },
        {
          id: 'aarav-mon-4',
          title: 'Chemistry',
          section: 'XI-A',
          time: '10:30 – 11:15',
          location: 'Room 15',
          status: 'Upcoming',
          period: 4,
        },
        {
          id: 'aarav-mon-5',
          title: 'Computer Science',
          section: 'XI-A',
          time: '11:15 – 12:00',
          location: 'Lab 01',
          status: 'Upcoming',
          period: 5,
        },
      ],

      tuesday: [],
      wednesday: [],
      thursday: [],
      friday: [],
      saturday: [],
    },

    // Fees
    //
    // No Aarav-specific fee records were visible in the supplied
    // screenshots, so we keep this empty rather than inventing data.
    fees: [],

    // Report cards
    //
    // No Aarav report-card details were visible in the supplied
    // screenshots.
    reportCards: [],
  },

  // ------------------------------------------------------------------------
  // Ananya
  // ------------------------------------------------------------------------

  {
    id: 'ananya',

    firstName: 'Ananya',
    fullName: 'Ananya Sharma',
    initials: 'AN',

    classLabel: 'VIII',
    section: 'VIII-B',
    board: 'CBSE Regular',

    rollNumber: '12',

    teacherName: 'Dr. Alok Mohanty',

    // Dashboard
    presentToday: true,
    checkInTime: '07:30 AM',

    attendance: '92.0%',
    classRank: '#4',
    feeDues: '₹0.00',
    hostel: 'Kaveri',

    // Child Card
    gradeScore: '94.8%',
    feeStatus: 'Cleared',

    // Attendance
    daysPresent: 145,
    totalDays: 153,
    presentPercent: '96.5%',
    absentDays: '2 days',
    leaveDays: '3 days',

    biometricLog: [
      {
        id: 'ananya-log-1',
        dateLabel: 'Today (27 Aug)',
        timeIn: '07:45 AM',
        timeOut: null,
        status: 'Present',
      },
      {
        id: 'ananya-log-2',
        dateLabel: '26 Aug 2026',
        timeIn: '07:42 AM',
        timeOut: '04:10 PM',
        status: 'Present',
      },
      {
        id: 'ananya-log-3',
        dateLabel: '25 Aug 2026',
        timeIn: '07:40 AM',
        timeOut: '04:05 PM',
        status: 'Present',
      },
      {
        id: 'ananya-log-4',
        dateLabel: '24 Aug 2026',
        timeIn: '07:44 AM',
        timeOut: '04:15 PM',
        status: 'Present',
      },
    ],

    // Timetable
    timetable: {
      monday: [
        {
          id: 'ananya-mon-1',
          title: 'English',
          section: 'VIII-B',
          time: '08:00 – 08:45',
          location: 'Room 07',
          status: 'Next',
          period: 1,
        },
        {
          id: 'ananya-mon-2',
          title: 'Science',
          section: 'VIII-B',
          time: '08:50 – 09:35',
          location: 'Lab 01',
          status: 'Upcoming',
          period: 2,
        },
        {
          id: 'ananya-mon-3',
          title: 'Library / Study Hall',
          section: '',
          time: '09:40 – 10:25',
          location: '',
          status: 'Upcoming',
          period: 3,
        },
      ],

      tuesday: [],
      wednesday: [],
      thursday: [],
      friday: [],
      saturday: [],
    },

    // Fees
    fees: [
      {
        id: 'fee-ananya-1',
        title: 'Term 2 · Academic Session 2026-27',
        amount: '₹62,500',
        reference: '#CQ-2026-9821',
        date: '05 Aug 2026',
      },
      {
        id: 'fee-ananya-2',
        title: 'Term 1 · Admission & Annual Charges',
        amount: '₹75,000',
        reference: '#CQ-2026-4412',
        date: '12 Apr 2026',
      },
    ],

    // Report Cards
    reportCards: [
      {
        id: 'report-ananya-1',
        title: 'Term 2 Report Card',
        subtitle: 'Academic Session 2026-27',
      },
      {
        id: 'report-ananya-2',
        title: 'Term 1 Report Card',
        subtitle: 'Academic Session 2026-27',
      },
    ],
  },
];

// ==========================================================================
// Parent Profile
// ==========================================================================

export const PARENT_PROFILE: ParentProfile = {
  initials: 'DA',

  fullName: 'Dr. Alok Mohanty',

  role: 'Parent Guardian',

  childrenLabel: 'Class XI & VIII',

  email: 'parent@cohenschool.com',

  phone: '+91 98765 12345',

  occupation: 'Chief Medical Officer, AIIMS',

  residentialAddress:
    'Plot 142, Silicon Hills, Bhubaneswar',
};

// ==========================================================================
// Bus Tracking
// ==========================================================================

export const BUS_TRACKING_DATA: BusTrackingData = {
  routeNumber: 'Route #4',

  vehicleNumber: 'OD-02-AX-8910',

  driverName: 'Manas Kumar Sahoo',

  driverPhone: '+91 97777 06447',

  status: 'Live',

  stops: [
    {
      id: 'stop-1',

      name: 'Master Canteen Pickup Point',

      time: '06:50 AM',

      detail: '8 students boarded',

      status: 'completed',
    },

    {
      id: 'stop-2',

      name: 'Khandagiri Square',

      time: '07:15 AM',

      detail: 'Aarav Sharma RFID verified',

      status: 'completed',
    },

    {
      id: 'stop-3',

      name: 'Jatani Square',

      time: '07:32 AM',

      detail: 'Speed limit compliant',

      status: 'completed',
    },

    {
      id: 'stop-4',

      name: 'Cohen International School',

      time: '07:42 AM',

      detail: 'Completed safe arrival',

      status: 'current',
    },
  ],
};

// ==========================================================================
// Hostel
// ==========================================================================

export const HOSTEL_DATA: HostelData = {
  name: 'Kaveri Bhavan',

  wardenName: 'Smt. Sunita Mohanty',

  wardenPhone: '+91 70777 75311',

  meals: [
    {
      id: 'meal-breakfast',

      type: 'BREAKFAST',

      time: '07:00 – 08:00 AM',

      mainItem: 'Steamed Idli & Sambar',

      description: 'Boiled Eggs / Sprouts & Hot Milk',
    },

    {
      id: 'meal-lunch',

      type: 'LUNCH',

      time: '12:30 – 01:30 PM',

      mainItem: 'Paneer Butter Masala & Rice',

      description: 'Dal Tadka, Tawa Roti, Salad',
    },

    {
      id: 'meal-snacks',

      type: 'SNACKS',

      time: '05:00 – 05:45 PM',

      mainItem: 'Veg Samosa / Upma',

      description: 'Bournvita / Tea & Biscuits',
    },

    {
      id: 'meal-dinner',

      type: 'DINNER',

      time: '08:00 – 09:15 PM',

      mainItem: 'Tawa Roti & Mixed Sabzi',

      description: 'Dal Fry, Gulab Jamun & Milk',
    },
  ],
};

// ==========================================================================
// Faculty Mentors
// ==========================================================================

export const MENTORS_DATA: MentorData[] = [
  {
    id: 'mentor-priya',

    name: 'Smt. Priya Mohanty',

    designation: 'Class Coordinator · Mathematics',

    icon: 'person-outline',
  },

  {
    id: 'mentor-sk-patnaik',

    name: 'Dr. S. K. Patnaik',

    designation: 'Senior Faculty · Physics Wing',

    icon: 'person-outline',
  },
];

// ==========================================================================
// Mentor Message
// ==========================================================================

export const MENTOR_MESSAGE: MentorMessage = {
  mentorName: 'Smt. Priya Mohanty',

  dateTime: 'Yesterday, 04:30 PM',

  message:
    'Aarav scored 96% in the Quadratic Equations unit test. Keep encouraging his daily practice.',

  reply:
    "Thank you ma'am for the mentorship!",
};

// ==========================================================================
// Complete Parent Mock Data
// ==========================================================================

export const PARENT_MOCK_DATA: ParentMockData = {
  parent: PARENT_PROFILE,

  children: CHILDREN_DATA,

  busTracking: BUS_TRACKING_DATA,

  hostel: HOSTEL_DATA,

  mentors: MENTORS_DATA,

  mentorMessage: MENTOR_MESSAGE,
};

// ==========================================================================
// Helper Functions
// ==========================================================================

export const getChildById = (
  childId: string
): ChildData | undefined => {
  return CHILDREN_DATA.find(
    (child) => child.id === childId
  );
};

export const getChildren = (): ChildData[] => {
  return CHILDREN_DATA;
};