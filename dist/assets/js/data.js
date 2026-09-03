// ============================================================
//  CENTRAL DATA STORE – EduCore
//  All modules should import from this file for consistency.
// ============================================================

// ===== 1. STUDENTS (50+) =====
const firstNames = [
  "James",
  "Emma",
  "Liam",
  "Olivia",
  "Noah",
  "Ava",
  "William",
  "Sophia",
  "Lucas",
  "Mia",
  "Henry",
  "Charlotte",
  "Alexander",
  "Amelia",
  "Oliver",
  "Harper",
  "Benjamin",
  "Evelyn",
  "Carter",
  "Abigail",
  "Daniel",
  "Emily",
  "Matthew",
  "Elizabeth",
  "David",
  "Sofia",
  "Joseph",
  "Avery",
  "Samuel",
  "Scarlett",
  "Jacob",
  "Luna",
  "Michael",
  "Grace",
  "Ethan",
  "Chloe",
  "Jameson",
  "Victoria",
  "Mason",
  "Madison",
  "Logan",
  "Layla",
  "Jackson",
  "Nora",
  "Sebastian",
  "Hannah",
  "Caleb",
  "Ella",
  "Nathan",
  "Addison",
  "Isaac",
  "Mila",
  "Julian",
  "Ellie",
  "Levi",
  "Zoe",
  "Gabriel",
  "Aria",
  "Anthony",
  "Aurora",
];

const lastNames = [
  "Smith",
  "Johnson",
  "Williams",
  "Brown",
  "Jones",
  "Garcia",
  "Miller",
  "Davis",
  "Rodriguez",
  "Martinez",
  "Hernandez",
  "Lopez",
  "Wilson",
  "Anderson",
  "Thomas",
  "Taylor",
  "Moore",
  "Jackson",
  "Martin",
  "Lee",
  "Perez",
  "Thompson",
  "White",
  "Harris",
  "Sanchez",
  "Clark",
  "Ramirez",
  "Lewis",
  "Robinson",
  "Walker",
  "Young",
  "Allen",
  "King",
  "Wright",
  "Scott",
  "Torres",
  "Nguyen",
  "Hill",
  "Flores",
  "Green",
  "Adams",
  "Nelson",
  "Baker",
  "Hall",
  "Rivera",
  "Campbell",
  "Mitchell",
  "Carter",
  "Roberts",
  "Turner",
];

const programOptions = [
  "BS Accountancy",
  "BS Accounting Tech",
  "Diploma Ag Tech",
  "ABMT Entrepreneurship",
  "Juris Doctor",
  "BS Computer Science",
  "BS Engineering",
];

export const students = [];
let studentIdCounter = 1;
const usedNames = new Set();

while (students.length < 50) {
  const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  const fullName = `${firstName} ${lastName}`;
  if (!usedNames.has(fullName)) {
    usedNames.add(fullName);
    const id = "STU-2021-" + String(studentIdCounter).padStart(5, "0");
    const program =
      programOptions[Math.floor(Math.random() * programOptions.length)];
    students.push({
      id: id,
      name: fullName,
      program: program,
    });
    studentIdCounter++;
  }
}

// ===== 2. SUBJECTS (from Academic Setup) =====
export const subjects = [
  {
    code: "ACCT 101",
    name: "Fundamentals of Accounting",
    dept: "Accountancy",
    units: 3,
  },
  {
    code: "ACCT 102",
    name: "Intermediate Accounting I",
    dept: "Accountancy",
    units: 3,
  },
  { code: "ACCT 201", name: "Cost Accounting", dept: "Accountancy", units: 3 },
  { code: "ACCT 202", name: "Auditing Theory", dept: "Accountancy", units: 3 },
  {
    code: "ACCT 301",
    name: "Advanced Accounting",
    dept: "Accountancy",
    units: 3,
  },
  {
    code: "BUS 101",
    name: "Introduction to Business",
    dept: "Business Admin",
    units: 3,
  },
  {
    code: "BUS 201",
    name: "Business Ethics",
    dept: "Business Admin",
    units: 3,
  },
  {
    code: "BUS 301",
    name: "Strategic Management",
    dept: "Business Admin",
    units: 3,
  },
  { code: "ECON 101", name: "Microeconomics", dept: "Economics", units: 3 },
  { code: "ECON 102", name: "Macroeconomics", dept: "Economics", units: 3 },
  { code: "LAW 101", name: "Obligations and Contracts", dept: "Law", units: 3 },
  { code: "LAW 201", name: "Criminal Law", dept: "Law", units: 3 },
  { code: "LAW 301", name: "Civil Procedure", dept: "Law", units: 3 },
  {
    code: "CS 101",
    name: "Introduction to Computing",
    dept: "Computer Science",
    units: 3,
  },
  {
    code: "CS 201",
    name: "Data Structures",
    dept: "Computer Science",
    units: 3,
  },
  { code: "MATH 101", name: "College Algebra", dept: "Mathematics", units: 3 },
  { code: "MATH 201", name: "Trigonometry", dept: "Mathematics", units: 3 },
  { code: "MATH 301", name: "Calculus I", dept: "Mathematics", units: 3 },
  {
    code: "AGRI 101",
    name: "Principles of Agriculture",
    dept: "Agriculture",
    units: 3,
  },
  { code: "AGRI 201", name: "Crop Production", dept: "Agriculture", units: 3 },
  {
    code: "ANSC 101",
    name: "Animal Science",
    dept: "Animal Science",
    units: 3,
  },
  {
    code: "ENG 101",
    name: "Engineering Mathematics",
    dept: "Engineering",
    units: 3,
  },
  { code: "ENG 201", name: "Fluid Mechanics", dept: "Engineering", units: 3 },
  { code: "PHY 101", name: "College Physics", dept: "Physics", units: 3 },
];

const subjectCodes = subjects.map((s) => s.code);

// ===== 3. PROGRAMS (for graduation requirements) =====
export const programs = [
  { id: "BSA", name: "BS Accountancy", totalUnitsRequired: 150 },
  { id: "BSAT", name: "BS Accounting Tech", totalUnitsRequired: 135 },
  { id: "DAT", name: "Diploma Ag Tech", totalUnitsRequired: 70 },
  { id: "ABMT", name: "ABMT Entrepreneurship", totalUnitsRequired: 135 },
  { id: "JD", name: "Juris Doctor", totalUnitsRequired: 140 },
  { id: "BSCS", name: "BS Computer Science", totalUnitsRequired: 140 },
  { id: "BSE", name: "BS Engineering", totalUnitsRequired: 165 },
];

// ===== 4. CURRICULUM REQUIREMENTS (per program) =====
const programRequirementsMap = {
  "BS Accountancy": [
    "ACCT 101",
    "ACCT 102",
    "ACCT 201",
    "ACCT 202",
    "ACCT 301",
    "BUS 101",
    "BUS 201",
    "ECON 101",
    "ECON 102",
    "MATH 101",
    "MATH 201",
  ],
  "BS Accounting Tech": [
    "ACCT 101",
    "ACCT 102",
    "ACCT 201",
    "BUS 101",
    "BUS 201",
    "ECON 101",
    "MATH 101",
  ],
  "Diploma Ag Tech": ["AGRI 101", "AGRI 201", "ANSC 101", "MATH 101"],
  "ABMT Entrepreneurship": [
    "BUS 101",
    "BUS 201",
    "BUS 301",
    "ECON 101",
    "ECON 102",
    "MATH 101",
    "MATH 201",
  ],
  "Juris Doctor": ["LAW 101", "LAW 201", "LAW 301", "BUS 101", "ECON 101"],
  "BS Computer Science": [
    "CS 101",
    "CS 201",
    "MATH 101",
    "MATH 201",
    "MATH 301",
    "BUS 101",
  ],
  "BS Engineering": [
    "ENG 101",
    "ENG 201",
    "MATH 101",
    "MATH 201",
    "MATH 301",
    "PHY 101",
  ],
};

export const curriculumRequirements = [];
programs.forEach((p) => {
  const requiredSubjects = programRequirementsMap[p.name] || [];
  requiredSubjects.forEach((subjectCode) => {
    const subject = subjects.find((s) => s.code === subjectCode);
    if (subject) {
      curriculumRequirements.push({
        id: String(curriculumRequirements.length + 1),
        program: p.name,
        subject: subjectCode,
        required: true,
        units: subject.units,
        status: "Active",
      });
    }
  });
});

// ===== 5. GRADES (per student, per subject) =====
const gradeValues = ["A", "A-", "B+", "B", "B-", "C+", "C", "D", "F"];
const passingGrades = ["A", "A-", "B+", "B", "B-", "C+", "C"];
export const semesters = [
  "2020-2021 1st",
  "2020-2021 2nd",
  "2020-2021 Summer",
  "2021-2022 1st",
  "2021-2022 2nd",
  "2021-2022 Summer",
];

export const grades = [];
students.forEach((student) => {
  const numSubjects = 8 + Math.floor(Math.random() * 8);
  const selectedSubjects = subjectCodes
    .sort(() => 0.5 - Math.random())
    .slice(0, numSubjects);
  selectedSubjects.forEach((subjectCode) => {
    const subject = subjects.find((s) => s.code === subjectCode);
    if (!subject) return;
    const roll = Math.random();
    let grade;
    if (roll < 0.7) {
      grade = gradeValues[Math.floor(Math.random() * 7)];
    } else if (roll < 0.85) {
      grade = "D";
    } else {
      grade = Math.random() > 0.5 ? "F" : "INC";
    }
    const semester = semesters[Math.floor(Math.random() * semesters.length)];
    const isPassing = passingGrades.includes(grade);
    grades.push({
      studentId: student.id,
      subject: subjectCode,
      grade: grade,
      units: subject.units,
      semester: semester,
      isPassing: isPassing,
    });
  });
});

// ===== 6. EVALUATIONS (per student, per period) =====
export const evaluations = [];
const evaluationStatuses = ["Passed", "Failed", "Pending"];
students.forEach((student) => {
  const numPeriods = 1 + Math.floor(Math.random() * 3);
  for (let i = 0; i < numPeriods; i++) {
    const period = semesters[i % semesters.length];
    const status =
      evaluationStatuses[Math.floor(Math.random() * evaluationStatuses.length)];
    const score =
      status === "Passed"
        ? Math.round(75 + Math.random() * 25)
        : status === "Failed"
          ? Math.round(40 + Math.random() * 35)
          : null;
    const recommendation =
      status === "Passed"
        ? "Eligible for next year"
        : status === "Failed"
          ? "Needs to retake failed subjects"
          : "Under review";
    evaluations.push({
      studentId: student.id,
      period: period,
      status: status,
      score: score,
      recommendation: recommendation,
    });
  }
});

// ===== 7. ENROLMENTS (per student, per subject) =====
export const enrolments = [];
students.forEach((student) => {
  const numEnrolments = 8 + Math.floor(Math.random() * 8);
  const selectedSubjects = subjectCodes
    .sort(() => 0.5 - Math.random())
    .slice(0, numEnrolments);
  selectedSubjects.forEach((subjectCode) => {
    const subject = subjects.find((s) => s.code === subjectCode);
    if (!subject) return;
    const semester = semesters[Math.floor(Math.random() * semesters.length)];
    const gradeRecord = grades.find(
      (g) => g.studentId === student.id && g.subject === subjectCode,
    );
    const status =
      gradeRecord && gradeRecord.isPassing
        ? "Completed"
        : gradeRecord && !gradeRecord.isPassing
          ? "Dropped"
          : Math.random() > 0.7
            ? "Pending"
            : "Enrolled";
    enrolments.push({
      studentId: student.id,
      subject: subjectCode,
      semester: semester,
      status: status,
    });
  });
});

// ===== 8. CLEARANCE (per student) =====
export const clearances = [];
const clearanceItems = [
  { item: "Library Clearance", status: "Cleared" },
  { item: "Financial Clearance", status: "Cleared" },
  { item: "Academic Clearance", status: "Cleared" },
  { item: "Discipline Clearance", status: "Cleared" },
];
students.forEach((student) => {
  clearanceItems.forEach((ci) => {
    const cleared = Math.random() > 0.2;
    clearances.push({
      studentId: student.id,
      item: ci.item,
      status: cleared ? "Cleared" : "Pending",
      date: cleared ? "2021-06-15" : "—",
    });
  });
});

// ===== 9. BILLING (per student) =====
export const billings = [];
const terms = [
  "2020-2021 1st",
  "2020-2021 2nd",
  "2021-2022 1st",
  "2021-2022 2nd",
];
students.forEach((student) => {
  terms.forEach((term) => {
    const paid = Math.random() > 0.3;
    const amount = Math.round((40000 + Math.random() * 20000) / 100) * 100;
    billings.push({
      studentId: student.id,
      term: term,
      amount: "₱" + amount.toLocaleString(),
      status: paid ? "Paid" : "Unpaid",
      date: paid ? "2021-08-15" : "—",
    });
  });
});

// ===== 10. AUDIT LOGS (per student) =====
export const auditLogs = [];
const auditActions = [
  "Updated enrolment",
  "Approved grade submission",
  "Viewed grades",
  "Updated contact info",
  "Requested matriculation change",
  "Completed clearance",
  "Submitted pre-enrolment",
];
students.forEach((student) => {
  const numLogs = 3 + Math.floor(Math.random() * 5);
  for (let i = 0; i < numLogs; i++) {
    const date = new Date(
      2021,
      Math.floor(Math.random() * 12),
      Math.floor(Math.random() * 28) + 1,
    );
    const timestamp =
      date.toISOString().split("T")[0] +
      " " +
      String(Math.floor(8 + Math.random() * 10)).padStart(2, "0") +
      ":" +
      String(Math.floor(Math.random() * 60)).padStart(2, "0");
    const users = [
      "Registrar Staff",
      "Dr. Mateo Alcantara",
      "Student",
      "System Admin",
      "Faculty",
    ];
    const user = users[Math.floor(Math.random() * users.length)];
    const action =
      auditActions[Math.floor(Math.random() * auditActions.length)];
    auditLogs.push({
      studentId: student.id,
      timestamp: timestamp,
      user: user,
      action: action,
    });
  }
});

