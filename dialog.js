function openDialog(){
    document.getElementById("overlay").style.display = "flex";
  }
  
  function closeDialog(){
    document.getElementById("overlay").style.display = "none";
  }
  
  function saveNote() {
    // Add your code to save the note data here
    alert("Note saved!");
    closeDialog();
  }