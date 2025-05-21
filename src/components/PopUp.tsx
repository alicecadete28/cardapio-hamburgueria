import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
type PopUpProps = {
  onClose: () => void;
};

export function PopUp({ onClose }: PopUpProps) {
  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="text-center">
        <p className="text-lg font-bold">Item adicionado com sucesso!</p>
      </DialogContent>
    </Dialog>
  );
}
