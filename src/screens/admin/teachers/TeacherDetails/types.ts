export type TeacherTab =
  | "Profile"
  | "Subjects"
  | "Classes"
  | "Documents";

export interface TeacherPersonalInfo {
  dateOfBirth: string;
  gender: string;
  phone: string;
  email: string;
  address: string;
}

export interface TeacherSubjectInfo {
  primarySubject: string;
  qualification: string;
  experience: string;
  specialization?: string;
  joiningDate: string;
}

export interface TeacherClassAssignment {
  className: string;
  section: string;
  subject: string;
}

export interface DocumentItem {
  id: string;
  name: string;
  type: string;
  uploadedOn: string;
}

export interface TeacherDetails {
  id: string;
  name: string;
  subject: string;
  avatarUri?: string;

  teacherId: string;
  status: "Active" | "Inactive";

  personalInfo: TeacherPersonalInfo;
  subjectInfo: TeacherSubjectInfo;
  classes: TeacherClassAssignment[];
  documents: DocumentItem[];
}