// ===== 11. GRADUATION ELIGIBILITY (pre-computed) =====
export const graduationEligibility = [];
students.forEach((student) => {
  const program = student.program;
  const programRequirements = curriculumRequirements.filter(
    (req) => req.program === program,
  );
  const requiredSubjects = programRequirements.map((req) => req.subject);
  const totalRequiredUnits = programRequirements.reduce(
    (sum, req) => sum + req.units,
    0,
  );
  const studentGrades = grades.filter((g) => g.studentId === student.id);
  const completedSubjects = studentGrades
    .filter((g) => passingGrades.includes(g.grade))
    .map((g) => g.subject);
  const allRequiredCompleted = requiredSubjects.every((subj) =>
    completedSubjects.includes(subj),
  );
  const earnedUnits = studentGrades
    .filter((g) => passingGrades.includes(g.grade))
    .reduce((sum, g) => sum + g.units, 0);
  const eligible = allRequiredCompleted && earnedUnits >= totalRequiredUnits;
  const status = eligible ? "Eligible" : "Not Eligible";
  graduationEligibility.push({
    studentId: student.id,
    studentName: student.name,
    program: program,
    earnedUnits: earnedUnits,
    totalRequiredUnits: totalRequiredUnits,
    requiredCompleted: allRequiredCompleted,
    eligible: eligible,
    status: status,
  });
});

// ===== 12. GRADUATION REPORTS (pre-computed) =====
export const graduationReports = [];
const reportStatuses = ["Completed", "Processing", "Failed"];
const reportTypes = [
  "Graduation List",
  "Summary Report",
  "Department Report",
  "Program Report",
];
for (let i = 1; i <= 20; i++) {
  const type = reportTypes[Math.floor(Math.random() * reportTypes.length)];
  const status =
    reportStatuses[Math.floor(Math.random() * reportStatuses.length)];
  const date = new Date(
    2021,
    Math.floor(Math.random() * 12),
    Math.floor(Math.random() * 28) + 1,
  );
  const dateStr = date.toISOString().split("T")[0];
  graduationReports.push({
    id: i,
    reportId: "GRAD-RPT-" + String(i).padStart(4, "0"),
    name: type.replace(/\s/g, "_") + "_" + dateStr,
    type: type,
    date: dateStr,
    size: (0.5 + Math.random() * 2).toFixed(1) + " MB",
    semester: semesters[Math.floor(Math.random() * semesters.length)],
    status: status,
  });
}

// ===== 13. FACULTY EVALUATION DATA =====
// Departments
const departments = [
  "Accountancy",
  "Accounting Tech",
  "Agriculture Tech",
  "Law",
  "Entrepreneurship",
  "Computer Science",
  "Engineering",
];

const facultyFirstNames = [
  "Alex",
  "Jordan",
  "Casey",
  "Riley",
  "Avery",
  "Taylor",
  "Jamie",
  "Cameron",
  "Quinn",
  "Reese",
  "Skyler",
  "Dakota",
  "Morgan",
  "Parker",
  "Logan",
  "Hayden",
  "Carter",
  "Eden",
  "Rowan",
  "Ellis",
  "Finley",
  "Harper",
  "River",
  "Sage",
  "Wren",
  "Blake",
  "Jules",
  "Drew",
  "Peyton",
  "Ariel",
  "Emerson",
  "Lennon",
  "Monroe",
  "Sutton",
  "Presley",
  "Hartley",
  "Oakley",
  "Kendall",
  "Bailey",
  "Rory",
];

const facultyLastNames = [
  "Taylor",
  "Lee",
  "Kim",
  "Chen",
  "Nguyen",
  "Patel",
  "Singh",
  "Garcia",
  "Martinez",
  "Wilson",
  "Anderson",
  "Thomas",
  "Jackson",
  "White",
  "Harris",
  "Martin",
  "Thompson",
  "Young",
  "Allen",
  "King",
  "Wright",
  "Scott",
  "Torres",
  "Hill",
  "Flores",
  "Green",
  "Adams",
  "Nelson",
  "Baker",
  "Hall",
  "Rivera",
  "Campbell",
  "Mitchell",
  "Carter",
  "Roberts",
  "Turner",
  "Phillips",
  "Evans",
  "Collins",
  "Edwards",
];

const coursePrefixes = [
  "ACCT",
  "BUS",
  "LAW",
  "CS",
  "MATH",
  "AGRI",
  "ANSC",
  "ENG",
];

// Generate faculty list (reuses existing `semesters` array)
const facultyData = [];
const usedFacultyNames = new Set();
let facultyId = 1;
while (facultyData.length < 30) {
  const firstName =
    facultyFirstNames[Math.floor(Math.random() * facultyFirstNames.length)];
  const lastName =
    facultyLastNames[Math.floor(Math.random() * facultyLastNames.length)];
  const fullName = `Prof. ${firstName} ${lastName}`;
  if (!usedFacultyNames.has(fullName)) {
    usedFacultyNames.add(fullName);
    const dept = departments[Math.floor(Math.random() * departments.length)];
    const overall = +(4.0 + Math.random() * 1.0).toFixed(2);
    const teaching = +(4.0 + Math.random() * 1.0).toFixed(1);
    const mentorship = +(4.0 + Math.random() * 1.0).toFixed(1);
    const research = +(3.5 + Math.random() * 1.5).toFixed(1);
    const admin = +(3.5 + Math.random() * 1.5).toFixed(1);
    const community = +(3.5 + Math.random() * 1.5).toFixed(1);
    const responses = Math.floor(10 + Math.random() * 40);
    const base = overall - 0.2 + Math.random() * 0.4;
    const historical = [];
    for (let i = 0; i < Math.min(6, semesters.length); i++) {
      historical.push(
        +(base + i * 0.05 + (Math.random() - 0.5) * 0.1).toFixed(2),
      );
    }
    const numCourses = 2 + Math.floor(Math.random() * 4);
    const evaluations = [];
    for (let c = 0; c < numCourses; c++) {
      const prefix =
        coursePrefixes[Math.floor(Math.random() * coursePrefixes.length)];
      const code = `${prefix} ${String(Math.floor(101 + Math.random() * 300)).padStart(3, "0")}`;
      const semester = semesters[Math.floor(Math.random() * semesters.length)];
      const rating = +(3.5 + Math.random() * 1.5).toFixed(2);
      const studentCount = 10 + Math.floor(Math.random() * 30);
      evaluations.push({
        course: code,
        semester: semester,
        rating: rating,
        studentCount: studentCount,
        comments: [
          "Great lecturer",
          "Needs more examples",
          "Clear explanations",
          "Engaging",
          "Heavy workload",
        ][Math.floor(Math.random() * 5)],
      });
    }
    facultyData.push({
      id: "FAC-" + String(facultyId++).padStart(4, "0"),
      name: fullName,
      department: dept,
      overall: overall,
      teaching: teaching,
      mentorship: mentorship,
      research: research,
      admin: admin,
      community: community,
      responses: responses,
      trend: historical,
      evaluations: evaluations,
    });
  }
}

export const faculty = facultyData;

export function getFacultyById(id) {
  return facultyData.find((f) => f.id === id);
}

export function getDepartmentAverages() {
  const deptMap = {};
  facultyData.forEach((f) => {
    if (!deptMap[f.department]) {
      deptMap[f.department] = { total: 0, count: 0, sum: 0 };
    }
    deptMap[f.department].total += f.overall;
    deptMap[f.department].count++;
    deptMap[f.department].sum += f.overall;
  });
  const result = {};
  Object.keys(deptMap).forEach((dept) => {
    result[dept] = +(deptMap[dept].sum / deptMap[dept].count).toFixed(2);
  });
  return result;
}

// ===== 14. BILLING DATA (PH Context) =====
const paymentMethods = [
  "GCash",
  "PayMaya",
  "Over-the-Counter (OTC)",
  "Bank Transfer",
  "Cheque",
];
const installmentPlans = ["Full Payment", "2-Pay", "3-Pay"];
const scholarshipSources = ["CHED", "DOST", "Private", "Government", "None"];

const paymentLogs = [];
const transactionTypes = [
  "Tuition Payment",
  "Partial Payment",
  "Scholarship Credit",
  "Arrear Payment",
  "Miscellaneous Fee",
  "Laboratory Fee",
];
let orCounter = 1000;

students.forEach((student) => {
  const numTxns = 2 + Math.floor(Math.random() * 4);
  for (let i = 0; i < numTxns; i++) {
    const amount = Math.round((5000 + Math.random() * 45000) / 100) * 100;
    const method =
      paymentMethods[Math.floor(Math.random() * paymentMethods.length)];
    const type =
      transactionTypes[Math.floor(Math.random() * transactionTypes.length)];
    const status = Math.random() > 0.2 ? "Confirmed" : "Pending";
    const date = new Date(
      2021,
      Math.floor(Math.random() * 12),
      Math.floor(Math.random() * 28) + 1,
    );
    const dateStr = date.toISOString().split("T")[0];
    orCounter++;
    paymentLogs.push({
      orNumber: "OR-" + String(orCounter).padStart(6, "0"),
      studentId: student.id,
      studentName: student.name,
      amount: amount,
      method: method,
      type: type,
      status: status,
      date: dateStr,
      reconciled: Math.random() > 0.15,
      semester: semesters[Math.floor(Math.random() * semesters.length)],
    });
  }
});

const billingAccounts = [];
students.forEach((student) => {
  const totalDue = Math.round((40000 + Math.random() * 60000) / 100) * 100;
  const totalPaid = Math.round((Math.random() * totalDue) / 100) * 100;
  const balance = totalDue - totalPaid;
  const plan =
    installmentPlans[Math.floor(Math.random() * installmentPlans.length)];
  const scholarship =
    scholarshipSources[Math.floor(Math.random() * scholarshipSources.length)];
  const daysOverdue = balance > 0 ? Math.floor(Math.random() * 90) : 0;
  const isOverdue = balance > 0 && daysOverdue > 0;

  billingAccounts.push({
    studentId: student.id,
    studentName: student.name,
    program: student.program,
    totalDue: totalDue,
    totalPaid: totalPaid,
    balance: balance,
    paymentPlan: plan,
    scholarship: scholarship,
    isOverdue: isOverdue,
    daysOverdue: daysOverdue,
    semester: semesters[Math.floor(Math.random() * semesters.length)],
    lastPaymentDate:
      paymentLogs
        .filter((p) => p.studentId === student.id)
        .sort((a, b) => new Date(b.date) - new Date(a.date))[0]?.date || null,
  });
});

export const payments = paymentLogs;
export const billingAccountsData = billingAccounts;

export function getPaymentsByStudent(studentId) {
  return paymentLogs.filter((p) => p.studentId === studentId);
}

export function getArrearAccounts() {
  return billingAccounts
    .filter((b) => b.isOverdue)
    .sort((a, b) => b.daysOverdue - a.daysOverdue);
}

export function getTotalOutstanding() {
  return billingAccounts.reduce((sum, b) => sum + b.balance, 0);
}

export function getAccountsWithArrears() {
  return billingAccounts.filter((b) => b.isOverdue).length;
}

export function getTotalPaidThisTerm() {
  const currentSem = semesters[semesters.length - 1];
  return paymentLogs
    .filter((p) => p.semester === currentSem && p.status === "Confirmed")
    .reduce((sum, p) => sum + p.amount, 0);
}

export function getCollectionEfficiency() {
  const totalDue = billingAccounts.reduce((sum, b) => sum + b.totalDue, 0);
  const totalPaid = billingAccounts.reduce((sum, b) => sum + b.totalPaid, 0);
  return totalDue > 0 ? ((totalPaid / totalDue) * 100).toFixed(1) : 0;
}

// ===== 15. REGISTRAR DATA =====

// Transcript of Records (TOR) requests
const transcriptRequests = [];
const requestStatuses = [
  "Pending",
  "Processing",
  "Ready for Pickup",
  "Released",
  "Cancelled",
];
const purposeOptions = [
  "Employment",
  "Graduate School",
  "Scholarship",
  "Transfer",
  "Professional License",
  "Personal",
];

students.forEach((student) => {
  const numRequests = 1 + Math.floor(Math.random() * 3);
  for (let i = 0; i < numRequests; i++) {
    const status =
      requestStatuses[Math.floor(Math.random() * requestStatuses.length)];
    const copies = 1 + Math.floor(Math.random() * 4);
    const purpose =
      purposeOptions[Math.floor(Math.random() * purposeOptions.length)];
    const date = new Date(
      2021,
      Math.floor(Math.random() * 12),
      Math.floor(Math.random() * 28) + 1,
    );
    const dateStr = date.toISOString().split("T")[0];
    transcriptRequests.push({
      id: "TR-" + String(transcriptRequests.length + 1).padStart(6, "0"),
      studentId: student.id,
      studentName: student.name,
      program: student.program,
      copies: copies,
      purpose: purpose,
      status: status,
      requestDate: dateStr,
      releaseDate: status === "Released" ? dateStr : null,
      notes: "",
    });
  }
});

// Certificate Requests
const certificateRequests = [];
const certTypes = [
  "Good Moral",
  "Enrollment",
  "Graduation",
  "Transfer",
  "Honors",
];
students.forEach((student) => {
  const numCerts = 1 + Math.floor(Math.random() * 2);
  for (let i = 0; i < numCerts; i++) {
    const type = certTypes[Math.floor(Math.random() * certTypes.length)];
    const status =
      requestStatuses[Math.floor(Math.random() * requestStatuses.length)];
    const date = new Date(
      2021,
      Math.floor(Math.random() * 12),
      Math.floor(Math.random() * 28) + 1,
    );
    const dateStr = date.toISOString().split("T")[0];
    certificateRequests.push({
      id: "CR-" + String(certificateRequests.length + 1).padStart(6, "0"),
      studentId: student.id,
      studentName: student.name,
      certificateType: type,
      status: status,
      requestDate: dateStr,
      releaseDate: status === "Released" ? dateStr : null,
    });
  }
});

