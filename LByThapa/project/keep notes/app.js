const add = document.getElementById("add");
const notes = document.createElement("div");
  notes.classList.add("container");
//For Save Data
const saveData = ()=>{
  const textAreaData = document.querySelectorAll("textarea");
  const data = [];
  textAreaData.forEach((note)=>{
    return data.push(note.value);
  });

  //to save data in localstorage
  localStorage.setItem('data', JSON.stringify(data));
}
addNewNotes = (text='') => {
  // console.log(notes);
  const htmlData = `
  <div class="content">
    <div class="operation">
      <span id="edit" class="o1"><i class="fa-regular fa-pen-to-square"></i></span>
      <span id="delete" class="o1 o2"><i class="fa-solid fa-trash"></i></span>
    </div>
    <div class="main ${text ? "" : "hidden"}"></div>
    <textarea class="${text ? "hidden" : ""}"></textarea>
  </div>
    `;
    notes.insertAdjacentHTML('afterbegin',htmlData);
    // console.log(notes);

//    Geting the reference
    const content = notes.querySelector('.content');
    const editButton = notes.querySelector('#edit');
    const delButton = notes.querySelector('#delete');
    const main = notes.querySelector('.main');
    main.innerHTML = text;
    const textarea = notes.querySelector('textarea');
  
    //For Notes Delete Operation
    delButton.addEventListener('click',()=>{
        content.remove();
        saveData();
    });

   //toggle using edit button
   editButton.addEventListener('click',()=>{
      main.classList.toggle('hidden');
      textarea.classList.toggle('hidden');
   });

   textarea.addEventListener('change',(event)=>{
    const value = event.target.value;
    main.innerHTML = value;
    saveData();
   })
    document.body.appendChild(notes);
}
//Getting data back to from Localstorage
const data = JSON.parse(localStorage.getItem("data"))
if(data){
  data.forEach((n1)=>{
    addNewNotes(n1);
  })
}
add.addEventListener("click", () => addNewNotes());
