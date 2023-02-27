import create from "zustand";

export const useLoginDataStore = create((set, get) => ({
  isAuthenticated: localStorage.getItem("authToken") ?? false,
  data: {
    email: "optimus.prime@autobots.com",
    password: "validPassword1234!",
  },
  setData: (data) => set((state) => ({ data: data })),
  updateData: (dataToUpdate) =>
    set((state) => ({ data: { ...state.data, ...dataToUpdate } })),
  resetData: () => set((state) => ({ data: {} })),
}));
