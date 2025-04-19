import { useForm } from "react-hook-form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

export function MatchForm({ onSubmit }: any) {
  const { register, handleSubmit } = useForm()

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-xl flex flex-col gap-4">
      <div>
        <Label htmlFor="name">nome</Label>
        <Input id="name" {...register("name")} placeholder="ex: ana" />
      </div>
      <div>
        <Label htmlFor="interest">área de interesse</Label>
        <Input id="interest" {...register("interest")} placeholder="ex: direito ambiental" />
      </div>
      <div>
        <Label htmlFor="location">localização</Label>
        <Input id="location" {...register("location")} placeholder="ex: são paulo" />
      </div>
      <Button type="submit">buscar conexões</Button>
    </form>
  )
}
