type props = {
  name: string
  description: string
  affinity: number 
}

  
  export function MatchCard({ name, description, affinity }: props) {
    return (
      <div className="border rounded-2xl shadow p-4 space-y-2">
        <div className="font-semibold text-lg">{name}</div>
        <div className="text-sm text-muted-foreground">{description}</div>
        <div className="text-sm mt-2">afinidade: <strong>{affinity}%</strong></div>
      </div>
    )
  }
  