// Student IDs
const studentIDs = [];
students.forEach((student) => {
  const issued = new Date(
    2021,
    Math.floor(Math.random() * 12),
    Math.floor(Math.random() * 28) + 1,
  );
  const issuedStr = issued.toISOString().split("T")[0];
  const expiry = new Date(issued);
  expiry.setFullYear(expiry.getFullYear() + 1);
  const expiryStr = expiry.toISOString().split("T")[0];
  const status = Math.random() > 0.2 ? "Active" : "Expired";
  studentIDs.push({
    id: "ID-" + String(studentIDs.length + 1).padStart(6, "0"),
    studentId: student.id,
    studentName: student.name,
    issuedDate: issuedStr,
    expiryDate: expiryStr,
    status: status,
    notes: "",
  });
});

// Authentications
const authentications = [];
const authTypes = [
  "Notarized",
  "CHED Authenticated",
  "DFA Red Ribbon",
  "School Seal",
];
students.forEach((student) => {
  const numAuth = Math.random() > 0.7 ? 1 : 0;
  for (let i = 0; i < numAuth; i++) {
    const type = authTypes[Math.floor(Math.random() * authTypes.length)];
    const status =
      requestStatuses[Math.floor(Math.random() * requestStatuses.length)];
    const date = new Date(
      2021,
      Math.floor(Math.random() * 12),
      Math.floor(Math.random() * 28) + 1,
    );
    const dateStr = date.toISOString().split("T")[0];
    authentications.push({
      id: "AU-" + String(authentications.length + 1).padStart(6, "0"),
      studentId: student.id,
      studentName: student.name,
      documentType: type,
      status: status,
      requestDate: dateStr,
      completionDate: status === "Released" ? dateStr : null,
    });
  }
});

export const registrar = {
  transcriptRequests,
  certificateRequests,
  studentIDs,
  authentications,
};

export function getTranscriptRequests(studentId) {
  return transcriptRequests.filter((r) => r.studentId === studentId);
}

export function getCertificateRequests(studentId) {
  return certificateRequests.filter((r) => r.studentId === studentId);
}

export function getStudentID(studentId) {
  return studentIDs.find((id) => id.studentId === studentId);
}

// ===== Helper Functions =====
export function getStudentById(id) {
  return students.find((s) => s.id === id);
}

export function getStudentByName(name) {
  return students.find((s) => s.name === name);
}

export function getGradesByStudent(studentId) {
  return grades.filter((g) => g.studentId === studentId);
}

export function getEnrolmentsByStudent(studentId) {
  return enrolments.filter((e) => e.studentId === studentId);
}

export function getEvaluationsByStudent(studentId) {
  return evaluations.filter((e) => e.studentId === studentId);
}

export function getClearanceByStudent(studentId) {
  return clearances.filter((c) => c.studentId === studentId);
}

export function getBillingByStudent(studentId) {
  return billings.filter((b) => b.studentId === studentId);
}

export function getAuditLogsByStudent(studentId) {
  return auditLogs.filter((a) => a.studentId === studentId);
}

export function getGraduationEligibilityByStudent(studentId) {
  return graduationEligibility.find((g) => g.studentId === studentId);
}

export function getEligibleStudents() {
  return graduationEligibility.filter((g) => g.eligible === true);
}

export function getIneligibleStudents() {
  return graduationEligibility.filter((g) => g.eligible === false);
}

export function getSubjectByCode(code) {
  return subjects.find((s) => s.code === code);
}

// ===== 16. POSTGRAD APPLICANTS (for Admissions page) =====
export const postgradApplicants = [];
const pgFirstNames = [
    'Elena', 'Marcus', 'Sarah', 'David', 'Maria', 'Jose', 'Teresa', 'Ramon',
    'Isabella', 'Lucas', 'Mia', 'Ethan', 'Ava', 'Noah', 'Charlotte', 'Oliver',
    'Amelia', 'Henry', 'Sophia', 'Alexander'
];
const pgLastNames = [
    'Rostova', 'Thorne', 'Jenkins', 'Chen', 'Santos', 'Protasio', 'Magbanua', 'Magsaysay',
    'Wright', 'Scott', 'Torres', 'Nguyen', 'Hill', 'Flores', 'Green', 'Adams',
    'Nelson', 'Baker', 'Hall', 'Rivera'
];
const pgPrograms = ['Juris Doctor', 'MS Accountancy'];
const pgEligibilities = [
    'LAE 94%', 'CPA Top 10', 'Bar Eligible', 'CPA Passer', 'LAE 89%',
    'Bar Passer', 'Standard Grad', 'CPA Certified', 'LAE 96%', 'Top 5'
];
const pgStatuses = ['Screening', 'Interview', 'Official'];
const bachelors = [
    'BS Legal Management (Ateneo)',
    'BS Civil Engineering (UP)',
    'AB Political Science (UST)',
    'BS Accountancy (DLSU)',
    'BS Economics (UPSE)',
    'AB Philosophy (Ateneo)',
    'BS Management (ADMU)',
    'BS Accountancy (UST)'
];

for (let i = 0; i < 20; i++) {
    const firstName = pgFirstNames[i % pgFirstNames.length];
    const lastName = pgLastNames[i % pgLastNames.length];
    const program = pgPrograms[i % pgPrograms.length];
    const elig = pgEligibilities[i % pgEligibilities.length];
    const status = pgStatuses[i % pgStatuses.length];
    const rating = (4.0 + Math.random() * 1.0).toFixed(2);
    postgradApplicants.push({
        id: `PG-${String(i + 1).padStart(4, '0')}`,
        name: `${firstName} ${lastName}`,
        program: program,
        bachelorOrigin: bachelors[i % bachelors.length],
        eligibility: elig,
        rating: parseFloat(rating),
        status: status,
        reviewNote: `Reviewing ${program} application – ${elig}.`
    });
}

// Colleges
export const colleges = [
    { id: 1, name: 'College of Law', dean: 'Dr. Alan Santos', code: 'LAW', programs: 5, status: 'Active' },
    { id: 2, name: 'College of Business & Accountancy', dean: 'Dr. Maria Cruz', code: 'CBA', programs: 12, status: 'Active' },
    { id: 3, name: 'College of Agriculture', dean: 'Dr. Ramon Reyes', code: 'AGR', programs: 8, status: 'Active' },
    { id: 4, name: 'College of Engineering', dean: 'Dr. Liza Tan', code: 'ENG', programs: 6, status: 'Active' },
    { id: 5, name: 'College of Science', dean: 'Dr. Paul Gomez', code: 'SCI', programs: 7, status: 'Active' },
    { id: 6, name: 'College of Education', dean: 'Dr. Sofia Garcia', code: 'EDU', programs: 4, status: 'Active' }
];

export let nextCollegeId = 7;

export function getColleges() {
    return colleges;
}

export function getCollegeById(id) {
    return colleges.find(c => c.id === id);
}

export function addCollege(college) {
    college.id = nextCollegeId++;
    colleges.push(college);
    return college;
}

export function updateCollege(id, updatedData) {
    const index = colleges.findIndex(c => c.id === id);
    if (index !== -1) {
        colleges[index] = { ...colleges[index], ...updatedData };
        return colleges[index];
    }
    return null;
}

export function deleteCollege(id) {
    const index = colleges.findIndex(c => c.id === id);
    if (index !== -1) {
        colleges.splice(index, 1);
        return true;
    }
    return false;
}

/// ============================================================
//  18. ACADEMIC DEPARTMENTS DATA (for Academic Structure)
// ============================================================
export const academicDepartments = [
    { id: 1, name: 'Department of Accountancy', college: 'CBA', chair: 'Dr. Maria Santos', code: 'ACCT', faculty: 14, status: 'Active' },
    { id: 2, name: 'Department of Business Administration', college: 'CBA', chair: 'Dr. Jose Rizal', code: 'BUS', faculty: 12, status: 'Active' },
    { id: 3, name: 'Department of Economics', college: 'CBA', chair: 'Dr. Aurora Quezon', code: 'ECON', faculty: 8, status: 'Active' },
    { id: 4, name: 'Department of Law', college: 'Law', chair: 'Dr. Alan Santos', code: 'LAW', faculty: 18, status: 'Active' },
    { id: 5, name: 'Department of Legal Studies', college: 'Law', chair: 'Dr. Clara Dela Cruz', code: 'LEG', faculty: 10, status: 'Active' },
    { id: 6, name: 'Department of Agriculture', college: 'AGR', chair: 'Dr. Ramon Reyes', code: 'AGRI', faculty: 16, status: 'Active' },
    { id: 7, name: 'Department of Animal Science', college: 'AGR', chair: 'Dr. Liza Tan', code: 'ANSC', faculty: 8, status: 'Active' },
    { id: 8, name: 'Department of Engineering', college: 'ENG', chair: 'Dr. Gregorio Santiago', code: 'ENG', faculty: 14, status: 'Active' },
    { id: 9, name: 'Department of Computer Science', college: 'ENG', chair: 'Dr. Mayumi Tanaka', code: 'CS', faculty: 10, status: 'Active' },
    { id: 10, name: 'Department of Physics', college: 'SCI', chair: 'Dr. Juan Luna', code: 'PHY', faculty: 7, status: 'Active' },
    { id: 11, name: 'Department of Chemistry', college: 'SCI', chair: 'Dr. Fe Garcia', code: 'CHEM', faculty: 6, status: 'Active' },
    { id: 12, name: 'Department of Mathematics', college: 'SCI', chair: 'Dr. Jose Protasio', code: 'MATH', faculty: 8, status: 'Active' },
    { id: 13, name: 'Department of Education', college: 'EDU', chair: 'Dr. Sofia Garcia', code: 'EDU', faculty: 9, status: 'Active' },
    { id: 14, name: 'Department of Special Education', college: 'EDU', chair: 'Dr. Aurora Dizon', code: 'SPED', faculty: 6, status: 'Active' },
    { id: 15, name: 'Department of Marketing', college: 'CBA', chair: 'Dr. Miguel Lopez', code: 'MKT', faculty: 10, status: 'Active' },
    { id: 16, name: 'Department of Finance', college: 'CBA', chair: 'Dr. Teresa Magbanua', code: 'FIN', faculty: 9, status: 'Active' },
    { id: 17, name: 'Department of Human Resources', college: 'CBA', chair: 'Dr. Andres Bonifacio', code: 'HR', faculty: 7, status: 'Active' },
    { id: 18, name: 'Department of Political Science', college: 'Law', chair: 'Dr. Emilio Aguinaldo', code: 'POL', faculty: 8, status: 'Active' },
    { id: 19, name: 'Department of International Relations', college: 'Law', chair: 'Dr. Apolinario Mabini', code: 'IR', faculty: 6, status: 'Active' },
    { id: 20, name: 'Department of Crop Science', college: 'AGR', chair: 'Dr. Gregorio del Pilar', code: 'CROP', faculty: 7, status: 'Active' },
    { id: 21, name: 'Department of Soil Science', college: 'AGR', chair: 'Dr. Marcelo del Pilar', code: 'SOIL', faculty: 5, status: 'Active' },
    { id: 22, name: 'Department of Electrical Engineering', college: 'ENG', chair: 'Dr. Manuel Quezon', code: 'EE', faculty: 12, status: 'Active' },
    { id: 23, name: 'Department of Mechanical Engineering', college: 'ENG', chair: 'Dr. Sergio Osmeña', code: 'ME', faculty: 10, status: 'Active' },
    { id: 24, name: 'Department of Biology', college: 'SCI', chair: 'Dr. Jose Rizal', code: 'BIO', faculty: 8, status: 'Active' },
    { id: 25, name: 'Department of Environmental Science', college: 'SCI', chair: 'Dr. Leonor Rivera', code: 'ENV', faculty: 5, status: 'Active' },
    { id: 26, name: 'Department of Secondary Education', college: 'EDU', chair: 'Dr. Maria Clara', code: 'SEC', faculty: 8, status: 'Active' },
    { id: 27, name: 'Department of Early Childhood Education', college: 'EDU', chair: 'Dr. Gabriela Silang', code: 'ECE', faculty: 6, status: 'Active' },
    { id: 28, name: 'Department of Physical Education', college: 'EDU', chair: 'Dr. Lapu-Lapu', code: 'PE', faculty: 5, status: 'Active' }
];

let nextDepartmentId = 29;

export function getAcademicDepartments() {
    return academicDepartments;
}

export function getDepartmentById(id) {
    return academicDepartments.find(d => d.id === id);
}

export function addDepartment(dept) {
    const newDept = { ...dept, id: nextDepartmentId++ };
    academicDepartments.push(newDept);
    return newDept;
}

export function updateDepartment(id, updatedData) {
    const index = academicDepartments.findIndex(d => d.id === id);
    if (index !== -1) {
        academicDepartments[index] = { ...academicDepartments[index], ...updatedData };
        return academicDepartments[index];
    }
    return null;
}

export function deleteDepartment(id) {
    const index = academicDepartments.findIndex(d => d.id === id);
    if (index !== -1) {
        academicDepartments.splice(index, 1);
        return true;
    }
    return false;
}

