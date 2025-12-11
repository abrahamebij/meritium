import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Shield } from "lucide-react";

interface VotingConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  candidateId?: string;
}

export function VotingConfirmationModal({
  isOpen,
  onClose,
  candidateId,
}: VotingConfirmationModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-success/10">
            <CheckCircle2 className="h-8 w-8 text-success" />
          </div>
          <DialogTitle className="text-xl">Vote Submitted Successfully!</DialogTitle>
          <DialogDescription className="text-center pt-2">
            Your vote has been submitted securely and anonymously.
          </DialogDescription>
        </DialogHeader>

        <div className="flex items-center justify-center gap-2 py-4 text-sm text-muted-foreground">
          <Shield className="h-4 w-4" />
          <span>Your identity remains protected</span>
        </div>

        {candidateId && (
          <div className="rounded-lg bg-muted p-4 text-center">
            <p className="text-sm text-muted-foreground">You voted for</p>
            <p className="font-semibold text-lg">{candidateId}</p>
          </div>
        )}

        <DialogFooter>
          <Button onClick={onClose} className="w-full">
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
