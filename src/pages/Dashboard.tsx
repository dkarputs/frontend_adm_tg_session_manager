import React from "react";
import StatsOverview from "../components/StatsOverview";
import Filters from "../components/Filters";
import TableList from "../components/TableList";
import FloatingActionButton from "../components/FloatingActionButton";

const Dashboard: React.FC = () => {
    return (
        <div>
            <StatsOverview />
            <Filters />
            <TableList />
            <FloatingActionButton />
        </div>
    );
}

export default Dashboard;