// ============================================================
//  19. ACADEMIC COURSES DATA (Degree Programs)
// ============================================================
export const academicCourses = [
    // College of Law
    { id: 1, name: 'Juris Doctor', college: 'Law', level: 'JD', duration: 4, units: 140, status: 'Accredited' },
    { id: 2, name: 'Bachelor of Laws (LLB)', college: 'Law', level: 'BA', duration: 4, units: 120, status: 'Active' },
    // College of Business & Accountancy
    { id: 3, name: 'BS Accountancy', college: 'CBA', level: 'BS', duration: 4, units: 150, status: 'Accredited' },
    { id: 4, name: 'BS Accounting Technology', college: 'CBA', level: 'BS', duration: 4, units: 130, status: 'Accredited' },
    { id: 5, name: 'BS Business Administration', college: 'CBA', level: 'BS', duration: 4, units: 140, status: 'Accredited' },
    { id: 6, name: 'BS Entrepreneurship', college: 'CBA', level: 'BS', duration: 4, units: 135, status: 'Active' },
    { id: 7, name: 'BS Marketing Management', college: 'CBA', level: 'BS', duration: 4, units: 130, status: 'Active' },
    { id: 8, name: 'BS Finance', college: 'CBA', level: 'BS', duration: 4, units: 130, status: 'Active' },
    { id: 9, name: 'BS Human Resource Management', college: 'CBA', level: 'BS', duration: 4, units: 125, status: 'Active' },
    { id: 10, name: 'MS Accountancy', college: 'CBA', level: 'MS', duration: 2, units: 60, status: 'Accredited' },
    { id: 11, name: 'MBA (Master in Business Admin)', college: 'CBA', level: 'MA', duration: 2, units: 60, status: 'Active' },
    { id: 12, name: 'PhD in Accountancy', college: 'CBA', level: 'PhD', duration: 3, units: 72, status: 'Pending Review' },
    // College of Agriculture
    { id: 13, name: 'Diploma in Agricultural Technology', college: 'AGR', level: 'Diploma', duration: 2, units: 70, status: 'Accredited' },
    { id: 14, name: 'BS Agriculture', college: 'AGR', level: 'BS', duration: 4, units: 145, status: 'Accredited' },
    { id: 15, name: 'BS Agricultural Engineering', college: 'AGR', level: 'BS', duration: 5, units: 160, status: 'Active' },
    { id: 16, name: 'BS Animal Science', college: 'AGR', level: 'BS', duration: 4, units: 140, status: 'Active' },
    { id: 17, name: 'BS Crop Science', college: 'AGR', level: 'BS', duration: 4, units: 135, status: 'Active' },
    { id: 18, name: 'MS Agriculture', college: 'AGR', level: 'MS', duration: 2, units: 55, status: 'Active' },
    // College of Engineering
    { id: 19, name: 'BS Civil Engineering', college: 'ENG', level: 'BS', duration: 5, units: 170, status: 'Accredited' },
    { id: 20, name: 'BS Mechanical Engineering', college: 'ENG', level: 'BS', duration: 5, units: 165, status: 'Accredited' },
    { id: 21, name: 'BS Electrical Engineering', college: 'ENG', level: 'BS', duration: 5, units: 160, status: 'Accredited' },
    { id: 22, name: 'BS Computer Engineering', college: 'ENG', level: 'BS', duration: 5, units: 160, status: 'Active' },
    { id: 23, name: 'BS Electronics Engineering', college: 'ENG', level: 'BS', duration: 5, units: 155, status: 'Active' },
    { id: 24, name: 'BS Industrial Engineering', college: 'ENG', level: 'BS', duration: 5, units: 150, status: 'Active' },
    { id: 25, name: 'MS Civil Engineering', college: 'ENG', level: 'MS', duration: 2, units: 55, status: 'Active' },
    // College of Science
    { id: 26, name: 'BS Computer Science', college: 'SCI', level: 'BS', duration: 4, units: 140, status: 'Accredited' },
    { id: 27, name: 'BS Biology', college: 'SCI', level: 'BS', duration: 4, units: 145, status: 'Accredited' },
    { id: 28, name: 'BS Chemistry', college: 'SCI', level: 'BS', duration: 4, units: 140, status: 'Active' },
    { id: 29, name: 'BS Physics', college: 'SCI', level: 'BS', duration: 4, units: 135, status: 'Active' },
    { id: 30, name: 'BS Mathematics', college: 'SCI', level: 'BS', duration: 4, units: 130, status: 'Active' },
    { id: 31, name: 'BS Environmental Science', college: 'SCI', level: 'BS', duration: 4, units: 135, status: 'Active' },
    { id: 32, name: 'MS Biology', college: 'SCI', level: 'MS', duration: 2, units: 55, status: 'Active' },
    { id: 33, name: 'MS Computer Science', college: 'SCI', level: 'MS', duration: 2, units: 55, status: 'Pending Review' },
    // College of Education
    { id: 34, name: 'BEED (Bachelor of Elementary Education)', college: 'EDU', level: 'BS', duration: 4, units: 135, status: 'Accredited' },
    { id: 35, name: 'BSED (Bachelor of Secondary Education)', college: 'EDU', level: 'BS', duration: 4, units: 135, status: 'Accredited' },
    { id: 36, name: 'BS Special Education', college: 'EDU', level: 'BS', duration: 4, units: 130, status: 'Active' },
    { id: 37, name: 'BS Physical Education', college: 'EDU', level: 'BS', duration: 4, units: 125, status: 'Active' },
    { id: 38, name: 'MA in Education', college: 'EDU', level: 'MA', duration: 2, units: 55, status: 'Active' },
    { id: 39, name: 'MS in Special Education', college: 'EDU', level: 'MS', duration: 2, units: 55, status: 'Pending Review' },
    { id: 40, name: 'PhD in Education', college: 'EDU', level: 'PhD', duration: 3, units: 72, status: 'Pending Review' },
    { id: 41, name: 'PhD in Business Administration', college: 'CBA', level: 'PhD', duration: 3, units: 72, status: 'Active' },
    { id: 42, name: 'PhD in Agriculture', college: 'AGR', level: 'PhD', duration: 3, units: 72, status: 'Active' }
];

let nextCourseId = 43;

export function getAcademicCourses() {
    return academicCourses;
}

export function getCourseById(id) {
    return academicCourses.find(c => c.id === id);
}

export function addCourse(course) {
    const newCourse = { ...course, id: nextCourseId++ };
    academicCourses.push(newCourse);
    return newCourse;
}

export function updateCourse(id, updatedData) {
    const index = academicCourses.findIndex(c => c.id === id);
    if (index !== -1) {
        academicCourses[index] = { ...academicCourses[index], ...updatedData };
        return academicCourses[index];
    }
    return null;
}

export function deleteCourse(id) {
    const index = academicCourses.findIndex(c => c.id === id);
    if (index !== -1) {
        academicCourses.splice(index, 1);
        return true;
    }
    return false;
}

// ============================================================
//  20. ACADEMIC SUBJECTS DATA (Subject Catalog)
// ============================================================
export const academicSubjects = [
    // Accountancy
    { id: 1, code: 'ACCT 101', name: 'Fundamentals of Accounting', department: 'Accountancy', type: 'Core', units: 3, status: 'Active' },
    { id: 2, code: 'ACCT 102', name: 'Intermediate Accounting I', department: 'Accountancy', type: 'Core', units: 3, status: 'Active' },
    { id: 3, code: 'ACCT 201', name: 'Cost Accounting', department: 'Accountancy', type: 'Core', units: 3, status: 'Active' },
    { id: 4, code: 'ACCT 202', name: 'Auditing Theory', department: 'Accountancy', type: 'Core', units: 3, status: 'Active' },
    { id: 5, code: 'ACCT 301', name: 'Advanced Accounting', department: 'Accountancy', type: 'Core', units: 3, status: 'Active' },
    { id: 6, code: 'ACCT 401', name: 'Accounting Research', department: 'Accountancy', type: 'Research', units: 3, status: 'Active' },
    // Business Admin
    { id: 7, code: 'BUS 101', name: 'Introduction to Business', department: 'Business Admin', type: 'Core', units: 3, status: 'Active' },
    { id: 8, code: 'BUS 201', name: 'Business Ethics', department: 'Business Admin', type: 'Core', units: 3, status: 'Active' },
    { id: 9, code: 'BUS 301', name: 'Strategic Management', department: 'Business Admin', type: 'Core', units: 3, status: 'Active' },
    { id: 10, code: 'BUS 401', name: 'Business Research', department: 'Business Admin', type: 'Research', units: 3, status: 'Active' },
    // Economics
    { id: 11, code: 'ECON 101', name: 'Microeconomics', department: 'Economics', type: 'Core', units: 3, status: 'Active' },
    { id: 12, code: 'ECON 102', name: 'Macroeconomics', department: 'Economics', type: 'Core', units: 3, status: 'Active' },
    { id: 13, code: 'ECON 201', name: 'Managerial Economics', department: 'Economics', type: 'Core', units: 3, status: 'Active' },
    // Law
    { id: 14, code: 'LAW 101', name: 'Obligations and Contracts', department: 'Law', type: 'Core', units: 3, status: 'Active' },
    { id: 15, code: 'LAW 201', name: 'Criminal Law', department: 'Law', type: 'Core', units: 3, status: 'Active' },
    { id: 16, code: 'LAW 301', name: 'Civil Procedure', department: 'Law', type: 'Core', units: 3, status: 'Active' },
    { id: 17, code: 'LAW 401', name: 'Legal Ethics', department: 'Law', type: 'Core', units: 3, status: 'Active' },
    { id: 18, code: 'LAW 501', name: 'Legal Research', department: 'Law', type: 'Research', units: 3, status: 'Active' },
    // Legal Studies
    { id: 19, code: 'LEG 101', name: 'Introduction to Law', department: 'Legal Studies', type: 'Core', units: 3, status: 'Active' },
    { id: 20, code: 'LEG 201', name: 'Legal Writing', department: 'Legal Studies', type: 'Core', units: 3, status: 'Active' },
    // Agriculture
    { id: 21, code: 'AGRI 101', name: 'Principles of Agriculture', department: 'Agriculture', type: 'Core', units: 3, status: 'Active' },
    { id: 22, code: 'AGRI 201', name: 'Crop Production', department: 'Agriculture', type: 'Core', units: 3, status: 'Active' },
    { id: 23, code: 'AGRI 301', name: 'Soil Science', department: 'Agriculture', type: 'Core', units: 3, status: 'Active' },
    { id: 24, code: 'AGRI 401', name: 'Agricultural Economics', department: 'Agriculture', type: 'Core', units: 3, status: 'Active' },
    // Animal Science
    { id: 25, code: 'ANSC 101', name: 'Animal Science', department: 'Animal Science', type: 'Core', units: 3, status: 'Active' },
    { id: 26, code: 'ANSC 201', name: 'Animal Nutrition', department: 'Animal Science', type: 'Core', units: 3, status: 'Active' },
    // Engineering
    { id: 27, code: 'ENG 101', name: 'Engineering Mathematics', department: 'Engineering', type: 'Core', units: 3, status: 'Active' },
    { id: 28, code: 'ENG 201', name: 'Fluid Mechanics', department: 'Engineering', type: 'Core', units: 3, status: 'Active' },
    { id: 29, code: 'ENG 301', name: 'Structural Analysis', department: 'Engineering', type: 'Core', units: 3, status: 'Active' },
    { id: 30, code: 'ENG 401', name: 'Engineering Research', department: 'Engineering', type: 'Research', units: 3, status: 'Active' },
    // Computer Science
    { id: 31, code: 'CS 101', name: 'Introduction to Computing', department: 'Computer Science', type: 'Core', units: 3, status: 'Active' },
    { id: 32, code: 'CS 201', name: 'Data Structures', department: 'Computer Science', type: 'Core', units: 3, status: 'Active' },
    { id: 33, code: 'CS 301', name: 'Algorithms', department: 'Computer Science', type: 'Core', units: 3, status: 'Active' },
    { id: 34, code: 'CS 401', name: 'Database Systems', department: 'Computer Science', type: 'Core', units: 3, status: 'Active' },
    { id: 35, code: 'CS 501', name: 'Software Engineering', department: 'Computer Science', type: 'Core', units: 3, status: 'Active' },
    // Physics
    { id: 36, code: 'PHY 101', name: 'General Physics I', department: 'Physics', type: 'Core', units: 3, status: 'Active' },
    { id: 37, code: 'PHY 201', name: 'General Physics II', department: 'Physics', type: 'Core', units: 3, status: 'Active' },
    // Chemistry
    { id: 38, code: 'CHEM 101', name: 'General Chemistry I', department: 'Chemistry', type: 'Core', units: 3, status: 'Active' },
    { id: 39, code: 'CHEM 201', name: 'Organic Chemistry', department: 'Chemistry', type: 'Core', units: 3, status: 'Active' },
    // Mathematics
    { id: 40, code: 'MATH 101', name: 'College Algebra', department: 'Mathematics', type: 'Core', units: 3, status: 'Active' },
    { id: 41, code: 'MATH 201', name: 'Trigonometry', department: 'Mathematics', type: 'Core', units: 3, status: 'Active' },
    { id: 42, code: 'MATH 301', name: 'Calculus I', department: 'Mathematics', type: 'Core', units: 3, status: 'Active' },
    { id: 43, code: 'MATH 401', name: 'Calculus II', department: 'Mathematics', type: 'Core', units: 3, status: 'Active' },
    // Biology
    { id: 44, code: 'BIO 101', name: 'General Biology I', department: 'Biology', type: 'Core', units: 3, status: 'Active' },
    { id: 45, code: 'BIO 201', name: 'General Biology II', department: 'Biology', type: 'Core', units: 3, status: 'Active' },
    // Education
    { id: 46, code: 'EDU 101', name: 'Foundations of Education', department: 'Education', type: 'Core', units: 3, status: 'Active' },
    { id: 47, code: 'EDU 201', name: 'Educational Psychology', department: 'Education', type: 'Core', units: 3, status: 'Active' },
    { id: 48, code: 'EDU 301', name: 'Curriculum Development', department: 'Education', type: 'Core', units: 3, status: 'Active' },
    // Special Education
    { id: 49, code: 'SPED 101', name: 'Foundations of Special Education', department: 'Special Education', type: 'Core', units: 3, status: 'Active' },
    { id: 50, code: 'SPED 201', name: 'Inclusive Education', department: 'Special Education', type: 'Core', units: 3, status: 'Active' },
    // Physical Education
    { id: 51, code: 'PE 101', name: 'Physical Fitness and Wellness', department: 'Physical Education', type: 'Core', units: 3, status: 'Active' },
    { id: 52, code: 'PE 201', name: 'Sports and Recreation', department: 'Physical Education', type: 'Elective', units: 3, status: 'Active' }
];

let nextSubjectId = 53;

export function getAcademicSubjects() {
    return academicSubjects;
}

export function getSubjectById(id) {
    return academicSubjects.find(s => s.id === id);
}

