// app.tsx
import { useState } from "react"
import { matchFormSchema } from "./utils/validators"
import { z } from "zod"
import { MatchForm } from "./components/match-form"
import { MatchCard } from "./components/match-card"
import { fakeMatches } from "../src/data/fake-matches"

function App() {
  const [matches, setMatches] = useState<typeof fakeMatches | null>(null)

  function handleSubmit(data: z.infer<typeof matchFormSchema>) {
    // simula uma lógica de afinidade baseada no input
    const enrichedMatches = fakeMatches.map((match) => {
      const randomAffinity = Math.floor(Math.random() * 36) + 60 // 60% a 95%
      return { ...match, affinity: randomAffinity }
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
