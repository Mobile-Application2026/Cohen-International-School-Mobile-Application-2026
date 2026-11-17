import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  BackHandler,
  useWindowDimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useParent } from '../../../context/ParentContext';
import { COLORS } from '../../../theme';
import { styles } from './style';

// ==========================================
// REPORT DATA (shape + placeholder values)
// ------------------------------------------
// Replace REPORT_DETAIL with real data. If your report card objects
// carry a `details` field in this shape, getReportDetail() uses it.
// ==========================================
type MarkItem = { label: string; value: number; max: number };
type Term = { items: MarkItem[]; total: number };
type Subject = {
  name: string;
  skill?: boolean;
  term1: Term;
  term2: Term;
  overall: number;
  grade: string;
};
type ReportDetail = {
  school: {
    name: string;
    address: string;
    contact: string;
    affiliationNo: string;
    schoolCode: string;
  };
  exam: string;
  student: {
    name: string;
    grade: string;
    rollNo: string;
    dob: string;
    house: string;
    apaarId: string;
    father: string;
    mother: string;
  };
  subjects: Subject[];
  coScholastic: { name: string; term1: string; term2: string }[];
  attendance: { present: number; working: number; percentage: number; minRequired: number };
  remarks: string;
  promotedTo: string;
  place: string;
  date: string;
};

const TERM_MAX = 100;
const SEGMENTS = 20;

const makeTerm = (items: MarkItem[]): Term => ({
  items,
  total: items.reduce((sum, item) => sum + item.value, 0),
});

const scholasticTerm = (pt: number, portfolio: number, enrich: number, exam: number, examLabel: string): Term =>
  makeTerm([
    { label: 'PT', value: pt, max: 10 },
    { label: 'Portfolio', value: portfolio, max: 5 },
    { label: 'Enrich.', value: enrich, max: 5 },
    { label: examLabel, value: exam, max: 80 },
  ]);

const skillTerm = (practical: number, theory: number): Term =>
  makeTerm([
    { label: 'Practical', value: practical, max: 50 },
    { label: 'Theory', value: theory, max: 50 },
  ]);

const REPORT_DETAIL: ReportDetail = {
  school: {
    name: 'COHEN INTERNATIONAL SCHOOL',
    address: 'Plot No. 111 & 112, Haridamada (Near IIT Bhubaneswar), Jatani, Khordha - 752050',
    contact: 'info@coheninternationalschool.com  |  +91 7077775310/11/13',
    affiliationNo: '1530280',
    schoolCode: '15876',
  },
  exam: 'Annual Examination 2025-26',
  student: {
    name: 'SURANGANA TRIPATHY',
    grade: 'I - A',
    rollNo: '21',
    dob: '10 Sep 2018',
    house: 'Titan',
    apaarId: '',
    father: 'SANTOSH KUMAR TRIPATHY',
    mother: 'MONALISHA TRIPATHY',
  },
  subjects: [
    { name: 'English', term1: scholasticTerm(10, 5, 5, 74, 'Half Yearly'), term2: scholasticTerm(10, 5, 5, 79, 'Annual'), overall: 97, grade: 'A1' },
    { name: 'Hindi', term1: scholasticTerm(10, 5, 5, 76, 'Half Yearly'), term2: scholasticTerm(9, 5, 5, 71, 'Annual'), overall: 92, grade: 'A2' },
    { name: 'Odia', term1: scholasticTerm(10, 5, 5, 74, 'Half Yearly'), term2: scholasticTerm(10, 5, 5, 78, 'Annual'), overall: 96, grade: 'A1' },
    { name: 'Mathematics', term1: scholasticTerm(10, 5, 5, 73, 'Half Yearly'), term2: scholasticTerm(9, 5, 5, 76, 'Annual'), overall: 94, grade: 'A2' },
    { name: 'EVS', term1: scholasticTerm(10, 5, 5, 78, 'Half Yearly'), term2: scholasticTerm(10, 5, 5, 76, 'Annual'), overall: 97, grade: 'A1' },
    { name: 'Computer Application', skill: true, term1: skillTerm(46, 47), term2: skillTerm(50, 50), overall: 97, grade: 'A1' },
  ],
  coScholastic: [
    { name: 'Work Education (House/club Activity)', term1: 'A', term2: 'A' },
    { name: 'Art Education (Aesthetics/ Performing Arts)', term1: 'A', term2: 'A' },
    { name: 'Health & Physical Education (Sports/Karate)', term1: 'A', term2: 'A' },
    { name: 'Discipline (Moral Science/Conduct/Uniform)', term1: 'A', term2: 'A' },
  ],
  attendance: { present: 103, working: 125, percentage: 82.4, minRequired: 75 },
  remarks: 'A Highly motivated and focused learner',
  promotedTo: 'II',
  place: 'Jatani',
  date: '01 March 2026',
};

