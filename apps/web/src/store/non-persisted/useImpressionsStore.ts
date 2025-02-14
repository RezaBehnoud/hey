import type { PublicationViewCount } from '@hey/types/hey';

import getPublicationsViews from '@hey/lib/getPublicationsViews';
import { createTrackedSelector } from 'react-tracked';
import { create } from 'zustand';

interface ImpressionsState {
  fetchAndStoreViews: (ids: string[]) => void;
  publicationViews: PublicationViewCount[];
}

const store = create<ImpressionsState>((set) => ({
  fetchAndStoreViews: async (ids) => {
    if (!ids.length) {
      return;
    }

    const viewsResponse = await getPublicationsViews(ids);
    set((state) => ({
      publicationViews: [...state.publicationViews, ...viewsResponse]
    }));
  },
  publicationViews: []
}));

export const useImpressionsStore = createTrackedSelector(store);
