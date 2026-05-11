// Function to toggle desktop sidebar
function toggleSidebar() {
    const sidebar = document.getElementById('desktop-sidebar');
    const mainContent = document.querySelector('.main-content');
    const toggleBtn = document.querySelector('.btn-outline-primary');
    
    if (sidebar.style.left === '-250px') {
        sidebar.style.left = '0';
        mainContent.style.marginLeft = '250px';
        toggleBtn.innerHTML = '✕'; // Change to close icon
    } else {
        sidebar.style.left = '-250px';
        mainContent.style.marginLeft = '0';
        toggleBtn.innerHTML = '☰'; // Change back to hamburger
    }
}

// Function to show content section
function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => section.classList.remove('active'));
    
    // Show selected section
    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.classList.add('active');
    }

    // Update active link in sidebar
    const navLinks = document.querySelectorAll('#desktop-sidebar .nav-link, #sidebar .nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
        }
    });

    // Close offcanvas sidebar on mobile after navigation
    const offcanvas = document.getElementById('sidebar');
    if (offcanvas && offcanvas.classList.contains('show')) {
        const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvas);
        if (bsOffcanvas) {
            bsOffcanvas.hide();
        }
    }
}

// Students functions
function addStudent() {
    const name = prompt('Enter student name:');
    const course = prompt('Enter course:');
    if (name && course) {
        const table = document.getElementById('studentsTable');
        const rowCount = table.rows.length;
        const row = table.insertRow(rowCount);
        row.innerHTML = `
            <td>${rowCount + 1}</td>
            <td>${name}</td>
            <td>${course}</td>
            <td><button class="btn btn-sm btn-primary" onclick="editStudent(${rowCount + 1})">Edit</button> <button class="btn btn-sm btn-danger" onclick="deleteStudent(${rowCount + 1})">Delete</button></td>
        `;
        alert('Student added successfully!');
    }
}

function editStudent(id) {
    alert(`Edit student with ID: ${id}`);
    // In a real app, open a modal or form to edit
}

function deleteStudent(id) {
    if (confirm('Are you sure you want to delete this student?')) {
        alert(`Student with ID ${id} deleted!`);
        // In a real app, remove from table and database
    }
}

// Faculty functions
function addFaculty() {
    const name = prompt('Enter faculty name:');
    const department = prompt('Enter department:');
    if (name && department) {
        const table = document.getElementById('facultyTable');
        const rowCount = table.rows.length;
        const row = table.insertRow(rowCount);
        row.innerHTML = `
            <td>${rowCount + 1}</td>
            <td>${name}</td>
            <td>${department}</td>
            <td><button class="btn btn-sm btn-primary" onclick="editFaculty(${rowCount + 1})">Edit</button> <button class="btn btn-sm btn-danger" onclick="deleteFaculty(${rowCount + 1})">Delete</button></td>
        `;
        alert('Faculty added successfully!');
    }
}

function editFaculty(id) {
    alert(`Edit faculty with ID: ${id}`);
}

function deleteFaculty(id) {
    if (confirm('Are you sure you want to delete this faculty member?')) {
        alert(`Faculty with ID ${id} deleted!`);
    }
}

// Courses functions
function addCourse() {
    const code = prompt('Enter course code:');
    const name = prompt('Enter course name:');
    const credits = prompt('Enter credits:');
    if (code && name && credits) {
        const table = document.getElementById('coursesTable');
        const row = table.insertRow(-1);
        row.innerHTML = `
            <td>${code}</td>
            <td>${name}</td>
            <td>${credits}</td>
            <td><button class="btn btn-sm btn-primary" onclick="editCourse('${code}')">Edit</button> <button class="btn btn-sm btn-danger" onclick="deleteCourse('${code}')">Delete</button></td>
        `;
        alert('Course added successfully!');
    }
}

function editCourse(code) {
    alert(`Edit course with code: ${code}`);
}

function deleteCourse(code) {
    if (confirm('Are you sure you want to delete this course?')) {
        alert(`Course ${code} deleted!`);
    }
}

// Add event listener to toggle button
document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.querySelector('.btn-outline-primary');
    if (toggleBtn) {
        toggleBtn.addEventListener('click', toggleSidebar);
    }

    // Add click events to cards
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('click', function() {
            const title = this.querySelector('.card-title').textContent;
            alert(`More details about ${title}`);
        });
    });

    // Sidebar link functionality
    const navLinks = document.querySelectorAll('#desktop-sidebar .nav-link, #sidebar .nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const section = this.getAttribute('href').substring(1);
            showSection(section);
        });
    });

    // Show dashboard by default
    showSection('dashboard');
});