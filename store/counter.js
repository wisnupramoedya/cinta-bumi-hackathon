import create from "zustand";

const useStore = create((set) => ({
  count: 0,
  addCount: () =>
    set((state) => ({
      count: state.count + 1,
    })),
  removeCount: () =>
    set((state) => ({
      count: state.count >= 1 ? state.count - 1 : 0,
    })),
}));

export const useStoreCounter = useStore;
