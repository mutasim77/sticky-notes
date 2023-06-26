import AddSticks from "./components/AddSticks";
import NotesList from "./components/NotesList";

export default function Home() {
  return (
    <main className="max-w-6xl m-auto">
      <h1 className='text-center mt-10 text-5xl'>Sticky Wall 📑</h1>
      <AddSticks />
      <NotesList />
    </main>
  )
}
