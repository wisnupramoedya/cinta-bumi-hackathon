import create from "zustand";

const useStore = create((set) => ({
  drop_offs: [
    {
      value: 1,
      text: "Drop off Point",
      active: false,
    },
    {
      value: 2,
      text: "Dijemput / pickup (min 20 qty)",
      active: false,
    },
    {
      value: 3,
      text: "Dijemput BES yang mengantar paket",
      active: false,
    },
  ],
  setOnlyActiveDropOff: (value) =>
    set((state) => ({
      drop_offs: state.drop_offs.map((item) => {
        if (item.value == value) {
          return {
            ...item,
            active: true,
          };
        } else {
          return { ...item, active: false };
        }
      }),
    })),
}));

export const useStoreDropOff = useStore;