// Standard 8-point scale — confirm the B1 / B2 rows against your school's scale
const GRADING_SCALE = [
  { range: '91 - 100', grade: 'A1' },
  { range: '81 - 90', grade: 'A2' },
  { range: '71 - 80', grade: 'B1' },
  { range: '61 - 70', grade: 'B2' },
  { range: '51 - 60', grade: 'C1' },
  { range: '41 - 50', grade: 'C2' },
  { range: '33 - 40', grade: 'D' },
  { range: '32 & below', grade: 'E' },
];

const getReportDetail = (card: unknown, fullName: string): ReportDetail => {
  if (card && typeof card === 'object' && 'details' in card) {
    return (card as { details: ReportDetail }).details;
  }
  // Placeholder: shows the sample report under the selected child's name
  return { ...REPORT_DETAIL, student: { ...REPORT_DETAIL.student, name: fullName } };
};

// ==========================================
// SMALL LOCAL HELPERS
// ==========================================
const GRADE_TONES = {
  success: { pill: styles.pillSuccess, text: styles.pillTextSuccess },
  info: { pill: styles.pillInfo, text: styles.pillTextInfo },
  warning: { pill: styles.pillWarning, text: styles.pillTextWarning },
  danger: { pill: styles.pillDanger, text: styles.pillTextDanger },
};

const getGradeTone = (grade: string) => {
  const key = grade.trim().toUpperCase().charAt(0);
  if (key === 'A') return GRADE_TONES.success;
  if (key === 'B') return GRADE_TONES.info;
  if (key === 'C') return GRADE_TONES.warning;
  return GRADE_TONES.danger;
};

const GradePill = ({ grade, large }: { grade: string; large?: boolean }) => {
  const tone = getGradeTone(grade);
  return (
    <View style={[styles.pill, tone.pill, large && styles.pillLarge]}>
      <Text style={[styles.pillText, tone.text, large && styles.pillTextLarge]}>{grade}</Text>
    </View>
  );
};

const SectionHeader = ({ part, title }: { part: string; title: string }) => (
  <View style={styles.rptSectionHeader}>
    <View style={styles.rptSectionBar} />
    <View>
      <Text style={styles.rptSectionPart}>{part}</Text>
      <Text style={styles.rptSectionTitle}>{title}</Text>
    </View>
  </View>
);

const InfoItem = ({
  label,
  value,
  narrow,
  accent,
}: {
  label: string;
  value: string;
  narrow: boolean;
  accent?: boolean;
}) => (
  <View style={[styles.rptInfoItem, narrow && styles.rptInfoItemFull]}>
    <Text style={styles.rptInfoLabel}>{label}</Text>
    <Text style={[styles.rptInfoValue, accent && styles.rptInfoValueAccent]}>{value || '—'}</Text>
  </View>
);

