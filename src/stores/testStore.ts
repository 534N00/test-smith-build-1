"use client";

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Test } from "@util/test/types";

interface TestState {
    test: Test | null;
    setTest: (test: Test) => void;
    clearTest: () => void;
}

export const useTestStore = create<TestState>()(
    persist(
        (set) => ({
            test: null,
            setTest: (test: Test) => set({ test }),
            clearTest: () => set({ test: null })
        }),
        {
            name: 'test-store',
            partialize: (state) => ({ 
                test: state.test,
                testTime: state.test?.timeLimit
            })
        }
    )
);