export function addSubject(subject) {
    const newSubject = { ...subject, id: nextSubjectId++ };
    academicSubjects.push(newSubject);
    return newSubject;
}

export function updateSubject(id, updatedData) {
    const index = academicSubjects.findIndex(s => s.id === id);
    if (index !== -1) {
        academicSubjects[index] = { ...academicSubjects[index], ...updatedData };
        return academicSubjects[index];
    }
    return null;
}

export function deleteSubject(id) {
    const index = academicSubjects.findIndex(s => s.id === id);
    if (index !== -1) {
        academicSubjects.splice(index, 1);
        return true;
    }
    return false;
}

// ============================================================
//  21. CURRICULUM DATA (Subject Sequences & Prerequisites)
// ============================================================
export const academicCurriculum = [
    // BS Accountancy
    { id: 1, program: 'BS Accountancy', year: 1, semester: '1st', subject: 'ACCT 101', prerequisite: '', units: 3, status: 'Active' },
    { id: 2, program: 'BS Accountancy', year: 1, semester: '1st', subject: 'BUS 101', prerequisite: '', units: 3, status: 'Active' },
    { id: 3, program: 'BS Accountancy', year: 1, semester: '1st', subject: 'MATH 101', prerequisite: '', units: 3, status: 'Active' },
    { id: 4, program: 'BS Accountancy', year: 1, semester: '2nd', subject: 'ACCT 102', prerequisite: 'ACCT 101', units: 3, status: 'Active' },
    { id: 5, program: 'BS Accountancy', year: 2, semester: '1st', subject: 'ACCT 201', prerequisite: 'ACCT 102', units: 3, status: 'Active' },
    { id: 6, program: 'BS Accountancy', year: 2, semester: '2nd', subject: 'ACCT 202', prerequisite: 'ACCT 201', units: 3, status: 'Active' },
    { id: 7, program: 'BS Accountancy', year: 3, semester: '1st', subject: 'ACCT 301', prerequisite: 'ACCT 202', units: 3, status: 'Active' },
    { id: 8, program: 'BS Accountancy', year: 4, semester: '1st', subject: 'ACCT 401', prerequisite: 'ACCT 301', units: 3, status: 'Active' },
    { id: 9, program: 'BS Accountancy', year: 2, semester: '2nd', subject: 'ACCT 203', prerequisite: 'ACCT 201', units: 3, status: 'Active' },
    { id: 10, program: 'BS Accountancy', year: 3, semester: '2nd', subject: 'ACCT 302', prerequisite: 'ACCT 301', units: 3, status: 'Active' },
    { id: 11, program: 'BS Accountancy', year: 4, semester: '2nd', subject: 'ACCT 402', prerequisite: 'ACCT 401', units: 3, status: 'Active' },
    // BS Business Admin
    { id: 12, program: 'BS Business Admin', year: 1, semester: '1st', subject: 'BUS 101', prerequisite: '', units: 3, status: 'Active' },
    { id: 13, program: 'BS Business Admin', year: 1, semester: '1st', subject: 'ECON 101', prerequisite: '', units: 3, status: 'Active' },
    { id: 14, program: 'BS Business Admin', year: 2, semester: '1st', subject: 'BUS 201', prerequisite: 'BUS 101', units: 3, status: 'Active' },
    { id: 15, program: 'BS Business Admin', year: 3, semester: '1st', subject: 'BUS 301', prerequisite: 'BUS 201', units: 3, status: 'Active' },
    { id: 16, program: 'BS Business Admin', year: 1, semester: '2nd', subject: 'BUS 102', prerequisite: 'BUS 101', units: 3, status: 'Active' },
    { id: 17, program: 'BS Business Admin', year: 2, semester: '2nd', subject: 'BUS 202', prerequisite: 'BUS 201', units: 3, status: 'Active' },
    { id: 18, program: 'BS Business Admin', year: 3, semester: '2nd', subject: 'BUS 302', prerequisite: 'BUS 301', units: 3, status: 'Active' },
    // Juris Doctor
    { id: 19, program: 'Juris Doctor', year: 1, semester: '1st', subject: 'LAW 101', prerequisite: '', units: 3, status: 'Active' },
    { id: 20, program: 'Juris Doctor', year: 1, semester: '2nd', subject: 'LAW 201', prerequisite: 'LAW 101', units: 3, status: 'Active' },
    { id: 21, program: 'Juris Doctor', year: 2, semester: '1st', subject: 'LAW 301', prerequisite: 'LAW 201', units: 3, status: 'Active' },
    { id: 22, program: 'Juris Doctor', year: 2, semester: '2nd', subject: 'LAW 302', prerequisite: 'LAW 301', units: 3, status: 'Active' },
    { id: 23, program: 'Juris Doctor', year: 3, semester: '1st', subject: 'LAW 401', prerequisite: 'LAW 302', units: 3, status: 'Active' },
    // BS Computer Science
    { id: 24, program: 'BS Computer Science', year: 1, semester: '1st', subject: 'CS 101', prerequisite: '', units: 3, status: 'Active' },
    { id: 25, program: 'BS Computer Science', year: 1, semester: '2nd', subject: 'CS 201', prerequisite: 'CS 101', units: 3, status: 'Active' },
    { id: 26, program: 'BS Computer Science', year: 2, semester: '1st', subject: 'CS 301', prerequisite: 'CS 201', units: 3, status: 'Active' },
    { id: 27, program: 'BS Computer Science', year: 3, semester: '1st', subject: 'CS 401', prerequisite: 'CS 301', units: 3, status: 'Active' },
    { id: 28, program: 'BS Computer Science', year: 4, semester: '1st', subject: 'CS 501', prerequisite: 'CS 401', units: 3, status: 'Active' },
    { id: 29, program: 'BS Computer Science', year: 2, semester: '2nd', subject: 'CS 302', prerequisite: 'CS 301', units: 3, status: 'Active' },
    { id: 30, program: 'BS Computer Science', year: 3, semester: '2nd', subject: 'CS 402', prerequisite: 'CS 401', units: 3, status: 'Active' },
    // BS Agriculture
    { id: 31, program: 'BS Agriculture', year: 1, semester: '1st', subject: 'AGRI 101', prerequisite: '', units: 3, status: 'Active' },
    { id: 32, program: 'BS Agriculture', year: 2, semester: '1st', subject: 'AGRI 201', prerequisite: 'AGRI 101', units: 3, status: 'Active' },
    // BS Education
    { id: 33, program: 'BS Education', year: 1, semester: '1st', subject: 'EDU 101', prerequisite: '', units: 3, status: 'Active' },
    { id: 34, program: 'BS Education', year: 2, semester: '1st', subject: 'EDU 201', prerequisite: 'EDU 101', units: 3, status: 'Active' },
    // Diploma in Ag Tech
    { id: 35, program: 'Diploma in Ag Tech', year: 1, semester: '1st', subject: 'AGRI 101', prerequisite: '', units: 3, status: 'Active' },
    { id: 36, program: 'Diploma in Ag Tech', year: 1, semester: '2nd', subject: 'AGRI 201', prerequisite: 'AGRI 101', units: 3, status: 'Active' },
    // MS Accountancy
    { id: 37, program: 'MS Accountancy', year: 1, semester: '1st', subject: 'ACCT 501', prerequisite: 'ACCT 301', units: 3, status: 'Active' },
    { id: 38, program: 'MS Accountancy', year: 2, semester: '1st', subject: 'ACCT 601', prerequisite: 'ACCT 501', units: 3, status: 'Active' },
    // BS Biology
    { id: 39, program: 'BS Biology', year: 1, semester: '1st', subject: 'BIO 101', prerequisite: '', units: 3, status: 'Active' },
    { id: 40, program: 'BS Biology', year: 2, semester: '1st', subject: 'BIO 201', prerequisite: 'BIO 101', units: 3, status: 'Active' },
    // BS Physics
    { id: 41, program: 'BS Physics', year: 1, semester: '1st', subject: 'PHY 101', prerequisite: '', units: 3, status: 'Active' },
    { id: 42, program: 'BS Physics', year: 2, semester: '1st', subject: 'PHY 201', prerequisite: 'PHY 101', units: 3, status: 'Active' }
];

let nextCurriculumId = 43;

export function getAcademicCurriculum() {
    return academicCurriculum;
}

export function getCurriculumById(id) {
    return academicCurriculum.find(c => c.id === id);
}

export function addCurriculum(entry) {
    const newEntry = { ...entry, id: nextCurriculumId++ };
    academicCurriculum.push(newEntry);
    return newEntry;
}

export function updateCurriculum(id, updatedData) {
    const index = academicCurriculum.findIndex(c => c.id === id);
    if (index !== -1) {
        academicCurriculum[index] = { ...academicCurriculum[index], ...updatedData };
        return academicCurriculum[index];
    }
    return null;
}

export function deleteCurriculum(id) {
    const index = academicCurriculum.findIndex(c => c.id === id);
    if (index !== -1) {
        academicCurriculum.splice(index, 1);
        return true;
    }
    return false;
}

// ============================================================
//  22. GRADE SYSTEM DATA
// ============================================================
export const gradeSystem = [
    { id: 1, grade: 'A', points: 4.0, description: 'Excellent', scheme: 'Academic', status: 'Active' },
    { id: 2, grade: 'B+', points: 3.5, description: 'Very Good', scheme: 'Academic', status: 'Active' },
    { id: 3, grade: 'B', points: 3.0, description: 'Good', scheme: 'Academic', status: 'Active' },
    { id: 4, grade: 'C+', points: 2.5, description: 'Satisfactory', scheme: 'Academic', status: 'Active' },
    { id: 5, grade: 'C', points: 2.0, description: 'Fair', scheme: 'Academic', status: 'Active' },
    { id: 6, grade: 'D', points: 1.0, description: 'Poor', scheme: 'Academic', status: 'Active' },
    { id: 7, grade: 'F', points: 0.0, description: 'Fail', scheme: 'Academic', status: 'Active' },
    // Law scheme
    { id: 8, grade: '1.0', points: 4.0, description: 'Excellent', scheme: 'Law', status: 'Active' },
    { id: 9, grade: '1.5', points: 3.5, description: 'Very Good', scheme: 'Law', status: 'Active' },
    { id: 10, grade: '2.0', points: 3.0, description: 'Good', scheme: 'Law', status: 'Active' },
    { id: 11, grade: '2.5', points: 2.5, description: 'Satisfactory', scheme: 'Law', status: 'Active' },
    { id: 12, grade: '3.0', points: 2.0, description: 'Fair', scheme: 'Law', status: 'Active' },
    { id: 13, grade: '4.0', points: 1.0, description: 'Poor', scheme: 'Law', status: 'Active' },
    { id: 14, grade: '5.0', points: 0.0, description: 'Fail', scheme: 'Law', status: 'Active' },
    // Grad scheme
    { id: 15, grade: 'A', points: 4.0, description: 'Outstanding', scheme: 'Grad', status: 'Active' },
    { id: 16, grade: 'B+', points: 3.5, description: 'Very Good', scheme: 'Grad', status: 'Active' },
    { id: 17, grade: 'B', points: 3.0, description: 'Good', scheme: 'Grad', status: 'Active' },
    { id: 18, grade: 'C+', points: 2.5, description: 'Satisfactory', scheme: 'Grad', status: 'Active' },
    { id: 19, grade: 'C', points: 2.0, description: 'Fair', scheme: 'Grad', status: 'Active' },
    { id: 20, grade: 'D', points: 1.0, description: 'Poor', scheme: 'Grad', status: 'Active' },
    { id: 21, grade: 'F', points: 0.0, description: 'Fail', scheme: 'Grad', status: 'Active' }
];

let nextGradeId = 22;

export function getGradeSystem() {
    return gradeSystem;
}

export function getGradeById(id) {
    return gradeSystem.find(g => g.id === id);
}

export function addGrade(grade) {
    const newGrade = { ...grade, id: nextGradeId++ };
    gradeSystem.push(newGrade);
    return newGrade;
}

export function updateGrade(id, updatedData) {
    const index = gradeSystem.findIndex(g => g.id === id);
    if (index !== -1) {
        gradeSystem[index] = { ...gradeSystem[index], ...updatedData };
        return gradeSystem[index];
    }
    return null;
}

export function deleteGrade(id) {
    const index = gradeSystem.findIndex(g => g.id === id);
    if (index !== -1) {
        gradeSystem.splice(index, 1);
        return true;
    }
    return false;
}

// ============================================================
//  23. GRADE REMARKS DATA
// ============================================================
export const gradeRemarks = [
    { id: 1, code: 'P', name: 'PASSED', description: 'Student met all course requirements', type: 'Passing', status: 'Active' },
    { id: 2, code: 'F', name: 'FAILED', description: 'Student did not meet course requirements', type: 'Failing', status: 'Active' },
    { id: 3, code: 'INC', name: 'INCOMPLETE', description: 'Student has unfinished requirements; must complete within one year', type: 'Special', status: 'Active' },
    { id: 4, code: 'W', name: 'WITHDRAWN', description: 'Student officially withdrew from the course', type: 'Special', status: 'Active' },
    { id: 5, code: 'DR', name: 'DROPPED', description: 'Student dropped the course after the deadline', type: 'Failing', status: 'Active' },
    { id: 6, code: 'C', name: 'COMPLETE', description: 'Student completed all requirements satisfactorily', type: 'Passing', status: 'Active' },
    { id: 7, code: 'IP', name: 'IN PROGRESS', description: 'Student is currently enrolled in the course', type: 'Special', status: 'Active' },
    { id: 8, code: 'AU', name: 'AUDIT', description: 'Student audited the course; no credit earned', type: 'Special', status: 'Active' }
];

let nextRemarkId = 9;

export function getGradeRemarks() {
    return gradeRemarks;
}

export function getRemarkById(id) {
    return gradeRemarks.find(r => r.id === id);
}

export function addRemark(remark) {
    const newRemark = { ...remark, id: nextRemarkId++ };
    gradeRemarks.push(newRemark);
    return newRemark;
}

