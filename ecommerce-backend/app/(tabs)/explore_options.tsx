import { IconSymbol } from '@/components/ui/IconSymbol';
import { Stack } from 'expo-router';
import React from 'react';

export const unstable_settings = {
    // Options for the tab
    explore: {
        title: "Explore",
        tabBarIcon: ({ color }: { color: string }) => (
            <IconSymbol size={28} name="paperplane.fill" color={color} />
        )
    }
};
