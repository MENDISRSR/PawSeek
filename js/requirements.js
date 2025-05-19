
  document.addEventListener("DOMContentLoaded", () => {
    const requirements = [
      {
        title: "Minimum Age",
        mandatory: true,
        applicableTo: "All applicants",
        details: "Must be 18+ with valid ID. Required for legal responsibility."
      },
      {
        title: "Safe Home Environment",
        mandatory: true,
        applicableTo: "Dogs, Cats, Others",
        details: "Home should be pet-safe with proper space and shelter."
      },
      {
        title: "Long-Term Commitment",
        mandatory: true,
        applicableTo: "All pets",
        details: "Commit to caring for the pet emotionally and physically."
      },
      {
        title: "Financial Readiness",
        mandatory: true,
        applicableTo: "All adopters",
        details: "Ensure you can afford food, vet care, and emergencies."
      },
      {
        title: "Pet-Friendly Policies",
        mandatory: true,
        applicableTo: "Renters",
        details: "Follow rental agreements regarding pets."
      },
      {
        title: "Pet Experience",
        mandatory: false,
        applicableTo: "Large dogs, exotic pets",
        details: "Experience preferred for first-time owners of active pets."
      },
      {
        title: "Time Availability",
        mandatory: true,
        applicableTo: "Dogs, active pets",
        details: "Need time daily for feeding, walking, grooming, and bonding."
      }
    ];

    const tableBody = document.getElementById("requirements-body");

    requirements.forEach((req, index) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${req.title}</td>
        <td>${req.mandatory ? "✅ Yes" : "🔶 Optional"}</td>
        <td><button class="toggle-btn" onclick="toggleDetails(${index})">Details</button></td>
      `;

      const detailsRow = document.createElement("tr");
      detailsRow.className = "details-row";
      detailsRow.id = `details-${index}`;
      detailsRow.innerHTML = `
        <td colspan="3" class="details-cell">
          <strong>Applicable To:</strong> ${req.applicableTo}<br>
          <strong>Description:</strong> ${req.details}
        </td>
      `;

      tableBody.appendChild(row);
      tableBody.appendChild(detailsRow);
    });
  });

  function toggleDetails(index) {
    const row = document.getElementById(`details-${index}`);
    row.style.display = row.style.display === "table-row" ? "none" : "table-row";
  }