export function updateRemark(id, updatedData) {
    const index = gradeRemarks.findIndex(r => r.id === id);
    if (index !== -1) {
        gradeRemarks[index] = { ...gradeRemarks[index], ...updatedData };
        return gradeRemarks[index];
    }
    return null;
}

export function deleteRemark(id) {
    const index = gradeRemarks.findIndex(r => r.id === id);
    if (index !== -1) {
        gradeRemarks.splice(index, 1);
        return true;
    }
    return false;
}

// ============================================================
//  24. SCORE SETTINGS DATA
// ============================================================
export const scoreSettings = [
    { id: 1, exam: 'Entrance Exam', section: 'Overall', maxScore: 100, passingScore: 75, weight: 100, status: 'Active' },
    { id: 2, exam: 'Entrance Exam', section: 'Mathematics', maxScore: 50, passingScore: 37.5, weight: 30, status: 'Active' },
    { id: 3, exam: 'Entrance Exam', section: 'English', maxScore: 50, passingScore: 37.5, weight: 30, status: 'Active' },
    { id: 4, exam: 'Entrance Exam', section: 'Logical Reasoning', maxScore: 40, passingScore: 30, weight: 20, status: 'Active' },
    { id: 5, exam: 'Scholarship Exam', section: 'Overall', maxScore: 100, passingScore: 90, weight: 100, status: 'Active' },
    { id: 6, exam: 'Scholarship Exam', section: 'Mathematics', maxScore: 50, passingScore: 45, weight: 35, status: 'Active' },
    { id: 7, exam: 'Scholarship Exam', section: 'English', maxScore: 50, passingScore: 45, weight: 35, status: 'Active' },
    { id: 8, exam: 'Qualifying Exam', section: 'Overall', maxScore: 100, passingScore: 80, weight: 100, status: 'Active' },
    { id: 9, exam: 'Placement Test', section: 'Overall', maxScore: 100, passingScore: 70, weight: 100, status: 'Active' }
];

let nextScoreId = 10;

export function getScoreSettings() {
    return scoreSettings;
}

export function getScoreConfigById(id) {
    return scoreSettings.find(s => s.id === id);
}

export function addScoreConfig(config) {
    const newConfig = { ...config, id: nextScoreId++ };
    scoreSettings.push(newConfig);
    return newConfig;
}

export function updateScoreConfig(id, updatedData) {
    const index = scoreSettings.findIndex(s => s.id === id);
    if (index !== -1) {
        scoreSettings[index] = { ...scoreSettings[index], ...updatedData };
        return scoreSettings[index];
    }
    return null;
}

export function deleteScoreConfig(id) {
    const index = scoreSettings.findIndex(s => s.id === id);
    if (index !== -1) {
        scoreSettings.splice(index, 1);
        return true;
    }
    return false;
}

// ============================================================
//  25. AUTOLAPSE RULES DATA
// ============================================================
export const autolapseRules = [
    { id: 1, name: 'Incomplete Grade Lapse', description: 'Lapses grades after one year of incompleteness', trigger: 'Incomplete Grade', action: 'Mark as Dropped', status: 'Active' },
    { id: 2, name: 'Inactive Enrolment Lapse', description: 'Lapses records after two years of inactivity', trigger: 'Inactive Enrolment', action: 'Archive Record', status: 'Active' },
    { id: 3, name: 'Graduation Expiry', description: 'Lapses graduation records after five years', trigger: 'Expired Graduation', action: 'Flag for Review', status: 'Active' },
    { id: 4, name: 'Manual Intervention Lapse', description: 'Manually triggered lapse for irregular cases', trigger: 'Manual Request', action: 'Remove from Active Enrolment', status: 'Active' },
    { id: 5, name: 'Incomplete Thesis Lapse', description: 'Lapses thesis credits if incomplete for two years', trigger: 'Incomplete Grade', action: 'Convert to Inactive', status: 'Active' }
];

let nextLapseId = 6;

export function getAutolapseRules() {
    return autolapseRules;
}

export function getLapseRuleById(id) {
    return autolapseRules.find(l => l.id === id);
}

export function addLapseRule(rule) {
    const newRule = { ...rule, id: nextLapseId++ };
    autolapseRules.push(newRule);
    return newRule;
}

export function updateLapseRule(id, updatedData) {
    const index = autolapseRules.findIndex(l => l.id === id);
    if (index !== -1) {
        autolapseRules[index] = { ...autolapseRules[index], ...updatedData };
        return autolapseRules[index];
    }
    return null;
}

export function deleteLapseRule(id) {
    const index = autolapseRules.findIndex(l => l.id === id);
    if (index !== -1) {
        autolapseRules.splice(index, 1);
        return true;
    }
    return false;
}

// ============================================================
//  26. SEMESTER DEFINITIONS DATA (Academic Calendar)
// ============================================================
export const semesterDefinitions = [
    { id: 1, ay: '2021-2022', semesterName: '1st', start: '2021-06-01', end: '2021-10-15', regPeriod: 45, status: 'Active' },
    { id: 2, ay: '2021-2022', semesterName: '2nd', start: '2021-11-01', end: '2022-03-15', regPeriod: 45, status: 'Active' },
    { id: 3, ay: '2021-2022', semesterName: 'Summer', start: '2022-04-01', end: '2022-05-15', regPeriod: 30, status: 'Completed' },
    { id: 4, ay: '2022-2023', semesterName: '1st', start: '2022-06-01', end: '2022-10-15', regPeriod: 45, status: 'Upcoming' },
    { id: 5, ay: '2022-2023', semesterName: '2nd', start: '2022-11-01', end: '2023-03-15', regPeriod: 45, status: 'Upcoming' },
    { id: 6, ay: '2020-2021', semesterName: '2nd', start: '2020-11-01', end: '2021-03-15', regPeriod: 45, status: 'Archived' }
];

let nextSemesterDefId = 7;

export function getSemesterDefinitions() {
    return semesterDefinitions;
}

export function getSemesterDefinitionById(id) {
    return semesterDefinitions.find(s => s.id === id);
}

export function addSemesterDefinition(semester) {
    const newSemester = { ...semester, id: nextSemesterDefId++ };
    semesterDefinitions.push(newSemester);
    return newSemester;
}

export function updateSemesterDefinition(id, updatedData) {
    const index = semesterDefinitions.findIndex(s => s.id === id);
    if (index !== -1) {
        semesterDefinitions[index] = { ...semesterDefinitions[index], ...updatedData };
        return semesterDefinitions[index];
    }
    return null;
}

export function deleteSemesterDefinition(id) {
    const index = semesterDefinitions.findIndex(s => s.id === id);
    if (index !== -1) {
        semesterDefinitions.splice(index, 1);
        return true;
    }
    return false;
}

// ============================================================
//  27. SCHEDULES DATA
// ============================================================
export const schedules = [
    { id: 1, name: 'Morning Class Schedule', semester: 'AY 2021-2022 1st', day: 'Mon', startTime: '08:00', endTime: '12:00', status: 'Active' },
    { id: 2, name: 'Morning Class Schedule', semester: 'AY 2021-2022 1st', day: 'Wed', startTime: '08:00', endTime: '12:00', status: 'Active' },
    { id: 3, name: 'Morning Class Schedule', semester: 'AY 2021-2022 1st', day: 'Fri', startTime: '08:00', endTime: '12:00', status: 'Active' },
    { id: 4, name: 'Afternoon Class Schedule', semester: 'AY 2021-2022 1st', day: 'Tue', startTime: '13:00', endTime: '17:00', status: 'Active' },
    { id: 5, name: 'Afternoon Class Schedule', semester: 'AY 2021-2022 1st', day: 'Thu', startTime: '13:00', endTime: '17:00', status: 'Active' },
    { id: 6, name: 'Evening Class Schedule', semester: 'AY 2021-2022 2nd', day: 'Mon', startTime: '17:30', endTime: '21:30', status: 'Active' },
    { id: 7, name: 'Evening Class Schedule', semester: 'AY 2021-2022 2nd', day: 'Wed', startTime: '17:30', endTime: '21:30', status: 'Active' },
    { id: 8, name: 'Weekend Class Schedule', semester: 'AY 2022-2023 1st', day: 'Sat', startTime: '08:00', endTime: '16:00', status: 'Upcoming' }
];

let nextScheduleId = 9;

export function getSchedules() {
    return schedules;
}

export function getScheduleById(id) {
    return schedules.find(s => s.id === id);
}

export function addSchedule(schedule) {
    const newSchedule = { ...schedule, id: nextScheduleId++ };
    schedules.push(newSchedule);
    return newSchedule;
}

export function updateSchedule(id, updatedData) {
    const index = schedules.findIndex(s => s.id === id);
    if (index !== -1) {
        schedules[index] = { ...schedules[index], ...updatedData };
        return schedules[index];
    }
    return null;
}

export function deleteSchedule(id) {
    const index = schedules.findIndex(s => s.id === id);
    if (index !== -1) {
        schedules.splice(index, 1);
        return true;
    }
    return false;
}

// ============================================================
//  28. GRADUATION DATES DATA
// ============================================================
export const graduationDates = [
    { id: 1, ay: '2021-2022', date: '2022-06-15', venue: 'Main Auditorium', type: 'Commencement', deadline: '2022-05-15', status: 'Completed' },
    { id: 2, ay: '2021-2022', date: '2022-06-16', venue: 'Main Auditorium', type: 'Recognition', deadline: '2022-05-15', status: 'Completed' },
    { id: 3, ay: '2021-2022', date: '2022-06-17', venue: 'Business Hall', type: 'Commencement', deadline: '2022-05-15', status: 'Completed' },
    { id: 4, ay: '2021-2022', date: '2022-06-18', venue: 'Science Hall', type: 'Convocation', deadline: '2022-05-15', status: 'Completed' }
];

let nextGraduationId = 5;

export function getGraduationDates() {
    return graduationDates;
}

export function getGraduationById(id) {
    return graduationDates.find(g => g.id === id);
}

export function addGraduation(grad) {
    const newGrad = { ...grad, id: nextGraduationId++ };
    graduationDates.push(newGrad);
    return newGrad;
}

export function updateGraduation(id, updatedData) {
    const index = graduationDates.findIndex(g => g.id === id);
    if (index !== -1) {
        graduationDates[index] = { ...graduationDates[index], ...updatedData };
        return graduationDates[index];
    }
    return null;
}

export function deleteGraduation(id) {
    const index = graduationDates.findIndex(g => g.id === id);
    if (index !== -1) {
        graduationDates.splice(index, 1);
        return true;
    }
 
    return false;
}

// ============================================================
//  29. EVALUATIONS DATA (for View Evaluation submodule)
// ============================================================
// Use the existing students array from Section 1 (already in scope)
const statuses = ['Passed', 'Failed', 'Pending'];
const periods = ['2021-2022 1st', '2021-2022 2nd', '2021-2022 Summer'];

export const evaluationsData = [];
let evalId = 1;

// Generate 280 evaluations (multiple per student)
for (let i = 0; i < 280; i++) {
    // Use the existing students array from Section 1
    const student = students[Math.floor(Math.random() * students.length)];
    const period = periods[Math.floor(Math.random() * periods.length)];
    // Bias statuses: 60% Passed, 20% Failed, 20% Pending
    const r = Math.random();
    let status;
    if (r < 0.6) status = 'Passed';
    else if (r < 0.8) status = 'Failed';
    else status = 'Pending';
    
    evaluationsData.push({
        id: evalId++,
        studentId: student.id,
        student: student.name,
        program: student.program,
        period: period,
        status: status
    });
}

// Helper to get evaluation by id
export function getEvaluationById(id) {
    return evaluationsData.find(e => e.id === id);
}

// Get all evaluations (for filtering)
export function getEvaluations() {
    return evaluationsData;
}

// ============================================================
//  30. STUDENT GRADE SUMMARIES (for View Grades submodule)
// ============================================================
// Map letter grades to grade points (avoid name conflict with existing gradeValues)
const gradePointsMap = {
    'A': 4.0,
    'A-': 3.7,
    'B+': 3.3,
    'B': 3.0,
    'B-': 2.7,
    'C+': 2.3,
    'C': 2.0,
    'D': 1.0,
    'F': 0.0
};

export const studentGradeSummaries = [];
const studentIds = [...new Set(grades.map(g => g.studentId))];

studentIds.forEach(studentId => {
    const student = students.find(s => s.id === studentId);
    if (!student) return;
    
    const studentGrades = grades.filter(g => g.studentId === studentId);
    const totalUnits = studentGrades.reduce((sum, g) => sum + g.units, 0);
    const weightedPoints = studentGrades.reduce((sum, g) => {
        const points = gradePointsMap[g.grade] || 0;
        return sum + (points * g.units);
    }, 0);
    const gpa = totalUnits > 0 ? weightedPoints / totalUnits : 0;
    
    // Determine year level based on number of subjects passed
    const passedSubjects = studentGrades.filter(g => g.isPassing).length;
    let year = 1;
    if (passedSubjects > 20) year = 4;
    else if (passedSubjects > 15) year = 3;
    else if (passedSubjects > 10) year = 2;
    
    // Determine academic standing
    let status;
    if (gpa >= 3.5) status = 'Honor Roll';
    else if (gpa >= 2.5) status = 'Good Standing';
    else if (gpa >= 2.0) status = 'Probation';
    else status = 'Academic Warning';
    
    studentGradeSummaries.push({
        id: studentId,
        studentId: student.id,
        student: student.name,
        program: student.program,
        year: year,
        gpa: parseFloat(gpa.toFixed(2)),
        status: status
    });
});

export function getGradeSummaryById(id) {
    return studentGradeSummaries.find(s => s.id === id);
}

export function getGradeSummaries() {
    return studentGradeSummaries;
}

// ============================================================
//  31. PRE-ENROLMENT DATA (for Pre-Enrol Subjects submodule)
// ============================================================
// Use existing students (Section 1) and academicSubjects (Section 20)
const preEnrolStatuses = ['Pre-Enrolled', 'Pending', 'Approved', 'Rejected'];
const preEnrolSemesters = ['2021-2022 1st', '2021-2022 2nd', '2021-2022 Summer'];

