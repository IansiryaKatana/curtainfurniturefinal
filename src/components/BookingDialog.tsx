import { useRef, useEffect } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import BookingForm from "./BookingForm";
import ScrollProgress from "./ScrollProgress";

interface BookingDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const BookingDialog = ({ open, onOpenChange }: BookingDialogProps) => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent 
        className="max-w-2xl max-h-[90vh] p-0 !flex !flex-col overflow-hidden"
      >
        <div
          ref={contentRef}
          className="overflow-y-auto scrollbar-hide flex-1 relative"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <style>{`
            .scrollbar-hide::-webkit-scrollbar {
              display: none;
            }
          `}</style>
          <ScrollProgress containerRef={contentRef} />
          <div className="p-6">
            <VisuallyHidden>
              <DialogTitle>Book Your Free Home Visit</DialogTitle>
              <DialogDescription>Schedule a free consultation</DialogDescription>
            </VisuallyHidden>
            <BookingForm compact onSuccess={() => onOpenChange(false)} />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookingDialog;
