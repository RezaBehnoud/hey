import { createTrackedSelector } from 'react-tracked';
import { create } from 'zustand';

interface ProfileFeedState {
  mediaFeedFilters: Record<string, boolean>;
  setMediaFeedFilters: (feedEventFilters: Record<string, boolean>) => void;
}

const store = create<ProfileFeedState>((set) => ({
  mediaFeedFilters: { audio: true, images: true, video: true },
  setMediaFeedFilters: (mediaFeedFilters) => set(() => ({ mediaFeedFilters }))
}));

export const useProfileFeedStore = createTrackedSelector(store);
