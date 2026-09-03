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
        .replace('<!--#title -->', page === 'dashboard' ? 'Dashboard – Veritas Campus' : `${page.charAt(0).toUpperCase() + page.slice(1)} – Veritas Campus`);

    const outputName = page === 'dashboard' ? 'index.html' : `${page}.html`;
    fs.writeFileSync(path.join('dist', outputName), html);
});

const titles = {
    'dashboard': 'Dashboard – Veritas Campus',
    'approvals': 'Approvals – Veritas Campus',
    'admissions': 'Admissions – Veritas Campus',
    'manage': 'Academic Setup – Veritas Campus',
    'settings': 'Academic Configuration – Veritas Campus',
    'enrol': 'Enrollment – Veritas Campus',
    'graduation': 'Graduation – Veritas Campus',
    'billing': 'Billing – Veritas Campus',
    'registrar': 'Registrar – Veritas Campus',
    'security': 'System Security – Veritas Campus',
    'ter': 'Teacher Evaluation Records – Veritas Campus',
    'academic': 'Academic Administration – Veritas Campus',
    'colleges': 'Colleges – Veritas Campus',
    'departments': 'Departments – Veritas Campus',
    'courses': 'Degree Courses – Veritas Campus',
    'subjects': 'Subjects – Veritas Campus',
    'curriculum': 'Curriculum – Veritas Campus',
    'grade-system': 'Grade System – Veritas Campus',
    'grade-remarks': 'Grade Remarks – Veritas Campus',
    'score-settings': 'Score Settings – Veritas Campus',
    'autolapse-control': 'Autolapse Control – Veritas Campus',
    'semester-definitions': 'Semester Definitions – Veritas Campus',
    'schedules': 'Schedules – Veritas Campus',
    'graduation-dates': 'Graduation Dates – Veritas Campus',
    'school-info': 'School Information – Veritas Campus',
    'logo-signature': 'Logo & Signature – Veritas Campus',
    'institution-reports': 'Institution Reports – Veritas Campus',
    'view-evaluation': 'View Evaluation – Veritas Campus',
    'view-grades': 'View Grades – Veritas Campus',
    'pre-enrol-subjects': 'Pre-Enroll Subjects – Veritas Campus',
    'enrol-subjects': 'Enrol Subjects – Veritas Campus',
    'change-matriculation': 'Change Matriculation – Veritas Campus',
    'subject-override': 'Subject Override – Veritas Campus',
    'unit-override': 'Unit Override – Veritas Campus',
    'enrol-reports': 'Enroll Reports – Veritas Campus',
    'student-360': 'Student 360 – Veritas Campus',
    'curriculum-requirements': 'Curriculum Requirements – Veritas Campus',
    'recommend-students': 'Recommend Students – Veritas Campus',
    'graduation-reports': 'Graduation Reports – Veritas Campus',
    'account-billing': 'Account Billing – Veritas Campus',
    'payment-log': 'Payment Log – Veritas Campus',
    'account-arrears': 'Account Arrears – Veritas Campus',
    'registrar-statistics': 'Registrar Statistics – Veritas Campus',
    'registrar-transcript': 'Registrar Transcript – Veritas Campus',
    'registrar-misc': 'Registrar Miscellaneous – Veritas Campus',
    'security-users': 'Security Users – Veritas Campus',
    'security-roles': 'Security Roles – Veritas Campus',
    'security-logs': 'Security Logs – Veritas Campus',
    'grad-eligibility': 'Graduation Eligibility – Veritas Campus',
    'grad-reports': 'Graduation Reports – Veritas Campus',
    'grad-ceremony': 'Graduation Ceremony – Veritas Campus'
};

console.log('✅ Build complete! Pages generated:', pageNames.join(', '));

if (fs.existsSync('dist/index.html')) {
    fs.copyFileSync('dist/index.html', 'index.html');
    console.log('✅ Copied dist/index.html to root for GitHub Pages');
}