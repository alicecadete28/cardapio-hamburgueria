import { Dialog, DialogContent, DialogFooter, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

export function PopUp() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Adicionar item</Button>
      </DialogTrigger>
      <DialogContent className="text-center">
        <p className="text-lg font-bold">Item adicionado com sucesso!</p>
      </DialogContent>
    </Dialog>
  )
}