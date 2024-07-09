import type { Position } from "../data/experiences";

export type PositionItemProps = Position;

export function PositionItem({
	description,
	position,
	startDate,
	endDate,
}: PositionItemProps) {
	return (
		<>
			<h3>{position}</h3>
			<div className="text-sm">{description}</div>
		</>
	);
}
