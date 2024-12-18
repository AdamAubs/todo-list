// Helper function to create form input fields
export function createFormInput(labelText, type) {
  const formGroup = document.createElement("div");
  formGroup.classList.add("form-group");

  const label = document.createElement("label");
  label.textContent = labelText;
  label.textContent = labelText;
  label.style.color = "black";
  label.style.fontWeight = "bold";
  formGroup.appendChild(label);

  let input;
  if (type === "textarea") {
    input = document.createElement("textarea");
  } else {
    input = document.createElement("input");
    input.type = type;
  }

  formGroup.appendChild(input);

  return formGroup;
}

// Helper function create form input for radio buttons
export function createRadioFormInput(labelText, type) {
  const radioGroup = document.createElement("div");
  radioGroup.classList.add("form-group");

  const label = document.createElement("label");
  label.textContent = labelText;
  label.style.color = "black";
  label.style.fontWeight = "bold";
  radioGroup.appendChild(label);

  // Priority options
  const priorities = [
    { color: "#BFE799", label: "Green (Low)" },
    { color: "#F3F087", label: "Yellow (Medium)" },
    { color: "#E4B5A7", label: "Red (High)" },
  ];

  priorities.forEach((priority) => {
    const priorityOption = document.createElement("label");
    priorityOption.style.color = priority.color;
    priorityOption.style.fontWeight = "bold"; // Makes the text bold

    const radioInput = document.createElement("input");
    radioInput.type = "radio";
    radioInput.name = "priority";
    radioInput.value = priority.color;

    priorityOption.appendChild(radioInput);
    priorityOption.append(`${priority.label}`);
    radioGroup.appendChild(priorityOption);
  });

  return radioGroup;
}
