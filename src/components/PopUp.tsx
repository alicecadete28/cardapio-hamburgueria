import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
// @ts-expect-error TS(2307): Cannot find module '@/components/ui/button' or its... Remove this comment to see the full error message
import { Button } from "@/components/ui/button";

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
  );
}