export const preEnrolments = [];
let preEnrolId = 1;

// Generate 342 pre-enrolments
for (let i = 0; i < 342; i++) {
    const student = students[Math.floor(Math.random() * students.length)];
    const subject = academicSubjects[Math.floor(Math.random() * academicSubjects.length)];
    const status = preEnrolStatuses[Math.floor(Math.random() * preEnrolStatuses.length)];
    const semester = preEnrolSemesters[Math.floor(Math.random() * preEnrolSemesters.length)];
    preEnrolments.push({
        id: preEnrolId++,
        studentId: student.id,
        student: student.name,
        subject: subject.code,
        department: subject.department,
        units: subject.units,
        semester: semester,
        status: status,
    });
}

export function getPreEnrolments() {
    return preEnrolments;
}

export function getPreEnrolmentById(id) {
    return preEnrolments.find(p => p.id === id);
}

let nextPreEnrolId = preEnrolments.length + 1;

export function addPreEnrolment(entry) {
    const newEntry = { ...entry, id: nextPreEnrolId++ };
    preEnrolments.push(newEntry);
    return newEntry;
}

export function updatePreEnrolment(id, updatedData) {
    const index = preEnrolments.findIndex(p => p.id === id);
    if (index !== -1) {
        preEnrolments[index] = { ...preEnrolments[index], ...updatedData };
        return preEnrolments[index];
    }
    return null;
}

export function deletePreEnrolment(id) {
    const index = preEnrolments.findIndex(p => p.id === id);
    if (index !== -1) {
        preEnrolments.splice(index, 1);
        return true;
    }
    return false;
}

// ============================================================
//  32. ENROLMENT DATA (for Enrol Subjects submodule)
// ============================================================
const enrolStatuses = ['Enrolled', 'Pending', 'Dropped', 'Completed'];
const enrolSemesters = ['2021-2022 1st', '2021-2022 2nd', '2021-2022 Summer'];

export const enrolmentsData = [];
let enrolId = 1;

// Generate 360 enrolments
for (let i = 0; i < 360; i++) {
    const student = students[Math.floor(Math.random() * students.length)];
    const subject = academicSubjects[Math.floor(Math.random() * academicSubjects.length)];
    const status = enrolStatuses[Math.floor(Math.random() * enrolStatuses.length)];
    const semester = enrolSemesters[Math.floor(Math.random() * enrolSemesters.length)];
    enrolmentsData.push({
        id: enrolId++,
        studentId: student.id,
        student: student.name,
        subject: subject.code,
        department: subject.department,
        units: subject.units,
        semester: semester,
        status: status,
    });
}

export function getEnrolments() {
    return enrolmentsData;
}

export function getEnrolmentById(id) {
    return enrolmentsData.find(p => p.id === id);
}

let nextEnrolId = enrolmentsData.length + 1;

export function addEnrolment(entry) {
    const newEntry = { ...entry, id: nextEnrolId++ };
    enrolmentsData.push(newEntry);
    return newEntry;
}

export function updateEnrolment(id, updatedData) {
    const index = enrolmentsData.findIndex(p => p.id === id);
    if (index !== -1) {
        enrolmentsData[index] = { ...enrolmentsData[index], ...updatedData };
        return enrolmentsData[index];
    }
    return null;
}

export function deleteEnrolment(id) {
    const index = enrolmentsData.findIndex(p => p.id === id);
    if (index !== -1) {
        enrolmentsData.splice(index, 1);
        return true;
    }
    return false;
}

// ============================================================
//  33. CHANGE MATRICULATION DATA
// ============================================================
const changeStatuses = ['Pending', 'Approved', 'Rejected', 'Completed'];
const changeSemesters = ['2021-2022 1st', '2021-2022 2nd', '2021-2022 Summer'];
const changeReasons = [
    'Schedule conflict',
    'Prerequisite not met',
    'Class cancelled',
    'Transfer request',
    'Academic adviser recommendation',
    'Student request',
    'Waitlist cleared',
    'Section change'
];

export const changeRequests = [];
let changeId = 1;

// Generate 240 change requests
for (let i = 1; i <= 240; i++) {
    const student = students[Math.floor(Math.random() * students.length)];
    const allSubjects = academicSubjects.map(s => s.code);
    const oldSubject = allSubjects[Math.floor(Math.random() * allSubjects.length)];
    let newSubject = allSubjects[Math.floor(Math.random() * allSubjects.length)];
    // Ensure new subject is different
    while (newSubject === oldSubject) {
        newSubject = allSubjects[Math.floor(Math.random() * allSubjects.length)];
    }
    const status = changeStatuses[Math.floor(Math.random() * changeStatuses.length)];
    const semester = changeSemesters[Math.floor(Math.random() * changeSemesters.length)];
    const reason = changeReasons[Math.floor(Math.random() * changeReasons.length)];
    const requestId = 'REQ-2021-' + String(i).padStart(4, '0');
    changeRequests.push({
        id: changeId++,
        requestId: requestId,
        studentId: student.id,
        student: student.name,
        oldSubject: oldSubject,
        newSubject: newSubject,
        reason: reason,
        semester: semester,
        status: status
    });
}

export function getChangeRequests() {
    return changeRequests;
}

export function getChangeRequestById(id) {
    return changeRequests.find(c => c.id === id);
}

let nextChangeId = changeRequests.length + 1;

export function addChangeRequest(request) {
    const newRequest = { ...request, id: nextChangeId++ };
    changeRequests.push(newRequest);
    return newRequest;
}

export function updateChangeRequest(id, updatedData) {
    const index = changeRequests.findIndex(c => c.id === id);
    if (index !== -1) {
        changeRequests[index] = { ...changeRequests[index], ...updatedData };
        return changeRequests[index];
    }
    return null;
}

export function deleteChangeRequest(id) {
    const index = changeRequests.findIndex(c => c.id === id);
    if (index !== -1) {
        changeRequests.splice(index, 1);
        return true;
    }
    return false;
}

// ============================================================
//  34. SUBJECT OVERRIDE DATA
// ============================================================
const overrideStatuses = ['Pending', 'Approved', 'Rejected', 'Completed'];
const overrideSemesters = ['2021-2022 1st', '2021-2022 2nd', '2021-2022 Summer'];
const overrideTypes = [
    'Prerequisite Override',
    'Corequisite Override',
    'Restriction Override',
    'Capacity Override',
    'Consent Override'
];
const overrideReasons = [
    'Student has equivalent experience',
    'Instructor consent obtained',
    'Department chair approved',
    'Previous course waived',
    'Placement test passed',
    'Transfer credit accepted',
    'Schedule conflict resolved',
    'Special permission granted'
];

export const subjectOverrides = [];
let overrideId = 1;

// Generate 260 subject override requests
for (let i = 1; i <= 260; i++) {
    const student = students[Math.floor(Math.random() * students.length)];
    const subject = academicSubjects[Math.floor(Math.random() * academicSubjects.length)];
    const overrideType = overrideTypes[Math.floor(Math.random() * overrideTypes.length)];
    const status = overrideStatuses[Math.floor(Math.random() * overrideStatuses.length)];
    const semester = overrideSemesters[Math.floor(Math.random() * overrideSemesters.length)];
    const reason = overrideReasons[Math.floor(Math.random() * overrideReasons.length)];
    subjectOverrides.push({
        id: overrideId++,
        studentId: student.id,
        student: student.name,
        subject: subject.code,
        overrideType: overrideType,
        reason: reason,
        semester: semester,
        status: status
    });
}

export function getSubjectOverrides() {
    return subjectOverrides;
}

export function getSubjectOverrideById(id) {
    return subjectOverrides.find(o => o.id === id);
}

let nextOverrideId = subjectOverrides.length + 1;

export function addSubjectOverride(override) {
    const newOverride = { ...override, id: nextOverrideId++ };
    subjectOverrides.push(newOverride);
    return newOverride;
}

export function updateSubjectOverride(id, updatedData) {
    const index = subjectOverrides.findIndex(o => o.id === id);
    if (index !== -1) {
        subjectOverrides[index] = { ...subjectOverrides[index], ...updatedData };
        return subjectOverrides[index];
    }
    return null;
}

export function deleteSubjectOverride(id) {
    const index = subjectOverrides.findIndex(o => o.id === id);
    if (index !== -1) {
        subjectOverrides.splice(index, 1);
        return true;
    }
    return false;
}

// ============================================================
//  35. UNIT OVERRIDE DATA
// ============================================================
const unitOverrideStatuses = ['Pending', 'Approved', 'Rejected', 'Completed'];
const unitOverrideSemesters = ['2021-2022 1st', '2021-2022 2nd', '2021-2022 Summer'];
const unitOverrideReasons = [
    'Honours student needs additional units',
    'Graduating student needs completion',
    'Department chair approved overload',
    'Faculty adviser recommendation',
    'Academic standing permits overload',
    'Special permission granted',
    'Transfer student needs catch-up',
    'Dean\'s list student request'
];

export const unitOverrides = [];
let unitOverrideId = 1;

// Generate 250 unit override requests
for (let i = 1; i <= 250; i++) {
    const student = students[Math.floor(Math.random() * students.length)];
    const currentUnits = Math.round((12 + Math.random() * 6) * 2) / 2; // 12-18
    const requestedUnits = Math.round((currentUnits + 3 + Math.random() * 6) * 2) / 2; // +3-9
    const reason = unitOverrideReasons[Math.floor(Math.random() * unitOverrideReasons.length)];
    const status = unitOverrideStatuses[Math.floor(Math.random() * unitOverrideStatuses.length)];
    const semester = unitOverrideSemesters[Math.floor(Math.random() * unitOverrideSemesters.length)];
    unitOverrides.push({
        id: unitOverrideId++,
        studentId: student.id,
        student: student.name,
        currentUnits: currentUnits,
        requestedUnits: requestedUnits,
        reason: reason,
        semester: semester,
        status: status
    });
}

export function getUnitOverrides() {
    return unitOverrides;
}

export function getUnitOverrideById(id) {
    return unitOverrides.find(o => o.id === id);
}

let nextUnitOverrideId = unitOverrides.length + 1;

export function addUnitOverride(override) {
    const newOverride = { ...override, id: nextUnitOverrideId++ };
    unitOverrides.push(newOverride);
    return newOverride;
}

export function updateUnitOverride(id, updatedData) {
    const index = unitOverrides.findIndex(o => o.id === id);
    if (index !== -1) {
        unitOverrides[index] = { ...unitOverrides[index], ...updatedData };
        return unitOverrides[index];
    }
    return null;
}

export function deleteUnitOverride(id) {
    const index = unitOverrides.findIndex(o => o.id === id);
    if (index !== -1) {
        unitOverrides.splice(index, 1);
        return true;
    }
    return false;
}

// ============================================================
//  36. ENROLMENT REPORTS DATA
// ============================================================
const enrolReportTypes = ['Enrolment Statistics', 'Grade Summary', 'Student List', 'Department Report', 'Program Report'];
const enrolReportStatuses = ['Completed', 'Processing', 'Failed'];
const reportSemesters = ['2021-2022 1st', '2021-2022 2nd', '2021-2022 Summer'];
const reportSizes = ['1.2 MB', '0.8 MB', '2.3 MB', '0.5 MB', '1.8 MB', '3.1 MB'];
const reportNameBases = [
    'Enrolment_Summary', 'Grade_Summary', 'Student_List',
    'Department_Report', 'Program_Report'
];

export const enrolmentReports = [];
let reportIdCounter = 1;

for (let i = 1; i <= 180; i++) {
    const type = enrolReportTypes[Math.floor(Math.random() * enrolReportTypes.length)];
    const status = enrolReportStatuses[Math.floor(Math.random() * enrolReportStatuses.length)];
    const semester = reportSemesters[Math.floor(Math.random() * reportSemesters.length)];
    const size = reportSizes[Math.floor(Math.random() * reportSizes.length)];
    const base = reportNameBases[Math.floor(Math.random() * reportNameBases.length)];
    const name = base + '_' + semester.replace(/\s/g, '_') + (i % 3 === 0 ? '_v2' : '');
    const date = new Date(2022, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1);
    const dateStr = date.toISOString().split('T')[0];
    enrolmentReports.push({
        id: reportIdCounter++,
        reportId: 'RPT-2021-' + String(i).padStart(4, '0'),
        name: name,
        type: type,
        date: dateStr,
        size: size,
        semester: semester,
        status: status
    });
}

export function getEnrolmentReports() {
    return enrolmentReports;
}

export function getEnrolmentReportById(id) {
    return enrolmentReports.find(r => r.id === id);
}

let nextReportId = enrolmentReports.length + 1;

export function addEnrolmentReport(report) {
    const newReport = { ...report, id: nextReportId++ };
    enrolmentReports.push(newReport);
    return newReport;
}

export function updateEnrolmentReport(id, updatedData) {
    const index = enrolmentReports.findIndex(r => r.id === id);
    if (index !== -1) {
        enrolmentReports[index] = { ...enrolmentReports[index], ...updatedData };
        return enrolmentReports[index];
    }
    return null;
}

export function deleteEnrolmentReport(id) {
    const index = enrolmentReports.findIndex(r => r.id === id);
    if (index !== -1) {
        enrolmentReports.splice(index, 1);
        return true;
    }
    return false;
}

// ============================================================
//  37. GRADUATION CEREMONY DATA
// ============================================================
const ceremonyStatuses = ['Upcoming', 'Completed', 'Cancelled'];
const ceremonyVenues = [
    'Main Auditorium',
    'Business Hall',
    'Science Hall',
    'Sports Complex',
    'Convention Center'
];
const ceremonyTypes = ['Commencement', 'Recognition', 'Convocation'];

export const graduationCeremonies = [];
let ceremonyId = 1;

