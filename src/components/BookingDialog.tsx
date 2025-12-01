import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import BookingForm from "./BookingForm";

interface BookingDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const BookingDialog = ({ open, onOpenChange }: BookingDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <VisuallyHidden>
          <DialogTitle>Book Your Free Home Visit</DialogTitle>
          <DialogDescription>Schedule a free consultation</DialogDescription>
        </VisuallyHidden>
        <BookingForm compact />
      </DialogContent>
    </Dialog>
  );
};

export default BookingDialog;
