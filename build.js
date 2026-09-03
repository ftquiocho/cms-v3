const fs = require('fs');
const path = require('path');

// Clean and create dist
if (fs.existsSync('dist')) {
    fs.rmSync('dist', { recursive: true, force: true });
}
fs.mkdirSync('dist');

// Copy assets folder recursively
function copyAssets(src, dest) {
    if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
    const entries = fs.readdirSync(src, { withFileTypes: true });
    for (let entry of entries) {
        const srcPath = path.join(src, entry.name);
        const destPath = path.join(dest, entry.name);
        if (entry.isDirectory()) {
            copyAssets(srcPath, destPath);
        } else {
            fs.copyFileSync(srcPath, destPath);
        }
    }
}
copyAssets('src/assets', 'dist/assets');

// Read layout and partials
const layout = fs.readFileSync('src/_layout.html', 'utf8');
const header = fs.readFileSync('src/partials/_header.html', 'utf8');
const sidebar = fs.readFileSync('src/partials/_sidebar.html', 'utf8');
const modals = fs.readFileSync('src/partials/_modals.html', 'utf8');

const pageNames = ['dashboard', 'approvals', 'admissions', 'manage', 'settings', 'enrol', 'graduation', 'billing','registrar','security', 'ter', 'academic', 'colleges','departments','courses','subjects','curriculum','courses','subjects','curriculum','grade-system','grade-remarks','score-settings','autolapse-control','semester-definitions', 'schedules','graduation-dates','school-info', 'logo-signature', 'institution-reports','view-evaluation','view-grades','pre-enrol-subjects','enrol-subjects','change-matriculation','subject-override','unit-override','enrol-reports', 'student-360', 'curriculum-requirements', 'recommend-students','graduation-reports', 'grad-eligibility','grad-reports','grad-ceremony','account-billing', 'payment-log', 'account-arrears','registrar', 'registrar-statistics', 'registrar-transcript', 'registrar-misc', 'security-users', 'security-roles', 'security-logs'];
pageNames.forEach(page => {
    const content = fs.readFileSync(`src/pages/${page}.html`, 'utf8');
    let html = layout
        .replace('<!--#include header -->', header)
        .replace('<!--#include sidebar -->', sidebar)
        .replace('<!--#include modals -->', modals)
        .replace('<!--#content -->', content)
        .replace('<!--#title -->', page === 'dashboard' ? 'Dashboard – EduCore' : `${page.charAt(0).toUpperCase() + page.slice(1)} – EduCore`);

    const outputName = page === 'dashboard' ? 'index.html' : `${page}.html`;
    fs.writeFileSync(path.join('dist', outputName), html);
});

const titles = {
    'dashboard': 'Dashboard – EduCore',
    'approvals': 'Approvals – EduCore',
    'admissions': 'Admissions – EduCore',
    'manage': 'Academic Setup – EduCore',
    'settings': 'Academic Configuration – EduCore',
    'enrol': 'Enrollment – EduCore',
    'graduation': 'Graduation – EduCore',
    'billing': 'Billing – EduCore',
    'registrar': 'Registrar – EduCore',
    'security': 'System Security – EduCore',
    'ter': 'Teacher Evaluation Records – EduCore',
    'academic': 'Academic Administration – EduCore',
    'colleges': 'Colleges – EduCore',
    'departments': 'Departments – EduCore',
    'courses': 'Degree Courses – EduCore',
    'subjects': 'Subjects – EduCore',
    'curriculum': 'Curriculum – EduCore',
    'grade-system': 'Grade System – EduCore',
    'grade-remarks': 'Grade Remarks – EduCore',
    'score-settings': 'Score Settings – EduCore',
    'autolapse-control': 'Autolapse Control – EduCore',
    'semester-definitions': 'Semester Definitions – EduCore',
    'schedules': 'Schedules – EduCore',
    'graduation-dates': 'Graduation Dates – EduCore',
    'school-info': 'School Information – EduCore',
    'logo-signature': 'Logo & Signature – EduCore',
    'institution-reports': 'Institution Reports – EduCore',
    'view-evaluation': 'View Evaluation – EduCore',
    'view-grades': 'View Grades – EduCore',
    'pre-enrol-subjects': 'Pre-Enroll Subjects – EduCore',
    'enrol-subjects': 'Enrol Subjects – EduCore',
    'change-matriculation': 'Change Matriculation – EduCore',
    'subject-override': 'Subject Override – EduCore',
    'unit-override': 'Unit Override – EduCore',
    'enrol-reports': 'Enroll Reports – EduCore',
    'student-360': 'Student 360 – EduCore',
    'curriculum-requirements': 'Curriculum Requirements – EduCore',
    'recommend-students': 'Recommend Students – EduCore',
    'graduation-reports': 'Graduation Reports – EduCore',
    'account-billing': 'Account Billing – EduCore',
    'payment-log': 'Payment Log – EduCore',
    'account-arrears': 'Account Arrears – EduCore',
    'registrar-statistics': 'Registrar Statistics – EduCore',
    'registrar-transcript': 'Registrar Transcript – EduCore',
    'registrar-misc': 'Registrar Miscellaneous – EduCore',
    'security-users': 'Security Users – EduCore',
    'security-roles': 'Security Roles – EduCore',
    'security-logs': 'Security Logs – EduCore',
    'grad-eligibility': 'Graduation Eligibility – EduCore',
    'grad-reports': 'Graduation Reports – EduCore',
    'grad-ceremony': 'Graduation Ceremony – EduCore'
};

console.log('✅ Build complete! Pages generated:', pageNames.join(', '));