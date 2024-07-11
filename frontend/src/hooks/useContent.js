import { create } from "zustand";

const useContent = create((set) => ({
	messages: '',
	setMessages: (messages) => set({ messages }),
}));

export default useContent;