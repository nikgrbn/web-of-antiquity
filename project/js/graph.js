// Graph initialization and basic interactions (click, hover)

let network = null;
let nodesDataset = null;
let edgesDataset = null;

function getTypeColor(type) {
  switch (type) {
    case "Ancient Source":
      return { background: "#f6d365", border: "#f6d365" };
    case "Modern Media":
      return { background: "#7f5af0", border: "#7f5af0" };
    case "Trope":
      return { background: "#ff6b6b", border: "#ff6b6b" };
    case "Political Use":
      return { background: "#2ec4b6", border: "#2ec4b6" };
    default:
      return { background: "#ffffff", border: "#ffffff" };
  }
}

window.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("network");

  // Enrich node objects with visual properties and tooltips
  const styledNodes = nodes.map((node) => {
    const color = getTypeColor(node.type);
    return {
      ...node,
      shape: "dot",
      size: 14,
      font: {
        color: "#f5f5f5",
        face: "system-ui",
        size: 14
      },
      color: {
        background: color.background,
        border: color.border,
        highlight: {
          background: color.background,
          border: "#ffffff"
        },
        hover: {
          background: color.background,
          border: "#ffffff"
        }
      },
      title: `<strong>${node.label}</strong><br/><span style="font-size: 11px; opacity: 0.85;">${node.type} · ${node.cluster}</span>`
    };
  });

  // Edge styling
  const styledEdges = edges.map((edge) => ({
    ...edge,
    arrows: "to",
    color: {
      color: "rgba(160, 180, 230, 0.7)",
      highlight: "rgba(255, 255, 255, 0.9)",
      hover: "rgba(230, 235, 255, 0.9)"
    },
    width: 1.2,
    smooth: {
      enabled: true,
      type: "dynamic"
    }
  }));

  nodesDataset = new vis.DataSet(styledNodes);
  edgesDataset = new vis.DataSet(styledEdges);

  const data = {
    nodes: nodesDataset,
    edges: edgesDataset
  };

  const options = {
    physics: {
      enabled: true,
      stabilization: {
        iterations: 120
      },
      barnesHut: {
        gravitationalConstant: -3500,
        centralGravity: 0.25,
        springLength: 150,
        springConstant: 0.03,
        damping: 0.19
      }
    },
    interaction: {
      hover: true,
      tooltipDelay: 80,
      hideEdgesOnDrag: false,
      zoomView: true,
      dragView: true
    },
    edges: {
      selectionWidth: 1.5
    }
  };

  network = new vis.Network(container, data, options);

  // Click to show node info
  network.on("click", (params) => {
    if (params.nodes && params.nodes.length > 0) {
      const nodeId = params.nodes[0];
      if (typeof window.showNodeInfo === "function") {
        window.showNodeInfo(nodeId);
      }
    }
  });

  // Expose for UI module
  window.graphState = {
    network,
    nodesDataset,
    edgesDataset
  };

  // Let UI hook itself up once the graph is ready
  if (typeof window.initUI === "function") {
    window.initUI();
  }
});
