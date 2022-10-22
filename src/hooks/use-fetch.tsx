import { useCallback, useEffect, useState } from "react";

const useFetch = (dataFetcher: () => Promise<any>) => {
    const [data, setData] = useState();
    const [error, setError] = useState<Error | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    const fetchData = useCallback(async () => {
        setError(null);
        setIsLoading(true);

        try {
            setData(await dataFetcher());
        } catch (err) {
            setError(err as Error);
        }

        setIsLoading(false);
    }, [dataFetcher]);

    return {
        fetchData,
        data,
        error,
        isLoading,
    };
};

export default useFetch;