const TermBlock = ({ title, term }: { title: string; term: Term }) => (
  <View style={styles.rptTermBlock}>
    <View style={styles.rptTermHeader}>
      <Text style={styles.rptTermTitle}>{title}</Text>
      <Text style={styles.rptTermTotal}>
        {term.total}
        <Text style={styles.rptTermTotalMax}>/{TERM_MAX}</Text>
      </Text>
    </View>
    <View style={styles.rptMarkRow}>
      {term.items.map((item, index) => (
        <View key={item.label} style={[styles.rptMarkCell, index > 0 && styles.rptMarkCellDivider]}>
          <Text style={styles.rptMarkValue}>
            {item.value}
            <Text style={styles.rptMarkMax}>/{item.max}</Text>
          </Text>
          <Text
            style={styles.rptMarkLabel}
            numberOfLines={1}
            adjustsFontSizeToFit
            minimumFontScale={0.8}
          >
            {item.label}
          </Text>
        </View>
      ))}
    </View>
  </View>
);

// ==========================================
// SCREEN
// ==========================================
const ReportCardScreen = () => {
  const { selectedChild } = useParent();
  const { width } = useWindowDimensions();
  const scrollRef = useRef<ScrollView>(null);
  const [activeCardId, setActiveCardId] = useState<string | number | null>(null);

  const isNarrow = width < 360;

  // Open report scrolls to top; Android back button returns to the list
  useEffect(() => {
    scrollRef.current?.scrollTo({ y: 0, animated: false });
    if (activeCardId === null) return undefined;
    const sub = BackHandler.addEventListener('hardwareBackPress', () => {
      setActiveCardId(null);
      return true;
    });
    return () => sub.remove();
  }, [activeCardId]);

  if (!selectedChild) return null;

  const handleDownload = () => {
    // TODO: wire up actual download / view handler
  };

  const activeCard = selectedChild.reportCards.find((card) => card.id === activeCardId);

  // ------------------------------------------
  // PROGRESS REPORT VIEW
  // ------------------------------------------
  if (activeCard) {
    const report = getReportDetail(activeCard, selectedChild.fullName);
    const { student, attendance } = report;
    const attendanceOk = attendance.percentage >= attendance.minRequired;
    const filledSegments = Math.round((Math.min(attendance.percentage, 100) / 100) * SEGMENTS);

    return (
      <ScrollView
        ref={scrollRef}
        style={styles.container}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {/* Top bar */}
        <View style={styles.rptTopBar}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.rptIconBtn}
            onPress={() => setActiveCardId(null)}
          >
            <Ionicons name="arrow-back" size={20} color={COLORS.textPrimary} />
          </TouchableOpacity>
          <Text style={styles.rptTopTitle} numberOfLines={1}>
            {activeCard.title}
          </Text>
          <TouchableOpacity activeOpacity={0.8} style={styles.rptIconBtn} onPress={handleDownload}>
            <Ionicons name="download-outline" size={20} color={COLORS.primary} />
          </TouchableOpacity>
        </View>

        {/* School header */}
        <View style={styles.schoolCard}>
          <View style={styles.schoolCrest}>
            <Ionicons name="school-outline" size={24} color={COLORS.primary} />
          </View>
          <Text style={styles.schoolName}>{report.school.name}</Text>
          <Text style={styles.schoolAddress}>{report.school.address}</Text>
          <Text style={styles.schoolAddress}>{report.school.contact}</Text>
          <View style={styles.schoolMetaRow}>
            <View style={styles.schoolMetaChip}>
              <Text style={styles.schoolMetaText}>Affiliation No: {report.school.affiliationNo}</Text>
            </View>
            <View style={styles.schoolMetaChip}>
              <Text style={styles.schoolMetaText}>School Code: {report.school.schoolCode}</Text>
            </View>
          </View>
          <View style={styles.schoolDivider} />
          <Text style={styles.schoolReportLabel}>PROGRESS REPORT</Text>
          <Text style={styles.schoolExamTitle}>{report.exam}</Text>
        </View>

        {/* Student details */}
        <View style={styles.rptCard}>
          <View style={styles.rptStudentRow}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>{selectedChild.initials}</Text>
            </View>
            <View style={styles.summaryInfo}>
              <Text style={styles.rptStudentName}>{student.name}</Text>
              <Text style={styles.rptStudentSub}>
                Grade {student.grade}  •  Roll No. {student.rollNo}
              </Text>
            </View>
          </View>
          <View style={styles.rptDivider} />
          <View style={styles.rptInfoGrid}>
            <InfoItem label="Date of Birth" value={student.dob} narrow={isNarrow} />
            <InfoItem label="House" value={student.house} narrow={isNarrow} />
            <InfoItem label="Father's Name" value={student.father} narrow={isNarrow} />
            <InfoItem label="Mother's Name" value={student.mother} narrow={isNarrow} />
            <InfoItem label="APAAR ID" value={student.apaarId} narrow={isNarrow} />
          </View>
        </View>

        {/* PART-I: Scholastic areas */}
        <SectionHeader part="PART-I" title="Scholastic Areas" />
        {report.subjects.map((subject, index) => (
          <View key={subject.name} style={styles.rptSubjectCard}>
            <View style={styles.rptSubjectHeader}>
              <View style={styles.rptSnBadge}>
                <Text style={styles.rptSnText}>{index + 1}</Text>
              </View>
              <View style={styles.rptSubjectInfo}>
                <Text style={styles.rptSubjectName} numberOfLines={2}>
                  {subject.name}
                </Text>
                {subject.skill && <Text style={styles.rptSubjectTag}>Skill subject</Text>}
              </View>
              <View style={styles.rptOverallBox}>
                <Text style={styles.rptOverallLabel}>Overall</Text>
                <Text style={styles.rptOverallValue}>{subject.overall}</Text>
              </View>
              <GradePill grade={subject.grade} large />
            </View>
            <TermBlock title="TERM I" term={subject.term1} />
            <TermBlock title="TERM II" term={subject.term2} />
          </View>
        ))}

        {/* PART-II: Co-scholastic areas */}
        <SectionHeader part="PART-II" title="Co-Scholastic Areas (3-point A–C scale)" />
        <View style={styles.rptCard}>
          <View style={styles.rptCoHeadRow}>
            <View style={styles.rptCoHeadSpacer} />
            <View style={styles.rptCoCol}>
              <Text style={styles.rptCoColHead}>Term I</Text>
            </View>
            <View style={styles.rptCoCol}>
              <Text style={styles.rptCoColHead}>Term II</Text>
            </View>
          </View>
          {report.coScholastic.map((item) => (
            <View key={item.name} style={styles.rptCoRow}>
              <Text style={styles.rptCoName}>{item.name}</Text>
              <View style={styles.rptCoCol}>
                <GradePill grade={item.term1} />
              </View>
              <View style={styles.rptCoCol}>
                <GradePill grade={item.term2} />
              </View>
            </View>
          ))}
        </View>

        {/* PART-IV: Attendance */}
        <SectionHeader part="PART-IV" title="Attendance" />
        <View style={styles.rptCard}>
          <View style={styles.rptStatRow}>
            <View style={styles.rptStatTile}>
              <Text style={styles.rptStatValue}>{attendance.present}</Text>
              <Text style={styles.rptStatLabel}>Present days</Text>
            </View>
            <View style={styles.rptStatTile}>
              <Text style={styles.rptStatValue}>{attendance.working}</Text>
              <Text style={styles.rptStatLabel}>Working days</Text>
            </View>
            <View style={styles.rptStatTile}>
              <Text
                style={[styles.rptStatValue, attendanceOk ? styles.rptStatValueOk : styles.rptStatValueLow]}
              >
                {attendance.percentage.toFixed(2)}%
              </Text>
              <Text style={styles.rptStatLabel}>Attendance</Text>
            </View>
          </View>
          <View style={styles.rptSegRow}>
            {Array.from({ length: SEGMENTS }).map((_, i) => (
              <View
                key={i}
                style={[
                  styles.rptSeg,
                  i < filledSegments && (attendanceOk ? styles.rptSegOk : styles.rptSegLow),
                ]}
              />
            ))}
          </View>
          <Text style={styles.rptNote}>
            Minimum attendance to appear in examination is {attendance.minRequired}%
          </Text>
        </View>

        {/* Remarks, promotion, signatures */}
        <View style={styles.rptCard}>
          <Text style={styles.rptInfoLabel}>Class teacher's remarks</Text>
          <Text style={styles.rptRemarkText}>{report.remarks}</Text>
          <View style={styles.rptInfoGrid}>
            <InfoItem label="Promoted to class" value={report.promotedTo} narrow={isNarrow} accent />
            <InfoItem label="Place" value={report.place} narrow={isNarrow} />
            <InfoItem label="Date" value={report.date} narrow={isNarrow} />
          </View>
          <View style={styles.rptSignRow}>
            <View style={styles.rptSignBox}>
              <View style={styles.rptSignLine} />
              <Text style={styles.rptSignLabel}>Class Teacher</Text>
            </View>
            <View style={styles.rptSignBox}>
              <View style={styles.rptSignLine} />
              <Text style={styles.rptSignLabel}>Principal</Text>
            </View>
          </View>
        </View>

        {/* Grading scale */}
        <SectionHeader part="GRADING SCALE" title="Scholastic areas (8-point scale)" />
        <View style={styles.rptCard}>
          <View style={styles.rptScaleGrid}>
            {GRADING_SCALE.map((row) => (
              <View key={row.grade} style={styles.rptScaleItem}>
                <Text style={styles.rptScaleRange}>{row.range}</Text>
                <GradePill grade={row.grade} />
              </View>
            ))}
          </View>
        </View>

        <TouchableOpacity activeOpacity={0.8} style={styles.rptCta} onPress={handleDownload}>
          <Ionicons name="download-outline" size={20} color={COLORS.dark} />
          <Text style={styles.rptCtaText}>Download report card</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }

  // ------------------------------------------
  // REPORT CARD LIST (existing screen)
  // ------------------------------------------
  return (
    <ScrollView
      ref={scrollRef}
      style={styles.container}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.content}
    >
      {/* Child summary card */}
      <View style={styles.summaryCard}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{selectedChild.initials}</Text>
        </View>

        <View style={styles.summaryInfo}>
          <Text style={styles.childName}>{selectedChild.fullName}</Text>
          <Text style={styles.gradeText}>
            Overall grade score: {selectedChild.gradeScore}
          </Text>
        </View>
      </View>

      {/* Section title */}
      <Text style={styles.sectionTitle}>Available report cards</Text>

      {/* Report card list */}
      {selectedChild.reportCards.length === 0 ? (
        <View style={styles.emptyState}>
          <Ionicons name="document-text-outline" size={28} color={COLORS.textMuted} />
          <Text style={styles.emptyText}>No report cards available yet</Text>
        </View>
      ) : (
        selectedChild.reportCards.map((card) => (
          <TouchableOpacity
            key={card.id}
            activeOpacity={0.8}
            style={styles.reportCard}
            onPress={() => setActiveCardId(card.id)}
          >
            <View style={styles.reportIconWrap}>
              <Ionicons name="ribbon-outline" size={20} color={COLORS.textSecondary} />
            </View>

            <View style={styles.reportInfo}>
              <Text style={styles.reportTitle}>{card.title}</Text>
              <Text style={styles.reportSubtitle}>{card.subtitle}</Text>
            </View>

            <TouchableOpacity activeOpacity={0.8} style={styles.reportDownload} onPress={handleDownload}>
              <Ionicons name="download-outline" size={22} color={COLORS.primary} />
            </TouchableOpacity>
          </TouchableOpacity>
        ))
      )}
    </ScrollView>
  );
};

export default ReportCardScreen;