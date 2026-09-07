import {useState} from "react";


const App = () => {

  const [title, setTitle] = useState("")
  const [descrip, setDescrip] = useState("")
  const [notes, setNotes] = useState([])
  const [titleErr, settitleErr] = useState("")
  const [descripErr, setdescripErr] = useState("")

  function formHandle(e){
    e.preventDefault()
    
    let valid = true
    if(title.trim() == ""){
      settitleErr("Please enter title")
      valid = false
    } else{
      settitleErr("")
    }
    
    if(descrip.trim() == ""){
      setdescripErr("Please enter description")
      valid = false
    } else {
      setdescripErr("")
    }
    
    if(!valid){
      return
    }
    
    let newNotes = [...notes]
    
    newNotes.push({title, descrip})

    setNotes(newNotes)
    console.log(notes);

    setTitle('')
    setDescrip('')
  }
  
  function deleteNotes(idx){
   let newNotes = [...notes]
    
    newNotes.splice(idx,1)
    setNotes(newNotes)
  }
 
 
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-50 via-slate-50 to-purple-50  text-slate-800">
      <div className="flex min-h-screen">

        {/* SIDEBAR */}
        <aside className="hidden md:block w-64 bg-white border-r border-slate-200 p-6">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white">📝</div>
            <h1 className="text-2xl font-bold">Notes App</h1>
          </div>
          <div className="bg-indigo-700 text-white rounded-lg px-4 py-3 flex items-center gap-3 font-medium">📄 Notes</div>
        </aside>


        <main className="flex-1 p-5 md:p-8 lg:p-8">
          <div className="max-w-7xl mx-auto">
            <form onSubmit={(e)=>{
              formHandle(e)
            }}
            className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg border border-white/70 p-6 mb-12">

             <h2 className="text-2xl font-bold text-slate-800">Create a new note</h2>
              <p className="text-sm text-slate-500 mt-1 mb-6">
                Capture your thoughts, tasks and reminders.
              </p>

              <input type="text" placeholder="Title..." className="w-full border border-slate-200 rounded-lg px-4 py-4 
              outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition"
              value={title}
              onChange={(e)=>{
                  setTitle(e.target.value)
              }}  />

              {titleErr && <p className="text-red-600 ml-2 text-lg" >{titleErr}</p> }

              <textarea placeholder="Description..." className="w-full border border-slate-200 rounded-lg px-4 py-4 
              outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition mt-4"
              value={descrip}
              onChange={(e)=>{
                setDescrip(e.target.value)
              }}></textarea>

              {descripErr && <p className="text-red-600 ml-2 text-lg">{descripErr} </p> }
              <button type="submit" className="mt-5 ml-auto block bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition">+ Add Note</button>
            </form>
               
               <div className="mb-5">
              <div className="flex items-center gap-3">
                <span className="text-2xl">📄</span>
                <h2 className="text-2xl font-bold">My Notes</h2>
              </div>
            </div>  

            {notes.length == 0 && <div className="notes-container flex justify-center items-center h-40">
              <p className="text-2xl text-slate-600">Empty...</p>
            </div>}

              <div className="notes-container flex gap-6 flex-wrap">
              {/* MY NOTES */}
              {notes.map((elem, idx)=>{
                return(
                   <div className="group bg-white rounded-2xl shadow-sm border border-slate-200 p-6 w-80 min-h-64 flex flex-col justify-between hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                  <div>
                    <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
                      NOTE
                    </span>

                    <h3 className="font-bold text-xl mt-5">{elem.title}</h3>

                    <p className="text-slate-600 leading-6 mt-3">
                      {elem.descrip}
                    </p>
                  </div>

                  <div className="flex justify-end mt-6">
                    <button
                      type="button"
                      className="px-4 py-2 bg-red-50 text-red-500 font-medium rounded-lg hover:bg-red-500 hover:text-white transition"
                      onClick={() => deleteNotes(idx)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
            
                )
               
              })}
               </div>
           
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;