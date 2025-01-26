function addRow() {
    const table = document.getElementById("courses");
    const newRow = table.insertRow();

    newRow.innerHTML = `
        <td><input type="text" placeholder="Course Name"></td>
        <td><input type="number" placeholder="Credit Hours"></td>
        <td>
            <select>
                <option value="4.0">A (4.0)</option>
                <option value="3.75">A- (3.75)</option>
                <option value="3.5">B+ (3.5)</option>
                <option value="3.0">B (3.0)</option>
                <option value="2.5">C+ (2.5)</option>
                <option value="2.0">C (2.0)</option>
                <option value="1.5">D+ (1.5)</option>
                <option value="1.0">D (1.0)</option>
                <option value="0.0">F (0.0)</option>
            </select>
        </td>
        <td><button class="remove-btn" onclick="removeRow(this)">Remove</button></td>
    `;
}

function removeRow(button) {
    const row = button.parentElement.parentElement;
    row.remove();
}

function calculateCGPA() {
    const table = document.getElementById("courses");
    const rows = table.rows;

    let totalCreditHours = 0;
    let totalGradePoints = 0;

    for (let i = 1; i < rows.length; i++) {
        const creditHours = parseFloat(rows[i].cells[1].querySelector("input").value);
        const gradePoints = parseFloat(rows[i].cells[2].querySelector("select").value);

        if (isNaN(creditHours) || isNaN(gradePoints)) {
            alert("Please fill in all fields correctly.");
            return;
        }

        totalCreditHours += creditHours;
        totalGradePoints += creditHours * gradePoints;
    }

    if (totalCreditHours === 0) {
        document.getElementById("result").innerText = "No courses entered. CGPA cannot be calculated.";
        return;
    }

    const cgpa = (totalGradePoints / totalCreditHours).toFixed(2);
    document.getElementById("result").innerText = `Your CGPA is: ${cgpa}`;
}
