import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useDeleteFacilityMutation } from "@/redux/features/facility/facilityApi";
import { toast } from "sonner";

const DeleteFacilityModal = ({ facilityId }: { facilityId: string }) => {
  // delete facility
  const [deleteFacility] = useDeleteFacilityMutation();
  const handleDeleteFacility = async (id: string) => {
    toast.loading("Deleting...", { id: "delete" });
    try {
      const res = await deleteFacility(id).unwrap();
      if (res.success) {
        toast.success("Successfully Deleted", { id: "delete" });
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(error?.data?.message, { id: "delete" });
      console.log(error);
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger className="text-sm p-2 hover:bg-muted rounded w-full text-left">
        Delete
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            facility and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={() => handleDeleteFacility(facilityId)}
            className="bg-red-500 text-white hover:bg-red-600"
          >
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteFacilityModal;
