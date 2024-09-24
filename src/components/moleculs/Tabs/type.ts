interface TabProps {
	label: string;
	onPress: () => void;
}

interface TabsProps {
	tabs: TabProps[];
}

export type { TabProps, TabsProps };
