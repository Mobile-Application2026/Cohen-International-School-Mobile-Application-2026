export type StudentTab =
  | "Profile"
  | "Academic"
  | "Parents"
  | "Documents";

export interface PersonalInfo {
  dateOfBirth: string;
  gender: string;
  bloodGroup: string;
  phone: string;
  email: string;
  address: string;
}

export interface AcademicInfo {
  admissionNumber: string;
  admissionDate: string;
  className: string;
  section: string;
  rollNo: string;
  academicYear: string;
  previousSchool?: string;
}

export interface ParentInfo {
  fatherName: string;
  fatherOccupation?: string;
  fatherPhone: string;

  motherName: string;
  motherOccupation?: string;
  motherPhone: string;
}

export interface DocumentItem {
  id: string;
  name: string;
  type: string;
  uploadedOn: string;
}

export interface StudentDetails {
  id: string;
  name: string;
  className: string;
  section: string;
  rollNo: number;
  avatarUri?: string;

  studentId: string;
  status: "Active" | "Inactive";

  personalInfo: PersonalInfo;
  academicInfo: AcademicInfo;
  parentInfo: ParentInfo;
  documents: DocumentItem[];
}