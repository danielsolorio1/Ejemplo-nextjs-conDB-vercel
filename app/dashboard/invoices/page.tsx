import LatestInvoices from "@/app/ui/dashboard/latest-invoices";
import { LatestInvoicesSkeleton } from "@/app/ui/skeletons";
import { Suspense } from "react";

export default function InvoicesPage() {
  return (
    <Suspense fallback={<LatestInvoicesSkeleton />}>
      <LatestInvoices />
    </Suspense>
  );
}
