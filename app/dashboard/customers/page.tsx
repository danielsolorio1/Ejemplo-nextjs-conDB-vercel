import { fetchCustomers } from "@/app/lib/data";
import CustomersTable from "@/app/ui/customers/table";
import { CustomersSkeleton } from "@/app/ui/skeletons";
import { Suspense } from "react";

export default async function CustomersPage() {
  return (
    <Suspense fallback={<CustomersSkeleton/>}>
      <CustomersTable />
    </Suspense>
  );
}
