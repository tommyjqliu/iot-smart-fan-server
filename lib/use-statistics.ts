import { useEffect, useState } from "react";
import { FanStatus } from "./type";
import { queryStatus } from "./query";
import { useDebounceEffect } from "ahooks";

export default function useStatistics(status?: FanStatus) {
    const [statistics, setStatistics] = useState<Partial<FanStatus>[]>([]);

    useDebounceEffect(() => {
        queryStatus().then((res) => setStatistics(res));
    }, [status]);

    return statistics;
}