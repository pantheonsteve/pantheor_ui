import GongCallSummary from "@/components/GongCallSummary";
import StickySidebar from '@/components/StickySidebar';
import { useRouter } from "next/router";
import Link from 'next/link';

export default function Gong() {
    const router = useRouter();
    const { id } = router.query;
    console.log(id);

    if (id) {
        return (
            <div className="d-flex">
            {/* Sidebar */}
            <StickySidebar />

            {/* Main Content */}
            <div
                className="flex-grow-1 p-4"
                style={{ marginLeft: '280px', overflowY: 'scroll' }}
            >
                <GongCallSummary id={id as string} />
            </div>
            </div>
        );
    } else {
        return (
            <div>Please select a Gong call from the list. <Link href="/">Go back to the home page</Link></div>
        );
    }
};
