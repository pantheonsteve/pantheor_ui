import OpportunitySummary from "@/components/OpportunitySummary";
import StickySidebar from '@/components/StickySidebar';
import { useRouter } from "next/router";

export default function Opportunity() {
    const router = useRouter();
    const { id } = router.query;
    console.log(id);

    return id ? (
        <div className="d-flex">
        {/* Sidebar */}
        <StickySidebar />

        {/* Main Content */}
        <div
            className="flex-grow-1 p-4"
            style={{ marginLeft: '280px', overflowY: 'scroll' }}
        >
            <OpportunitySummary id={id as string} />
        </div>
        </div>
    ) : (
        <div>Loading...</div>
    );
};
