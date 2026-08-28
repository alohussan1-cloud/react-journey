import {useState} from "react";


const App = () => {

  const [title, setTitle] = useState("")
  const [descrip, setDescrip] = useState("")
  const [notes, setNotes] = useState([])

  function formHandle(e){
    e.preventDefault()

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
    <div className="min-h-screen bg-[#eef1ff] text-slate-800">
      <div className="flex min-h-screen">

        {/* SIDEBAR */}
        <aside className="hidden md:block w-64 bg-white border-r border-slate-200 p-6">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white">📝</div>
            <h1 className="text-2xl font-bold">Notes App</h1>
          </div>
          <div className="bg-indigo-700 text-white rounded-lg px-4 py-3 flex items-center gap-3 font-medium">📄 Notes</div>
        </aside>


        <main className="flex-1 p-5 md:p-8 lg:p-12">
          <div className="max-w-7xl mx-auto">
            <form onSubmit={(e)=>{
              formHandle(e)
            }}
            className="bg-white rounded-xl shadow-md border border-slate-200 p-6 md:p-6 mb-12">

              <h2 className="text-xl font-bold text-slate-700 mb-5">Add a Note</h2>

              <input type="text" placeholder="Title..." className="w-full border border-slate-200 rounded-lg px-4 py-4 
              outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition"
              value={title}
              onChange={(e)=>{
                  setTitle(e.target.value)
              }}  />

              <textarea placeholder="Description..." className="w-full border border-slate-200 rounded-lg px-4 py-4 
              outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition mt-4"
              value={descrip}
              onChange={(e)=>{
                setDescrip(e.target.value)
              }}></textarea>
              <button type="submit" className="mt-5 ml-auto block bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition">+ Add Note</button>
            </form>

            <div className="mb-5">
              <div className="flex items-center gap-3">
                <span className="text-2xl">📄</span>
                <h2 className="text-2xl font-bold">My Notes</h2>
              </div>
            </div>

              <div className="notes-container flex gap-6 flex-wrap">
              {/* MY NOTES */}
              {notes.map((elem, idx)=>{
                return(
                   <div key={idx} className="flex gap-4 flex-wrap">
                    <div className="bg-white rounded-xl shadow-md border border-slate-200 p-5 w-74 flex flex-col justify-between h-60">
                      <div className="flex flex-col">
                        <h3 className="font-bold text-lg">{elem.title}</h3>
                      <p className="text-sm text-slate-500 leading-6 mt-2">{elem.descrip}</p>
                      </div>

                        <div className="flex gap-2 justify-end">
                          {/* <button type="button" className="text-slate-500 hover:text-indigo-600">✎</button> */}
                          <button
                            type="button"
                            className="px-4 py-2 bg-red-50 text-red-500 font-medium
                            rounded-lg hover:bg-red-500 hover:text-white transition"
                            onClick={()=>{
                              deleteNotes(idx)
                            }}
                          >
                          Delete
                        </button>

                  </div>
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