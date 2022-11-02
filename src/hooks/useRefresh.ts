import { useCallback } from 'react';
import { QueryKey, useQueryClient } from '@tanstack/react-query';

function useRefresh(queryKey: QueryKey) {
  const queryClient = useQueryClient();

  const refresh = useCallback(async () => {
    await queryClient.resetQueries({ queryKey, exact: true });
  }, [queryClient]);

  return refresh;
}

export default useRefresh;
