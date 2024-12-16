// Helper function to create form input fields
export function createFormInput(labelText, type) {
  const formGroup = document.createElement("div");
  formGroup.classList.add("form-group");

  const label = document.createElement("label");
  label.textContent = labelText;
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