// Generate 30 ceremonies (multiple per academic year)
const ceremonyYears = ['2021-2022', '2022-2023', '2020-2021'];
for (let i = 1; i <= 30; i++) {
    const year = ceremonyYears[Math.floor(Math.random() * ceremonyYears.length)];
    const type = ceremonyTypes[Math.floor(Math.random() * ceremonyTypes.length)];
    const venue = ceremonyVenues[Math.floor(Math.random() * ceremonyVenues.length)];
    const status = ceremonyStatuses[Math.floor(Math.random() * ceremonyStatuses.length)];
    const date = new Date(
        2022,
        Math.floor(Math.random() * 12),
        Math.floor(Math.random() * 28) + 1
    );
    const dateStr = date.toISOString().split('T')[0];
    const time = `${String(8 + Math.floor(Math.random() * 10)).padStart(2, '0')}:${String(Math.floor(Math.random() * 60)).padStart(2, '0')}`;
    const graduates = 50 + Math.floor(Math.random() * 150);
    graduationCeremonies.push({
        id: ceremonyId++,
        ceremonyId: 'CER-' + String(i).padStart(4, '0'),
        year: year,
        type: type,
        date: dateStr,
        time: time,
        venue: venue,
        graduates: graduates,
        status: status
    });
}

export function getGraduationCeremonies() {
    return graduationCeremonies;
}

export function getCeremonyById(id) {
    return graduationCeremonies.find(c => c.id === id);
}

let nextCeremonyId = graduationCeremonies.length + 1;

export function addCeremony(ceremony) {
    const newCeremony = { ...ceremony, id: nextCeremonyId++ };
    graduationCeremonies.push(newCeremony);
    return newCeremony;
}

export function updateCeremony(id, updatedData) {
    const index = graduationCeremonies.findIndex(c => c.id === id);
    if (index !== -1) {
        graduationCeremonies[index] = { ...graduationCeremonies[index], ...updatedData };
        return graduationCeremonies[index];
    }
    return null;
}

export function deleteCeremony(id) {
    const index = graduationCeremonies.findIndex(c => c.id === id);
    if (index !== -1) {
        graduationCeremonies.splice(index, 1);
        return true;
    }
    return false;
}

// ============================================================
//  37. SECURITY LOGS DATA (for Security Logs submodule)
// ============================================================
const securityEventTypes = [
    'Login Attempt', 'Login Failed', 'Login Success',
    'User Created', 'User Updated', 'User Deactivated', 'User Reactivated',
    'Role Created', 'Role Updated', 'Role Deleted',
    'Permission Updated', 'Permission Override',
    'Password Reset', 'Password Change',
    'Session Expired', 'Session Terminated',
    'Audit Log Export', 'Security Policy Updated',
    'IP Blocked', 'IP Unblocked',
    'MFA Enabled', 'MFA Disabled',
    'API Key Generated', 'API Key Revoked'
];

const securityStatuses = ['Success', 'Failed', 'Pending', 'Expired', 'Applied', 'Completed', 'Exported'];

// ---- Real person names with descriptive roles ----
const securityUserObjects = [
    { name: 'Mateo Alcantara', role: 'VP for Academic & Student Affairs' },
    { name: 'Maria Santos', role: 'Registrar Officer' },
    { name: 'Alan Cruz', role: 'System Administrator' },
    { name: 'Ramon Torres', role: 'Faculty Member' },
    { name: 'Elena Protasio', role: 'Student' },
    { name: 'Liza Tan', role: 'Enrollment Officer' },
    { name: 'Reyes Magbanua', role: 'Finance Officer' },
    { name: 'Gregorio Santiago', role: 'IT Administrator' },
    { name: 'Clara Dela Cruz', role: 'Security Officer' },
    { name: 'Sofia Garcia', role: 'Department Head' }
];

const securityIPs = [
    '192.168.1.10', '192.168.1.45', '192.168.1.5', '192.168.1.78', '192.168.1.22',
    '10.0.0.15', '10.0.0.32', '172.16.0.8', '192.168.2.100', '10.0.1.5',
    '192.168.1.67', '10.0.0.25', '172.16.0.5', '192.168.2.50', '10.0.2.10',
    '203.0.113.10', '203.0.113.20', '198.51.100.5', '198.51.100.15'
];

export const securityLogs = [];
let securityLogId = 1;

for (let i = 0; i < 80; i++) {
    const type = securityEventTypes[Math.floor(Math.random() * securityEventTypes.length)];
    // Pick a random user object
    const userObj = securityUserObjects[Math.floor(Math.random() * securityUserObjects.length)];
    // user = name, userRole = role
    const user = userObj.name;           // e.g., "Mateo Alcantara"
    const userRole = userObj.role;       // e.g., "VP for Academic & Student Affairs"
    
    let status = securityStatuses[Math.floor(Math.random() * securityStatuses.length)];
    
    // Bias status
    if (type === 'Login Attempt') {
        status = Math.random() > 0.75 ? 'Failed' : 'Success';
    } else if (type === 'Login Failed') {
        status = 'Failed';
    } else if (type === 'Login Success') {
        status = 'Success';
    } else if (type.includes('Created') || type.includes('Updated') || type.includes('Generated')) {
        status = Math.random() > 0.2 ? 'Completed' : 'Pending';
    } else if (type.includes('Revoked') || type.includes('Deleted') || type.includes('Blocked') || type.includes('Terminated')) {
        status = Math.random() > 0.1 ? 'Completed' : 'Failed';
    } else if (type === 'Permission Override' || type === 'Security Policy Updated') {
        status = Math.random() > 0.3 ? 'Applied' : 'Pending';
    } else if (type === 'Audit Log Export') {
        status = 'Exported';
    } else if (type === 'Session Expired') {
        status = 'Expired';
    }
    
    const ip = securityIPs[Math.floor(Math.random() * securityIPs.length)];
    const date = new Date(
        2026,
        Math.floor(Math.random() * 12),
        Math.floor(Math.random() * 28) + 1,
        Math.floor(Math.random() * 24),
        Math.floor(Math.random() * 60)
    );
    const timestamp = date.toISOString().replace('T', ' ').slice(0, 16);
    
    let details = '';
    let targetUser = '';
    let targetUserRole = '';
    let roleName = '';
    
    if (type.includes('User')) {
        const targetObj = securityUserObjects[Math.floor(Math.random() * securityUserObjects.length)];
        targetUser = targetObj.name;
        targetUserRole = targetObj.role;
        details = `${type}: ${targetUser}`;
    } else if (type.includes('Role')) {
        const roleNames = ['Super Admin', 'Registrar Admin', 'Enrollment Staff', 'Finance Staff', 'Faculty', 'Student'];
        roleName = roleNames[Math.floor(Math.random() * roleNames.length)];
        details = `${type}: ${roleName}`;
    } else if (type.includes('Login')) {
        details = `${type} from ${ip}`;
    } else if (type === 'Audit Log Export') {
        details = `${type}: ${(0.5 + Math.random() * 2.5).toFixed(1)} MB exported`;
    } else if (type === 'Security Policy Updated') {
        details = `${type}: Password policy updated`;
    } else if (type === 'Permission Override') {
        details = `${type}: ${['View', 'Edit', 'Delete', 'Admin'][Math.floor(Math.random() * 4)]} permission overridden`;
    } else if (type.includes('Session')) {
        details = `${type}: ${Math.floor(2 + Math.random() * 8)} hour session`;
    } else if (type.includes('MFA')) {
        const targetObj = securityUserObjects[Math.floor(Math.random() * securityUserObjects.length)];
        targetUser = targetObj.name;
        targetUserRole = targetObj.role;
        details = `${type} for ${targetUser}`;
    } else if (type.includes('API Key')) {
        details = `${type}: Key ${String(Math.random().toString(36).substring(2, 8)).toUpperCase()}`;
    } else {
        details = type;
    }
    
    securityLogs.push({
        id: securityLogId++,
        timestamp: timestamp,
        user: user,                 // ✅ Real name
        userRole: userRole,         // ✅ Descriptive role
        action: type,
        ip: ip,
        status: status,
        details: details,
        targetUser: targetUser || null,
        targetUserRole: targetUserRole || null,
        roleName: roleName || null
    });
}

securityLogs.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

export function getSecurityLogs() {
    return securityLogs;
}

export function getSecurityLogById(id) {
    return securityLogs.find(log => log.id === id);
}

export function getSecurityLogsByUser(user) {
    return securityLogs.filter(log => log.user === user || log.targetUser === user);
}

export function getSecurityLogsByAction(action) {
    return securityLogs.filter(log => log.action === action);
}

// ============================================================
//  38. SYSTEM USERS (Unified for User Management & Security Logs)
// ============================================================
export const systemUsers = [
    { id: 1, name: 'Mateo Alcantara', email: 'mateo.a@edu.ph', role: 'VP for Academic & Student Affairs', department: 'Academic Affairs', status: 'Active' },
    { id: 2, name: 'Maria Santos', email: 'maria.s@edu.ph', role: 'Registrar Officer', department: 'Registrar Office', status: 'Active' },
    { id: 3, name: 'Alan Cruz', email: 'alan.c@edu.ph', role: 'System Administrator', department: 'IT', status: 'Active' },
    { id: 4, name: 'Ramon Torres', email: 'ramon.t@edu.ph', role: 'Faculty Member', department: 'College of Law', status: 'Active' },
    { id: 5, name: 'Elena Protasio', email: 'elena.p@edu.ph', role: 'Student', department: 'BS Accountancy', status: 'Active' },
    { id: 6, name: 'Liza Tan', email: 'liza.t@edu.ph', role: 'Enrollment Officer', department: 'Enrollment Office', status: 'Active' },
    { id: 7, name: 'Reyes Magbanua', email: 'reyes.m@edu.ph', role: 'Finance Officer', department: 'Finance Office', status: 'Active' },
    { id: 8, name: 'Gregorio Santiago', email: 'gregorio.s@edu.ph', role: 'IT Administrator', department: 'IT', status: 'Active' },
    { id: 9, name: 'Clara Dela Cruz', email: 'clara.d@edu.ph', role: 'Security Officer', department: 'Security', status: 'Active' },
    { id: 10, name: 'Sofia Garcia', email: 'sofia.g@edu.ph', role: 'Department Head', department: 'College of Business', status: 'Active' },
    { id: 11, name: 'Alex Rivera', email: 'alex.r@edu.ph', role: 'Super Admin', department: 'Academic Affairs', status: 'Active' },
    { id: 12, name: 'Jordan Taylor', email: 'jordan.t@edu.ph', role: 'Registrar Admin', department: 'Registrar Office', status: 'Active' },
    { id: 13, name: 'Casey Morgan', email: 'casey.m@edu.ph', role: 'Enrollment Staff', department: 'Enrollment Office', status: 'Active' },
    { id: 14, name: 'Riley Cooper', email: 'riley.c@edu.ph', role: 'Finance Staff', department: 'Finance Office', status: 'Active' },
    { id: 15, name: 'Avery Kim', email: 'avery.k@edu.ph', role: 'Faculty Member', department: 'College of Law', status: 'Active' },
    { id: 16, name: 'Taylor Brooks', email: 'taylor.b@edu.ph', role: 'Enrollment Staff', department: 'Enrollment Office', status: 'Inactive' },
    { id: 17, name: 'Jamie Patel', email: 'jamie.p@edu.ph', role: 'Student', department: 'BS Accountancy', status: 'Active' },
    { id: 18, name: 'Cameron Singh', email: 'cameron.s@edu.ph', role: 'Super Admin', department: 'IT', status: 'Active' },
    { id: 19, name: 'Quinn Chen', email: 'quinn.c@edu.ph', role: 'Student', department: 'BS Accountancy', status: 'Active' },
    { id: 20, name: 'Reese Nguyen', email: 'reese.n@edu.ph', role: 'Faculty Member', department: 'College of Business', status: 'Active' },
    { id: 21, name: 'Skyler Foster', email: 'skyler.f@edu.ph', role: 'Registrar Staff', department: 'Registrar Office', status: 'Active' },
    { id: 22, name: 'Dakota Hayes', email: 'dakota.h@edu.ph', role: 'Finance Staff', department: 'Finance Office', status: 'Inactive' },
    { id: 23, name: 'Morgan Walsh', email: 'morgan.w@edu.ph', role: 'Faculty Member', department: 'College of Education', status: 'Active' },
    { id: 24, name: 'Avery Shaw', email: 'avery.s@edu.ph', role: 'Student', department: 'ABMT Entrepreneurship', status: 'Active' },
    { id: 25, name: 'Jordan Frost', email: 'jordan.f@edu.ph', role: 'Enrollment Staff', department: 'Enrollment Office', status: 'Active' }
];

let nextSystemUserId = systemUsers.length + 1;

export function getSystemUsers() {
    return systemUsers;
}

export function getSystemUserById(id) {
    return systemUsers.find(u => u.id === id);
}

export function addSystemUser(user) {
    const newUser = { ...user, id: nextSystemUserId++ };
    systemUsers.push(newUser);
    // Log the action in security logs
    logSecurityEvent('User Created', newUser.name, newUser.role);
    return newUser;
}

export function updateSystemUser(id, updatedData) {
    const index = systemUsers.findIndex(u => u.id === id);
    if (index !== -1) {
        const oldUser = systemUsers[index];
        systemUsers[index] = { ...oldUser, ...updatedData };
        logSecurityEvent('User Updated', systemUsers[index].name, systemUsers[index].role);
        return systemUsers[index];
    }
    return null;
}

export function deleteSystemUser(id) {
    const index = systemUsers.findIndex(u => u.id === id);
    if (index !== -1) {
        const name = systemUsers[index].name;
        systemUsers.splice(index, 1);
        logSecurityEvent('User Deactivated', name, '');
        return true;
    }
    return false;
}

// Helper to log security events (used by the CRUD functions)
function logSecurityEvent(action, targetUser, role) {
    const timestamp = new Date().toISOString().replace('T', ' ').slice(0, 16);
    // Use a system user for the actor (we'll use "System" as the user)
    securityLogs.unshift({
        id: ++securityLogId,
        timestamp: timestamp,
        user: 'System',
        userRole: 'System',
        action: action,
        ip: '127.0.0.1',
        status: 'Completed',
        details: `${action}: ${targetUser}`,
        targetUser: targetUser,
        targetUserRole: role || '',
        roleName: ''
    });
}