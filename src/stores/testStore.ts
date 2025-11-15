"use client";

import { create } from "zustand";
import { Test } from "@util/test/types";

interface TestState {
    test: Test | null;
    setTest: (test: Test | null) => void;
}

export const useTestStore = create<TestState>((set) => ({
    test: null,
    setTest: (test: Test | null) => set({ test })
}));