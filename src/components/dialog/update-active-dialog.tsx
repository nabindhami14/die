"use client";

import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { Check, Cross } from "lucide-react";
import { useRouter } from "next/navigation";

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
import { Button } from "@/components/ui/button";
import Loading from "@/components/loading";

const UpdateActiveDialog = ({ provider }: { provider: string }) => {
  const router = useRouter();

  const hitUri = async () => {
    try {
      const res = await axios.patch(
        `http://localhost:5000/api/v1/admin/thirdparty/${provider}`
      );
      return res.data;
    } catch (error) {
      console.log(error, "error");
    }
  };

  const mutation = useMutation({
    mutationFn: hitUri,
    onSuccess: (data) => {
      console.log(data, "response data");
      router.refresh();
    },
    onError: (error) => {
      console.log(error, "error123");
    },
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();

    mutation.mutate();
  };

  if (mutation.isPending) {
    return <Loading />;
  }
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button>Update Active</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you update sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action will update the active property of the provider, this
            will tweak the value of active of the provider.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleSubmit}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default UpdateActiveDialog;
