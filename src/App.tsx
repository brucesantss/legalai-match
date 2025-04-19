// app.tsx
import { useState } from "react"
import { MatchForm } from "./components/match-form"
import { MatchCard } from "./components/match-card"
import { fakeMatches } from "../src/data/fake-matches"

function App() {
  type Match = (typeof fakeMatches)[number] & { affinity: number }
  const [matches, setMatches] = useState<Match[] | null>(null)
  
  function handleSubmit() {
    const enrichedMatches = fakeMatches.map((match) => {
      const randomAffinity = Math.floor(Math.random() * 36) + 60
      return { ...match, affinity: randomAffinity } // ✅ aqui você adiciona affinity
    })
    setMatches(enrichedMatches)
  }

  return (
    <main className="w-screen h-screen flex flex-col items-center justify-center p-4 gap-6">
      <h1 className="text-2xl font-semibold">conexões inteligentes</h1>
      <MatchForm onSubmit={handleSubmit} />
      {matches && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl">
          {matches.map((m, i) => (
            <MatchCard key={i} {...m} />
          ))}
        </div>
      )}
    </main>
  )
}

export default App
