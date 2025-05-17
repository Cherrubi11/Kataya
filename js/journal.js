const noteInput = document.getElementById("note-input");
const saveBtn = document.getElementById("save-note");
const notesList = document.getElementById("notes-list");

function loadNotes() {
  const notes = JSON.parse(localStorage.getItem("katayaNotes") || "[]");
  notesList.innerHTML = "";
  notes.forEach(note => {
    const div = document.createElement("div");
    div.className = "note";
    div.textContent = note;
    notesList.appendChild(div);
  });
}

saveBtn.addEventListener("click", () => {
  const text = noteInput.value.trim();
  if (!text) return;

  const notes = JSON.parse(localStorage.getItem("katayaNotes") || "[]");
  notes.unshift(text); // newest on top
  localStorage.setItem("katayaNotes", JSON.stringify(notes));
  noteInput.value = "";
  loadNotes();
});

loadNotes();
