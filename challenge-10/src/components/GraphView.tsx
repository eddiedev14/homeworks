import ForceGraph2D from "react-force-graph-2d";
import { useGraph } from "../hooks/useGraph";
import { graphToView } from "../utils/utils";

export function GraphView() {
    const { graph } = useGraph();
    const { nodes, links } = graphToView(graph);

    return (
        <ForceGraph2D
            graphData={{ nodes, links }}
            nodeColor={(node: any) => node.color}
            nodeRelSize={8}
            linkColor={() => "#999"}
            width={800}
            height={500}
            nodeCanvasObject={(node: any, ctx, globalScale) => {
                const radius = 12;
                const label = node.label;
                const fontSize = 13 / globalScale;

                // Dibuja el círculo del nodo
                ctx.beginPath();
                ctx.arc(node.x, node.y, radius, 0, 2 * Math.PI);
                ctx.fillStyle = node.color;
                ctx.fill();

                // Dibuja el texto encima del nodo
                ctx.font = `bold ${fontSize}px Sans-Serif`;
                ctx.fillStyle = "#ffffff";
                ctx.textAlign = "center";
                ctx.textBaseline = "middle";
                ctx.fillText(label, node.x, node.y);
            }}
        />
    );
}